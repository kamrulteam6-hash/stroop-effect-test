"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

interface Option {
  id: string;
  label: string;
  detail: string;
  isTarget: boolean;
  isDecoy: boolean;
}

interface Round {
  prompt: string;
  options: Option[];
}

const ROUNDS: Round[] = [
  {
    prompt: "Choose a popcorn size at the cinema:",
    options: [
      { id: "small", label: "Small — $3", detail: "8oz", isTarget: false, isDecoy: false },
      { id: "medium", label: "Medium — $6.50", detail: "14oz", isTarget: false, isDecoy: true },
      { id: "large", label: "Large — $7", detail: "20oz", isTarget: true, isDecoy: false },
    ],
  },
  {
    prompt: "Choose a magazine subscription:",
    options: [
      { id: "web", label: "Web Only — $59", detail: "Digital access", isTarget: false, isDecoy: false },
      { id: "print", label: "Print Only — $125", detail: "Physical copies", isTarget: false, isDecoy: true },
      { id: "bundle", label: "Print + Web — $125", detail: "Digital and physical", isTarget: true, isDecoy: false },
    ],
  },
  {
    prompt: "Choose a streaming plan:",
    options: [
      { id: "basic", label: "Basic — $8/mo", detail: "1 screen, SD", isTarget: false, isDecoy: false },
      { id: "standard", label: "Standard — $16/mo", detail: "2 screens, HD", isTarget: false, isDecoy: true },
      { id: "premium", label: "Premium — $17/mo", detail: "4 screens, 4K", isTarget: true, isDecoy: false },
    ],
  },
  {
    prompt: "Choose a coffee size:",
    options: [
      { id: "sm", label: "Small — $2.50", detail: "12oz", isTarget: false, isDecoy: false },
      { id: "md", label: "Medium — $3.90", detail: "16oz", isTarget: false, isDecoy: true },
      { id: "lg", label: "Large — $4.00", detail: "20oz", isTarget: true, isDecoy: false },
    ],
  },
];

export function DecoyEffectTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [targetChoices, setTargetChoices] = useState(0);

  const start = () => {
    setIndex(0);
    setTargetChoices(0);
    setPhase("running");
  };

  const choose = (option: Option) => {
    if (option.isTarget) setTargetChoices((c) => c + 1);

    const next = index + 1;
    if (next >= ROUNDS.length) {
      setPhase("result");
      return;
    }
    setIndex(next);
  };

  const susceptibility = Math.round((targetChoices / ROUNDS.length) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="decoy-effect-test"
          direction="lower"
          value={susceptibility}
          unitLabel="% chose the decoy-favored option"
          headline="Decoy Effect Result"
          extraStats={[{ label: "Rounds", value: `${ROUNDS.length}` }]}
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
            You&apos;ll face {ROUNDS.length} everyday purchase decisions, each with three options. One option is
            designed to make another look like the obviously better deal — this reveals how much the decoy effect
            steers your choices.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const round = ROUNDS[index];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {index + 1} / {ROUNDS.length}
        </p>
        <p className="text-base font-semibold text-foreground">{round.prompt}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          {round.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => choose(opt)}
              className="flex w-48 flex-col items-center gap-1 rounded-xl border border-border bg-surface-2 px-4 py-4 transition-colors hover:border-primary/40"
            >
              <span className="text-sm font-bold text-foreground">{opt.label}</span>
              <span className="text-xs text-muted-2">{opt.detail}</span>
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
