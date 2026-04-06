import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/lib/blog-store";
import { Playfair_Display } from "next/font/google";

// ✅ Font (works in server components too)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div
      id="blog"
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/about-texture1.webp')" }}
    >
      {/* HEADER */}
      <section className="py-14 md:py-16 lg:py-14">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold tracking-widest text-[#D4AF37] mb-1.5 md:mb-2">
              MARKET INSIGHTS
            </p>

            <h1
              className={`${playfair.className} text-[2rem] md:text-[2.75rem] font-semibold tracking-[0.02em] leading-[1.25] md:leading-[1.18] text-[#1f6b7a]`}
            >
              Latest News & Blogs
            </h1>
          </div>

          <Link
            href="/blog"
            className="mt-[110px] self-start rounded-md border border-[#1f6b7a] px-2.5 py-1 text-[13px] font-medium text-[#1f6b7a] transition hover:bg-[#1f6b7a] hover:text-white md:mt-[110px] md:px-4 md:py-1.5 md:text-sm lg:mt-0 lg:px-5 lg:py-2 lg:text-base"
          >
            View All Posts →
          </Link>

        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pb-14 md:pb-16 lg:pb-8 -mt-3 md:-mt-3 lg:-mt-4">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (
              <Card
                key={blog.id}
                className="group relative rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition bg-white"
              >
                <Link
                  href={`/blog/${blog.slug}`}
                  className="absolute inset-0 z-20"
                />

                {/* IMAGE */}
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-4 left-4 z-30 bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#1f6b7a] shadow-sm">
                    {blog.category}
                  </div>
                </div>

                {/* CONTENT */}
                <CardContent className="relative z-10 p-5">

                  <div className="flex items-center text-[12px] text-gray-500 mb-2 pt-[10px]">
                    <Calendar className="h-4 w-4 mr-2" />
                    {blog.date}
                  </div>

                  <h3 className="font-semibold text-[16px] text-[#1A1A1A] mb-2 leading-snug line-clamp-2 group-hover:text-[#D4AF37] transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-[14px] mb-3 leading-relaxed line-clamp-2">
                    {blog.desc}
                  </p>

                  <div className="inline-flex items-center text-[#1f6b7a] text-[13px] font-medium group-hover:text-[#D4AF37] transition">
                    Read Article
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
                  </div>

                </CardContent>
              </Card>
            ))}

          </div>

        </div>
      </section>
    </div>
  );
}









