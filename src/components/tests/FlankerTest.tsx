"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Direction = "left" | "right";
type Trials = 20 | 30;
type Phase = "idle" | "blank" | "stimulus" | "result";

const RESPONSE_WINDOW_MS = 1200;
const ISI_MS = 500;

interface Trial {
  direction: Direction;
  congruent: boolean;
}

interface TrialResult extends Trial {
  correct: boolean;
  rt: number | null;
}

function generateTrial(): Trial {
  return {
    direction: Math.random() < 0.5 ? "left" : "right",
    congruent: Math.random() < 0.5,
  };
}

function renderRow(trial: Trial): string {
  const center = trial.direction === "left" ? "◀" : "▶";
  const flankerDir = trial.congruent ? trial.direction : trial.direction === "left" ? "right" : "left";
  const flanker = flankerDir === "left" ? "◀" : "▶";
  return `${flanker} ${flanker} ${center} ${flanker} ${flanker}`;
}

export function FlankerTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialCount, setTrialCount] = useState<Trials>(20);
  const [trialIndex, setTrialIndex] = useState(0);
  const [currentTrial, setCurrentTrial] = useState<Trial | null>(null);
  const [results, setResults] = useState<TrialResult[]>([]);
  const respondedRef = useRef(false);
  const stimulusAt = useRef(0);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const runTrial = (index: number, total: number) => {
    setPhase("blank");
    setCurrentTrial(null);
    timeoutRef.current = window.setTimeout(() => {
      const trial = generateTrial();
      setCurrentTrial(trial);
      respondedRef.current = false;
      stimulusAt.current = performance.now();
      setPhase("stimulus");

      timeoutRef.current = window.setTimeout(() => {
        if (!respondedRef.current) {
          setResults((r) => [...r, { ...trial, correct: false, rt: null }]);
        }
        const next = index + 1;
        if (next >= total) {
          setPhase("result");
        } else {
          setTrialIndex(next);
          runTrial(next, total);
        }
      }, RESPONSE_WINDOW_MS);
    }, ISI_MS);
  };

  const start = () => {
    setResults([]);
    setTrialIndex(0);
    runTrial(0, trialCount);
  };

  const respond = (choice: Direction) => {
    if (phase !== "stimulus" || respondedRef.current || !currentTrial) return;
    respondedRef.current = true;
    window.clearTimeout(timeoutRef.current);
    const rt = Math.round(performance.now() - stimulusAt.current);
    const correct = choice === currentTrial.direction;
    setResults((r) => [...r, { ...currentTrial, correct, rt }]);

    const next = trialIndex + 1;
    if (next >= trialCount) {
      setPhase("result");
    } else {
      setTrialIndex(next);
      runTrial(next, trialCount);
    }
  };

  useEffect(() => {
    if (phase !== "stimulus") return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") respond("left");
      if (e.key === "ArrowRight") respond("right");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, currentTrial]);

  const correctCount = results.filter((r) => r.correct).length;
  const accuracy = results.length ? Math.round((correctCount / results.length) * 100) : 0;
  const congruentRts = results.filter((r) => r.congruent && r.correct && r.rt !== null).map((r) => r.rt as number);
  const incongruentRts = results.filter((r) => !r.congruent && r.correct && r.rt !== null).map((r) => r.rt as number);
  const avgCongruent = congruentRts.length ? Math.round(congruentRts.reduce((a, b) => a + b, 0) / congruentRts.length) : 0;
  const avgIncongruent = incongruentRts.length
    ? Math.round(incongruentRts.reduce((a, b) => a + b, 0) / incongruentRts.length)
    : 0;
  const flankerEffect = avgCongruent && avgIncongruent ? avgIncongruent - avgCongruent : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="flanker-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          extraStats={[
            { label: "Congruent RT", value: `${avgCongruent}ms` },
            { label: "Incongruent RT", value: `${avgIncongruent}ms` },
            { label: "Flanker Effect", value: `${flankerEffect}ms` },
          ]}
          shareLabel={`I scored ${accuracy}% accuracy on the Flanker Test!`}
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
          <span className="text-5xl">🏹</span>
          <p className="max-w-sm text-sm text-muted">
            Respond only to the direction of the <strong className="text-foreground">center</strong> arrow — ignore
            the arrows around it. Use the Left/Right arrow keys or the buttons below.
          </p>
          <OptionsBar>
            <Segmented
              label="Trials"
              value={trialCount}
              onChange={setTrialCount}
              options={[
                { value: 20, label: "20" },
                { value: 30, label: "30" },
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
        <div className="w-full max-w-xs">
          <p className="mb-1.5 text-center text-xs font-medium text-muted-2">
            Trial {Math.min(trialIndex + 1, trialCount)} / {trialCount}
          </p>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-150"
              style={{ width: `${(Math.min(trialIndex + 1, trialCount) / trialCount) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex h-24 w-full max-w-sm items-center justify-center rounded-3xl border-2 border-border bg-surface-2 text-4xl font-black tracking-widest text-foreground shadow-sm sm:text-5xl">
          {currentTrial ? renderRow(currentTrial) : ""}
        </div>
        <div className="flex gap-4">
          <Button size="lg" variant="secondary" onClick={() => respond("left")}>
            ◀ Left
          </Button>
          <Button size="lg" variant="secondary" onClick={() => respond("right")}>
            Right ▶
          </Button>
        </div>
        {results.length > 0 && (
          <div className="flex max-w-xs flex-wrap justify-center gap-1.5">
            {results.map((r, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${r.correct ? "bg-success" : "bg-danger"}`} />
            ))}
          </div>
        )}
      </div>
    </TestFrame>
  );
}
