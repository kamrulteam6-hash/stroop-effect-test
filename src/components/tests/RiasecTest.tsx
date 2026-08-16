"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { TraitBars, TraitScore } from "@/components/tests/shared/TraitBars";

type Type = "R" | "I" | "A" | "S" | "E" | "C";
type Phase = "idle" | "quiz" | "result";

interface Question {
  type: Type;
  text: string;
}

const QUESTIONS: Question[] = [
  { type: "R", text: "Repairing a bicycle or piece of equipment." },
  { type: "R", text: "Building a wooden structure or working with your hands." },
  { type: "R", text: "Operating machinery or technical equipment." },
  { type: "R", text: "Working outdoors with plants, animals, or land." },
  { type: "I", text: "Investigating why a system or process failed." },
  { type: "I", text: "Analyzing scientific or statistical data." },
  { type: "I", text: "Researching an unanswered question in depth." },
  { type: "I", text: "Testing competing explanations for a puzzling result." },
  { type: "A", text: "Designing a visual identity, poster, or layout." },
  { type: "A", text: "Writing a story, script, or piece of music." },
  { type: "A", text: "Creating an original presentation or performance." },
  { type: "A", text: "Experimenting with unconventional or artistic ideas." },
  { type: "S", text: "Teaching someone a new skill." },
  { type: "S", text: "Helping a person work through a personal problem." },
  { type: "S", text: "Coaching or mentoring a learner." },
  { type: "S", text: "Supporting patients, clients, or customers directly." },
  { type: "E", text: "Leading a project or a team toward a goal." },
  { type: "E", text: "Negotiating a deal or agreement." },
  { type: "E", text: "Pitching a new idea to other people." },
  { type: "E", text: "Organizing a business initiative or venture." },
  { type: "C", text: "Organizing financial records or spreadsheets." },
  { type: "C", text: "Maintaining a structured database." },
  { type: "C", text: "Checking forms or documents for accuracy." },
  { type: "C", text: "Following a detailed administrative process." },
];

const TYPE_INFO: Record<Type, { label: string; description: string }> = {
  R: { label: "Realistic", description: "Practical, hands-on, physical, and technical activities." },
  I: { label: "Investigative", description: "Analyzing, researching, and solving complex problems." },
  A: { label: "Artistic", description: "Creating, designing, and expressing original ideas." },
  S: { label: "Social", description: "Helping, teaching, supporting, and communicating." },
  E: { label: "Enterprising", description: "Leading, persuading, and business-oriented activity." },
  C: { label: "Conventional", description: "Organizing, recording, and structured procedures." },
};

export function RiasecTest() {
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
    if (index + 1 >= QUESTIONS.length) {
      setAnswers(next);
      setPhase("result");
    } else {
      setAnswers(next);
      setIndex(index + 1);
    }
  };

  const computeTypes = (finalAnswers: number[]): TraitScore[] => {
    const types: Type[] = ["R", "I", "A", "S", "E", "C"];
    return types.map((type) => {
      const scores = QUESTIONS.map((q, i) => ({ q, v: finalAnswers[i] })).filter(({ q }) => q.type === type);
      const sum = scores.reduce((acc, { v }) => acc + v, 0);
      const avg = sum / scores.length;
      const pct = ((avg - 1) / 4) * 100;
      return { key: type, label: TYPE_INFO[type].label, value: pct, description: TYPE_INFO[type].description };
    });
  };

  if (phase === "result") {
    const types = computeTypes(answers);
    const sorted = [...types].sort((a, b) => b.value - a.value);
    const code = sorted
      .slice(0, 3)
      .map((t) => t.key)
      .join("");

    return (
      <TestFrame>
        <ResultScreen
          slug="riasec-test"
          direction="higher"
          value={Math.round(sorted[0].value)}
          unitLabel={`% — Holland Code: ${code}`}
          extraStats={types.map((t) => ({ label: t.label, value: `${Math.round(t.value)}%` }))}
          shareLabel={`My RIASEC profile is ${code}!`}
          onRetry={start}
        >
          <TraitBars traits={types} />
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Rate how much you would enjoy 24 different work activities to get your full six-dimension RIASEC
            profile: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = QUESTIONS[index];
  const labels = ["Strongly Dislike", "Dislike", "Unsure", "Like", "Strongly Like"];

  return (
    <TestFrame>
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-2">
            <span>
              Question {index + 1} / {QUESTIONS.length}
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${(index / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        <p className="min-h-[3rem] text-center text-lg font-semibold text-foreground sm:text-xl">
          How much would you enjoy: {q.text}
        </p>

        <div className="grid w-full grid-cols-5 gap-2">
          {labels.map((label, i) => (
            <button
              key={label}
              onClick={() => answer(i + 1)}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-2 px-1 py-3 text-center text-[10px] font-medium text-muted transition-colors hover:border-primary hover:text-foreground sm:text-xs"
            >
              <span className="text-lg font-bold text-foreground">{i + 1}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
