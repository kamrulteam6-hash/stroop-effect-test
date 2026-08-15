"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "memorize" | "search" | "result";

const GRID_SIZE = 5;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;
const TOTAL_ROUNDS = 6;
const MEMORIZE_MS = 1500;

function now(): number {
  return performance.now();
}

function randomIndex(): number {
  return Math.floor(Math.random() * TOTAL_CELLS);
}

export function SpatialSearchTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [round, setRound] = useState(0);
  const [targetIndex, setTargetIndex] = useState(0);
  const [rts, setRts] = useState<number[]>([]);
  const [searchStart, setSearchStart] = useState(0);
  const [misses, setMisses] = useState(0);

  const runRound = () => {
    setTargetIndex(randomIndex());
    setPhase("memorize");
    window.setTimeout(() => {
      setPhase("search");
      setSearchStart(now());
    }, MEMORIZE_MS);
  };

  const start = () => {
    setRound(0);
    setRts([]);
    setMisses(0);
    runRound();
  };

  const clickCell = (index: number) => {
    if (phase !== "search") return;
    if (index !== targetIndex) {
      setMisses((m) => m + 1);
      return;
    }
    const rt = now() - searchStart;
    setRts((r) => [...r, rt]);

    const next = round + 1;
    if (next >= TOTAL_ROUNDS) {
      setPhase("result");
      return;
    }
    setRound(next);
    runRound();
  };

  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="spatial-search-test"
          direction="lower"
          value={avgRt}
          unitLabel="ms average search time"
          headline="Spatial Search Result"
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
            A single cell will briefly highlight on a {GRID_SIZE}x{GRID_SIZE} grid. Remember its location, then
            click that same cell once the grid goes blank, as fast as you can, across {TOTAL_ROUNDS} rounds.
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
          Round {round + 1} / {TOTAL_ROUNDS} — {phase === "memorize" ? "Memorize the location" : "Click it!"}
        </p>
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: TOTAL_CELLS }).map((_, i) => (
            <button
              key={i}
              onClick={() => clickCell(i)}
              className={`h-10 w-10 rounded-md border transition-colors ${
                phase === "memorize" && i === targetIndex
                  ? "border-primary bg-primary"
                  : "border-border bg-surface-2 hover:border-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
