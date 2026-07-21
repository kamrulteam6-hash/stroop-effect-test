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

const QUESTIONS = [
  { text: "What's your favorite color?", options: ["Red", "Blue", "Green", "Purple", "Yellow"] },
  { text: "Pick a number", options: ["3", "5", "7", "9", "11"] },
  { text: "Are you more of a morning person or a night owl?", options: ["Morning", "Night Owl"] },
  { text: "How organized would you say you are, 1-5?", options: ["1", "2", "3", "4", "5"] },
];

export function BarnumEffectTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [reading, setReading] = useState("");
  const [accuracy, setAccuracy] = useState(70);

  const start = () => {
    setQuestionIndex(0);
    setPhase("quiz");
  };

  const answerQuestion = () => {
    const next = questionIndex + 1;
    if (next >= QUESTIONS.length) {
      setReading(READINGS[Math.floor(Math.random() * READINGS.length)]);
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
          <ResultHeading>The Reveal</ResultHeading>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-black tabular-nums text-primary">{accuracy}%</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">
              how accurate you rated it
            </span>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Your answers to those quiz questions had{" "}
            <strong className="text-foreground">zero effect</strong> on the reading you got. Everyone who takes this
            test receives one of the same handful of generic descriptions, randomly assigned — yet most people rate
            them as surprisingly accurate.
          </p>
          <Callout icon="🔮" title="This is the Barnum (Forer) effect">
            In the original 1948 study, psychologist Bertram Forer gave every student the exact same personality
            description and asked them to rate its accuracy. The average rating was about 85% — almost identical to
            what most visitors rate here.
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
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">Your Personality Reading</p>
          <p className="max-w-md text-sm leading-relaxed text-foreground">{reading}</p>
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
        <p className="text-xs font-medium text-muted-2">
          Question {questionIndex + 1} / {QUESTIONS.length}
        </p>
        <p className="text-center text-lg font-semibold text-foreground">{q.text}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {q.options.map((opt) => (
            <button
              key={opt}
              onClick={answerQuestion}
              className="rounded-lg border border-border bg-surface-2 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
