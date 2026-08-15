"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

interface Puzzle {
  foldLine: "vertical" | "horizontal";
  punchX: number;
  punchY: number;
  options: { x: number; y: number }[][];
  correctIndex: number;
}

function mirrorPoint(x: number, y: number, fold: "vertical" | "horizontal"): { x: number; y: number } {
  return fold === "vertical" ? { x: 100 - x, y } : { x, y: 100 - y };
}

function generatePuzzle(): Puzzle {
  const foldLine: "vertical" | "horizontal" = Math.random() < 0.5 ? "vertical" : "horizontal";
  const punchX = foldLine === "vertical" ? 20 + Math.random() * 20 : 20 + Math.random() * 60;
  const punchY = foldLine === "horizontal" ? 20 + Math.random() * 20 : 20 + Math.random() * 60;
  const mirrored = mirrorPoint(punchX, punchY, foldLine);
  const correctPoints = [{ x: punchX, y: punchY }, mirrored];

  const options: { x: number; y: number }[][] = [correctPoints];
  while (options.length < 4) {
    const fakeX = 10 + Math.random() * 80;
    const fakeY = 10 + Math.random() * 80;
    const fake = [{ x: punchX, y: punchY }, { x: fakeX, y: fakeY }];
    options.push(fake);
  }

  const correctIndex = Math.floor(Math.random() * 4);
  [options[0], options[correctIndex]] = [options[correctIndex], options[0]];

  return { foldLine, punchX, punchY, options, correctIndex };
}

const TOTAL_TRIALS = 6;

export function PaperFoldingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [puzzle, setPuzzle] = useState<Puzzle>(() => generatePuzzle());
  const [correctCount, setCorrectCount] = useState(0);

  const start = () => {
    setTrialIndex(0);
    setCorrectCount(0);
    setPuzzle(generatePuzzle());
    setPhase("running");
  };

  const answer = (choiceIndex: number) => {
    if (choiceIndex === puzzle.correctIndex) setCorrectCount((c) => c + 1);
    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    setPuzzle(generatePuzzle());
  };

  const accuracy = Math.round((correctCount / TOTAL_TRIALS) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="paper-folding-test"
          direction="higher"
          value={accuracy}
          unitLabel="% correct"
          headline="Paper Folding Result"
          extraStats={[{ label: "Correct", value: `${correctCount}/${TOTAL_TRIALS}` }]}
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
            A square sheet is folded in half and a hole is punched through it. Predict where the holes will appear
            when the paper is unfolded, across {TOTAL_TRIALS} rounds.
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
        <svg width={140} height={140} viewBox="0 0 100 100">
          <rect x={0} y={0} width={100} height={100} fill="var(--surface-2, #1e293b)" stroke="var(--border, #334155)" />
          {puzzle.foldLine === "vertical" ? (
            <line x1={50} y1={0} x2={50} y2={100} stroke="var(--muted-2, #94a3b8)" strokeDasharray="4 4" />
          ) : (
            <line x1={0} y1={50} x2={100} y2={50} stroke="var(--muted-2, #94a3b8)" strokeDasharray="4 4" />
          )}
          <circle cx={puzzle.punchX} cy={puzzle.punchY} r={4} fill="#ef4444" />
        </svg>
        <p className="text-xs text-muted-2">Which shows the paper unfolded?</p>
        <div className="grid grid-cols-2 gap-4">
          {puzzle.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => answer(i)}
              className="rounded-lg border border-border bg-surface-2 p-1 transition-colors hover:border-primary/40"
            >
              <svg width={80} height={80} viewBox="0 0 100 100">
                <rect x={0} y={0} width={100} height={100} fill="var(--surface, #0f172a)" />
                {opt.map((pt, j) => (
                  <circle key={j} cx={pt.x} cy={pt.y} r={4} fill="#ef4444" />
                ))}
              </svg>
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
