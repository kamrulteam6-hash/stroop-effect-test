"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "intro" | "running" | "result";

interface Card {
  id: number;
  numbers: string;
  confirms: boolean;
}

const RULE = "each number is larger than the one before it";

function makeCards(): Card[] {
  const cards: Card[] = [
    { id: 1, numbers: "2, 4, 6", confirms: true },
    { id: 2, numbers: "10, 12, 14", confirms: true },
    { id: 3, numbers: "1, 2, 3", confirms: true },
    { id: 4, numbers: "8, 4, 2", confirms: false },
    { id: 5, numbers: "3, 3, 3", confirms: false },
    { id: 6, numbers: "5, 15, 45", confirms: true },
    { id: 7, numbers: "20, 10, 5", confirms: false },
    { id: 8, numbers: "1, 3, 2", confirms: false },
  ];
  return cards;
}

export function ConfirmationBiasTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [cards, setCards] = useState<Card[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  const start = () => {
    setCards(makeCards());
    setSelected([]);
    setPhase("intro");
  };

  const begin = () => setPhase("running");

  const toggleCard = (id: number) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  };

  const submit = () => setPhase("result");

  const chosenConfirming = selected.filter((id) => cards.find((c) => c.id === id)?.confirms).length;
  const chosenDisconfirming = selected.length - chosenConfirming;
  const confirmationScore = selected.length ? Math.round((chosenConfirming / selected.length) * 100) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="confirmation-bias-test"
          direction="lower"
          value={confirmationScore}
          unitLabel="% confirming choices"
          headline="Confirmation Bias Result"
          extraStats={[
            { label: "Confirming Cards Chosen", value: `${chosenConfirming}` },
            { label: "Disconfirming Cards Chosen", value: `${chosenDisconfirming}` },
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
            You&apos;ll be given a hidden rule about number sequences. Choose which example sequences to test the
            rule against — a lower score means you sought out evidence that could disprove your hypothesis, not just
            confirm it.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "intro") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm text-muted">The hidden rule is:</p>
          <p className="max-w-sm rounded-xl bg-primary/10 px-4 py-3 text-base font-bold text-primary">{RULE}</p>
          <p className="max-w-sm text-sm text-muted">
            Below, you&apos;ll see several number sequences. Select every sequence you&apos;d like to check to test
            whether this rule is correct, then submit.
          </p>
          <Button size="lg" onClick={begin}>
            Continue
          </Button>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-sm text-muted">Select sequences to test the rule:</p>
        <div className="grid grid-cols-2 gap-3">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => toggleCard(card.id)}
              className={`rounded-xl border-2 px-5 py-4 text-base font-bold transition-colors ${
                selected.includes(card.id)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-surface-2 text-foreground hover:border-primary/40"
              }`}
            >
              {card.numbers}
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
