"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Speed = "normal" | "fast";
type Phase = "idle" | "playing" | "result";

const GRID_SIZE = 9;
const DURATION_S = 30;
const MIN_GAP_MS = 300;
const MAX_GAP_MS = 650;

const POP_MS: Record<Speed, number> = { normal: 850, fast: 550 };

function randomGap(): number {
  return MIN_GAP_MS + Math.random() * (MAX_GAP_MS - MIN_GAP_MS);
}

function pickSpot(lastSpot: number | null): number {
  let spot = Math.floor(Math.random() * GRID_SIZE);
  if (spot === lastSpot) spot = (spot + 1) % GRID_SIZE;
  return spot;
}

export function PopUpTargetTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [speed, setSpeed] = useState<Speed>("normal");
  const [activeSpot, setActiveSpot] = useState<number | null>(null);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION_S);
  const runningRef = useRef(false);
  const lastSpotRef = useRef<number | null>(null);
  const popTimeoutRef = useRef<number | undefined>(undefined);
  const gapTimeoutRef = useRef<number | undefined>(undefined);
  const intervalRef = useRef<number | undefined>(undefined);

  const clearAllTimers = () => {
    window.clearTimeout(popTimeoutRef.current);
    window.clearTimeout(gapTimeoutRef.current);
    window.clearInterval(intervalRef.current);
  };

  useEffect(() => clearAllTimers, []);

  const scheduleNextPop = (spd: Speed) => {
    gapTimeoutRef.current = window.setTimeout(() => spawnPop(spd), randomGap());
  };

  const spawnPop = (spd: Speed) => {
    if (!runningRef.current) return;
    const spot = pickSpot(lastSpotRef.current);
    lastSpotRef.current = spot;
    setActiveSpot(spot);

    popTimeoutRef.current = window.setTimeout(() => {
      if (!runningRef.current) return;
      setMisses((m) => m + 1);
      setActiveSpot(null);
      scheduleNextPop(spd);
    }, POP_MS[spd]);
  };

  const start = () => {
    setHits(0);
    setMisses(0);
    setTimeLeft(DURATION_S);
    setActiveSpot(null);
    lastSpotRef.current = null;
    runningRef.current = true;
    setPhase("playing");
    scheduleNextPop(speed);

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          runningRef.current = false;
          clearAllTimers();
          setActiveSpot(null);
          setPhase("result");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const hitSpot = (spot: number) => {
    if (phase !== "playing" || activeSpot !== spot) return;
    window.clearTimeout(popTimeoutRef.current);
    setHits((h) => h + 1);
    setActiveSpot(null);
    scheduleNextPop(speed);
  };

  const totalPops = hits + misses;
  const accuracy = totalPops ? Math.round((hits / totalPops) * 100) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="pop-up-target-test"
          direction="higher"
          value={hits}
          unitLabel="targets hit"
          extraStats={[
            { label: "Misses", value: `${misses}` },
            { label: "Accuracy", value: `${accuracy}%` },
          ]}
          shareLabel={`I hit ${hits} targets on the Pop-Up Target Test!`}
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
          <p className="max-w-sm text-sm text-muted">
            A target will pop up at a random spot in the grid — click it before it disappears. Hit as many as you
            can in 30 seconds.
          </p>
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
      <div className="flex flex-col items-center gap-6">
        <div className="flex w-full max-w-xs items-center justify-between text-xs font-semibold text-muted-2">
          <span>Hits: {hits}</span>
          <span>Time: {timeLeft}s</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: GRID_SIZE }).map((_, i) => (
            <button
              key={i}
              onClick={() => hitSpot(i)}
              className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-surface-2 transition-colors sm:h-24 sm:w-24"
            >
              {activeSpot === i && (
                <span className="h-14 w-14 animate-pop-in rounded-full bg-primary sm:h-16 sm:w-16" />
              )}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
