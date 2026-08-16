"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { TypeResult } from "@/components/tests/shared/TypeResult";
import { Callout } from "@/components/seo/Callout";

type Style = "V" | "A" | "R" | "K";
type Phase = "idle" | "quiz" | "result";

interface Question {
  style: Style;
  text: string;
}

const QUESTIONS: Question[] = [
  { style: "V", text: "I understand new information best when I can see a diagram, chart, or picture of it." },
  { style: "V", text: "I remember faces, layouts, and colors better than names or spoken details." },
  { style: "V", text: "I like using highlighters, color-coding, or mind maps when I study." },
  { style: "A", text: "I understand new information best when someone explains it out loud." },
  { style: "A", text: "I remember things better after discussing them or hearing them repeated." },
  { style: "A", text: "I often talk through problems out loud, even when alone." },
  { style: "R", text: "I understand new information best by reading detailed text about it." },
  { style: "R", text: "I take extensive written notes to help myself learn and remember." },
  { style: "R", text: "I prefer instructions written down over having them explained verbally." },
  { style: "K", text: "I understand new information best by doing a hands-on activity or practicing it myself." },
  { style: "K", text: "I learn better when I can move around or physically interact with materials." },
  { style: "K", text: "I prefer trial-and-error, hands-on practice over reading theory first." },
];

const STYLE_INFO: Record<Style, { name: string; icon: string; description: string }> = {
  V: {
    name: "Visual Learner",
    icon: "👁️",
    description: "You tend to absorb information best through images, diagrams, colors, and spatial layouts. Charts, mind maps, and visual notes likely help you learn faster.",
  },
  A: {
    name: "Auditory Learner",
    icon: "👂",
    description: "You tend to absorb information best through listening and discussion. Lectures, podcasts, and talking through ideas out loud likely help you learn faster.",
  },
  R: {
    name: "Reading/Writing Learner",
    icon: "📝",
    description: "You tend to absorb information best through written words. Detailed notes, textbooks, and written instructions likely help you learn faster.",
  },
  K: {
    name: "Kinesthetic Learner",
    icon: "✋",
    description: "You tend to absorb information best through hands-on practice and movement. Doing, building, and physically practicing likely help you learn faster.",
  },
};

export function LearningStyleTest() {
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

  if (phase === "result") {
    const styles: Style[] = ["V", "A", "R", "K"];
    const scores = styles.map((style) => {
      const values = QUESTIONS.map((q, i) => ({ q, v: answers[i] })).filter(({ q }) => q.style === style).map(({ v }) => v);
      const avg = values.reduce((a, b) => a + b, 0) / values.length;
      const pct = ((avg - 1) / 4) * 100;
      return { style, pct };
    });
    const top = scores.reduce((a, b) => (b.pct > a.pct ? b : a));
    const info = STYLE_INFO[top.style];

    return (
      <TestFrame>
        <div className="flex w-full flex-col items-center gap-6">
          <TypeResult
            icon={info.icon}
            typeName={info.name}
            typeSubtitle="Primary Learning Style"
            description={info.description}
            breakdown={scores.map((s) => ({
              key: s.style,
              label: STYLE_INFO[s.style].name.split(" ")[0],
              value: Math.round(s.pct),
            }))}
          />
          <Callout icon="🎓" title="Everyone blends styles" tone="primary">
            This screener is inspired by the popular VARK model of learning preferences (Visual, Auditory,
            Reading/Writing, Kinesthetic). It is not a validated clinical or educational instrument — research on
            whether matching teaching to a preferred &apos;style&apos; actually improves learning outcomes is mixed, so treat
            this as a preference snapshot rather than a strict rule for how you must study.
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
            Answer 12 short statements about how you prefer to absorb new information to discover your primary
            learning style: Visual, Auditory, Reading/Writing, or Kinesthetic.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = QUESTIONS[index];
  const labels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

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

        <p className="min-h-[3rem] text-center text-lg font-semibold text-foreground sm:text-xl">{q.text}</p>

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
