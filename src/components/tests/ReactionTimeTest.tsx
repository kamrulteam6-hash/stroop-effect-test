"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { SoundToggle } from "@/components/tests/shared/SoundToggle";
import { useSound } from "@/lib/useSound";

type Rounds = 3 | 5 | 10;
type Mode = "visual" | "audio";
type Stage = "idle" | "waiting" | "ready" | "too-soon" | "result";

export function ReactionTimeTest() {
  const [stage, setStage] = useState<Stage>("idle");
  const [rounds, setRounds] = useState<Rounds>(5);
  const [mode, setMode] = useState<Mode>("visual");
  const [times, setTimes] = useState<number[]>([]);
  const timeoutRef = useRef<number | undefined>(undefined);
  const readyAt = useRef(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sound = useSound();

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const beep = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = 880;
    gain.gain.value = 0.001;
    gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  };

  const startRound = () => {
    setStage("waiting");
    const delay = 1200 + Math.random() * 2500;
    timeoutRef.current = window.setTimeout(() => {
      readyAt.current = performance.now();
      if (mode === "audio") beep();
      setStage("ready");
    }, delay);
  };

  const restart = () => {
    setTimes([]);
    startRound();
  };

  const handleZoneClick = () => {
    if (stage === "waiting") {
      window.clearTimeout(timeoutRef.current);
      sound.play("error");
      setStage("too-soon");
      return;
    }
    if (stage === "ready") {
      const elapsed = Math.round(performance.now() - readyAt.current);
      const next = [...times, elapsed];
      setTimes(next);
      sound.play("tick");
      if (next.length >= rounds) {
        sound.play("success");
        setStage("result");
      } else {
        startRound();
      }
      return;
    }
    if (stage === "too-soon") {
      startRound();
    }
  };

  const avg = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const best = times.length ? Math.min(...times) : 0;
  const worst = times.length ? Math.max(...times) : 0;

  if (stage === "result") {
    return (
      <TestFrame>
        <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
        <ResultScreen
          slug="reaction-time-test"
          direction="lower"
          value={avg}
          unitLabel="ms avg"
          extraStats={[
            { label: "Best", value: `${best}ms` },
            { label: "Worst", value: `${worst}ms` },
            { label: "Rounds", value: `${times.length}` },
          ]}
          shareLabel={`My average reaction time was ${avg}ms on the Stroop Effect Test site!`}
          onRetry={restart}
          onChangeOptions={() => setStage("idle")}
        >
          <div className="flex w-full max-w-xs flex-col gap-1.5">
            {times.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted-2">
                <span className="w-5 shrink-0">{i + 1}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${Math.max(6, (t / worst) * 100)}%` }}
                  />
                </div>
                <span className="w-14 shrink-0 text-right tabular-nums">{t}ms</span>
              </div>
            ))}
          </div>
          <p className="max-w-xs text-[11px] text-muted-2">
            Clicks under 100ms are usually anticipation, not a real reaction — try to wait for the real cue.
          </p>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (stage === "idle") {
    return (
      <TestFrame>
        <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            {mode === "audio"
              ? "Click as soon as you hear the beep — no visual cue this time."
              : "Wait for the box to turn green, then click as fast as you can."}
          </p>
          <OptionsBar>
            <Segmented
              label="Rounds"
              value={rounds}
              onChange={setRounds}
              options={[
                { value: 3, label: "3" },
                { value: 5, label: "5" },
                { value: 10, label: "10" },
              ]}
            />
            <Segmented
              label="Mode"
              value={mode}
              onChange={setMode}
              options={[
                { value: "visual", label: "Visual" },
                { value: "audio", label: "Audio" },
              ]}
            />
          </OptionsBar>
          <Button size="lg" onClick={restart}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame
      className={`cursor-pointer select-none p-0 transition-colors ${
        stage === "ready" && mode === "visual" ? "bg-success" : stage === "too-soon" ? "bg-danger" : ""
      }`}
    >
      <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
      <div
        role="button"
        tabIndex={0}
        onClick={handleZoneClick}
        onKeyDown={(e) => e.key === " " && handleZoneClick()}
        className="flex h-full w-full flex-col items-center justify-center gap-5 p-6 text-center sm:p-10"
      >
        {stage === "waiting" && (
          <p className="text-lg font-semibold text-muted-2">
            {mode === "audio" ? "Listen for the beep…" : "Wait for green…"}
          </p>
        )}
        {stage === "ready" && (
          <p className={`text-3xl font-black ${mode === "audio" ? "text-foreground" : "text-white"}`}>
            {mode === "audio" ? "🔊 Beep! Click now!" : "Click now!"}
          </p>
        )}
        {stage === "too-soon" && (
          <>
            <p className="text-2xl font-black text-white">Too soon!</p>
            <p className="text-sm text-white/80">Click to try this round again</p>
          </>
        )}
      </div>
    </TestFrame>
  );
}
