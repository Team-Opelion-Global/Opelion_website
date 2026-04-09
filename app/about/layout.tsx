import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Opelion Global - Premium Agro Exports",
  description: "Learn about Opelion Global's mission, vision, and commitment to quality in agro exports. A trusted partner in sourcing, processing, and exporting premium agricultural products worldwide.",
  openGraph: {
    title: "About Opelion Global - Premium Agro Exporter",
    description: "Discover our journey, values, and commitment to excellence in agro commodity exports from India.",
    type: "website",
    url: "https://opelion.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
