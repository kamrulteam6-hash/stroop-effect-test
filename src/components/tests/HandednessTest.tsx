"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "quiz" | "result";

const ITEMS = [
  "Writing",
  "Drawing",
  "Throwing a ball",
  "Using scissors",
  "Using a toothbrush",
  "Using a knife (without a fork)",
  "Using a spoon",
  "Using a broom (upper hand)",
  "Striking a match",
  "Opening a box lid",
];

const OPTIONS = [
  { label: "Left Always", value: -2 },
  { label: "Left Usually", value: -1 },
  { label: "No Preference", value: 0 },
  { label: "Right Usually", value: 1 },
  { label: "Right Always", value: 2 },
];

function categorize(lq: number): { label: string; description: string } {
  if (lq <= -40) {
    return {
      label: "Left-Handed",
      description: "You show a consistent preference for your left hand across most everyday tasks.",
    };
  }
  if (lq >= 40) {
    return {
      label: "Right-Handed",
      description: "You show a consistent preference for your right hand across most everyday tasks.",
    };
  }
  return {
    label: "Mixed-Handed",
    description: "Your hand preference varies by task rather than favoring one hand consistently — a pattern sometimes called mixed or cross-dominant handedness.",
  };
}

export function HandednessTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const start = () => {
    setAnswers([]);
    setIndex(0);
    setPhase("quiz");
  };

  const answer = (value: number) => {
    const next = [...answers, value];
    if (index + 1 >= ITEMS.length) {
      setAnswers(next);
      setPhase("result");
    } else {
      setAnswers(next);
      setIndex(index + 1);
    }
  };

  const avg = answers.length ? answers.reduce((a, b) => a + b, 0) / answers.length : 0;
  const lq = Math.round((avg / 2) * 100);
  const result = categorize(lq);

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>{result.label}</ResultHeading>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-black tabular-nums text-primary">{lq}</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">
              Laterality Quotient (-100 to 100)
            </span>
          </div>
          <p className="max-w-sm text-sm text-muted">{result.description}</p>
          <Callout icon="✋" title="Inspired by the Edinburgh Handedness Inventory">
            This is a simplified, casual version of a real research questionnaire — a fun self-check, not a clinical
            assessment.
          </Callout>
          <Button onClick={start}>Retake Test</Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            For 10 everyday tasks, tell us which hand you actually use — not which hand you think you should use.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const item = ITEMS[index];

  return (
    <TestFrame>
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-2">
            <span>
              Task {index + 1} / {ITEMS.length}
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${(index / ITEMS.length) * 100}%` }}
            />
          </div>
        </div>

        <p className="min-h-[3rem] text-center text-lg font-semibold text-foreground sm:text-xl">
          Which hand do you use for: {item}?
        </p>

        <div className="grid w-full grid-cols-5 gap-2">
          {OPTIONS.map((opt) => (
            <button
              key={opt.label}
              onClick={() => answer(opt.value)}
              className="flex flex-col items-center justify-center gap-1 rounded-xl border border-border bg-surface-2 px-1 py-3 text-center text-[10px] font-medium text-muted transition-colors hover:border-primary hover:text-foreground sm:text-xs"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
