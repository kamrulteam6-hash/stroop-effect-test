"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

interface CardFace {
  label: string;
  mustFlip: boolean;
}

interface Round {
  rule: string;
  cards: CardFace[];
}

const ROUNDS: Round[] = [
  {
    rule: "If a card shows a vowel on one side, it has an even number on the other side.",
    cards: [
      { label: "A", mustFlip: true },
      { label: "K", mustFlip: false },
      { label: "4", mustFlip: false },
      { label: "7", mustFlip: true },
    ],
  },
  {
    rule: "If a person is drinking beer, they must be over 18.",
    cards: [
      { label: "Beer", mustFlip: true },
      { label: "Soda", mustFlip: false },
      { label: "Age 25", mustFlip: false },
      { label: "Age 16", mustFlip: true },
    ],
  },
  {
    rule: "If a card has a red side, it has a triangle on the other side.",
    cards: [
      { label: "Red", mustFlip: true },
      { label: "Blue", mustFlip: false },
      { label: "Triangle", mustFlip: false },
      { label: "Circle", mustFlip: true },
    ],
  },
];

export function WasonSelectionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [perfectRounds, setPerfectRounds] = useState(0);

  const start = () => {
    setIndex(0);
    setSelected([]);
    setPerfectRounds(0);
    setPhase("running");
  };

  const toggle = (label: string) => {
    setSelected((prev) => (prev.includes(label) ? prev.filter((v) => v !== label) : [...prev, label]));
  };

  const submit = () => {
    const round = ROUNDS[index];
    const correctSet = round.cards.filter((c) => c.mustFlip).map((c) => c.label);
    const isPerfect =
      correctSet.length === selected.length && correctSet.every((label) => selected.includes(label));
    if (isPerfect) setPerfectRounds((p) => p + 1);

    const next = index + 1;
    setSelected([]);
    if (next >= ROUNDS.length) {
      setPhase("result");
      return;
    }
    setIndex(next);
  };

  const accuracy = Math.round((perfectRounds / ROUNDS.length) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="wason-selection-task"
          direction="higher"
          value={accuracy}
          unitLabel="% rounds solved perfectly"
          headline="Wason Selection Result"
          extraStats={[{ label: "Perfect Rounds", value: `${perfectRounds}/${ROUNDS.length}` }]}
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
            For each rule, select exactly the cards you must flip to check whether the rule is being violated. The
            Wason Selection Task reveals how well you apply formal logical reasoning versus everyday intuition.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const round = ROUNDS[index];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {index + 1} / {ROUNDS.length}
        </p>
        <p className="max-w-sm text-center text-sm font-semibold text-foreground">{round.rule}</p>
        <p className="text-xs text-muted-2">Select the cards you must flip to test this rule:</p>
        <div className="grid grid-cols-4 gap-3">
          {round.cards.map((card) => (
            <button
              key={card.label}
              onClick={() => toggle(card.label)}
              className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 text-sm font-bold transition-colors ${
                selected.includes(card.label)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-surface-2 text-foreground hover:border-primary/40"
              }`}
            >
              {card.label}
            </button>
          ))}
        </div>
        <Button size="lg" onClick={submit} disabled={selected.length === 0}>
          Submit Selection
        </Button>
      </div>
    </TestFrame>
  );
}
