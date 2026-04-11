import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareChip from "@/components/ShareChip";
import { getBlogBySlug, getBlogs } from "@/lib/blog-store";
import { normalizeTopic } from "@/lib/blog-topics";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.intro,
    openGraph: {
      title: post.title,
      description: post.intro,
      images: [
        {
          url: post.img,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      authors: ["Opelion Team"],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.intro,
      images: [post.img],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  const allBlogs = await getBlogs();

  if (!post) return notFound();

  const moreArticles = allBlogs.filter((blog) => blog.slug !== post.slug).slice(0, 3);
  const topics = Array.from(
    new Set([post.category, "Trade", "Exports", "Market Insights", "Sustainability", "Sourcing"])
  );

  return (
    <main className="bg-[#f5f3ef]">
      <Navbar />

      <section className="pt-14 pb-16">
        <div className="mx-auto max-w-[1880px] px-2 md:px-4">
          <div className="overflow-hidden rounded-[34px] border border-[#e6dfd2] bg-white shadow-sm">
            <div className="relative flex min-h-[280px] items-center overflow-hidden md:min-h-[360px]">
              <Image
                src={post.img}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,75,90,0.92)_0%,rgba(31,107,122,0.82)_34%,rgba(31,107,122,0.45)_52%,rgba(31,107,122,0.12)_68%,rgba(31,107,122,0)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(199,154,43,0.18),_transparent_32%)]" />

              <div className="relative z-10 max-w-4xl px-8 py-10 md:px-14 md:py-12">
                <div className="mb-6 text-sm text-[#f0d48a]">
                  <Link href="/blog" className="transition hover:text-[#124b5a]">
                    ← Blog
                  </Link>
                  <span className="mx-2">/</span>
                  <span className="inline-block max-w-[75%] align-bottom line-clamp-1">
                    {post.title}
                  </span>
                </div>

                <div className="mb-6 inline-flex rounded-md border border-[#e7d7b8]/70 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#f0d48a] backdrop-blur-sm">
                  {post.category}
                </div>

                <h1 className="mb-6 max-w-4xl font-serif text-[2.35rem] leading-[1.08] text-white md:text-[3.8rem]">
                  {post.title}
                </h1>

                <div className="mb-8 h-[3px] w-12 rounded-full bg-[#c79a2b]" />

                <div className="flex flex-wrap items-center gap-5 text-sm text-[#f0d48a]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9c7a1]/70 text-xs font-semibold text-white">
                    OT
                  </div>
                  <span className="text-white">Opelion Team</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1.62fr)_minmax(280px,0.38fr)]">
              <article className="px-8 py-10 md:px-14">
                <div className="space-y-7 text-[#5d4334]">
                  <p className="text-[16px] leading-9 text-[#4f4b45] md:text-[17px]">
                    {post.intro}
                  </p>

                  {post.sections.map((section, index) => (
                    <section key={section.heading} className="space-y-4">
                      <h2 className="text-[1.55rem] font-semibold text-[#124b5a]">
                        Step {index + 1}: {section.heading}
                      </h2>
                      <p className="text-[16px] leading-9 text-[#4f4b45] md:text-[17px]">
                        {section.body}
                      </p>
                    </section>
                  ))}

                  <div className="pt-5">
                    <p className="mb-2 font-serif text-[2rem] leading-tight text-[#124b5a]">
                      Opelion Global
                    </p>
                    <p className="text-[0.95rem] font-medium uppercase tracking-[0.14em] text-[#c79a2b]">
                      Where Quality Meets Trust
                    </p>
                  </div>

                  <div className="border-t border-[#e7d7b8] pt-8">
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      <span className="mr-2 text-xs uppercase tracking-[0.28em] text-[#c79a2b]">
                        Share
                      </span>
                      <ShareChip label="LinkedIn" title={post.title} />
                      <ShareChip label="Twitter" title={post.title} />
                      <ShareChip label="WhatsApp" title={post.title} />
                    </div>

                    <Link
                      href="/blog"
                      className="inline-flex items-center text-[#8c5c38] transition hover:text-[#124b5a]"
                    >
                      ← All Articles
                    </Link>
                  </div>
                </div>
              </article>

              <aside className="border-l border-[#e6dfd2] bg-[#f8f6f1] px-6 py-10 xl:px-7">
                <div className="sticky top-24 space-y-10">
                  <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c79a2b]">
                      Partner With Us
                    </p>
                    <div className="rounded-[18px] border border-[#d9c7a1] bg-white px-5 py-6 shadow-sm">
                      <h3 className="mb-3 font-serif text-[1.65rem] leading-tight text-[#124b5a]">
                        Opelion Global
                      </h3>
                      <p className="mb-5 text-[15px] leading-7 text-[#5d4334]">
                        Premium Indian agro products delivered to global markets with quality and trust.
                      </p>
                      <a
                        href="mailto:sales@opelionglobal.com?subject=Partnership Inquiry - Opelion Global&body=Hello Opelion Global,%0D%0A%0D%0AI am interested in partnering with your company for premium agro products.%0D%0A%0D%0APlease provide more information about:%0D%0A- Your product offerings%0D%0A- Pricing and MOQ (Minimum Order Quantity)%0D%0A- Delivery timelines%0D%0A- Payment terms%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest regards,"
                        className="inline-block rounded-lg bg-[#124b5a] px-5 py-3 font-semibold text-white transition hover:bg-[#0f3f4b]"
                      >
                        Get in Touch
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c79a2b]">
                      Topics
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {topics.map((topic) => (
                        <Link
                          key={topic}
                          href={`/blog?topic=${encodeURIComponent(topic)}`}
                          className={`rounded-lg border bg-white px-3 py-2 text-sm shadow-[0_4px_10px_rgba(18,75,90,0.04)] transition hover:border-[#c79a2b] hover:text-[#8c5c38] ${
                            normalizeTopic(topic) === normalizeTopic(post.category)
                              ? "border-[#c79a2b] text-[#8c5c38]"
                              : "border-[#e7d7b8] text-[#124b5a]"
                          }`}
                        >
                          {topic}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c79a2b]">
                      More Articles
                    </p>
                    <div className="space-y-4">
                      {moreArticles.map((article) => (
                        <Link
                          key={article.slug}
                          href={`/blog/${article.slug}`}
                          className="block text-[#124b5a] transition hover:text-[#c79a2b]"
                        >
                          {article.title} →
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
