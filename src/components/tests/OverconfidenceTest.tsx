"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

interface Question {
  text: string;
  answer: number;
  unit: string;
}

const QUESTIONS: Question[] = [
  { text: "What is the length of the Nile River (in km)?", answer: 6650, unit: "km" },
  { text: "In what year was the telephone patented?", answer: 1876, unit: "" },
  { text: "What is the population of Japan (in millions)?", answer: 125, unit: "million" },
  { text: "What is the boiling point of ethanol (in °C)?", answer: 78, unit: "°C" },
  { text: "How many bones are in the adult human body?", answer: 206, unit: "" },
  { text: "What is the diameter of the Moon (in km)?", answer: 3474, unit: "km" },
  { text: "In what year did the Berlin Wall fall?", answer: 1989, unit: "" },
  { text: "What is the average distance from Earth to the Sun (in million km)?", answer: 150, unit: "million km" },
];

export function OverconfidenceTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");
  const [hits, setHits] = useState(0);

  const start = () => {
    setIndex(0);
    setLow("");
    setHigh("");
    setHits(0);
    setPhase("running");
  };

  const submit = () => {
    const q = QUESTIONS[index];
    const lo = parseFloat(low);
    const hi = parseFloat(high);
    if (!isNaN(lo) && !isNaN(hi) && q.answer >= Math.min(lo, hi) && q.answer <= Math.max(lo, hi)) {
      setHits((h) => h + 1);
    }
    const next = index + 1;
    setLow("");
    setHigh("");
    if (next >= QUESTIONS.length) {
      setPhase("result");
      return;
    }
    setIndex(next);
  };

  const hitRate = Math.round((hits / QUESTIONS.length) * 100);
  const calibrationGap = Math.abs(90 - hitRate);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="overconfidence-test"
          direction="lower"
          value={calibrationGap}
          unitLabel="point gap from ideal 90% calibration"
          headline="Overconfidence Result"
          extraStats={[{ label: "Your 90% Ranges Hit", value: `${hits}/${QUESTIONS.length} (${hitRate}%)` }]}
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
            For each of {QUESTIONS.length} trivia questions, give a range you&apos;re 90% confident contains the true
            answer. If you&apos;re well-calibrated, about 90% of your ranges should contain the correct value —
            most people are overconfident and hit far fewer.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = QUESTIONS[index];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Question {index + 1} / {QUESTIONS.length}
        </p>
        <p className="max-w-sm text-center text-base font-semibold text-foreground">{q.text}</p>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={low}
            onChange={(e) => setLow(e.target.value)}
            placeholder="Low"
            className="w-28 rounded-lg border border-border bg-surface-2 px-3 py-2 text-center text-sm text-foreground outline-none focus:border-primary/40"
          />
          <span className="text-muted-2">to</span>
          <input
            type="number"
            value={high}
            onChange={(e) => setHigh(e.target.value)}
            placeholder="High"
            className="w-28 rounded-lg border border-border bg-surface-2 px-3 py-2 text-center text-sm text-foreground outline-none focus:border-primary/40"
          />
          {q.unit && <span className="text-xs text-muted-2">{q.unit}</span>}
        </div>
        <Button size="lg" onClick={submit} disabled={low === "" || high === ""}>
          Submit Range
        </Button>
      </div>
    </TestFrame>
  );
}
