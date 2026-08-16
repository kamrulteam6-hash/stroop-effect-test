"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "stream" | "recall" | "result";
const SLOTS = ["A", "B", "C"] as const;
const STREAM_LENGTH = 18;
const ITEM_MS = 1100;

interface StreamItem {
  slot: (typeof SLOTS)[number];
  value: number;
}

function buildStream(): StreamItem[] {
  return Array.from({ length: STREAM_LENGTH }, () => ({
    slot: SLOTS[Math.floor(Math.random() * SLOTS.length)],
    value: 1 + Math.floor(Math.random() * 9),
  }));
}

export function WorkingMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [stream, setStream] = useState<StreamItem[]>([]);
  const [index, setIndex] = useState(0);
  const [recallSlot, setRecallSlot] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const answeredRef = useRef(false);

  useEffect(() => {
    if (phase !== "stream" || index >= stream.length) return;
    const id = setTimeout(() => {
      const next = index + 1;
      if (next >= stream.length) {
        setPhase("recall");
      } else {
        setIndex(next);
      }
    }, ITEM_MS);
    return () => clearTimeout(id);
  }, [phase, index, stream.length]);

  const start = () => {
    setStream(buildStream());
    setIndex(0);
    setRecallSlot(0);
    setAnswers([]);
    answeredRef.current = false;
    setPhase("stream");
  };

  const lastValueForSlot = (slot: string): number => {
    for (let i = stream.length - 1; i >= 0; i--) {
      if (stream[i].slot === slot) return stream[i].value;
    }
    return -1;
  };

  const answer = (value: number) => {
    if (answeredRef.current) return;
    answeredRef.current = true;
    const nextAnswers = [...answers, value];
    setAnswers(nextAnswers);
    if (recallSlot + 1 >= SLOTS.length) {
      setPhase("result");
    } else {
      setRecallSlot(recallSlot + 1);
      answeredRef.current = false;
    }
  };

  if (phase === "result") {
    const correct = answers.filter((v, i) => v === lastValueForSlot(SLOTS[i])).length;
    return (
      <TestFrame>
        <ResultScreen
          slug="working-memory-test"
          direction="higher"
          value={correct}
          unitLabel={`of ${SLOTS.length} slots correct`}
          extraStats={SLOTS.map((s, i) => ({
            label: `Slot ${s}`,
            value: answers[i] === lastValueForSlot(s) ? "✓ Correct" : `✗ (was ${lastValueForSlot(s)})`,
          }))}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">🔄</span>
          <p className="max-w-sm text-sm text-muted">
            A stream of numbers will flash by, each labeled A, B, or C. Don&apos;t try to remember all of them —
            just keep updating your memory of the <strong>most recent</strong> number shown in each of the three
            slots. At the end, you&apos;ll be asked for the last value in each slot.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "stream") {
    const current = stream[Math.min(index, stream.length - 1)];
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">
            Item {Math.min(index + 1, stream.length)} / {stream.length}
          </p>
          <div className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl border border-border bg-surface-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-2">Slot {current.slot}</span>
            <span className="text-5xl font-black text-primary">{current.value}</span>
          </div>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-sm text-muted">
          What was the <strong>last</strong> number shown in Slot {SLOTS[recallSlot]}?
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <button
              key={n}
              onClick={() => answer(n)}
              className="h-14 w-14 rounded-xl border border-border bg-surface-2 text-lg font-bold text-foreground hover:border-primary"
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
