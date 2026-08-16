"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "inductive-reasoning-test",
  intro:
    "Look at each set of examples, work out the underlying rule, and pick the option that fits the same rule.",
  resultHeading: "Inductive Reasoning Result",
  disclaimer: "This is an original inductive reasoning quiz. It is not an official aptitude assessment used by employers.",
  questions: [
    {
      question: "4 → 16, 5 → 25, 6 → 36. Applying the same rule, 9 → ?",
      options: ["18", "72", "81", "90"],
      correctIndex: 2,
      explanation: "The rule squares the number: 9² = 81.",
    },
    {
      question: "CAT → DBU, DOG → EPH. Applying the same rule, BUS → ?",
      options: ["CVT", "AVT", "CTU", "CVR"],
      correctIndex: 0,
      explanation: "Each letter shifts forward by one in the alphabet: B→C, U→V, S→T.",
    },
    {
      question: "2, 6, 12, 20, 30, ? — find the rule and the next number.",
      options: ["40", "42", "36", "38"],
      correctIndex: 1,
      explanation: "Differences increase by 2 each time (4, 6, 8, 10, 12): 30 + 12 = 42.",
    },
    {
      question: "Apple is to Fruit as Carrot is to ?",
      options: ["Orange", "Vegetable", "Salad", "Garden"],
      correctIndex: 1,
      explanation: "The rule is item-to-category: Carrot belongs to the category Vegetable, just as Apple belongs to Fruit.",
    },
    {
      question: "In a set of examples, all numbers divisible by both 2 and 3 are labeled 'X'. Which number would be labeled 'X'?",
      options: ["14", "18", "20", "27"],
      correctIndex: 1,
      explanation: "18 is divisible by both 2 and 3 (18 = 2×9 = 3×6), fitting the induced rule.",
    },
    {
      question: "1 → 3, 2 → 5, 3 → 7, 4 → 9. Applying the same rule, 10 → ?",
      options: ["19", "20", "21", "23"],
      correctIndex: 2,
      explanation: "The rule is double plus one (2n+1): 2(10)+1 = 21.",
    },
    {
      question: "Bird, Fish, Insect, Reptile share a category based on being: ?",
      options: ["Warm-blooded", "Mammals", "Animals", "Domesticated"],
      correctIndex: 2,
      explanation: "All four are broadly classified as animals, which is the common induced category.",
    },
    {
      question: "3, 9, 27, 81, ? — identify the rule and continue.",
      options: ["162", "243", "324", "729"],
      correctIndex: 1,
      explanation: "Each term multiplies by 3: 81 × 3 = 243.",
    },
    {
      question: "Every shape with 4 equal sides and 4 right angles in a set is called a 'Zorb'. Which shape is a Zorb?",
      options: ["Rectangle (unequal sides)", "Square", "Rhombus (no right angles)", "Triangle"],
      correctIndex: 1,
      explanation: "A square has 4 equal sides and 4 right angles, matching the induced definition of 'Zorb'.",
    },
    {
      question: "Monday → 1, Tuesday → 2, Wednesday → 3. Applying the same rule, Saturday → ?",
      options: ["5", "6", "7", "4"],
      correctIndex: 1,
      explanation: "The rule assigns each weekday its position starting from Monday=1, so Saturday=6.",
    },
  ],
};

export function InductiveReasoningTest() {
  return <MCQQuiz config={config} />;
}
