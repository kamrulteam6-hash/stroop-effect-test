"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const TOTAL_TRIALS = 10;

interface Trial {
  rotation: number;
  mirrored: boolean;
}

function generateTrial(): Trial {
  const rotation = Math.floor(Math.random() * 8) * 45;
  const mirrored = Math.random() < 0.5;
  return { rotation, mirrored };
}

function RotatedF({ rotation, mirrored }: Trial) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={140}
      height={140}
      style={{ transform: `rotate(${rotation}deg) scaleX(${mirrored ? -1 : 1})`, transition: "transform 0.15s" }}
    >
      <polygon
        points="25,15 25,85 40,85 40,58 65,58 65,45 40,45 40,30 75,30 75,15"
        fill="var(--color-primary)"
      />
    </svg>
  );
}

export function MentalRotationTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trial, setTrial] = useState<Trial>(() => generateTrial());
  const [correct, setCorrect] = useState(0);
  const [rts, setRts] = useState<number[]>([]);
  const [trialStart, setTrialStart] = useState(0);

  const start = () => {
    setTrialIndex(0);
    setCorrect(0);
    setRts([]);
    setTrial(generateTrial());
    setTrialStart(performance.now());
    setPhase("running");
  };

  const answer = (guessMirrored: boolean) => {
    if (phase !== "running") return;
    const rt = performance.now() - trialStart;
    const isCorrect = guessMirrored === trial.mirrored;
    if (isCorrect) setCorrect((c) => c + 1);
    setRts((r) => [...r, rt]);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    setTrial(generateTrial());
    setTrialStart(performance.now());
  };

  const accuracy = Math.round((correct / TOTAL_TRIALS) * 100);
  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="mental-rotation-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          headline="Mental Rotation Result"
          extraStats={[
            { label: "Correct", value: `${correct}/${TOTAL_TRIALS}` },
            { label: "Avg. Decision Time", value: `${avgRt} ms` },
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
            You&apos;ll see a rotated shape. Decide whether it is the <strong>normal</strong> shape rotated, or a{" "}
            <strong>mirrored</strong> (flipped) version of it. Answer as quickly and accurately as you can across{" "}
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
        <div className="flex h-[160px] items-center justify-center">
          <RotatedF {...trial} />
        </div>
        <div className="flex gap-4">
          <Button size="lg" variant="secondary" onClick={() => answer(false)}>
            Normal
          </Button>
          <Button size="lg" variant="secondary" onClick={() => answer(true)}>
            Mirrored
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
