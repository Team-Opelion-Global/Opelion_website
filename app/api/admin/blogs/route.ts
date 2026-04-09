import { NextResponse } from "next/server";
import { sanitizeSlug } from "@/lib/blog-store";
import type { BlogPost } from "@/lib/blogs";

type IncomingSection = {
  heading?: string;
  body?: string;
};

async function getBlogsFromGitHub(): Promise<BlogPost[]> {
  const res = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/data/blogs.json`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    }
  );
  if (!res.ok) return [];
  const file = await res.json();
  const content = Buffer.from(file.content, "base64").toString("utf8");
  return JSON.parse(content) as BlogPost[];
}

async function saveBlogsToGitHub(blogs: BlogPost[], currentSha: string): Promise<void> {
  const content = Buffer.from(JSON.stringify(blogs, null, 2)).toString("base64");
  await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/data/blogs.json`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Add new blog post via admin",
        content,
        sha: currentSha,
      }),
    }
  );
}

export async function POST(request: Request) {
  try {
    const token = request.headers.get("x-admin-token");
    const expectedToken = process.env.BLOG_ADMIN_TOKEN || "opelion-admin";

    if (token !== expectedToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    const sections = Array.isArray(body.sections)
      ? (body.sections as IncomingSection[])
          .map((s) => ({ heading: s.heading?.trim() || "", body: s.body?.trim() || "" }))
          .filter((s) => s.heading && s.body)
      : [];

    if (!body.title?.trim() || !body.category?.trim() || !body.date?.trim() ||
        !body.img?.trim() || !body.desc?.trim() || !body.intro?.trim() || sections.length === 0) {
      return NextResponse.json({ error: "Missing required blog fields." }, { status: 400 });
    }

    // Fetch current blogs.json from GitHub
    const res = await fetch(
      `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/data/blogs.json`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Could not read blogs from GitHub." }, { status: 500 });
    }

    const file = await res.json();
    const currentSha = file.sha;
    const existingBlogs: BlogPost[] = JSON.parse(
      Buffer.from(file.content, "base64").toString("utf8")
    );

    const slug = sanitizeSlug(body.slug?.trim() || body.title);

    if (existingBlogs.some((b) => b.slug === slug)) {
      return NextResponse.json({ error: "A blog with this slug already exists." }, { status: 400 });
    }

    const nextId = existingBlogs.length > 0
      ? Math.max(...existingBlogs.map((b) => b.id)) + 1
      : 1;

    const newPost: BlogPost = {
      id: nextId,
      slug,
      img: body.img.trim(),
      date: body.date.trim(),
      category: body.category.trim(),
      title: body.title.trim(),
      desc: body.desc.trim(),
      intro: body.intro.trim(),
      sections,
    };

    const updatedBlogs = [newPost, ...existingBlogs];
    const updatedContent = Buffer.from(JSON.stringify(updatedBlogs, null, 2)).toString("base64");

    // Commit updated blogs.json back to GitHub
    const putRes = await fetch(
      `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/data/blogs.json`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Add blog: ${newPost.title}`,
          content: updatedContent,
          sha: currentSha,
        }),
      }
    );

    if (!putRes.ok) {
      const err = await putRes.json();
      return NextResponse.json({ error: err.message || "GitHub write failed." }, { status: 500 });
    }

    return NextResponse.json({ post: newPost }, { status: 201 });

  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create blog post.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// import { NextResponse } from "next/server";
// import { createBlogPost } from "@/lib/blog-store";

// type IncomingSection = {
//   heading?: string;
//   body?: string;
// };

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const token = request.headers.get("x-admin-token");
//     const expectedToken = process.env.BLOG_ADMIN_TOKEN || "opelion-admin";

//     if (token !== expectedToken) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const sections = Array.isArray(body.sections)
//       ? (body.sections as IncomingSection[])
//           .map((section) => ({
//             heading: section.heading?.trim() || "",
//             body: section.body?.trim() || "",
//           }))
//           .filter((section) => section.heading && section.body)
//       : [];

//     if (
//       !body.title?.trim() ||
//       !body.category?.trim() ||
//       !body.date?.trim() ||
//       !body.img?.trim() ||
//       !body.desc?.trim() ||
//       !body.intro?.trim() ||
//       sections.length === 0
//     ) {
//       return NextResponse.json(
//         { error: "Missing required blog fields." },
//         { status: 400 }
//       );
//     }

//     const post = await createBlogPost({
//       title: body.title.trim(),
//       slug: body.slug?.trim() || "",
//       img: body.img.trim(),
//       date: body.date.trim(),
//       category: body.category.trim(),
//       desc: body.desc.trim(),
//       intro: body.intro.trim(),
//       sections,
//     });

//     return NextResponse.json({ post }, { status: 201 });
//   } catch (error) {
//     const message =
//       error instanceof Error ? error.message : "Failed to create blog post.";
//     return NextResponse.json({ error: message }, { status: 500 });
//   }
// }
