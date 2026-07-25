"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "anchor" | "estimate" | "result";
type Condition = "high" | "low";

interface Question {
  prompt: string;
  icon: string;
  unit: string;
  actual: number;
  anchorHigh: number;
  anchorLow: number;
}

const QUESTIONS: Question[] = [
  { prompt: "How tall is Mount Everest?", icon: "🏔️", unit: "meters", actual: 8849, anchorHigh: 15000, anchorLow: 2000 },
  {
    prompt: "How many bones are in the adult human body?",
    icon: "🦴",
    unit: "bones",
    actual: 206,
    anchorHigh: 350,
    anchorLow: 50,
  },
  { prompt: "How long is the Nile River?", icon: "🌊", unit: "kilometers", actual: 6650, anchorHigh: 12000, anchorLow: 1500 },
  {
    prompt: "How many species of trees are there worldwide?",
    icon: "🌳",
    unit: "species",
    actual: 73000,
    anchorHigh: 150000,
    anchorLow: 10000,
  },
  {
    prompt: "How deep is the Mariana Trench at its deepest point?",
    icon: "🕳️",
    unit: "meters",
    actual: 10935,
    anchorHigh: 18000,
    anchorLow: 3000,
  },
];

function ScaleRow({
  icon,
  label,
  value,
  unit,
  max,
  colorClass,
}: {
  icon: string;
  label: string;
  value: number;
  unit: string;
  max: number;
  colorClass: string;
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="w-full">
      <div className="mb-1 flex items-center justify-between text-[11px] font-semibold text-foreground">
        <span>
          {icon} {label}
        </span>
        <span>
          {value.toLocaleString()} {unit}
        </span>
      </div>
      <div className="relative h-2 w-full rounded-full bg-surface-2">
        <div
          className={`absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background ${colorClass} transition-[left] duration-700`}
          style={{ left: `${pct}%` }}
        />
      </div>
    </div>
  );
}

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
          <div className="flex w-full max-w-md flex-col gap-5 text-left">
            {QUESTIONS.map((q, i) => {
              const anchor = conditions[i] === "high" ? q.anchorHigh : q.anchorLow;
              const estimate = estimates[i];
              const max = Math.max(q.anchorHigh, estimate, q.actual) * 1.1;
              return (
                <div key={q.prompt} className="rounded-xl border border-border bg-surface-2 px-4 py-4">
                  <p className="mb-3 text-xs font-semibold text-foreground">
                    {q.icon} {q.prompt}{" "}
                    <span className="font-normal text-muted-2">
                      (you saw a {conditions[i]} anchor)
                    </span>
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <ScaleRow icon="⚓" label="Anchor shown" value={anchor} unit="" max={max} colorClass="bg-gold" />
                    <ScaleRow icon="📍" label="Your guess" value={estimate} unit={q.unit} max={max} colorClass="bg-primary" />
                    <ScaleRow icon="✅" label="Actual answer" value={q.actual} unit={q.unit} max={max} colorClass="bg-success" />
                  </div>
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
            The first number you&apos;re exposed to sets a mental starting point, and adjustments away from it tend
            to be too small — a bias that persists even when people know the anchor is meaningless.
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
          <span className="text-5xl">⚓</span>
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll answer 5 quick trivia estimates. Before each one, you&apos;ll see a random reference number
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
          <span className="text-4xl">{q.icon}</span>
          <p className="max-w-sm text-lg font-semibold text-foreground">
            Quick gut check: is the answer to &quot;{q.prompt}&quot; more or less than this?
          </p>
          <div className="flex flex-col items-center gap-1 rounded-2xl border-2 border-gold/40 bg-gold/10 px-8 py-5">
            <span className="text-4xl font-black tabular-nums text-gold">{anchor.toLocaleString()}</span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-2">{q.unit}</span>
          </div>
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
        <span className="text-4xl">{q.icon}</span>
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
