"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { useSound } from "@/lib/useSound";
import { SoundToggle } from "@/components/tests/shared/SoundToggle";

type TargetCount = 10 | 30 | 50;
type Size = "sm" | "md" | "lg";
type Mode = "static" | "tracking";
type Phase = "idle" | "running" | "result";

const SIZE_PX: Record<Size, number> = { sm: 28, md: 40, lg: 56 };
const TRACKING_SPEED = 110; // px per second

export function AimTrainerTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [totalTargets, setTotalTargets] = useState<TargetCount>(30);
  const [size, setSize] = useState<Size>("md");
  const [mode, setMode] = useState<Mode>("static");
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [times, setTimes] = useState<number[]>([]);
  const areaRef = useRef<HTMLDivElement>(null);
  const lastHit = useRef(0);
  const velocity = useRef({ vx: 0, vy: 0 });
  const rafRef = useRef<number | undefined>(undefined);
  const posRef = useRef({ x: 50, y: 50 });
  const sound = useSound();

  const targetSize = SIZE_PX[size];

  useEffect(() => () => cancelAnimationFrame(rafRef.current as number), []);

  const placeTarget = () => {
    const area = areaRef.current;
    if (!area) return;
    const rect = area.getBoundingClientRect();
    const x = Math.random() * (rect.width - targetSize);
    const y = Math.random() * (rect.height - targetSize);
    posRef.current = { x, y };
    setPos({ x, y });
    if (mode === "tracking") {
      const angle = Math.random() * Math.PI * 2;
      velocity.current = { vx: Math.cos(angle) * TRACKING_SPEED, vy: Math.sin(angle) * TRACKING_SPEED };
    }
  };

  const start = () => {
    setPhase("running");
    setHits(0);
    setMisses(0);
    setTimes([]);
    lastHit.current = performance.now();
    window.setTimeout(placeTarget, 0);
  };

  useEffect(() => {
    if (phase !== "running" || mode !== "tracking") return;
    let last = performance.now();

    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      const area = areaRef.current;
      if (area) {
        const rect = area.getBoundingClientRect();
        const next = { ...posRef.current };
        next.x += velocity.current.vx * dt;
        next.y += velocity.current.vy * dt;
        if (next.x <= 0 || next.x >= rect.width - targetSize) velocity.current.vx *= -1;
        if (next.y <= 0 || next.y >= rect.height - targetSize) velocity.current.vy *= -1;
        next.x = Math.min(Math.max(next.x, 0), rect.width - targetSize);
        next.y = Math.min(Math.max(next.y, 0), rect.height - targetSize);
        posRef.current = next;
        setPos(next);
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current as number);
  }, [phase, mode, targetSize]);

  const onHit = (e: React.MouseEvent) => {
    e.stopPropagation();
    const now = performance.now();
    const elapsed = now - lastHit.current;
    lastHit.current = now;
    sound.play("tick");
    const nextTimes = [...times, elapsed];
    setTimes(nextTimes);
    const nextHits = hits + 1;
    setHits(nextHits);
    if (nextHits >= totalTargets) {
      sound.play("success");
      setPhase("result");
    } else {
      placeTarget();
    }
  };

  const onMiss = () => {
    if (phase === "running") setMisses((m) => m + 1);
  };

  const avg = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const totalTime = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / 1000) : 0;
  const accuracy = hits + misses > 0 ? Math.round((hits / (hits + misses)) * 100) : 100;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="aim-trainer-test"
          direction="lower"
          value={avg}
          unitLabel="ms avg"
          extraStats={[
            { label: "Total Time", value: `${totalTime}s` },
            { label: "Accuracy", value: `${accuracy}%` },
            { label: "Targets", value: `${totalTargets}` },
          ]}
          shareLabel={`I averaged ${avg}ms per target on the Aim Trainer test!`}
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
          <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
          <p className="max-w-sm text-sm text-muted">
            Click each target as fast as you can. Your average time per target will be measured.
          </p>
          <OptionsBar>
            <Segmented
              label="Targets"
              value={totalTargets}
              onChange={setTotalTargets}
              options={[
                { value: 10, label: "10" },
                { value: 30, label: "30" },
                { value: 50, label: "50" },
              ]}
            />
            <Segmented
              label="Size"
              value={size}
              onChange={setSize}
              options={[
                { value: "sm", label: "Small" },
                { value: "md", label: "Medium" },
                { value: "lg", label: "Large" },
              ]}
            />
            <Segmented
              label="Mode"
              value={mode}
              onChange={setMode}
              options={[
                { value: "static", label: "Static" },
                { value: "tracking", label: "Tracking" },
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
    <TestFrame className="p-0">
      <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
      <div ref={areaRef} onClick={onMiss} className="relative h-full min-h-[420px] w-full">
        <div className="absolute left-3 top-3 z-10 rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted-2">
          {hits} / {totalTargets}
        </div>
        <button
          onClick={onHit}
          aria-label="target"
          className="absolute rounded-full bg-accent shadow-lg transition-transform hover:scale-105 active:scale-90"
          style={{ width: targetSize, height: targetSize, left: pos.x, top: pos.y }}
        />
      </div>
    </TestFrame>
  );
}
