"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

interface Question {
  smallAmount: number;
  delayDays: number;
  largeAmount: number;
}

const LARGE_AMOUNT = 1000;
const DELAYS = [7, 30, 90, 180, 365];

function generateQuestions(): Question[] {
  return DELAYS.map((delayDays) => ({
    smallAmount: Math.round((300 + Math.random() * 500) / 10) * 10,
    delayDays,
    largeAmount: LARGE_AMOUNT,
  }));
}

export function DelayDiscountingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [immediateChoices, setImmediateChoices] = useState(0);
  const [kValues, setKValues] = useState<number[]>([]);

  const start = () => {
    setQuestions(generateQuestions());
    setIndex(0);
    setImmediateChoices(0);
    setKValues([]);
    setPhase("running");
  };

  const choose = (tookSmall: boolean) => {
    const q = questions[index];
    if (tookSmall) {
      setImmediateChoices((c) => c + 1);
      const k = (q.largeAmount / q.smallAmount - 1) / q.delayDays;
      setKValues((arr) => [...arr, k]);
    }

    const next = index + 1;
    if (next >= questions.length) {
      setPhase("result");
      return;
    }
    setIndex(next);
  };

  const avgK = kValues.length ? kValues.reduce((a, b) => a + b, 0) / kValues.length : 0;
  const kDisplay = Math.round(avgK * 10000) / 10000;
  const patienceScore = Math.round(((questions.length - immediateChoices) / (questions.length || 1)) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="delay-discounting-test"
          direction="higher"
          value={patienceScore}
          unitLabel="% patience score"
          headline="Delay Discounting Result"
          extraStats={[
            { label: "Took Immediate Reward", value: `${immediateChoices}/${questions.length}` },
            { label: "Discount Rate (k)", value: kValues.length ? `${kDisplay}` : "n/a" },
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
            You&apos;ll be offered a choice between a smaller reward now and ${LARGE_AMOUNT} after a delay, repeated
            across {DELAYS.length} rounds with different amounts and delays. Answer honestly — there are no right
            answers, this measures how you discount future rewards.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = questions[index];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {index + 1} / {questions.length}
        </p>
        <p className="text-sm text-muted">Which would you prefer?</p>
        <div className="flex gap-4">
          <button
            onClick={() => choose(true)}
            className="flex flex-col items-center gap-1 rounded-xl border border-border bg-surface-2 px-6 py-5 transition-colors hover:border-primary/40"
          >
            <span className="text-2xl font-black text-foreground">${q.smallAmount}</span>
            <span className="text-xs text-muted-2">Today</span>
          </button>
          <button
            onClick={() => choose(false)}
            className="flex flex-col items-center gap-1 rounded-xl border border-border bg-surface-2 px-6 py-5 transition-colors hover:border-primary/40"
          >
            <span className="text-2xl font-black text-foreground">${q.largeAmount}</span>
            <span className="text-xs text-muted-2">In {q.delayDays} days</span>
          </button>
        </div>
      </div>
    </TestFrame>
  );
}
