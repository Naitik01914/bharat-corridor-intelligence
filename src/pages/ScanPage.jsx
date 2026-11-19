import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MapViewer from "../components/MapViewer.jsx";
import { corridors, getCorridorTheme, places, references } from "../data/corridors.js";

const jumps = [
  { id: "welcome-note", label: "Welcome" },
  { id: "digital-map", label: "Digital Map" },
  { id: "directory", label: "Corridors (11)" },
  { id: "corridor-info", label: "Details" },
  { id: "places", label: "States & Cities" },
  { id: "industry", label: "Industries" },
  { id: "logistics", label: "Logistics" },
  { id: "references", label: "Sources" },
];

export default function ScanPage() {
  const [corridorId, setCorridorId] = useState(corridors[0].id);
  const [query, setQuery] = useState("");
  const selected = corridors.find((item) => item.id === corridorId) || corridors[0];

  const filteredPlaces = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return places;
    return places.filter((place) => {
      const haystack = `${place.state} ${place.cities.join(" ")} ${place.corridors.join(" ")}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [query]);

  return (
    <article className="page scan-page">
      {/* Hero */}
      <header className="hero-modern" id="welcome">
        <div className="hero-pill-badge">
          <span className="live-dot" />
          <span>Physical Map Companion Guide</span>
        </div>
        <h1 className="hero-main-title">
          BHARAT CORRIDOR
          <span className="hero-title-accent"> DIRECTORY</span>
        </h1>
        <p className="hero-lead">Your Comprehensive Guide to India&apos;s Economic Corridors.</p>
        <p className="hero-description">
          Scanned from the physical map in your hands. Explore the 11 national industrial corridors,
          their designated theme color branding, connecting states, mega industrial nodes, and freight lines.
        </p>
      </header>

      {/* Sticky Floating Jump Bar */}
      <nav className="jump-nav-sticky no-print" aria-label="On this page">
        <div className="jump-nav-track">
          {jumps.map((jump) => (
            <a key={jump.id} href={`#${jump.id}`} className="jump-nav-pill">
              {jump.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Welcome Note */}
      <section className="panel-modern" id="welcome-note" aria-labelledby="welcome-heading">
        <div className="panel-header">
          <div className="panel-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div>
            <h2 id="welcome-heading">Welcome & Programme Overview</h2>
            <p className="panel-sub">Coordinated spatial mapping of India&apos;s National Industrial Corridors.</p>
          </div>
        </div>
        <p className="panel-body-text">
          Bharat Corridor Intelligence is the digital companion to the printed Indian Economic Corridors
          map. Each of the 11 national corridors follows a harmonized color theme to enable instant visual
          identification across physical charts, digital viewers, and project analytics.
        </p>
      </section>

      {/* Digital Map View Panel */}
      <section className="panel-modern" id="digital-map" aria-labelledby="map-heading">
        <div className="panel-header">
          <div className="panel-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
              <line x1="9" x2="9" y1="3" y2="18"/>
              <line x1="15" x2="15" y1="6" y2="21"/>
            </svg>
          </div>
          <div>
            <h2 id="map-heading">Digital Map Viewer</h2>
            <p className="panel-sub">The printed map sheet on your mobile device or computer screen.</p>
          </div>
        </div>

        <MapViewer />

        <div className="map-action-row">
          <Link className="btn-modern btn-primary btn-block" to="/map">
            <span>Open Dedicated Interactive Map Page</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Corridors Directory List (Matching User Photo Design) */}
      <section className="panel-modern" id="directory" aria-labelledby="directory-heading">
        <div className="panel-header">
          <div className="panel-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <line x1="3" y1="6" x2="3.01" y2="6"/>
              <line x1="3" y1="12" x2="3.01" y2="12"/>
              <line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
          </div>
          <div>
            <h2 id="directory-heading">Economic Corridors Directory</h2>
            <p className="panel-sub">The 11 National Industrial Corridors with their official theme branding.</p>
          </div>
        </div>

        <div className="directory-themed-list">
          {corridors.map((c) => {
            const isSelected = c.id === selected.id;
            return (
              <a
                key={c.id}
                href="#corridor-info"
                className={`corridor-card-link-modern ${isSelected ? "is-active" : ""}`}
                onClick={() => setCorridorId(c.id)}
                style={{
                  "--theme-color": c.color,
                }}
              >
                <span className="corridor-number-box">{c.number}</span>
                <span
                  className="corridor-swatch-box"
                  style={{ backgroundColor: c.color }}
                  aria-hidden="true"
                />
                <div className="corridor-text-group">
                  <div className="corridor-title-row">
                    <strong className="corridor-main-title">{c.label}</strong>
                    <span className="corridor-code-tag">{c.code}</span>
                  </div>
                  <div className="corridor-meta-row">
                    <span className="color-label">{c.colorName}</span>
                    <span className="meta-sep">·</span>
                    <code className="color-hex-tag">{c.color}</code>
                  </div>
                </div>
                <div className="corridor-end-meta">
                  <span className="corridor-states-pill">
                    {c.states.length} {c.states.length === 1 ? "state" : "states"}
                  </span>
                  <span className="corridor-arrow-icon" aria-hidden="true">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Corridor Detailed Inspector */}
      <section className="panel-modern" id="corridor-info" aria-labelledby="info-heading">
        <div className="panel-header">
          <div className="panel-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
          <div>
            <h2 id="info-heading">Corridor Information & Intelligence</h2>
            <p className="panel-sub">Detailed investment profile, node master-plan, and multimodal links.</p>
          </div>
        </div>

        {/* Dropdown Selector */}
        <div className="selector-wrapper">
          <label className="field-label" htmlFor="corridor-select">Select Corridor:</label>
          <div className="select-container">
            <select
              id="corridor-select"
              className="select-modern"
              value={selected.id}
              onChange={(e) => setCorridorId(e.target.value)}
            >
              {corridors.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.number} · {c.label} — {c.colorName} ({c.color})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dynamic Detail Card */}
        <article
          className="detail-card-modern"
          style={{
            borderLeftColor: selected.color,
            background: `linear-gradient(135deg, ${selected.color}0f, #ffffff 40%)`,
          }}
        >
          <div className="detail-top-banner">
            <div className="banner-left">
              <span
                className="banner-num-badge"
                style={{ backgroundColor: selected.color, color: selected.textColor }}
              >
                {selected.number}
              </span>
              <div>
                <span className="banner-code">{selected.code}</span>
                <h3 className="banner-title">{selected.name}</h3>
              </div>
            </div>

            <span
              className="banner-theme-pill"
              style={{
                borderColor: `${selected.color}50`,
                color: selected.color,
                backgroundColor: `${selected.color}15`,
              }}
            >
              <span className="pill-dot" style={{ backgroundColor: selected.color }} />
              {selected.colorName} · {selected.color}
            </span>
          </div>

          <p className="detail-span-lead">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{selected.span}</span>
          </p>

          <p className="detail-main-summary">{selected.summary}</p>

          {/* Fact Grid */}
          <div className="detail-grid-metrics">
            <div className="detail-metric-box">
              <span className="metric-title">Length & Extent</span>
              <span className="metric-val">{selected.length}</span>
            </div>

            <div className="detail-metric-box">
              <span className="metric-title">Connected States ({selected.states.length})</span>
              <div className="states-wrap">
                {selected.states.map((st) => (
                  <span key={st} className="state-badge-tag">{st}</span>
                ))}
              </div>
            </div>

            <div className="detail-metric-box full-width">
              <span className="metric-title">Smart Cities & Investment Nodes</span>
              <div className="nodes-chip-grid">
                {selected.nodes.map((node) => (
                  <span key={node} className="node-chip-modern">
                    <span className="node-pin-dot" style={{ backgroundColor: selected.color }} />
                    {node}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* States & Cities Search Explorer */}
      <section className="panel-modern" id="places" aria-labelledby="places-heading">
        <div className="panel-header">
          <div className="panel-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <div>
            <h2 id="places-heading">States and Cities Network</h2>
            <p className="panel-sub">Lookup any state, city, or industrial corridor to view alignments.</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar-modern">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              id="place-search"
              className="search-input-field"
              type="search"
              placeholder="Filter by state (e.g. Gujarat), city (e.g. Dholera), or code (e.g. DMIC)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <div className="search-counter">
            Showing <strong>{filteredPlaces.length}</strong> of {places.length} states
          </div>
        </div>

        {filteredPlaces.length === 0 ? (
          <div className="empty-search-state">
            <p>No matching states or cities found for &ldquo;{query}&rdquo;.</p>
            <button type="button" className="btn-modern btn-outline" onClick={() => setQuery("")}>
              Clear Filter
            </button>
          </div>
        ) : (
          <div className="places-cards-grid">
            {filteredPlaces.map((place) => (
              <div key={place.state} className="place-network-card">
                <div className="place-card-header">
                  <h3 className="place-state-name">{place.state}</h3>
                  <span className="place-corridor-count">
                    {place.corridors.length} {place.corridors.length === 1 ? "Corridor" : "Corridors"}
                  </span>
                </div>
                <p className="place-cities-list">{place.cities.join(" · ")}</p>
                <div className="place-corridor-tags">
                  {place.corridors.map((code) => {
                    const theme = getCorridorTheme(code);
                    return (
                      <span
                        key={code}
                        className="corridor-badge-interactive"
                        style={{
                          borderColor: `${theme.color}45`,
                          color: theme.color,
                          backgroundColor: `${theme.color}12`,
                        }}
                        title={`${theme.name} (${theme.colorName})`}
                      >
                        <span className="badge-dot" style={{ backgroundColor: theme.color }} />
                        {code}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Industrial Infrastructure Section */}
      <section className="panel-modern" id="industry" aria-labelledby="industry-heading">
        <div className="panel-header">
          <div className="panel-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
            </svg>
          </div>
          <div>
            <h2 id="industry-heading">Industrial Infrastructure by Belt</h2>
            <p className="panel-sub">Target manufacturing sectors and investment regions planned per corridor.</p>
          </div>
        </div>

        <div className="industry-cards-stack">
          {corridors.map((c) => (
            <div
              key={c.id}
              className="infrastructure-item-card"
              style={{ borderLeftColor: c.color }}
            >
              <div className="infra-header-row">
                <span className="infra-num-badge" style={{ backgroundColor: c.color, color: c.textColor }}>
                  {c.number}
                </span>
                <h3 className="infra-title">{c.code} — {c.name}</h3>
              </div>
              <p className="infra-desc">{c.industry}</p>
              <div className="infra-nodes-row">
                <strong>Nodes:</strong>
                <span>{c.nodes.join(" · ")}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logistics Section */}
      <section className="panel-modern" id="logistics" aria-labelledby="logistics-heading">
        <div className="panel-header">
          <div className="panel-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="18" height="14" x="3" y="5" rx="2"/>
              <path d="M7 15h10"/>
              <circle cx="8" cy="19" r="1"/>
              <circle cx="16" cy="19" r="1"/>
            </svg>
          </div>
          <div>
            <h2 id="logistics-heading">Logistics & Multimodal Connectivity</h2>
            <p className="panel-sub">Dedicated freight corridors, expressways, and maritime ports to market.</p>
          </div>
        </div>

        <div className="logistics-cards-stack">
          {corridors.map((c) => (
            <div
              key={c.id}
              className="infrastructure-item-card"
              style={{ borderLeftColor: c.color }}
            >
              <div className="infra-header-row">
                <span className="infra-num-badge" style={{ backgroundColor: c.color, color: c.textColor }}>
                  {c.number}
                </span>
                <h3 className="infra-title">{c.name}</h3>
              </div>
              <p className="infra-desc">{c.logistics}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Official References */}
      <section className="panel-modern" id="references" aria-labelledby="references-heading">
        <div className="panel-header">
          <div className="panel-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
              <path d="M6 6h10"/>
              <path d="M6 10h10"/>
            </svg>
          </div>
          <div>
            <h2 id="references-heading">Official References & Public Sources</h2>
            <p className="panel-sub">Primary public implementing agencies and nodal departments.</p>
          </div>
        </div>

        <div className="references-grid">
          {references.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="reference-link-card"
            >
              <div className="ref-title-row">
                <h4>{item.name}</h4>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </div>
              <p>{item.detail}</p>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
