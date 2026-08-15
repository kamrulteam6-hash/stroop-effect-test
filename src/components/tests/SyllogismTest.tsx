"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

interface Syllogism {
  premise1: string;
  premise2: string;
  conclusion: string;
  logicallyValid: boolean;
}

const SYLLOGISMS: Syllogism[] = [
  {
    premise1: "All roses are flowers.",
    premise2: "Some flowers fade quickly.",
    conclusion: "Therefore, some roses fade quickly.",
    logicallyValid: false,
  },
  {
    premise1: "All mammals are warm-blooded.",
    premise2: "All dogs are mammals.",
    conclusion: "Therefore, all dogs are warm-blooded.",
    logicallyValid: true,
  },
  {
    premise1: "No fish are mammals.",
    premise2: "All whales are mammals.",
    conclusion: "Therefore, no whales are fish.",
    logicallyValid: true,
  },
  {
    premise1: "All students study hard.",
    premise2: "John studies hard.",
    conclusion: "Therefore, John is a student.",
    logicallyValid: false,
  },
  {
    premise1: "All addictive things are expensive.",
    premise2: "Some cigarettes are addictive.",
    conclusion: "Therefore, some cigarettes are expensive.",
    logicallyValid: true,
  },
  {
    premise1: "All athletes are healthy.",
    premise2: "Some healthy people exercise daily.",
    conclusion: "Therefore, some athletes exercise daily.",
    logicallyValid: false,
  },
  {
    premise1: "All birds can fly.",
    premise2: "Penguins are birds.",
    conclusion: "Therefore, penguins can fly.",
    logicallyValid: true,
  },
  {
    premise1: "No reptiles have fur.",
    premise2: "All cats have fur.",
    conclusion: "Therefore, no cats are reptiles.",
    logicallyValid: true,
  },
];

export function SyllogismTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const start = () => {
    setIndex(0);
    setCorrectCount(0);
    setPhase("running");
  };

  const answer = (choice: boolean) => {
    const q = SYLLOGISMS[index];
    if (choice === q.logicallyValid) setCorrectCount((c) => c + 1);

    const next = index + 1;
    if (next >= SYLLOGISMS.length) {
      setPhase("result");
      return;
    }
    setIndex(next);
  };

  const accuracy = Math.round((correctCount / SYLLOGISMS.length) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="syllogism-test"
          direction="higher"
          value={accuracy}
          unitLabel="% logically correct"
          headline="Syllogism Result"
          extraStats={[{ label: "Correct", value: `${correctCount}/${SYLLOGISMS.length}` }]}
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
            Judge whether each conclusion logically follows from its premises — based purely on logical structure,
            not whether it&apos;s true in real life. Some conclusions sound believable but are logically invalid.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = SYLLOGISMS[index];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Question {index + 1} / {SYLLOGISMS.length}
        </p>
        <div className="max-w-sm space-y-1 text-center">
          <p className="text-sm text-muted">{q.premise1}</p>
          <p className="text-sm text-muted">{q.premise2}</p>
          <p className="mt-2 text-base font-semibold text-foreground">{q.conclusion}</p>
        </div>
        <p className="text-xs text-muted-2">Does the conclusion logically follow?</p>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => answer(true)}>
            Valid
          </Button>
          <Button variant="secondary" onClick={() => answer(false)}>
            Invalid
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
