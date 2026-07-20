"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { TypeResult } from "@/components/tests/shared/TypeResult";

type Phase = "idle" | "quiz" | "result";
type TypeNum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface Question {
  type: TypeNum;
  text: string;
}

const QUESTIONS: Question[] = [
  { type: 1, text: "I hold myself to very high standards and notice when things aren't done right." },
  { type: 1, text: "I often feel a strong sense of right and wrong in everyday situations." },
  { type: 1, text: "I tend to correct mistakes, even small ones, when I notice them." },

  { type: 2, text: "I feel most fulfilled when I'm helping someone else." },
  { type: 2, text: "I often put other people's needs ahead of my own." },
  { type: 2, text: "I like being needed by the people close to me." },

  { type: 3, text: "I'm motivated by achieving visible success and recognition." },
  { type: 3, text: "I adapt my approach quickly to whatever it takes to succeed." },
  { type: 3, text: "I care about how my accomplishments look to others." },

  { type: 4, text: "I feel like I experience emotions more intensely than most people." },
  { type: 4, text: "I'm drawn to expressing my unique, authentic self." },
  { type: 4, text: "I often feel like I don't quite fit in with everyone else." },

  { type: 5, text: "I prefer observing and understanding before jumping into action." },
  { type: 5, text: "I need significant private time to recharge and think." },
  { type: 5, text: "I value knowledge and expertise deeply." },

  { type: 6, text: "I tend to think through worst-case scenarios before making decisions." },
  { type: 6, text: "I value loyalty and trust in my close relationships." },
  { type: 6, text: "I often double-check things to make sure they're safe or correct." },

  { type: 7, text: "I get excited by new ideas, plans, and experiences." },
  { type: 7, text: "I dislike feeling trapped in routine or limited options." },
  { type: 7, text: "I try to stay upbeat and avoid dwelling on negative feelings." },

  { type: 8, text: "I speak up directly, even when it might create conflict." },
  { type: 8, text: "I like being in control of situations I'm part of." },
  { type: 8, text: "I feel a strong urge to protect people I care about." },

  { type: 9, text: "I go out of my way to avoid conflict with others." },
  { type: 9, text: "I often go along with the group rather than push my own agenda." },
  { type: 9, text: "I find it easy to see multiple sides of a disagreement." },
];

const TYPE_INFO: Record<TypeNum, { name: string; description: string }> = {
  1: { name: "Type 1 — The Reformer", description: "Principled and purposeful — you hold yourself to high standards and care deeply about doing things right." },
  2: { name: "Type 2 — The Helper", description: "Warm and generous — you find meaning in supporting others and often put their needs ahead of your own." },
  3: { name: "Type 3 — The Achiever", description: "Driven and adaptable — you're motivated by success, recognition, and getting results." },
  4: { name: "Type 4 — The Individualist", description: "Introspective and expressive — you value authenticity and often feel things more intensely than others." },
  5: { name: "Type 5 — The Investigator", description: "Analytical and private — you're driven by a need to understand and often recharge through solitude." },
  6: { name: "Type 6 — The Loyalist", description: "Committed and vigilant — you value security and trust, and think carefully about what could go wrong." },
  7: { name: "Type 7 — The Enthusiast", description: "Spontaneous and versatile — you're energized by new experiences and possibilities." },
  8: { name: "Type 8 — The Challenger", description: "Assertive and decisive — you speak your mind directly and feel a strong drive to protect what matters to you." },
  9: { name: "Type 9 — The Peacemaker", description: "Easygoing and accommodating — you value harmony and can see multiple sides of most situations." },
};

export function EnneagramTest() {
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

  const types: TypeNum[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const typeScores = types.map((type) => {
    const scores = QUESTIONS.map((q, i) => ({ q, v: answers[i] })).filter(({ q }) => q.type === type);
    const sum = scores.reduce((acc, { v }) => acc + v, 0);
    const pct = ((sum - scores.length) / (scores.length * 4)) * 100;
    return { type, pct };
  });

  const dominant = [...typeScores].sort((a, b) => b.pct - a.pct)[0];

  if (phase === "result" && dominant) {
    return (
      <TestFrame>
        <TypeResult
          icon="🔯"
          typeName={TYPE_INFO[dominant.type].name}
          description={TYPE_INFO[dominant.type].description}
          breakdown={[...typeScores]
            .sort((a, b) => b.pct - a.pct)
            .map((t) => ({ key: `${t.type}`, label: TYPE_INFO[t.type].name, value: Math.round(t.pct) }))}
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
            Answer 27 short statements honestly to estimate your dominant type among the 9 core Enneagram
            personality types.
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
