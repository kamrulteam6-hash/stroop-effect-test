"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "instructions" | "running" | "result";

const WORDS = [
  "APPLE", "RIVER", "CHAIR", "TIGER", "PLANET", "CANDLE", "GARDEN", "PENCIL",
  "BRIDGE", "MOUNTAIN", "OCEAN", "MIRROR", "FOREST", "BUTTON", "WINDOW", "ISLAND",
  "SILVER", "COTTON", "MARBLE", "WHISTLE", "RABBIT", "VELVET", "GOLDEN", "SHADOW",
];
const TARGET_WORD = "MOUNTAIN";
const TOTAL_TRIALS = 24;
const TARGET_POSITIONS = [7, 15, 21];

function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildSequence(): string[] {
  const fillers = shuffled(WORDS.filter((w) => w !== TARGET_WORD));
  const sequence: string[] = [];
  let fillerIdx = 0;
  for (let i = 0; i < TOTAL_TRIALS; i++) {
    if (TARGET_POSITIONS.includes(i)) {
      sequence.push(TARGET_WORD);
    } else {
      sequence.push(fillers[fillerIdx % fillers.length]);
      fillerIdx++;
    }
  }
  return sequence;
}

export function ProspectiveMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [sequence, setSequence] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [vowelCount, setVowelCount] = useState(0);
  const [targetHits, setTargetHits] = useState(0);
  const [targetMisses, setTargetMisses] = useState(0);
  const [respondedThisTrial, setRespondedThisTrial] = useState(false);

  const start = () => setPhase("instructions");

  const begin = () => {
    setSequence(buildSequence());
    setIndex(0);
    setVowelCount(0);
    setTargetHits(0);
    setTargetMisses(0);
    setRespondedThisTrial(false);
    setPhase("running");
  };

  const advance = () => {
    const word = sequence[index];
    if (word === TARGET_WORD && !respondedThisTrial) {
      setTargetMisses((m) => m + 1);
    }
    const next = index + 1;
    setRespondedThisTrial(false);
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setIndex(next);
  };

  const answerVowel = (hasMultipleVowels: boolean) => {
    const word = sequence[index];
    const vowels = (word.match(/[AEIOU]/g) || []).length;
    if (hasMultipleVowels === vowels >= 2) setVowelCount((c) => c + 1);
    advance();
  };

  const clickTarget = () => {
    if (respondedThisTrial) return;
    setRespondedThisTrial(true);
    setTargetHits((h) => h + 1);
  };

  const accuracy = TARGET_POSITIONS.length ? Math.round((targetHits / TARGET_POSITIONS.length) * 100) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="prospective-memory-test"
          direction="higher"
          value={accuracy}
          unitLabel="% target reminders remembered"
          headline="Prospective Memory Result"
          extraStats={[
            { label: "Reminders Caught", value: `${targetHits}/${TARGET_POSITIONS.length}` },
            { label: "Reminders Missed", value: `${targetMisses}` },
            { label: "Background Task Accuracy", value: `${Math.round((vowelCount / TOTAL_TRIALS) * 100)}%` },
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
            This test measures prospective memory — remembering to perform a delayed intention while doing something
            else. You&apos;ll do an ongoing word task, but must remember a special rule about one particular word.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "instructions") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm text-muted">Your main task: for each word, say whether it has 2+ vowels.</p>
          <p className="max-w-sm rounded-xl bg-accent/10 px-4 py-3 text-sm font-bold text-accent">
            Special rule: whenever you see the word &quot;{TARGET_WORD}&quot;, click the &quot;Remembered!&quot;
            button instead — don&apos;t forget this while focusing on the main task!
          </p>
          <Button size="lg" onClick={begin}>
            Begin
          </Button>
        </div>
      </TestFrame>
    );
  }

  const word = sequence[index];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Word {index + 1} / {TOTAL_TRIALS}
        </p>
        <p className="text-4xl font-black text-foreground">{word}</p>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => answerVowel(true)}>
            2+ Vowels
          </Button>
          <Button variant="secondary" onClick={() => answerVowel(false)}>
            0-1 Vowels
          </Button>
        </div>
        <Button variant="accent" onClick={clickTarget} disabled={respondedThisTrial}>
          Remembered!
        </Button>
      </div>
    </TestFrame>
  );
}
