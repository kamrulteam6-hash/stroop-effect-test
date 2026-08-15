"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "trial-result" | "result";

const LETTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ".split("");
const DIGITS = ["2", "3", "4", "5", "6", "7", "8", "9"];
const STREAM_LENGTH = 16;
const ITEM_MS = 120;
const TOTAL_TRIALS = 8;

function randomLetter(): string {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}

function randomLag(): number {
  return Math.random() < 0.5 ? 2 : 7;
}

interface StreamItem {
  char: string;
  isTarget1: boolean;
  isTarget2: boolean;
}

function buildStream(lag: number): { items: StreamItem[]; target2: string } {
  const t1Pos = 4;
  const t2Pos = t1Pos + lag;
  const target2 = randomLetter();
  const items: StreamItem[] = [];
  for (let i = 0; i < STREAM_LENGTH; i++) {
    if (i === t1Pos) {
      items.push({ char: DIGITS[Math.floor(Math.random() * DIGITS.length)], isTarget1: true, isTarget2: false });
    } else if (i === t2Pos) {
      items.push({ char: target2, isTarget1: false, isTarget2: true });
    } else {
      items.push({ char: randomLetter(), isTarget1: false, isTarget2: false });
    }
  }
  return { items, target2 };
}

export function AttentionalBlinkTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [displayChar, setDisplayChar] = useState("");
  const [lag, setLag] = useState(2);
  const [target2, setTarget2] = useState("");
  const [correctShort, setCorrectShort] = useState(0);
  const [totalShort, setTotalShort] = useState(0);
  const [correctLong, setCorrectLong] = useState(0);
  const [totalLong, setTotalLong] = useState(0);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);

  const runTrial = () => {
    const trialLag = randomLag();
    const { items, target2: t2 } = buildStream(trialLag);
    setLag(trialLag);
    setTarget2(t2);
    setPhase("running");

    items.forEach((item, i) => {
      window.setTimeout(() => {
        setDisplayChar(item.char);
      }, i * ITEM_MS);
    });

    window.setTimeout(() => {
      setPhase("trial-result");
    }, items.length * ITEM_MS);
  };

  const start = () => {
    setTrialIndex(0);
    setCorrectShort(0);
    setTotalShort(0);
    setCorrectLong(0);
    setTotalLong(0);
    setLastCorrect(null);
    runTrial();
  };

  const answer = (letter: string) => {
    const isCorrect = letter === target2;
    setLastCorrect(isCorrect);
    if (lag === 2) {
      setTotalShort((t) => t + 1);
      if (isCorrect) setCorrectShort((c) => c + 1);
    } else {
      setTotalLong((t) => t + 1);
      if (isCorrect) setCorrectLong((c) => c + 1);
    }

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    runTrial();
  };

  const shortAcc = totalShort ? Math.round((correctShort / totalShort) * 100) : 0;
  const longAcc = totalLong ? Math.round((correctLong / totalLong) * 100) : 0;
  const blinkEffect = longAcc - shortAcc;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="attentional-blink-test"
          direction="lower"
          value={Math.max(0, blinkEffect)}
          unitLabel="% attentional blink effect"
          headline="Attentional Blink Result"
          extraStats={[
            { label: "Short Lag Accuracy", value: `${shortAcc}%` },
            { label: "Long Lag Accuracy", value: `${longAcc}%` },
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
          <p className="max-w-sm text-sm text-muted">
            Watch a rapid stream of letters with one digit (Target 1) hidden inside. After the stream, identify the
            one letter (Target 2) that appeared shortly after the digit. A brief digit will flash then letters —
            find the odd letter shown right after it.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "running") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">
            Trial {trialIndex + 1} / {TOTAL_TRIALS}
          </p>
          <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-surface-2 text-6xl font-black text-foreground">
            {displayChar}
          </div>
        </div>
      </TestFrame>
    );
  }

  // trial-result
  const options = [target2, randomLetter(), randomLetter(), randomLetter()].filter((v, i, arr) => arr.indexOf(v) === i);
  while (options.length < 4) options.push(randomLetter());

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-sm text-muted">Which letter appeared right after the digit?</p>
        {lastCorrect !== null && (
          <p className={`text-sm font-bold ${lastCorrect ? "text-success" : "text-danger"}`}>
            {lastCorrect ? "Correct!" : "Wrong"}
          </p>
        )}
        <div className="grid grid-cols-4 gap-3">
          {options.map((letter) => (
            <button
              key={letter}
              onClick={() => answer(letter)}
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface-2 text-lg font-bold text-foreground transition-colors hover:border-primary/40"
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
