"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { TypeResult } from "@/components/tests/shared/TypeResult";
import { Callout } from "@/components/seo/Callout";

type Axis = "ANX" | "AVD";
type Phase = "idle" | "quiz" | "result";

interface Question {
  axis: Axis;
  text: string;
  reverse: boolean;
}

const QUESTIONS: Question[] = [
  { axis: "ANX", text: "I worry that people close to me don't care about me as much as I care about them.", reverse: false },
  { axis: "ANX", text: "I need frequent reassurance that I'm loved or valued.", reverse: false },
  { axis: "ANX", text: "I get anxious when a partner or close friend is unavailable or distant.", reverse: false },
  { axis: "ANX", text: "I don't worry much about whether people close to me will leave.", reverse: true },
  { axis: "ANX", text: "I often wonder if I'm 'too much' for the people close to me.", reverse: false },
  { axis: "ANX", text: "I feel secure in my close relationships without needing constant reassurance.", reverse: true },
  { axis: "AVD", text: "I feel uncomfortable getting too close to other people.", reverse: false },
  { axis: "AVD", text: "I prefer not to depend on others, or have others depend on me.", reverse: false },
  { axis: "AVD", text: "I find it hard to fully open up, even to people I trust.", reverse: false },
  { axis: "AVD", text: "I'm comfortable being emotionally close and vulnerable with someone I trust.", reverse: true },
  { axis: "AVD", text: "I tend to pull away when a relationship starts to feel too intense.", reverse: false },
  { axis: "AVD", text: "I readily turn to close others for comfort when I'm struggling.", reverse: true },
];

interface StyleInfo {
  name: string;
  icon: string;
  description: string;
}

const STYLES: Record<string, StyleInfo> = {
  secure: {
    name: "Secure",
    icon: "🌳",
    description:
      "You tend to feel comfortable with both closeness and independence. You generally trust that people close to you care, and you're able to depend on others without excessive worry.",
  },
  anxious: {
    name: "Anxious",
    icon: "🌊",
    description:
      "You tend to crave closeness and reassurance, and you may worry about whether people close to you truly care or might pull away. You're comfortable with intimacy but sensitive to signs of distance.",
  },
  avoidant: {
    name: "Avoidant",
    icon: "🏔️",
    description:
      "You tend to value independence and self-reliance, and closeness or emotional dependence can feel uncomfortable. You don't worry much about abandonment, but you may keep some emotional distance.",
  },
  "fearful-avoidant": {
    name: "Fearful-Avoidant",
    icon: "🌪️",
    description:
      "You tend to want closeness but also feel wary of it — caught between wanting connection and fearing it will hurt. This mix of high anxiety and high avoidance is sometimes called disorganized attachment.",
  },
};

export function AttachmentStyleTest() {
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

  const axisScore = (axis: Axis): number => {
    const scores = QUESTIONS.map((q, i) => ({ q, v: answers[i] })).filter(({ q }) => q.axis === axis);
    const sum = scores.reduce((acc, { q, v }) => acc + (q.reverse ? 6 - v : v), 0);
    const avg = sum / scores.length;
    return ((avg - 1) / 4) * 100;
  };

  if (phase === "result") {
    const anxiety = axisScore("ANX");
    const avoidance = axisScore("AVD");
    const highAnx = anxiety >= 50;
    const highAvd = avoidance >= 50;
    const styleKey = highAnx && highAvd ? "fearful-avoidant" : highAnx ? "anxious" : highAvd ? "avoidant" : "secure";
    const style = STYLES[styleKey];

    return (
      <TestFrame>
        <div className="flex w-full flex-col items-center gap-6">
          <TypeResult
            icon={style.icon}
            typeName={style.name}
            typeSubtitle="Attachment Style"
            description={style.description}
            breakdown={[
              { key: "ANX", label: "Anxiety (fear of abandonment)", value: Math.round(anxiety) },
              { key: "AVD", label: "Avoidance (discomfort with closeness)", value: Math.round(avoidance) },
            ]}
          />
          <Callout icon="💛" title="Not a diagnosis" tone="gold">
            This is an original, informal self-report screener inspired by the widely discussed anxiety and
            avoidance dimensions of adult attachment theory. It is not the ECR or any validated clinical
            instrument. Attachment style can also vary somewhat across different relationships and can change
            over time with secure relationships or therapy.
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
            Answer 12 short statements about how you generally feel and behave in close relationships. Answer based
            on your relationships overall, not just one specific person.
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
