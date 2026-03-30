"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const capabilities = [
  {
    title: "Structured Export Company",
    body: "Focused on agro commodities sourced from India, built with the rigor of a professional trade organisation.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Origin-Aligned Platform",
    body: "Operationally aligned with agricultural production regions, giving buyers direct access to verified supply.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Coordinated Global Link",
    body: "A dependable bridge between origin sourcing in India and international demand — reducing friction across borders.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Continuity in Trade",
    body: "A system-driven organisation built to support continuity — not a transactional entity but a long-term trade partner.",
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Buyer Confidence",
    body: "Enabling buyers to engage with greater operational stability — clear commitments, backed by actual supply conditions.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "End-to-End Execution",
    body: "From order confirmation through to shipment — Opelion manages every step with structured oversight and accountability.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const identityBullets = [
  "A structured export company focused on agro commodities from India",
  "An operational platform aligned with agricultural production regions",
  "A coordinated link between origin sourcing and international demand",
  "A system-driven organisation built to support continuity in trade",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="og-about-page">
        <section className="og-hero">
          <div className="og-hero-left">
            <div className="og-hero-label">Opelion Global Private Limited</div>
            <h1>
              Built on <em>Trust.<br />Driven by</em> Trade.
            </h1>
            <p className="og-hero-desc">
              An export-focused company specialising in agro commodities sourced from India
              — where quality meets trust at every stage of the supply chain.
            </p>
          </div>

          <div className="og-hero-right">
            <div className="og-hero-card">
              <p className="og-tagline">&quot;Where Quality Meets Trust&quot;</p>
              <div className="og-hero-stats">
                <div className="og-stat">
                  <div className="og-stat-num">India</div>
                  <div className="og-stat-label">Origin Market</div>
                </div>
                <div className="og-stat">
                  <div className="og-stat-num">Global</div>
                  <div className="og-stat-label">Buyer Reach</div>
                </div>
                <div className="og-stat">
                  <div className="og-stat-num">Agro</div>
                  <div className="og-stat-label">Commodity Focus</div>
                </div>
                <div className="og-stat">
                  <div className="og-stat-num">End-to-End</div>
                  <div className="og-stat-label">Execution</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="og-section og-approach">
          <div className="og-section-inner">
            <div className="og-approach-grid">
              <div>
                <div className="og-section-tag">Core Operating Approach</div>
                <h2 className="og-section-title">
                  Discipline Across Every <em>Critical Stage</em>
                </h2>
                <p className="og-section-body">
                  Opelion Global operates with discipline across three critical areas —
                  sourcing, commercial alignment, and execution. Each transaction is
                  approached with a verified understanding of product availability, clearly
                  defined commercial terms, and coordinated execution from order confirmation
                  to shipment.
                </p>

                <div className="og-approach-steps">
                  <div className="og-step">
                    <div className="og-step-num">01</div>
                    <div className="og-step-content">
                      <h4>Supply Verification</h4>
                      <p>
                        Ensuring product availability before any commercial commitment is made
                        — no guesswork, only confirmed supply.
                      </p>
                    </div>
                  </div>
                  <div className="og-step">
                    <div className="og-step-num">02</div>
                    <div className="og-step-content">
                      <h4>Commercial Clarity</h4>
                      <p>
                        Providing realistic pricing aligned with current market conditions —
                        transparent at every stage.
                      </p>
                    </div>
                  </div>
                  <div className="og-step">
                    <div className="og-step-num">03</div>
                    <div className="og-step-content">
                      <h4>Execution Coordination</h4>
                      <p>
                        Managing the complete process from order confirmation to shipment with
                        structured oversight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="og-section-tag">How We Operate</div>
                <h2 className="og-section-title">
                  A <em>System-Driven</em> Process
                </h2>
                <div className="og-approach-pillars">
                  <div className="og-pillar">
                    <h4>Sourcing &amp; Supply Alignment</h4>
                    <p>
                      Building and maintaining reliable sourcing channels across origin markets
                      through structured supplier identification and filtration.
                    </p>
                  </div>
                  <div className="og-pillar">
                    <h4>Commercial Structuring</h4>
                    <p>
                      Providing clear and realistic pricing based on current supply conditions
                      — never disconnected from ground reality.
                    </p>
                  </div>
                  <div className="og-pillar">
                    <h4>Order Execution &amp; Coordination</h4>
                    <p>
                      Managing shipments through structured processes to ensure timely dispatch
                      and consistent delivery.
                    </p>
                  </div>
                  <div className="og-pillar">
                    <h4>Market Understanding</h4>
                    <p>
                      Maintaining visibility on seasonal trends, availability, and supply
                      movement across agricultural regions in India.
                    </p>
                  </div>
                  <div className="og-pillar">
                    <h4>Global Trade Support</h4>
                    <p>
                      Coordinating efficiently across geographies and buyer requirements with
                      precision and responsiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="og-section og-capabilities">
          <div className="og-section-inner">
            <div className="og-section-tag">Operational Capabilities</div>
            <h2 className="og-section-title">
              What <em>Opelion Global</em> Delivers
            </h2>
            <div className="og-cap-grid">
              {capabilities.map((item) => (
                <div key={item.title} className="og-cap-card">
                  <div className="og-cap-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="og-section og-identity">
          <div className="og-section-inner">
            <div className="og-section-tag">What Opelion Global Is</div>
            <h2 className="og-section-title">
              Our <em>Identity</em> in Trade
            </h2>

            <ul className="og-identity-bullets">
              {identityBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="og-identity-grid">
              <div className="og-identity-item">
                <h4>Approach to Trade</h4>
                <p>
                  Opelion Global operates with a long-term perspective, where each
                  transaction is aligned with continuity rather than short-term
                  opportunity. The company maintains clarity at every stage — ensuring that
                  commitments are supported by actual supply conditions and that execution
                  remains consistent with agreed terms.
                </p>
              </div>
              <div className="og-identity-item">
                <h4>Why It Matters</h4>
                <p>
                  This approach enables buyers to engage with greater confidence and
                  operational stability. In a market defined by uncertainty, Opelion Global
                  provides the one thing international buyers need most: reliability —
                  backed by systems, not just promises.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="og-section og-vision-mission">
          <div className="og-section-inner">
            <div className="og-section-tag">Purpose &amp; Direction</div>
            <h2 className="og-section-title">
              Vision &amp; <em>Mission</em>
            </h2>
            <div className="og-vm-grid">
              <div className="og-vm-panel" data-label="V">
                <div className="og-vm-label">Vision</div>
                <h3>A Reliable Export Presence from India</h3>
                <p>
                  To establish a structured and reliable export presence from India in the
                  global agro trade, built on consistency, clarity, and disciplined
                  execution — where every shipment reflects the integrity of the organisation
                  behind it.
                </p>
              </div>
              <div className="og-vm-panel" data-label="M">
                <div className="og-vm-label">Mission</div>
                <h3>Dependable Supply for Global Buyers</h3>
                <p>
                  To support international buyers with dependable agro supply through aligned
                  sourcing, transparent commercial practices, and controlled execution —
                  removing uncertainty and replacing it with a structured, trustworthy
                  process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="og-closing">
          <h2>
            &quot;Delivering Consistent, Reliable &amp; Well-Coordinated Agro Supply to
            Global Buyers&quot;
          </h2>
          <p>
            Opelion Global Pvt. Ltd. continues to strengthen its sourcing network and
            operational systems — with a clear and unwavering focus on quality,
            continuity, and trust.
          </p>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .og-about-page {
          --teal: #2a7a7c;
          --teal-dark: #1d5c5e;
          --teal-light: #3a9a9c;
          --gold: #c9a84c;
          --gold-light: #e2c47a;
          --cream: #f2ede4;
          --cream-dark: #e8e1d4;
          --text-dark: #1a2e2e;
          --text-mid: #3a5050;
          --text-light: #6a8080;
          font-family: "Jost", sans-serif;
          background-color: var(--cream);
          color: var(--text-dark);
          overflow-x: hidden;
        }

        .og-about-page *,
        .og-about-page *::before,
        .og-about-page *::after {
          box-sizing: border-box;
        }

        .og-hero {
          background: var(--teal-dark);
          position: relative;
          overflow: hidden;
          padding: 110px 60px 90px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
        }

        .og-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/World_map.webp");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          opacity: 0.3;
          pointer-events: none;
        }

        .og-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(7, 44, 45, 0.9) 0%, rgba(7, 44, 45, 0.72) 34%, rgba(7, 44, 45, 0.52) 58%, rgba(7, 44, 45, 0.7) 100%);
          pointer-events: none;
        }

        .og-hero > * {
          position: relative;
          z-index: 1;
        }

        .og-hero-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          white-space: nowrap;
        }

        .og-hero-label::before {
          content: "";
          display: block;
          width: 36px;
          height: 1px;
          background: var(--gold);
          flex-shrink: 0;
        }

        .og-hero h1 {
          font-family: "Cormorant Garamond", serif;
          font-weight: 300;
          font-size: clamp(48px, 5vw, 72px);
          line-height: 1.1;
          color: #fff;
          margin-bottom: 28px;
        }

        .og-hero h1 em {
          font-style: italic;
          color: var(--gold-light);
        }

        .og-hero-desc {
          font-size: 17px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.72);
          font-weight: 400;
          max-width: 520px;
        }

        .og-hero-right {
          position: relative;
        }

        .og-hero-card {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(201, 168, 76, 0.3);
          border-radius: 2px;
          padding: 40px 44px;
          backdrop-filter: blur(6px);
        }

        .og-tagline {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          font-weight: 400;
          font-style: italic;
          color: var(--gold-light);
          margin-bottom: 28px;
          line-height: 1.4;
        }

        .og-hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .og-stat {
          border-left: 2px solid var(--gold);
          padding-left: 16px;
        }

        .og-stat-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 38px;
          font-weight: 600;
          color: #fff;
          line-height: 1;
        }

        .og-stat-label {
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 6px;
        }

        .og-section {
          padding: 90px 60px;
        }

        .og-section-inner {
          max-width: 1180px;
          margin: 0 auto;
        }

        .og-section-tag {
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .og-section-tag::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, var(--gold), transparent);
          max-width: 120px;
        }

        .og-section-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(32px, 3.3vw, 50px);
          font-weight: 600;
          line-height: 1.2;
          color: var(--teal-dark);
          margin-bottom: 32px;
        }

        .og-section-title em {
          font-style: italic;
          color: var(--teal-light);
          font-weight: 600;
        }

        .og-section-body {
          font-size: 17px;
          line-height: 2;
          color: var(--text-mid);
          font-weight: 400;
        }

        .og-approach {
          background: #fff;
        }

        .og-approach-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: start;
        }

        .og-approach-steps {
          margin-top: 36px;
        }

        .og-step {
          display: flex;
          gap: 22px;
          margin-bottom: 32px;
          align-items: flex-start;
        }

        .og-step-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 42px;
          font-weight: 600;
          color: var(--cream-dark);
          line-height: 1;
          min-width: 48px;
        }

        .og-step-content h4 {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--teal-dark);
          margin-bottom: 6px;
        }

        .og-step-content p {
          font-size: 15.5px;
          line-height: 1.9;
          color: var(--text-light);
          font-weight: 400;
        }

        .og-approach-pillars {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .og-pillar {
          background: var(--cream);
          border-left: 3px solid var(--teal);
          padding: 20px 24px;
          transition: border-color 0.2s, background 0.2s;
        }

        .og-pillar:hover {
          border-color: var(--gold);
          background: #faf7f0;
        }

        .og-pillar h4 {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--teal-dark);
          margin-bottom: 6px;
        }

        .og-pillar p {
          font-size: 15px;
          line-height: 1.85;
          color: var(--text-light);
          font-weight: 400;
        }

        .og-capabilities {
          background: var(--cream);
        }

        .og-cap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 50px;
        }

        .og-cap-card {
          background: #fff;
          padding: 36px 30px;
          border-top: 3px solid var(--teal);
          position: relative;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
        }

        .og-cap-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(42, 122, 124, 0.12);
        }

        .og-cap-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle at bottom right, rgba(201, 168, 76, 0.12), transparent 70%);
        }

        .og-cap-icon {
          width: 42px;
          height: 42px;
          background: var(--teal-dark);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
        }

        .og-cap-icon svg {
          width: 20px;
          height: 20px;
          stroke: #fff;
          fill: none;
          stroke-width: 1.8;
        }

        .og-cap-card h4 {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--teal-dark);
          margin-bottom: 12px;
        }

        .og-cap-card p {
          font-size: 15px;
          line-height: 1.9;
          color: var(--text-light);
          font-weight: 400;
        }

        .og-identity {
          background: var(--teal-dark);
          position: relative;
          overflow: hidden;
        }

        .og-identity::before {
          content: "";
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .og-identity .og-section-title {
          color: #fff;
        }

        .og-identity .og-section-title em {
          color: var(--gold-light);
        }

        .og-identity-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 50px;
        }

        .og-identity-item {
          border-top: 1px solid rgba(201, 168, 76, 0.3);
          padding-top: 28px;
        }

        .og-identity-item h4 {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          font-weight: 600;
          font-style: italic;
          color: var(--gold-light);
          margin-bottom: 14px;
        }

        .og-identity-item p {
          font-size: 16.5px;
          line-height: 1.95;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 400;
        }

        .og-identity-bullets {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 32px;
          margin-top: 50px;
        }

        .og-identity-bullets li {
          font-size: 16.5px;
          color: rgba(255, 255, 255, 0.75);
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-weight: 400;
          line-height: 1.8;
        }

        .og-identity-bullets li::before {
          content: "—";
          color: var(--gold);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .og-vision-mission {
          background: #fff;
        }

        .og-vm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin-top: 50px;
          border: 1px solid var(--cream-dark);
        }

        .og-vm-panel {
          padding: 52px 48px;
          position: relative;
          overflow: hidden;
        }

        .og-vm-panel:first-child {
          border-right: 1px solid var(--cream-dark);
          background: var(--cream);
        }

        .og-vm-panel:last-child {
          background: #fff;
        }

        .og-vm-panel::before {
          content: attr(data-label);
          font-family: "Cormorant Garamond", serif;
          font-size: 120px;
          font-weight: 600;
          font-style: italic;
          color: rgba(42, 122, 124, 0.05);
          position: absolute;
          top: -20px;
          right: -10px;
          line-height: 1;
          pointer-events: none;
        }

        .og-vm-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 18px;
        }

        .og-vm-panel h3 {
          font-family: "Cormorant Garamond", serif;
          font-size: 32px;
          font-weight: 400;
          font-style: italic;
          color: var(--teal-dark);
          margin-bottom: 20px;
          line-height: 1.25;
        }

        .og-vm-panel p {
          font-size: 15.5px;
          line-height: 2;
          color: var(--text-mid);
          font-weight: 400;
        }

        .og-closing {
          background: #f5f3ef;
          padding: 70px 60px;
          text-align: center;
        }

        .og-closing h2 {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 400;
          color: var(--teal-dark);
          line-height: 1.35;
          max-width: 760px;
          margin: 0 auto 24px;
        }

        .og-closing p {
          font-size: 16px;
          color: rgba(29, 92, 94, 0.86);
          font-weight: 400;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.85;
        }

        @media (max-width: 980px) {
          .og-hero,
          .og-approach-grid,
          .og-identity-grid,
          .og-vm-grid {
            grid-template-columns: 1fr;
          }

          .og-cap-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .og-identity-bullets {
            grid-template-columns: 1fr;
          }

          .og-vm-panel:first-child {
            border-right: 0;
            border-bottom: 1px solid var(--cream-dark);
          }
        }

        @media (max-width: 720px) {
          .og-hero,
          .og-section,
          .og-closing {
            padding-left: 24px;
            padding-right: 24px;
          }

          .og-hero {
            padding-top: 80px;
            padding-bottom: 70px;
          }

          .og-cap-grid,
          .og-hero-stats {
            grid-template-columns: 1fr;
          }

          .og-vm-panel {
            padding: 36px 28px;
          }
        }
      `}</style>
    </>
  );
}
