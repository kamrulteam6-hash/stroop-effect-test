"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "adapting" | "test" | "result";

const ADAPT_SECONDS = 20;

function now(): number {
  return performance.now();
}

export function MotionAftereffectTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [countdown, setCountdown] = useState(ADAPT_SECONDS);
  const [offset, setOffset] = useState(0);
  const [aftereffectDurationMs, setAftereffectDurationMs] = useState(0);
  const testStartRef = useRef(0);

  useEffect(() => {
    if (phase !== "adapting") return;
    let raf: number;
    const animate = () => {
      setOffset((o) => (o + 3) % 40);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  useEffect(() => {
    if (phase !== "adapting") return;
    const timer = window.setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          window.clearInterval(timer);
          setPhase("test");
          testStartRef.current = now();
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const start = () => {
    setCountdown(ADAPT_SECONDS);
    setOffset(0);
    setPhase("adapting");
  };

  const stopAftereffect = () => {
    const duration = now() - testStartRef.current;
    setAftereffectDurationMs(Math.round(duration));
    setPhase("result");
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="motion-aftereffect-test"
          direction="higher"
          value={Math.round(aftereffectDurationMs / 1000)}
          unitLabel="seconds of illusory motion perceived"
          headline="Motion Aftereffect Result"
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
            Stare at a moving stripe pattern for {ADAPT_SECONDS} seconds without looking away. Afterward, a
            stationary pattern will often appear to drift in the opposite direction — click the button the moment
            the illusion fades.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "adapting") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">Keep staring at the center — {countdown}s left</p>
          <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-border">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, var(--foreground, #0f172a) 0px, var(--foreground, #0f172a) 8px, var(--surface-2, #1e293b) 8px, var(--surface-2, #1e293b) 40px)`,
                backgroundPositionY: offset,
              }}
            />
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
          </div>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs text-muted-2">Now look at this stationary pattern</p>
        <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-border">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, var(--foreground, #0f172a) 0px, var(--foreground, #0f172a) 8px, var(--surface-2, #1e293b) 8px, var(--surface-2, #1e293b) 40px)`,
            }}
          />
        </div>
        <Button size="lg" onClick={stopAftereffect}>
          The Illusion Faded
        </Button>
      </div>
    </TestFrame>
  );
}
