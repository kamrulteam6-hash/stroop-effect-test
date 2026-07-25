"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "quiz" | "reading" | "result";

const READINGS = [
  "You have a strong need for other people to like and admire you, and you tend to be quite critical of yourself when you fall short of your own expectations. While you have a few personality weaknesses, you're generally able to compensate for them. You have a great deal of unused capacity that you haven't yet turned to your advantage. At times you are outgoing and sociable, while at other times you are cautious and reserved. You've found it unwise to be too open in revealing yourself to others. You pride yourself on being an independent thinker and don't accept others' opinions without satisfactory evidence. Security is one of your major goals in life.",
  "Deep down, you often wonder whether you're truly living up to your own potential, even when things look fine on the surface. You genuinely care what others think of you, though you'd rarely admit how much. There have been times you've felt torn between wanting to open up completely and preferring to keep parts of yourself private. You take pride in thinking for yourself rather than simply following the crowd, even if that occasionally puts you at odds with people around you. Underneath a generally composed exterior, you sometimes carry more self-doubt than people would guess. A stable, secure life matters a great deal to you, even if you don't always say so directly.",
  "You like a certain amount of change and variety, and become dissatisfied when hemmed in by restrictions and limitations. At times you have serious doubts about whether you've made the right decisions. Some of your goals tend to be a little unrealistic. Disciplined and self-controlled on the outside, you tend to feel worried and insecure on the inside, at least some of the time. You have a tendency to be critical of yourself, and you've found that it's usually not wise to be too frank in revealing yourself to others.",
];

interface Option {
  label: string;
  icon: string;
}

interface Question {
  text: string;
  icon: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    text: "What's your favorite color?",
    icon: "🎨",
    options: [
      { label: "Red", icon: "🔴" },
      { label: "Blue", icon: "🔵" },
      { label: "Green", icon: "🟢" },
      { label: "Purple", icon: "🟣" },
      { label: "Yellow", icon: "🟡" },
    ],
  },
  {
    text: "Pick a number that feels right",
    icon: "🔢",
    options: [
      { label: "3", icon: "" },
      { label: "5", icon: "" },
      { label: "7", icon: "" },
      { label: "9", icon: "" },
      { label: "11", icon: "" },
    ],
  },
  {
    text: "Are you more of a morning person or a night owl?",
    icon: "🕰️",
    options: [
      { label: "Morning", icon: "☀️" },
      { label: "Night Owl", icon: "🌙" },
    ],
  },
  {
    text: "How organized would you say you are?",
    icon: "🗂️",
    options: [
      { label: "1", icon: "" },
      { label: "2", icon: "" },
      { label: "3", icon: "" },
      { label: "4", icon: "" },
      { label: "5", icon: "" },
    ],
  },
];

const FORER_AVERAGE = 85;

export function BarnumEffectTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [readingIndex, setReadingIndex] = useState(0);
  const [accuracy, setAccuracy] = useState(70);

  const start = () => {
    setQuestionIndex(0);
    setPhase("quiz");
  };

  const answerQuestion = () => {
    const next = questionIndex + 1;
    if (next >= QUESTIONS.length) {
      setReadingIndex(Math.floor(Math.random() * READINGS.length));
      setAccuracy(70);
      setPhase("reading");
    } else {
      setQuestionIndex(next);
    }
  };

  const submitReading = () => setPhase("result");

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">🎭</span>
          <ResultHeading>The Reveal</ResultHeading>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-black tabular-nums text-primary">{accuracy}%</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">
              how accurate you rated it
            </span>
          </div>

          <div className="flex w-full max-w-xs flex-col gap-3">
            <div>
              <div className="mb-1 flex items-center justify-between text-[11px] font-semibold text-foreground">
                <span>🔮 You</span>
                <span>{accuracy}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-surface-2">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-700"
                  style={{ width: `${accuracy}%` }}
                />
              </div>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between text-[11px] font-semibold text-foreground">
                <span>📜 Forer&apos;s 1948 study average</span>
                <span>{FORER_AVERAGE}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-surface-2">
                <div
                  className="h-full rounded-full bg-gold transition-[width] duration-700"
                  style={{ width: `${FORER_AVERAGE}%` }}
                />
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md rounded-2xl border-2 border-dashed border-border bg-surface-2 px-5 py-4">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-danger px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              Identical for everyone
            </span>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Reading #{readingIndex + 1} of {READINGS.length} — this is one of only {READINGS.length} generic
              descriptions this test has. Your quiz answers had <strong className="text-foreground">zero effect</strong>{" "}
              on which one you got.
            </p>
          </div>

          <Callout icon="🔮" title="This is the Barnum (Forer) effect">
            In the original 1948 study, psychologist Bertram Forer gave every student the exact same personality
            description and asked them to rate its accuracy. The average rating was about {FORER_AVERAGE}% — almost
            identical to what most visitors rate here.
          </Callout>
          <Button onClick={start}>Try Again</Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "reading") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">✦ Your Personal Reading ✦</p>
          <div className="relative w-full max-w-md rounded-2xl border border-gold/40 bg-gradient-to-b from-gold/10 via-surface to-surface px-6 py-7">
            <span className="absolute left-4 top-3 text-lg">✦</span>
            <span className="absolute right-4 top-3 text-lg">✦</span>
            <span className="text-3xl">🔮</span>
            <p className="mt-4 text-sm leading-relaxed text-foreground">{READINGS[readingIndex]}</p>
            <span className="absolute bottom-3 left-4 text-lg">✦</span>
            <span className="absolute bottom-3 right-4 text-lg">✦</span>
          </div>
          <div className="flex w-full max-w-xs flex-col items-center gap-2">
            <label className="text-xs font-medium text-muted-2">
              How accurately does this describe you? <strong className="text-foreground">{accuracy}%</strong>
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={accuracy}
              onChange={(e) => setAccuracy(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
          <Button size="lg" onClick={submitReading}>
            Submit Rating
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">🔮</span>
          <p className="max-w-sm text-sm text-muted">
            Answer a few quick questions, and we&apos;ll generate a personalized personality reading for you. Rate
            how accurate it feels — then see what&apos;s really going on.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = QUESTIONS[questionIndex];

  return (
    <TestFrame>
      <div className="flex w-full max-w-md flex-col items-center gap-8">
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-2">
            <span>
              Question {questionIndex + 1} / {QUESTIONS.length}
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${(questionIndex / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>
        <span className="text-4xl">{q.icon}</span>
        <p className="text-center text-lg font-semibold text-foreground">{q.text}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {q.options.map((opt) => (
            <button
              key={opt.label}
              onClick={answerQuestion}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary"
            >
              {opt.icon && <span>{opt.icon}</span>}
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
