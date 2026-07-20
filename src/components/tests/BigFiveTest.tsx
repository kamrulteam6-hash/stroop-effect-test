"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { TraitBars, TraitScore } from "@/components/tests/shared/TraitBars";

type Trait = "O" | "C" | "E" | "A" | "N";
type Phase = "idle" | "quiz" | "result";

interface Question {
  trait: Trait;
  text: string;
  reverse: boolean;
}

const QUESTIONS: Question[] = [
  { trait: "O", text: "I enjoy exploring new ideas and abstract concepts.", reverse: false },
  { trait: "O", text: "I have a vivid imagination.", reverse: false },
  { trait: "O", text: "I'm curious about many different subjects.", reverse: false },
  { trait: "O", text: "I prefer familiar routines over new experiences.", reverse: true },
  { trait: "O", text: "I enjoy art, music, or ideas that challenge convention.", reverse: false },

  { trait: "C", text: "I keep my belongings and workspace organized.", reverse: false },
  { trait: "C", text: "I follow through on tasks until they're finished.", reverse: false },
  { trait: "C", text: "I often overlook small details.", reverse: true },
  { trait: "C", text: "I make plans and stick to them.", reverse: false },
  { trait: "C", text: "I tend to put off important tasks.", reverse: true },

  { trait: "E", text: "I feel energized after spending time with a group of people.", reverse: false },
  { trait: "E", text: "I enjoy being the center of attention.", reverse: false },
  { trait: "E", text: "I prefer a quiet evening alone over a social gathering.", reverse: true },
  { trait: "E", text: "I find it easy to start conversations with strangers.", reverse: false },
  { trait: "E", text: "I tend to hold back in group settings.", reverse: true },

  { trait: "A", text: "I genuinely care about other people's feelings.", reverse: false },
  { trait: "A", text: "I try to avoid conflict with others.", reverse: false },
  { trait: "A", text: "I find it easy to trust people.", reverse: false },
  { trait: "A", text: "I sometimes put my own interests ahead of others'.", reverse: true },
  { trait: "A", text: "I'm quick to forgive people who wrong me.", reverse: false },

  { trait: "N", text: "I often feel anxious or worried.", reverse: false },
  { trait: "N", text: "My mood changes quickly.", reverse: false },
  { trait: "N", text: "I stay calm under pressure.", reverse: true },
  { trait: "N", text: "Small setbacks can upset me for a while.", reverse: false },
  { trait: "N", text: "I rarely feel stressed.", reverse: true },
];

const TRAIT_INFO: Record<Trait, { label: string; low: string; high: string }> = {
  O: {
    label: "Openness",
    low: "You tend to favor the practical and familiar over the abstract and novel.",
    high: "You're drawn to new ideas, imagination, and novel experiences.",
  },
  C: {
    label: "Conscientiousness",
    low: "You tend to be more spontaneous and flexible than structured.",
    high: "You're organized, dependable, and goal-directed.",
  },
  E: {
    label: "Extraversion",
    low: "You tend to recharge through solitude and prefer smaller, quieter settings.",
    high: "You tend to draw energy from social interaction and stimulation.",
  },
  A: {
    label: "Agreeableness",
    low: "You tend to prioritize honesty and your own position over accommodating others.",
    high: "You tend to be cooperative, trusting, and considerate of others.",
  },
  N: {
    label: "Neuroticism",
    low: "You tend to stay emotionally steady, even under stress.",
    high: "You tend to experience stress, worry, or mood shifts more intensely.",
  },
};

function traitDescription(trait: Trait, score: number): string {
  const info = TRAIT_INFO[trait];
  return score >= 50 ? info.high : info.low;
}

export function BigFiveTest() {
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

  const computeTraits = (): TraitScore[] => {
    const traits: Trait[] = ["O", "C", "E", "A", "N"];
    return traits.map((trait) => {
      const scores = QUESTIONS.map((q, i) => ({ q, v: answers[i] })).filter(({ q }) => q.trait === trait);
      const sum = scores.reduce((acc, { q, v }) => acc + (q.reverse ? 6 - v : v), 0);
      const avg = sum / scores.length;
      const pct = ((avg - 1) / 4) * 100;
      return { key: trait, label: TRAIT_INFO[trait].label, value: pct, description: traitDescription(trait, pct) };
    });
  };

  if (phase === "result") {
    const traits = computeTraits();
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Your Big Five Profile</ResultHeading>
          <p className="max-w-md text-sm text-muted">
            These five dimensions — often remembered by the acronym OCEAN — are the most widely replicated model of
            personality in psychological research.
          </p>
          <TraitBars traits={traits} />
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
            Answer 25 short statements honestly, based on how you generally are — not how you&apos;d like to be. There
            are no right or wrong answers.
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
