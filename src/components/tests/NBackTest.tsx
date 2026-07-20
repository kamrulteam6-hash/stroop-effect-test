"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { useSound } from "@/lib/useSound";
import { SoundToggle } from "@/components/tests/shared/SoundToggle";

const GRID_SIZE = 9;
const STIMULUS_MS = 600;
const ISI_MS = 1400;

type NLevel = 1 | 2 | 3;
type Trials = 20 | 30;
type Phase = "idle" | "blank" | "stimulus" | "result";

interface TrialResult {
  isMatch: boolean;
  responded: boolean;
}

function generateSequence(trials: number, n: number): number[] {
  const seq: number[] = [];
  for (let i = 0; i < trials; i++) {
    if (i >= n && Math.random() < 0.3) {
      seq.push(seq[i - n]);
    } else {
      seq.push(Math.floor(Math.random() * GRID_SIZE));
    }
  }
  return seq;
}

export function NBackTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [nLevel, setNLevel] = useState<NLevel>(2);
  const [trialCount, setTrialCount] = useState<Trials>(20);
  const [trialIndex, setTrialIndex] = useState(0);
  const [litIndex, setLitIndex] = useState<number | null>(null);
  const [results, setResults] = useState<TrialResult[]>([]);
  const sequenceRef = useRef<number[]>([]);
  const respondedRef = useRef(false);
  const timeoutRef = useRef<number | undefined>(undefined);
  const sound = useSound();

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const runTrial = (index: number, total: number, n: number) => {
    setPhase("blank");
    setLitIndex(null);
    timeoutRef.current = window.setTimeout(() => {
      const pos = sequenceRef.current[index];
      setLitIndex(pos);
      respondedRef.current = false;
      setPhase("stimulus");

      timeoutRef.current = window.setTimeout(() => {
        const isMatch = index >= n && pos === sequenceRef.current[index - n];
        if (!respondedRef.current) {
          setResults((r) => [...r, { isMatch, responded: false }]);
        }
        const next = index + 1;
        if (next >= total) {
          setPhase("result");
        } else {
          setTrialIndex(next);
          runTrial(next, total, n);
        }
      }, STIMULUS_MS);
    }, ISI_MS - STIMULUS_MS);
  };

  const start = () => {
    sequenceRef.current = generateSequence(trialCount, nLevel);
    setResults([]);
    setTrialIndex(0);
    runTrial(0, trialCount, nLevel);
  };

  const respondMatch = () => {
    if (phase !== "stimulus" || respondedRef.current) return;
    respondedRef.current = true;
    const isMatch = trialIndex >= nLevel && sequenceRef.current[trialIndex] === sequenceRef.current[trialIndex - nLevel];
    sound.play(isMatch ? "tick" : "error");
    setResults((r) => [...r, { isMatch, responded: true }]);
  };

  useEffect(() => {
    if (phase !== "stimulus") return;
    function onKey(e: KeyboardEvent) {
      if (e.key === " ") {
        e.preventDefault();
        respondMatch();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, trialIndex]);

  const correct = results.filter((r) => (r.isMatch && r.responded) || (!r.isMatch && !r.responded)).length;
  const accuracy = results.length ? Math.round((correct / results.length) * 100) : 0;
  const hits = results.filter((r) => r.isMatch && r.responded).length;
  const totalMatches = results.filter((r) => r.isMatch).length;
  const falseAlarms = results.filter((r) => !r.isMatch && r.responded).length;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="n-back-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          extraStats={[
            { label: "N-Level", value: `${nLevel}` },
            { label: "Hits", value: `${hits}/${totalMatches}` },
            { label: "False Alarms", value: `${falseAlarms}` },
          ]}
          shareLabel={`I scored ${accuracy}% accuracy on the ${nLevel}-Back Test!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            A tile lights up each round. Click Match (or press spacebar) whenever the current tile is in the same
            position as it was N rounds ago.
          </p>
          <OptionsBar>
            <Segmented
              label="N-Level"
              value={nLevel}
              onChange={setNLevel}
              options={[
                { value: 1, label: "1-Back" },
                { value: 2, label: "2-Back" },
                { value: 3, label: "3-Back" },
              ]}
            />
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
      <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Trial {Math.min(trialIndex + 1, trialCount)} / {trialCount} — remember {nLevel} step{nLevel > 1 ? "s" : ""}{" "}
          back
        </p>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: GRID_SIZE }).map((_, idx) => (
            <div
              key={idx}
              className={`h-20 w-20 rounded-xl border transition-colors sm:h-24 sm:w-24 ${
                litIndex === idx ? "border-primary bg-primary" : "border-border bg-surface-2"
              }`}
            />
          ))}
        </div>
        <Button size="lg" onClick={respondMatch} disabled={phase !== "stimulus"}>
          Match
        </Button>
      </div>
    </TestFrame>
  );
}
