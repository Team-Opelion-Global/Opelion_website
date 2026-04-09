import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });

type PageItem = {
  title: string;
  description: string;
  href: string;
  icon?: string;
};

const pages: PageItem[] = [
  {
    title: "Quinoa Exporter",
    description: "Specialized sourcing and export solutions for premium quinoa to international markets.",
    href: "#",
  },
  {
    title: "Agro Products Exporter",
    description: "Comprehensive export services for diverse agricultural products with quality assurance.",
    href: "#",
  },
  {
    title: "About Us",
    description: "Learn about Opelion Global's mission, vision, and commitment to quality in agro exports.",
    href: "/about",
  },
  {
    title: "Our Products",
    description: "Explore our premium range of agricultural products including Quinoa, Toor Dal, Masoor Dal, and more.",
    href: "/products",
  },
  {
    title: "Blog & Insights",
    description: "Access market trends, quality standards, and industry insights for importers and traders.",
    href: "/blog",
  },
  {
    title: "Our Locations",
    description: "Discover our processing facilities and distribution centers across India.",
    href: "/locations",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team for inquiries, partnerships, and export opportunities.",
    href: "/contact",
  },
];

export default function PagesDirectory() {
  return (
    <section className="py-20 px-6 bg-[#f5f3ef]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest text-[#c79a2b] mb-3 uppercase">
            Explore
          </p>
          <h2 className={`${playfair.className} text-4xl font-bold text-[#124b5a] mb-4`}>
            Browse Our Pages
          </h2>
          <p className="text-gray-600 text-lg">
            Discover everything Opelion Global offers - from products to insights and contact information.
          </p>
        </div>

        {/* Pages List */}
        <div className="space-y-0 border border-[#e6dfd2] rounded-[24px] overflow-hidden bg-white shadow-sm">
          {pages.map((page, index) => (
            <Link key={index} href={page.href}>
              <div
                className={`p-6 md:p-7 border-b border-[#f0e8d8] hover:bg-[#fffaf1] transition cursor-pointer flex items-center justify-between group ${
                  index === pages.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-[#124b5a] group-hover:text-[#c79a2b] transition mb-2">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">{page.description}</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-[#c79a2b] group-hover:translate-x-1 transition transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
