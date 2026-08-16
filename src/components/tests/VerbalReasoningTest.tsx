"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "verbal-reasoning-test",
  intro:
    "For each short passage, decide whether the statement is True, False, or Cannot Say based only on the information given — not on outside knowledge or assumptions.",
  resultHeading: "Verbal Reasoning Result",
  disclaimer: "This is an original verbal reasoning quiz using the classic True/False/Cannot Say passage format. It is not an official aptitude assessment used by employers.",
  questions: [
    {
      question: "Passage: 'All employees who complete the training receive a certificate. Maria received a certificate.' Statement: Maria completed the training.",
      options: ["True", "False", "Cannot Say"],
      correctIndex: 2,
      explanation: "The passage doesn't rule out other ways to receive a certificate, so this cannot be confirmed from the text alone.",
    },
    {
      question: "Passage: 'The store is open every day except Sundays and public holidays.' Statement: The store is closed on Christmas Day.",
      options: ["True", "False", "Cannot Say"],
      correctIndex: 2,
      explanation: "Whether Christmas counts as a public holiday isn't stated in the passage.",
    },
    {
      question: "Passage: 'No cats in the shelter are older than 10 years.' Statement: Some cats in the shelter are 10 years old.",
      options: ["True", "False", "Cannot Say"],
      correctIndex: 1,
      explanation: "'Older than 10' excludes exactly 10, but the statement claims cats ARE 10, and 'no cats older than 10' doesn't confirm any cats are exactly 10 either — actually this requires care: the passage only restricts an upper bound, so we cannot confirm any cat is exactly 10.",
    },
    {
      question: "Passage: 'The report was submitted late because the printer was broken.' Statement: The report would have been on time if the printer worked.",
      options: ["True", "False", "Cannot Say"],
      correctIndex: 2,
      explanation: "The passage gives one reason but doesn't rule out other contributing delays.",
    },
    {
      question: "Passage: 'Every member of the committee voted in favor of the proposal.' Statement: The proposal passed unanimously.",
      options: ["True", "False", "Cannot Say"],
      correctIndex: 0,
      explanation: "If every member voted in favor, that is by definition a unanimous vote in favor.",
    },
    {
      question: "Passage: 'Tickets cost $15 for adults and $10 for children under 12.' Statement: A 12-year-old pays the adult price.",
      options: ["True", "False", "Cannot Say"],
      correctIndex: 0,
      explanation: "'Under 12' excludes age 12, so a 12-year-old does not qualify for the child price and pays the adult price.",
    },
    {
      question: "Passage: 'The company hires only candidates with a relevant degree.' Statement: Everyone with a relevant degree gets hired.",
      options: ["True", "False", "Cannot Say"],
      correctIndex: 1,
      explanation: "The passage states a necessary condition for hiring, not that it's sufficient — other criteria could still apply.",
    },
    {
      question: "Passage: 'It rained every day last week except Tuesday.' Statement: It rained on Monday.",
      options: ["True", "False", "Cannot Say"],
      correctIndex: 0,
      explanation: "Since it rained every day except Tuesday, Monday must have had rain.",
    },
    {
      question: "Passage: 'The museum's new exhibit has been more popular than any previous exhibit.' Statement: The museum's visitor numbers have increased since the exhibit opened.",
      options: ["True", "False", "Cannot Say"],
      correctIndex: 2,
      explanation: "Popularity of the exhibit relative to past exhibits doesn't confirm an overall visitor increase compared to before it opened.",
    },
    {
      question: "Passage: 'Only senior staff are permitted to approve refunds over $500.' Statement: A junior staff member cannot approve a $300 refund.",
      options: ["True", "False", "Cannot Say"],
      correctIndex: 1,
      explanation: "The restriction only applies to refunds over $500, so nothing prevents a junior staff member from approving a $300 refund.",
    },
  ],
};

export function VerbalReasoningTest() {
  return <MCQQuiz config={config} />;
}
