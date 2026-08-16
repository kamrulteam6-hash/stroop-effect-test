"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "diagrammatic-reasoning-test",
  intro:
    "Each question describes a simple flowchart or process diagram made of operations applied to a starting shape or value. Work out what the process outputs.",
  resultHeading: "Diagrammatic Reasoning Result",
  disclaimer: "This is an original diagrammatic reasoning quiz using text-described flowcharts. It is not an official aptitude assessment used by employers.",
  questions: [
    {
      question: "Flowchart: Start with a square (4 sides) → Box A doubles the number of sides → Box B doubles sides again. What shape results?",
      options: ["8-sided shape", "16-sided shape", "12-sided shape", "Square"],
      correctIndex: 1,
      explanation: "4 sides doubled by Box A gives 8, doubled again by Box B gives 16.",
    },
    {
      question: "Flowchart: Input 5 → Box A (+3) → Box B (×2) → Box C (−4) → Output?",
      options: ["12", "14", "16", "10"],
      correctIndex: 0,
      explanation: "5+3=8, 8×2=16, 16−4=12.",
    },
    {
      question: "Flowchart: Input value → 'Is it even?' diamond → if YES go to Box A (÷2), if NO go to Box B (×3+1). Input is 7. What is the output?",
      options: ["3.5", "22", "21", "8"],
      correctIndex: 1,
      explanation: "7 is odd, so it follows the NO path: 7×3+1 = 22.",
    },
    {
      question: "A process box takes a shape and reflects it horizontally, then a second box rotates it 180°. Applying both to an 'R' shape, what is the net visual effect compared to the original?",
      options: ["Unchanged", "Vertical flip only", "Horizontal flip only", "No net effect other than a vertical flip"],
      correctIndex: 3,
      explanation: "A horizontal flip followed by a 180° rotation is equivalent to a single vertical flip.",
    },
    {
      question: "Flowchart loop: Start at 1 → Box (×2) → Diamond 'Is result ≥ 20?' → if NO, loop back to Box; if YES, output result. What is the output?",
      options: ["16", "32", "20", "24"],
      correctIndex: 1,
      explanation: "1→2→4→8→16→32; 16 is not ≥20 so it loops once more, giving 32 which is ≥20 and exits.",
    },
    {
      question: "Two input boxes feed into a merge box that outputs their sum. Input A goes through (×3) first, Input B goes through (+5) first. Starting values are A=4, B=2. What is the merge box's output?",
      options: ["19", "17", "21", "15"],
      correctIndex: 0,
      explanation: "A becomes 4×3=12, B becomes 2+5=7, merged sum = 12+7 = 19.",
    },
    {
      question: "A shape-counting flowchart removes all circles, then doubles the count of remaining squares. Given 3 circles and 4 squares, what is the final output?",
      options: ["4", "7", "8", "6"],
      correctIndex: 2,
      explanation: "Circles are removed (irrelevant), leaving 4 squares; doubling gives 8.",
    },
    {
      question: "Flowchart: Input → Box A (square the number) → Diamond 'Is result > 50?' → if YES subtract 50, if NO add 50. Input is 6. Output?",
      options: ["86", "36", "-14", "14"],
      correctIndex: 3,
      explanation: "6²=36, which is not >50, so add 50: 36+50=86 — checking again: 36 is not greater than 50, so the NO branch (add 50) applies, giving 86.",
    },
    {
      question: "A sorting diagram sends numbers under 10 left and numbers 10 or over right, then each branch sums its numbers. Given 3, 12, 7, 15, 9, what are the two branch totals?",
      options: ["Left 19, Right 27", "Left 19, Right 24", "Left 20, Right 27", "Left 19, Right 30"],
      correctIndex: 0,
      explanation: "Left (under 10): 3+7+9=19. Right (10 or over): 12+15=27.",
    },
    {
      question: "A pipeline applies three filters in order: 'keep even', 'keep >4', 'double'. Input list: 2, 5, 6, 8, 9. What survives after all filters, doubled?",
      options: ["[12, 16]", "[4, 12, 16]", "[16]", "[12, 16, 18]"],
      correctIndex: 0,
      explanation: "Keep even: 2,6,8. Keep >4: 6,8. Double: 12,16.",
    },
  ],
};

export function DiagrammaticReasoningTest() {
  return <MCQQuiz config={config} />;
}
