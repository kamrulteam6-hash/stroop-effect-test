"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const PASSAGE =
  "A small coastal town once relied entirely on its fishing fleet for income. When fish stocks declined sharply in the 1990s, the town faced serious hardship. Rather than giving up, local leaders invested in tourism, restoring old harbor buildings and promoting the area's hiking trails. Within a decade, tourism had become the town's largest source of income, and the fishing fleet, now much smaller, focused on supplying high-quality seafood to the new restaurants that opened along the harbor.";

function PassagePlayer() {
  const [playing, setPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [supported] = useState(() => typeof window !== "undefined" && "speechSynthesis" in window);

  const play = () => {
    if (!supported || playCount >= 2) return;
    const utterance = new SpeechSynthesisUtterance(PASSAGE);
    utterance.rate = 0.95;
    utterance.onstart = () => setPlaying(true);
    utterance.onend = () => setPlaying(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setPlayCount((c) => c + 1);
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4">
      {supported ? (
        <>
          <p className="text-xs text-muted-2">Listen to the short passage below. You can play it up to twice.</p>
          <Button size="lg" onClick={play} disabled={playing || playCount >= 2}>
            {playing ? "Playing..." : playCount === 0 ? "▶ Play Passage" : `▶ Play Again (${2 - playCount} left)`}
          </Button>
          {playCount > 0 && <p className="text-xs text-success">Played {playCount}/2 times.</p>}
        </>
      ) : (
        <div className="rounded-xl border border-border bg-surface-2 p-4 text-left text-sm text-muted">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-2">
            Your browser doesn&apos;t support text-to-speech, so read the passage once instead:
          </p>
          <p>{PASSAGE}</p>
        </div>
      )}
    </div>
  );
}

const config: MCQQuizConfig = {
  slug: "listening-comprehension-test",
  intro:
    "Listen to a short spoken passage, then answer 5 comprehension questions about what you heard. No re-reading the text is needed — just listen carefully.",
  resultHeading: "Listening Comprehension Result",
  disclaimer:
    "This is an original listening-comprehension exercise using your browser's built-in text-to-speech voice. It is not a certified listening or language-proficiency exam, and voice quality varies by device and browser.",
  preQuiz: {
    label: "Listen carefully — you won't see the text during the questions.",
    content: <PassagePlayer />,
    continueLabel: "I'm Ready — Start Questions",
  },
  questions: [
    { question: "What did the town originally rely on for income?", options: ["Farming", "Fishing", "Mining", "Manufacturing"], correctIndex: 1 },
    { question: "When did fish stocks decline sharply?", options: ["1970s", "1980s", "1990s", "2000s"], correctIndex: 2 },
    { question: "What did local leaders invest in instead?", options: ["A new airport", "Tourism", "A shipping port", "A university"], correctIndex: 1 },
    { question: "What became the town's largest source of income within a decade?", options: ["Fishing", "Agriculture", "Tourism", "Manufacturing"], correctIndex: 2 },
    { question: "What did the smaller fishing fleet focus on afterward?", options: ["Exporting overseas", "Supplying local restaurants", "Building boats", "Training new fishers"], correctIndex: 1 },
  ],
};

export function ListeningComprehensionTest() {
  return <MCQQuiz config={config} />;
}
