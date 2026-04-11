"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Cormorant_Garamond, Playfair_Display, Nunito } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          els?.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("active");
            }, i * 120);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative flex items-center overflow-hidden md:min-h-[88vh]"
    >
      <div className="absolute inset-0">
        <Image
          src="/About_bg.webp"
          alt="About Opelion Global"
          fill
          className="object-cover object-right"
          // priority
        />
        <div className="absolute inset-0 bg-black/30 md:bg-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-[50px] md:grid-cols-2 md:px-6 lg:px-0">
        <div className="flex max-w-[54rem] flex-col gap-3">
          <div className="reveal flex items-center gap-3">
            <span className="h-[2px] w-10 bg-amber-400" />
            <span className="text-base font-semibold uppercase tracking-[0.3em] text-[#e6c76a] md:text-lg">
              About Us
            </span>
          </div>

          <h2
            className={`reveal ${playfair.className} mb-2 text-[2.8rem] font-semibold leading-[1.08] tracking-[0.02em] text-[#1f6b7a] md:mb-3 md:text-[3.8rem]`}
          >
            Built on Trust,
            <br />
            <span className="mt-1 inline-block text-[#1f6b7a] md:mt-2">Driven by Trade</span>
          </h2>

          <div className="reveal h-[3px] w-16 rounded-full bg-[#e6c76a]/60" />

          <p className={`reveal ${nunito.className} text-justify text-[1.1rem] font-medium leading-[1.72] text-[#4a5f5f] md:text-[1.3rem]`}>
            Opelion Global Pvt Ltd was established with the intention of creating
            a more structured and dependable approach to global agro trade.
          </p>

          <p className={`reveal ${nunito.className} text-justify text-[1rem] font-medium leading-[1.76] text-[#4a5f5f] md:text-[1.2rem]`}>
            In an industry where supply often fluctuates and commitments can lack
            consistency, the company focuses on building systems that bring
            clarity to every stage of the process from sourcing to shipment.
          </p>

          <p className={`reveal ${nunito.className} text-justify text-[1rem] font-medium leading-[1.76] text-[#4a5f5f] md:text-[1.2rem]`}>
            The objective is straightforward: to ensure that international trade
            is supported by reliability, visibility, and disciplined execution.
          </p>

          <div className="reveal mt-5">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#0b0f14] transition hover:bg-amber-300"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
