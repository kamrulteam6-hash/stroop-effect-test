"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { TraitBars, TraitScore } from "@/components/tests/shared/TraitBars";

type Factor = "H" | "E" | "X" | "A" | "C" | "O";
type Phase = "idle" | "quiz" | "result";

interface Question {
  factor: Factor;
  text: string;
  reverse: boolean;
}

const QUESTIONS: Question[] = [
  { factor: "H", text: "I wouldn't pretend to like someone just to get something from them.", reverse: false },
  { factor: "H", text: "I would be tempted to use flattery to get a raise or promotion.", reverse: true },
  { factor: "H", text: "I think of myself as an ordinary person, not someone entitled to special treatment.", reverse: false },
  { factor: "H", text: "I'd be tempted to buy an expensive item even if it meant cutting corners financially with others.", reverse: true },

  { factor: "E", text: "I sometimes can't stop worrying about small mistakes I've made.", reverse: false },
  { factor: "E", text: "I rarely feel anxious even when things are going wrong.", reverse: true },
  { factor: "E", text: "I need reassurance from others when I feel insecure.", reverse: false },
  { factor: "E", text: "I feel very little sympathy for people who are worse off than me.", reverse: true },

  { factor: "X", text: "I feel comfortable and energized in social gatherings.", reverse: false },
  { factor: "X", text: "I tend to feel awkward when I'm the center of attention.", reverse: true },
  { factor: "X", text: "I see myself as a fairly cheerful, upbeat person.", reverse: false },
  { factor: "X", text: "I prefer to stay in the background rather than lead a group.", reverse: true },

  { factor: "A", text: "I'm willing to forgive people who have wronged me.", reverse: false },
  { factor: "A", text: "I hold grudges for a long time after being wronged.", reverse: true },
  { factor: "A", text: "I try to see things from other people's perspective during a disagreement.", reverse: false },
  { factor: "A", text: "I get irritated easily by other people's mistakes.", reverse: true },

  { factor: "C", text: "I plan tasks carefully before starting them.", reverse: false },
  { factor: "C", text: "I often leave things until the last minute.", reverse: true },
  { factor: "C", text: "I pay close attention to details in my work.", reverse: false },
  { factor: "C", text: "I get bored with a task before finishing it.", reverse: true },

  { factor: "O", text: "I enjoy exploring new ideas, even unconventional ones.", reverse: false },
  { factor: "O", text: "I have little interest in abstract or theoretical discussions.", reverse: true },
  { factor: "O", text: "I'm drawn to art, music, or literature that challenges convention.", reverse: false },
  { factor: "O", text: "I prefer sticking to familiar routines over trying new experiences.", reverse: true },
];

const FACTOR_INFO: Record<Factor, { label: string; low: string; high: string }> = {
  H: {
    label: "Honesty-Humility",
    low: "You may be more comfortable bending rules or using flattery strategically to get ahead.",
    high: "You tend to be sincere, fair, and uninterested in manipulating others for personal gain.",
  },
  E: {
    label: "Emotionality",
    low: "You tend to stay emotionally steady and less anxious, even under stress.",
    high: "You tend to feel anxiety, worry, and emotional dependence on others more strongly.",
  },
  X: {
    label: "eXtraversion",
    low: "You tend to prefer quieter, lower-stimulation settings and feel drained by too much socializing.",
    high: "You tend to feel energized by social interaction and enjoy being around others.",
  },
  A: {
    label: "Agreeableness",
    low: "You tend to hold your ground firmly and can be slower to forgive when wronged.",
    high: "You tend to be forgiving, patient, and willing to compromise in disagreements.",
  },
  C: {
    label: "Conscientiousness",
    low: "You tend to be more spontaneous and flexible, sometimes at the cost of organization.",
    high: "You tend to be organized, disciplined, and careful about details and deadlines.",
  },
  O: {
    label: "Openness to Experience",
    low: "You tend to prefer practical, familiar approaches over abstract or novel ones.",
    high: "You tend to be curious, imaginative, and drawn to new ideas and experiences.",
  },
};

function scoreDescription(factor: Factor, score: number): string {
  const info = FACTOR_INFO[factor];
  return score >= 50 ? info.high : info.low;
}

export function HexacoPersonalityTest() {
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

  const computeFactors = (finalAnswers: number[]): TraitScore[] => {
    const factors: Factor[] = ["H", "E", "X", "A", "C", "O"];
    return factors.map((factor) => {
      const scores = QUESTIONS.map((q, i) => ({ q, v: finalAnswers[i] })).filter(({ q }) => q.factor === factor);
      const sum = scores.reduce((acc, { q, v }) => acc + (q.reverse ? 6 - v : v), 0);
      const avg = sum / scores.length;
      const pct = ((avg - 1) / 4) * 100;
      return { key: factor, label: FACTOR_INFO[factor].label, value: pct, description: scoreDescription(factor, pct) };
    });
  };

  if (phase === "result") {
    const factors = computeFactors(answers);
    const overall = Math.round(factors.reduce((a, f) => a + f.value, 0) / factors.length);
    return (
      <TestFrame>
        <ResultScreen
          slug="hexaco-personality-test"
          direction="higher"
          value={overall}
          unitLabel="Overall Average"
          extraStats={factors.map((f) => ({ label: f.label, value: `${Math.round(f.value)}%` }))}
          shareLabel={`I took the HEXACO Personality Test!`}
          onRetry={start}
        >
          <TraitBars traits={factors} />
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Answer 24 short statements honestly to get your profile across the six HEXACO personality dimensions:
            Honesty-Humility, Emotionality, eXtraversion, Agreeableness, Conscientiousness, and Openness.
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
