"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "general-aptitude-test",
  intro:
    "Answer 12 broad questions spanning math, logic, verbal skills, and general reasoning — a well-rounded aptitude check.",
  resultHeading: "General Aptitude Result",
  disclaimer: "This is an original general aptitude quiz for entertainment and self-assessment purposes. It is not an official aptitude assessment used by employers.",
  questions: [
    { question: "What is 12 × 13?", options: ["144", "156", "169", "132"], correctIndex: 1, explanation: "12 × 13 = 156." },
    { question: "Choose the correctly spelled word:", options: ["Recieve", "Receive", "Receve", "Receeve"], correctIndex: 1, explanation: "'Receive' follows the 'i before e except after c' rule correctly." },
    { question: "A car uses 6 liters of fuel per 100km. How much fuel is needed for 350km?", options: ["18 liters", "21 liters", "24 liters", "20 liters"], correctIndex: 1, explanation: "6 × 3.5 = 21 liters." },
    { question: "Which word is closest in meaning to 'Reluctant'?", options: ["Eager", "Unwilling", "Confident", "Curious"], correctIndex: 1, explanation: "Reluctant means unwilling or hesitant." },
    { question: "If 3x = 21, what is the value of x?", options: ["6", "7", "8", "9"], correctIndex: 1, explanation: "21 ÷ 3 = 7." },
    { question: "Which of these is NOT a prime number?", options: ["17", "19", "21", "23"], correctIndex: 2, explanation: "21 = 3 × 7, so it is not prime." },
    { question: "Complete the analogy: Pen is to Write as Scissors is to:", options: ["Sharp", "Cut", "Paper", "Metal"], correctIndex: 1, explanation: "A pen is used to write, just as scissors are used to cut." },
    { question: "How many minutes are there in 3.5 hours?", options: ["180", "200", "210", "215"], correctIndex: 2, explanation: "3.5 × 60 = 210 minutes." },
    { question: "Which sentence is grammatically correct?", options: ["She don't like coffee.", "She doesn't likes coffee.", "She doesn't like coffee.", "She not like coffee."], correctIndex: 2, explanation: "'She doesn't like coffee' correctly uses the third-person singular negative form." },
    { question: "A rectangular garden is 8m long and 5m wide. What is its area?", options: ["13 m²", "26 m²", "40 m²", "45 m²"], correctIndex: 2, explanation: "Area = length × width = 8 × 5 = 40 m²." },
    { question: "Which number continues the pattern: 100, 90, 81, 73, ?", options: ["66", "65", "64", "68"], correctIndex: 0, explanation: "Differences decrease by 1 each step (-10,-9,-8,-7): 73-7=66." },
    { question: "Choose the word that does NOT belong: Sprint, Jog, Walk, Whisper", options: ["Sprint", "Jog", "Walk", "Whisper"], correctIndex: 3, explanation: "Whisper relates to speaking, while the others describe types of movement/pace." },
  ],
};

export function GeneralAptitudeTest() {
  return <MCQQuiz config={config} />;
}
