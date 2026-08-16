"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { TypeResult } from "@/components/tests/shared/TypeResult";
import { Callout } from "@/components/seo/Callout";

type Style = "L" | "A" | "C" | "S";
type Phase = "idle" | "quiz" | "result";

interface Question {
  style: Style;
  text: string;
}

const QUESTIONS: Question[] = [
  { style: "L", text: "In a group project, I naturally end up setting direction and delegating tasks." },
  { style: "L", text: "I feel energized by being responsible for a team's results." },
  { style: "L", text: "I'm comfortable making the final call when a decision needs to be made quickly." },
  { style: "A", text: "I prefer digging into data and details before drawing a conclusion." },
  { style: "A", text: "I enjoy solving complex, logic-based problems more than open-ended ones." },
  { style: "A", text: "I'm most satisfied by work that rewards precision and careful analysis." },
  { style: "C", text: "I'm drawn to work that lets me express original ideas or designs." },
  { style: "C", text: "I get restless doing the same repetitive process every day." },
  { style: "C", text: "I prefer figuring out my own approach over following a strict template." },
  { style: "S", text: "I feel most fulfilled by work that directly helps or supports other people." },
  { style: "S", text: "I naturally notice when a coworker needs encouragement or assistance." },
  { style: "S", text: "I prefer collaborative, team-oriented work over working alone." },
];

const STYLE_INFO: Record<Style, { name: string; icon: string; description: string; careers: string }> = {
  L: {
    name: "The Leader",
    icon: "🚀",
    description: "You're energized by direction-setting, ownership, and driving results through others. You likely thrive when given real authority and accountability.",
    careers: "Roles this often suits: team lead, project manager, entrepreneur, operations manager.",
  },
  A: {
    name: "The Analyst",
    icon: "📊",
    description: "You're energized by precision, logic, and careful problem-solving. You likely thrive in roles that reward depth, accuracy, and structured thinking.",
    careers: "Roles this often suits: data analyst, engineer, accountant, researcher.",
  },
  C: {
    name: "The Creator",
    icon: "🎨",
    description: "You're energized by originality, variety, and expressing ideas in your own way. You likely thrive in roles with room for creative freedom.",
    careers: "Roles this often suits: designer, writer, marketer, product developer.",
  },
  S: {
    name: "The Supporter",
    icon: "🤝",
    description: "You're energized by helping others succeed and working closely with a team. You likely thrive in roles centered on people and collaboration.",
    careers: "Roles this often suits: HR specialist, teacher, counselor, customer success manager.",
  },
};

export function CareerPersonalityTest() {
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
    const styles: Style[] = ["L", "A", "C", "S"];
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
            typeSubtitle="Primary Career Personality"
            description={info.description}
            breakdown={scores.map((s) => ({
              key: s.style,
              label: STYLE_INFO[s.style].name.replace("The ", ""),
              value: Math.round(s.pct),
            }))}
          />
          <Callout icon="💼" title={info.careers} tone="primary">
            This screener is an original, entertainment-oriented quiz grouping common workplace strengths into four
            broad personality styles. It is not a substitute for professional career counseling, and most people
            show a blend of styles depending on the situation.
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
            Answer 12 short statements about how you naturally show up at work to discover your career personality
            type: Leader, Analyst, Creator, or Supporter.
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
