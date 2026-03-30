"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full relative">

      {/* LOGO */}
      <div className="absolute left-1/2 top-1 -translate-x-1/2 z-50 md:top-0 lg:top-0">

        {/* Curved border (hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[52px] rotate-180 md:w-[122px] md:h-[69px] lg:top-[52px] lg:w-[144px] lg:h-[88px] overflow-hidden pointer-events-none z-40">
          <div className="rounded-full border-[4px] border-[#1F6B7A] md:w-[122px] md:h-[116px] lg:w-[142px] lg:h-[140px]"></div>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px]
          rounded-full flex items-center justify-center
          bg-[url('/about-texture1.webp')] bg-cover bg-center shadow-xl"
        >
        <Image
          src="/Logo1 (2).webp"
          alt="Opelion"
          width={160}
          height={160}
          priority          // ← Logo above-the-fold hai, priority lagao
          className="mt-3 h-20 object-contain md:h-32 lg:h-40"
        />
        </Link>
      </div>

      {/* TOP BAR */}
      <div className="text-sm py-3 px-4 md:px-8 flex items-center justify-between md:justify-end gap-6 relative z-20
      bg-[url('/about-texture1.webp')] bg-cover bg-center">
        <button
          className="md:hidden flex flex-col gap-1.5 z-50 rounded-full border border-[#1F6B7A]/20 bg-white/20 px-3 py-2 backdrop-blur-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="h-[2px] w-6 bg-[#1F6B7A]"></span>
          <span className="h-[2px] w-6 bg-[#1F6B7A]"></span>
          <span className="h-[2px] w-6 bg-[#1F6B7A]"></span>
        </button>
        <a
          href="https://www.linkedin.com/company/opelion-global-private-limited/"
          target="_blank"
          rel="noreferrer"
          aria-label="Opelion Global on LinkedIn"
          className="text-[#1F6B7A] text-lg"
        >
          in
        </a>
      </div>

      {/* NAVBAR */}
      <div className="relative hidden md:block text-white">

        {/* Background */}
        <div className="absolute inset-0 bg-[url('/navbar_blue.webp')] bg-cover"></div>

        {/* NAV CONTENT */}
        <div className="relative z-20 max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">

          {/* LEFT MENU (desktop) */}
          <nav className="hidden md:flex gap-10 lg:gap-20 font-medium">
            <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
            <Link href="/#about" className="hover:text-[#D4AF37]">About Us</Link>
            <Link href="/#products" className="hover:text-[#D4AF37]">Products</Link>
          </nav>

          {/* RIGHT MENU (desktop) */}
          <nav className="hidden md:flex gap-10 lg:gap-20 font-medium">
            <Link href="/#blog" className="hover:text-[#D4AF37]">Blog</Link>
            <Link href="/locations" className="hover:text-[#D4AF37]">Our Locations</Link>
            <Link href="/#contact" className="hover:text-[#D4AF37]">Contact</Link>
          </nav>
        </div>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`absolute inset-x-0 top-full z-40 px-4 pt-3 md:hidden transition-all duration-300 ${
          menuOpen ? "visible opacity-100 translate-y-0" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="ml-0 mr-auto w-[82vw] max-w-[320px] overflow-hidden rounded-[30px] border border-white/16 bg-[linear-gradient(145deg,rgba(16,56,63,0.78)_0%,rgba(28,86,95,0.74)_45%,rgba(201,168,76,0.18)_100%)] p-3 shadow-[0_22px_50px_rgba(7,31,38,0.38)] backdrop-blur-xl">
          <div className="rounded-[24px] border border-white/12 bg-[rgba(9,31,36,0.22)] px-4 py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f2d37b]">
                Menu
              </span>
              <span className="h-px w-14 bg-white/20"></span>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.12)] px-4 py-3 text-[#fffdf7] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-[#D4AF37]/45 hover:bg-[rgba(255,255,255,0.18)] hover:text-[#f2d37b]"
              >
                Home
              </Link>
              <Link
                href="/#about"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.12)] px-4 py-3 text-[#fffdf7] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-[#D4AF37]/45 hover:bg-[rgba(255,255,255,0.18)] hover:text-[#f2d37b]"
              >
                About Us
              </Link>
              <Link
                href="/#products"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.12)] px-4 py-3 text-[#fffdf7] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-[#D4AF37]/45 hover:bg-[rgba(255,255,255,0.18)] hover:text-[#f2d37b]"
              >
                Products
              </Link>
              <Link
                href="/#blog"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.12)] px-4 py-3 text-[#fffdf7] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-[#D4AF37]/45 hover:bg-[rgba(255,255,255,0.18)] hover:text-[#f2d37b]"
              >
                Blog
              </Link>
              <Link
                href="/locations"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.12)] px-4 py-3 text-[#fffdf7] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-[#D4AF37]/45 hover:bg-[rgba(255,255,255,0.18)] hover:text-[#f2d37b]"
              >
                Our Locations
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.12)] px-4 py-3 text-[#fffdf7] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-[#D4AF37]/45 hover:bg-[rgba(255,255,255,0.18)] hover:text-[#f2d37b]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
