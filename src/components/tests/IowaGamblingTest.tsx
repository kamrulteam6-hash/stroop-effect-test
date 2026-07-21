"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "playing" | "result";
type Deck = "A" | "B" | "C" | "D";

const TOTAL_DRAWS = 40;

function drawDeck(deck: Deck): number {
  if (deck === "A") return 100 - (Math.random() < 0.5 ? 150 + Math.random() * 200 : 0);
  if (deck === "B") return 100 - (Math.random() < 0.1 ? 1250 : 0);
  if (deck === "C") return 50 - (Math.random() < 0.5 ? 25 + Math.random() * 50 : 0);
  return 50 - (Math.random() < 0.1 ? 250 : 0);
}

export function IowaGamblingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [money, setMoney] = useState(0);
  const [drawsLeft, setDrawsLeft] = useState(TOTAL_DRAWS);
  const [deckCounts, setDeckCounts] = useState<Record<Deck, number>>({ A: 0, B: 0, C: 0, D: 0 });
  const [lastResult, setLastResult] = useState<{ deck: Deck; net: number } | null>(null);
  const [firstHalfGood, setFirstHalfGood] = useState(0);
  const [secondHalfGood, setSecondHalfGood] = useState(0);
  const [drawsSoFar, setDrawsSoFar] = useState(0);

  const start = () => {
    setMoney(0);
    setDrawsLeft(TOTAL_DRAWS);
    setDeckCounts({ A: 0, B: 0, C: 0, D: 0 });
    setLastResult(null);
    setFirstHalfGood(0);
    setSecondHalfGood(0);
    setDrawsSoFar(0);
    setPhase("playing");
  };

  const draw = (deck: Deck) => {
    if (phase !== "playing" || drawsLeft <= 0) return;
    const net = Math.round(drawDeck(deck));
    setMoney((m) => m + net);
    setDeckCounts((prev) => ({ ...prev, [deck]: prev[deck] + 1 }));
    setLastResult({ deck, net });

    const isGoodDeck = deck === "C" || deck === "D";
    const drawNum = drawsSoFar + 1;
    setDrawsSoFar(drawNum);
    if (drawNum <= TOTAL_DRAWS / 2) {
      if (isGoodDeck) setFirstHalfGood((g) => g + 1);
    } else {
      if (isGoodDeck) setSecondHalfGood((g) => g + 1);
    }

    const next = drawsLeft - 1;
    setDrawsLeft(next);
    if (next <= 0) {
      setPhase("result");
    }
  };

  const goodDeckDraws = deckCounts.C + deckCounts.D;
  const badDeckDraws = deckCounts.A + deckCounts.B;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="iowa-gambling-task"
          direction="higher"
          value={money}
          formatValue={(v) => `$${Math.round(v).toLocaleString()}`}
          unitLabel="final balance"
          extraStats={[
            { label: "Safe Decks (C+D)", value: `${goodDeckDraws}` },
            { label: "Risky Decks (A+B)", value: `${badDeckDraws}` },
            { label: "Safe Deck Shift", value: `${firstHalfGood} → ${secondHalfGood}` },
          ]}
          shareLabel={`I finished with $${money.toLocaleString()} on the Iowa Gambling Task!`}
          onRetry={start}
        >
          <p className="max-w-xs text-[11px] text-muted-2">
            Decks A and B pay out more per card but lose money overall. Decks C and D pay less per card but actually
            come out ahead over many draws.
          </p>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Draw {TOTAL_DRAWS} cards total from 4 decks, one at a time. Each card pays out money, but some decks
            hide bigger penalties than others. Try to end up with as much money as possible.
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
        <div className="flex w-full max-w-sm items-center justify-between text-xs font-semibold text-muted-2">
          <span>
            Balance: <span className={money < 0 ? "text-danger" : "text-foreground"}>${money.toLocaleString()}</span>
          </span>
          <span>Draws left: {drawsLeft}</span>
        </div>

        {lastResult && (
          <p className={`text-sm font-semibold ${lastResult.net < 0 ? "text-danger" : "text-success"}`}>
            Deck {lastResult.deck}: {lastResult.net >= 0 ? "+" : ""}
            {lastResult.net.toLocaleString()}
          </p>
        )}

        <div className="grid grid-cols-4 gap-3">
          {(["A", "B", "C", "D"] as Deck[]).map((deck) => (
            <button
              key={deck}
              onClick={() => draw(deck)}
              className="flex h-24 w-16 flex-col items-center justify-center gap-1 rounded-xl border-2 border-primary bg-primary/10 text-2xl font-black text-primary transition-transform hover:scale-105 sm:h-28 sm:w-20"
            >
              {deck}
              <span className="text-[10px] font-medium text-muted-2">{deckCounts[deck]} drawn</span>
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
