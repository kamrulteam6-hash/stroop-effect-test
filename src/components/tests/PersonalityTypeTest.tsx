"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { TypeResult } from "@/components/tests/shared/TypeResult";

type Axis = "EI" | "SN" | "TF" | "JP";
type Phase = "idle" | "quiz" | "result";

interface Question {
  axis: Axis;
  text: string;
  reverse: boolean;
}

// For each axis, agreement with a non-reversed item pushes toward the "high" letter (E, N, F, J).
const QUESTIONS: Question[] = [
  { axis: "EI", text: "I feel energized after spending time with a large group of people.", reverse: false },
  { axis: "EI", text: "I enjoy being the center of attention in social settings.", reverse: false },
  { axis: "EI", text: "I prefer quiet, one-on-one conversations over group gatherings.", reverse: true },
  { axis: "EI", text: "I find small talk with strangers easy and enjoyable.", reverse: false },
  { axis: "EI", text: "I need alone time to recharge after socializing.", reverse: true },
  { axis: "EI", text: "I tend to think out loud rather than reflect silently first.", reverse: false },

  { axis: "SN", text: "I'm more interested in abstract theories than concrete facts.", reverse: false },
  { axis: "SN", text: "I trust practical experience more than imaginative possibilities.", reverse: true },
  { axis: "SN", text: "I enjoy thinking about future possibilities more than present realities.", reverse: false },
  { axis: "SN", text: "I prefer clear, step-by-step instructions over open-ended exploration.", reverse: true },
  { axis: "SN", text: "I often notice patterns and connections that others miss.", reverse: false },
  { axis: "SN", text: "I focus on concrete details rather than the big picture.", reverse: true },

  { axis: "TF", text: "I make decisions based on how they'll affect people's feelings.", reverse: false },
  { axis: "TF", text: "I value logical consistency over personal circumstances when deciding.", reverse: true },
  { axis: "TF", text: "I find it easy to empathize with others' emotional experiences.", reverse: false },
  { axis: "TF", text: "I prioritize being fair and objective over being kind.", reverse: true },
  { axis: "TF", text: "Maintaining harmony in a group matters more to me than being right.", reverse: false },
  { axis: "TF", text: "I tend to critique ideas objectively, even if it upsets someone.", reverse: true },

  { axis: "JP", text: "I prefer having a clear plan rather than keeping my options open.", reverse: false },
  { axis: "JP", text: "I like to finish tasks well ahead of the deadline.", reverse: false },
  { axis: "JP", text: "I enjoy spontaneity and adapting my plans as I go.", reverse: true },
  { axis: "JP", text: "I feel uncomfortable when things are left unresolved.", reverse: false },
  { axis: "JP", text: "I often leave decisions open until the last possible moment.", reverse: true },
  { axis: "JP", text: "I like structure and organization in my daily routine.", reverse: false },
];

const AXIS_LABELS: Record<Axis, { high: string; low: string; highName: string }> = {
  EI: { high: "E", low: "I", highName: "Extraversion" },
  SN: { high: "N", low: "S", highName: "Intuition" },
  TF: { high: "F", low: "T", highName: "Feeling" },
  JP: { high: "J", low: "P", highName: "Judging" },
};

const TYPE_DESCRIPTIONS: Record<string, string> = {
  ISTJ: "Practical, organized, and dependable — you value structure, tradition, and following through on commitments.",
  ISFJ: "Warm, conscientious, and detail-oriented — you quietly support others and take your responsibilities seriously.",
  INFJ: "Insightful and idealistic — you seek deeper meaning and connection while working steadily toward long-term goals.",
  INTJ: "Strategic and independent — you enjoy building systems and long-range plans grounded in logical analysis.",
  ISTP: "Hands-on and analytical — you like understanding how things work and solving problems in the moment.",
  ISFP: "Gentle and adaptable — you value personal freedom, aesthetics, and staying true to your own values.",
  INFP: "Idealistic and introspective — you're driven by personal values and a desire to help others grow.",
  INTP: "Curious and theoretical — you enjoy exploring ideas and building logical frameworks for their own sake.",
  ESTJ: "Organized and decisive — you like clear structure, efficiency, and taking charge to get things done.",
  ESFJ: "Sociable and supportive — you thrive on cooperation, tradition, and taking care of the people around you.",
  ENFJ: "Charismatic and empathetic — you're energized by helping others grow and bringing people together.",
  ENTJ: "Confident and strategic — you enjoy leading, organizing people, and driving toward ambitious goals.",
  ESTP: "Bold and pragmatic — you thrive on action, adapt quickly, and enjoy hands-on problem-solving.",
  ESFP: "Spontaneous and enthusiastic — you live in the moment and bring energy and warmth to any group.",
  ENFP: "Imaginative and enthusiastic — you're driven by possibility, connection, and creative exploration.",
  ENTP: "Inventive and quick-witted — you enjoy debating ideas and exploring unconventional possibilities.",
};

export function PersonalityTypeTest() {
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

  const axes: Axis[] = ["EI", "SN", "TF", "JP"];
  const axisScores = axes.map((axis) => {
    const scores = QUESTIONS.map((q, i) => ({ q, v: answers[i] })).filter(({ q }) => q.axis === axis);
    const sum = scores.reduce((acc, { q, v }) => acc + (q.reverse ? 6 - v : v), 0);
    const avg = sum / scores.length;
    const pct = ((avg - 1) / 4) * 100;
    return { axis, pct };
  });

  const typeCode = axisScores.map((a) => (a.pct >= 50 ? AXIS_LABELS[a.axis].high : AXIS_LABELS[a.axis].low)).join("");

  if (phase === "result") {
    return (
      <TestFrame>
        <TypeResult
          icon="🧭"
          typeName={typeCode}
          description={TYPE_DESCRIPTIONS[typeCode]}
          breakdown={axisScores.map((a) => ({
            key: a.axis,
            label: `${AXIS_LABELS[a.axis].highName} (${AXIS_LABELS[a.axis].high})`,
            value: Math.round(a.pct),
          }))}
        />
        <div className="mt-6 flex justify-center">
          <Button onClick={start}>Retake Test</Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Answer 24 short statements honestly, based on how you generally are, to get your 4-letter personality
            type across 4 preference dimensions.
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
