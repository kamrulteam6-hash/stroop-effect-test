"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "prime" | "probe" | "result";

const SHAPES = ["circle", "square", "triangle", "diamond"] as const;
type Shape = (typeof SHAPES)[number];
const COLORS = ["#3b82f6", "#ef4444"];
const TOTAL_TRIALS = 16;

function now(): number {
  return performance.now();
}

function coinFlip(): boolean {
  return Math.random() < 0.5;
}

interface StimulusPair {
  target: Shape;
  distractor: Shape;
}

function randomPair(exclude?: Shape): StimulusPair {
  const pool = exclude ? SHAPES.filter((s) => s !== exclude) : SHAPES;
  const target = pool[Math.floor(Math.random() * pool.length)];
  let distractor = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  while (distractor === target) distractor = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  return { target, distractor };
}

function ShapeIcon({ shape, color }: { shape: Shape; color: string }) {
  const style = { backgroundColor: color };
  if (shape === "circle") return <div className="h-8 w-8 rounded-full" style={style} />;
  if (shape === "square") return <div className="h-8 w-8 rounded-md" style={style} />;
  if (shape === "diamond") return <div className="h-8 w-8 rotate-45 rounded-md" style={style} />;
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        borderBottom: `28px solid ${color}`,
      }}
    />
  );
}

export function NegativePrimingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [prime, setPrime] = useState<StimulusPair>(() => randomPair());
  const [probe, setProbe] = useState<StimulusPair>(() => randomPair());
  const [isNegPrimeTrial, setIsNegPrimeTrial] = useState(false);
  const [npRts, setNpRts] = useState<number[]>([]);
  const [controlRts, setControlRts] = useState<number[]>([]);
  const [respondStart, setRespondStart] = useState(0);

  const runTrial = () => {
    const newPrime = randomPair();
    const isNegPrime = coinFlip();
    let newProbe: StimulusPair;
    if (isNegPrime) {
      newProbe = { target: newPrime.distractor, distractor: randomPair(newPrime.distractor).target };
    } else {
      newProbe = randomPair();
    }
    setPrime(newPrime);
    setProbe(newProbe);
    setIsNegPrimeTrial(isNegPrime);
    setPhase("prime");

    window.setTimeout(() => {
      setPhase("probe");
      setRespondStart(now());
    }, 800);
  };

  const start = () => {
    setTrialIndex(0);
    setNpRts([]);
    setControlRts([]);
    runTrial();
  };

  const respond = (shape: Shape) => {
    if (phase !== "probe") return;
    if (shape !== probe.target) return;
    const rt = now() - respondStart;
    if (isNegPrimeTrial) setNpRts((r) => [...r, rt]);
    else setControlRts((r) => [...r, rt]);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    runTrial();
  };

  const avgControl = controlRts.length ? Math.round(controlRts.reduce((a, b) => a + b, 0) / controlRts.length) : 0;
  const avgNp = npRts.length ? Math.round(npRts.reduce((a, b) => a + b, 0) / npRts.length) : 0;
  const negativePrimingEffect = avgNp - avgControl;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="negative-priming-test"
          direction="higher"
          value={Math.max(0, negativePrimingEffect)}
          unitLabel="ms negative priming effect"
          headline="Negative Priming Result"
          extraStats={[
            { label: "Control RT", value: `${avgControl} ms` },
            { label: "Negative Priming RT", value: `${avgNp} ms` },
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
            Each round shows two shapes overlapping (a blue target and a red distractor), then a second pair. Click
            the blue target shape each time as fast as you can. Sometimes the previous distractor becomes the new
            target — this typically slows you down.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const showPrime = phase === "prime";
  const pair = showPrime ? prime : probe;

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute opacity-70">
            <ShapeIcon shape={pair.distractor} color={COLORS[1]} />
          </div>
          <div className="absolute translate-x-4 translate-y-2 opacity-90">
            <ShapeIcon shape={pair.target} color={COLORS[0]} />
          </div>
        </div>
        <p className="text-xs text-muted-2">Click the blue target shape</p>
        <div className="grid grid-cols-4 gap-3">
          {SHAPES.map((shape) => (
            <button
              key={shape}
              disabled={showPrime}
              onClick={() => respond(shape)}
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface-2 transition-colors hover:border-primary/40 disabled:opacity-40"
            >
              <ShapeIcon shape={shape} color="#94a3b8" />
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
