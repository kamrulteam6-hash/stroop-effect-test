"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

interface Question {
  word: string;
  options: string[];
  correctIndex: number;
}

const QUESTIONS: Question[] = [
  { word: "Happy", options: ["Joyful", "Angry", "Tired", "Confused"], correctIndex: 0 },
  { word: "Rapid", options: ["Slow", "Quick", "Quiet", "Heavy"], correctIndex: 1 },
  { word: "Ancient", options: ["Modern", "Old", "Rare", "Small"], correctIndex: 1 },
  { word: "Brave", options: ["Fearful", "Courageous", "Weak", "Silent"], correctIndex: 1 },
  { word: "Vast", options: ["Tiny", "Immense", "Narrow", "Faint"], correctIndex: 1 },
  { word: "Frugal", options: ["Wasteful", "Thrifty", "Generous", "Lazy"], correctIndex: 1 },
  { word: "Candid", options: ["Deceptive", "Honest", "Shy", "Hidden"], correctIndex: 1 },
  { word: "Meticulous", options: ["Careless", "Thorough", "Slow", "Random"], correctIndex: 1 },
  { word: "Elated", options: ["Depressed", "Overjoyed", "Bored", "Annoyed"], correctIndex: 1 },
  { word: "Obscure", options: ["Famous", "Unclear", "Bright", "Loud"], correctIndex: 1 },
  { word: "Tedious", options: ["Exciting", "Boring", "Short", "Dangerous"], correctIndex: 1 },
  { word: "Resilient", options: ["Fragile", "Tough", "Timid", "Weary"], correctIndex: 1 },
];

function now(): number {
  return performance.now();
}

export function SynonymTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [trialStart, setTrialStart] = useState(0);
  const [rts, setRts] = useState<number[]>([]);

  const start = () => {
    setIndex(0);
    setCorrectCount(0);
    setRts([]);
    setTrialStart(now());
    setPhase("running");
  };

  const answer = (choiceIndex: number) => {
    const q = QUESTIONS[index];
    const rt = now() - trialStart;
    if (choiceIndex === q.correctIndex) {
      setCorrectCount((c) => c + 1);
      setRts((r) => [...r, rt]);
    }

    const next = index + 1;
    if (next >= QUESTIONS.length) {
      setPhase("result");
      return;
    }
    setIndex(next);
    setTrialStart(now());
  };

  const accuracy = Math.round((correctCount / QUESTIONS.length) * 100);
  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="synonym-test"
          direction="higher"
          value={accuracy}
          unitLabel="% correct"
          headline="Synonym Test Result"
          extraStats={[{ label: "Correct", value: `${correctCount}/${QUESTIONS.length}` }, { label: "Avg. RT", value: `${avgRt} ms` }]}
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
            Pick the word that means the same as the given word, as fast and accurately as you can across{" "}
            {QUESTIONS.length} rounds.
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
        <p className="text-3xl font-bold text-foreground">{q.word}</p>
        <div className="grid grid-cols-2 gap-3">
          {q.options.map((opt, i) => (
            <button
              key={opt}
              onClick={() => answer(i)}
              className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
