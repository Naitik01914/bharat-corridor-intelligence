import { useEffect, useMemo, useRef, useState } from "react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import {
  configuredUrlWasRejected,
  normalizeProductionOrigin,
  readConfiguredOrigin,
  scanUrlFor,
} from "../config/site.js";

const STORAGE_KEY = "bci.productionSiteUrl";

function readInitialUrl() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return normalizeProductionOrigin(stored);
  } catch {
    /* ignore unavailable storage */
  }
  return readConfiguredOrigin();
}

export default function QrStudio() {
  const svgRef = useRef(null);
  const canvasRef = useRef(null);
  const [draft, setDraft] = useState("");
  const [origin, setOrigin] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const initial = readInitialUrl();
      setDraft(initial);
      setOrigin(initial);
      if (!initial && configuredUrlWasRejected()) {
        setError("The configured URL points at a local address, so it was not used.");
      }
    } catch (reason) {
      setError(reason.message);
    }
  }, []);

  const scanUrl = useMemo(() => {
    if (!origin) return "";
    try {
      return scanUrlFor(origin);
    } catch {
      return "";
    }
  }, [origin]);

  function applyUrl(event) {
    event.preventDefault();
    try {
      const next = normalizeProductionOrigin(draft);
      setOrigin(next);
      setDraft(next);
      setError("");
      localStorage.setItem(STORAGE_KEY, next);
    } catch (reason) {
      setOrigin("");
      setError(reason.message);
    }
  }

  function download(filename, href) {
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    link.click();
  }

  function downloadSvg() {
    const svg = svgRef.current?.querySelector("svg");
    if (!svg || !scanUrl) return;
    const clone = svg.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const blob = new Blob([clone.outerHTML], { type: "image/svg+xml;charset=utf-8" });
    const href = URL.createObjectURL(blob);
    download("bharat-corridor-qr.svg", href);
    URL.revokeObjectURL(href);
  }

  function downloadPng() {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (!canvas || !scanUrl) return;
    download("bharat-corridor-qr.png", canvas.toDataURL("image/png"));
  }

  return (
    <div className="qr-layout">
      <form className="qr-config no-print" onSubmit={applyUrl}>
        <p className="eyebrow">Production URL</p>
        <h2>QR code for the printed map</h2>
        <p>
          The code opens <strong>/scan</strong> on the permanent website. A local address such as
          localhost cannot be encoded.
        </p>
        <label htmlFor="production-url">Website URL</label>
        <input
          id="production-url"
          inputMode="url"
          autoCapitalize="none"
          autoCorrect="off"
          placeholder="https://your-domain.example"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
        {error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit" className="button primary">Use this URL</button>
        <div className="download-row">
          <button type="button" className="button" onClick={downloadPng} disabled={!scanUrl}>Download PNG</button>
          <button type="button" className="button" onClick={downloadSvg} disabled={!scanUrl}>Download SVG</button>
        </div>
        <button type="button" className="button quiet" onClick={() => window.print()} disabled={!scanUrl}>
          Print sticker sheet
        </button>
      </form>

      <section className="print-sheet" aria-label="Print-ready QR code">
        <p className="sheet-kicker">Physical map sticker</p>
        <h2>BHARAT CORRIDOR INTELLIGENCE</h2>
        <p className="sheet-lead">Scan to Explore India&apos;s Economic Corridors</p>
        <div className="sheet-code" ref={svgRef}>
          {scanUrl ? (
            <QRCodeSVG
              value={scanUrl}
              size={232}
              level="H"
              marginSize={2}
              bgColor="#ffffff"
              fgColor="#14221c"
              title="QR code for the Bharat Corridor Intelligence scan page"
            />
          ) : (
            <p className="sheet-waiting">Add the production URL to generate the QR code.</p>
          )}
        </div>
        <div className="qr-export-canvas" ref={canvasRef} aria-hidden="true">
          {scanUrl && (
            <QRCodeCanvas value={scanUrl} size={1200} level="H" marginSize={2} bgColor="#ffffff" fgColor="#14221c" />
          )}
        </div>
        <p className="sheet-url">{scanUrl || "Website URL"}</p>
      </section>
    </div>
  );
}
