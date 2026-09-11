"use client";

import { useEffect, useState } from "react";
import { AdUnit, useAdPlacement } from "@/components/ads/AdSlot";

const DISMISS_KEY = "ads:anchor-dismissed";

/**
 * A persistent bottom bar present on every page — the highest-impression placement
 * since it never competes with page content for space. Renders nothing unless an
 * "anchor" slot is active, and the visitor can dismiss it for the rest of the tab
 * session (sessionStorage), so it never becomes unremovable clutter.
 */
export function AdAnchorBar() {
  const { active } = useAdPlacement("anchor");
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      // One-time mount effect reading persisted dismissal — not a props/state sync.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  const visible = active.length > 0 && !dismissed;
  const slot = active[0];

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.paddingBottom;
    document.body.style.paddingBottom = `${slot.height}px`;
    return () => {
      document.body.style.paddingBottom = prev;
    };
  }, [visible, slot?.height]);

  if (!visible || !slot) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // sessionStorage unavailable — dismissal just won't persist across reloads, not fatal.
    }
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center border-t border-border bg-surface/95 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="relative flex w-full max-w-full items-center justify-center px-8" style={{ minHeight: slot.height }}>
        <AdUnit slot={slot} />
        <button
          onClick={dismiss}
          aria-label="Close ad"
          className="absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-surface-2 text-xs font-bold text-muted-2 hover:text-foreground"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
