"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { TypeResult } from "@/components/tests/shared/TypeResult";
import { Callout } from "@/components/seo/Callout";

type Style = "AVOID" | "ACCOMMODATE" | "COMPETE" | "COMPROMISE" | "COLLABORATE";
type Phase = "idle" | "quiz" | "result";

interface Question {
  style: Style;
  text: string;
}

const QUESTIONS: Question[] = [
  { style: "AVOID", text: "I try to postpone bringing up a disagreement, hoping it resolves on its own." },
  { style: "AVOID", text: "I'd rather withdraw from a conflict than confront it directly." },
  { style: "AVOID", text: "I change the subject when a conversation starts feeling tense." },
  { style: "ACCOMMODATE", text: "I give in to keep the other person happy, even if I disagree." },
  { style: "ACCOMMODATE", text: "I prioritize the relationship over getting my own way in a disagreement." },
  { style: "ACCOMMODATE", text: "I go along with what others want to avoid upsetting them." },
  { style: "COMPETE", text: "I push hard to make sure my point of view wins out." },
  { style: "COMPETE", text: "I see disagreements as something to win, not just resolve." },
  { style: "COMPETE", text: "I stand firm on my position even when others push back." },
  { style: "COMPROMISE", text: "I look for a middle ground where both sides give something up." },
  { style: "COMPROMISE", text: "I aim for a quick, fair split rather than a perfect solution." },
  { style: "COMPROMISE", text: "I'm willing to trade one point for another to reach an agreement fast." },
  { style: "COLLABORATE", text: "I try to fully understand the other person's needs before proposing a solution." },
  { style: "COLLABORATE", text: "I look for a solution that addresses everyone's underlying concerns, not just a quick fix." },
  { style: "COLLABORATE", text: "I ask questions to get to the root of a disagreement rather than just the surface issue." },
];

const STYLE_INFO: Record<Style, { name: string; icon: string; description: string }> = {
  AVOID: {
    name: "Avoiding",
    icon: "🚪",
    description:
      "You tend to sidestep conflict, preferring to let issues cool down or resolve on their own. This can protect the relationship short-term, but unaddressed issues can build up over time.",
  },
  ACCOMMODATE: {
    name: "Accommodating",
    icon: "🤝",
    description:
      "You tend to prioritize the relationship and the other person's needs over your own position. This builds goodwill, but watch for your own needs going consistently unmet.",
  },
  COMPETE: {
    name: "Competing",
    icon: "⚔️",
    description:
      "You tend to advocate firmly for your position and aim to win the disagreement. This works well when quick, decisive action is needed, but can strain relationships if overused.",
  },
  COMPROMISE: {
    name: "Compromising",
    icon: "⚖️",
    description:
      "You tend to look for a fair middle ground where both sides give a little. This is efficient and practical, though it doesn't always fully satisfy either side.",
  },
  COLLABORATE: {
    name: "Collaborating",
    icon: "🧩",
    description:
      "You tend to dig into the underlying needs on both sides to find a solution that truly works for everyone. This takes more time and effort but often produces the most durable resolution.",
  },
};

export function ConflictStyleTest() {
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
    const styles: Style[] = ["AVOID", "ACCOMMODATE", "COMPETE", "COMPROMISE", "COLLABORATE"];
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
            typeSubtitle="Primary Conflict Style"
            description={info.description}
            breakdown={scores.map((s) => ({
              key: s.style,
              label: STYLE_INFO[s.style].name,
              value: Math.round(s.pct),
            }))}
          />
          <Callout icon="💬" title="No single style is 'best'" tone="primary">
            This screener is inspired by the widely used idea that conflict styles fall along two dimensions —
            how much you assert your own needs, and how much you cooperate with the other person&apos;s. It is not the
            Thomas-Kilmann Instrument or any validated clinical tool. The most effective communicators tend to
            flex their style depending on the situation, rather than relying on just one.
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
            Answer 15 short statements about how you typically behave during disagreements to discover your primary
            conflict-resolution style.
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
