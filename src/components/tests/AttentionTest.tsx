"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

const STIMULUS_WINDOW = 900;
const ISI = 350;

type Trials = 20 | 40;
type Difficulty = "easy" | "hard";
type StimulusType = "letters" | "shapes";
type Phase = "idle" | "blank" | "stimulus" | "result";

const LETTER_SET = { go: ["A", "B", "C", "D", "E", "F", "G"], noGo: "X" };
const SHAPE_SET = { go: ["🔵", "🟢", "🟡", "🟣", "🟠"], noGo: "🔺" };

interface TrialResult {
  isGo: boolean;
  responded: boolean;
  rt: number | null;
}

export function AttentionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trials, setTrials] = useState<Trials>(20);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [stimulusType, setStimulusType] = useState<StimulusType>("letters");
  const [trialIndex, setTrialIndex] = useState(0);
  const [stimulus, setStimulus] = useState("");
  const [results, setResults] = useState<TrialResult[]>([]);
  const respondedRef = useRef(false);
  const shownAt = useRef(0);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const set = stimulusType === "letters" ? LETTER_SET : SHAPE_SET;
  const noGoRate = difficulty === "hard" ? 0.3 : 0.15;

  const nextStimulus = (): string => {
    if (Math.random() < noGoRate) return set.noGo;
    return set.go[Math.floor(Math.random() * set.go.length)];
  };

  const runTrial = (index: number, total: Trials) => {
    setPhase("blank");
    timeoutRef.current = window.setTimeout(() => {
      const s = nextStimulus();
      setStimulus(s);
      respondedRef.current = false;
      shownAt.current = performance.now();
      setPhase("stimulus");

      timeoutRef.current = window.setTimeout(() => {
        if (!respondedRef.current) {
          setResults((r) => [...r, { isGo: s !== set.noGo, responded: false, rt: null }]);
        }
        const next = index + 1;
        if (next >= total) {
          setPhase("result");
        } else {
          setTrialIndex(next);
          runTrial(next, total);
        }
      }, STIMULUS_WINDOW);
    }, ISI);
  };

  const start = () => {
    setResults([]);
    setTrialIndex(0);
    runTrial(0, trials);
  };

  const respond = () => {
    if (phase !== "stimulus" || respondedRef.current) return;
    respondedRef.current = true;
    const rt = performance.now() - shownAt.current;
    setResults((r) => [...r, { isGo: stimulus !== set.noGo, responded: true, rt }]);
    window.clearTimeout(timeoutRef.current);

    const next = trialIndex + 1;
    if (next >= trials) {
      setPhase("result");
    } else {
      setTrialIndex(next);
      runTrial(next, trials);
    }
  };

  useEffect(() => {
    if (phase !== "stimulus") return;
    function onKey(e: KeyboardEvent) {
      if (e.key === " ") {
        e.preventDefault();
        respond();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, stimulus]);

  const hits = results.filter((r) => r.isGo && r.responded).length;
  const misses = results.filter((r) => r.isGo && !r.responded).length;
  const falseAlarms = results.filter((r) => !r.isGo && r.responded).length;
  const goTrials = results.filter((r) => r.isGo).length;
  const accuracy = results.length
    ? Math.round(((hits + results.filter((r) => !r.isGo && !r.responded).length) / results.length) * 100)
    : 0;
  const avgRt = hits ? Math.round(results.filter((r) => r.isGo && r.responded).reduce((a, b) => a + (b.rt ?? 0), 0) / hits) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="attention-span-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          extraStats={[
            { label: "Hits", value: `${hits}/${goTrials}` },
            { label: "False Alarms", value: `${falseAlarms}` },
            { label: "Misses", value: `${misses}` },
            { label: "Avg. RT", value: `${avgRt}ms` },
          ]}
          shareLabel={`I scored ${accuracy}% accuracy on the Attention & Focus Test!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 p-6 text-center sm:p-10">
          <p className="max-w-sm text-sm text-muted">
            Tap or press space for every {stimulusType === "letters" ? "letter" : "shape"}{" "}
            <span className="font-semibold text-foreground">except</span> &quot;{set.noGo}&quot;. Hold back when you
            see it.
          </p>
          <OptionsBar>
            <Segmented
              label="Trials"
              value={trials}
              onChange={setTrials}
              options={[
                { value: 20, label: "20" },
                { value: 40, label: "40" },
              ]}
            />
            <Segmented
              label="No-Go Rate"
              value={difficulty}
              onChange={setDifficulty}
              options={[
                { value: "easy", label: "Easy" },
                { value: "hard", label: "Hard" },
              ]}
            />
            <Segmented
              label="Stimulus"
              value={stimulusType}
              onChange={setStimulusType}
              options={[
                { value: "letters", label: "Letters" },
                { value: "shapes", label: "Shapes" },
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
      <div
        role="button"
        tabIndex={0}
        onClick={respond}
        onKeyDown={() => {}}
        className="flex h-full min-h-[420px] w-full cursor-pointer select-none flex-col items-center justify-center gap-4 p-6 text-center"
      >
        <p className="absolute top-4 text-xs font-medium text-muted-2">
          Trial {Math.min(trialIndex + 1, trials)} / {trials}
        </p>
        {phase === "stimulus" ? (
          <p className={`text-7xl font-black ${stimulus === set.noGo ? "text-danger" : "text-foreground"}`}>
            {stimulus}
          </p>
        ) : (
          <p className="text-2xl text-muted-2">+</p>
        )}
      </div>
    </TestFrame>
  );
}
