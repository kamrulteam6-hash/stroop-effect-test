"use client";

import { useEffect, useRef, useState } from "react";

interface AdSlotRecord {
  id: string;
  label: string;
  type: string;
  adCode: string;
  placement: string;
  enabled: boolean;
  height: number;
}

interface AdsConfig {
  adsGloballyEnabled: boolean;
  slots: AdSlotRecord[];
}

let cachedConfig: AdsConfig | null = null;
let configPromise: Promise<AdsConfig | null> | null = null;

/** Fetched once per page load and shared by every <AdSlot/> instance on the page. */
function loadConfig(): Promise<AdsConfig | null> {
  if (cachedConfig) return Promise.resolve(cachedConfig);
  if (!configPromise) {
    configPromise = fetch("/api/ads/config", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: AdsConfig | null) => {
        cachedConfig = data;
        return data;
      })
      .catch(() => null);
  }
  return configPromise;
}

function injectAdCode(container: HTMLDivElement, adCode: string) {
  const temp = document.createElement("div");
  temp.innerHTML = adCode;
  // innerHTML never executes embedded <script> tags, so scripts must be recreated and re-appended manually.
  Array.from(temp.childNodes).forEach((node) => {
    if (node.nodeName === "SCRIPT") {
      const old = node as HTMLScriptElement;
      const fresh = document.createElement("script");
      Array.from(old.attributes).forEach((attr) => fresh.setAttribute(attr.name, attr.value));
      fresh.text = old.text;
      container.appendChild(fresh);
    } else {
      container.appendChild(node.cloneNode(true));
    }
  });
}

/**
 * Renders one ad placement by id. Pages never reference ad networks directly — everything
 * (whether it's on, what code it runs) is controlled from the admin panel's Ads tab.
 */
export function AdSlot({ id }: { id: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const injectedRef = useRef(false);
  const [slot, setSlot] = useState<AdSlotRecord | null | undefined>(undefined);
  const [globallyEnabled, setGloballyEnabled] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadConfig().then((config) => {
      if (cancelled) return;
      setGloballyEnabled(!!config?.adsGloballyEnabled);
      setSlot(config?.slots.find((s) => s.id === id) ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, [id]);

  useEffect(() => {
    if (!slot || !slot.enabled || !globallyEnabled) return;
    if (injectedRef.current) return;
    const container = containerRef.current;
    if (!container || !slot.adCode.trim()) return;
    injectedRef.current = true;

    // Loaded on idle time so ad scripts never delay page interactivity — critical on a
    // reaction-time testing site where a blocked main thread would skew results.
    const run = () => injectAdCode(container, slot.adCode);
    const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(run, { timeout: 2000 });
    } else {
      window.setTimeout(run, 200);
    }
  }, [slot, globallyEnabled]);

  if (!globallyEnabled || !slot || !slot.enabled) return null;

  return (
    <div
      ref={containerRef}
      data-ad-slot={id}
      aria-hidden="true"
      className="mx-auto flex w-full max-w-full items-center justify-center overflow-hidden"
      style={{ minHeight: slot.height }}
    />
  );
}
