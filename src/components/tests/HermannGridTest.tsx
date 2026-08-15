"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const GRID_SIZE = 6;
const CELL = 40;
const TOTAL_TRIALS = 8;

function now(): number {
  return performance.now();
}

function randomIntersection(): { row: number; col: number } {
  return {
    row: 1 + Math.floor(Math.random() * (GRID_SIZE - 1)),
    col: 1 + Math.floor(Math.random() * (GRID_SIZE - 1)),
  };
}

export function HermannGridTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [target, setTarget] = useState({ row: 3, col: 3 });
  const [trialStart, setTrialStart] = useState(0);
  const [rts, setRts] = useState<number[]>([]);
  const [misses, setMisses] = useState(0);

  const runTrial = () => {
    setTarget(randomIntersection());
    setTrialStart(now());
  };

  const start = () => {
    setTrialIndex(0);
    setRts([]);
    setMisses(0);
    setPhase("running");
    runTrial();
  };

  const clickIntersection = (row: number, col: number) => {
    if (phase !== "running") return;
    if (row !== target.row || col !== target.col) {
      setMisses((m) => m + 1);
      return;
    }
    const rt = now() - trialStart;
    setRts((r) => [...r, rt]);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    runTrial();
  };

  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="hermann-grid-illusion-test"
          direction="lower"
          value={avgRt}
          unitLabel="ms average time per intersection"
          headline="Hermann Grid Result"
          extraStats={[{ label: "Wrong Clicks", value: `${misses}` }]}
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
            The Hermann grid illusion makes ghostly gray dots appear at the white intersections of a black grid.
            Click the highlighted intersection as fast as you can across {TOTAL_TRIALS} rounds, ignoring the
            phantom dots.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <div
          className="relative bg-black"
          style={{ width: GRID_SIZE * CELL, height: GRID_SIZE * CELL }}
        >
          {Array.from({ length: GRID_SIZE - 1 }).map((_, r) =>
            Array.from({ length: GRID_SIZE - 1 }).map((_, c) => (
              <div
                key={`${r}-${c}`}
                className="absolute bg-white"
                style={{ left: c * CELL + 8, top: r * CELL + 8, width: CELL - 8, height: CELL - 8 }}
              />
            ))
          )}
          {Array.from({ length: GRID_SIZE - 1 }).map((_, r) =>
            Array.from({ length: GRID_SIZE - 1 }).map((_, c) => {
              const row = r + 1;
              const col = c + 1;
              const isTarget = row === target.row && col === target.col;
              return (
                <button
                  key={`click-${r}-${c}`}
                  onClick={() => clickIntersection(row, col)}
                  className="absolute flex items-center justify-center"
                  style={{ left: c * CELL, top: r * CELL, width: 16, height: 16 }}
                >
                  {isTarget && <span className="h-2 w-2 rounded-full bg-accent" />}
                </button>
              );
            })
          )}
        </div>
      </div>
    </TestFrame>
  );
}
