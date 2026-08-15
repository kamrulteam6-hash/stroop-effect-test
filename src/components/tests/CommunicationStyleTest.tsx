"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { TypeResult } from "@/components/tests/shared/TypeResult";
import { Callout } from "@/components/seo/Callout";

type Style = "PASSIVE" | "AGGRESSIVE" | "PASSIVE_AGGRESSIVE" | "ASSERTIVE";
type Phase = "idle" | "quiz" | "result";

interface Question {
  style: Style;
  text: string;
}

const QUESTIONS: Question[] = [
  { style: "PASSIVE", text: "I stay quiet about my needs rather than risk upsetting someone." },
  { style: "PASSIVE", text: "I let others make decisions for me, even when I have a preference." },
  { style: "PASSIVE", text: "I find it hard to say no when someone asks me for something." },
  { style: "AGGRESSIVE", text: "I speak my mind bluntly, without much filtering." },
  { style: "AGGRESSIVE", text: "I raise my voice or push harder when I feel strongly about something." },
  { style: "AGGRESSIVE", text: "I interrupt or talk over people to make sure my point lands." },
  { style: "PASSIVE_AGGRESSIVE", text: "I express frustration indirectly, like through sarcasm or the silent treatment." },
  { style: "PASSIVE_AGGRESSIVE", text: "I agree to something out loud but act differently later." },
  { style: "PASSIVE_AGGRESSIVE", text: "I make a pointed comment instead of directly raising an issue." },
  { style: "ASSERTIVE", text: "I express my needs clearly and calmly, even in disagreement." },
  { style: "ASSERTIVE", text: "I can say no directly without over-explaining or apologizing excessively." },
  { style: "ASSERTIVE", text: "I listen to the other person's view while still stating my own clearly." },
];

const STYLE_INFO: Record<Style, { name: string; icon: string; description: string }> = {
  PASSIVE: {
    name: "Passive",
    icon: "🤐",
    description:
      "You tend to avoid stating your needs directly, often prioritizing harmony over self-expression. This can protect relationships short-term but may leave your own needs unmet over time.",
  },
  AGGRESSIVE: {
    name: "Aggressive",
    icon: "📢",
    description:
      "You tend to state your views forcefully and directly. This gets your point across clearly, but it can come across as overpowering if it doesn't leave room for the other person's view.",
  },
  PASSIVE_AGGRESSIVE: {
    name: "Passive-Aggressive",
    icon: "🙃",
    description:
      "You tend to express frustration indirectly rather than head-on. This avoids open confrontation, but the underlying issue often stays unresolved and can build resentment.",
  },
  ASSERTIVE: {
    name: "Assertive",
    icon: "🗣️",
    description:
      "You tend to express your needs and opinions clearly and respectfully, while still making room for the other person's perspective. This is generally considered the most balanced communication style.",
  },
};

export function CommunicationStyleTest() {
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
    const styles: Style[] = ["PASSIVE", "AGGRESSIVE", "PASSIVE_AGGRESSIVE", "ASSERTIVE"];
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
            typeSubtitle="Primary Communication Style"
            description={info.description}
            breakdown={scores.map((s) => ({
              key: s.style,
              label: STYLE_INFO[s.style].name,
              value: Math.round(s.pct),
            }))}
          />
          <Callout icon="💬" title="Styles can shift by context" tone="primary">
            This screener is inspired by the widely used passive / aggressive / passive-aggressive / assertive
            communication framework. It is not a validated clinical instrument. Most people use more than one
            style depending on who they&apos;re talking to and how safe the situation feels.
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
            Answer 12 short statements about how you typically express yourself in conversations to discover your
            primary communication style.
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
