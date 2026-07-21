"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "question" | "result";

interface Question {
  prompt: string;
  optionA: string;
  optionB: string;
  correct: "A" | "B";
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    prompt: "In English, which is more common?",
    optionA: "Words that start with the letter K",
    optionB: "Words that have K as the third letter",
    correct: "B",
    explanation:
      "Words with K as the third letter are actually more frequent, but words starting with K are far easier to recall, making them feel more common.",
  },
  {
    prompt: "In the US, which claims more lives per year?",
    optionA: "Diabetes",
    optionB: "Homicide",
    correct: "A",
    explanation:
      "Diabetes causes significantly more deaths annually than homicide, but homicide receives far more dramatic media coverage, making it feel more common.",
  },
  {
    prompt: "In the US, which causes more fatalities?",
    optionA: "Being struck by a falling object",
    optionB: "Commercial airplane crashes",
    correct: "A",
    explanation:
      "Commercial air travel is extremely safe, and falling-object fatalities are actually more common — but plane crashes are far more vivid and memorable.",
  },
  {
    prompt: "In English, which is more common?",
    optionA: "Words ending in \"-ing\"",
    optionB: "Words with \"n\" as the second-to-last letter",
    correct: "B",
    explanation:
      "Every word ending in \"-ing\" automatically has \"n\" as its second-to-last letter, plus many other words qualify too — so the broader category can never be smaller.",
  },
];

export function AvailabilityHeuristicTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<("A" | "B")[]>([]);

  const start = () => {
    setIndex(0);
    setChoices([]);
    setPhase("question");
  };

  const choose = (choice: "A" | "B") => {
    const next = [...choices, choice];
    setChoices(next);
    if (index + 1 >= QUESTIONS.length) {
      setPhase("result");
    } else {
      setIndex(index + 1);
    }
  };

  const correctCount = choices.filter((c, i) => c === QUESTIONS[i].correct).length;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="availability-heuristic-test"
          direction="higher"
          value={correctCount}
          unitLabel={`out of ${QUESTIONS.length} correctly judged`}
          shareLabel={`I correctly judged ${correctCount}/${QUESTIONS.length} frequency comparisons on the Availability Heuristic Test!`}
          onRetry={start}
        >
          <div className="flex w-full max-w-md flex-col gap-3 text-left">
            {QUESTIONS.map((q, i) => {
              const wasCorrect = choices[i] === q.correct;
              return (
                <div key={i} className="rounded-xl border border-border bg-surface-2 px-4 py-3">
                  <p className="text-xs font-semibold text-foreground">
                    {wasCorrect ? "✅" : "❌"} {q.prompt}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-2">{q.explanation}</p>
                </div>
              );
            })}
          </div>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll judge 4 quick frequency comparisons. Pick whichever option you genuinely think is more
            common.
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
      <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <p className="text-xs font-medium text-muted-2">
          Question {index + 1} / {QUESTIONS.length}
        </p>
        <p className="text-lg font-semibold text-foreground">{q.prompt}</p>
        <div className="flex w-full flex-col gap-3">
          <button
            onClick={() => choose("A")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            {q.optionA}
          </button>
          <button
            onClick={() => choose("B")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            {q.optionB}
          </button>
        </div>
      </div>
    </TestFrame>
  );
}
