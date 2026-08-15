"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

type CellState = 0 | 1;
type Grid = CellState[][];

function rotate90(grid: Grid): Grid {
  const n = grid.length;
  const result: Grid = Array.from({ length: n }, () => Array(n).fill(0));
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      result[c][n - 1 - r] = grid[r][c];
    }
  }
  return result;
}

function randomGrid(): Grid {
  const n = 3;
  const grid: Grid = Array.from({ length: n }, () => Array(n).fill(0));
  const filled = 3 + Math.floor(Math.random() * 3);
  let count = 0;
  while (count < filled) {
    const r = Math.floor(Math.random() * n);
    const c = Math.floor(Math.random() * n);
    if (grid[r][c] === 0) {
      grid[r][c] = 1;
      count++;
    }
  }
  return grid;
}

function gridsEqual(a: Grid, b: Grid): boolean {
  return a.every((row, r) => row.every((cell, c) => cell === b[r][c]));
}

const TOTAL_TRIALS = 8;

function now(): number {
  return performance.now();
}

interface Trial {
  base: Grid;
  candidate: Grid;
  matches: boolean;
}

function generateTrial(): Trial {
  const base = randomGrid();
  const rotations = Math.floor(Math.random() * 4);
  let rotated = base;
  for (let i = 0; i < rotations; i++) rotated = rotate90(rotated);

  const matches = Math.random() < 0.5;
  let candidate = rotated;
  if (!matches) {
    candidate = randomGrid();
    while (
      [0, 1, 2, 3].some((k) => {
        let r = base;
        for (let i = 0; i < k; i++) r = rotate90(r);
        return gridsEqual(r, candidate);
      })
    ) {
      candidate = randomGrid();
    }
  }

  return { base, candidate, matches };
}

function GridView({ grid }: { grid: Grid }) {
  return (
    <div className="grid grid-cols-3 gap-1">
      {grid.flatMap((row, r) =>
        row.map((cell, c) => (
          <div
            key={`${r}-${c}`}
            className={`h-8 w-8 rounded-sm ${cell ? "bg-primary" : "bg-surface-2"}`}
          />
        ))
      )}
    </div>
  );
}

export function SpatialReasoningTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trial, setTrial] = useState<Trial>(() => generateTrial());
  const [correctCount, setCorrectCount] = useState(0);
  const [rts, setRts] = useState<number[]>([]);
  const [trialStart, setTrialStart] = useState(0);

  const start = () => {
    const first = generateTrial();
    setTrial(first);
    setTrialIndex(0);
    setCorrectCount(0);
    setRts([]);
    setTrialStart(now());
    setPhase("running");
  };

  const answer = (guessMatch: boolean) => {
    if (phase !== "running") return;
    const rt = now() - trialStart;
    if (guessMatch === trial.matches) {
      setCorrectCount((c) => c + 1);
      setRts((r) => [...r, rt]);
    }

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrial(generateTrial());
    setTrialIndex(next);
    setTrialStart(now());
  };

  const accuracy = Math.round((correctCount / TOTAL_TRIALS) * 100);
  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="spatial-reasoning-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          headline="Spatial Reasoning Result"
          extraStats={[{ label: "Avg. RT", value: `${avgRt} ms` }]}
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
            Two grid patterns are shown. Decide whether the second pattern is a rotation of the first, or a
            completely different pattern, as fast as you can across {TOTAL_TRIALS} rounds.
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
        <div className="flex items-center gap-8">
          <GridView grid={trial.base} />
          <span className="text-muted-2">vs</span>
          <GridView grid={trial.candidate} />
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => answer(true)}>
            Same (Rotated)
          </Button>
          <Button variant="secondary" onClick={() => answer(false)}>
            Different
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
