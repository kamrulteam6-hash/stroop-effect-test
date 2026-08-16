"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "letter-series-test",
  intro:
    "Find the pattern behind each letter sequence and choose the letter or letters that come next.",
  resultHeading: "Letter Series Result",
  disclaimer: "This is an original letter series quiz. It is not an official aptitude assessment used by employers.",
  questions: [
    { question: "A, C, E, G, ?", options: ["H", "I", "J", "F"], correctIndex: 1, explanation: "The pattern skips one letter each time: after G, skip H, land on I." },
    { question: "Z, Y, X, W, ?", options: ["U", "V", "T", "S"], correctIndex: 1, explanation: "The sequence moves backward through the alphabet one letter at a time: W→V." },
    { question: "B, D, F, H, ?", options: ["I", "J", "K", "L"], correctIndex: 1, explanation: "Each letter skips one (steps of 2): H→J." },
    { question: "A, B, D, G, K, ?", options: ["N", "O", "P", "M"], correctIndex: 2, explanation: "The gap between letters increases by 1 each time (+1,+2,+3,+4,+5): K+5=P." },
    { question: "M, N, O, N, O, P, O, P, Q, ?", options: ["P", "Q", "R", "N"], correctIndex: 0, explanation: "The pattern is three overlapping runs of three consecutive letters; following the established rhythm, the next letter is P." },
    { question: "AZ, BY, CX, DW, ?", options: ["EV", "EU", "FV", "EW"], correctIndex: 0, explanation: "The first letter advances forward (A,B,C,D,E) while the second letter moves backward (Z,Y,X,W,V), giving EV." },
    { question: "C, F, I, L, ?", options: ["M", "N", "O", "P"], correctIndex: 2, explanation: "Each letter skips two (steps of 3): L+3=O." },
    { question: "K, J, L, I, M, H, ?", options: ["G", "N", "O", "F"], correctIndex: 1, explanation: "The pattern alternates two interleaved sequences: one climbing (K,L,M,N…) and one descending (J,I,H,G…); the next term continues the climbing sequence: N." },
    { question: "A, D, G, J, M, ?", options: ["N", "O", "P", "Q"], correctIndex: 2, explanation: "Each letter skips two (steps of 3): M+3=P." },
    { question: "X, V, T, R, ?", options: ["Q", "P", "S", "O"], correctIndex: 1, explanation: "The sequence moves backward two letters at a time (steps of -2): R-2=P." },
  ],
};

export function LetterSeriesTest() {
  return <MCQQuiz config={config} />;
}
