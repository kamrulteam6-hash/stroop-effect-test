"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "number-series-test",
  intro:
    "Find the pattern behind each number sequence and choose the number that comes next.",
  resultHeading: "Number Series Result",
  disclaimer: "This is an original number series quiz. It is not an official aptitude assessment used by employers.",
  questions: [
    { question: "2, 5, 8, 11, ?", options: ["13", "14", "15", "12"], correctIndex: 1, explanation: "Each term adds 3: 11+3=14." },
    { question: "1, 2, 4, 8, 16, ?", options: ["24", "30", "32", "28"], correctIndex: 2, explanation: "Each term doubles: 16×2=32." },
    { question: "3, 6, 11, 18, 27, ?", options: ["36", "38", "40", "34"], correctIndex: 1, explanation: "Differences increase by 2 each time (3,5,7,9,11): 27+11=38." },
    { question: "100, 50, 25, 12.5, ?", options: ["6.25", "5", "10", "7.5"], correctIndex: 0, explanation: "Each term halves: 12.5÷2=6.25." },
    { question: "1, 1, 2, 3, 5, 8, ?", options: ["11", "12", "13", "10"], correctIndex: 2, explanation: "This is the Fibonacci sequence, where each term is the sum of the two before it: 5+8=13." },
    { question: "5, 10, 20, 35, 55, ?", options: ["75", "80", "85", "70"], correctIndex: 1, explanation: "Differences increase by 5 each step (5,10,15,20,25): 55+25=80." },
    { question: "2, 6, 18, 54, ?", options: ["108", "144", "162", "216"], correctIndex: 2, explanation: "Each term multiplies by 3: 54×3=162." },
    { question: "81, 27, 9, 3, ?", options: ["1", "0", "2", "0.5"], correctIndex: 0, explanation: "Each term divides by 3: 3÷3=1." },
    { question: "4, 9, 16, 25, ?", options: ["30", "32", "36", "34"], correctIndex: 2, explanation: "These are perfect squares (2²,3²,4²,5²,6²): 6²=36." },
    { question: "7, 14, 12, 24, 22, 44, ?", options: ["42", "88", "46", "40"], correctIndex: 0, explanation: "The pattern alternates ×2 and −2: 44−2=42." },
    { question: "10, 9, 11, 10, 12, 11, ?", options: ["10", "13", "12", "14"], correctIndex: 1, explanation: "The pattern alternates −1 and +2 (10,-1→9,+2→11,-1→10,+2→12,-1→11,+2→13): 11+2=13." },
    { question: "2, 3, 5, 7, 11, 13, ?", options: ["15", "16", "17", "14"], correctIndex: 2, explanation: "These are consecutive prime numbers; the next prime after 13 is 17." },
  ],
};

export function NumberSeriesTest() {
  return <MCQQuiz config={config} />;
}
