"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { TypeResult } from "@/components/tests/shared/TypeResult";

type Phase = "idle" | "quiz" | "result";
type Language = "WA" | "AS" | "RG" | "QT" | "PT";

interface Question {
  lang: Language;
  text: string;
}

const QUESTIONS: Question[] = [
  { lang: "WA", text: "Hearing someone say they appreciate me means a lot." },
  { lang: "WA", text: "I feel most loved when someone compliments or encourages me verbally." },
  { lang: "WA", text: "A kind, specific compliment can make my whole day better." },
  { lang: "WA", text: "I like to tell people directly how much they mean to me." },

  { lang: "AS", text: "I feel loved when someone helps me with a task without being asked." },
  { lang: "AS", text: "Doing something practical for someone is how I show I care." },
  { lang: "AS", text: "I appreciate helpful actions more than words when it comes to feeling supported." },
  { lang: "AS", text: "Seeing someone go out of their way to help me means a lot." },

  { lang: "RG", text: "A thoughtful gift makes me feel genuinely cared for." },
  { lang: "RG", text: "I remember small gifts people have given me over the years." },
  { lang: "RG", text: "I enjoy picking out meaningful gifts for people I care about." },
  { lang: "RG", text: "Receiving something that shows someone was thinking of me matters to me." },

  { lang: "QT", text: "Undivided attention from someone I care about means a lot to me." },
  { lang: "QT", text: "I feel closest to people when we spend uninterrupted time together." },
  { lang: "QT", text: "I'd rather share an experience with someone than receive a gift." },
  { lang: "QT", text: "I feel hurt when someone is distracted during time we're supposed to share." },

  { lang: "PT", text: "A hug or a comforting touch makes me feel reassured." },
  { lang: "PT", text: "Physical closeness is an important part of feeling connected to someone." },
  { lang: "PT", text: "I feel most loved through physical affection like a hand on my shoulder or a hug." },
  { lang: "PT", text: "I notice when physical affection is missing in a relationship." },
];

const LANG_INFO: Record<Language, { name: string; description: string }> = {
  WA: {
    name: "Words of Affirmation",
    description: "You feel most loved through verbal encouragement, compliments, and hearing your feelings put into words.",
  },
  AS: {
    name: "Acts of Service",
    description: "You feel most loved through helpful actions — practical support means more to you than words alone.",
  },
  RG: {
    name: "Receiving Gifts",
    description: "You feel most loved through thoughtful gifts that show someone was thinking of you.",
  },
  QT: {
    name: "Quality Time",
    description: "You feel most loved through focused, uninterrupted time spent together.",
  },
  PT: {
    name: "Physical Touch",
    description: "You feel most loved through physical affection like hugs and comforting touch.",
  },
};

export function LoveLanguageTest() {
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

  const langs: Language[] = ["WA", "AS", "RG", "QT", "PT"];
  const langScores = langs.map((lang) => {
    const scores = QUESTIONS.map((q, i) => ({ q, v: answers[i] })).filter(({ q }) => q.lang === lang);
    const sum = scores.reduce((acc, { v }) => acc + v, 0);
    const pct = ((sum - scores.length) / (scores.length * 4)) * 100;
    return { lang, pct };
  });

  const dominant = [...langScores].sort((a, b) => b.pct - a.pct)[0];

  if (phase === "result" && dominant) {
    return (
      <TestFrame>
        <TypeResult
          icon="💌"
          typeName={LANG_INFO[dominant.lang].name}
          description={LANG_INFO[dominant.lang].description}
          breakdown={[...langScores]
            .sort((a, b) => b.pct - a.pct)
            .map((l) => ({ key: l.lang, label: LANG_INFO[l.lang].name, value: Math.round(l.pct) }))}
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
            Answer 20 short statements about how you prefer to give and receive love, to find out which of the 5
            love languages matters most to you.
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
