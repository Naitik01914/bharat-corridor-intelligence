import { useEffect, useRef, useState } from "react";
import { MAP_IMAGE_CANDIDATES } from "../config/site.js";

const MIN_SCALE = 1;
const MAX_SCALE = 6;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

async function firstAvailableImage(sources) {
  for (const src of sources) {
    const ok = await new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(true);
      image.onerror = () => resolve(false);
      image.src = src;
    });
    if (ok) return src;
  }
  return null;
}

export default function MapViewer({ tall = false }) {
  const frameRef = useRef(null);
  const pointers = useRef(new Map());
  const pinch = useRef(null);
  const [bundledSrc, setBundledSrc] = useState(undefined);
  const [localSrc, setLocalSrc] = useState(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [cssFull, setCssFull] = useState(false);
  const [nativeFull, setNativeFull] = useState(false);

  useEffect(() => {
    let cancelled = false;
    firstAvailableImage(MAP_IMAGE_CANDIDATES).then((src) => {
      if (!cancelled) setBundledSrc(src);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (localSrc) URL.revokeObjectURL(localSrc);
    };
  }, [localSrc]);

  useEffect(() => {
    const onChange = () => setNativeFull(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("map-lock", cssFull);
    return () => document.body.classList.remove("map-lock");
  }, [cssFull]);

  const src = localSrc || bundledSrc || null;
  const waiting = bundledSrc === undefined && !localSrc;

  function resetView() {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }

  function zoomBy(factor) {
    setScale((current) => {
      const next = clamp(current * factor, MIN_SCALE, MAX_SCALE);
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  }

  async function toggleFullscreen() {
    const node = frameRef.current;
    if (!node) return;
    if (document.fullscreenElement || cssFull) {
      if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
      setCssFull(false);
      return;
    }
    if (node.requestFullscreen) {
      try {
        await node.requestFullscreen();
        return;
      } catch {
        setCssFull(true);
        return;
      }
    }
    setCssFull(true);
  }

  function onPointerDown(event) {
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = { dist: distance(a, b), scale };
    }
  }

  function onPointerMove(event) {
    const previous = pointers.current.get(event.pointerId);
    if (!previous) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const points = [...pointers.current.values()];

    if (points.length >= 2 && pinch.current) {
      const nextDistance = distance(points[0], points[1]);
      const nextScale = clamp((pinch.current.scale * nextDistance) / pinch.current.dist, MIN_SCALE, MAX_SCALE);
      setScale(nextScale);
      if (nextScale === 1) setOffset({ x: 0, y: 0 });
      return;
    }

    if (points.length === 1 && scale > 1) {
      setOffset((current) => ({
        x: current.x + (event.clientX - previous.x),
        y: current.y + (event.clientY - previous.y),
      }));
    }
  }

  function onPointerUp(event) {
    pointers.current.delete(event.pointerId);
    pinch.current = null;
  }

  function onWheel(event) {
    event.preventDefault();
    zoomBy(event.deltaY < 0 ? 1.12 : 0.9);
  }

  function onKeyDown(event) {
    if (event.key === "+" || event.key === "=") zoomBy(1.2);
    if (event.key === "-" || event.key === "_") zoomBy(0.84);
    if (event.key === "0") resetView();
    if (event.key === "Escape" && cssFull) setCssFull(false);
    const step = 24;
    if (scale > 1 && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      event.preventDefault();
      setOffset((current) => ({
        x: current.x + (event.key === "ArrowLeft" ? step : event.key === "ArrowRight" ? -step : 0),
        y: current.y + (event.key === "ArrowUp" ? step : event.key === "ArrowDown" ? -step : 0),
      }));
    }
  }

  function onFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setLocalSrc((current) => {
      if (current) URL.revokeObjectURL(current);
      return URL.createObjectURL(file);
    });
    resetView();
  }

  const expanded = cssFull || nativeFull;

  return (
    <div className={`viewer-block ${tall ? "viewer-block-tall" : ""}`}>
      <div
        ref={frameRef}
        className={`map-frame ${expanded ? "is-expanded" : ""}`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label="Digital copy of the printed economic corridors map"
      >
        <div
          className="map-stage"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onWheel={onWheel}
        >
          {waiting && <p className="map-status">Opening the map…</p>}
          {!waiting && src && (
            <img
              src={src}
              alt="Printed Bharat Corridor map"
              draggable="false"
              fetchPriority="high"
              style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})` }}
            />
          )}
          {!waiting && !src && (
            <div className="map-awaiting">
              <p className="eyebrow">Map file</p>
              <h3>Your printed map will appear here unchanged.</h3>
              <p>
                Save the photograph or scan as <code>public/maps/economic-corridors.jpg</code>. The page
                displays that image directly, with zoom and pan. It does not redraw the artwork.
              </p>
            </div>
          )}
        </div>
        <div className="map-controls" role="toolbar" aria-label="Map controls">
          <button type="button" onClick={() => zoomBy(1.25)} aria-label="Zoom in">+</button>
          <button type="button" onClick={() => zoomBy(0.8)} aria-label="Zoom out">−</button>
          <button type="button" onClick={resetView}>Reset</button>
          <button type="button" onClick={toggleFullscreen}>{expanded ? "Exit" : "Full screen"}</button>
        </div>
      </div>
      <p className="map-hint">Pinch or use the buttons to zoom. Drag to pan. The same gestures work on Android and iPhone.</p>
      <label className="file-pick">
        <span>{src ? "Replace preview with another map file" : "Preview a map image from this phone"}</span>
        <input type="file" accept="image/*" onChange={onFile} />
      </label>
    </div>
  );
}
