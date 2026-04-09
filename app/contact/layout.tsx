import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Opelion Global - Get in Touch",
  description: "Contact Opelion Global for inquiries, partnerships, and export opportunities. Reach out to our team for agro commodity solutions.",
  openGraph: {
    title: "Contact Opelion Global",
    description: "Get in touch with our team for business inquiries, partnerships, and premium agro product exports.",
    type: "website",
    url: "https://opelion.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
