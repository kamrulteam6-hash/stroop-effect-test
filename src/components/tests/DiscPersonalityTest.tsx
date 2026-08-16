"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { TypeResult } from "@/components/tests/shared/TypeResult";
import { Callout } from "@/components/seo/Callout";

type Style = "D" | "I" | "S" | "C";
type Phase = "idle" | "quiz" | "result";

interface Question {
  style: Style;
  text: string;
}

const QUESTIONS: Question[] = [
  { style: "D", text: "I like to take charge and make decisions quickly." },
  { style: "D", text: "I focus on results and getting things done, even if it ruffles feathers." },
  { style: "D", text: "I get impatient with long discussions before action is taken." },
  { style: "I", text: "I enjoy talking to and persuading people." },
  { style: "I", text: "I'm energized by being around others and building new connections." },
  { style: "I", text: "I tend to think out loud and express my enthusiasm openly." },
  { style: "S", text: "I value stability and prefer steady, predictable routines." },
  { style: "S", text: "I'm a patient, supportive listener for people around me." },
  { style: "S", text: "I prefer to avoid conflict and keep the peace in a group." },
  { style: "C", text: "I like to analyze details carefully before making a decision." },
  { style: "C", text: "I hold myself and others to high standards of accuracy." },
  { style: "C", text: "I prefer following clear procedures over improvising." },
];

const STYLE_INFO: Record<Style, { name: string; icon: string; description: string }> = {
  D: {
    name: "Dominance",
    icon: "🦁",
    description:
      "You tend to be direct, decisive, and results-focused. This drives fast progress, though it's worth balancing with patience for others' input.",
  },
  I: {
    name: "Influence",
    icon: "🎤",
    description:
      "You tend to be outgoing, persuasive, and enthusiastic. This builds strong connections quickly, though it's worth pairing with follow-through on details.",
  },
  S: {
    name: "Steadiness",
    icon: "🌳",
    description:
      "You tend to be calm, patient, and supportive, valuing stability and cooperation. This builds trust, though it's worth practicing assertiveness when needed.",
  },
  C: {
    name: "Conscientiousness",
    icon: "📐",
    description:
      "You tend to be analytical, precise, and quality-focused. This produces careful, accurate work, though it's worth balancing with comfort in ambiguity.",
  },
};

export function DiscPersonalityTest() {
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
    const styles: Style[] = ["D", "I", "S", "C"];
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
            typeSubtitle="Primary DISC Style"
            description={info.description}
            breakdown={scores.map((s) => ({
              key: s.style,
              label: STYLE_INFO[s.style].name,
              value: Math.round(s.pct),
            }))}
          />
          <Callout icon="🧭" title="A profile, not a box" tone="primary">
            This screener is inspired by the widely used DISC behavioral framework (Dominance, Influence,
            Steadiness, Conscientiousness). It is not an official, licensed DISC assessment or a validated
            clinical instrument. Most people show a blend of styles rather than fitting neatly into just one.
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
            Answer 12 short statements about how you typically behave to discover your primary DISC style:
            Dominance, Influence, Steadiness, or Conscientiousness.
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
