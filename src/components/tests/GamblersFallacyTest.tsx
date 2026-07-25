"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "round" | "result";
type Side = "H" | "T";
type Answer = "same" | "flip" | "equal";

const ROUNDS = 4;

interface Round {
  streak: Side[];
}

function generateRound(): Round {
  const side: Side = Math.random() < 0.5 ? "H" : "T";
  const length = 4 + Math.floor(Math.random() * 4);
  return { streak: Array.from({ length }, () => side) };
}

function Coin({ side, size = "h-12 w-12 text-lg" }: { side: Side; size?: string }) {
  return (
    <span
      className={`flex ${size} items-center justify-center rounded-full border-2 border-gold bg-gradient-to-br from-gold/40 to-gold/10 font-black text-gold shadow-sm`}
    >
      {side}
    </span>
  );
}

export function GamblersFallacyTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const start = () => {
    setRounds(Array.from({ length: ROUNDS }, generateRound));
    setAnswers([]);
    setIndex(0);
    setPhase("round");
  };

  const choose = (answer: Answer) => {
    const next = [...answers, answer];
    setAnswers(next);
    if (index + 1 >= ROUNDS) {
      setPhase("result");
    } else {
      setIndex(index + 1);
    }
  };

  const correctCount = answers.filter((a) => a === "equal").length;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="gamblers-fallacy-test"
          direction="higher"
          value={correctCount}
          unitLabel={`out of ${ROUNDS} correctly called 50/50`}
          shareLabel={`I correctly recognized ${correctCount}/${ROUNDS} coin flips as truly 50/50 on the Gambler's Fallacy Test!`}
          onRetry={start}
        >
          <div className="flex w-full max-w-sm flex-col gap-2">
            {rounds.map((r, i) => {
              const wasCorrect = answers[i] === "equal";
              const answerLabel =
                answers[i] === "equal" ? "50/50" : answers[i] === "same" ? "streak continues" : "due for a change";
              return (
                <div
                  key={i}
                  className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2 ${
                    wasCorrect ? "border-success/30 bg-success/10" : "border-danger/30 bg-danger/10"
                  }`}
                >
                  <span className="flex items-center gap-1 text-xs font-semibold text-foreground">
                    <Coin side={r.streak[0]} size="h-6 w-6 text-[10px]" />
                    {r.streak.length}× in a row
                  </span>
                  <span className="text-[11px] text-muted-2">You said: {answerLabel}</span>
                  <span>{wasCorrect ? "✅" : "❌"}</span>
                </div>
              );
            })}
          </div>
          <p className="max-w-xs text-[11px] text-muted-2">
            A fair coin has no memory — no matter how long a streak runs, the next flip is always exactly 50/50.
          </p>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">🪙</span>
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll see 4 coin-flip streaks. After each one, guess what you think is most likely for the next
            flip.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const round = rounds[index];
  const side = round.streak[0];
  const sideLabel = side === "H" ? "Heads" : "Tails";
  const oppositeLabel = side === "H" ? "Tails" : "Heads";

  return (
    <TestFrame>
      <div className="flex w-full max-w-md flex-col items-center gap-8 text-center">
        <p className="text-xs font-medium text-muted-2">
          Round {index + 1} / {ROUNDS}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {round.streak.map((s, i) => (
            <Coin key={i} side={s} />
          ))}
        </div>
        <p className="text-lg font-semibold text-foreground">
          That&apos;s {round.streak.length} {sideLabel} in a row. What&apos;s the next flip most likely to be?
        </p>
        <div className="flex w-full flex-col gap-3">
          <button
            onClick={() => choose("same")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            🔥 {sideLabel} again — it&apos;s on a streak
          </button>
          <button
            onClick={() => choose("flip")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            🔄 {oppositeLabel} — it&apos;s due for a change
          </button>
          <button
            onClick={() => choose("equal")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            ⚖️ Equally likely — 50/50 either way
          </button>
        </div>
      </div>
    </TestFrame>
  );
}
