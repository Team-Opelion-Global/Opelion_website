"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Mail, UserRound } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type Location = {
  badge: string;
  badgeClassName: string;
  city: string;
  country: string;
  representative: string;
  email: string;
  isHeadquarters?: boolean;
  flagSrc: string;
  flagAlt: string;
};

const locations: Location[] = [
  {
    badge: "Headquarters",
    badgeClassName: "hq-badge",
    city: "Surat",
    country: "India",
    representative: "M.Krishna Harshitha",
    email: "krishna.m@opelionglobal.com",
    isHeadquarters: true,
    flagSrc: "/India_flag.webp",
    flagAlt: "India flag",
  },
  {
    badge: "Representative",
    badgeClassName: "rep-badge",
    city: "Toronto",
    country: "Canada",
    representative: "Mohit.V",
    email: "mohit.v@opelionglobal.com",
    flagSrc: "/Canada_flag.webp",
    flagAlt: "Canada flag",
  },
  {
    badge: "Representative",
    badgeClassName: "rep-badge",
    city: "Leeds",
    country: "United Kingdom",
    representative: "Devanshi. B",
    email: "devanshi.b@opelionglobal.com",
    flagSrc: "/UK_flag.webp",
    flagAlt: "United Kingdom flag",
  },
];

export default function OurLocations() {
  return (
    <section className="loc-root">
      <div className="loc-header">
        <div className="loc-eyebrow">
          <span className="loc-eyebrow-line" />
          <span>Our Locations</span>
          <span className="loc-eyebrow-line" />
        </div>

        <h2 className={`loc-title ${playfair.className}`}>Global Presence</h2>

        <p className="loc-subtitle">
          From our headquarters in Surat to trusted representatives in Toronto and Leeds,
          Opelion Global operates where it matters most.
        </p>
      </div>

      <div className="loc-grid">
        {locations.map((location) => (
          <article
            key={`${location.city}-${location.country}`}
            className={`loc-card ${location.isHeadquarters ? "hq" : ""}`}
          >
            <div className="loc-bar" />

            <div className="loc-card-body">
              <div className="loc-flag">
                <Image
                  src={location.flagSrc}
                  alt={location.flagAlt}
                  fill
                  sizes="84px"
                  className="loc-flag-image"
                />
              </div>

              <div className="loc-right">
                <span className={`loc-badge ${location.badgeClassName}`}>{location.badge}</span>
                <p className={`loc-city ${playfair.className}`}>{location.city}</p>
                <p className="loc-country-name">{location.country}</p>
                <div className="loc-divider" />

                <div className="loc-info-row">
                  <UserRound className="loc-icon" strokeWidth={1.8} />
                  <div className="loc-info-col">
                    <span className="loc-info-label">Representative</span>
                    <span className="loc-info-val">{location.representative}</span>
                  </div>
                </div>

                <div className="loc-info-row">
                  <Mail className="loc-icon" strokeWidth={1.8} />
                  <div className="loc-info-col">
                    <span className="loc-info-label">Email</span>
                    <span className="loc-info-val email">{location.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        .loc-root {
          background-color: #f5f3ef;
          background-image: url("/about-texture1.webp");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          padding: 60px 40px 96px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .loc-root::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top center, rgba(255, 252, 244, 0.2), transparent 48%);
          pointer-events: none;
        }

        .loc-root::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(245, 243, 239, 0) 0%,
            rgba(245, 243, 239, 0) 72%,
            rgba(245, 243, 239, 0.06) 80%,
            rgba(245, 243, 239, 0.16) 87%,
            rgba(245, 243, 239, 0.34) 93%,
            rgba(245, 243, 239, 0.62) 97%,
            #f5f3ef 100%
          );
          pointer-events: none;
        }

        .loc-header {
          position: relative;
          z-index: 1;
          margin-bottom: 30px;
          text-align: center;
        }

        .loc-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 12px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d4af37;
        }

        .loc-eyebrow-line {
          display: inline-block;
          width: 28px;
          height: 1px;
          background: #d4af37;
        }

        .loc-title {
          margin-bottom: 16px;
          font-size: 2rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          line-height: 1.15;
          color: #1f6b7a;
        }

        .loc-subtitle {
          max-width: 500px;
          margin: 0 auto;
          font-size: 17px;
          line-height: 1.8;
          font-weight: 400;
          color: #1e1e1a;
        }

        .loc-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .loc-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(31, 107, 122, 0.13);
          border-radius: 4px;
          background: rgba(255, 255, 252, 0.76);
          backdrop-filter: blur(2px);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .loc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 44px rgba(31, 107, 122, 0.13);
        }

        .loc-card.hq {
          border-color: rgba(212, 175, 55, 0.3);
          background: rgba(255, 253, 245, 0.86);
        }

        .loc-bar {
          height: 3px;
          flex-shrink: 0;
          background: rgba(31, 107, 122, 0.22);
        }

        .loc-card.hq .loc-bar {
          background: #d4af37;
        }

        .loc-card-body {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          flex: 1;
          padding: 28px 28px 30px;
        }

        .loc-flag {
          position: relative;
          width: 84px;
          height: 56px;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 3px;
          margin-top: 6px;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16);
        }

        .loc-flag-image {
          object-fit: contain;
          background: #ffffff;
        }

        .loc-right {
          flex: 1;
          text-align: left;
        }

        .loc-badge {
          display: inline-block;
          margin-bottom: 10px;
          padding: 3px 10px;
          border-radius: 2px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .hq-badge {
          color: #d4af37;
          border: 1px solid rgba(212, 175, 55, 0.4);
        }

        .rep-badge {
          color: #1f6b7a;
          border: 1px solid rgba(31, 107, 122, 0.28);
        }

        .loc-city {
          margin-bottom: 4px;
          font-size: 30px;
          font-weight: 600;
          letter-spacing: 0.02em;
          line-height: 1.2;
          color: #1f6b7a;
        }

        .loc-country-name {
          margin-bottom: 16px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7a7a68;
        }

        .loc-divider {
          width: 28px;
          height: 1px;
          margin-bottom: 16px;
          background: #d4af37;
          opacity: 0.5;
        }

        .loc-card.hq .loc-divider {
          opacity: 1;
        }

        .loc-info-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 10px;
        }

        .loc-info-row:last-child {
          margin-bottom: 0;
        }

        .loc-icon {
          width: 13px;
          height: 13px;
          flex-shrink: 0;
          margin-top: 3px;
          color: #1f6b7a;
          opacity: 0.55;
        }

        .loc-info-col {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .loc-info-label {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9a9a88;
        }

        .loc-info-val {
          font-size: 14px;
          font-weight: 400;
          line-height: 1.45;
          color: #1e1e1a;
        }

        .loc-info-val.email {
          font-size: 13px;
          color: #1f6b7a;
          word-break: break-all;
        }

        @media (max-width: 1024px) {
          .loc-grid {
            grid-template-columns: 1fr;
            max-width: 520px;
          }
        }

        @media (max-width: 768px) {
          .loc-root {
            padding: 60px 20px 70px;
          }

          .loc-title {
            font-size: 2rem;
          }

          .loc-card-body {
            padding: 24px 20px 26px;
          }

          .loc-flag {
            width: 78px;
            height: 52px;
          }

          .loc-city {
            font-size: 28px;
          }
        }

        @media (min-width: 768px) {
          .loc-title {
            font-size: 2.75rem;
          }
        }
      `}</style>
    </section>
  );
}
