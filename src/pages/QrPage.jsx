import { useState } from "react";
import QrStudio from "../components/QrStudio.jsx";

const CANVA_PPT_URL = "https://canva.link/giuhuoddz7hww6w";

export default function QrPage() {
  const [showQrStudio, setShowQrStudio] = useState(false);

  return (
    <article className="page presentation-page">
      {/* Modern Hero */}
      <header className="hero-modern">
        <div className="hero-pill-badge">
          <span className="live-dot" />
          <span>Detailed Documentation &amp; Presentation</span>
        </div>
        <h1 className="hero-main-title">
          PROJECT<span className="hero-title-accent"> PRESENTATION</span>
        </h1>
        <p className="hero-lead">Comprehensive National Industrial Corridor Deck</p>
        <p className="hero-description">
          Detailed slide-by-slide explanation of India&apos;s 11 National Industrial Corridors,
          multimodal freight integration, node topologies, and smart industrial cities.
        </p>
      </header>

      {/* Primary Canva Launch Card */}
      <section className="panel-modern" style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              margin: "0 auto 1.5rem",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FF671F, #005696)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              boxShadow: "0 10px 25px rgba(255,103,31,0.25)"
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M2 3h20" />
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
              <path d="m7 21 5-5 5 5" />
            </svg>
          </div>

          <h2 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0a110d", marginBottom: "0.75rem" }}>
            Open Canva In-Depth Presentation
          </h2>
          <p style={{ color: "#4b5563", fontSize: "1rem", lineHeight: "1.6", marginBottom: "2rem" }}>
            The complete slide deck with high-resolution visual diagrams, corridor-by-corridor breakdown,
            smart cities roadmap, and freight trunk infrastructure is hosted on Canva.
          </p>

          <a
            className="btn-modern btn-primary"
            href={CANVA_PPT_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              padding: "1rem 2.25rem",
              fontSize: "1.1rem",
              fontWeight: "700",
              boxShadow: "0 8px 24px rgba(255,103,31,0.3)"
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span>Launch Presentation Deck ↗</span>
          </a>
        </div>
      </section>

      {/* Collapsible QR Studio for Physical Map Printing */}
      <section style={{ marginTop: "2rem", textAlign: "center" }}>
        <button
          type="button"
          onClick={() => setShowQrStudio(!showQrStudio)}
          style={{
            background: "transparent",
            border: "1px dashed #cbd5e1",
            borderRadius: "999px",
            padding: "0.5rem 1.25rem",
            color: "#64748b",
            fontSize: "0.875rem",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          {showQrStudio ? "▲ Hide Physical Map QR Sticker Generator" : "▼ Need the Physical Map QR Code Sticker? Click to show"}
        </button>

        {showQrStudio && (
          <div style={{ marginTop: "1.5rem", textAlign: "left" }}>
            <QrStudio />
          </div>
        )}
      </section>
    </article>
  );
}
