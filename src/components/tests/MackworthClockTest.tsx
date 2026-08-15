"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const TOTAL_TICKS = 60;
const TICK_MS = 600;
const TARGET_PROBABILITY = 0.15;
const RESPONSE_WINDOW_MS = 1500;

function now(): number {
  return performance.now();
}

export function MackworthClockTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [angle, setAngle] = useState(0);
  const [isTarget, setIsTarget] = useState(false);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [falseAlarms, setFalseAlarms] = useState(0);
  const [rts, setRts] = useState<number[]>([]);
  const [tickCount, setTickCount] = useState(0);

  const targetActiveRef = useRef(false);
  const targetStartRef = useRef(0);
  const respondedRef = useRef(false);
  const statsRef = useRef({ hits: 0, misses: 0, falseAlarms: 0, rts: [] as number[] });
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    const timeouts = timeoutsRef.current;
    return () => timeouts.forEach((t) => window.clearTimeout(t));
  }, []);

  const finish = () => {
    setHits(statsRef.current.hits);
    setMisses(statsRef.current.misses);
    setFalseAlarms(statsRef.current.falseAlarms);
    setRts(statsRef.current.rts);
    setPhase("result");
  };

  const scheduleTick = (index: number) => {
    if (index >= TOTAL_TICKS) {
      window.setTimeout(finish, RESPONSE_WINDOW_MS);
      return;
    }
    const t = window.setTimeout(() => {
      const newAngle = (index * 30) % 360;
      const target = Math.random() < TARGET_PROBABILITY;
      setAngle(newAngle);
      setIsTarget(target);
      setTickCount(index + 1);
      targetActiveRef.current = target;
      respondedRef.current = false;
      if (target) {
        targetStartRef.current = now();
        const missTimeout = window.setTimeout(() => {
          if (targetActiveRef.current && !respondedRef.current) {
            statsRef.current.misses += 1;
          }
          targetActiveRef.current = false;
        }, RESPONSE_WINDOW_MS);
        timeoutsRef.current.push(missTimeout);
      }
      scheduleTick(index + 1);
    }, TICK_MS);
    timeoutsRef.current.push(t);
  };

  const start = () => {
    statsRef.current = { hits: 0, misses: 0, falseAlarms: 0, rts: [] };
    setTickCount(0);
    setPhase("running");
    scheduleTick(0);
  };

  const handleClick = () => {
    if (phase !== "running") return;
    if (targetActiveRef.current && !respondedRef.current) {
      respondedRef.current = true;
      targetActiveRef.current = false;
      const rt = now() - targetStartRef.current;
      statsRef.current.hits += 1;
      statsRef.current.rts.push(rt);
    } else if (!targetActiveRef.current) {
      statsRef.current.falseAlarms += 1;
    }
  };

  const totalTargets = hits + misses;
  const accuracy = totalTargets ? Math.round((hits / totalTargets) * 100) : 0;
  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="mackworth-clock-test"
          direction="higher"
          value={accuracy}
          unitLabel="% detection accuracy"
          headline="Mackworth Clock Result"
          extraStats={[
            { label: "Hits", value: `${hits}/${totalTargets}` },
            { label: "False Alarms", value: `${falseAlarms}` },
            { label: "Avg. RT", value: `${avgRt} ms` },
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
            Watch the clock hand tick around the dial. Most ticks are the normal single-step jump — but occasionally
            it makes a double jump. Click the button the moment you see a double jump. This is a long, monotonous
            vigilance task.
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
          Tick {tickCount} / {TOTAL_TICKS}
        </p>
        <div className="relative h-48 w-48 rounded-full border-4 border-border bg-surface-2">
          <div
            className="absolute left-1/2 top-1/2 h-20 w-1 origin-bottom rounded-full bg-primary"
            style={{ transform: `translate(-50%, -100%) rotate(${angle}deg)` }}
          />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
        </div>
        <p className={`text-xs font-semibold ${isTarget ? "text-accent" : "invisible"}`}>Double jump!</p>
        <Button size="lg" variant="accent" onClick={handleClick}>
          Report Double Jump
        </Button>
      </div>
    </TestFrame>
  );
}
