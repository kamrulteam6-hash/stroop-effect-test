"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

const PASSAGES: Record<string, string[]> = {
  quotes: [
    "The quickest way to build a new habit is to make it obvious, attractive, easy, and satisfying from the very first day.",
    "A calm mind brings inner strength and self confidence, so it is very important for good health and lasting happiness.",
    "Every great achievement was once considered impossible until someone with enough patience and persistence proved otherwise.",
  ],
  tech: [
    "Science is not only a discipline of reason but also one of romance and passion, driven by curiosity about the unknown.",
    "A well designed interface gets out of the way and lets people focus on the task instead of fighting the software.",
    "Good code is written for the next developer to read, not just for the computer to execute a moment later.",
  ],
  literature: [
    "It was the best of times, it was the worst of times, an age of wisdom that somehow coexisted with an age of foolishness.",
    "The old house stood quietly at the end of the lane, holding decades of stories inside its creaking wooden walls.",
    "She looked out across the fields at dusk, wondering how a single ordinary afternoon could feel so impossibly vast.",
  ],
};

const WORD_BANK =
  "time person year way day thing man world life hand part child eye woman place work week case point government company number group problem fact system program question during without light place small large right different"
    .split(" ");

function randomPassage(category: string) {
  const pool = PASSAGES[category];
  return pool[Math.floor(Math.random() * pool.length)];
}

function generateSprintText(wordCount: number) {
  const words: string[] = [];
  for (let i = 0; i < wordCount; i++) words.push(WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)]);
  return words.join(" ");
}

type Category = "quotes" | "tech" | "literature";
type DurationMode = "passage" | "sprint";
type Phase = "idle" | "running" | "result";

const SPRINT_SECONDS = 60;

export function TypingSpeedTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [category, setCategory] = useState<Category>("quotes");
  const [durationMode, setDurationMode] = useState<DurationMode>("passage");
  const [target, setTarget] = useState("");
  const [input, setInput] = useState("");
  const [wpm, setWpm] = useState(0);
  const [rawWpm, setRawWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [timeLeft, setTimeLeft] = useState(SPRINT_SECONDS);
  const [wpmSamples, setWpmSamples] = useState<number[]>([]);
  const startTime = useRef(0);
  const sampleInterval = useRef<number | undefined>(undefined);
  const inputRef = useRef("");

  useEffect(() => () => window.clearInterval(sampleInterval.current), []);

  const start = () => {
    setTarget(durationMode === "sprint" ? generateSprintText(220) : randomPassage(category));
    setInput("");
    inputRef.current = "";
    setWpmSamples([]);
    setTimeLeft(SPRINT_SECONDS);
    startTime.current = 0;
    setPhase("running");
  };

  const computeStats = (typed: string, targetText: string, elapsedMs: number) => {
    const elapsedMinutes = Math.max(elapsedMs / 60000, 1 / 60);
    let correctChars = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === targetText[i]) correctChars++;
    }
    const computedWpm = Math.round(correctChars / 5 / elapsedMinutes);
    const computedRawWpm = Math.round(typed.length / 5 / elapsedMinutes);
    const computedAccuracy = typed.length ? Math.round((correctChars / typed.length) * 100) : 100;
    return { computedWpm, computedRawWpm, computedAccuracy };
  };

  const finish = (typed: string) => {
    window.clearInterval(sampleInterval.current);
    const elapsedMs = startTime.current ? performance.now() - startTime.current : 1;
    const { computedWpm, computedRawWpm, computedAccuracy } = computeStats(typed, target, elapsedMs);
    setWpm(computedWpm);
    setRawWpm(computedRawWpm);
    setAccuracy(computedAccuracy);
    setPhase("result");
  };

  const beginSampling = () => {
    sampleInterval.current = window.setInterval(() => {
      const elapsedMs = performance.now() - startTime.current;
      if (durationMode === "sprint") {
        const remaining = Math.max(0, SPRINT_SECONDS - Math.floor(elapsedMs / 1000));
        setTimeLeft(remaining);
        if (remaining <= 0) {
          finish(inputRef.current);
          return;
        }
      }
      const { computedWpm } = computeStats(inputRef.current, target, elapsedMs);
      setWpmSamples((s) => [...s, computedWpm].slice(-30));
    }, 1000);
  };

  const onChange = (value: string) => {
    if (startTime.current === 0) {
      startTime.current = performance.now();
      beginSampling();
    }
    inputRef.current = value;
    if (durationMode === "passage") {
      if (value.length > target.length) return;
      setInput(value);
      if (value.length === target.length) finish(value);
    } else {
      setInput(value);
    }
  };

  const wpmGraphPoints =
    wpmSamples.length > 1
      ? wpmSamples
          .map((v, i) => {
            const max = Math.max(...wpmSamples, 1);
            const x = (i / (wpmSamples.length - 1)) * 160;
            const y = 36 - (v / max) * 36;
            return `${x},${y}`;
          })
          .join(" ")
      : "";

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="typing-speed-test"
          direction="higher"
          value={wpm}
          unitLabel="WPM"
          extraStats={[
            { label: "Raw WPM", value: `${rawWpm}` },
            { label: "Accuracy", value: `${accuracy}%` },
            { label: "Mode", value: durationMode === "sprint" ? "60s Sprint" : "Passage" },
          ]}
          shareLabel={`I typed ${wpm} WPM with ${accuracy}% accuracy on the Stroop Effect Test site!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        >
          {wpmSamples.length > 1 && (
            <div className="flex flex-col items-center gap-1">
              <span className="text-[11px] uppercase tracking-wide text-muted-2">WPM over time</span>
              <svg viewBox="0 0 160 36" className="h-9 w-40">
                <polyline points={wpmGraphPoints} fill="none" stroke="var(--color-primary)" strokeWidth="2" />
              </svg>
            </div>
          )}
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            {durationMode === "sprint"
              ? "Type continuously for 60 seconds — go for as many words as you can."
              : "Type the passage shown as fast and accurately as you can."}
          </p>
          <OptionsBar>
            <Segmented
              label="Mode"
              value={durationMode}
              onChange={setDurationMode}
              options={[
                { value: "passage", label: "Passage" },
                { value: "sprint", label: "60s Sprint" },
              ]}
            />
            {durationMode === "passage" && (
              <Segmented
                label="Category"
                value={category}
                onChange={setCategory}
                options={[
                  { value: "quotes", label: "Quotes" },
                  { value: "tech", label: "Tech" },
                  { value: "literature", label: "Literature" },
                ]}
              />
            )}
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
      <div className="flex w-full max-w-xl flex-col items-center gap-5">
        {durationMode === "sprint" && (
          <p className="text-xs font-semibold text-muted-2">{timeLeft}s left</p>
        )}
        <p className="max-h-32 overflow-y-auto rounded-xl border border-border bg-surface-2 p-4 text-left font-mono text-sm leading-relaxed">
          {target.split("").map((char, i) => {
            let cls = "text-muted-2";
            if (i < input.length) cls = char === input[i] ? "text-success" : "text-danger bg-danger/10";
            else if (i === input.length) cls = "text-foreground underline";
            return (
              <span key={i} className={cls}>
                {char}
              </span>
            );
          })}
        </p>
        <textarea
          autoFocus
          value={input}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full rounded-xl border border-border bg-surface-2 p-3 font-mono text-sm text-foreground outline-none focus:border-primary"
          placeholder="Start typing here…"
        />
      </div>
    </TestFrame>
  );
}
