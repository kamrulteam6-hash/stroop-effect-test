"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

interface Puzzle {
  clues: string[];
  question: string;
  options: string[];
  correctIndex: number;
}

const PUZZLES: Puzzle[] = [
  {
    clues: ["Amy is taller than Ben.", "Ben is taller than Cara."],
    question: "Who is the shortest?",
    options: ["Amy", "Ben", "Cara", "Cannot be determined"],
    correctIndex: 2,
  },
  {
    clues: ["All squares are rectangles.", "This shape is a square."],
    question: "What can you conclude?",
    options: ["This shape is a rectangle.", "This shape is a circle.", "This shape is not a rectangle.", "Nothing can be concluded."],
    correctIndex: 0,
  },
  {
    clues: ["If it rains, the game is cancelled.", "The game was not cancelled."],
    question: "What can you conclude?",
    options: ["It rained.", "It did not rain.", "The game was cancelled.", "Nothing can be concluded."],
    correctIndex: 1,
  },
  {
    clues: ["Every member of the Blue Team wears a blue shirt.", "David is not wearing a blue shirt."],
    question: "What can you conclude about David?",
    options: ["David is on the Blue Team.", "David is not on the Blue Team.", "David is the team captain.", "Nothing can be concluded."],
    correctIndex: 1,
  },
  {
    clues: ["Five friends sit in a row: Eve, Finn, Gia, Hugo, Ivy.", "Eve sits immediately left of Finn.", "Gia sits at the far right.", "Hugo sits immediately left of Gia."],
    question: "Who could sit in the middle seat?",
    options: ["Eve", "Ivy", "Gia", "Hugo"],
    correctIndex: 1,
  },
  {
    clues: ["Only employees with a badge can enter the lab.", "Maria entered the lab."],
    question: "What can you conclude?",
    options: ["Maria has a badge.", "Maria does not have a badge.", "Maria is a manager.", "Nothing can be concluded."],
    correctIndex: 0,
  },
];

export function DeductiveReasoningTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const start = () => {
    setIndex(0);
    setCorrectCount(0);
    setPhase("running");
  };

  const answer = (choiceIndex: number) => {
    if (choiceIndex === PUZZLES[index].correctIndex) setCorrectCount((c) => c + 1);
    const next = index + 1;
    if (next >= PUZZLES.length) {
      setPhase("result");
      return;
    }
    setIndex(next);
  };

  const accuracy = Math.round((correctCount / PUZZLES.length) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="deductive-reasoning-test"
          direction="higher"
          value={accuracy}
          unitLabel="% correct"
          headline="Deductive Reasoning Result"
          extraStats={[{ label: "Correct", value: `${correctCount}/${PUZZLES.length}` }]}
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
            Read a set of logical clues and answer a question that follows strictly from them — no outside
            assumptions allowed, across {PUZZLES.length} puzzles.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = PUZZLES[index];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Puzzle {index + 1} / {PUZZLES.length}
        </p>
        <div className="max-w-sm space-y-1 text-center">
          {q.clues.map((clue, i) => (
            <p key={i} className="text-sm text-muted">
              {clue}
            </p>
          ))}
        </div>
        <p className="max-w-sm text-center text-base font-semibold text-foreground">{q.question}</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
