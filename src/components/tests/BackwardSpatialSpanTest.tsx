"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "showing" | "recall" | "result";

const GRID_SIZE = 4;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;
const START_LENGTH = 3;
const SHOW_MS = 700;

function randomUniqueIndices(count: number): number[] {
  const pool = Array.from({ length: TOTAL_CELLS }, (_, i) => i);
  const result: number[] = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    result.push(pool[idx]);
    pool.splice(idx, 1);
  }
  return result;
}

export function BackwardSpatialSpanTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [sequence, setSequence] = useState<number[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [userInput, setUserInput] = useState<number[]>([]);
  const [level, setLevel] = useState(START_LENGTH);
  const [lives, setLives] = useState(3);
  const [bestSpan, setBestSpan] = useState(0);

  const playSequence = (seq: number[]) => {
    setHighlightIndex(-1);
    setUserInput([]);
    setPhase("showing");
    seq.forEach((cell, i) => {
      window.setTimeout(() => {
        setHighlightIndex(cell);
      }, i * SHOW_MS);
      window.setTimeout(() => {
        setHighlightIndex(-1);
      }, i * SHOW_MS + SHOW_MS * 0.6);
    });
    window.setTimeout(() => {
      setPhase("recall");
    }, seq.length * SHOW_MS);
  };

  const start = () => {
    setLevel(START_LENGTH);
    setLives(3);
    setBestSpan(0);
    const seq = randomUniqueIndices(START_LENGTH);
    setSequence(seq);
    playSequence(seq);
  };

  const clickCell = (index: number) => {
    if (phase !== "recall") return;
    const next = [...userInput, index];
    setUserInput(next);

    const expected = [...sequence].reverse();
    const position = next.length - 1;
    if (expected[position] !== index) {
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) {
        setPhase("result");
        return;
      }
      const seq = randomUniqueIndices(level);
      setSequence(seq);
      window.setTimeout(() => playSequence(seq), 800);
      return;
    }

    if (next.length === sequence.length) {
      setBestSpan((b) => Math.max(b, level));
      const nextLevel = level + 1;
      setLevel(nextLevel);
      const seq = randomUniqueIndices(nextLevel);
      setSequence(seq);
      window.setTimeout(() => playSequence(seq), 800);
    }
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="backward-spatial-span-test"
          direction="higher"
          value={bestSpan}
          unitLabel="longest span recalled"
          headline="Backward Spatial Span Result"
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
            Watch a sequence of cells light up on a {GRID_SIZE}x{GRID_SIZE} grid, then click them back in{" "}
            <strong>reverse order</strong>. Each success adds one more cell to the sequence. You have 3 lives.
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
          Span {level} &middot; Lives {lives} {phase === "recall" ? "— Click cells in REVERSE order" : "— Watch"}
        </p>
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: TOTAL_CELLS }).map((_, i) => (
            <button
              key={i}
              onClick={() => clickCell(i)}
              disabled={phase !== "recall"}
              className={`h-12 w-12 rounded-md border transition-colors ${
                highlightIndex === i
                  ? "border-primary bg-primary"
                  : userInput.includes(i)
                    ? "border-accent bg-accent/20"
                    : "border-border bg-surface-2 hover:border-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
