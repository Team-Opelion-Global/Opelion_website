import { getProductByRouteSlug, getProductHref, getProductRouteSlug } from "@/lib/products";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProductPageArt from "@/components/ProductPageArt";
import Footer from "@/components/Footer";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductByRouteSlug(slug);

  if (!product) return notFound();
  const canonicalSlug = getProductRouteSlug(product.slug);

  if (slug !== canonicalSlug) {
    redirect(getProductHref(product.slug));
  }

  return (
    <main className="bg-[#f7f2e8]">
      <Navbar />
      <section className="relative overflow-hidden pt-14 pb-16">
      <ProductPageArt />
      <div className="max-w-6xl mx-auto px-6 space-y-6 relative z-10">
        <div className="relative overflow-hidden rounded-[28px] bg-[#1a120c] text-white shadow-lg min-h-[240px] md:min-h-[290px] flex items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full scale-[1.1] object-cover object-center"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,75,90,0.92)_0%,rgba(31,107,122,0.82)_34%,rgba(31,107,122,0.45)_52%,rgba(31,107,122,0.12)_68%,rgba(31,107,122,0)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(215,177,76,0.2),_transparent_30%)]" />

          <div className="relative z-10 max-w-3xl px-8 md:px-12 py-8">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#f0d48a]">
              {product.category}
            </p>
            <h1 className="mb-3 text-4xl md:text-[2.8rem] font-serif leading-tight">
              {product.name}
            </h1>
            <p className="max-w-2xl text-[15px] md:text-base leading-relaxed text-white/85">
              Premium export-quality {product.name.toLowerCase()} sourced and packed
              for international buyers who value consistency, presentation, and reliable supply.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-6 items-start">
          <div className="rounded-[24px] overflow-hidden shadow-lg bg-white border border-[#d9c7a1] lg:mt-10">
            <Image
              src={product.image}
              alt={product.name}
              width={900}
              height={700}
              className="w-full h-[240px] md:h-[320px] object-cover"
            />
          </div>

          <div className="pt-1">
            <p className="text-sm tracking-[0.35em] uppercase text-[#c79a2b] mb-2">
              {product.category}
            </p>
            <h1 className="text-[2rem] md:text-[2.35rem] font-serif text-[#124b5a] mb-2">
              {product.name}
            </h1>
            <p className="text-lg md:text-[1.3rem] text-[#1f6b7a] font-medium mb-3 leading-snug">
              {product.shortDescription}
            </p>
            <p className="text-gray-600 mb-5 leading-8 text-[16px] md:text-[17px]">
              {product.overview} This product is prepared with close attention to cleanliness, export presentation, and dependable bulk supply requirements for international buyers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-block rounded-full bg-[#124b5a] px-6 py-3 text-white transition hover:bg-[#0f3f4b]"
              >
                {"<"} Back
              </Link>
              <Link
                href="/#contact"
                className="inline-block bg-[#124b5a] text-white px-6 py-3 rounded-full hover:bg-[#0f3f4b] transition"
              >
                Request Quote →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.28fr_0.72fr] gap-5 items-stretch">
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#d9c7a1]">
            <h2 className="text-2xl md:text-[1.85rem] font-serif text-[#124b5a] mb-4">
              Product Specifications
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <SpecItem label="Country of Origin" value={product.specs.origin} />
              <SpecItem label="Color" value={product.specs.color} />
              <SpecItem label="Specification" value={product.specs.specification} />
              <SpecItem label="GMO Status" value={product.specs.gmoStatus} />
              <SpecItem
                label="Packaging"
                value={product.specs.packaging}
                className="sm:col-span-2"
              />
              <SpecItem
                label="Shelf Life"
                value={product.specs.shelfLife}
                className="sm:col-span-2"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 h-full">
            <div className="bg-[#1f6b7a] rounded-[24px] p-5 text-white shadow-sm border border-[#0f4b56]">
              <h2 className="text-2xl font-serif mb-2">Packaging Options</h2>
              <div className="space-y-3">
                <div className="border border-[#d9c7a1]/40 rounded-[20px] p-4 bg-[#236877]">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/70 mb-2">
                    20 Feet Container
                  </p>
                  <p className="text-[1.8rem] leading-none font-semibold">{product.containerCapacity.twentyFt}</p>
                </div>
                <div className="border border-[#d9c7a1]/40 rounded-[20px] p-4 bg-[#236877]">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/70 mb-2">
                    40 Feet Container
                  </p>
                  <p className="text-[1.8rem] leading-none font-semibold">{product.containerCapacity.fortyFt}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-4 shadow-sm border border-[#d9c7a1] flex-1">
              <p className="text-xs uppercase tracking-[0.28em] text-[#c79a2b] mb-2">
                Export Support
              </p>
              <h3 className="text-lg font-serif text-[#124b5a] mb-2">
                Need custom packaging or bulk pricing?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                We can support buyer-specific packaging, labeling, and shipment planning based on your order volume.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-[#124b5a] text-white px-4 py-2 rounded-full hover:bg-[#0f3f4b] transition"
              >
                Talk to Us →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#d9c7a1]">
            <h2 className="text-2xl md:text-[1.85rem] font-serif text-[#124b5a] mb-4">
              Applications
            </h2>
            <ul className="space-y-2.5">
              {product.applications.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="text-[#c79a2b]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#d9c7a1]">
            <h2 className="text-2xl md:text-[1.85rem] font-serif text-[#124b5a] mb-4">
              Key Product Highlights
            </h2>
            <ul className="space-y-2.5">
              {product.benefits.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="text-[#c79a2b]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </main>
  );
}

function SpecItem({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`rounded-[18px] bg-[#fffaf1] p-3.5 border border-[#e7d7b8] ${className}`}>
      <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
        {label}
      </p>
      <p className="text-[#124b5a] leading-relaxed">{value}</p>
    </div>
  );
}
