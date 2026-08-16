"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "study" | "distractor" | "recall" | "result";
const WORDS = ["harbor", "trumpet", "blanket", "compass", "thunder", "ribbon", "granite", "meadow", "lantern", "whistle"];
const STUDY_S = 12;
const DISTRACTOR_S = 45;

function pickWords(): string[] {
  return [...WORDS].sort(() => Math.random() - 0.5);
}

function makeMathProblem(): { q: string; answer: number } {
  const a = 10 + Math.floor(Math.random() * 40);
  const b = 2 + Math.floor(Math.random() * 20);
  return { q: `${a} + ${b}`, answer: a + b };
}

export function LongTermMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [list, setList] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(STUDY_S);
  const [distractorLeft, setDistractorLeft] = useState(DISTRACTOR_S);
  const [problem, setProblem] = useState(() => makeMathProblem());
  const [mathAnswer, setMathAnswer] = useState("");
  const [mathSolved, setMathSolved] = useState(0);
  const [input, setInput] = useState("");
  const [recalled, setRecalled] = useState<string[]>([]);

  useEffect(() => {
    if (phase !== "study") return;
    const timer = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(timer);
          setPhase("distractor");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "distractor") return;
    const timer = window.setInterval(() => {
      setDistractorLeft((t) => {
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
    setDistractorLeft(DISTRACTOR_S);
    setProblem(makeMathProblem());
    setMathAnswer("");
    setMathSolved(0);
    setInput("");
    setRecalled([]);
    setPhase("study");
  };

  const submitMath = () => {
    if (Number(mathAnswer) === problem.answer) setMathSolved((s) => s + 1);
    setProblem(makeMathProblem());
    setMathAnswer("");
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
          slug="long-term-memory-test"
          direction="higher"
          value={correctWords.length}
          unitLabel={`of ${list.length} words recalled after delay`}
          extraStats={[
            { label: "Delay Task Solved", value: `${mathSolved}` },
            { label: "Retention", value: `${Math.round((correctWords.length / list.length) * 100)}%` },
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
          <span className="text-4xl">🗄️</span>
          <p className="max-w-sm text-sm text-muted">
            Study a list of {WORDS.length} words, then solve quick math problems for {DISTRACTOR_S} seconds as a
            distraction. Afterward, recall as many original words as you can — this measures memory that survives a
            delay and interference, not just immediate recall.
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

  if (phase === "distractor") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-medium text-muted-2">Distraction Task — {distractorLeft}s left</p>
          <p className="text-sm text-muted">Solve as many as you can. Don&apos;t think about the word list.</p>
          <p className="text-3xl font-bold text-foreground">{problem.q} = ?</p>
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={mathAnswer}
              onChange={(e) => setMathAnswer(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submitMath()}
              autoFocus
              className="w-32 rounded-lg border border-border bg-surface-2 px-4 py-2 text-center text-base text-foreground outline-none focus:border-primary/40"
            />
            <Button onClick={submitMath}>Submit</Button>
          </div>
          <p className="text-xs text-muted-2">Solved: {mathSolved}</p>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-sm text-muted">Now recall the original word list. Type each word you remember.</p>
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
