import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Locations | Opelion Global - Processing Facilities & Offices",
  description: "Discover Opelion Global's processing facilities, distribution centers, and offices across India. State-of-the-art infrastructure for quality assurance.",
  openGraph: {
    title: "Our Facilities - Opelion Global Locations",
    description: "Visit our processing and distribution centers across India dedicated to quality agro commodity exports.",
    type: "website",
    url: "https://opelion.com/locations",
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
