"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "scenario" | "result";

interface Scenario {
  prompt: string;
  continueLabel: string;
  stopLabel: string;
}

const SCENARIOS: Scenario[] = [
  {
    prompt:
      "You paid $60 for a concert ticket for a band you're now lukewarm about. It's pouring rain and you'd rather stay home.",
    continueLabel: "Go anyway — I already paid for it",
    stopLabel: "Stay home — the ticket price is spent either way",
  },
  {
    prompt:
      "You're at an all-you-can-eat buffet you already paid for. You're already full, but there's still food you haven't tried.",
    continueLabel: "Keep eating — I paid for it, may as well get my money's worth",
    stopLabel: "Stop eating — being uncomfortably full isn't worth it",
  },
  {
    prompt: "You paid for a movie ticket. 30 minutes in, you're not enjoying it at all.",
    continueLabel: "Stay to the end — I already paid for the ticket",
    stopLabel: "Leave — my time now matters more than the ticket price",
  },
  {
    prompt: "A stock you bought is down 40%, and the company's fundamentals now look weak.",
    continueLabel: "Hold on — selling now means locking in the loss",
    stopLabel: "Sell — the original price doesn't change what happens next",
  },
  {
    prompt:
      "A home renovation project is already over budget, and finishing it requires even more money than expected.",
    continueLabel: "Keep funding it — I've already put so much in",
    stopLabel: "Stop and reassess — what's already spent doesn't change whether finishing is worth it now",
  },
];

export function SunkCostTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<("continue" | "stop")[]>([]);

  const start = () => {
    setChoices([]);
    setIndex(0);
    setPhase("scenario");
  };

  const choose = (choice: "continue" | "stop") => {
    const next = [...choices, choice];
    setChoices(next);
    if (index + 1 >= SCENARIOS.length) {
      setPhase("result");
    } else {
      setIndex(index + 1);
    }
  };

  const continueCount = choices.filter((c) => c === "continue").length;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="sunk-cost-test"
          direction="lower"
          value={continueCount}
          unitLabel={`out of ${SCENARIOS.length} sunk-cost-driven choices`}
          shareLabel={`I let sunk costs sway ${continueCount}/${SCENARIOS.length} decisions on the Sunk Cost Fallacy Test!`}
          onRetry={start}
        >
          <p className="max-w-xs text-[11px] text-muted-2">
            In each scenario, what you already spent can&apos;t be recovered either way — the rational choice
            depends only on what happens next, not on what&apos;s already gone.
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
            You&apos;ll work through 5 everyday scenarios where money or effort has already been spent. Pick what
            you&apos;d honestly do in each one.
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
        <p className="text-lg font-semibold text-foreground">{scenario.prompt}</p>
        <div className="flex w-full flex-col gap-3">
          <button
            onClick={() => choose("continue")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            {scenario.continueLabel}
          </button>
          <button
            onClick={() => choose("stop")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            {scenario.stopLabel}
          </button>
        </div>
      </div>
    </TestFrame>
  );
}
