import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  {
    to: "/",
    label: "Home",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    to: "/map",
    label: "Interactive Map",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
        <line x1="9" x2="9" y1="3" y2="18"/>
        <line x1="15" x2="15" y1="6" y2="21"/>
      </svg>
    ),
  },
  {
    to: "/scan",
    label: "Corridor Guide",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
  },
  {
    to: "/qr",
    label: "QR Sticker",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="5" height="5" x="3" y="3" rx="1"/>
        <rect width="5" height="5" x="16" y="3" rx="1"/>
        <rect width="5" height="5" x="3" y="16" rx="1"/>
        <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
        <path d="M21 21v.01"/>
        <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
        <path d="M3 12h.01"/>
        <path d="M12 3h.01"/>
        <path d="M12 16v.01"/>
        <path d="M16 12h1"/>
        <path d="M21 12v.01"/>
        <path d="M12 21v-1"/>
      </svg>
    ),
  },
];

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="site-wrapper">
      {/* 11 Corridors Spectrum Stripe Header Banner */}
      <div className="corridor-spectrum-stripe" aria-hidden="true" />

      {/* Dynamic Colorful Ambient Orbs in Background */}
      <div className="ambient-orbs-container" aria-hidden="true">
        <div className="ambient-orb orb-saffron" />
        <div className="ambient-orb orb-blue" />
        <div className="ambient-orb orb-green" />
        <div className="ambient-orb orb-purple" />
        <div className="ambient-orb orb-teal" />
      </div>

      <a className="skip no-print" href="#content">Skip to content</a>

      {/* Main Glass Header */}
      <header className="site-header no-print">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="Bharat Corridor Intelligence Homepage">
            <span className="brand-logo" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
            </span>
            <div className="brand-text">
              <span className="brand-title">BHARAT CORRIDOR</span>
              <span className="brand-subtitle">INTELLIGENCE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            {navItems.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                <span className="nav-icon">{link.icon}</span>
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <nav aria-label="Mobile Navigation">
              {navItems.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="nav-icon">{link.icon}</span>
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main id="content">
        <Outlet />
      </main>

      {/* Modern Responsive Footer */}
      <footer className="site-footer no-print">
        <div className="footer-inner">
          <div className="footer-brand-col">
            <div className="brand footer-brand">
              <span className="brand-logo" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </span>
              <div className="brand-text">
                <span className="brand-title">BHARAT CORRIDOR</span>
                <span className="brand-subtitle">INTELLIGENCE</span>
              </div>
            </div>
            <p className="footer-desc">
              Digital companion to the National Industrial Corridor Programme. Explore all 11
              economic corridors, dedicated freight trunks, and planned greenfield smart cities.
            </p>
            {/* Color spectrum dots */}
            <div className="spectrum-dots" title="11 National Corridor Theme Colors">
              <span style={{ backgroundColor: "#2563EB" }} title="01 DMIC (Royal Blue)" />
              <span style={{ backgroundColor: "#F97316" }} title="02 AKIC (Vibrant Orange)" />
              <span style={{ backgroundColor: "#16A34A" }} title="03 CBIC (Forest Green)" />
              <span style={{ backgroundColor: "#9333EA" }} title="04 VCIC (Purple)" />
              <span style={{ backgroundColor: "#DC2626" }} title="05 BMIC (Crimson Red)" />
              <span style={{ backgroundColor: "#0D9488" }} title="06 CBIC-Ext (Teal)" />
              <span style={{ backgroundColor: "#EAB308" }} title="07 HNIC (Golden Yellow)" />
              <span style={{ backgroundColor: "#DB2777" }} title="08 HWIC (Magenta Pink)" />
              <span style={{ backgroundColor: "#92400E" }} title="09 HBIC (Chocolate Brown)" />
              <span style={{ backgroundColor: "#64748B" }} title="10 OEC (Slate Grey)" />
              <span style={{ backgroundColor: "#84CC16" }} title="11 DNIC (Lime Green)" />
            </div>
          </div>

          <div className="footer-nav-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/map">Interactive Map</Link></li>
              <li><Link to="/scan">Corridor Directory</Link></li>
              <li><Link to="/qr">Physical Map QR Sticker</Link></li>
            </ul>
          </div>

          <div className="footer-info-col">
            <h4>Key Public Agencies</h4>
            <ul>
              <li><a href="https://www.nicdc.in/" target="_blank" rel="noreferrer">NICDC India</a></li>
              <li><a href="https://dpiit.gov.in/" target="_blank" rel="noreferrer">DPIIT Commerce</a></li>
              <li><a href="https://dfccil.com/" target="_blank" rel="noreferrer">DFCCIL Freight Corridors</a></li>
              <li><a href="https://shipmin.gov.in/" target="_blank" rel="noreferrer">Sagarmala Port Network</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Bharat Corridor Intelligence. Public national infrastructure directory.</p>
          <div className="badge-govt">National Infrastructure Pipeline</div>
        </div>
      </footer>

      {/* Mobile Sticky Quick Navigation Bar */}
      <nav className="mobile-bottom-bar no-print" aria-label="Mobile Quick Nav">
        {navItems.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => `mobile-bottom-item ${isActive ? "active" : ""}`}
          >
            <span className="mobile-bottom-icon">{link.icon}</span>
            <span className="mobile-bottom-label">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
