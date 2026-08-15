"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const SHAPES = ["●", "■", "▲", "◆"] as const;
const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#eab308"];

interface Cell {
  shape: string;
  color: string;
}

interface Puzzle {
  sequence: Cell[];
  options: Cell[];
  correctIndex: number;
}

function generatePuzzle(): Puzzle {
  const shapeCycle = [...SHAPES].sort(() => Math.random() - 0.5).slice(0, 3);
  const colorCycle = [...COLORS].sort(() => Math.random() - 0.5).slice(0, 3);

  const sequence: Cell[] = Array.from({ length: 5 }, (_, i) => ({
    shape: shapeCycle[i % shapeCycle.length],
    color: colorCycle[i % colorCycle.length],
  }));

  const correct: Cell = { shape: shapeCycle[5 % shapeCycle.length], color: colorCycle[5 % colorCycle.length] };

  const options: Cell[] = [correct];
  while (options.length < 4) {
    const fake: Cell = {
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
    if (fake.shape !== correct.shape || fake.color !== correct.color) options.push(fake);
  }

  const correctIndex = Math.floor(Math.random() * 4);
  [options[0], options[correctIndex]] = [options[correctIndex], options[0]];

  return { sequence, options, correctIndex };
}

const TOTAL_TRIALS = 8;

function now(): number {
  return performance.now();
}

export function PatternCompletionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [puzzle, setPuzzle] = useState<Puzzle>(() => generatePuzzle());
  const [correctCount, setCorrectCount] = useState(0);
  const [rts, setRts] = useState<number[]>([]);
  const [trialStart, setTrialStart] = useState(0);

  const start = () => {
    setTrialIndex(0);
    setCorrectCount(0);
    setRts([]);
    setPuzzle(generatePuzzle());
    setTrialStart(now());
    setPhase("running");
  };

  const answer = (choiceIndex: number) => {
    const rt = now() - trialStart;
    if (choiceIndex === puzzle.correctIndex) {
      setCorrectCount((c) => c + 1);
      setRts((r) => [...r, rt]);
    }

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    setPuzzle(generatePuzzle());
    setTrialStart(now());
  };

  const accuracy = Math.round((correctCount / TOTAL_TRIALS) * 100);
  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="pattern-completion-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          headline="Pattern Completion Result"
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
            Study the repeating sequence of shapes and colors, then pick the item that continues the pattern, across{" "}
            {TOTAL_TRIALS} rounds.
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
        <div className="flex items-center gap-2">
          {puzzle.sequence.map((cell, i) => (
            <span key={i} className="text-3xl" style={{ color: cell.color }}>
              {cell.shape}
            </span>
          ))}
          <span className="text-3xl text-muted-2">?</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {puzzle.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => answer(i)}
              className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-surface-2 text-2xl transition-colors hover:border-primary/40"
              style={{ color: opt.color }}
            >
              {opt.shape}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
