"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const LETTERS = ["F", "G", "J", "L", "P", "R", "S", "Z"];
const TOTAL_TRIALS = 16;

function now(): number {
  return performance.now();
}

function coinFlip(): boolean {
  return Math.random() < 0.5;
}

function randomLetter(): string {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}

interface Trial {
  letter: string;
  isMirrored: boolean;
  rotation: number;
}

function generateTrial(): Trial {
  return {
    letter: randomLetter(),
    isMirrored: coinFlip(),
    rotation: Math.floor(Math.random() * 4) * 90,
  };
}

export function MirrorImageTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trial, setTrial] = useState<Trial>(() => generateTrial());
  const [correctCount, setCorrectCount] = useState(0);
  const [rts, setRts] = useState<number[]>([]);
  const [trialStart, setTrialStart] = useState(0);

  const start = () => {
    const first = generateTrial();
    setTrial(first);
    setTrialIndex(0);
    setCorrectCount(0);
    setRts([]);
    setTrialStart(now());
    setPhase("running");
  };

  const answer = (guessMirrored: boolean) => {
    if (phase !== "running") return;
    const rt = now() - trialStart;
    if (guessMirrored === trial.isMirrored) {
      setCorrectCount((c) => c + 1);
      setRts((r) => [...r, rt]);
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

  const accuracy = Math.round((correctCount / TOTAL_TRIALS) * 100);
  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="mirror-image-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          headline="Mirror Image Result"
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
            A letter appears rotated and either normal or mirror-flipped. Decide whether it&apos;s normal or
            mirrored, as fast as you can, across {TOTAL_TRIALS} rounds.
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
        <p
          className="select-none text-8xl font-black text-foreground"
          style={{
            transform: `rotate(${trial.rotation}deg) ${trial.isMirrored ? "scaleX(-1)" : ""}`,
          }}
        >
          {trial.letter}
        </p>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => answer(false)}>
            Normal
          </Button>
          <Button variant="secondary" onClick={() => answer(true)}>
            Mirrored
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
