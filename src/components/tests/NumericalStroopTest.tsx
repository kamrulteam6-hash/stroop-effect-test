"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const TOTAL_TRIALS = 20;

function now(): number {
  return performance.now();
}

interface Trial {
  leftDigit: number;
  rightDigit: number;
  leftIsPhysicallyBigger: boolean;
  congruent: boolean;
  correctSide: "left" | "right";
}

function generateTrial(): Trial {
  const digits = [1, 2, 3, 4, 6, 7, 8, 9];
  const a = digits[Math.floor(Math.random() * digits.length)];
  let b = digits[Math.floor(Math.random() * digits.length)];
  while (b === a) b = digits[Math.floor(Math.random() * digits.length)];

  const leftDigit = Math.random() < 0.5 ? a : b;
  const rightDigit = leftDigit === a ? b : a;
  const congruent = Math.random() < 0.5;
  const numericallyLeftBigger = leftDigit > rightDigit;
  const leftIsPhysicallyBigger = congruent ? numericallyLeftBigger : !numericallyLeftBigger;

  const correctSide: "left" | "right" = numericallyLeftBigger ? "left" : "right";

  return { leftDigit, rightDigit, leftIsPhysicallyBigger, congruent, correctSide };
}

export function NumericalStroopTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trial, setTrial] = useState<Trial>(() => generateTrial());
  const [congruentRts, setCongruentRts] = useState<number[]>([]);
  const [incongruentRts, setIncongruentRts] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [trialStart, setTrialStart] = useState(0);

  const start = () => {
    const first = generateTrial();
    setTrial(first);
    setTrialIndex(0);
    setCongruentRts([]);
    setIncongruentRts([]);
    setCorrectCount(0);
    setTrialStart(now());
    setPhase("running");
  };

  const respond = (side: "left" | "right") => {
    if (phase !== "running") return;
    const rt = now() - trialStart;
    if (side === trial.correctSide) {
      setCorrectCount((c) => c + 1);
      if (trial.congruent) setCongruentRts((r) => [...r, rt]);
      else setIncongruentRts((r) => [...r, rt]);
    }

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrial(generateTrial());
    setTrialIndex(next);
    setTrialStart(now());
  };

  const avgCongruent = congruentRts.length ? Math.round(congruentRts.reduce((a, b) => a + b, 0) / congruentRts.length) : 0;
  const avgIncongruent = incongruentRts.length ? Math.round(incongruentRts.reduce((a, b) => a + b, 0) / incongruentRts.length) : 0;
  const stroopEffect = avgIncongruent - avgCongruent;
  const accuracy = Math.round((correctCount / TOTAL_TRIALS) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="numerical-stroop-test"
          direction="lower"
          value={stroopEffect}
          unitLabel="ms numerical stroop effect"
          headline="Numerical Stroop Result"
          extraStats={[
            { label: "Congruent RT", value: `${avgCongruent} ms` },
            { label: "Incongruent RT", value: `${avgIncongruent} ms` },
            { label: "Accuracy", value: `${accuracy}%` },
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
            Two digits will appear side by side in different physical sizes. Click the side with the numerically
            larger value — ignoring physical size, which sometimes conflicts with the number itself.
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
        <div className="flex items-center gap-12">
          <button
            onClick={() => respond("left")}
            className="font-black text-foreground transition-transform hover:scale-105"
            style={{ fontSize: trial.leftIsPhysicallyBigger ? "5rem" : "2.5rem" }}
          >
            {trial.leftDigit}
          </button>
          <button
            onClick={() => respond("right")}
            className="font-black text-foreground transition-transform hover:scale-105"
            style={{ fontSize: trial.leftIsPhysicallyBigger ? "2.5rem" : "5rem" }}
          >
            {trial.rightDigit}
          </button>
        </div>
        <p className="text-xs text-muted-2">Click the numerically larger digit</p>
      </div>
    </TestFrame>
  );
}
