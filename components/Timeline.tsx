"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Sprout,
  Factory,
  ShieldCheck,
  Package,
  Ship,
  Globe2,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";

// ✅ Local Playfair font (no global side effects)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const STEPS = [
  { icon: Sprout, title: "Farms", desc: "Sourced from premium Indian farms" },
  { icon: Factory, title: "Processing", desc: "State-of-the-art facilities" },
  { icon: ShieldCheck, title: "Quality Check", desc: "Rigorous lab testing" },
  { icon: Package, title: "Packaging", desc: "Food-grade secure packing" },
  { icon: Ship, title: "Shipping", desc: "Global maritime logistics" },
  { icon: Globe2, title: "Delivery", desc: "Delivered worldwide" },
];

const STEP_STAGGER = 0.42;
const STEP_DURATION = 0.32;
const DESKTOP_LINE_DURATION = 2.75;
const MOBILE_LINE_DURATION = 3.5;

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/about-texture1.jpg')" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-1.5 md:mb-3">
            Our Process
          </h2>

          {/* ✅ Playfair Applied Here */}
          <h3
            className={`${playfair.className} text-4xl md:text-5xl font-semibold tracking-[0.02em] leading-[1.02] text-[#1f6b7a]`}
          >
            Farm to Global Table
          </h3>
        </div>

        <div className="relative" ref={containerRef}>

          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-0 right-0 h-[2px]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#1f6b7a] via-[#e6c76a] to-[#1f6b7a]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: DESKTOP_LINE_DURATION, ease: "linear" }}
            />
          </div>

          {/* Vertical Line (Mobile) */}
          <div className="absolute bottom-10 left-10 top-10 z-0 w-[2px] -translate-x-1/2 overflow-hidden lg:hidden">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-[#1f6b7a] via-[#e6c76a] to-[#1f6b7a]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: MOBILE_LINE_DURATION, ease: "linear" }}
            />
          </div>

          {/* Steps */}
          <div className="relative z-10 flex flex-col items-start justify-between gap-10 md:gap-12 lg:flex-row lg:items-center lg:gap-0">
            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: STEP_DURATION,
                  delay: index * STEP_STAGGER,
                  ease: "easeOut",
                }}
                className="relative flex w-full max-w-[22rem] flex-row items-start gap-6 lg:max-w-none lg:flex-1 lg:flex-col lg:items-center lg:gap-4"
              >
                {/* Circle */}
                <div className="relative z-10 h-20 w-20 shrink-0 rounded-full border border-[#d7cfbf] bg-white shadow-md flex items-center justify-center group hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all lg:h-24 lg:w-24">

                  <step.icon className="w-9 h-9 text-[#1f6b7a] group-hover:text-[#D4AF37]" />

                  {/* Number */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#1f6b7a] text-white text-xs flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10 max-w-[180px] pt-2 text-left lg:max-w-[160px] lg:pt-0 lg:text-center">
                  <h4 className="mb-1 text-lg font-bold text-[#14373d] md:text-[1.35rem] lg:text-lg">
                    {step.title}
                  </h4>
                  <p className="text-sm font-medium leading-7 text-[#42555b] md:text-[15px]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
