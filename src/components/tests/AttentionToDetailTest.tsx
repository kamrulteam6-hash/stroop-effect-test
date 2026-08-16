"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "attention-to-detail-test",
  intro:
    "Spot the small differences, mismatches, and errors in each question. Read carefully — the details matter.",
  resultHeading: "Attention to Detail Result",
  disclaimer: "This is an original attention-to-detail quiz. It is not an official aptitude assessment used by employers.",
  questions: [
    {
      question: "Which of these two strings is DIFFERENT from the others: 'AB2931XZ', 'AB2931XZ', 'AB2391XZ', 'AB2931XZ'?",
      options: ["1st", "2nd", "3rd", "4th"],
      correctIndex: 2,
      explanation: "The 3rd string reads 'AB2391XZ' — the '39' and '91' digits are swapped compared to the others.",
    },
    {
      question: "Spot the misspelled word: 'The comittee approved the budget after a lengthy discussion.'",
      options: ["comittee", "approved", "budget", "lengthy"],
      correctIndex: 0,
      explanation: "'Comittee' is misspelled — it should be 'committee' with two Ms.",
    },
    {
      question: "Which invoice number does NOT match the pattern INV-2024-XXXX (4 digits)? INV-2024-0193, INV-2024-1837, INV-2024-284, INV-2024-9012",
      options: ["INV-2024-0193", "INV-2024-1837", "INV-2024-284", "INV-2024-9012"],
      correctIndex: 2,
      explanation: "'INV-2024-284' only has 3 digits after the final dash, breaking the 4-digit pattern.",
    },
    {
      question: "Find the error: 'Their going to the store to buy their own supplies.'",
      options: ["'Their' (1st)", "'going'", "'store'", "'their' (2nd)"],
      correctIndex: 0,
      explanation: "The first 'Their' should be 'They're' (they are going), a common homophone error.",
    },
    {
      question: "Two lists should be identical. Which item differs? List A: Apple, Banana, Cherry, Date, Fig. List B: Apple, Banana, Cherry, Date, Grape.",
      options: ["Apple", "Banana", "Cherry", "5th item"],
      correctIndex: 3,
      explanation: "List A ends in 'Fig' while List B ends in 'Grape' — the 5th items don't match.",
    },
    {
      question: "Which total is calculated incorrectly? 12+8=20, 15+9=24, 7+13=20, 6+6=13",
      options: ["12+8=20", "15+9=24", "7+13=20", "6+6=13"],
      correctIndex: 3,
      explanation: "6+6 equals 12, not 13 — the other three sums are correct.",
    },
    {
      question: "Which date is formatted inconsistently with the others: 03/14/2024, 07/22/2024, 2024/11/05, 09/30/2024?",
      options: ["03/14/2024", "07/22/2024", "2024/11/05", "09/30/2024"],
      correctIndex: 2,
      explanation: "The third date uses YYYY/MM/DD order while the rest use MM/DD/YYYY.",
    },
    {
      question: "Find the duplicate ID in this list: A104, B220, C331, A104, D442.",
      options: ["A104", "B220", "C331", "D442"],
      correctIndex: 0,
      explanation: "'A104' appears twice in the list, which shouldn't happen if IDs are meant to be unique.",
    },
    {
      question: "Which price doesn't match its receipt line: 'Coffee $4.50', 'Sandwich $8.25', 'Total: $12.75'? Given the total is the sum of items shown, is it correct?",
      options: ["Yes, it's correct", "No, it should be $12.75", "No, it should be $13.75", "No, it should be $11.75"],
      correctIndex: 0,
      explanation: "$4.50 + $8.25 = $12.75, which matches the stated total exactly.",
    },
    {
      question: "Spot the subtle typo: 'Please ensure the the report is submitted by Friday.'",
      options: ["ensure", "the the", "report", "submitted"],
      correctIndex: 1,
      explanation: "The word 'the' is accidentally repeated twice in a row.",
    },
  ],
};

export function AttentionToDetailTest() {
  return <MCQQuiz config={config} />;
}
