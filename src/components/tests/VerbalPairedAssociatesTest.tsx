"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "studying" | "testing" | "result";

const WORD_PAIRS: [string, string][] = [
  ["Ocean", "Whistle"],
  ["Ladder", "Feather"],
  ["Pepper", "Journey"],
  ["Marble", "Sunset"],
  ["Rocket", "Cushion"],
  ["Violin", "Thunder"],
  ["Basket", "Compass"],
  ["Blanket", "Tunnel"],
];

function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalize(s: string): string {
  return s.trim().toLowerCase();
}

export function VerbalPairedAssociatesTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [pairs, setPairs] = useState<[string, string][]>([]);
  const [studyIndex, setStudyIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const start = () => {
    const newPairs = shuffled(WORD_PAIRS);
    setPairs(newPairs);
    setStudyIndex(0);
    setTestIndex(0);
    setInput("");
    setCorrect(0);
    setFeedback(null);
    setPhase("studying");
  };

  const nextStudy = () => {
    const next = studyIndex + 1;
    if (next >= pairs.length) {
      setPairs((p) => shuffled(p));
      setTestIndex(0);
      setPhase("testing");
      return;
    }
    setStudyIndex(next);
  };

  const submit = () => {
    if (feedback) return;
    const pair = pairs[testIndex];
    const isCorrect = normalize(input) === normalize(pair[1]);
    if (isCorrect) setCorrect((c) => c + 1);
    setFeedback(isCorrect ? "correct" : "wrong");

    window.setTimeout(() => {
      setFeedback(null);
      setInput("");
      const next = testIndex + 1;
      if (next >= pairs.length) {
        setPhase("result");
        return;
      }
      setTestIndex(next);
    }, 900);
  };

  const accuracy = pairs.length ? Math.round((correct / pairs.length) * 100) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="verbal-paired-associates-test"
          direction="higher"
          value={accuracy}
          unitLabel="% recalled correctly"
          headline="Verbal Paired Associates Result"
          extraStats={[{ label: "Correct", value: `${correct}/${pairs.length}` }]}
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
            Study {WORD_PAIRS.length} unrelated word pairs. Afterward, you&apos;ll see the first word and must type
            the exact word it was paired with, testing free recall rather than recognition.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "studying") {
    const [a, b] = pairs[studyIndex];
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">
            Studying {studyIndex + 1} / {pairs.length}
          </p>
          <div className="flex items-center gap-4 text-2xl font-bold text-foreground">
            <span className="rounded-lg bg-primary/10 px-4 py-3 text-primary">{a}</span>
            <span className="text-muted-2">&rarr;</span>
            <span className="rounded-lg bg-accent/10 px-4 py-3 text-accent">{b}</span>
          </div>
          <Button size="lg" onClick={nextStudy}>
            Next
          </Button>
        </div>
      </TestFrame>
    );
  }

  const [a, b] = pairs[testIndex];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {testIndex + 1} / {pairs.length}
        </p>
        <p className="text-sm text-muted">Type the word paired with:</p>
        <p className="text-3xl font-bold text-primary">{a}</p>
        {feedback && (
          <p className={`text-sm font-bold ${feedback === "correct" ? "text-success" : "text-danger"}`}>
            {feedback === "correct" ? "Correct!" : `Wrong — it was ${b}`}
          </p>
        )}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          disabled={!!feedback}
          autoFocus
          className="w-48 rounded-lg border border-border bg-surface-2 px-4 py-2 text-center text-base text-foreground outline-none focus:border-primary/40 disabled:opacity-60"
        />
        <Button onClick={submit} disabled={!!feedback || input.trim() === ""}>
          Submit
        </Button>
      </div>
    </TestFrame>
  );
}
