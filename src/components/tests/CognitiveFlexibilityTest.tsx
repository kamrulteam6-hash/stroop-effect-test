"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const DURATION_S = 45;
const OBJECTS = ["brick", "paperclip", "newspaper", "bucket", "shoelace", "umbrella"];

function randomObject(): string {
  return OBJECTS[Math.floor(Math.random() * OBJECTS.length)];
}

export function CognitiveFlexibilityTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [object, setObject] = useState("brick");
  const [uses, setUses] = useState<string[]>([]);
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
    setObject(randomObject());
    setUses([]);
    setInput("");
    setTimeLeft(DURATION_S);
    setInvalidCount(0);
    setPhase("running");
  };

  const submitUse = () => {
    const use = input.trim();
    if (!use || use.length < 3) return;
    const normalized = use.toLowerCase();
    const alreadyUsed = uses.some((u) => u.toLowerCase() === normalized);
    if (alreadyUsed) {
      setInvalidCount((c) => c + 1);
      setInput("");
      return;
    }
    setUses((u) => [...u, use]);
    setInput("");
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="cognitive-flexibility-test"
          direction="higher"
          value={uses.length}
          unitLabel={`unusual uses for a "${object}"`}
          headline="Cognitive Flexibility Result"
          extraStats={[{ label: "Duplicates Skipped", value: `${invalidCount}` }]}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">🔀</span>
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll get a common object and {DURATION_S} seconds. List as many different, creative uses for it
            as you can — the more varied your ideas, the more flexibility you&apos;re showing.
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
          Unusual uses for a <span className="text-2xl font-black text-primary">{object}</span>
        </p>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitUse()}
            autoFocus
            placeholder="e.g. a doorstop"
            className="w-56 rounded-lg border border-border bg-surface-2 px-4 py-2 text-center text-base text-foreground outline-none focus:border-primary/40"
          />
          <Button onClick={submitUse}>Add</Button>
        </div>
        <p className="text-sm font-bold text-foreground">{uses.length} uses</p>
        <div className="flex max-w-sm flex-wrap justify-center gap-2">
          {uses.map((u, i) => (
            <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {u}
            </span>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
