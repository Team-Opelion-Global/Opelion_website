import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Opelion Global - Trade & Market Analysis",
  description: "Stay updated with market trends, quality standards, and industry insights for agro imports and exports. Expert analysis for traders and importers.",
  openGraph: {
    title: "Market Insights & Blog - Opelion Global",
    description: "Read latest articles on agro commodity trends, quality assurance, and export best practices.",
    type: "website",
    url: "https://opelion.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
