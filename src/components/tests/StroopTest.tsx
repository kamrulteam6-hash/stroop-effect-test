"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { Countdown } from "@/components/tests/shared/Countdown";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { SoundToggle } from "@/components/tests/shared/SoundToggle";
import { useSound } from "@/lib/useSound";

const COLORS = [
  { name: "RED", value: "#e0374b" },
  { name: "GREEN", value: "#16a672" },
  { name: "BLUE", value: "#3b6ef0" },
  { name: "YELLOW", value: "#f5c518" },
  { name: "PURPLE", value: "#a25be0" },
];

type Rounds = 10 | 20 | 30;
type Mode = "classic" | "fifty-fifty" | "reverse";
type Phase = "idle" | "countdown" | "running" | "result";

interface Prompt {
  word: string;
  ink: (typeof COLORS)[number];
}

function randomPrompt(incongruentRate: number): Prompt {
  const word = COLORS[Math.floor(Math.random() * COLORS.length)].name;
  let ink = COLORS[Math.floor(Math.random() * COLORS.length)];
  if (Math.random() < incongruentRate) {
    const others = COLORS.filter((c) => c.name !== word);
    ink = others[Math.floor(Math.random() * others.length)];
  } else {
    ink = COLORS.find((c) => c.name === word)!;
  }
  return { word, ink };
}

const MODE_LABEL: Record<Mode, string> = {
  classic: "Classic",
  "fifty-fifty": "Fifty-Fifty",
  reverse: "Reverse",
};

export function StroopTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [rounds, setRounds] = useState<Rounds>(20);
  const [mode, setMode] = useState<Mode>("classic");
  const [round, setRound] = useState(0);
  const [prompt, setPrompt] = useState<Prompt>(() => randomPrompt(0.75));
  const [correct, setCorrect] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const [congruentTimes, setCongruentTimes] = useState<number[]>([]);
  const [incongruentTimes, setIncongruentTimes] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const promptStart = useRef(0);
  const sound = useSound();

  const incongruentRate = mode === "fifty-fifty" ? 0.5 : 0.75;

  const beginRound = () => {
    setRound(0);
    setCorrect(0);
    setTimes([]);
    setCongruentTimes([]);
    setIncongruentTimes([]);
    setPrompt(randomPrompt(incongruentRate));
    promptStart.current = performance.now();
    setPhase("running");
  };

  const answer = useCallback(
    (colorName: string) => {
      if (phase !== "running") return;
      const elapsed = performance.now() - promptStart.current;
      const target = mode === "reverse" ? prompt.word : prompt.ink.name;
      const isCorrect = colorName === target;
      const isCongruent = prompt.word === prompt.ink.name;
      setFeedback(isCorrect ? "correct" : "wrong");
      sound.play(isCorrect ? "tick" : "error");
      setTimes((t) => [...t, elapsed]);
      setCongruentTimes((t) => (isCongruent ? [...t, elapsed] : t));
      setIncongruentTimes((t) => (!isCongruent ? [...t, elapsed] : t));
      if (isCorrect) setCorrect((c) => c + 1);

      window.setTimeout(() => {
        setFeedback(null);
        setRound((r) => {
          const next = r + 1;
          if (next >= rounds) {
            sound.play("success");
            setPhase("result");
          } else {
            setPrompt(randomPrompt(incongruentRate));
            promptStart.current = performance.now();
          }
          return next;
        });
      }, 180);
    },
    [phase, prompt, mode, rounds, incongruentRate, sound]
  );

  useEffect(() => {
    if (phase !== "running") return;
    function onKey(e: KeyboardEvent) {
      const idx = ["1", "2", "3", "4", "5"].indexOf(e.key);
      if (idx !== -1 && COLORS[idx]) answer(COLORS[idx].name);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, answer]);

  const avgTime = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const accuracy = round ? Math.round((correct / round) * 100) : 0;
  const avgCongruent = congruentTimes.length
    ? Math.round(congruentTimes.reduce((a, b) => a + b, 0) / congruentTimes.length)
    : 0;
  const avgIncongruent = incongruentTimes.length
    ? Math.round(incongruentTimes.reduce((a, b) => a + b, 0) / incongruentTimes.length)
    : 0;
  const interference = avgCongruent && avgIncongruent ? avgIncongruent - avgCongruent : 0;

  return (
    <TestFrame>
      <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />

      {phase === "idle" && (
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            {mode === "reverse"
              ? "Click the button matching the word itself — ignore the ink color."
              : "Click the button matching the ink color of each word — not the word itself."}
          </p>
          <OptionsBar>
            <Segmented
              label="Rounds"
              value={rounds}
              onChange={setRounds}
              options={[
                { value: 10, label: "10" },
                { value: 20, label: "20" },
                { value: 30, label: "30" },
              ]}
            />
            <Segmented
              label="Mode"
              value={mode}
              onChange={setMode}
              options={[
                { value: "classic", label: "Classic" },
                { value: "fifty-fifty", label: "Fifty-Fifty" },
                { value: "reverse", label: "Reverse" },
              ]}
            />
          </OptionsBar>
          <Button size="lg" onClick={() => setPhase("countdown")}>
            Start Test
          </Button>
        </div>
      )}

      {phase === "countdown" && <Countdown onDone={beginRound} />}

      {phase === "running" && (
        <div className="flex w-full flex-col items-center gap-8">
          <div className="flex w-full items-center justify-between text-xs font-medium text-muted-2">
            <span>
              Round {Math.min(round + 1, rounds)} / {rounds}
            </span>
            <span>Score: {correct}</span>
          </div>

          <div
            className={`select-none text-6xl font-black tracking-tight transition-transform sm:text-7xl ${
              feedback === "correct" ? "scale-105" : feedback === "wrong" ? "animate-pop-in" : ""
            }`}
            style={{ color: prompt.ink.value }}
          >
            {prompt.word}
          </div>

          <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-5">
            {COLORS.map((c) => (
              <button
                key={c.name}
                onClick={() => answer(c.name)}
                className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-xs font-bold text-foreground transition-transform hover:scale-105 active:scale-95"
                style={{ boxShadow: `inset 0 -3px 0 ${c.value}` }}
              >
                {c.name}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-muted-2">
            {mode === "reverse" ? "Reverse mode: match the word, not the ink" : "Tip: keys 1–5 also work"}
          </p>
        </div>
      )}

      {phase === "result" && (
        <ResultScreen
          slug="stroop-effect-test"
          direction="lower"
          value={avgTime}
          unitLabel="ms avg"
          extraStats={[
            { label: "Accuracy", value: `${accuracy}%` },
            { label: "Correct", value: `${correct}/${rounds}` },
            { label: "Mode", value: MODE_LABEL[mode] },
            { label: "Congruent RT", value: avgCongruent ? `${avgCongruent}ms` : "—" },
            { label: "Incongruent RT", value: avgIncongruent ? `${avgIncongruent}ms` : "—" },
            { label: "Interference", value: interference ? `+${interference}ms` : "—" },
          ]}
          shareLabel={`I averaged ${avgTime}ms with ${accuracy}% accuracy on the Stroop Effect Test!`}
          onRetry={beginRound}
          onChangeOptions={() => setPhase("idle")}
        />
      )}
    </TestFrame>
  );
}
