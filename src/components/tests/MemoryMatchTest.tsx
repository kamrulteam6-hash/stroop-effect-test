"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Difficulty = "easy" | "hard";
type Phase = "idle" | "playing" | "result";

const SYMBOLS = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🥝", "🍍", "🥥", "🍑", "🍊", "🍋", "🥑", "🍆", "🌽", "🥕"];

interface Card {
  id: number;
  symbol: string;
  matched: boolean;
}

function buildDeck(pairs: number): Card[] {
  const symbols = SYMBOLS.slice(0, pairs);
  const deck = [...symbols, ...symbols].map((symbol, id) => ({ id, symbol, matched: false }));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function MemoryMatchTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [checking, setChecking] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const pairs = difficulty === "easy" ? 6 : 8;

  const start = () => {
    setCards(buildDeck(pairs));
    setFlipped([]);
    setMoves(0);
    setChecking(false);
    setPhase("playing");
  };

  const flipCard = (index: number) => {
    if (checking || flipped.includes(index) || cards[index].matched) return;

    const next = [...flipped, index];
    setFlipped(next);

    if (next.length === 2) {
      setChecking(true);
      setMoves((m) => m + 1);
      const [a, b] = next;
      const isMatch = cards[a].symbol === cards[b].symbol;

      timeoutRef.current = window.setTimeout(() => {
        if (isMatch) {
          setCards((prev) => {
            const updated = prev.map((c, i) => (i === a || i === b ? { ...c, matched: true } : c));
            if (updated.every((c) => c.matched)) {
              setPhase("result");
            }
            return updated;
          });
        }
        setFlipped([]);
        setChecking(false);
      }, isMatch ? 400 : 800);
    }
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="memory-match-game"
          direction="lower"
          value={moves}
          unitLabel="moves"
          extraStats={[{ label: "Pairs", value: `${pairs}` }]}
          shareLabel={`I found all ${pairs} pairs in ${moves} moves on the Memory Match Game!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Flip two cards at a time to find matching pairs. Try to clear the whole board in as few moves as
            possible.
          </p>
          <OptionsBar>
            <Segmented
              label="Difficulty"
              value={difficulty}
              onChange={setDifficulty}
              options={[
                { value: "easy", label: "Easy (12)" },
                { value: "hard", label: "Hard (16)" },
              ]}
            />
          </OptionsBar>
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
        <p className="text-xs font-medium text-muted-2">Moves: {moves}</p>
        <div className="grid grid-cols-4 gap-2">
          {cards.map((card, i) => {
            const isFaceUp = flipped.includes(i) || card.matched;
            return (
              <button
                key={card.id}
                onClick={() => flipCard(i)}
                disabled={isFaceUp}
                className={`flex h-14 w-14 items-center justify-center rounded-xl border text-2xl transition-colors sm:h-16 sm:w-16 sm:text-3xl ${
                  isFaceUp
                    ? card.matched
                      ? "border-success bg-success/10"
                      : "border-primary bg-primary/10"
                    : "border-border bg-surface-2 hover:border-primary"
                }`}
              >
                {isFaceUp ? card.symbol : ""}
              </button>
            );
          })}
        </div>
      </div>
    </TestFrame>
  );
}
