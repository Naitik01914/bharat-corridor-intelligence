import { useState } from "react";
import { Link } from "react-router-dom";
import MapViewer from "../components/MapViewer.jsx";
import { corridors } from "../data/corridors.js";

export default function MapPage() {
  const [activeId, setActiveId] = useState(corridors[0].id);
  const active = corridors.find((item) => item.id === activeId) || corridors[0];

  return (
    <article className="page map-page">
      {/* Header */}
      <header className="page-intro-modern">
        <div className="breadcrumb-nav">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Interactive Map</span>
        </div>

        <div className="map-page-title-row">
          <div>
            <div className="hero-pill-badge">
              <span className="live-dot" />
              <span>Full Spatial Map Canvas</span>
            </div>
            <h1 className="hero-main-title">
              ECONOMIC CORRIDORS
              <span className="hero-title-accent"> MAP</span>
            </h1>
          </div>
        </div>

        <p className="page-intro-desc">
          Inspect India&apos;s 11 multimodal industrial corridors across the full canvas.
          Select any corridor below to reveal its designated theme color, freight alignment, and industrial nodes.
        </p>
      </header>

      {/* Main Map Viewer Stage */}
      <section className="map-viewer-card-wrapper" aria-label="Interactive Map Viewer">
        <MapViewer tall />
      </section>

      {/* Corridor Selection Chips Ribbon */}
      <section className="corridor-chips-ribbon-wrapper" aria-label="Select corridor">
        <div className="ribbon-header">
          <span className="ribbon-label">Corridors Ribbon:</span>
          <span className="ribbon-hint">Scroll & tap to highlight</span>
        </div>

        <div className="chip-row-modern" role="tablist" aria-label="Corridors">
          {corridors.map((c) => {
            const isSelected = c.id === active.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`corridor-chip-pill ${isSelected ? "is-active" : ""}`}
                style={{
                  "--active-color": c.color,
                  "--active-text": c.textColor,
                  ...(isSelected ? { backgroundColor: c.color, color: c.textColor, borderColor: c.color } : {}),
                }}
                onClick={() => setActiveId(c.id)}
              >
                <span
                  className="chip-color-dot"
                  style={{
                    backgroundColor: isSelected ? c.textColor : c.color,
                  }}
                />
                <span className="chip-number">{c.number}</span>
                <span className="chip-code">{c.code}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Corridor Detailed Inspector Card */}
      <article
        className="map-inspector-card"
        style={{
          borderLeftColor: active.color,
          background: "#ffffff",
        }}
      >
        <div className="inspector-top-row">
          <div className="inspector-identity">
            <span
              className="inspector-num-badge"
              style={{ backgroundColor: active.color, color: active.textColor }}
            >
              {active.number}
            </span>
            <div>
              <span className="inspector-code">{active.code}</span>
              <h2 className="inspector-title">{active.name}</h2>
            </div>
          </div>

          <span
            className="inspector-color-pill"
            style={{
              borderColor: `${active.color}55`,
              color: active.color,
              backgroundColor: `${active.color}15`,
            }}
          >
            <span className="pill-dot" style={{ backgroundColor: active.color }} />
            {active.colorName} · {active.color}
          </span>
        </div>

        <p className="inspector-span-text">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{active.span}</span>
        </p>

        <p className="inspector-summary">{active.summary}</p>
        <p className="inspector-logistics">{active.logistics}</p>

        <div className="inspector-nodes-area">
          <span className="nodes-heading">Connected Industrial Nodes ({active.nodes.length}):</span>
          <div className="nodes-chip-wrap">
            {active.nodes.map((node) => (
              <span key={node} className="node-chip-modern">
                <span className="node-pin-dot" style={{ backgroundColor: active.color }} />
                {node}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Corridor Theme Palette Legend Grid */}
      <section className="panel-modern map-legend-section" aria-labelledby="legend-heading">
        <div className="panel-header">
          <div className="panel-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
            </svg>
          </div>
          <div>
            <h2 id="legend-heading">11 National Corridors Color Legend</h2>
            <p className="panel-sub">Click any corridor card below to inspect its route & infrastructure.</p>
          </div>
        </div>

        <div className="legend-grid-modern">
          {corridors.map((c) => {
            const isCurrent = c.id === active.id;
            return (
              <button
                key={c.id}
                type="button"
                className={`legend-card-modern ${isCurrent ? "is-selected" : ""}`}
                onClick={() => setActiveId(c.id)}
                style={{
                  "--theme-accent": c.color,
                  ...(isCurrent ? { borderColor: c.color, boxShadow: `0 8px 24px ${c.color}25` } : {}),
                }}
              >
                <span className="legend-num-tag">{c.number}</span>
                <span
                  className="legend-color-box"
                  style={{ backgroundColor: c.color }}
                  aria-hidden="true"
                />
                <div className="legend-text-col">
                  <span className="legend-card-name">{c.label}</span>
                  <div className="legend-card-sub">
                    <span>{c.colorName}</span>
                    <span className="dot-sep">·</span>
                    <code className="legend-hex">{c.color}</code>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Bottom Actions */}
      <div className="map-bottom-nav">
        <Link className="btn-modern btn-outline" to="/scan">
          <span>← Back to Corridor Guide</span>
        </Link>
        <Link className="btn-modern btn-secondary" to="/qr">
          <span>Get Physical Map QR Sticker →</span>
        </Link>
      </div>
    </article>
  );
}
