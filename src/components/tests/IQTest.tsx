"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "iq-test",
  intro:
    "Answer 15 questions spanning numerical, verbal, and pattern-based reasoning to get an overall performance score.",
  resultHeading: "IQ Test Result",
  disclaimer: "This is an original, entertainment-oriented IQ-style quiz. It does not produce a clinically valid IQ score and is not a substitute for a professionally administered intelligence test.",
  questions: [
    { question: "2, 4, 8, 16, ? — what comes next?", options: ["24", "32", "30", "20"], correctIndex: 1, explanation: "Each term doubles: 16 × 2 = 32." },
    { question: "Which word does not belong: Apple, Banana, Carrot, Mango?", options: ["Apple", "Banana", "Carrot", "Mango"], correctIndex: 2, explanation: "Carrot is a vegetable; the others are fruits." },
    { question: "If all Zips are Zaps, and all Zaps are Zops, are all Zips Zops?", options: ["Yes", "No", "Cannot be determined", "Only some"], correctIndex: 0, explanation: "This is a valid transitive syllogism: Zip→Zap→Zop means all Zips are Zops." },
    { question: "What number should replace the question mark? 5, 10, 20, 40, ?", options: ["60", "70", "80", "50"], correctIndex: 2, explanation: "Each term doubles: 40 × 2 = 80." },
    { question: "Book is to Reading as Fork is to:", options: ["Kitchen", "Eating", "Metal", "Spoon"], correctIndex: 1, explanation: "A book is used for reading, just as a fork is used for eating — matching function." },
    { question: "Which shape completes the pattern: Circle, Square, Triangle, Circle, Square, ?", options: ["Circle", "Square", "Triangle", "Pentagon"], correctIndex: 2, explanation: "The three-shape cycle (Circle, Square, Triangle) repeats." },
    { question: "A farmer has 17 sheep, and all but 9 die. How many are left?", options: ["8", "9", "17", "0"], correctIndex: 1, explanation: "'All but 9' means 9 survive, regardless of the starting number." },
    { question: "What is the missing number? 3, 6, 9, ?, 15", options: ["10", "11", "12", "13"], correctIndex: 2, explanation: "The sequence increases by 3 each step: 9 + 3 = 12." },
    { question: "Which word is the odd one out: Whisper, Shout, Mumble, Jump?", options: ["Whisper", "Shout", "Mumble", "Jump"], correctIndex: 3, explanation: "Jump is a physical action; the others all describe ways of speaking." },
    { question: "If today is Wednesday, what day will it be in 100 days?", options: ["Thursday", "Friday", "Saturday", "Sunday"], correctIndex: 1, explanation: "100 ÷ 7 leaves a remainder of 2, so count 2 days forward from Wednesday: Friday." },
    { question: "Complete the analogy: Hot is to Cold as Up is to:", options: ["High", "Down", "Sky", "Over"], correctIndex: 1, explanation: "Hot/Cold and Up/Down are both opposite pairs." },
    { question: "Which number does not belong: 3, 5, 7, 10, 11?", options: ["3", "7", "10", "11"], correctIndex: 2, explanation: "10 is the only even number; the rest are all odd/prime." },
    { question: "A is taller than B. C is shorter than B. Who is the shortest?", options: ["A", "B", "C", "Cannot be determined"], correctIndex: 2, explanation: "A > B > C, so C is the shortest." },
    { question: "What comes next in the pattern: A, C, E, G, ?", options: ["H", "I", "J", "F"], correctIndex: 1, explanation: "The pattern skips one letter each time (A, C, E, G, I)." },
    { question: "If you rearrange the letters 'CIFAIPC', you get the name of a:", options: ["Country", "Animal", "Ocean", "City"], correctIndex: 2, explanation: "CIFAIPC rearranges to PACIFIC, an ocean." },
  ],
};

export function IQTest() {
  return <MCQQuiz config={config} />;
}
