"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "cognitive-ability-test",
  intro:
    "Answer 12 mixed questions covering logic, numerical reasoning, and verbal comprehension to get a general cognitive ability score.",
  resultHeading: "Cognitive Ability Result",
  disclaimer: "This is an original, entertainment-oriented cognitive ability quiz, similar in spirit to pre-employment screening tests. It is not a validated psychometric assessment.",
  questions: [
    { question: "If a shirt costs $25 after a 50% discount, what was the original price?", options: ["$37.50", "$50", "$45", "$60"], correctIndex: 1, explanation: "$25 is half the original price: $25 × 2 = $50." },
    { question: "Which word means the opposite of 'Abundant'?", options: ["Plentiful", "Scarce", "Generous", "Ample"], correctIndex: 1, explanation: "Scarce means lacking in quantity, the opposite of abundant." },
    { question: "A train travels 180 miles in 3 hours. At the same rate, how far does it travel in 5 hours?", options: ["250 miles", "300 miles", "280 miles", "270 miles"], correctIndex: 1, explanation: "Rate is 60 mph; 60 × 5 = 300 miles." },
    { question: "Complete the sequence: 1, 4, 9, 16, ?", options: ["20", "23", "25", "24"], correctIndex: 2, explanation: "These are perfect squares (1²,2²,3²,4²,5²): 5² = 25." },
    { question: "Which of the following is a synonym for 'Meticulous'?", options: ["Careless", "Thorough", "Fast", "Vague"], correctIndex: 1, explanation: "Meticulous means showing great attention to detail, which is thorough." },
    { question: "If 5 machines make 5 widgets in 5 minutes, how long would 100 machines take to make 100 widgets?", options: ["100 minutes", "20 minutes", "5 minutes", "1 minute"], correctIndex: 2, explanation: "Each machine makes 1 widget in 5 minutes regardless of how many machines run in parallel, so 100 machines still take 5 minutes." },
    { question: "Which number is the odd one out: 8, 27, 64, 90, 125?", options: ["27", "64", "90", "125"], correctIndex: 2, explanation: "8, 27, 64, and 125 are all perfect cubes (2³,3³,4³,5³); 90 is not." },
    { question: "A worker earns $18/hour and works 7.5 hours. How much do they earn that day?", options: ["$125", "$130", "$135", "$140"], correctIndex: 2, explanation: "18 × 7.5 = 135." },
    { question: "Choose the best word to complete: 'The evidence was ___ , leaving no room for doubt.'", options: ["Ambiguous", "Conclusive", "Vague", "Questionable"], correctIndex: 1, explanation: "'Conclusive' fits the context of leaving no doubt." },
    { question: "If today is the 3rd Tuesday of the month, what day of the week was exactly 14 days ago?", options: ["Monday", "Tuesday", "Wednesday", "Sunday"], correctIndex: 1, explanation: "14 days is exactly two weeks, so it falls on the same day of the week: Tuesday." },
    { question: "A repeating number sequence follows the pattern 4, 5, 6, 5, 4, 5, 6, 5, ? — what comes next?", options: ["4", "5", "6", "7"], correctIndex: 0, explanation: "The four-term cycle (4, 5, 6, 5) repeats, so after the second '5' the cycle restarts at 4." },
    { question: "A recipe requires 2 cups of flour for 12 cookies. How many cups are needed for 30 cookies?", options: ["4 cups", "5 cups", "4.5 cups", "6 cups"], correctIndex: 1, explanation: "2 cups ÷ 12 cookies × 30 cookies = 5 cups." },
  ],
};

export function CognitiveAbilityTest() {
  return <MCQQuiz config={config} />;
}
