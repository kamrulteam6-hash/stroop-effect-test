"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { SoundToggle } from "@/components/tests/shared/SoundToggle";
import { useSound } from "@/lib/useSound";

const COLORS = [
  { name: "Red", hex: "#e0374b", freq: 329.63 },
  { name: "Green", hex: "#16a672", freq: 392.0 },
  { name: "Blue", hex: "#3b6ef0", freq: 261.63 },
  { name: "Yellow", hex: "#f5c518", freq: 440.0 },
];

type Speed = "normal" | "fast";
type Phase = "idle" | "showing" | "input" | "result";

export function ColorMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [speed, setSpeed] = useState<Speed>("normal");
  const [level, setLevel] = useState(1);
  const [sequence, setSequence] = useState<number[]>([]);
  const [litIndex, setLitIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sound = useSound();

  const stepDuration = speed === "fast" ? 380 : 650;

  const getCtx = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    return audioCtxRef.current;
  };

  const playColorTone = (index: number) => {
    if (!sound.enabled) return;
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = COLORS[index].freq;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + stepDuration / 1000 - 0.05);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + stepDuration / 1000);
  };

  const start = () => {
    setLevel(1);
    setSequence([Math.floor(Math.random() * COLORS.length)]);
    setProgress(0);
    setLitIndex(null);
    setPhase("showing");
  };

  useEffect(() => {
    if (phase !== "showing") return;
    let i = 0;
    const interval = window.setInterval(() => {
      setLitIndex(sequence[i]);
      playColorTone(sequence[i]);
      window.setTimeout(() => setLitIndex(null), stepDuration - 150);
      i++;
      if (i >= sequence.length) {
        window.clearInterval(interval);
        window.setTimeout(() => {
          setProgress(0);
          setPhase("input");
        }, stepDuration + 150);
      }
    }, stepDuration);
    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, sequence]);

  const tapColor = (index: number) => {
    if (phase !== "input") return;
    playColorTone(index);
    setLitIndex(index);
    window.setTimeout(() => setLitIndex((cur) => (cur === index ? null : cur)), 180);
    if (index === sequence[progress]) {
      const nextProgress = progress + 1;
      if (nextProgress >= sequence.length) {
        const nextLevel = level + 1;
        setLevel(nextLevel);
        setSequence((s) => [...s, Math.floor(Math.random() * COLORS.length)]);
        setLitIndex(null);
        setPhase("showing");
      } else {
        setProgress(nextProgress);
      }
    } else {
      setPhase("result");
    }
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="color-memory-game"
          direction="higher"
          value={level}
          unitLabel="level reached"
          extraStats={[{ label: "Sequence Length", value: `${sequence.length - 1}` }, { label: "Speed", value: speed }]}
          shareLabel={`I reached level ${level} on the Color Memory Game!`}
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
          <span className="text-5xl">🎨</span>
          <p className="max-w-sm text-sm text-muted">
            Watch the growing pattern of colors and tones, then repeat it back by clicking the buttons in the same
            order. Each round adds one more step — how far can you go?
          </p>
          <div className="grid grid-cols-2 gap-2 opacity-60">
            {COLORS.map((c) => (
              <span key={c.name} className="h-8 w-8 rounded-lg" style={{ backgroundColor: c.hex }} />
            ))}
          </div>
          <OptionsBar>
            <Segmented
              label="Speed"
              value={speed}
              onChange={setSpeed}
              options={[
                { value: "normal", label: "Normal" },
                { value: "fast", label: "Fast" },
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
      <div className="flex flex-col items-center gap-5">
        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
          🎯 Level {level}
        </span>
        <p className="text-xs font-medium text-muted-2">
          {phase === "showing" ? "👀 Watch and listen…" : "👉 Repeat the pattern"}
        </p>
        <div className="rounded-3xl border-2 border-border bg-surface-2 p-5 shadow-sm sm:p-6">
          <div className="grid grid-cols-2 gap-3">
            {COLORS.map((c, index) => (
              <button
                key={c.name}
                onClick={() => tapColor(index)}
                disabled={phase === "showing"}
                aria-label={c.name}
                className="h-24 w-24 rounded-2xl border-2 transition-all sm:h-28 sm:w-28"
                style={{
                  backgroundColor: c.hex,
                  opacity: litIndex === index ? 1 : 0.55,
                  borderColor: litIndex === index ? "white" : "transparent",
                  boxShadow: litIndex === index ? "0 0 0 6px rgba(255,255,255,0.25)" : "none",
                  transform: litIndex === index ? "scale(1.05)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
        {sequence.length > 1 && (
          <div className="flex flex-wrap justify-center gap-1.5">
            {Array.from({ length: sequence.length - 1 }, (_, i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-success" />
            ))}
          </div>
        )}
      </div>
    </TestFrame>
  );
}
