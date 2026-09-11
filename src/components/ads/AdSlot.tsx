"use client";

import { useEffect, useRef, useState } from "react";

export interface AdSlotRecord {
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

/** Fetches the active, enabled slots for a placement. Shared by <AdSlot/> and <AdAnchorBar/> so both know, before rendering any chrome, whether there's actually an ad to show. */
export function useAdPlacement(placement: string): { active: AdSlotRecord[]; loaded: boolean } {
  const [slots, setSlots] = useState<AdSlotRecord[] | undefined>(undefined);
  const [globallyEnabled, setGloballyEnabled] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadConfig().then((config) => {
      if (cancelled) return;
      setGloballyEnabled(!!config?.adsGloballyEnabled);
      setSlots(config?.slots.filter((s) => s.placement === placement) ?? []);
    });
    return () => {
      cancelled = true;
    };
  }, [placement]);

  if (!globallyEnabled || !slots) return { active: [], loaded: slots !== undefined };
  return { active: slots.filter((s) => s.enabled && s.adCode.trim()), loaded: true };
}

/** Renders exactly one ad unit. Each unit gets its own idle-load and its own reserved-height container. */
export function AdUnit({ slot }: { slot: AdSlotRecord }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const injectedRef = useRef(false);

  useEffect(() => {
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
  }, [slot]);

  return (
    <div
      ref={containerRef}
      data-ad-slot={slot.id}
      data-ad-type={slot.type}
      aria-hidden="true"
      className="mx-auto flex w-full max-w-full items-center justify-center overflow-hidden"
      style={{ minHeight: slot.height }}
    />
  );
}

/**
 * Renders every enabled ad slot assigned to this placement — zero, one, or many.
 * Pages never reference ad networks directly; how many ads show at a given spot,
 * and what they run, is controlled entirely from the admin panel's Ads tab. To
 * add more ads at a spot that already exists in the page, no code change is
 * needed — just add another slot in the admin with the same placement.
 */
export function AdSlot({ placement, gap = "gap-4", className = "" }: { placement: string; gap?: string; className?: string }) {
  const { active } = useAdPlacement(placement);
  if (active.length === 0) return null;

  return (
    <div data-ad-placement={placement} className={`flex w-full flex-col items-center ${gap} ${className}`}>
      {active.map((slot) => (
        <AdUnit key={slot.id} slot={slot} />
      ))}
    </div>
  );
}
