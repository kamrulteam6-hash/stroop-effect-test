"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const TOTAL_TRIALS = 6;
const REFERENCE_RADIUS = 24;

function randomOuterRadius(): number {
  return 40 + Math.random() * 40;
}

export function DelboeufIllusionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [outerRadius, setOuterRadius] = useState(60);
  const [matchRadius, setMatchRadius] = useState(24);
  const [errors, setErrors] = useState<number[]>([]);

  const start = () => {
    setTrialIndex(0);
    setErrors([]);
    setOuterRadius(randomOuterRadius());
    setMatchRadius(24);
    setPhase("running");
  };

  const confirm = () => {
    const error = Math.abs(matchRadius - REFERENCE_RADIUS);
    const nextErrors = [...errors, error];
    setErrors(nextErrors);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    setOuterRadius(randomOuterRadius());
    setMatchRadius(24);
  };

  const avgError = errors.length ? Math.round((errors.reduce((a, b) => a + b, 0) / errors.length) * 10) / 10 : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="delboeuf-illusion-test"
          direction="lower"
          value={avgError}
          unitLabel="px average size judgment error"
          headline="Delboeuf Illusion Result"
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
            A circle sits inside a larger ring. Adjust the standalone circle on the right until it looks the same
            size as the inner circle. The surrounding ring subtly distorts how large the inner circle appears.
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
        <div className="flex items-center gap-10">
          <svg width={140} height={140} viewBox="0 0 140 140">
            <circle cx={70} cy={70} r={outerRadius} fill="none" stroke="var(--muted-2, #94a3b8)" strokeWidth={2} />
            <circle cx={70} cy={70} r={REFERENCE_RADIUS} fill="#3b82f6" />
          </svg>
          <svg width={140} height={140} viewBox="0 0 140 140">
            <circle cx={70} cy={70} r={matchRadius} fill="#ef4444" />
          </svg>
        </div>
        <p className="text-xs text-muted-2">Adjust the red circle to match the blue circle&apos;s size</p>
        <input
          type="range"
          min={10}
          max={45}
          value={matchRadius}
          onChange={(e) => setMatchRadius(Number(e.target.value))}
          className="w-64"
        />
        <Button onClick={confirm}>Confirm Match</Button>
      </div>
    </TestFrame>
  );
}
