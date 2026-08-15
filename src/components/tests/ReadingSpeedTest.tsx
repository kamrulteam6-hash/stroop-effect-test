"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "reading" | "quiz" | "result";

const PASSAGE = `The history of the printing press marks one of the most transformative moments in human communication. Before its invention, books were painstakingly copied by hand, a process that could take months or even years for a single volume. This made written knowledge scarce and largely confined to religious institutions, universities, and the wealthy elite who could afford such rare and expensive items.

When Johannes Gutenberg developed a practical printing press with movable type in the fifteenth century, he fundamentally changed the calculus of information distribution. Suddenly, texts could be reproduced quickly, cheaply, and in large quantities. Literacy rates began to climb across Europe as books became more accessible to ordinary people, not just the clergy and aristocracy.

The consequences rippled far beyond simple convenience. Scientific ideas could now spread rapidly between scholars in different countries, accelerating the pace of discovery during the Renaissance. Religious reformers used the press to distribute pamphlets challenging established doctrine, contributing directly to the Protestant Reformation. Standardized spelling and grammar began to emerge as printed texts created shared reference points across regions that had previously used wildly inconsistent dialects and writing conventions.`;

const WORD_COUNT = PASSAGE.trim().split(/\s+/).length;

interface Question {
  text: string;
  options: string[];
  correctIndex: number;
}

const QUESTIONS: Question[] = [
  {
    text: "Before the printing press, how were books typically produced?",
    options: ["Printed on wooden blocks", "Copied by hand", "Dictated aloud", "Carved into stone"],
    correctIndex: 1,
  },
  {
    text: "Who developed a practical printing press with movable type?",
    options: ["Martin Luther", "Johannes Gutenberg", "Leonardo da Vinci", "William Caxton"],
    correctIndex: 1,
  },
  {
    text: "What historical movement did the press contribute to by spreading reform pamphlets?",
    options: ["The Renaissance", "The Protestant Reformation", "The Industrial Revolution", "The Enlightenment"],
    correctIndex: 1,
  },
];

export function ReadingSpeedTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [startTime, setStartTime] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const start = () => {
    setStartTime(performance.now());
    setPhase("reading");
  };

  const finishReading = () => {
    const elapsedMinutes = (performance.now() - startTime) / 60000;
    setWpm(Math.round(WORD_COUNT / Math.max(elapsedMinutes, 0.05)));
    setQuizIndex(0);
    setCorrectCount(0);
    setPhase("quiz");
  };

  const answer = (choiceIndex: number) => {
    if (choiceIndex === QUESTIONS[quizIndex].correctIndex) setCorrectCount((c) => c + 1);
    const next = quizIndex + 1;
    if (next >= QUESTIONS.length) {
      setPhase("result");
      return;
    }
    setQuizIndex(next);
  };

  const comprehension = Math.round((correctCount / QUESTIONS.length) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="reading-speed-test"
          direction="higher"
          value={wpm}
          unitLabel="words per minute"
          headline="Reading Speed Result"
          extraStats={[{ label: "Comprehension", value: `${comprehension}%` }]}
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
            Read the passage naturally at your normal pace, then click &quot;Done Reading&quot; when finished. A
            short comprehension quiz follows to confirm you actually read it.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "reading") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <div className="max-w-lg space-y-3 text-sm leading-relaxed text-foreground">
            {PASSAGE.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <Button size="lg" onClick={finishReading}>
            Done Reading
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = QUESTIONS[quizIndex];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Comprehension Check {quizIndex + 1} / {QUESTIONS.length}
        </p>
        <p className="max-w-sm text-center text-base font-semibold text-foreground">{q.text}</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {q.options.map((opt, i) => (
            <button
              key={opt}
              onClick={() => answer(i)}
              className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
