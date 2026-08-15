"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const DURATION_S = 60;
const LETTERS = ["S", "F", "A", "T", "C", "P"];

function randomLetter(): string {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}

export function WordFluencyTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [letter, setLetter] = useState("S");
  const [words, setWords] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(DURATION_S);
  const [invalidCount, setInvalidCount] = useState(0);

  useEffect(() => {
    if (phase !== "running") return;
    const timer = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(timer);
          setPhase("result");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const start = () => {
    setLetter(randomLetter());
    setWords([]);
    setInput("");
    setTimeLeft(DURATION_S);
    setInvalidCount(0);
    setPhase("running");
  };

  const submitWord = () => {
    const word = input.trim();
    if (!word) return;
    const normalized = word.toLowerCase();
    const alreadyUsed = words.some((w) => w.toLowerCase() === normalized);
    const startsRight = normalized.startsWith(letter.toLowerCase());
    if (alreadyUsed || !startsRight) {
      setInvalidCount((c) => c + 1);
      setInput("");
      return;
    }
    setWords((w) => [...w, word]);
    setInput("");
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="word-fluency-test"
          direction="higher"
          value={words.length}
          unitLabel={`valid words starting with "${letter}"`}
          headline="Word Fluency Result"
          extraStats={[{ label: "Invalid Attempts", value: `${invalidCount}` }]}
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
            You&apos;ll get a random letter and {DURATION_S} seconds. Type as many different words as you can that
            start with that letter — no repeats, no proper nouns.
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
        <p className="text-xs font-medium text-muted-2">Time left: {timeLeft}s</p>
        <p className="text-sm text-muted">
          Words starting with <span className="text-2xl font-black text-primary">{letter}</span>
        </p>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitWord()}
            autoFocus
            className="w-48 rounded-lg border border-border bg-surface-2 px-4 py-2 text-center text-base text-foreground outline-none focus:border-primary/40"
          />
          <Button onClick={submitWord}>Add</Button>
        </div>
        <p className="text-sm font-bold text-foreground">{words.length} words</p>
        <div className="flex max-w-sm flex-wrap justify-center gap-2">
          {words.map((w, i) => (
            <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {w}
            </span>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
