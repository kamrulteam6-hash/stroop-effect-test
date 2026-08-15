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
type Stage = "idle" | "waiting" | "ready" | "too-soon" | "interrupted" | "practice-done" | "result";
type BadgeTone = "primary" | "accent" | "gold" | "muted" | "danger" | "success";

const MIN_DELAY_MS = 1500;
const MAX_DELAY_MS = 5000;

function speedLabel(avgMs: number): { text: string; tone: BadgeTone } {
  if (avgMs < 200) return { text: "Very Fast", tone: "success" };
  if (avgMs < 250) return { text: "Fast", tone: "primary" };
  if (avgMs < 300) return { text: "Typical Online Range", tone: "muted" };
  if (avgMs < 400) return { text: "Slower Response", tone: "gold" };
  return { text: "Try Again", tone: "danger" };
}

function median(values: number[]): number {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? Math.round((sorted[mid - 1] + sorted[mid]) / 2) : sorted[mid];
}

function consistency(values: number[], mean: number): number {
  if (!values.length) return 0;
  const variance = values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / values.length;
  return Math.round(Math.sqrt(variance));
}

export function ReactionTimeTest() {
  const [stage, setStage] = useState<Stage>("idle");
  const [rounds, setRounds] = useState<Rounds>(5);
  const [mode, setMode] = useState<Mode>("visual");
  const [times, setTimes] = useState<number[]>([]);
  const [falseStarts, setFalseStarts] = useState(0);
  const [isPractice, setIsPractice] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);
  const readyAt = useRef(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const stageRef = useRef<Stage>("idle");
  const sound = useSound();

  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  useEffect(() => {
    function onVisibilityChange() {
      if (document.hidden && (stageRef.current === "waiting" || stageRef.current === "ready")) {
        window.clearTimeout(timeoutRef.current);
        setStage("interrupted");
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

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
    const delay = MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS);
    timeoutRef.current = window.setTimeout(() => {
      readyAt.current = performance.now();
      if (mode === "audio") beep();
      setStage("ready");
    }, delay);
  };

  const restart = () => {
    setTimes([]);
    setFalseStarts(0);
    setIsPractice(true);
    startRound();
  };

  const handleZoneClick = () => {
    if (stage === "interrupted") {
      startRound();
      return;
    }
    if (stage === "waiting") {
      window.clearTimeout(timeoutRef.current);
      sound.play("error");
      if (!isPractice) setFalseStarts((f) => f + 1);
      setStage("too-soon");
      return;
    }
    if (stage === "ready") {
      const elapsed = Math.round(performance.now() - readyAt.current);
      if (isPractice) {
        sound.play("tick");
        setStage("practice-done");
        return;
      }
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

  const beginScoredRounds = () => {
    setIsPractice(false);
    startRound();
  };

  const avg = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const best = times.length ? Math.min(...times) : 0;
  const worst = times.length ? Math.max(...times) : 0;
  const med = median(times);
  const stdev = consistency(times, avg);

  if (stage === "result") {
    const label = speedLabel(avg);
    return (
      <TestFrame>
        <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
        <ResultScreen
          slug="reaction-time-test"
          direction="lower"
          value={avg}
          unitLabel="ms avg"
          scoreLabel={label}
          extraStats={[
            { label: "Best", value: `${best}ms` },
            { label: "Worst", value: `${worst}ms` },
            { label: "Median", value: `${med}ms` },
            { label: "Consistency", value: `±${stdev}ms` },
            { label: "False Starts", value: `${falseStarts}` },
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
                <span className="w-14 shrink-0 text-right tabular-nums">
                  {t}ms{t === best && times.length > 1 ? " — Best" : ""}
                </span>
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

  if (stage === "practice-done") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">✅</span>
          <p className="text-lg font-semibold text-foreground">Nice! That practice round doesn&apos;t count.</p>
          <p className="max-w-sm text-sm text-muted">
            Ready? Your {rounds} scored round{rounds > 1 ? "s" : ""} start now.
          </p>
          <Button size="lg" onClick={beginScoredRounds}>
            Start Scored Rounds
          </Button>
        </div>
      </TestFrame>
    );
  }

  const scoredRoundNumber = Math.min(times.length + 1, rounds);

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
        onKeyDown={(e) => {
          if (e.key === " ") {
            e.preventDefault();
            handleZoneClick();
          }
        }}
        className="flex h-full w-full flex-col items-center justify-center gap-5 p-6 text-center sm:p-10"
      >
        {isPractice && stage !== "interrupted" && (
          <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold">
            Practice Round — Doesn&apos;t Count
          </span>
        )}

        {!isPractice && (stage === "waiting" || stage === "ready") && (
          <div className="flex flex-col items-center gap-2">
            <p
              className={`text-xs font-medium ${
                stage === "ready" && mode === "visual" ? "text-white/80" : "text-muted-2"
              }`}
            >
              Round {scoredRoundNumber} / {rounds}
            </p>
            <div className="flex gap-1.5">
              {Array.from({ length: rounds }, (_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i < times.length
                      ? "bg-success"
                      : i === times.length
                        ? stage === "ready" && mode === "visual"
                          ? "bg-white"
                          : "bg-primary"
                        : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

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
        {stage === "interrupted" && (
          <>
            <p className="text-2xl font-black text-foreground">Test interrupted</p>
            <p className="text-sm text-muted">Your tab lost focus. Click to try this round again.</p>
          </>
        )}
      </div>
    </TestFrame>
  );
}
