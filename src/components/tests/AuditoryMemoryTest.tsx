"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "ready" | "playing" | "recall" | "result";
const WORDS = ["anchor", "velvet", "cabin", "orchard", "signal", "marble", "cinder", "hollow"];

function pickWords(): string[] {
  return [...WORDS].sort(() => Math.random() - 0.5);
}

export function AuditoryMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [list, setList] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [recalled, setRecalled] = useState<string[]>([]);
  const [supported] = useState(() => typeof window !== "undefined" && "speechSynthesis" in window);

  const start = () => {
    setList(pickWords());
    setInput("");
    setRecalled([]);
    setPhase("ready");
  };

  const playList = (words: string[]) => {
    if (!supported) {
      setPhase("recall");
      return;
    }
    setPhase("playing");
    const utterance = new SpeechSynthesisUtterance(words.join(", "));
    utterance.rate = 0.85;
    utterance.onend = () => setPhase("recall");
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
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
    return (
      <TestFrame>
        <ResultScreen
          slug="auditory-memory-test"
          direction="higher"
          value={correctWords.length}
          unitLabel={`of ${list.length} words recalled`}
          extraStats={[{ label: "Accuracy", value: `${Math.round((correctWords.length / list.length) * 100)}%` }]}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">👂</span>
          <p className="max-w-sm text-sm text-muted">
            Listen to a spoken list of {WORDS.length} words read by your browser, once, with no text shown. Then
            type as many as you remember.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "ready") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm text-muted">
            {supported
              ? "Turn your sound on. Press play when ready — the list plays once."
              : "Your browser doesn't support text-to-speech, so the list will be shown as text instead."}
          </p>
          <Button size="lg" onClick={() => playList(list)}>
            {supported ? "▶ Play Word List" : "Continue"}
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "playing") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-4xl">🔊</span>
          <p className="text-sm text-muted">Listening…</p>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        {!supported && (
          <div className="max-w-sm rounded-xl border border-border bg-surface-2 p-4 text-center text-sm text-muted">
            {list.join(", ")}
          </div>
        )}
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
