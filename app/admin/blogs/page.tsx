"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Verify token by making a test request
    const res = await fetch("/api/admin/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-token": password },
      body: JSON.stringify({ _test: true }),
    });

    // 400 = auth passed but missing fields (expected), 401 = wrong password
    if (res.status === 401) {
      setError("Incorrect password. Please try again.");
      setLoading(false);
      return;
    }

    // Store token in sessionStorage and redirect
    sessionStorage.setItem("blog_admin_token", password);
    router.push("/admin/blogs/new");
  }

  return (
    <main className="min-h-screen bg-[#f5f3ef] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c79a2b] uppercase mb-3">
            Opelion Global
          </p>
          <h1 className={`${playfair.className} text-4xl text-[#124b5a] mb-2`}>
            Admin Portal
          </h1>
          <p className="text-sm text-gray-500">Sign in to publish blog posts</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-[24px] border border-[#e7d7b8] shadow-sm p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#124b5a] mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-[14px] border border-[#e7d7b8] bg-[#fffaf1] px-4 py-3 text-[#124b5a] outline-none focus:border-[#c79a2b] transition"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-[#124b5a] text-white py-3 rounded-full font-semibold hover:bg-[#0f3f4b] transition disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

// import BlogAdminForm from "@/components/BlogAdminForm";
// import { getBlogs } from "@/lib/blog-store";

// export default async function AdminBlogsPage() {
//   const blogs = await getBlogs();

//   return (
//     <main className="min-h-screen bg-[#f7f2e8] py-14">
//       <div className="max-w-6xl mx-auto px-6 space-y-8">
//         <section className="bg-white rounded-[24px] border border-[#d9c7a1] shadow-sm p-6 md:p-8">
//           <p className="text-sm uppercase tracking-[0.28em] text-[#c79a2b] mb-3">
//             Admin
//           </p>
//           <h1 className="text-4xl font-serif text-[#124b5a] mb-3">
//             Blog Publisher
//           </h1>
//           <p className="text-gray-600 max-w-3xl leading-relaxed">
//             Publish blog posts from a form instead of editing code manually. Set
//             `BLOG_ADMIN_TOKEN` in your environment for proper protection before
//             using this in production.
//           </p>
//         </section>

//         <BlogAdminForm />

//         <section className="bg-white rounded-[24px] border border-[#d9c7a1] shadow-sm p-6 md:p-8">
//           <h2 className="text-2xl font-serif text-[#124b5a] mb-5">
//             Existing Posts
//           </h2>
//           <div className="space-y-4">
//             {blogs.map((blog) => (
//               <div
//                 key={blog.id}
//                 className="rounded-[18px] border border-[#e7d7b8] bg-[#fffaf1] p-4"
//               >
//                 <p className="text-xs uppercase tracking-[0.25em] text-[#c79a2b] mb-2">
//                   {blog.category}
//                 </p>
//                 <h3 className="text-xl font-serif text-[#124b5a] mb-1">
//                   {blog.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-2">
//                   /blog/{blog.slug}
//                 </p>
//                 <p className="text-gray-600">{blog.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }
