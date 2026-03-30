// // // import { Card, CardContent } from "@/components/ui/card";
// // // import { Calendar, ChevronRight } from "lucide-react";
// // // // import { Link } from "wouter";
// // // import Link from "next/link";

// // // import blog1 from "@/public/images/blog1.webp";
// // // import blog2 from "@/public/images/blog2.webp";
// // // import blog3 from "@/public/images/blog3.webp";

// // // export default function BlogPreview() {
// // //   const blogs = [
// // //     {
// // //       id: 1,
// // //       img: blog1,
// // //       date: "March 15, 2026",
// // //       title: "Global Quinoa Demand: What Importers Need to Know in 2026",
// // //     },
// // //     {
// // //       id: 2,
// // //       img: blog2,
// // //       date: "February 28, 2026",
// // //       title: "Understanding Export Grade Quinoa: The Sorting Process",
// // //     },
// // //     {
// // //       id: 3,
// // //       img: blog3,
// // //       date: "February 10, 2026",
// // //       title: "Sustainable Farming Practices in Indian Quinoa Production",
// // //     },
// // //   ];

// // //   return (
// // //     <section className="py-24 bg-[#F7F9FB]">
// // //       <div className="container mx-auto px-4">
        
// // //         {/* Heading */}
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl font-extrabold text-[#2A2A2A] mb-4">
// // //             Insights & Articles
// // //           </h2>
// // //           <p className="text-gray-600 max-w-xl mx-auto">
// // //             Latest updates on global trade, agriculture, and export strategies.
// // //           </p>
// // //         </div>

// // //         {/* Cards */}
// // //         <div className="grid md:grid-cols-3 gap-10">
// // //           {blogs.map((blog) => (
// // //             <Card key={blog.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
// // //               <img src={blog.img} className="h-56 w-full object-cover" />
// // //               <CardContent className="p-6">
// // //                 <div className="flex items-center text-sm text-gray-500 mb-3">
// // //                   <Calendar className="h-4 w-4 mr-2" />
// // //                   {blog.date}
// // //                 </div>

// // //                 <h3 className="font-bold text-lg mb-4 line-clamp-2">
// // //                   {blog.title}
// // //                 </h3>

// // //                 <Link href="/blog">
// // //                   <div className="flex items-center text-[#1F7A8C] font-semibold cursor-pointer">
// // //                     Read More <ChevronRight className="ml-1 h-4 w-4" />
// // //                   </div>
// // //                 </Link>
// // //               </CardContent>
// // //             </Card>
// // //           ))}
// // //         </div>

// // //         {/* View All Button */}
// // //         <div className="text-center mt-12">
// // //           <Link href="/blog">
// // //             <button className="bg-[#1F7A8C] text-white px-6 py-3 rounded-full font-bold hover:bg-[#145B66] transition">
// // //               View All Articles →
// // //             </button>
// // //           </Link>
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }
// import { Card, CardContent } from "@/components/ui/card";
// import { Calendar, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { getBlogs } from "@/lib/blog-store";

// export default async function BlogPage() {
//   const blogs = await getBlogs();

//   return (
//     <div
//       id="blog"
//       className="min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/about-texture1.webp')" }}
//     >
//       {/* HEADER */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

//           {/* LEFT */}
//           <div>
//             <p className="text-sm font-semibold tracking-widest text-[#F2B632] mb-3">
//               MARKET INSIGHTS
//             </p>

//             <h1 className="text-4xl font-extrabold text-[#1F7A8C]">
//               Latest News & Blogs
//             </h1>
//           </div>

//           {/* RIGHT */}
//           <Link
//   href="/blog"
//   className="border border-[#1F7A8C] text-[#1F7A8C] px-6 py-2 rounded-md font-medium hover:bg-[#1F7A8C] hover:text-white transition"
// >
//   View All Posts →
// </Link>

//         </div>
//       </section>

//       {/* BLOG GRID */}
//       <section className="pb-24">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {blogs.map((blog) => (
//               <Card
//                 key={blog.id}
//                 className="group relative rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition bg-white"
//               >
//                 <Link
//                   href={`/blog/${blog.slug}`}
//                   aria-label={blog.title}
//                   className="absolute inset-0 z-20"
//                 />

//                 {/* IMAGE */}
//                 <div className="relative h-[220px] w-full overflow-hidden">
//                   <Image
//                     src={blog.img}
//                     alt={blog.title}
//                     fill
//                     className="object-cover transition duration-500 group-hover:scale-105"
//                   />

//                   {/* CATEGORY */}
//                   <div className="absolute top-4 left-4 z-30 bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#1F7A8C] shadow-sm">
//                     {blog.category}
//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <CardContent className="relative z-10 p-5">

//                   {/* DATE */}
//                   <div className="flex items-center text-[12px] text-gray-500 mb-2" style={{ paddingTop: '10px' }}>
//                     <Calendar className="h-4 w-4 mr-2" />
//                     {blog.date}
//                   </div>

//                   {/* TITLE */}
//                   <h3 className="font-semibold text-[16px] text-[#1A1A1A] mb-2 leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-[#F2B632]">
//                     {blog.title}
//                   </h3>

//                   {/* DESCRIPTION */}
//                   <p className="text-gray-600 text-[14px] mb-3 leading-relaxed line-clamp-2" style={{ marginBottom: '10px' }}>
//                     {blog.desc}
//                   </p>

//                   {/* CTA */}
//                   <div className="inline-flex items-center text-[#1F7A8C] text-[13px] font-medium transition group-hover:text-[#F2B632]">
//                     Read Article
//                     <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </div>

//                 </CardContent>

//               </Card>
//             ))}

//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }




// import { Card, CardContent } from "@/components/ui/card";
// import { Calendar, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { getBlogs } from "@/lib/blog-store";

// export default async function BlogPage() {
//   const blogs = await getBlogs();

//   return (
//     <div
//       id="blog"
//       className="min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/about-texture1.webp')" }}
//     >
//       {/* HEADER */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

//           {/* LEFT */}
//           <div>
//             <p className="text-sm font-semibold tracking-widest text-[#F2B632] mb-3">
//               MARKET INSIGHTS
//             </p>

//             <h1 className="text-4xl font-extrabold text-[#1F7A8C]">
//               Latest News & Blogs
//             </h1>
//           </div>

//           {/* RIGHT */}
//           <Link
//   href="/blog"
//   className="border border-[#1F7A8C] text-[#1F7A8C] px-6 py-2 rounded-md font-medium hover:bg-[#1F7A8C] hover:text-white transition"
// >
//   View All Posts →
// </Link>

//         </div>
//       </section>

//       {/* BLOG GRID */}
//       <section className="pb-24">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {blogs.map((blog) => (
//               <Card
//                 key={blog.id}
//                 className="group relative rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition bg-white"
//               >
//                 <Link
//                   href={`/blog/${blog.slug}`}
//                   aria-label={blog.title}
//                   className="absolute inset-0 z-20"
//                 />

//                 {/* IMAGE */}
//                 <div className="relative h-[220px] w-full overflow-hidden">
//                   <Image
//                     src={blog.img}
//                     alt={blog.title}
//                     fill
//                     className="object-cover transition duration-500 group-hover:scale-105"
//                   />

//                   {/* CATEGORY */}
//                   <div className="absolute top-4 left-4 z-30 bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#1F7A8C] shadow-sm">
//                     {blog.category}
//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <CardContent className="relative z-10 p-5">

//                   {/* DATE */}
//                   <div className="flex items-center text-[12px] text-gray-500 mb-2" style={{ paddingTop: '10px' }}>
//                     <Calendar className="h-4 w-4 mr-2" />
//                     {blog.date}
//                   </div>

//                   {/* TITLE */}
//                   <h3 className="font-semibold text-[16px] text-[#1A1A1A] mb-2 leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-[#F2B632]">
//                     {blog.title}
//                   </h3>

//                   {/* DESCRIPTION */}
//                   <p className="text-gray-600 text-[14px] mb-3 leading-relaxed line-clamp-2" style={{ marginBottom: '10px' }}>
//                     {blog.desc}
//                   </p>

//                   {/* CTA */}
//                   <div className="inline-flex items-center text-[#1F7A8C] text-[13px] font-medium transition group-hover:text-[#F2B632]">
//                     Read Article
//                     <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </div>

//                 </CardContent>

//               </Card>
//             ))}

//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }











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









