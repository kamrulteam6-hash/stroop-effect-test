"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ProgressRing } from "@/components/tests/shared/ProgressRing";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { useSound } from "@/lib/useSound";
import { SoundToggle } from "@/components/tests/shared/SoundToggle";

type Duration = 30 | 60 | 120;
type Ops = "add" | "sub" | "mult" | "mixed";
type Phase = "idle" | "running" | "result";

interface Problem {
  text: string;
  answer: number;
}

const OP_SYMBOLS: Record<Exclude<Ops, "mixed">, string> = { add: "+", sub: "-", mult: "×" };

function makeProblem(ops: Ops): Problem {
  const pool: (keyof typeof OP_SYMBOLS)[] = ops === "mixed" ? ["add", "sub", "mult"] : [ops];
  const chosen = pool[Math.floor(Math.random() * pool.length)];
  const symbol = OP_SYMBOLS[chosen];
  let a = Math.floor(Math.random() * 20) + 1;
  let b = Math.floor(Math.random() * 20) + 1;
  if (chosen === "mult") {
    a = Math.floor(Math.random() * 12) + 1;
    b = Math.floor(Math.random() * 12) + 1;
  }
  if (chosen === "sub" && b > a) [a, b] = [b, a];
  const answer = chosen === "add" ? a + b : chosen === "sub" ? a - b : a * b;
  return { text: `${a} ${symbol} ${b}`, answer };
}

export function MentalMathTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [duration, setDuration] = useState<Duration>(60);
  const [ops, setOps] = useState<Ops>("mixed");
  const [problem, setProblem] = useState<Problem>(() => makeProblem("mixed"));
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const intervalRef = useRef<number | undefined>(undefined);
  const sound = useSound();

  useEffect(() => () => window.clearInterval(intervalRef.current), []);

  const start = () => {
    setCorrect(0);
    setWrong(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setInput("");
    setProblem(makeProblem(ops));
    setPhase("running");
    setTimeLeft(duration);
    const startedAt = performance.now();
    intervalRef.current = window.setInterval(() => {
      const remaining = duration - (performance.now() - startedAt) / 1000;
      if (remaining <= 0) {
        window.clearInterval(intervalRef.current);
        setTimeLeft(0);
        sound.play("success");
        setPhase("result");
      } else {
        setTimeLeft(Math.ceil(remaining));
      }
    }, 100);
  };

  const submit = () => {
    if (input === "") return;
    if (Number(input) === problem.answer) {
      setCorrect((c) => c + 1);
      sound.play("tick");
      setStreak((s) => {
        const next = s + 1;
        setBestStreak((b) => Math.max(b, next));
        setScore((sc) => sc + 1 + Math.floor(next / 5));
        return next;
      });
    } else {
      setWrong((w) => w + 1);
      setStreak(0);
      sound.play("error");
    }
    setInput("");
    setProblem(makeProblem(ops));
  };

  const progress = 1 - timeLeft / duration;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="mental-math-test"
          direction="higher"
          value={score}
          unitLabel="points"
          extraStats={[
            { label: "Correct", value: `${correct}` },
            { label: "Wrong", value: `${wrong}` },
            { label: "Best Streak", value: `${bestStreak}` },
          ]}
          shareLabel={`I scored ${score} points on the Mental Math Speed Test!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Solve as many arithmetic problems as you can. Chain correct answers for a streak bonus.
          </p>
          <OptionsBar>
            <Segmented
              label="Duration"
              value={duration}
              onChange={setDuration}
              options={[
                { value: 30, label: "30s" },
                { value: 60, label: "60s" },
                { value: 120, label: "120s" },
              ]}
            />
            <Segmented
              label="Operations"
              value={ops}
              onChange={setOps}
              options={[
                { value: "add", label: "+" },
                { value: "sub", label: "−" },
                { value: "mult", label: "×" },
                { value: "mixed", label: "Mixed" },
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
      <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
      <div className="flex w-full max-w-xs flex-col items-center gap-6">
        <div className="flex w-full items-center justify-between text-xs font-medium text-muted-2">
          <span>
            Score: {score} {streak >= 3 && <span className="text-gold">🔥 {streak}</span>}
          </span>
          <ProgressRing progress={progress} size={40} label={`${timeLeft}`} />
        </div>
        <p className="text-5xl font-black text-foreground">{problem.text}</p>
        <input
          autoFocus
          inputMode="numeric"
          value={input}
          onChange={(e) => setInput(e.target.value.replace(/[^-\d]/g, ""))}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-center text-2xl font-bold text-foreground outline-none focus:border-primary"
          placeholder="?"
        />
        <Button className="w-full" onClick={submit} disabled={!input}>
          Submit
        </Button>
      </div>
    </TestFrame>
  );
}
