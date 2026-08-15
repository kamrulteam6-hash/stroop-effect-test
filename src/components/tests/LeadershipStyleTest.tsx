"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { TypeResult } from "@/components/tests/shared/TypeResult";
import { Callout } from "@/components/seo/Callout";

type Style = "DIRECTIVE" | "DEMOCRATIC" | "COACHING" | "VISIONARY" | "SUPPORTIVE";
type Phase = "idle" | "quiz" | "result";

interface Question {
  style: Style;
  text: string;
}

const QUESTIONS: Question[] = [
  { style: "DIRECTIVE", text: "I prefer to give clear, specific instructions rather than leave things open-ended." },
  { style: "DIRECTIVE", text: "I make decisions quickly and expect the team to follow through." },
  { style: "DIRECTIVE", text: "I focus on efficiency and hitting deadlines above all else." },
  { style: "DEMOCRATIC", text: "I gather input from the team before making a decision." },
  { style: "DEMOCRATIC", text: "I believe the best ideas often come from open discussion, not one person." },
  { style: "DEMOCRATIC", text: "I try to build consensus rather than dictate a direction." },
  { style: "COACHING", text: "I focus on developing each team member's individual strengths." },
  { style: "COACHING", text: "I ask questions to help people find their own solutions, rather than giving answers." },
  { style: "COACHING", text: "I invest time in mentoring, even when it slows things down short-term." },
  { style: "VISIONARY", text: "I focus on painting a compelling picture of where we're headed." },
  { style: "VISIONARY", text: "I inspire people with the bigger purpose behind the work." },
  { style: "VISIONARY", text: "I'm more interested in the long-term direction than day-to-day details." },
  { style: "SUPPORTIVE", text: "I prioritize team morale and wellbeing alongside results." },
  { style: "SUPPORTIVE", text: "I check in on how people are doing, not just what they're doing." },
  { style: "SUPPORTIVE", text: "I try to remove obstacles so my team can do their best work." },
];

const STYLE_INFO: Record<Style, { name: string; icon: string; description: string }> = {
  DIRECTIVE: {
    name: "Directive",
    icon: "🎯",
    description:
      "You tend to lead with clear instructions and quick decisions. This works well in high-pressure or urgent situations, though it can limit input from the team if overused.",
  },
  DEMOCRATIC: {
    name: "Democratic",
    icon: "🗳️",
    description:
      "You tend to involve the team in decisions and build consensus. This increases buy-in and surfaces good ideas, though it can slow decisions when speed matters most.",
  },
  COACHING: {
    name: "Coaching",
    icon: "🌱",
    description:
      "You tend to focus on developing people's individual strengths over time. This builds a stronger long-term team, though it requires patience and consistent investment.",
  },
  VISIONARY: {
    name: "Visionary",
    icon: "🧭",
    description:
      "You tend to lead by painting a compelling picture of the future and rallying people around purpose. This is highly motivating, though it benefits from pairing with strong execution support.",
  },
  SUPPORTIVE: {
    name: "Supportive",
    icon: "🤲",
    description:
      "You tend to prioritize your team's wellbeing and remove obstacles in their way. This builds trust and loyalty, though it's worth balancing with clear accountability.",
  },
};

export function LeadershipStyleTest() {
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
    const styles: Style[] = ["DIRECTIVE", "DEMOCRATIC", "COACHING", "VISIONARY", "SUPPORTIVE"];
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
            typeSubtitle="Primary Leadership Style"
            description={info.description}
            breakdown={scores.map((s) => ({
              key: s.style,
              label: STYLE_INFO[s.style].name,
              value: Math.round(s.pct),
            }))}
          />
          <Callout icon="💼" title="Effective leaders flex" tone="primary">
            This screener is inspired by widely discussed leadership-style frameworks. It is not a validated
            clinical or organizational psychology instrument. The most effective leaders typically adapt their
            style to the situation and the person in front of them, rather than relying on a single approach.
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
            Answer 15 short statements about how you typically lead or would like to lead a team to discover your
            primary leadership style.
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
