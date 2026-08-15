"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const TOTAL_TRIALS = 6;

function randomOffset(): number {
  return (Math.random() - 0.5) * 30;
}

export function PonzoIllusionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [adjust, setAdjust] = useState(0);
  const [errors, setErrors] = useState<number[]>([]);

  const start = () => {
    setTrialIndex(0);
    setErrors([]);
    setOffset(randomOffset());
    setAdjust(0);
    setPhase("running");
  };

  const confirm = () => {
    const actualDiff = Math.abs(offset);
    const perceivedAdjustment = Math.abs(adjust);
    const error = Math.abs(actualDiff - perceivedAdjustment);
    const nextErrors = [...errors, error];
    setErrors(nextErrors);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    setOffset(randomOffset());
    setAdjust(0);
  };

  const avgError = errors.length ? Math.round((errors.reduce((a, b) => a + b, 0) / errors.length) * 10) / 10 : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="ponzo-illusion-test"
          direction="lower"
          value={avgError}
          unitLabel="px average illusion error"
          headline="Ponzo Illusion Result"
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
            Two horizontal lines sit between converging rail-like lines. One line is actually slightly longer —
            adjust the slider until you believe both lines look equal in length, then confirm. The converging lines
            create a size illusion that&apos;s hard to fully resist.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const baseLength = 120;
  const topLength = baseLength + offset;
  const bottomLength = baseLength - offset + adjust;

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <svg width={260} height={200} viewBox="0 0 260 200">
          <line x1={40} y1={10} x2={100} y2={190} stroke="var(--muted-2, #94a3b8)" strokeWidth={2} />
          <line x1={220} y1={10} x2={160} y2={190} stroke="var(--muted-2, #94a3b8)" strokeWidth={2} />
          <line
            x1={130 - topLength / 2}
            y1={60}
            x2={130 + topLength / 2}
            y2={60}
            stroke="#3b82f6"
            strokeWidth={4}
          />
          <line
            x1={130 - bottomLength / 2}
            y1={140}
            x2={130 + bottomLength / 2}
            y2={140}
            stroke="#ef4444"
            strokeWidth={4}
          />
        </svg>
        <p className="text-xs text-muted-2">Adjust the red line until it looks equal to the blue line</p>
        <input
          type="range"
          min={-60}
          max={60}
          value={adjust}
          onChange={(e) => setAdjust(Number(e.target.value))}
          className="w-64"
        />
        <Button onClick={confirm}>Confirm Match</Button>
      </div>
    </TestFrame>
  );
}
