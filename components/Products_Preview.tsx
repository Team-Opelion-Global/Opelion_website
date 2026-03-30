"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getProductHref, products } from "@/lib/products";
import { Playfair_Display } from "next/font/google";

// ✅ Local Playfair font (scoped, safe)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const FEATURED_PRODUCT_SLUGS = [
  "toor-dal",
  "white-quinoa",
  "ragi",
  "turmeric-powder",
  "flax-seeds",
  "pumpkin-seeds",
  "chia-seeds",
  "cumin-seeds",
] as const;

export default function ProductsPreview() {
  const featuredProducts = FEATURED_PRODUCT_SLUGS.map((slug) =>
    products.find((product) => product.slug === slug)
  ).filter((product): product is (typeof products)[number] => Boolean(product));

  return (
    <section id="products" className="relative py-16 md:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/about-texture1.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#f8f5ef]/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-1.5 text-sm font-semibold uppercase tracking-widest text-[#D4AF37] md:mb-3">
            Our Products
          </h2>

          {/* ✅ Playfair Applied Here */}
          <h3
            className={`${playfair.className} text-[2rem] md:text-[2.75rem] font-semibold tracking-[0.02em] leading-[1.02] text-[#1f6b7a]`}
          >
            Premium Quality Products
          </h3>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <Link key={product.slug} href={getProductHref(product.slug)}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1),0_20px_60px_rgba(212,175,55,0.25)]"
              >
                {/* Image */}
                <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-[#1f6b7a]/0 transition duration-300 group-hover:bg-[#1f6b7a]/20">
                    <p className="text-sm text-white opacity-0 transition group-hover:opacity-100">
                      View Details →
                    </p>
                  </div>
                </div>

                {/* Product Name */}
                <div className="p-5 text-center">
                  <h4 className="text-lg font-semibold text-[#1f6b7a]">
                    {product.name}
                  </h4>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="inline-block rounded-full bg-[#1f6b7a] px-8 py-3 font-medium text-white transition hover:bg-[#15525c]"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
