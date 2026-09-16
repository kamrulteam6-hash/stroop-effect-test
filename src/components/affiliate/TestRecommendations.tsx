"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import { AffiliateSection } from "@/lib/affiliate";
import { ProductRecommendations } from "./ProductRecommendations";

const ResultContext = createContext<((change: number) => void) | null>(null);

/** Shared result components register their presence; retry/unmount hides the products. */
export function ResultPresence() {
  const register = useContext(ResultContext);
  useEffect(() => {
    register?.(1);
    return () => register?.(-1);
  }, [register]);
  return null;
}

function LoadedRecommendations({ slug }: { slug: string }) {
  const [section, setSection] = useState<AffiliateSection | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/affiliates/${encodeURIComponent(slug)}`, { signal: controller.signal, cache: "no-store" })
      .then(res => res.ok ? res.json() : null)
      .then(data => { if (!controller.signal.aborted) setSection(data?.section ?? null); })
      .catch(() => {});
    return () => controller.abort();
  }, [slug]);
  return section ? <ProductRecommendations section={section} /> : null;
}

export function TestRecommendations({ slug, children }: { slug: string; children: ReactNode }) {
  const [results, setResults] = useState(0);
  const register = useCallback((change: number) => setResults(count => count + change), []);
  return <ResultContext.Provider value={register}>{results > 0 && <LoadedRecommendations key={slug} slug={slug} />}{children}</ResultContext.Provider>;
}
