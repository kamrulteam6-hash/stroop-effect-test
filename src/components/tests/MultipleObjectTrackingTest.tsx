"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type TargetCount = 2 | 3 | 4;
type Phase = "idle" | "highlight" | "moving" | "selecting" | "result";

const DOT_COUNT = 8;
const DOT_SIZE = 26;
const SPEED = 65;
const HIGHLIGHT_MS = 2500;
const MOVE_MS = 7000;
const MIN_SPACING = DOT_SIZE + 16;

interface Dot {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

function placeDots(width: number, height: number): Dot[] {
  const dots: Dot[] = [];
  for (let id = 0; id < DOT_COUNT; id++) {
    let x = 0;
    let y = 0;
    let attempts = 0;
    let ok = false;
    while (attempts < 60 && !ok) {
      x = Math.random() * (width - DOT_SIZE);
      y = Math.random() * (height - DOT_SIZE);
      ok = dots.every((d) => Math.hypot(d.x - x, d.y - y) >= MIN_SPACING);
      attempts++;
    }
    const angle = Math.random() * Math.PI * 2;
    dots.push({ id, x, y, vx: Math.cos(angle) * SPEED, vy: Math.sin(angle) * SPEED });
  }
  return dots;
}

export function MultipleObjectTrackingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [targetCount, setTargetCount] = useState<TargetCount>(3);
  const [dots, setDots] = useState<Dot[]>([]);
  const [targetIds, setTargetIds] = useState<Set<number>>(new Set());
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [moveProgress, setMoveProgress] = useState(0);
  const areaRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number | undefined>(undefined);
  const lastTsRef = useRef<number | undefined>(undefined);
  const boundsRef = useRef({ width: 500, height: 380 });

  useEffect(() => () => cancelAnimationFrame(rafRef.current as number), []);

  const start = () => {
    const area = areaRef.current;
    const rect = area?.getBoundingClientRect();
    const width = rect?.width || 500;
    const height = rect?.height || 380;
    boundsRef.current = { width, height };

    const newDots = placeDots(width, height);
    const ids = Array.from({ length: DOT_COUNT }, (_, i) => i);
    const shuffled = [...ids].sort(() => Math.random() - 0.5);
    const targets = new Set(shuffled.slice(0, targetCount));

    dotsRef.current = newDots;
    setDots(newDots);
    setTargetIds(targets);
    setSelectedIds(new Set());
    setMoveProgress(0);
    setPhase("highlight");
  };

  useEffect(() => {
    if (phase !== "highlight") return;
    const t = window.setTimeout(() => setPhase("moving"), HIGHLIGHT_MS);
    return () => window.clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "moving") return;
    lastTsRef.current = undefined;
    let startTs: number | undefined;

    function step(ts: number) {
      if (startTs === undefined) startTs = ts;
      if (lastTsRef.current === undefined) lastTsRef.current = ts;
      const dt = Math.min((ts - lastTsRef.current) / 1000, 0.05);
      lastTsRef.current = ts;
      const elapsed = ts - startTs;

      const { width, height } = boundsRef.current;
      const next = dotsRef.current.map((d) => {
        let { x, y, vx, vy } = d;
        x += vx * dt;
        y += vy * dt;
        if (x <= 0 || x >= width - DOT_SIZE) vx *= -1;
        if (y <= 0 || y >= height - DOT_SIZE) vy *= -1;
        x = Math.min(Math.max(x, 0), width - DOT_SIZE);
        y = Math.min(Math.max(y, 0), height - DOT_SIZE);
        return { ...d, x, y, vx, vy };
      });
      dotsRef.current = next;
      setDots(next);
      setMoveProgress(Math.min(1, elapsed / MOVE_MS));

      if (elapsed >= MOVE_MS) {
        setPhase("selecting");
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current as number);
  }, [phase]);

  const toggleSelect = (id: number) => {
    if (phase !== "selecting") return;
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else if (next.size < targetCount) {
        next.add(id);
      }
      if (next.size === targetCount) {
        window.setTimeout(() => setPhase("result"), 300);
      }
      return next;
    });
  };

  const correctCount = Array.from(selectedIds).filter((id) => targetIds.has(id)).length;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="multiple-object-tracking-test"
          direction="higher"
          value={correctCount}
          unitLabel={`out of ${targetCount} correct`}
          extraStats={[{ label: "Targets", value: `${targetCount}` }, { label: "Total Dots", value: `${DOT_COUNT}` }]}
          shareLabel={`I correctly tracked ${correctCount}/${targetCount} targets on the Multiple Object Tracking Test!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">🎯</span>
          <p className="max-w-sm text-sm text-muted">
            A few dots will highlight briefly, then all dots look identical and start moving. Track the highlighted
            ones with your eyes, then click them once they stop.
          </p>
          <OptionsBar>
            <Segmented
              label="Targets"
              value={targetCount}
              onChange={setTargetCount}
              options={[
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
              ]}
            />
          </OptionsBar>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame className="p-0">
      <div className="absolute left-0 top-0 z-10 w-full px-3 pt-3">
        <div className="mx-auto flex max-w-xs justify-center">
          <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted-2">
            {phase === "highlight" && "👀 Memorize the highlighted dots…"}
            {phase === "moving" && "🌀 Tracking…"}
            {phase === "selecting" && `👉 Click the ${targetCount} targets (${selectedIds.size}/${targetCount})`}
          </span>
        </div>
        {phase === "moving" && (
          <div className="mx-auto mt-1.5 h-1.5 max-w-xs overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-100"
              style={{ width: `${moveProgress * 100}%` }}
            />
          </div>
        )}
      </div>
      <div ref={areaRef} className="relative h-full min-h-[420px] w-full">
        {dots.map((d) => {
          const isTarget = phase === "highlight" && targetIds.has(d.id);
          const isSelected = selectedIds.has(d.id);
          return (
            <button
              key={d.id}
              onClick={() => toggleSelect(d.id)}
              disabled={phase !== "selecting"}
              aria-label={`dot ${d.id}`}
              className={`absolute flex items-center justify-center rounded-full border-2 shadow-sm transition-colors ${
                isTarget
                  ? "scale-110 border-primary bg-primary ring-4 ring-primary/30"
                  : isSelected
                    ? "border-success bg-success"
                    : "border-border bg-foreground/70"
              }`}
              style={{ width: DOT_SIZE, height: DOT_SIZE, left: d.x, top: d.y }}
            >
              {isSelected && <span className="text-[10px] font-bold text-white">✓</span>}
            </button>
          );
        })}
      </div>
    </TestFrame>
  );
}
