"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Zone = "near" | "far";
type Phase = "idle" | "running" | "result";

const TRIALS = 14;
const RESPONSE_WINDOW_MS = 850;
const FLASH_MS = 220;
const MIN_ISI = 1200;
const MAX_ISI = 2600;

interface TrialResult {
  zone: Zone;
  detected: boolean;
}

interface FlashPos {
  x: number;
  y: number;
  zone: Zone;
}

function randomIsi(): number {
  return MIN_ISI + Math.random() * (MAX_ISI - MIN_ISI);
}

function randomFlash(width: number, height: number): FlashPos {
  const cx = width / 2;
  const cy = height / 2;
  const maxR = Math.min(width, height) / 2 - 20;
  const zone: Zone = Math.random() < 0.5 ? "near" : "far";
  const rFrac = zone === "near" ? 0.3 + Math.random() * 0.2 : 0.65 + Math.random() * 0.3;
  const r = maxR * rFrac;
  const angle = Math.random() * Math.PI * 2;
  return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r, zone };
}

export function PeripheralVisionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [flash, setFlash] = useState<FlashPos | null>(null);
  const [results, setResults] = useState<TrialResult[]>([]);
  const areaRef = useRef<HTMLDivElement>(null);
  const respondedRef = useRef(false);
  const timeoutsRef = useRef<number[]>([]);

  const clearTimeouts = () => {
    timeoutsRef.current.forEach((t) => window.clearTimeout(t));
    timeoutsRef.current = [];
  };

  useEffect(() => clearTimeouts, []);

  const runTrial = (index: number) => {
    const area = areaRef.current;
    const rect = area?.getBoundingClientRect();
    const width = rect?.width || 500;
    const height = rect?.height || 400;

    const isi = randomIsi();
    setFlash(null);
    respondedRef.current = false;

    const t1 = window.setTimeout(() => {
      const pos = randomFlash(width, height);
      setFlash(pos);

      const t2 = window.setTimeout(() => setFlash(null), FLASH_MS);
      const t3 = window.setTimeout(() => {
        if (!respondedRef.current) {
          setResults((r) => [...r, { zone: pos.zone, detected: false }]);
        }
        const next = index + 1;
        if (next >= TRIALS) {
          setPhase("result");
        } else {
          setTrialIndex(next);
          runTrial(next);
        }
      }, RESPONSE_WINDOW_MS);
      timeoutsRef.current.push(t2, t3);
    }, isi);
    timeoutsRef.current.push(t1);
  };

  const start = () => {
    clearTimeouts();
    setResults([]);
    setTrialIndex(0);
    setPhase("running");
    runTrial(0);
  };

  const registerDetection = () => {
    if (phase !== "running" || respondedRef.current || !flash) return;
    respondedRef.current = true;
    setResults((r) => [...r, { zone: flash.zone, detected: true }]);
  };

  useEffect(() => {
    if (phase !== "running") return;
    function onKey(e: KeyboardEvent) {
      if (e.key === " ") {
        e.preventDefault();
        registerDetection();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, flash]);

  const detectedCount = results.filter((r) => r.detected).length;
  const overallRate = results.length ? Math.round((detectedCount / results.length) * 100) : 0;
  const nearResults = results.filter((r) => r.zone === "near");
  const farResults = results.filter((r) => r.zone === "far");
  const nearRate = nearResults.length
    ? Math.round((nearResults.filter((r) => r.detected).length / nearResults.length) * 100)
    : 0;
  const farRate = farResults.length
    ? Math.round((farResults.filter((r) => r.detected).length / farResults.length) * 100)
    : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="peripheral-vision-test"
          direction="higher"
          value={overallRate}
          unitLabel="% detection rate"
          extraStats={[
            { label: "Near Zone", value: `${nearRate}%` },
            { label: "Far Zone", value: `${farRate}%` },
            { label: "Trials", value: `${TRIALS}` },
          ]}
          shareLabel={`I detected ${overallRate}% of flashes on the Peripheral Vision Test!`}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Keep your eyes fixed on the cross at the center — don&apos;t look away. Press spacebar the instant you notice
            a flash appear anywhere around it, without moving your eyes to look directly at it.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame className="p-0">
      <div className="absolute left-3 top-3 z-10 rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted-2">
        Trial {Math.min(trialIndex + 1, TRIALS)} / {TRIALS}
      </div>
      <div ref={areaRef} className="relative h-full min-h-[420px] w-full">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-foreground">
          +
        </span>
        {flash && (
          <span
            className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
            style={{ left: flash.x, top: flash.y }}
          />
        )}
      </div>
    </TestFrame>
  );
}
