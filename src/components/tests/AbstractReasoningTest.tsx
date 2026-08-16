"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "abstract-reasoning-test",
  intro:
    "Find the pattern in each sequence or set of shapes described below and pick the option that logically continues or completes it.",
  resultHeading: "Abstract Reasoning Result",
  disclaimer: "This is an original abstract reasoning quiz using text-described shape patterns. It is not an official aptitude assessment used by employers.",
  questions: [
    {
      question: "A sequence of shapes rotates 90° clockwise each step: Triangle pointing up → Triangle pointing right → Triangle pointing down → ?",
      options: ["Triangle pointing left", "Triangle pointing up", "Triangle pointing right", "Square"],
      correctIndex: 0,
      explanation: "Continuing the 90° clockwise rotation from 'down' lands on 'left'.",
    },
    {
      question: "Shapes gain one side each step: Triangle (3) → Square (4) → Pentagon (5) → ?",
      options: ["Hexagon (6)", "Heptagon (7)", "Square (4)", "Circle"],
      correctIndex: 0,
      explanation: "The pattern adds one side per step, so pentagon (5) is followed by hexagon (6).",
    },
    {
      question: "A grid alternates dots in a checkerboard pattern: ●○●, ○?○, ●○●. What fills the missing cell?",
      options: ["●", "○", "Either works", "Neither works"],
      correctIndex: 0,
      explanation: "A checkerboard pattern alternates every neighboring cell, so the center must be ● to differ from all four adjacent ○ cells.",
    },
    {
      question: "A set of dots increases by a growing amount: 1 dot → 3 dots → 6 dots → 10 dots → ?",
      options: ["13 dots", "14 dots", "15 dots", "16 dots"],
      correctIndex: 2,
      explanation: "These are triangular numbers (+2, +3, +4, +5): 10 + 5 = 15.",
    },
    {
      question: "A shape alternates between filled and outline every step, and alternates between circle and square every step: filled circle → outline square → filled circle → outline square → ?",
      options: ["filled circle", "outline square", "filled square", "outline circle"],
      correctIndex: 0,
      explanation: "The two-step cycle (filled circle, outline square) repeats, so the next item is filled circle.",
    },
    {
      question: "Lines added to a figure follow this rule: start with 1 line, each step doubles the count: 1 → 2 → 4 → 8 → ?",
      options: ["10", "12", "16", "9"],
      correctIndex: 2,
      explanation: "Doubling 8 gives 16.",
    },
    {
      question: "An arrow rotates 45° clockwise at each step, starting pointing up: Up → Up-right → Right → Down-right → ?",
      options: ["Down", "Up", "Right", "Left"],
      correctIndex: 0,
      explanation: "Continuing the steady 45° clockwise rotation from down-right lands on down.",
    },
    {
      question: "A pattern shows shapes shrinking by half in size each step while the count doubles: 1 large square → 2 medium squares → 4 small squares → ?",
      options: ["8 tiny squares", "6 small squares", "4 medium squares", "2 large squares"],
      correctIndex: 0,
      explanation: "The count keeps doubling (1, 2, 4, 8) while size keeps halving.",
    },
    {
      question: "Which figure breaks the pattern: a sequence of stars each with one more point than the last (4, 5, 6, 7) but one entry shows 6, 5 instead of continuing to climb?",
      options: ["The one that decreases", "The first one", "The last one", "None break the pattern"],
      correctIndex: 0,
      explanation: "A descending entry violates the strictly increasing point-count rule established by the rest of the sequence.",
    },
    {
      question: "A code uses shape + shade to represent numbers: filled triangle = 1, filled square = 2, outline triangle = 3. Following the pattern (shape cycles, shade flips every other), what is outline square?",
      options: ["0", "4", "5", "2"],
      correctIndex: 1,
      explanation: "Continuing the cycle of two shapes × two shades in order gives outline square as the fourth code, value 4.",
    },
  ],
};

export function AbstractReasoningTest() {
  return <MCQQuiz config={config} />;
}
