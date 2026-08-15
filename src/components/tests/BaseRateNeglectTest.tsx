"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

interface Scenario {
  setup: string;
  question: string;
  bayesianAnswer: number;
  options: number[];
}

const SCENARIOS: Scenario[] = [
  {
    setup:
      "A disease affects 1 in 1,000 people. A test for the disease has a 5% false positive rate and always correctly identifies people who have the disease. A random person tests positive.",
    question: "What is the probability this person actually has the disease?",
    bayesianAnswer: 2,
    options: [2, 95, 50, 20],
  },
  {
    setup:
      "In a city, 85% of taxis are Green and 15% are Blue. A witness identifies a taxi in a hit-and-run as Blue. Under similar conditions, the witness correctly identifies each color 80% of the time.",
    question: "What is the probability the taxi was actually Blue?",
    bayesianAnswer: 41,
    options: [41, 80, 15, 60],
  },
  {
    setup:
      "1% of a population has a certain condition. A screening test is 99% accurate for both true positives and true negatives. A random person tests positive.",
    question: "What is the probability this person actually has the condition?",
    bayesianAnswer: 50,
    options: [50, 99, 90, 10],
  },
  {
    setup:
      "A factory has two machines. Machine A makes 80% of products with a 1% defect rate. Machine B makes 20% of products with a 5% defect rate. A random product is found defective.",
    question: "What is the probability it came from Machine B?",
    bayesianAnswer: 56,
    options: [56, 20, 80, 5],
  },
];

function closestOption(options: number[], target: number): number {
  return options.reduce((best, opt) => (Math.abs(opt - target) < Math.abs(best - target) ? opt : best));
}

export function BaseRateNeglectTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const start = () => {
    setIndex(0);
    setCorrectCount(0);
    setPhase("running");
  };

  const answer = (choice: number) => {
    const q = SCENARIOS[index];
    if (closestOption(q.options, choice) === q.bayesianAnswer) setCorrectCount((c) => c + 1);

    const next = index + 1;
    if (next >= SCENARIOS.length) {
      setPhase("result");
      return;
    }
    setIndex(next);
  };

  const accuracy = Math.round((correctCount / SCENARIOS.length) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="base-rate-neglect-test"
          direction="higher"
          value={accuracy}
          unitLabel="% Bayesian accuracy"
          headline="Base Rate Neglect Result"
          extraStats={[{ label: "Correct", value: `${correctCount}/${SCENARIOS.length}` }]}
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
            Read {SCENARIOS.length} probability scenarios and estimate the correct likelihood. Base rate neglect is
            the tendency to ignore background statistical information in favor of specific-case details.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = SCENARIOS[index];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Scenario {index + 1} / {SCENARIOS.length}
        </p>
        <p className="max-w-md text-center text-sm text-muted">{q.setup}</p>
        <p className="max-w-md text-center text-base font-semibold text-foreground">{q.question}</p>
        <div className="grid grid-cols-2 gap-3">
          {q.options.map((opt) => (
            <button
              key={opt}
              onClick={() => answer(opt)}
              className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
            >
              {opt}%
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
