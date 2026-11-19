import { useState } from "react";
import { Link } from "react-router-dom";
import { corridors } from "../data/corridors.js";

// Categorize corridors by geographical zone for quick filtering
const regions = [
  { id: "all", label: "All Corridors (11)" },
  { id: "north", label: "Northern & Eastern", ids: ["akic", "dmic", "dnic"] },
  { id: "south", label: "Southern Peninsula", ids: ["cbic", "cbic-kochi", "hbic", "vcic"] },
  { id: "west", label: "Western Hubs", ids: ["dmic", "bmic"] },
  { id: "central-east", label: "Central & East Coast", ids: ["hnic", "hwic", "oec", "vcic"] },
];

export default function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const filteredCorridors = corridors.filter((c) => {
    if (selectedRegion === "all") return true;
    const regionObj = regions.find((r) => r.id === selectedRegion);
    return regionObj?.ids?.includes(c.id);
  });

  return (
    <article className="page home-page">
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-pill-badge">
          <span className="live-dot" />
          <span>National Industrial Corridor Programme · NICDC</span>
        </div>

        <h1 className="hero-main-title">
          BHARAT CORRIDOR
          <span className="hero-title-accent"> INTELLIGENCE</span>
        </h1>

        <p className="hero-lead">Your Gateway to India&apos;s Economic Corridors.</p>

        <p className="hero-description">
          The public intelligence companion to India&apos;s 11 multimodal economic and freight corridors.
          Explore corridor routes, connecting dedicated freight spines, state networks, and anchor
          greenfield industrial cities in one synchronized platform.
        </p>

        <div className="hero-actions-group">
          <Link className="btn-modern btn-primary" to="/map">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
              <line x1="9" x2="9" y1="3" y2="18"/>
              <line x1="15" x2="15" y1="6" y2="21"/>
            </svg>
            <span>Explore Interactive Map</span>
          </Link>

          <Link className="btn-modern btn-secondary" to="/scan">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="M3 9h18"/>
              <path d="M9 21V9"/>
            </svg>
            <span>Corridors Directory</span>
          </Link>

          <a
            className="btn-modern btn-outline"
            href="https://canva.link/giuhuoddz7hww6w"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M2 3h20"/>
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/>
              <path d="m7 21 5-5 5 5"/>
            </svg>
            <span>Detailed Presentation (PPT) ↗</span>
          </a>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="stats-dashboard" aria-label="Programme Statistics">
        <div className="stat-card">
          <span className="stat-number">11</span>
          <span className="stat-label">National Corridors</span>
          <span className="stat-sub">Unified multimodal network</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">17+</span>
          <span className="stat-label">States & UTs</span>
          <span className="stat-sub">Interconnected industrial hubs</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">10,000+</span>
          <span className="stat-label">Route Kilometres</span>
          <span className="stat-sub">Spanning DFC & Expressways</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">40+</span>
          <span className="stat-label">Smart Cities & Nodes</span>
          <span className="stat-sub">Dholera, Shendra-Bidkin & more</span>
        </div>
      </section>

      {/* 11 Corridors Themed Showcase */}
      <section className="corridor-directory-section">
        <div className="section-header-modern">
          <div>
            <p className="section-eyebrow">Visual Identity & System</p>
            <h2 className="section-title">11 National Industrial Corridors</h2>
            <p className="section-subtitle">
              Color-coded according to the official spatial theme for rapid physical and digital recognition.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="region-filters" role="tablist" aria-label="Filter by region">
            {regions.map((reg) => (
              <button
                key={reg.id}
                type="button"
                role="tab"
                aria-selected={selectedRegion === reg.id}
                className={`region-tab ${selectedRegion === reg.id ? "active" : ""}`}
                onClick={() => setSelectedRegion(reg.id)}
              >
                {reg.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Corridor Cards Grid */}
        <div className="corridor-cards-grid">
          {filteredCorridors.map((c) => (
            <Link
              key={c.id}
              to={`/scan#${c.id}`}
              className="corridor-brand-card"
              style={{
                "--card-color": c.color,
                "--card-color-tint": `${c.color}12`,
              }}
            >
              <div className="card-top-row">
                <span className="card-corridor-num">{c.number}</span>
                <span
                  className="card-swatch-box"
                  style={{ backgroundColor: c.color }}
                  aria-hidden="true"
                />
                <span className="card-state-count">
                  {c.states.length} {c.states.length === 1 ? "state" : "states"}
                </span>
              </div>

              <div className="card-body">
                <div className="card-code-badge" style={{ color: c.color, borderColor: `${c.color}40` }}>
                  {c.code}
                </div>
                <h3 className="card-corridor-name">{c.name}</h3>
                <div className="card-color-meta">
                  <span className="color-dot" style={{ backgroundColor: c.color }} />
                  <span className="color-name">{c.colorName}</span>
                  <span className="color-sep">·</span>
                  <code className="color-code">{c.color}</code>
                </div>
                <p className="card-span-text">{c.span}</p>
              </div>

              <div className="card-footer-row">
                <span className="nodes-preview">
                  {c.nodes.slice(0, 3).join(", ")}
                  {c.nodes.length > 3 && ` +${c.nodes.length - 3} more`}
                </span>
                <span className="card-arrow" aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Strategic Pillars Feature Spotlight */}
      <section className="pillars-section">
        <div className="section-header-modern">
          <p className="section-eyebrow">National Backbone</p>
          <h2 className="section-title">Strategic Infrastructure Pillars</h2>
          <p className="section-subtitle">
            How dedicated freight corridors, highway networks, and deepwater ports interconnect.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon-box" style={{ background: "#2563EB18", color: "#2563EB" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="16" height="16" x="4" y="4" rx="2"/>
                <path d="M4 10h16"/>
                <path d="M10 4v16"/>
              </svg>
            </div>
            <h3>Dedicated Freight Spines (DFC)</h3>
            <p>
              Western Dedicated Freight Corridor (WDFC from Dadri to JNPT) and Eastern Dedicated Freight
              Corridor (EDFC from Sahnewal to Dankuni) form the twin high-speed freight spines for DMIC & AKIC.
            </p>
            <div className="pillar-tags">
              <span>Western DFC (1,506 km)</span>
              <span>Eastern DFC (1,337 km)</span>
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box" style={{ background: "#16A34A18", color: "#16A34A" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
              </svg>
            </div>
            <h3>Greenfield Smart Cities & Nodes</h3>
            <p>
              Model industrial smart cities planned with plug-and-play infrastructure, underground utilities,
              effluent treatment, and rapid land allotment for global manufacturing setups.
            </p>
            <div className="pillar-tags">
              <span>Dholera SIR</span>
              <span>Shendra-Bidkin</span>
              <span>Tumakuru</span>
              <span>Orvakal</span>
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box" style={{ background: "#9333EA18", color: "#9333EA" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
              </svg>
            </div>
            <h3>Sagarmala & Port Connectivity</h3>
            <p>
              Coastal corridors like Vizag–Chennai (VCIC) and Odisha Economic Corridor (OEC) integrate
              deepwater ports (Visakhapatnam, Paradip, Chennai, Krishnapatnam) with hinterland rail routes.
            </p>
            <div className="pillar-tags">
              <span>JNPT</span>
              <span>Paradip</span>
              <span>Visakhapatnam</span>
              <span>Cochin ICTT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access CTA Box */}
      <section className="cta-banner">
        <div className="cta-content">
          <span className="cta-kicker">Ready to Explore?</span>
          <h2>Open the Interactive Map Viewer</h2>
          <p>
            Pan, zoom, and inspect corridor nodes on your mobile or desktop device. No registration required.
          </p>
        </div>
        <div className="cta-action">
          <Link to="/map" className="btn-modern btn-primary btn-large">
            <span>Launch Map Viewer</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
