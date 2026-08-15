"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const TOTAL_TRIALS = 6;

function randomTrueY(): number {
  return 20 + Math.random() * 40;
}

export function PoggendorffIllusionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trueOffset, setTrueOffset] = useState(0);
  const [guessY, setGuessY] = useState(100);
  const [errors, setErrors] = useState<number[]>([]);

  const start = () => {
    setTrialIndex(0);
    setErrors([]);
    setTrueOffset(randomTrueY());
    setGuessY(100);
    setPhase("running");
  };

  const confirm = () => {
    const actualY = 160 - trueOffset;
    const error = Math.abs(guessY - actualY);
    const nextErrors = [...errors, error];
    setErrors(nextErrors);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    setTrueOffset(randomTrueY());
    setGuessY(100);
  };

  const avgError = errors.length ? Math.round((errors.reduce((a, b) => a + b, 0) / errors.length) * 10) / 10 : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="poggendorff-illusion-test"
          direction="lower"
          value={avgError}
          unitLabel="px average alignment error"
          headline="Poggendorff Illusion Result"
          extraStats={[{ label: "Rounds", value: `${TOTAL_TRIALS}` }]}
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
            A diagonal line passes behind a rectangle. Drag the marker on the right side to where you believe the
            diagonal line continues — the rectangle creates a classic illusion that makes this surprisingly hard to
            judge accurately.
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
        <svg width={260} height={180} viewBox="0 0 260 180">
          <line x1={30} y1={20} x2={110} y2={160 - trueOffset} stroke="#3b82f6" strokeWidth={3} />
          <rect x={110} y={40} width={50} height={100} fill="var(--surface-2, #1e293b)" opacity={0.7} />
          <circle cx={220} cy={guessY} r={6} fill="#ef4444" />
          <line x1={160} y1={guessY} x2={220} y2={guessY} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 4" />
        </svg>
        <p className="text-xs text-muted-2">Move the red dot to continue the diagonal line</p>
        <input
          type="range"
          min={20}
          max={160}
          value={guessY}
          onChange={(e) => setGuessY(Number(e.target.value))}
          className="w-64"
        />
        <Button onClick={confirm}>Confirm Position</Button>
      </div>
    </TestFrame>
  );
}
