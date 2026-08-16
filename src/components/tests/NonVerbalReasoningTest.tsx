"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "non-verbal-reasoning-test",
  intro:
    "Solve each puzzle using only shapes, patterns, and figures described below — no words or language skills required.",
  resultHeading: "Non-Verbal Reasoning Result",
  disclaimer: "This is an original non-verbal reasoning quiz using text-described visual patterns. It is not an official aptitude assessment used by employers.",
  questions: [
    {
      question: "A sequence of shapes grows one extra dot each step, arranged in a triangle: 1 dot, 3 dots, 6 dots, 10 dots. How many dots in the next triangle?",
      options: ["12", "14", "15", "13"],
      correctIndex: 2,
      explanation: "These are triangular numbers, each adding one more than the last increase (+2,+3,+4,+5): 10+5=15.",
    },
    {
      question: "Three figures each show a square split into equal triangles by its diagonals: figure 1 has 1 diagonal (2 triangles), figure 2 has 2 diagonals (4 triangles). Following the pattern, how many triangles would figure 3 show if a third diagonal-like line is added evenly?",
      options: ["5", "6", "8", "4"],
      correctIndex: 1,
      explanation: "Each additional dividing line roughly adds 2 more regions to the shape, continuing the pattern 2, 4, 6.",
    },
    {
      question: "Which figure is the odd one out: a filled circle, a filled square, a filled triangle, an outline circle?",
      options: ["Filled circle", "Filled square", "Filled triangle", "Outline circle"],
      correctIndex: 3,
      explanation: "The outline circle is the only unfilled shape among four otherwise filled shapes.",
    },
    {
      question: "A shape rotates 90° clockwise each step: an arrow pointing north → east → south → ?",
      options: ["North", "West", "East", "South"],
      correctIndex: 1,
      explanation: "Continuing the 90° clockwise rotation from south lands on west.",
    },
    {
      question: "A 2×2 grid shows: top-left large circle, top-right medium circle, bottom-left medium circle, bottom-right ? — sizes shrink reading left to right, top to bottom.",
      options: ["Large circle", "Small circle", "Medium circle", "No circle"],
      correctIndex: 1,
      explanation: "Following the shrinking-size pattern across the grid, the bottom-right cell should hold the smallest circle.",
    },
    {
      question: "Which of these shapes cannot be made by folding a flat cross-shaped (plus-sign) piece of paper along its lines into a 3D form?",
      options: ["A cube", "A sphere", "An open box", "A rectangular prism"],
      correctIndex: 1,
      explanation: "A cross-shaped net of six squares folds into a cube; a sphere cannot be formed by folding flat polygon faces.",
    },
    {
      question: "A set of dominoes shows a consistent difference between their two halves: 2|5, 3|6, 4|7. What is the missing half in 5|?",
      options: ["7", "8", "9", "6"],
      correctIndex: 1,
      explanation: "Each domino's halves differ by 3 (2→5, 3→6, 4→7), so 5's pair is 5+3=8.",
    },
    {
      question: "In a series of clock faces, the minute hand advances by 15 minutes each step: 12:00 → 12:15 → 12:30 → ?",
      options: ["12:40", "12:45", "1:00", "12:35"],
      correctIndex: 1,
      explanation: "Continuing to add 15 minutes to 12:30 gives 12:45.",
    },
    {
      question: "A pattern shows shading alternating in a checkerboard as it grows: a 1×1 grid is shaded, a 2×2 grid has 2 shaded and 2 unshaded, a 3×3 grid has 5 shaded and 4 unshaded. How many shaded squares would a 4×4 checkerboard have?",
      options: ["6", "7", "8", "9"],
      correctIndex: 2,
      explanation: "In an n×n checkerboard, half the squares (rounded appropriately) are shaded; for 4×4 (16 squares), exactly 8 are shaded.",
    },
    {
      question: "Which figure completes the set: a big triangle containing a small circle, a big square containing a small triangle, a big circle containing a small ?",
      options: ["Circle", "Square", "Triangle", "Star"],
      correctIndex: 1,
      explanation: "The inner shape cycles through the outer shapes in order (circle→triangle→square), so the circle's inner shape should be a square.",
    },
  ],
};

export function NonVerbalReasoningTest() {
  return <MCQQuiz config={config} />;
}
