"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const WORDS = ["LISTEN", "GARDEN", "PLANET", "STREAM", "CANDLE", "MARBLE", "WINTER", "PENCIL"];
const TOTAL_ROUNDS = 6;

function now(): number {
  return performance.now();
}

function shuffleWord(word: string): string {
  const letters = word.split("");
  let shuffled = letters.join("");
  do {
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    shuffled = letters.join("");
  } while (shuffled === word);
  return shuffled;
}

function pickWord(): string {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export function AnagramTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [round, setRound] = useState(0);
  const [answer, setAnswer] = useState("");
  const [scrambled, setScrambled] = useState("");
  const [input, setInput] = useState("");
  const [rts, setRts] = useState<number[]>([]);
  const [trialStart, setTrialStart] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const runRound = () => {
    const word = pickWord();
    setAnswer(word);
    setScrambled(shuffleWord(word));
    setInput("");
    setFeedback(null);
    setTrialStart(now());
  };

  const start = () => {
    setRound(0);
    setRts([]);
    runRound();
    setPhase("running");
  };

  const submit = () => {
    if (feedback) return;
    const isCorrect = input.trim().toUpperCase() === answer;
    if (isCorrect) {
      const rt = now() - trialStart;
      setRts((r) => [...r, rt]);
    }
    setFeedback(isCorrect ? "correct" : "wrong");

    window.setTimeout(() => {
      const next = round + 1;
      if (next >= TOTAL_ROUNDS) {
        setPhase("result");
        return;
      }
      setRound(next);
      runRound();
    }, 800);
  };

  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="anagram-test"
          direction="higher"
          value={rts.length}
          unitLabel={`solved out of ${TOTAL_ROUNDS}`}
          headline="Anagram Result"
          extraStats={[{ label: "Avg. Solve Time", value: rts.length ? `${avgRt} ms` : "n/a" }]}
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
            Unscramble the letters to form a real word, as fast as you can, across {TOTAL_ROUNDS} rounds.
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
          Round {round + 1} / {TOTAL_ROUNDS}
        </p>
        <p className="text-4xl font-black tracking-widest text-foreground">{scrambled}</p>
        {feedback && (
          <p className={`text-sm font-bold ${feedback === "correct" ? "text-success" : "text-danger"}`}>
            {feedback === "correct" ? "Correct!" : `Wrong — it was ${answer}`}
          </p>
        )}
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            disabled={!!feedback}
            autoFocus
            className="w-48 rounded-lg border border-border bg-surface-2 px-4 py-2 text-center text-base uppercase text-foreground outline-none focus:border-primary/40 disabled:opacity-60"
          />
          <Button onClick={submit} disabled={!!feedback || input.trim() === ""}>
            Submit
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
