"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "memorize" | "quiz" | "result";

const ICON_POOL = ["🍎", "🚗", "🐘", "⚽", "🎸", "🌙", "🔑", "🌵", "🍕", "🧢", "📎", "🐟", "🎈", "🕯️", "🦋"];
const GRID_SIZE = 9;
const MEMORIZE_S = 6;

interface Question {
  text: string;
  options: string[];
  correctIndex: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestions(grid: string[]): Question[] {
  const positions = ["top-left", "top-middle", "top-right", "middle-left", "center", "middle-right", "bottom-left", "bottom-middle", "bottom-right"];
  const notShown = ICON_POOL.filter((icon) => !grid.includes(icon));
  const qs: Question[] = [];

  // Position questions (2)
  const posIndices = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]).slice(0, 2);
  for (const idx of posIndices) {
    const correct = grid[idx];
    const distractors = shuffle(grid.filter((g) => g !== correct)).slice(0, 3);
    const options = shuffle([correct, ...distractors]);
    qs.push({ text: `What was in the ${positions[idx]} position?`, options, correctIndex: options.indexOf(correct) });
  }

  // Recognition question: which was NOT shown
  const recognitionOptions = shuffle([...shuffle(grid).slice(0, 3), notShown[0]]);
  qs.push({ text: "Which of these icons was NOT in the grid?", options: recognitionOptions, correctIndex: recognitionOptions.indexOf(notShown[0]) });

  // Recognition question: which WAS shown
  const shownOptions = shuffle([grid[Math.floor(Math.random() * grid.length)], ...shuffle(notShown).slice(0, 3)]);
  const shownCorrect = shownOptions.find((o) => grid.includes(o))!;
  qs.push({ text: "Which of these icons WAS in the grid?", options: shownOptions, correctIndex: shownOptions.indexOf(shownCorrect) });

  // Count question
  qs.push({ text: `How many total icons were in the grid?`, options: shuffle([`${GRID_SIZE}`, `${GRID_SIZE - 2}`, `${GRID_SIZE + 2}`, `${GRID_SIZE - 1}`]), correctIndex: 0 });
  // fix correctIndex for count question after shuffle
  const countQ = qs[qs.length - 1];
  countQ.correctIndex = countQ.options.indexOf(`${GRID_SIZE}`);

  return qs;
}

export function ObservationSkillsTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [grid, setGrid] = useState<string[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(MEMORIZE_S);

  useEffect(() => {
    if (phase !== "memorize") return;
    const timer = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(timer);
          setPhase("quiz");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const start = () => {
    const newGrid = shuffle(ICON_POOL).slice(0, GRID_SIZE);
    setGrid(newGrid);
    setQuestions(buildQuestions(newGrid));
    setQIndex(0);
    setAnswers([]);
    setPicked(null);
    setTimeLeft(MEMORIZE_S);
    setPhase("memorize");
  };

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
  };

  const next = () => {
    if (picked === null) return;
    const nextAnswers = [...answers, picked];
    setPicked(null);
    if (qIndex + 1 >= questions.length) {
      setAnswers(nextAnswers);
      setPhase("result");
    } else {
      setAnswers(nextAnswers);
      setQIndex(qIndex + 1);
    }
  };

  if (phase === "result") {
    const correct = answers.filter((a, i) => a === questions[i].correctIndex).length;
    const pct = Math.round((correct / questions.length) * 100);
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Observation Skills Result</ResultHeading>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-black tabular-nums text-primary sm:text-7xl">
              {correct}/{questions.length}
            </span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">Correct ({pct}%)</span>
          </div>
          <Callout icon="👀" title="About this test" tone="primary">
            This is an original observation and incidental-memory task inspired by classic &quot;study a scene, then
            answer detail questions&quot; paradigms. It is not a validated clinical instrument.
          </Callout>
          <Button onClick={start}>Try Again</Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">👀</span>
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll see a grid of {GRID_SIZE} icons for {MEMORIZE_S} seconds. Study it closely — afterward
            you&apos;ll answer questions about exactly what you saw and where.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "memorize") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-medium text-muted-2">Memorize — {timeLeft}s</p>
          <div className="grid grid-cols-3 gap-3">
            {grid.map((icon, i) => (
              <div key={i} className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-surface-2 text-3xl sm:h-20 sm:w-20">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </TestFrame>
    );
  }

  const q = questions[qIndex];

  return (
    <TestFrame>
      <div className="flex w-full max-w-md flex-col items-center gap-8">
        <p className="text-xs font-medium text-muted-2">
          Question {qIndex + 1} / {questions.length}
        </p>
        <p className="text-center text-lg font-semibold text-foreground">{q.text}</p>
        <div className="grid w-full grid-cols-4 gap-2">
          {q.options.map((opt, i) => {
            const isPicked = picked === i;
            const isCorrectOpt = i === q.correctIndex;
            const showState = picked !== null;
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                disabled={picked !== null}
                className={`flex h-16 items-center justify-center rounded-xl border text-2xl ${
                  showState && isCorrectOpt
                    ? "border-success bg-success/10"
                    : showState && isPicked && !isCorrectOpt
                      ? "border-danger bg-danger/10"
                      : "border-border bg-surface-2 hover:border-primary"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        <Button onClick={next} disabled={picked === null}>
          {qIndex + 1 >= questions.length ? "See Result" : "Next Question"}
        </Button>
      </div>
    </TestFrame>
  );
}
