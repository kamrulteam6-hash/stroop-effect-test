"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";
type Rule = "color" | "shape" | "count";
type ColorName = "red" | "green" | "blue" | "gold";
type ShapeName = "circle" | "triangle" | "square" | "star";

interface Card {
  color: ColorName;
  shape: ShapeName;
  count: number;
}

const COLORS: ColorName[] = ["red", "green", "blue", "gold"];
const SHAPES: ShapeName[] = ["circle", "triangle", "square", "star"];
const RULES: Rule[] = ["color", "shape", "count"];

const KEY_CARDS: Card[] = [
  { color: "red", shape: "circle", count: 1 },
  { color: "green", shape: "triangle", count: 2 },
  { color: "blue", shape: "square", count: 3 },
  { color: "gold", shape: "star", count: 4 },
];

const TOTAL_TRIALS = 30;
const SWITCH_AFTER_CORRECT = 6;

function randomCard(): Card {
  return {
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    count: 1 + Math.floor(Math.random() * 4),
  };
}

const SHAPE_GLYPH: Record<ShapeName, string> = {
  circle: "●",
  triangle: "▲",
  square: "■",
  star: "★",
};

const COLOR_HEX: Record<ColorName, string> = {
  red: "#ef4444",
  green: "#22c55e",
  blue: "#3b82f6",
  gold: "#eab308",
};

function CardFace({ card, size = 32 }: { card: Card; size?: number }) {
  return (
    <div className="flex gap-0.5" style={{ color: COLOR_HEX[card.color], fontSize: size }}>
      {Array.from({ length: card.count }).map((_, i) => (
        <span key={i}>{SHAPE_GLYPH[card.shape]}</span>
      ))}
    </div>
  );
}

function matches(a: Card, b: Card, rule: Rule): boolean {
  if (rule === "color") return a.color === b.color;
  if (rule === "shape") return a.shape === b.shape;
  return a.count === b.count;
}

export function WisconsinCardSortTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [rule, setRule] = useState<Rule>("color");
  const [trialIndex, setTrialIndex] = useState(0);
  const [current, setCurrent] = useState<Card>(() => randomCard());
  const [correctStreak, setCorrectStreak] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [perseverativeErrors, setPerseverativeErrors] = useState(0);
  const [lastRule, setLastRule] = useState<Rule>("color");
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const start = () => {
    const first = RULES[Math.floor(Math.random() * RULES.length)];
    setRule(first);
    setLastRule(first);
    setTrialIndex(0);
    setCurrent(randomCard());
    setCorrectStreak(0);
    setTotalCorrect(0);
    setPerseverativeErrors(0);
    setFeedback(null);
    setPhase("running");
  };

  const choose = (keyIndex: number) => {
    if (phase !== "running" || feedback) return;
    const keyCard = KEY_CARDS[keyIndex];
    const isCorrect = matches(current, keyCard, rule);

    if (isCorrect) {
      setTotalCorrect((c) => c + 1);
      setFeedback("correct");
    } else {
      if (matches(current, keyCard, lastRule)) {
        setPerseverativeErrors((e) => e + 1);
      }
      setFeedback("wrong");
    }

    window.setTimeout(() => {
      const newStreak = isCorrect ? correctStreak + 1 : 0;
      let nextRule = rule;
      if (newStreak >= SWITCH_AFTER_CORRECT) {
        const others = RULES.filter((r) => r !== rule);
        nextRule = others[Math.floor(Math.random() * others.length)];
        setLastRule(rule);
        setCorrectStreak(0);
      } else {
        setCorrectStreak(newStreak);
      }
      setRule(nextRule);

      const next = trialIndex + 1;
      if (next >= TOTAL_TRIALS) {
        setPhase("result");
        return;
      }
      setTrialIndex(next);
      setCurrent(randomCard());
      setFeedback(null);
    }, 500);
  };

  const accuracy = Math.round((totalCorrect / TOTAL_TRIALS) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="wisconsin-card-sorting-test"
          direction="higher"
          value={accuracy}
          unitLabel="% correct sorts"
          headline="Card Sorting Result"
          extraStats={[
            { label: "Correct", value: `${totalCorrect}/${TOTAL_TRIALS}` },
            { label: "Perseverative Errors", value: `${perseverativeErrors}` },
          ]}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Match each card to one of the four key cards below by color, shape, or count. Nobody tells you the
            rule — figure it out from whether you&apos;re told <strong>correct</strong> or <strong>wrong</strong>.
            The rule will secretly change partway through, so stay flexible.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <div className="flex h-16 items-center justify-center">
          <CardFace card={current} size={36} />
        </div>
        {feedback && (
          <p className={`text-sm font-bold ${feedback === "correct" ? "text-success" : "text-danger"}`}>
            {feedback === "correct" ? "Correct!" : "Wrong"}
          </p>
        )}
        <div className="grid grid-cols-4 gap-3">
          {KEY_CARDS.map((kc, i) => (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={!!feedback}
              className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-surface-2 transition-colors hover:border-primary/40 disabled:opacity-60"
            >
              <CardFace card={kc} size={16} />
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
