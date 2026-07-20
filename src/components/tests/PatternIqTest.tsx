"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

const SHAPE_POOL = ["●", "■", "▲", "★", "◆", "⬟"];
const ROUNDS = 8;

interface Cell {
  shape: string;
  count: number;
}

interface Puzzle {
  rowShapes: string[];
  colCounts: number[];
  options: Cell[];
  correctIndex: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generatePuzzle(): Puzzle {
  const rowShapes = shuffle(SHAPE_POOL).slice(0, 3);
  const colCounts = shuffle([1, 2, 3]);

  const correct: Cell = { shape: rowShapes[2], count: colCounts[2] };
  const distractors: Cell[] = [
    { shape: rowShapes[2], count: colCounts[0] },
    { shape: rowShapes[0], count: colCounts[2] },
    { shape: rowShapes[1], count: colCounts[1] },
  ];

  const options = shuffle([correct, ...distractors]);
  const correctIndex = options.findIndex((o) => o.shape === correct.shape && o.count === correct.count);

  return { rowShapes, colCounts, options, correctIndex };
}

function CellDisplay({ shape, count }: { shape: string; count: number }) {
  return (
    <span className="flex flex-wrap items-center justify-center gap-0.5 text-lg sm:text-xl">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>{shape}</span>
      ))}
    </span>
  );
}

type Phase = "idle" | "quiz" | "result";

export function PatternIqTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [round, setRound] = useState(0);
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const start = () => {
    setRound(0);
    setCorrectCount(0);
    setSelected(null);
    setPuzzle(generatePuzzle());
    setPhase("quiz");
  };

  const choose = (idx: number) => {
    if (selected !== null || !puzzle) return;
    setSelected(idx);
    const isCorrect = idx === puzzle.correctIndex;
    if (isCorrect) setCorrectCount((c) => c + 1);

    window.setTimeout(() => {
      const next = round + 1;
      if (next >= ROUNDS) {
        setPhase("result");
      } else {
        setRound(next);
        setPuzzle(generatePuzzle());
        setSelected(null);
      }
    }, 700);
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="pattern-iq-test"
          direction="higher"
          value={correctCount}
          unitLabel={`out of ${ROUNDS} correct`}
          shareLabel={`I solved ${correctCount}/${ROUNDS} matrix reasoning puzzles on the Pattern IQ Test!`}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle" || !puzzle) {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Each grid follows two simple rules — one across rows, one across columns. Figure out both, then pick the
            option that completes the missing cell.
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
      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Puzzle {round + 1} / {ROUNDS} — Score: {correctCount}
        </p>

        <div className="grid grid-cols-3 gap-2">
          {puzzle.rowShapes.map((shape, r) =>
            puzzle.colCounts.map((count, c) => {
              const isMissing = r === 2 && c === 2;
              return (
                <div
                  key={`${r}-${c}`}
                  className="flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-surface-2 sm:h-20 sm:w-20"
                >
                  {isMissing ? <span className="text-2xl font-bold text-muted-2">?</span> : <CellDisplay shape={shape} count={count} />}
                </div>
              );
            }),
          )}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {puzzle.options.map((opt, idx) => {
            const isCorrect = idx === puzzle.correctIndex;
            const isChosen = idx === selected;
            const showState = selected !== null;
            return (
              <button
                key={idx}
                onClick={() => choose(idx)}
                disabled={selected !== null}
                className={`flex h-14 w-14 items-center justify-center rounded-lg border-2 transition-colors sm:h-16 sm:w-16 ${
                  showState && isCorrect
                    ? "border-success bg-success/10"
                    : showState && isChosen
                      ? "border-danger bg-danger/10"
                      : "border-border bg-surface-2 hover:border-primary"
                }`}
              >
                <CellDisplay shape={opt.shape} count={opt.count} />
              </button>
            );
          })}
        </div>
      </div>
    </TestFrame>
  );
}
