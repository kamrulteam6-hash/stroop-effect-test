"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "anchor" | "estimate" | "result";
type Condition = "high" | "low";

interface Question {
  prompt: string;
  unit: string;
  actual: number;
  anchorHigh: number;
  anchorLow: number;
}

const QUESTIONS: Question[] = [
  { prompt: "How tall is Mount Everest?", unit: "meters", actual: 8849, anchorHigh: 15000, anchorLow: 2000 },
  { prompt: "How many bones are in the adult human body?", unit: "bones", actual: 206, anchorHigh: 350, anchorLow: 50 },
  { prompt: "How long is the Nile River?", unit: "kilometers", actual: 6650, anchorHigh: 12000, anchorLow: 1500 },
];

export function AnchoringBiasTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [qIndex, setQIndex] = useState(0);
  const [conditions, setConditions] = useState<Condition[]>([]);
  const [estimates, setEstimates] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState("");

  const start = () => {
    setConditions(QUESTIONS.map(() => (Math.random() < 0.5 ? "high" : "low")));
    setEstimates([]);
    setQIndex(0);
    setInputValue("");
    setPhase("anchor");
  };

  const toEstimate = () => setPhase("estimate");

  const submitEstimate = () => {
    const value = Number(inputValue);
    if (!Number.isFinite(value)) return;
    const next = [...estimates, value];
    setEstimates(next);
    setInputValue("");
    if (qIndex + 1 >= QUESTIONS.length) {
      setPhase("result");
    } else {
      setQIndex(qIndex + 1);
      setPhase("anchor");
    }
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Your Estimates vs. Reality</ResultHeading>
          <div className="flex w-full max-w-md flex-col gap-3 text-left">
            {QUESTIONS.map((q, i) => {
              const anchor = conditions[i] === "high" ? q.anchorHigh : q.anchorLow;
              const estimate = estimates[i];
              return (
                <div key={q.prompt} className="rounded-xl border border-border bg-surface-2 px-4 py-3">
                  <p className="text-xs font-semibold text-foreground">{q.prompt}</p>
                  <p className="mt-1 text-[11px] text-muted-2">
                    You saw the anchor <strong className="text-foreground">{anchor.toLocaleString()}</strong> (
                    {conditions[i]}). You guessed{" "}
                    <strong className="text-foreground">
                      {estimate.toLocaleString()} {q.unit}
                    </strong>
                    . Actual: <strong className="text-foreground">{q.actual.toLocaleString()} {q.unit}</strong>.
                  </p>
                </div>
              );
            })}
          </div>
          <p className="max-w-sm text-sm text-muted">
            Research on this effect consistently finds that people who see a high anchor guess higher on average
            than people who see a low anchor for the exact same question — even when the anchor number is
            completely arbitrary.
          </p>
          <Callout icon="⚓" title="Why this happens">
            The first number you&apos;re exposed to sets a mental starting point, and adjustments away from it tend to be
            too small — a bias that persists even when people know the anchor is meaningless.
          </Callout>
          <Button onClick={start}>Try Again</Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll answer 3 quick trivia estimates. Before each one, you&apos;ll see a random reference number
            — then guess the real answer and see how close you got.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = QUESTIONS[qIndex];
  const anchor = conditions[qIndex] === "high" ? q.anchorHigh : q.anchorLow;

  if (phase === "anchor") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-medium text-muted-2">
            Question {qIndex + 1} / {QUESTIONS.length}
          </p>
          <p className="max-w-sm text-lg font-semibold text-foreground">
            Quick gut check: is the answer to &quot;{q.prompt}&quot; more or less than{" "}
            <strong className="text-primary">{anchor.toLocaleString()}</strong>?
          </p>
          <div className="flex gap-4">
            <Button variant="secondary" onClick={toEstimate}>
              More
            </Button>
            <Button variant="secondary" onClick={toEstimate}>
              Less
            </Button>
          </div>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex w-full max-w-sm flex-col items-center gap-6 text-center">
        <p className="text-xs font-medium text-muted-2">
          Question {qIndex + 1} / {QUESTIONS.length}
        </p>
        <p className="text-lg font-semibold text-foreground">Now your real guess: {q.prompt}</p>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={`Enter a number (${q.unit})`}
          className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-center text-lg font-semibold text-foreground outline-none focus:border-primary"
        />
        <Button size="lg" onClick={submitEstimate} disabled={inputValue.trim() === ""}>
          Submit Guess
        </Button>
      </div>
    </TestFrame>
  );
}
