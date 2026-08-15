"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const DISK_COUNT = 4;
const OPTIMAL_MOVES = 2 ** DISK_COUNT - 1;

type Pegs = number[][];

function initialPegs(): Pegs {
  return [Array.from({ length: DISK_COUNT }, (_, i) => DISK_COUNT - i), [], []];
}

const DISK_COLORS = ["#3b82f6", "#22c55e", "#eab308", "#ef4444", "#a855f7", "#06b6d4"];

function now(): number {
  return performance.now();
}

export function TowerOfHanoiTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [pegs, setPegs] = useState<Pegs>(initialPegs());
  const [selected, setSelected] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [elapsedMs, setElapsedMs] = useState(0);

  const start = () => {
    setPegs(initialPegs());
    setSelected(null);
    setMoves(0);
    setStartTime(now());
    setPhase("running");
  };

  const clickPeg = (index: number) => {
    if (phase !== "running") return;
    if (selected === null) {
      if (pegs[index].length > 0) setSelected(index);
      return;
    }
    if (selected === index) {
      setSelected(null);
      return;
    }
    const fromPeg = pegs[selected];
    const toPeg = pegs[index];
    const disk = fromPeg[fromPeg.length - 1];
    const topOfTarget = toPeg[toPeg.length - 1];

    if (topOfTarget === undefined || disk < topOfTarget) {
      const newPegs = pegs.map((p) => [...p]);
      newPegs[selected].pop();
      newPegs[index].push(disk);
      setPegs(newPegs);
      setMoves((m) => m + 1);
      setSelected(null);

      if (newPegs[2].length === DISK_COUNT) {
        setElapsedMs(now() - startTime);
        setPhase("result");
      }
    } else {
      setSelected(index);
    }
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="tower-of-hanoi-test"
          direction="lower"
          value={moves}
          unitLabel="moves"
          headline="Puzzle Solved!"
          extraStats={[
            { label: "Optimal Moves", value: `${OPTIMAL_MOVES}` },
            { label: "Time", value: `${(elapsedMs / 1000).toFixed(1)}s` },
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
          <p className="max-w-sm text-sm text-muted">
            Move all {DISK_COUNT} disks from the left peg to the right peg. Click a peg to pick up its top disk,
            then click another peg to drop it. You can never place a larger disk on a smaller one.
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
          Moves: {moves} &middot; Optimal: {OPTIMAL_MOVES}
        </p>
        <div className="flex w-full max-w-md items-end justify-around gap-4">
          {pegs.map((peg, i) => (
            <button
              key={i}
              onClick={() => clickPeg(i)}
              className={`flex h-48 w-24 flex-col-reverse items-center gap-1 rounded-b-lg border-b-4 pb-1 transition-colors ${
                selected === i ? "border-primary bg-primary/5" : "border-border bg-surface-2"
              }`}
            >
              {peg.map((disk) => (
                <div
                  key={disk}
                  className="h-5 rounded"
                  style={{
                    width: `${30 + disk * 12}px`,
                    backgroundColor: DISK_COLORS[disk - 1] ?? "#999",
                  }}
                />
              ))}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
