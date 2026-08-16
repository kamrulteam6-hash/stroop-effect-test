"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "error-checking-test",
  intro:
    "Compare each pair of records, codes, or figures and decide whether they match exactly or contain an error — a classic clerical error-checking exercise.",
  resultHeading: "Error Checking Result",
  disclaimer: "This is an original error-checking quiz in the style of clerical aptitude tests. It is not an official aptitude assessment used by employers.",
  questions: [
    {
      question: "Original: 4829173650  |  Copy: 4829173650 — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 0,
      explanation: "Both strings are identical digit for digit.",
    },
    {
      question: "Original: J. Thompson, 118 Elm St  |  Copy: J. Thompson, 118 Elm St. — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 1,
      explanation: "The copy has an extra period after 'St' that the original doesn't have.",
    },
    {
      question: "Original: $12,450.75  |  Copy: $12,450.57 — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 1,
      explanation: "The last two digits are transposed (75 vs 57).",
    },
    {
      question: "Original: ORD-88213-B  |  Copy: ORD-88213-B — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 0,
      explanation: "Both codes are identical.",
    },
    {
      question: "Original: Account #7734829  |  Copy: Account #7734892 — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 1,
      explanation: "The final three digits differ (829 vs 892).",
    },
    {
      question: "Original: Smith, Jonathan R.  |  Copy: Smith, Johnathan R. — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 1,
      explanation: "The first name is spelled differently: 'Jonathan' vs 'Johnathan'.",
    },
    {
      question: "Original: 03/17/2024  |  Copy: 03/17/2024 — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 0,
      explanation: "Both dates are identical.",
    },
    {
      question: "Original: 45.6 kg  |  Copy: 45.6 kgs — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 1,
      explanation: "The copy has an extra 's' in the unit abbreviation.",
    },
    {
      question: "Original: TX-4471-2024  |  Copy: TX-4741-2024 — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 1,
      explanation: "The middle digits are transposed (4471 vs 4741).",
    },
    {
      question: "Original: 192.168.001.045  |  Copy: 192.168.001.045 — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 0,
      explanation: "Both strings are identical.",
    },
    {
      question: "Original: Miller & Associates LLC  |  Copy: Miller and Associates LLC — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 1,
      explanation: "The ampersand '&' has been replaced with the word 'and'.",
    },
    {
      question: "Original: PO Box 5521  |  Copy: PO Box 5521 — Do these match?",
      options: ["Match", "Error"],
      correctIndex: 0,
      explanation: "Both entries are identical.",
    },
  ],
};

export function ErrorCheckingTest() {
  return <MCQQuiz config={config} />;
}
