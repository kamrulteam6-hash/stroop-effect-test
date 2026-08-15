"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "reading" | "quiz" | "result";

const PASSAGE = `Coral reefs, often called the rainforests of the sea, occupy less than one percent of the ocean floor yet support roughly a quarter of all known marine species. This extraordinary biodiversity arises from the intricate three-dimensional structures that reef-building corals construct over centuries, layer by layer, from calcium carbonate they extract from seawater.

Corals themselves are colonial animals related to jellyfish and sea anemones, but their survival depends on a remarkable partnership with microscopic algae called zooxanthellae that live within their tissues. These algae photosynthesize and share the resulting nutrients with their coral hosts, while the coral provides the algae with a protected home and access to sunlight. This symbiosis is so essential that when water temperatures rise even slightly above normal, stressed corals expel their algae in a process known as bleaching, often leading to starvation and death if conditions do not improve quickly.

Rising ocean temperatures linked to climate change have made mass bleaching events increasingly frequent and severe over the past several decades. Scientists estimate that without significant intervention, the majority of the world's coral reefs could disappear within this century, taking with them countless species that depend on reef ecosystems for food and shelter, along with the coastal protection and fishing livelihoods that hundreds of millions of people rely on.`;

interface Question {
  text: string;
  options: string[];
  correctIndex: number;
}

const QUESTIONS: Question[] = [
  {
    text: "What percentage of the ocean floor do coral reefs occupy?",
    options: ["Less than 1%", "About 10%", "About 25%", "Nearly half"],
    correctIndex: 0,
  },
  {
    text: "What are zooxanthellae?",
    options: ["A type of coral predator", "Microscopic algae living in coral tissue", "A calcium mineral", "A species of reef fish"],
    correctIndex: 1,
  },
  {
    text: "What causes coral bleaching?",
    options: ["Overfishing", "Excess sunlight", "Elevated water temperatures", "Low salt content"],
    correctIndex: 2,
  },
  {
    text: "What happens to corals when they expel their algae?",
    options: ["They grow faster", "They often starve without intervention", "They change color permanently", "They reproduce more"],
    correctIndex: 1,
  },
];

export function ReadingComprehensionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [quizIndex, setQuizIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const start = () => setPhase("reading");

  const beginQuiz = () => {
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

  const accuracy = Math.round((correctCount / QUESTIONS.length) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="reading-comprehension-test"
          direction="higher"
          value={accuracy}
          unitLabel="% comprehension accuracy"
          headline="Reading Comprehension Result"
          extraStats={[{ label: "Correct", value: `${correctCount}/${QUESTIONS.length}` }]}
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
            Read a short passage carefully, then answer questions about its content from memory. Take your time —
            this test measures understanding and retention, not speed.
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
          <Button size="lg" onClick={beginQuiz}>
            I&apos;ve Finished Reading
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
          Question {quizIndex + 1} / {QUESTIONS.length}
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
