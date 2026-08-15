"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const TOTAL_TRIALS = 5;

function tableParallelogram(cx: number, cy: number, w: number, h: number, skewDeg: number): string {
  const skew = (skewDeg * Math.PI) / 180;
  const dx = h * Math.tan(skew);
  const x1 = cx - w / 2;
  const x2 = cx + w / 2;
  const y1 = cy - h / 2;
  const y2 = cy + h / 2;
  return `${x1 + dx},${y1} ${x2 + dx},${y1} ${x2 - dx},${y2} ${x1 - dx},${y2}`;
}

function randomWidth(): number {
  return 70 + Math.random() * 20;
}

export function ShepardTablesTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [leftWidth, setLeftWidth] = useState(80);
  const [matchWidth, setMatchWidth] = useState(80);
  const [errors, setErrors] = useState<number[]>([]);

  const start = () => {
    setTrialIndex(0);
    setErrors([]);
    setLeftWidth(randomWidth());
    setMatchWidth(80);
    setPhase("running");
  };

  const confirm = () => {
    const error = Math.abs(matchWidth - leftWidth);
    const nextErrors = [...errors, error];
    setErrors(nextErrors);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    setLeftWidth(randomWidth());
    setMatchWidth(80);
  };

  const avgError = errors.length ? Math.round((errors.reduce((a, b) => a + b, 0) / errors.length) * 10) / 10 : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="shepard-tables-illusion-test"
          direction="lower"
          value={avgError}
          unitLabel="px average size judgment error"
          headline="Shepard Tables Result"
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
            Two tabletops are drawn in different perspective orientations. Adjust the right tabletop&apos;s width
            until you believe it matches the left one&apos;s actual footprint — perspective distortion makes
            identical shapes look very different in size.
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
          <svg width={160} height={140} viewBox="0 0 160 140">
            <polygon points={tableParallelogram(80, 70, leftWidth, 40, 25)} fill="#3b82f6" opacity={0.85} />
          </svg>
          <svg width={160} height={140} viewBox="0 0 160 140">
            <polygon points={tableParallelogram(80, 70, matchWidth, 40, -25)} fill="#ef4444" opacity={0.85} />
          </svg>
        </div>
        <p className="text-xs text-muted-2">Adjust the red tabletop to match the blue tabletop&apos;s size</p>
        <input
          type="range"
          min={40}
          max={110}
          value={matchWidth}
          onChange={(e) => setMatchWidth(Number(e.target.value))}
          className="w-64"
        />
        <Button onClick={confirm}>Confirm Match</Button>
      </div>
    </TestFrame>
  );
}
