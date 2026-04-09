"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const FAQS = [
  {
    question: "What visibility will I have after placing an order?",
    answer:
      " Each stage — from confirmation to dispatch — is coordinated with clear communication. Buyers are kept informed with relevant updates, ensuring visibility on progress without uncertainty.",
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "Minimum order quantity depends on the product, packaging format, and destination market. Share your requirement with us and we will confirm the suitable MOQ.",
  },
  {
    question: "Do you provide quality certifications?",
    answer:
      "Yes. We support buyer requirements with product specifications, quality-related documentation, and other applicable export documents based on the product and market.",
  },
];

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contact"
      className="bg-[#f5f3ef] py-24"
      style={{ paddingTop: "50px", paddingBottom: "50px" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">

          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#D4AF37] mb-3">
              CONTACT US
            </p>

            <h2
              className={`${playfair.className} text-[2rem] md:text-[2.75rem] font-semibold tracking-[0.02em] text-[#1f6b7a] mb-6`}
            >
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Reach out to Opelion Global for bulk inquiries, export partnerships,
              or product details. Our team ensures fast and reliable communication.
            </p>

            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Sales Email
            </p>

            <p className="text-md text-[#1f3c5b] font-medium mb-6">
              sales@opelionglobal.com
            </p>

            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Our Timings
            </p>

            <p className="text-md text-[#1f3c5b] font-medium">
              <span className="grid" style={{ gridTemplateColumns: "auto 1fr", gap: "0 8px" }}>
                <span>Monday-Friday</span><span>:&nbsp; 9:00 AM - 6:00 PM</span>
                <span>Saturday</span><span>:&nbsp; 9:00 AM - 4:00 PM</span>
                <span>Sunday</span><span>:&nbsp; Closed</span>
              </span>
            </p>
          </div>

          {/* FORM */}
          <div className="bg-white border border-gray-200 shadow-lg p-8">

            <form
              className="flex h-[280px] flex-col"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);

                const data = {
                  name: formData.get("name")?.toString().trim(),
                  email: formData.get("email")?.toString().trim(),
                  message: formData.get("message")?.toString().trim(),
                };

                // ✅ Basic validation
                if (!data.name || !data.email || !data.message) {
                  alert("Please fill all fields.");
                  return;
                }

                setLoading(true);

                try {
                  await fetch(
                    "https://script.google.com/macros/s/AKfycbxgiAMMuffaAtW_VbG-OhQUoAxccG_tmdI_w2uHSTeJD2kLZpCKVvsLO6fgcCicfhG6/exec",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    }
                  );

                  // ✅ Google Analytics
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "contact_form_submit", {
                      event_category: "Contact",
                      event_label: "Contact Form",
                    });
                  }

                  alert("Message sent successfully!");
                  form.reset();

                } catch (error) {
                  console.error(error);
                  alert("Something went wrong. Please try again.");
                } finally {
                  setLoading(false);
                }
              }}
            >
              <p className="mb-4 text-sm leading-6 text-gray-500">
                Send us a message and we&apos;ll get back to you within 12-24 hours.
              </p>

              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full bg-[#f5f5f5] text-black px-4 py-1.5 outline-none text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-[#1f6b7a] mb-3"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#f5f5f5] text-black px-4 py-1.5 outline-none text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-[#1f6b7a] mb-3"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="flex-1 w-full bg-[#f5f5f5] text-black px-4 py-2 outline-none text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-[#1f6b7a] mb-4"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-fit bg-[#1f6b7a] px-6 py-2 text-sm text-white transition hover:bg-[#15525c] disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit >"}
              </button>
            </form>

        

          </div>
        </div>

        {/* MAP */}
        <div className="overflow-hidden shadow-lg mb-20 border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2880050679587!2d72.88177607503468!3d21.140933780536663!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0516f08d8f0f9%3A0x3b4a9acea1d7ce44!2sOPELION%20GLOBAL%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1774250026922!5m2!1sen!2sin"
            className="w-full h-[320px]"
            loading="lazy"
          ></iframe>
        </div>

        {/* FAQ */}
        <div>
          <h3
            className={`${playfair.className} text-3xl md:text-4xl font-semibold tracking-[0.02em] text-[#1f6b7a] mb-10`}
          >
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question} className="border-b border-[#d9d0c3] pb-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[16px] font-medium text-[#1f6b7a]">
                      {faq.question}
                    </span>
                    <span className="text-xl leading-none text-[#8c5c38]">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-[15px] leading-7 text-[#5d4334]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

