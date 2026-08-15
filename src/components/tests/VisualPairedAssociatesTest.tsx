"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "studying" | "testing" | "result";

const SHAPES = ["circle", "square", "triangle", "diamond", "star", "hexagon"] as const;
type Shape = (typeof SHAPES)[number];
const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#eab308", "#a855f7", "#06b6d4", "#f97316", "#ec4899"];
const PAIR_COUNT = 6;

function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

interface Pair {
  shape: Shape;
  color: string;
}

function ShapeIcon({ shape, color, size = 40 }: { shape: Shape; color: string; size?: number }) {
  if (shape === "circle") return <div className="rounded-full" style={{ backgroundColor: color, width: size, height: size }} />;
  if (shape === "square") return <div className="rounded-md" style={{ backgroundColor: color, width: size, height: size }} />;
  if (shape === "diamond") return <div className="rotate-45 rounded-md" style={{ backgroundColor: color, width: size * 0.8, height: size * 0.8 }} />;
  if (shape === "triangle")
    return (
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size * 0.85}px solid ${color}`,
        }}
      />
    );
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      {shape === "star" ? (
        <polygon points="12,1 15,9 23,9 17,14 19,22 12,17 5,22 7,14 1,9 9,9" fill={color} />
      ) : (
        <polygon points="6,2 18,2 23,12 18,22 6,22 1,12" fill={color} />
      )}
    </svg>
  );
}

export function VisualPairedAssociatesTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [studyIndex, setStudyIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const buildOptions = (correctColor: string) => {
    const distractors = shuffled(COLORS.filter((c) => c !== correctColor)).slice(0, 3);
    return shuffled([correctColor, ...distractors]);
  };

  const start = () => {
    const shapePool = shuffled([...SHAPES]);
    const colorPool = shuffled(COLORS).slice(0, PAIR_COUNT);
    const newPairs: Pair[] = shapePool.slice(0, PAIR_COUNT).map((shape, i) => ({ shape, color: colorPool[i] }));
    setPairs(newPairs);
    setStudyIndex(0);
    setTestIndex(0);
    setCorrect(0);
    setFeedback(null);
    setOptions(buildOptions(newPairs[0].color));
    setPhase("studying");
  };

  const nextStudy = () => {
    const next = studyIndex + 1;
    if (next >= pairs.length) {
      const shuffledPairs = shuffled(pairs);
      setPairs(shuffledPairs);
      setTestIndex(0);
      setOptions(buildOptions(shuffledPairs[0].color));
      setPhase("testing");
      return;
    }
    setStudyIndex(next);
  };

  const answer = (color: string) => {
    if (feedback) return;
    const pair = pairs[testIndex];
    const isCorrect = color === pair.color;
    if (isCorrect) setCorrect((c) => c + 1);
    setFeedback(isCorrect ? "correct" : "wrong");

    window.setTimeout(() => {
      setFeedback(null);
      const next = testIndex + 1;
      if (next >= pairs.length) {
        setPhase("result");
        return;
      }
      setTestIndex(next);
      setOptions(buildOptions(pairs[next].color));
    }, 500);
  };

  const accuracy = Math.round((correct / PAIR_COUNT) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="visual-paired-associates-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          headline="Visual Paired Associates Result"
          extraStats={[{ label: "Correct", value: `${correct}/${PAIR_COUNT}` }]}
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
            Study {PAIR_COUNT} shape-color pairs one at a time. Afterward, you&apos;ll see just the shape and must
            pick the color it was paired with from four options.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "studying") {
    const pair = pairs[studyIndex];
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">
            Studying {studyIndex + 1} / {pairs.length}
          </p>
          <div className="flex h-24 w-24 items-center justify-center">
            <ShapeIcon shape={pair.shape} color={pair.color} size={64} />
          </div>
          <Button size="lg" onClick={nextStudy}>
            Next
          </Button>
        </div>
      </TestFrame>
    );
  }

  const pair = pairs[testIndex];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {testIndex + 1} / {pairs.length}
        </p>
        <p className="text-sm text-muted">What color was this shape?</p>
        <ShapeIcon shape={pair.shape} color="#94a3b8" size={64} />
        {feedback && (
          <p className={`text-sm font-bold ${feedback === "correct" ? "text-success" : "text-danger"}`}>
            {feedback === "correct" ? "Correct!" : "Wrong"}
          </p>
        )}
        <div className="flex gap-3">
          {options.map((color) => (
            <button
              key={color}
              disabled={!!feedback}
              onClick={() => answer(color)}
              className="h-12 w-12 rounded-full border-2 border-border transition-transform hover:scale-110 disabled:opacity-60"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
