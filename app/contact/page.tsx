import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Opelion Global Private Limited",
  description: "Reach out to Opelion Global for bulk inquiries, export partnerships, or product details. Our team ensures fast and reliable communication.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
