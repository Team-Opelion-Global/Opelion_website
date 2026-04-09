import { NextResponse } from "next/server";
import { sanitizeSlug, getBlogs } from "@/lib/blog-store";
import { promises as fs } from "fs";
import path from "path";
import type { BlogPost } from "@/lib/blogs";

const GITHUB_API = "https://api.github.com";
const OWNER = process.env.GITHUB_OWNER!;
const REPO = process.env.GITHUB_REPO!;
const TOKEN = process.env.GITHUB_TOKEN!;
const BLOGS_PATH = "data/blogs.json";

// Check if running in development mode
const isDev = process.env.NODE_ENV === "development";

async function githubGet(filePath: string) {
  const res = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${filePath}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`GitHub GET failed: ${res.status}`);
  return res.json();
}

async function githubPut(filePath: string, content: string, sha: string, message: string) {
  const res = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${filePath}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, content, sha }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "GitHub PUT failed");
  }
  return res.json();
}

async function githubPutNew(filePath: string, content: string, message: string) {
  const res = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${filePath}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, content }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "GitHub PUT new failed");
  }
  return res.json();
}

// POST /api/admin/blogs
export async function POST(request: Request) {
  try {
    // Auth check
    const token = request.headers.get("x-admin-token");
    if (token !== process.env.BLOG_ADMIN_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug: customSlug, date, category, desc, intro, sections, imageBase64, imageFileName } = body;

    // Validate required fields
    const cleanSections = Array.isArray(sections)
      ? sections.filter((s: { heading?: string; body?: string }) => s.heading?.trim() && s.body?.trim())
      : [];

    if (!title?.trim() || !date?.trim() || !category?.trim() || !desc?.trim() || !intro?.trim() || cleanSections.length === 0) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const slug = sanitizeSlug(customSlug?.trim() || title);

    // Handle development mode (local file system)
    if (isDev) {
      const existingBlogs = await getBlogs();

      if (existingBlogs.some((b) => b.slug === slug)) {
        return NextResponse.json({ error: "A blog with this slug already exists." }, { status: 400 });
      }

      let imgPath = "/images/blog-default.webp";
      if (imageBase64 && imageFileName) {
        const ext = imageFileName.split(".").pop()?.toLowerCase() || "jpg";
        const safeName = `${Date.now()}-${sanitizeSlug(imageFileName.replace(/\.[^/.]+$/, ""))}.${ext}`;
        const imagePath = path.join(process.cwd(), "public", "images", "blogs", safeName);
        
        try {
          // Create directory if it doesn't exist
          const dir = path.dirname(imagePath);
          await fs.mkdir(dir, { recursive: true });
          
          // Convert base64 to buffer and write
          const buffer = Buffer.from(imageBase64, "base64");
          await fs.writeFile(imagePath, buffer);
          imgPath = `/images/blogs/${safeName}`;
        } catch (imgErr) {
          console.error("Image upload failed:", imgErr);
          // Continue without image
        }
      }

      const nextId = existingBlogs.length > 0
        ? Math.max(...existingBlogs.map((b) => b.id)) + 1
        : 1;

      const newPost: BlogPost = {
        id: nextId,
        slug,
        img: imgPath,
        date: date.trim(),
        category: category.trim(),
        title: title.trim(),
        desc: desc.trim(),
        intro: intro.trim(),
        sections: cleanSections,
      };

      const updatedBlogs = [newPost, ...existingBlogs];
      const blogsFilePath = path.join(process.cwd(), "data", "blogs.json");
      await fs.writeFile(blogsFilePath, JSON.stringify(updatedBlogs, null, 2), "utf8");

      return NextResponse.json({ post: newPost }, { status: 201 });
    }

    // Handle production mode (GitHub API)
    let imgPath = "/images/blogs/default.webp";
    if (imageBase64 && imageFileName) {
      const ext = imageFileName.split(".").pop()?.toLowerCase() || "jpg";
      const safeName = `${Date.now()}-${sanitizeSlug(imageFileName.replace(/\.[^/.]+$/, ""))}.${ext}`;
      const githubImgPath = `public/images/blogs/${safeName}`;

      try {
        // Check if file exists
        const existing = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${githubImgPath}`, {
          headers: { Authorization: `Bearer ${TOKEN}`, Accept: "application/vnd.github+json" },
        });
        if (existing.ok) {
          const existingFile = await existing.json();
          await githubPut(githubImgPath, imageBase64, existingFile.sha, `Upload blog image: ${safeName}`);
        } else {
          await githubPutNew(githubImgPath, imageBase64, `Upload blog image: ${safeName}`);
        }
        imgPath = `/images/blogs/${safeName}`;
      } catch (imgErr) {
        console.error("Image upload failed:", imgErr);
        // Continue without image rather than failing the whole post
      }
    }

    // Read current blogs.json
    const blogsFile = await githubGet(BLOGS_PATH);
    const existingBlogs: BlogPost[] = JSON.parse(
      Buffer.from(blogsFile.content, "base64").toString("utf8")
    );

    if (existingBlogs.some((b) => b.slug === slug)) {
      return NextResponse.json({ error: "A blog with this slug already exists." }, { status: 400 });
    }

    const nextId = existingBlogs.length > 0
      ? Math.max(...existingBlogs.map((b) => b.id)) + 1
      : 1;

    const newPost: BlogPost = {
      id: nextId,
      slug,
      img: imgPath,
      date: date.trim(),
      category: category.trim(),
      title: title.trim(),
      desc: desc.trim(),
      intro: intro.trim(),
      sections: cleanSections,
    };

    const updatedBlogs = [newPost, ...existingBlogs];
    const updatedContent = Buffer.from(JSON.stringify(updatedBlogs, null, 2)).toString("base64");

    await githubPut(BLOGS_PATH, updatedContent, blogsFile.sha, `Add blog: ${newPost.title}`);

    return NextResponse.json({ post: newPost }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create blog post.";
    console.error("Blog creation error:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
// import { NextResponse } from "next/server";
// import { sanitizeSlug } from "@/lib/blog-store";
// import type { BlogPost } from "@/lib/blogs";

// type IncomingSection = {
//   heading?: string;
//   body?: string;
// };

// async function getBlogsFromGitHub(): Promise<BlogPost[]> {
//   const res = await fetch(
//     `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/data/blogs.json`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//         Accept: "application/vnd.github+json",
//       },
//     }
//   );
//   if (!res.ok) return [];
//   const file = await res.json();
//   const content = Buffer.from(file.content, "base64").toString("utf8");
//   return JSON.parse(content) as BlogPost[];
// }

// async function saveBlogsToGitHub(blogs: BlogPost[], currentSha: string): Promise<void> {
//   const content = Buffer.from(JSON.stringify(blogs, null, 2)).toString("base64");
//   await fetch(
//     `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/data/blogs.json`,
//     {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//         Accept: "application/vnd.github+json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         message: "Add new blog post via admin",
//         content,
//         sha: currentSha,
//       }),
//     }
//   );
// }

// export async function POST(request: Request) {
//   try {
//     const token = request.headers.get("x-admin-token");
//     const expectedToken = process.env.BLOG_ADMIN_TOKEN || "opelion-admin";

//     if (token !== expectedToken) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const body = await request.json();

//     const sections = Array.isArray(body.sections)
//       ? (body.sections as IncomingSection[])
//           .map((s) => ({ heading: s.heading?.trim() || "", body: s.body?.trim() || "" }))
//           .filter((s) => s.heading && s.body)
//       : [];

//     if (!body.title?.trim() || !body.category?.trim() || !body.date?.trim() ||
//         !body.img?.trim() || !body.desc?.trim() || !body.intro?.trim() || sections.length === 0) {
//       return NextResponse.json({ error: "Missing required blog fields." }, { status: 400 });
//     }

//     // Fetch current blogs.json from GitHub
//     const res = await fetch(
//       `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/data/blogs.json`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//           Accept: "application/vnd.github+json",
//         },
//       }
//     );

//     if (!res.ok) {
//       return NextResponse.json({ error: "Could not read blogs from GitHub." }, { status: 500 });
//     }

//     const file = await res.json();
//     const currentSha = file.sha;
//     const existingBlogs: BlogPost[] = JSON.parse(
//       Buffer.from(file.content, "base64").toString("utf8")
//     );

//     const slug = sanitizeSlug(body.slug?.trim() || body.title);

//     if (existingBlogs.some((b) => b.slug === slug)) {
//       return NextResponse.json({ error: "A blog with this slug already exists." }, { status: 400 });
//     }

//     const nextId = existingBlogs.length > 0
//       ? Math.max(...existingBlogs.map((b) => b.id)) + 1
//       : 1;

//     const newPost: BlogPost = {
//       id: nextId,
//       slug,
//       img: body.img.trim(),
//       date: body.date.trim(),
//       category: body.category.trim(),
//       title: body.title.trim(),
//       desc: body.desc.trim(),
//       intro: body.intro.trim(),
//       sections,
//     };

//     const updatedBlogs = [newPost, ...existingBlogs];
//     const updatedContent = Buffer.from(JSON.stringify(updatedBlogs, null, 2)).toString("base64");

//     // Commit updated blogs.json back to GitHub
//     const putRes = await fetch(
//       `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/data/blogs.json`,
//       {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//           Accept: "application/vnd.github+json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           message: `Add blog: ${newPost.title}`,
//           content: updatedContent,
//           sha: currentSha,
//         }),
//       }
//     );

//     if (!putRes.ok) {
//       const err = await putRes.json();
//       return NextResponse.json({ error: err.message || "GitHub write failed." }, { status: 500 });
//     }

//     return NextResponse.json({ post: newPost }, { status: 201 });

//   } catch (error) {
//     const message = error instanceof Error ? error.message : "Failed to create blog post.";
//     return NextResponse.json({ error: message }, { status: 500 });
//   }
// }

// // import { NextResponse } from "next/server";
// // import { createBlogPost } from "@/lib/blog-store";

// // type IncomingSection = {
// //   heading?: string;
// //   body?: string;
// // };

// // export async function POST(request: Request) {
// //   try {
// //     const body = await request.json();
// //     const token = request.headers.get("x-admin-token");
// //     const expectedToken = process.env.BLOG_ADMIN_TOKEN || "opelion-admin";

// //     if (token !== expectedToken) {
// //       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
// //     }

// //     const sections = Array.isArray(body.sections)
// //       ? (body.sections as IncomingSection[])
// //           .map((section) => ({
// //             heading: section.heading?.trim() || "",
// //             body: section.body?.trim() || "",
// //           }))
// //           .filter((section) => section.heading && section.body)
// //       : [];

// //     if (
// //       !body.title?.trim() ||
// //       !body.category?.trim() ||
// //       !body.date?.trim() ||
// //       !body.img?.trim() ||
// //       !body.desc?.trim() ||
// //       !body.intro?.trim() ||
// //       sections.length === 0
// //     ) {
// //       return NextResponse.json(
// //         { error: "Missing required blog fields." },
// //         { status: 400 }
// //       );
// //     }

// //     const post = await createBlogPost({
// //       title: body.title.trim(),
// //       slug: body.slug?.trim() || "",
// //       img: body.img.trim(),
// //       date: body.date.trim(),
// //       category: body.category.trim(),
// //       desc: body.desc.trim(),
// //       intro: body.intro.trim(),
// //       sections,
// //     });

// //     return NextResponse.json({ post }, { status: 201 });
// //   } catch (error) {
// //     const message =
// //       error instanceof Error ? error.message : "Failed to create blog post.";
// //     return NextResponse.json({ error: message }, { status: 500 });
// //   }
// // }
