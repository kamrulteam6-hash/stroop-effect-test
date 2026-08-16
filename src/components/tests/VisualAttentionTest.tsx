"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";
const TOTAL_TRIALS = 10;
const TRIAL_TIMEOUT = 6000;
const SHAPE = "▲";
const ROTATED = "▼";

function now(): number {
  return performance.now();
}

function makeGrid(size: number): { cells: string[]; targetIndex: number } {
  const cells = Array.from({ length: size }, () => SHAPE);
  const targetIndex = Math.floor(Math.random() * size);
  cells[targetIndex] = ROTATED;
  return { cells, targetIndex };
}

export function VisualAttentionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trial, setTrial] = useState(0);
  const [grid, setGrid] = useState(() => makeGrid(16));
  const [correct, setCorrect] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const startRef = useRef(0);
  const respondedRef = useRef(false);

  const gridSize = () => Math.min(64, 16 + trial * 5);

  useEffect(() => {
    if (phase !== "running" || trial >= TOTAL_TRIALS) return;
    respondedRef.current = false;
    startRef.current = now();
    const id = setTimeout(() => {
      if (!respondedRef.current) {
        const next = trial + 1;
        setTrial(next);
        setGrid(makeGrid(Math.min(64, 16 + next * 5)));
        if (next >= TOTAL_TRIALS) setPhase("result");
      }
    }, TRIAL_TIMEOUT);
    return () => clearTimeout(id);
  }, [trial, phase]);

  const start = () => {
    setTrial(0);
    setGrid(makeGrid(16));
    setCorrect(0);
    setTimes([]);
    setPhase("running");
  };

  const pick = (i: number) => {
    if (respondedRef.current || phase !== "running") return;
    respondedRef.current = true;
    const rt = now() - startRef.current;
    if (i === grid.targetIndex) {
      setCorrect((c) => c + 1);
      setTimes((t) => [...t, rt]);
    }
    const next = trial + 1;
    setTrial(next);
    setGrid(makeGrid(Math.min(64, 16 + next * 5)));
    if (next >= TOTAL_TRIALS) setPhase("result");
  };

  if (phase === "result") {
    const accuracy = (correct / TOTAL_TRIALS) * 100;
    const avgRT = times.length > 0 ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : TRIAL_TIMEOUT;
    return (
      <TestFrame>
        <ResultScreen
          slug="visual-attention-test"
          direction="higher"
          value={Math.round(accuracy)}
          unitLabel="% Accuracy"
          extraStats={[
            { label: "Found", value: `${correct}/${TOTAL_TRIALS}` },
            { label: "Avg Search Time", value: `${avgRT} ms` },
          ]}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">🔍</span>
          <p className="max-w-sm text-sm text-muted">
            A grid of identical triangles hides one that&apos;s flipped upside down. Find and click it as quickly
            as you can — the grid grows larger each round.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const cols = Math.ceil(Math.sqrt(gridSize()));

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-4">
        <p className="text-xs font-medium text-muted-2">
          Trial {Math.min(trial + 1, TOTAL_TRIALS)} / {TOTAL_TRIALS} — {gridSize()} shapes
        </p>
        <div
          className="grid gap-1.5"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {grid.cells.map((c, i) => (
            <button
              key={i}
              onClick={() => pick(i)}
              className="flex h-8 w-8 items-center justify-center rounded-md bg-surface-2 text-lg text-foreground hover:bg-primary/10 sm:h-10 sm:w-10"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
