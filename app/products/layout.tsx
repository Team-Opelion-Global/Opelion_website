import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Opelion Global - Quinoa, Pulses & Spices",
  description: "Explore Opelion Global's premium range of agro products including Quinoa, Toor Dal, Masoor Dal, Chana Dal, and specialty spices. High-quality exports for international markets.",
  openGraph: {
    title: "Premium Agro Products - Opelion Global",
    description: "Browse our extensive catalog of quality agricultural products: quinoa, pulses, lentils, seeds, and specialty spices.",
    type: "website",
    url: "https://opelion.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
