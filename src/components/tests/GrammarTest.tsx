"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "grammar-test",
  intro: "Answer 12 multiple-choice questions covering common English grammar rules, from easy to tricky.",
  resultHeading: "Grammar Result",
  disclaimer: "This is an original grammar quiz covering common English usage rules. It is not a certified proficiency exam.",
  questions: [
    { question: "Choose the correct sentence.", options: ["She don't like coffee.", "She doesn't like coffee.", "She not like coffee.", "She isn't likes coffee."], correctIndex: 1 },
    { question: "Which sentence uses the correct form of 'their/there/they're'?", options: ["Their going to the store.", "There going to the store.", "They're going to the store.", "Ther going to the store."], correctIndex: 2 },
    { question: "Pick the correctly punctuated sentence.", options: ["Its a beautiful day.", "It's a beautiful day.", "Its' a beautiful day.", "Its a' beautiful day."], correctIndex: 1 },
    { question: "Choose the correct past tense of 'go'.", options: ["goed", "went", "gone", "going"], correctIndex: 1, explanation: "'Go' is irregular — the simple past is 'went'." },
    { question: "Which sentence has correct subject-verb agreement?", options: ["The list of items are on the table.", "The list of items is on the table.", "The list of items were on the table.", "The list of items be on the table."], correctIndex: 1, explanation: "'List' (singular) is the subject, not 'items'." },
    { question: "Choose the correct comparative form.", options: ["This is more better than that.", "This is gooder than that.", "This is better than that.", "This is best than that."], correctIndex: 2 },
    { question: "Which sentence correctly uses an apostrophe for possession?", options: ["The dog's bone was buried.", "The dogs' bone was buried.", "The dogs bone was buried.", "The dog bone's was buried."], correctIndex: 0, explanation: "One dog, so the apostrophe goes before the 's'." },
    { question: "Choose the sentence with correct word order.", options: ["I have never seen such a beautiful sunset.", "I never have seen such a beautiful sunset.", "Never I have seen such a beautiful sunset.", "I have seen never such a beautiful sunset."], correctIndex: 0 },
    { question: "Which sentence correctly uses 'who' vs 'whom'?", options: ["Who did you give the book to?", "Whom did you give the book to?", "Who did you gave the book to?", "Whom you did give the book to?"], correctIndex: 1, explanation: "'Whom' is the object of the preposition 'to'." },
    { question: "Choose the correctly formed conditional sentence.", options: ["If I was you, I would go.", "If I were you, I would go.", "If I am you, I would go.", "If I be you, I would go."], correctIndex: 1, explanation: "Hypothetical conditionals use the subjunctive 'were'." },
    { question: "Which sentence avoids a dangling modifier?", options: ["Walking to the store, the rain started.", "Walking to the store, I got caught in the rain.", "The rain started, walking to the store.", "Walking to the store the rain caught me."], correctIndex: 1 },
    { question: "Choose the correctly punctuated sentence with a semicolon.", options: ["I like tea, however I prefer coffee.", "I like tea; however, I prefer coffee.", "I like tea however, I prefer coffee.", "I like tea; however I prefer, coffee."], correctIndex: 1 },
  ],
};

export function GrammarTest() {
  return <MCQQuiz config={config} />;
}
