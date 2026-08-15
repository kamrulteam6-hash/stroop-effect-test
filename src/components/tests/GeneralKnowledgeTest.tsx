"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "general-knowledge-test",
  intro: "Answer 12 multiple-choice trivia questions spanning geography, science, history, and culture.",
  resultHeading: "General Knowledge Result",
  disclaimer: "This is an original trivia quiz covering common general-knowledge topics. It is not an IQ test or a measure of overall intelligence.",
  questions: [
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Neptune"], correctIndex: 2 },
    { question: "Which ocean is the largest by area?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctIndex: 3 },
    { question: "Who wrote the play 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correctIndex: 1 },
    { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correctIndex: 2 },
    { question: "Which country is home to the Great Barrier Reef?", options: ["Brazil", "Australia", "Thailand", "Mexico"], correctIndex: 1 },
    { question: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], correctIndex: 2 },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], correctIndex: 3 },
    { question: "Which gas do plants primarily absorb from the atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], correctIndex: 1 },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correctIndex: 2 },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correctIndex: 2 },
    { question: "Which organ in the human body produces insulin?", options: ["Liver", "Pancreas", "Kidney", "Spleen"], correctIndex: 1 },
    { question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correctIndex: 2 },
  ],
};

export function GeneralKnowledgeTest() {
  return <MCQQuiz config={config} />;
}
