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
type Stage = "idle" | "waiting" | "ready" | "too-soon" | "result";

const GRAVITY_CM_PER_S2 = 980;

function distanceFromMs(ms: number): number {
  const t = ms / 1000;
  return 0.5 * GRAVITY_CM_PER_S2 * t * t;
}

function RulerBar({ falling }: { falling: boolean }) {
  return (
    <div
      className={`relative h-40 w-8 overflow-hidden rounded-sm border ${
        falling ? "animate-pulse border-primary bg-primary" : "border-border bg-surface-2"
      }`}
    >
      {Array.from({ length: 9 }, (_, i) => (
        <span
          key={i}
          className={`absolute left-0 h-px w-full ${falling ? "bg-white/40" : "bg-border"}`}
          style={{ top: `${(i + 1) * 10}%` }}
        />
      ))}
    </div>
  );
}

export function RulerDropTest() {
  const [stage, setStage] = useState<Stage>("idle");
  const [rounds, setRounds] = useState<Rounds>(5);
  const [times, setTimes] = useState<number[]>([]);
  const timeoutRef = useRef<number | undefined>(undefined);
  const readyAt = useRef(0);
  const sound = useSound();

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const startRound = () => {
    setStage("waiting");
    const delay = 1200 + Math.random() * 2500;
    timeoutRef.current = window.setTimeout(() => {
      readyAt.current = performance.now();
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
  const avgDistance = avg ? Math.round(distanceFromMs(avg)) : 0;

  if (stage === "result") {
    return (
      <TestFrame>
        <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
        <ResultScreen
          slug="ruler-drop-test"
          direction="lower"
          value={avg}
          unitLabel="ms avg"
          extraStats={[
            { label: "Best", value: `${best}ms` },
            { label: "Fall Distance", value: `${avgDistance}cm` },
            { label: "Rounds", value: `${times.length}` },
          ]}
          shareLabel={`My average ruler-drop reaction time was ${avg}ms (~${avgDistance}cm) on the Stroop Effect Test site!`}
          onRetry={restart}
          onChangeOptions={() => setStage("idle")}
        >
          <p className="max-w-xs text-[11px] text-muted-2">
            Fall distance is the equivalent physics-based estimate of how far a real dropped ruler would fall in
            your reaction time — a fun way to visualize the classic version of this test.
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
          <span className="text-5xl">📏</span>
          <p className="max-w-sm text-sm text-muted">
            A ruler will drop without warning — click or tap the moment it starts falling. Just like the classic
            playground trick, but timed to the millisecond.
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
      className={`cursor-pointer select-none p-0 transition-colors ${stage === "too-soon" ? "bg-danger" : ""}`}
    >
      <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
      {stage !== "too-soon" && (
        <div className="absolute left-0 top-0 z-10 w-full px-3 pt-3">
          <div className="mx-auto flex max-w-xs justify-center">
            <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted-2">
              Round {times.length + 1} / {rounds}
            </span>
          </div>
        </div>
      )}
      <div
        role="button"
        tabIndex={0}
        onClick={handleZoneClick}
        onKeyDown={(e) => e.key === " " && handleZoneClick()}
        className="flex h-full w-full flex-col items-center justify-center gap-6 p-6 text-center sm:p-10"
      >
        {stage === "waiting" && (
          <>
            <RulerBar falling={false} />
            <p className="text-lg font-semibold text-muted-2">👀 Watch the ruler…</p>
          </>
        )}
        {stage === "ready" && (
          <>
            <RulerBar falling={true} />
            <p className="text-3xl font-black text-foreground">It&apos;s falling — click now!</p>
          </>
        )}
        {stage === "too-soon" && (
          <>
            <span className="text-4xl">⏳</span>
            <p className="text-2xl font-black text-white">Too soon!</p>
            <p className="text-sm text-white/80">Click to try this round again</p>
          </>
        )}
        {times.length > 0 && stage !== "too-soon" && (
          <div className="flex flex-wrap justify-center gap-1.5">
            {times.map((t, i) => (
              <span
                key={i}
                className="rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-semibold text-muted-2"
              >
                {t}ms
              </span>
            ))}
          </div>
        )}
      </div>
    </TestFrame>
  );
}
