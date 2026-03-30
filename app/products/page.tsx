// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Search } from "lucide-react";
// import { products } from "@/lib/products";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const PRODUCT_GROUPS = [
//   {
//     id: "all",
//     filterLabel: "All Products",
//   },
//   {
//     id: "pulses-lentils",
//     filterLabel: "Pulses & Lentils",
//     heading: "🟡 Pulses & Lentils",
//     slugs: ["toor-dal", "masoor-dal", "chana-dal", "chickpeas"],
//   },
//   {
//     id: "grains-pseudo-grains",
//     filterLabel: "Grains",
//     heading: "🌾 Grains & Pseudo Grains",
//     slugs: [
//       "ragi",
//       "white-quinoa",
//       "red-quinoa",
//       "black-quinoa",
//       "tricolour-quinoa",
//     ],
//   },
//   {
//     id: "oilseeds-functional-seeds",
//     filterLabel: "Seeds",
//     heading: "🌱 Oilseeds & Functional Seeds",
//     slugs: [
//       "chia-seeds",
//       "flax-seeds",
//       "pumpkin-seeds",
//       "sunflower-seeds",
//       "white-sesame-seeds",
//       "basil-seeds",
//       "hemp-seeds",
//       "watermelon-seeds",
//       "alfalfa-seeds",
//       "tamarind-seeds-kernel",
//       "tamarind-whole-seeds",
//     ],
//   },
//   {
//     id: "spices",
//     filterLabel: "Spices (Whole & Ground)",
//     heading: "🌶️ Spices",
//     slugs: [
//       "cumin-seeds",
//       "turmeric-powder",
//       "ginger-powder",
//       "kalonji-seeds",
//     ],
//   },
//   {
//     id: "dehydrated-products",
//     filterLabel: "Dehydrated Products",
//     heading: "🧂 Dehydrated Products",
//     slugs: [
//       "tomato-powder",
//       "tomato-chips",
//       "beetroot-powder",
//       "beetroot-flakes",
//       "carrot-flakes",
//       "carrot-powder",
//       "mango-powder",
//       "cabbage-powder",
//       "broccoli-powder",
//       "moringa-powder",
//     ],
//   },
//   {
//     id: "processed-products",
//     filterLabel: "Processed Products",
//     heading: "🏭 Processed Products",
//     slugs: [
//       "quinoa-flour",
//       "quinoa-puff",
//       "tamarind-paste",
//       "tamarind-pulp",
//       "tamarind-powder",
//     ],
//   },
// ] as const;

// type GroupId = (typeof PRODUCT_GROUPS)[number]["id"];
// type ProductGroup = Exclude<(typeof PRODUCT_GROUPS)[number], { id: "all" }>;
// const ORDERED_PRODUCT_SLUGS = [
//   "toor-dal",
//   "masoor-dal",
//   "chana-dal",
//   "chickpeas",
//   "ragi",
//   "white-quinoa",
//   "red-quinoa",
//   "black-quinoa",
//   "tricolour-quinoa",
//   "quinoa-flour",
//   "quinoa-puff",
//   "chia-seeds",
//   "flax-seeds",
//   "pumpkin-seeds",
//   "sunflower-seeds",
//   "white-sesame-seeds",
//   "basil-seeds",
//   "hemp-seeds",
//   "watermelon-seeds",
//   "alfalfa-seeds",
//   "cumin-seeds",
//   "kalonji-seeds",
//   "turmeric-powder",
//   "ginger-powder",
//   "tomato-powder",
//   "tomato-chips",
//   "beetroot-powder",
//   "beetroot-flakes",
//   "carrot-flakes",
//   "carrot-powder",
//   "mango-powder",
//   "cabbage-powder",
//   "broccoli-powder",
//   "moringa-powder",
//   "tamarind-paste",
//   "tamarind-pulp",
//   "tamarind-powder",
//   "tamarind-seeds-kernel",
//   "tamarind-whole-seeds",
// ] as const;

// function getGroupBySlug(slug: string): ProductGroup | undefined {
//   return PRODUCT_GROUPS.find((group): group is ProductGroup => {
//     return group.id !== "all" && (group.slugs as readonly string[]).includes(slug);
//   });
// }

// function ProductCard({
//   product,
//   index,
// }: {
//   product: (typeof products)[number];
//   index: number;
// }) {
//   const group = getGroupBySlug(product.slug);

//   return (
//     <Link key={product.slug} href={`/products/${product.slug}`}>
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: index * 0.05 }}
//         className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1),0_20px_60px_rgba(212,175,55,0.3)]"
//       >
//         <div className="relative h-52 overflow-hidden">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//           />

//           <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/10">
//             <p className="text-white opacity-0 transition group-hover:opacity-100">
//               View Details {"->"}
//             </p>
//           </div>
//         </div>

//         <div className="flex min-h-[112px] flex-1 flex-col items-center justify-center p-5 text-center">
//           <h3 className="text-lg font-semibold leading-snug text-[#1f6b7a]">{product.name}</h3>
//           <p className="mt-2 text-sm text-gray-500">
//             {group ? group.filterLabel : product.category}
//           </p>
//         </div>
//       </motion.div>
//     </Link>
//   );
// }

// export default function ProductsPage() {
//   const [active, setActive] = useState<GroupId>("all");
//   const [query, setQuery] = useState("");

//   const uniqueProducts = products.filter((product, index, array) => {
//     return array.findIndex((item) => item.slug === product.slug) === index;
//   });

//   const productMap = new Map(uniqueProducts.map((product) => [product.slug, product]));
//   const normalizedQuery = query.trim().toLowerCase();
//   const orderedProducts = ORDERED_PRODUCT_SLUGS.map((slug) => productMap.get(slug)).filter(
//     (product): product is NonNullable<typeof product> => Boolean(product)
//   );

//   const visibleProducts = orderedProducts.filter((product) => {
//     const matchesGroup = active === "all" || getGroupBySlug(product.slug)?.id === active;

//     const searchableText = [
//       product.name,
//       product.category,
//       product.shortDescription,
//       product.overview,
//       product.specs.packaging,
//       ...product.applications,
//       ...product.benefits,
//     ]
//       .join(" ")
//       .toLowerCase();

//     const matchesSearch =
//       normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

//     return matchesGroup && matchesSearch;
//   });

//   return (
//     <>
//       <Navbar />
//       <section className="relative pb-24 pt-4 md:pt-6">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-60"
//           style={{ backgroundImage: "url('/about-texture1.webp')" }}
//         />
//         <div className="absolute inset-0 bg-[#f8f5ef]/90" />

//         <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
//           <div className="mb-5">
//             <Link
//               href="/#products"
//               className="inline-flex items-center rounded-full bg-[#124b5a] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#0f3f4b] md:-ml-1"
//             >
//               {"<"} Back
//             </Link>
//           </div>

//           <div className="mb-10 text-center">
//             <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
//               Our Products
//             </h2>
//             <h1 className="text-4xl font-bold text-[#1f6b7a] md:text-5xl">
//               Explore Our Range
//             </h1>
//           </div>

//           <div className="mx-auto mb-12 max-w-2xl">
//             <div className="flex items-center gap-3 rounded-full border border-[#d9c7a1] bg-white px-5 py-3 shadow-sm">
//               <Search className="h-4 w-4 text-[#1f6b7a]" />
//               <input
//                 type="text"
//                 value={query}
//                 onChange={(event) => setQuery(event.target.value)}
//                 placeholder='Search products... (e.g., "turmeric powder", "chia seeds")'
//                 className="w-full bg-transparent text-sm text-[#124b5a] outline-none placeholder:text-gray-400"
//               />
//             </div>
//           </div>

//           <div className="mb-12 flex flex-wrap justify-center gap-3 xl:flex-nowrap">
//             {PRODUCT_GROUPS.map((group) => (
//               <button
//                 key={group.id}
//                 onClick={() => setActive(group.id)}
//                 className={`rounded-full border px-4 py-2 text-[13px] whitespace-nowrap transition ${
//                   active === group.id
//                     ? "border-[#124b5a] bg-[#124b5a] text-white"
//                     : "border-[#d9c7a1] bg-white text-[#124b5a] hover:bg-[#124b5a]/10"
//                 }`}
//               >
//                 {group.filterLabel}
//               </button>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {visibleProducts.map((product, index) => (
//               <ProductCard
//                 key={product.slug}
//                 product={product}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }



"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Search } from "lucide-react";
import { getProductHref, products } from "@/lib/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PRODUCT_GROUPS = [
  {
    id: "all",
    filterLabel: "All Products",
  },
  {
    id: "pulses-lentils",
    filterLabel: "Pulses & Lentils",
    heading: "🟡 Pulses & Lentils",
    slugs: ["toor-dal", "masoor-dal", "chana-dal", "chickpeas"],
  },
  {
    id: "grains-pseudo-grains",
    filterLabel: "Grains",
    heading: "🌾 Grains & Pseudo Grains",
    slugs: [
      "ragi",
      "white-quinoa",
      "red-quinoa",
      "black-quinoa",
      "tricolour-quinoa",
    ],
  },
  {
    id: "oilseeds-functional-seeds",
    filterLabel: "Seeds",
    heading: "🌱 Oilseeds & Functional Seeds",
    slugs: [
      "chia-seeds",
      "flax-seeds",
      "pumpkin-seeds",
      "sunflower-seeds",
      "white-sesame-seeds",
      "basil-seeds",
      "hemp-seeds",
      "watermelon-seeds",
      "alfalfa-seeds",
      "tamarind-seeds-kernel",
      "tamarind-whole-seeds",
    ],
  },
  {
    id: "spices",
    filterLabel: "Spices (Whole & Ground)",
    heading: "🌶️ Spices",
    slugs: [
      "cumin-seeds",
      "turmeric-powder",
      "ginger-powder",
      "kalonji-seeds",
    ],
  },
  {
    id: "dehydrated-products",
    filterLabel: "Dehydrated Products",
    heading: "🧂 Dehydrated Products",
    slugs: [
      "garlic-powder",
      "garlic-flakes",
      "onion-powder",
      "onion-flakes",
      "tomato-powder",
      "tomato-chips",
      "beetroot-powder",
      "beetroot-flakes",
      "carrot-flakes",
      "carrot-powder",
      "mango-powder",
      "cabbage-powder",
      "broccoli-powder",
      "moringa-powder",
    ],
  },
  {
    id: "processed-products",
    filterLabel: "Processed Products",
    heading: "🏭 Processed Products",
    slugs: [
      "quinoa-flour",
      "quinoa-puff",
      "tamarind-paste",
      "tamarind-pulp",
      "tamarind-powder",
    ],
  },
] as const;

type GroupId = (typeof PRODUCT_GROUPS)[number]["id"];
type ProductGroup = Exclude<(typeof PRODUCT_GROUPS)[number], { id: "all" }>;
const ORDERED_PRODUCT_SLUGS = [
  "toor-dal",
  "masoor-dal",
  "chana-dal",
  "chickpeas",
  "ragi",
  "white-quinoa",
  "red-quinoa",
  "black-quinoa",
  "tricolour-quinoa",
  "quinoa-flour",
  "quinoa-puff",
  "chia-seeds",
  "flax-seeds",
  "pumpkin-seeds",
  "sunflower-seeds",
  "white-sesame-seeds",
  "basil-seeds",
  "hemp-seeds",
  "watermelon-seeds",
  "alfalfa-seeds",
  "cumin-seeds",
  "kalonji-seeds",
  "turmeric-powder",
  "ginger-powder",
  "garlic-powder",
  "garlic-flakes",
  "onion-powder",
  "onion-flakes",
  "tomato-powder",
  "tomato-chips",
  "beetroot-powder",
  "beetroot-flakes",
  "carrot-flakes",
  "carrot-powder",
  "mango-powder",
  "cabbage-powder",
  "broccoli-powder",
  "moringa-powder",
  "tamarind-paste",
  "tamarind-pulp",
  "tamarind-powder",
  "tamarind-seeds-kernel",
  "tamarind-whole-seeds",
] as const;

function getGroupBySlug(slug: string): ProductGroup | undefined {
  return PRODUCT_GROUPS.find((group): group is ProductGroup => {
    return group.id !== "all" && (group.slugs as readonly string[]).includes(slug);
  });
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const group = getGroupBySlug(product.slug);

  return (
    <Link key={product.slug} href={getProductHref(product.slug)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1),0_20px_60px_rgba(212,175,55,0.3)]"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/10">
            <p className="text-white opacity-0 transition group-hover:opacity-100">
              View Details {"->"}
            </p>
          </div>
        </div>

        <div className="flex min-h-[80px] flex-1 flex-col items-center justify-center px-5 py-2.5 text-center">
          <h3 className="text-lg font-semibold leading-none text-[#1f6b7a]">{product.name}</h3>
          <p className="mt-0 text-sm text-gray-500">
            {group ? group.filterLabel : product.category}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function ProductsPage() {
  const [active, setActive] = useState<GroupId>("all");
  const [query, setQuery] = useState("");

  const uniqueProducts = products.filter((product, index, array) => {
    return array.findIndex((item) => item.slug === product.slug) === index;
  });

  const productMap = new Map(uniqueProducts.map((product) => [product.slug, product]));
  const normalizedQuery = query.trim().toLowerCase();
  const orderedProducts = ORDERED_PRODUCT_SLUGS.map((slug) => productMap.get(slug)).filter(
    (product): product is NonNullable<typeof product> => Boolean(product)
  );

  const visibleProducts = orderedProducts.filter((product) => {
    const matchesGroup = active === "all" || getGroupBySlug(product.slug)?.id === active;

    const searchableText = [
      product.name,
      product.category,
      product.shortDescription,
      product.overview,
      product.specs.packaging,
      ...product.applications,
      ...product.benefits,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

    return matchesGroup && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <section className="relative pb-24 pt-4 md:pt-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/about-texture1.webp')" }}
        />
        <div className="absolute inset-0 bg-[#f8f5ef]/90" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-5">
            <Link
              href="/#products"
              className="inline-flex items-center text-white transition md:-ml-1 lg:rounded-full lg:bg-[#124b5a] lg:px-5 lg:py-2 lg:text-sm lg:font-medium lg:hover:bg-[#0f3f4b]"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#124b5a] shadow-[0_0_0_1px_rgba(255,255,255,0.35)] lg:hidden">
                <ChevronLeft className="h-5 w-5 stroke-white" strokeWidth={2.5} />
              </span>
              <span className="hidden lg:inline">Back</span>
            </Link>
          </div>

          <div className="mb-6 text-center md:mb-10">
            <h2 className="mb-1.5 text-sm font-semibold uppercase tracking-widest text-[#D4AF37] md:mb-3">
              Our Products
            </h2>
            {/* <h1 className="text-4xl font-bold text-[#1f6b7a] md:text-5xl">
              Explore Our Range
            </h1> */}

            <h1 className={`${playfair.className} text-[2rem] md:text-[2.75rem] font-semibold tracking-[0.02em] text-[#1f6b7a]`}>
              Explore Our Range
            </h1>
          </div>

          <div className="mx-auto mb-8 max-w-2xl md:mb-12">
            <div className="flex items-center gap-3 rounded-full border border-[#d9c7a1] bg-white px-5 py-3 shadow-sm">
              <Search className="h-4 w-4 text-[#1f6b7a]" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder='Search products... (e.g., "turmeric powder", "chia seeds")'
                className="w-full bg-transparent text-sm text-[#124b5a] outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-3 md:mb-12 xl:flex-nowrap">
            {PRODUCT_GROUPS.map((group) => (
              <button
                key={group.id}
                onClick={() => setActive(group.id)}
                className={`rounded-full border px-4 py-2 text-[13px] whitespace-nowrap transition ${
                  active === group.id
                    ? "border-[#124b5a] bg-[#124b5a] text-white"
                    : "border-[#d9c7a1] bg-white text-[#124b5a] hover:bg-[#124b5a]/10"
                }`}
              >
                {group.filterLabel}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
