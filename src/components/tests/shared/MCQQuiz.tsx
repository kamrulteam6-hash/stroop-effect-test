"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

export interface MCQQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface MCQQuizConfig {
  slug: string;
  intro: string;
  questions: MCQQuestion[];
  resultHeading?: string;
  disclaimer?: string;
  /** Optional content shown before the questions begin (e.g. an audio passage). */
  preQuiz?: {
    label: string;
    content: React.ReactNode;
    continueLabel?: string;
  };
}

function bandFor(pct: number): { label: string; tone: "success" | "primary" | "gold" | "danger" } {
  if (pct >= 90) return { label: "Excellent", tone: "success" };
  if (pct >= 75) return { label: "Strong", tone: "success" };
  if (pct >= 55) return { label: "Solid", tone: "primary" };
  if (pct >= 35) return { label: "Developing", tone: "gold" };
  return { label: "Needs Practice", tone: "danger" };
}

export function MCQQuiz({ config }: { config: MCQQuizConfig }) {
  const { questions, intro, resultHeading, disclaimer, preQuiz } = config;
  const [phase, setPhase] = useState<"idle" | "pre" | "quiz" | "result">("idle");
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const start = () => {
    setAnswers([]);
    setIndex(0);
    setPicked(null);
    setPhase(preQuiz ? "pre" : "quiz");
  };

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
  };

  const next = () => {
    if (picked === null) return;
    const nextAnswers = [...answers, picked];
    setPicked(null);
    if (index + 1 >= questions.length) {
      setAnswers(nextAnswers);
      setPhase("result");
    } else {
      setAnswers(nextAnswers);
      setIndex(index + 1);
    }
  };

  if (phase === "result") {
    const correct = answers.filter((a, i) => a === questions[i].correctIndex).length;
    const pct = Math.round((correct / questions.length) * 100);
    const band = bandFor(pct);

    return (
      <TestFrame>
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <ResultHeading>{resultHeading ?? "Quiz Complete"}</ResultHeading>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-black tabular-nums text-primary sm:text-7xl">
              {correct}/{questions.length}
            </span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">Correct ({pct}%)</span>
          </div>
          <span
            className={`rounded-full px-4 py-1.5 text-sm font-bold ${
              band.tone === "danger"
                ? "bg-danger/15 text-danger"
                : band.tone === "gold"
                  ? "bg-gold/15 text-gold"
                  : band.tone === "success"
                    ? "bg-success/15 text-success"
                    : "bg-primary/15 text-primary"
            }`}
          >
            {band.label}
          </span>

          <div className="flex w-full max-w-lg flex-col gap-2 text-left">
            {questions.map((q, i) => {
              const userAnswer = answers[i];
              const isCorrect = userAnswer === q.correctIndex;
              return (
                <div key={i} className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-medium text-foreground">{q.question}</span>
                    <span className={isCorrect ? "font-bold text-success" : "font-bold text-danger"}>
                      {isCorrect ? "✓" : "✗"}
                    </span>
                  </div>
                  {!isCorrect && (
                    <p className="mt-1 text-xs text-muted-2">
                      Correct answer: <span className="font-semibold text-foreground">{q.options[q.correctIndex]}</span>
                      {q.explanation ? ` — ${q.explanation}` : ""}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {disclaimer && (
            <Callout icon="ℹ️" title="About this test" tone="primary">
              {disclaimer}
            </Callout>
          )}

          <Button onClick={start}>Try Again</Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "pre" && preQuiz) {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm font-semibold text-foreground">{preQuiz.label}</p>
          {preQuiz.content}
          <Button size="lg" onClick={() => setPhase("quiz")}>
            {preQuiz.continueLabel ?? "Continue to Questions"}
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">{intro}</p>
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
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-2">
            <span>
              Question {index + 1} / {questions.length}
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${(index / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <p className="min-h-[3rem] text-center text-lg font-semibold text-foreground sm:text-xl">{q.question}</p>

        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
          {q.options.map((opt, i) => {
            const isPicked = picked === i;
            const isCorrectOpt = i === q.correctIndex;
            const showState = picked !== null;
            return (
              <button
                key={opt}
                onClick={() => pick(i)}
                disabled={picked !== null}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                  showState && isCorrectOpt
                    ? "border-success bg-success/10 text-success"
                    : showState && isPicked && !isCorrectOpt
                      ? "border-danger bg-danger/10 text-danger"
                      : "border-border bg-surface-2 text-foreground hover:border-primary"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <Button onClick={next} disabled={picked === null}>
          {index + 1 >= questions.length ? "See Result" : "Next Question"}
        </Button>
      </div>
    </TestFrame>
  );
}
