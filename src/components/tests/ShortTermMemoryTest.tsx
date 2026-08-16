"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "study" | "recall" | "result";
const WORDS = ["river", "candle", "pencil", "mountain", "guitar", "window", "orange", "bicycle", "pillow", "lantern"];
const STUDY_S = 12;

function pickWords(): string[] {
  const shuffled = [...WORDS].sort(() => Math.random() - 0.5);
  return shuffled;
}

export function ShortTermMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [list, setList] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(STUDY_S);
  const [input, setInput] = useState("");
  const [recalled, setRecalled] = useState<string[]>([]);

  useEffect(() => {
    if (phase !== "study") return;
    const timer = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(timer);
          setPhase("recall");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const start = () => {
    setList(pickWords());
    setTimeLeft(STUDY_S);
    setInput("");
    setRecalled([]);
    setPhase("study");
  };

  const submitWord = () => {
    const word = input.trim().toLowerCase();
    if (!word) return;
    if (!recalled.includes(word)) setRecalled((r) => [...r, word]);
    setInput("");
  };

  const finish = () => setPhase("result");

  if (phase === "result") {
    const correctWords = recalled.filter((w) => list.includes(w));
    const intrusions = recalled.length - correctWords.length;
    return (
      <TestFrame>
        <ResultScreen
          slug="short-term-memory-test"
          direction="higher"
          value={correctWords.length}
          unitLabel={`of ${list.length} words recalled`}
          extraStats={[
            { label: "Intrusions", value: `${intrusions}` },
            { label: "Accuracy", value: `${Math.round((correctWords.length / list.length) * 100)}%` },
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
          <span className="text-4xl">📝</span>
          <p className="max-w-sm text-sm text-muted">
            Study a list of {WORDS.length} unrelated words for {STUDY_S} seconds. Then, without any hints, type as
            many as you can remember, in any order.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "study") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">Study — {timeLeft}s</p>
          <div className="flex max-w-sm flex-wrap justify-center gap-2">
            {list.map((w) => (
              <span key={w} className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {w}
              </span>
            ))}
          </div>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-sm text-muted">Type each word you remember, then press Enter or Add.</p>
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
        <p className="text-sm font-bold text-foreground">{recalled.length} entered</p>
        <div className="flex max-w-sm flex-wrap justify-center gap-2">
          {recalled.map((w, i) => (
            <span key={i} className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-foreground">
              {w}
            </span>
          ))}
        </div>
        <Button variant="secondary" onClick={finish}>
          I&apos;m Done
        </Button>
      </div>
    </TestFrame>
  );
}
