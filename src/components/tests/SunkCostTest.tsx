"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "scenario" | "result";

interface Scenario {
  icon: string;
  spentLabel: string;
  prompt: string;
  continueLabel: string;
  stopLabel: string;
}

const SCENARIOS: Scenario[] = [
  {
    icon: "🎫",
    spentLabel: "$60 already spent",
    prompt:
      "You paid $60 for a concert ticket for a band you're now lukewarm about. It's pouring rain and you'd rather stay home.",
    continueLabel: "Go anyway — I already paid for it",
    stopLabel: "Stay home — the ticket price is spent either way",
  },
  {
    icon: "🍽️",
    spentLabel: "Buffet already paid",
    prompt:
      "You're at an all-you-can-eat buffet you already paid for. You're already full, but there's still food you haven't tried.",
    continueLabel: "Keep eating — I paid for it, may as well get my money's worth",
    stopLabel: "Stop eating — being uncomfortably full isn't worth it",
  },
  {
    icon: "🎬",
    spentLabel: "Ticket already bought",
    prompt: "You paid for a movie ticket. 30 minutes in, you're not enjoying it at all.",
    continueLabel: "Stay to the end — I already paid for the ticket",
    stopLabel: "Leave — my time now matters more than the ticket price",
  },
  {
    icon: "📉",
    spentLabel: "Down 40% already",
    prompt: "A stock you bought is down 40%, and the company's fundamentals now look weak.",
    continueLabel: "Hold on — selling now means locking in the loss",
    stopLabel: "Sell — the original price doesn't change what happens next",
  },
  {
    icon: "🏠",
    spentLabel: "Already over budget",
    prompt:
      "A home renovation project is already over budget, and finishing it requires even more money than expected.",
    continueLabel: "Keep funding it — I've already put so much in",
    stopLabel: "Stop and reassess — what's already spent doesn't change whether finishing is worth it now",
  },
  {
    icon: "🎓",
    spentLabel: "3 years already invested",
    prompt:
      "You're 3 years into a degree program you've realized you no longer enjoy or want a career in.",
    continueLabel: "Finish it — I've already put in 3 years",
    stopLabel: "Switch paths — the 3 years are gone either way, so what matters is what's ahead",
  },
  {
    icon: "📱",
    spentLabel: "$800 phone already bought",
    prompt: "You bought an $800 phone that turned out to have a persistent, annoying software bug the maker won't fix.",
    continueLabel: "Keep using it — it was expensive, so I should get my money's worth",
    stopLabel: "Switch phones — the $800 is spent regardless of what I do next",
  },
  {
    icon: "💑",
    spentLabel: "5 years already together",
    prompt: "You've been in a relationship for 5 years, but you and your partner have grown clearly incompatible.",
    continueLabel: "Stay together — we've already invested 5 years",
    stopLabel: "End it — the years already spent don't make staying the right choice now",
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
          <div className="grid w-full max-w-md grid-cols-4 gap-2">
            {SCENARIOS.map((s, i) => {
              const wasSwayed = choices[i] === "continue";
              return (
                <div
                  key={s.prompt}
                  className={`flex flex-col items-center gap-1 rounded-xl border px-1 py-3 ${
                    wasSwayed ? "border-danger/30 bg-danger/10" : "border-success/30 bg-success/10"
                  }`}
                >
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-sm">{wasSwayed ? "⚠️" : "✅"}</span>
                </div>
              );
            })}
          </div>
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
          <span className="text-5xl">💸</span>
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll work through 8 everyday scenarios where money, time, or effort has already been spent. Pick what
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
        <span className="text-4xl">{scenario.icon}</span>
        <span className="rounded-full bg-danger/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-danger">
          {scenario.spentLabel}
        </span>
        <p className="text-lg font-semibold text-foreground">{scenario.prompt}</p>
        <div className="flex w-full flex-col gap-3">
          <button
            onClick={() => choose("continue")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            <span className="mr-1.5">🔁</span>
            {scenario.continueLabel}
          </button>
          <button
            onClick={() => choose("stop")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            <span className="mr-1.5">✋</span>
            {scenario.stopLabel}
          </button>
        </div>
      </div>
    </TestFrame>
  );
}
