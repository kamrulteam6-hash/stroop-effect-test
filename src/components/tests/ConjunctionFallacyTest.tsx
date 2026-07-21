"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "scenario" | "result";

interface Scenario {
  description: string;
  optionA: string;
  optionB: string;
}

const SCENARIOS: Scenario[] = [
  {
    description:
      "Jordan is 34, extremely detail-oriented, enjoys solving puzzles, and has a degree in mathematics.",
    optionA: "Jordan works in finance.",
    optionB: "Jordan works in finance and plays chess competitively.",
  },
  {
    description:
      "Priya is 45, deeply passionate about environmental causes, and has organized several community clean-up events.",
    optionA: "Priya works in marketing.",
    optionB: "Priya works in marketing and is an active environmental activist.",
  },
  {
    description: "Marcus is 29, plays guitar in a band, and has several visible tattoos.",
    optionA: "Marcus works as an accountant.",
    optionB: "Marcus works as an accountant and also performs at local music venues.",
  },
];

export function ConjunctionFallacyTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<("A" | "B")[]>([]);

  const start = () => {
    setChoices([]);
    setIndex(0);
    setPhase("scenario");
  };

  const choose = (choice: "A" | "B") => {
    const next = [...choices, choice];
    setChoices(next);
    if (index + 1 >= SCENARIOS.length) {
      setPhase("result");
    } else {
      setIndex(index + 1);
    }
  };

  const fallacyCount = choices.filter((c) => c === "B").length;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="conjunction-fallacy-test"
          direction="lower"
          value={fallacyCount}
          unitLabel={`out of ${SCENARIOS.length} times you picked the impossible option`}
          shareLabel={`I picked the logically impossible option ${fallacyCount}/${SCENARIOS.length} times on the Conjunction Fallacy Test!`}
          onRetry={start}
        >
          <p className="max-w-xs text-[11px] text-muted-2">
            Option B always requires <em>both</em> conditions to be true, which mathematically can never be more
            probable than option A requiring just one — no matter how well the story fits the stereotype.
          </p>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll read 3 short descriptions, then pick which of two statements about that person seems more
            likely to be true.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const scenario = SCENARIOS[index];

  return (
    <TestFrame>
      <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <p className="text-xs font-medium text-muted-2">
          Scenario {index + 1} / {SCENARIOS.length}
        </p>
        <p className="text-lg font-semibold text-foreground">{scenario.description}</p>
        <p className="text-sm text-muted">Which is more likely?</p>
        <div className="flex w-full flex-col gap-3">
          <button
            onClick={() => choose("A")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            <span className="font-bold text-primary">A:</span> {scenario.optionA}
          </button>
          <button
            onClick={() => choose("B")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            <span className="font-bold text-primary">B:</span> {scenario.optionB}
          </button>
        </div>
      </div>
    </TestFrame>
  );
}
