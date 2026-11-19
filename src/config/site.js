/**
 * Printed QR codes must encode the permanent public site, never a dev server.
 * Set VITE_PUBLIC_SITE_URL in the production environment.
 * Drop the photographed printed map at one of MAP_IMAGE_CANDIDATES.
 * The viewer shows that file as-is: it is not redrawn or restyled.
 */
export const MAP_IMAGE_CANDIDATES = [
  "/maps/economic-corridors.webp",
  "/maps/economic-corridors.jpg",
  "/maps/economic-corridors.jpeg",
  "/maps/economic-corridors.png",
];

const BLOCKED_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1", "[::1]"]);

export function normalizeProductionOrigin(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    throw new Error("Enter the permanent production website URL.");
  }

  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  let url;
  try {
    url = new URL(withProtocol);
  } catch {
    throw new Error("Enter a full website URL, including https://.");
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error("Use an http or https website URL.");
  }

  const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (BLOCKED_HOSTS.has(host) || host.endsWith(".local") || host.endsWith(".localhost")) {
    throw new Error("QR codes must use the production website, not a local address.");
  }

  return url.origin;
}

export function readConfiguredOrigin() {
  const configured = import.meta.env.VITE_PUBLIC_SITE_URL;
  if (!configured) return "";
  try {
    return normalizeProductionOrigin(configured);
  } catch {
    return "";
  }
}

export function configuredUrlWasRejected() {
  const configured = import.meta.env.VITE_PUBLIC_SITE_URL;
  if (!configured) return false;
  try {
    normalizeProductionOrigin(configured);
    return false;
  } catch {
    return true;
  }
}

export function scanUrlFor(origin) {
  const safeOrigin = normalizeProductionOrigin(origin);
  return `${safeOrigin}/scan`;
}
