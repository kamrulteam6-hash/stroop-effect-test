"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

interface Question {
  text: string;
  correct: string;
  intuitive: string;
  options: string[];
}

const QUESTIONS: Question[] = [
  {
    text: "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?",
    correct: "$0.05",
    intuitive: "$0.10",
    options: ["$0.05", "$0.10", "$0.01", "$0.15"],
  },
  {
    text: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    correct: "5 minutes",
    intuitive: "100 minutes",
    options: ["5 minutes", "100 minutes", "20 minutes", "500 minutes"],
  },
  {
    text: "In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half the lake?",
    correct: "47 days",
    intuitive: "24 days",
    options: ["47 days", "24 days", "46 days", "12 days"],
  },
  {
    text: "If John can drink one barrel of water in 6 days, and Mary can drink one barrel in 12 days, how long would it take them to drink one barrel together?",
    correct: "4 days",
    intuitive: "9 days",
    options: ["4 days", "9 days", "6 days", "3 days"],
  },
  {
    text: "A farmer had 15 sheep and all but 8 died. How many are left?",
    correct: "8",
    intuitive: "7",
    options: ["8", "7", "15", "0"],
  },
  {
    text: "Emily's father has 5 daughters: Lala, Lele, Lili, Lolo, and... what is the fifth daughter's name most likely to be?",
    correct: "Emily",
    intuitive: "Lulu",
    options: ["Emily", "Lulu", "Lele", "Lala"],
  },
  {
    text: "A shirt and a jacket cost $150 total. The jacket costs $100 more than the shirt. How much does the shirt cost?",
    correct: "$25",
    intuitive: "$50",
    options: ["$25", "$50", "$100", "$75"],
  },
];

export function CognitiveReflectionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [intuitiveCount, setIntuitiveCount] = useState(0);

  const start = () => {
    setIndex(0);
    setCorrectCount(0);
    setIntuitiveCount(0);
    setPhase("running");
  };

  const answer = (choice: string) => {
    const q = QUESTIONS[index];
    if (choice === q.correct) setCorrectCount((c) => c + 1);
    else if (choice === q.intuitive) setIntuitiveCount((c) => c + 1);

    const next = index + 1;
    if (next >= QUESTIONS.length) {
      setPhase("result");
      return;
    }
    setIndex(next);
  };

  const score = correctCount;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="cognitive-reflection-test"
          direction="higher"
          value={score}
          unitLabel={`out of ${QUESTIONS.length} correct`}
          headline="Cognitive Reflection Result"
          extraStats={[{ label: "Intuitive (Wrong) Answers", value: `${intuitiveCount}` }]}
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
            Answer {QUESTIONS.length} brainteasers that have an obvious, intuitive answer — which is wrong. This test
            measures your ability to override a tempting gut response with deliberate reasoning.
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
        <p className="max-w-md text-center text-base font-semibold text-foreground">{q.text}</p>
        <div className="grid grid-cols-2 gap-3">
          {q.options.map((opt) => (
            <button
              key={opt}
              onClick={() => answer(opt)}
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
