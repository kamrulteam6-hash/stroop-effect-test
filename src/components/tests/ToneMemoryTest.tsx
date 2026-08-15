"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "playing" | "recall" | "result";

const NOTE_FREQS = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25];
const START_LENGTH = 3;

function randomNoteIndex(): number {
  return Math.floor(Math.random() * NOTE_FREQS.length);
}

export function ToneMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [sequence, setSequence] = useState<number[]>([]);
  const [userInput, setUserInput] = useState<number[]>([]);
  const [level, setLevel] = useState(START_LENGTH);
  const [lives, setLives] = useState(3);
  const [bestSpan, setBestSpan] = useState(0);
  const [activeNote, setActiveNote] = useState(-1);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playNote = (index: number, duration = 400) => {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!audioCtxRef.current) audioCtxRef.current = new AudioCtx();
    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = NOTE_FREQS[index];
    osc.type = "sine";
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration / 1000);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration / 1000);
  };

  const playSequence = (seq: number[]) => {
    setUserInput([]);
    setPhase("playing");
    seq.forEach((note, i) => {
      window.setTimeout(() => {
        setActiveNote(note);
        playNote(note);
      }, i * 600);
      window.setTimeout(() => setActiveNote(-1), i * 600 + 400);
    });
    window.setTimeout(() => setPhase("recall"), seq.length * 600);
  };

  const start = () => {
    setLevel(START_LENGTH);
    setLives(3);
    setBestSpan(0);
    const seq = Array.from({ length: START_LENGTH }, () => randomNoteIndex());
    setSequence(seq);
    playSequence(seq);
  };

  const clickNote = (index: number) => {
    if (phase !== "recall") return;
    playNote(index, 250);
    const next = [...userInput, index];
    setUserInput(next);

    const position = next.length - 1;
    if (sequence[position] !== index) {
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) {
        setPhase("result");
        return;
      }
      const seq = Array.from({ length: level }, () => randomNoteIndex());
      setSequence(seq);
      window.setTimeout(() => playSequence(seq), 800);
      return;
    }

    if (next.length === sequence.length) {
      setBestSpan((b) => Math.max(b, level));
      const nextLevel = level + 1;
      setLevel(nextLevel);
      const seq = Array.from({ length: nextLevel }, () => randomNoteIndex());
      setSequence(seq);
      window.setTimeout(() => playSequence(seq), 800);
    }
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="tone-memory-test"
          direction="higher"
          value={bestSpan}
          unitLabel="longest tone sequence recalled"
          headline="Tone Memory Result"
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
            Listen to a sequence of musical tones, then play them back in the same order by clicking the matching
            keys. Each success adds one more note. You have 3 lives.
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
        <p className="text-xs font-medium text-muted-2">
          Span {level} &middot; Lives {lives} {phase === "recall" ? "— Play it back" : "— Listen"}
        </p>
        <div className="flex gap-2">
          {NOTE_FREQS.map((_, i) => (
            <button
              key={i}
              onClick={() => clickNote(i)}
              disabled={phase !== "recall"}
              className={`h-16 w-10 rounded-md border transition-colors ${
                activeNote === i ? "border-primary bg-primary" : "border-border bg-surface-2 hover:border-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
