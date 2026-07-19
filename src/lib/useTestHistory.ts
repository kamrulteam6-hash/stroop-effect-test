"use client";

import { useCallback, useEffect, useState } from "react";

export type ScoreDirection = "higher" | "lower";

interface HistoryEntry {
  value: number;
  date: string;
}

const STORAGE_PREFIX = "stroop-effect-test:v1:";
const MAX_ENTRIES = 20;

function readHistory(slug: string): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + slug);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function isBetter(direction: ScoreDirection, candidate: number, current: number) {
  return direction === "higher" ? candidate > current : candidate < current;
}

function bestOf(direction: ScoreDirection, entries: HistoryEntry[]): number | null {
  if (!entries.length) return null;
  return entries.reduce((acc, h) => (isBetter(direction, h.value, acc) ? h.value : acc), entries[0].value);
}

export function useTestHistory(slug: string, direction: ScoreDirection) {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isNewBest, setIsNewBest] = useState(false);

  useEffect(() => {
    // Hydrate from localStorage post-mount only — reading it during render
    // would desync the client's first paint from the server-rendered HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHistory(readHistory(slug));
    setIsNewBest(false);
  }, [slug]);

  const best = bestOf(direction, history);

  // Reads localStorage directly rather than trusting the `history` state
  // closure: this can run in the same commit as the hydration effect above,
  // before that setHistory's update is visible to this render's closures —
  // using the (possibly still-empty) `history` state here would silently
  // overwrite previously saved results instead of appending to them.
  const addResult = useCallback(
    (value: number) => {
      const current = readHistory(slug);
      const previousBest = bestOf(direction, current);
      const nextEntry: HistoryEntry = { value, date: new Date().toISOString() };
      const next = [...current, nextEntry].slice(-MAX_ENTRIES);
      setHistory(next);
      try {
        window.localStorage.setItem(STORAGE_PREFIX + slug, JSON.stringify(next));
      } catch {
        // localStorage unavailable (private mode, etc.) — history just won't persist
      }
      const newBest = previousBest === null || isBetter(direction, value, previousBest);
      setIsNewBest(newBest);
      return newBest;
    },
    [slug, direction]
  );

  const reset = useCallback(() => setIsNewBest(false), []);

  return { history: history.map((h) => h.value), best, isNewBest, addResult, resetNewBest: reset };
}
