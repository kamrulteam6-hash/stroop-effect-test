"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Bpm = 60 | 90 | 120;
type Phase = "idle" | "running" | "result";

const LEAD_IN = 4;
const SCORED = 16;
const TOTAL = LEAD_IN + SCORED;

export function RhythmTappingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [bpm, setBpm] = useState<Bpm>(90);
  const [beatIndex, setBeatIndex] = useState(-1);
  const [pulse, setPulse] = useState(false);
  const [tapFlash, setTapFlash] = useState<"good" | "off" | null>(null);
  const [missed, setMissed] = useState(0);
  const [avgOffset, setAvgOffset] = useState(0);
  const [tapResults, setTapResults] = useState<Record<number, number>>({});
  const [beatInterval, setBeatInterval] = useState(667);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const startTimeRef = useRef(0);
  const beatIntervalRef = useRef(667);
  const lastFiredRef = useRef(-1);
  const resultsRef = useRef<Record<number, number>>({});
  const rafRef = useRef<number | undefined>(undefined);

  const getCtx = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    return audioCtxRef.current;
  };

  const playClick = (accent: boolean) => {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = accent ? 1000 : 700;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current as number), []);

  const finish = () => {
    cancelAnimationFrame(rafRef.current as number);
    const offsets = Object.values(resultsRef.current);
    const missedCount = SCORED - offsets.length;
    const avg = offsets.length
      ? offsets.reduce((a, b) => a + Math.abs(b), 0) / offsets.length
      : beatIntervalRef.current / 2;
    setMissed(missedCount);
    setAvgOffset(avg);
    setPhase("result");
  };

  const tick = (now: number) => {
    const elapsed = now - startTimeRef.current;
    const idx = Math.floor(elapsed / beatIntervalRef.current);
    if (idx > lastFiredRef.current && idx < TOTAL) {
      lastFiredRef.current = idx;
      setBeatIndex(idx);
      setPulse(true);
      window.setTimeout(() => setPulse(false), 120);
      playClick(idx < LEAD_IN);
    }
    if (elapsed > TOTAL * beatIntervalRef.current + beatIntervalRef.current / 2) {
      finish();
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
  };

  const start = () => {
    beatIntervalRef.current = 60000 / bpm;
    setBeatInterval(beatIntervalRef.current);
    resultsRef.current = {};
    lastFiredRef.current = -1;
    setBeatIndex(-1);
    setMissed(0);
    setAvgOffset(0);
    setTapResults({});
    setPhase("running");
    startTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
  };

  const onTap = () => {
    if (phase !== "running") return;
    const now = performance.now();
    const elapsed = now - startTimeRef.current;
    const idx = Math.round(elapsed / beatIntervalRef.current);
    if (idx < LEAD_IN || idx >= TOTAL) return;
    if (resultsRef.current[idx] !== undefined) return;
    const expected = idx * beatIntervalRef.current;
    const offset = elapsed - expected;
    if (Math.abs(offset) > beatIntervalRef.current / 2) return;
    resultsRef.current[idx] = offset;
    setTapResults({ ...resultsRef.current });
    setTapFlash(Math.abs(offset) < beatIntervalRef.current * 0.15 ? "good" : "off");
    window.setTimeout(() => setTapFlash(null), 150);
  };

  useEffect(() => {
    if (phase !== "running") return;
    function onKey(e: KeyboardEvent) {
      if (e.key === " ") {
        e.preventDefault();
        onTap();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="rhythm-tapping-test"
          direction="lower"
          value={avgOffset}
          formatValue={(v) => v.toFixed(0)}
          unitLabel="ms avg. timing error"
          extraStats={[
            { label: "BPM", value: `${bpm}` },
            { label: "Beats Missed", value: `${missed}/${SCORED}` },
          ]}
          shareLabel={`I averaged ${avgOffset.toFixed(0)}ms of timing error on the Rhythm Tapping Test!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">🥁</span>
          <p className="max-w-sm text-sm text-muted">
            A metronome will click for 4 lead-in beats, then 16 scored beats. Tap the circle (or press spacebar)
            right on each beat.
          </p>
          <OptionsBar>
            <Segmented
              label="Tempo"
              value={bpm}
              onChange={setBpm}
              options={[
                { value: 60, label: "60 BPM" },
                { value: 90, label: "90 BPM" },
                { value: 120, label: "120 BPM" },
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

  const inLeadIn = beatIndex < LEAD_IN;
  const scoredSoFar = Math.max(0, beatIndex - LEAD_IN);

  return (
    <TestFrame className="p-0">
      <div
        role="button"
        tabIndex={0}
        onClick={onTap}
        onKeyDown={() => {}}
        className="flex h-full min-h-[420px] w-full cursor-pointer select-none flex-col items-center justify-center gap-6 p-6 text-center"
      >
        {!inLeadIn && (
          <div className="w-full max-w-xs">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-150"
                style={{ width: `${(scoredSoFar / SCORED) * 100}%` }}
              />
            </div>
          </div>
        )}
        <p className="text-xs font-medium text-muted-2">
          {inLeadIn ? "🎧 Get ready…" : `Beat ${scoredSoFar + 1} / ${SCORED}`}
        </p>
        <div
          className={`flex h-32 w-32 items-center justify-center rounded-full border-4 transition-transform ${
            tapFlash === "good"
              ? "border-success bg-success/20"
              : tapFlash === "off"
                ? "border-gold bg-gold/20"
                : "border-primary bg-primary/10"
          }`}
          style={{ transform: pulse ? "scale(1.15)" : "scale(1)" }}
        >
          <span className="text-sm font-bold text-foreground">{inLeadIn ? "•••" : "TAP"}</span>
        </div>
        <p className="text-xs text-muted-2">Click anywhere or press spacebar in time with the beat</p>
        {!inLeadIn && (
          <div className="flex max-w-xs flex-wrap justify-center gap-1.5">
            {Array.from({ length: SCORED }, (_, i) => {
              const idx = i + LEAD_IN;
              const offset = tapResults[idx];
              const passed = idx < beatIndex;
              const status =
                offset !== undefined ? (Math.abs(offset) < beatInterval * 0.15 ? "good" : "off") : passed ? "miss" : null;
              return (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    status === "good"
                      ? "bg-success"
                      : status === "off"
                        ? "bg-gold"
                        : status === "miss"
                          ? "bg-danger"
                          : "bg-surface-2"
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </TestFrame>
  );
}
