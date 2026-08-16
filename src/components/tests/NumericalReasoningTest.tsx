"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "numerical-reasoning-test",
  intro: "Answer 12 multiple-choice numerical reasoning questions covering percentages, ratios, and averages.",
  resultHeading: "Numerical Reasoning Result",
  disclaimer: "This is an original numerical reasoning quiz. It is not an official aptitude assessment used by employers.",
  questions: [
    { question: "A jacket costs $80 after a 20% discount. What was the original price?", options: ["$96", "$100", "$104", "$90"], correctIndex: 1, explanation: "$80 is 80% of the original: 80 ÷ 0.8 = $100." },
    { question: "If 3 workers complete a job in 12 days, how many days would 6 workers take (same rate each)?", options: ["24", "6", "9", "18"], correctIndex: 1, explanation: "Double the workers, half the time: 12 ÷ 2 = 6." },
    { question: "What is 15% of 240?", options: ["24", "36", "32", "40"], correctIndex: 1 },
    { question: "A recipe uses flour and sugar in a 5:2 ratio. If you use 250g of flour, how much sugar do you need?", options: ["80g", "100g", "125g", "62.5g"], correctIndex: 1, explanation: "250 ÷ 5 = 50, so sugar = 50 × 2 = 100g." },
    { question: "The average of 5 numbers is 20. If one number is removed, the average of the remaining 4 is 18. What was the removed number?", options: ["24", "26", "28", "22"], correctIndex: 2, explanation: "Total was 100, remaining total is 72, so removed = 100 − 72 = 28." },
    { question: "A stock rises 10% then falls 10%. Compared to the original price, the stock is now:", options: ["Unchanged", "1% lower", "1% higher", "10% lower"], correctIndex: 1, explanation: "1.10 × 0.90 = 0.99, a 1% net decrease." },
    { question: "If a car travels 240 miles in 4 hours, what is its average speed?", options: ["50 mph", "60 mph", "70 mph", "45 mph"], correctIndex: 1 },
    { question: "A store marks up an item by 25% then offers a 20% discount on the marked-up price. Compared to the original price, the final price is:", options: ["Equal", "5% higher", "5% lower", "1% higher"], correctIndex: 0, explanation: "1.25 × 0.80 = 1.00, exactly equal to the original price." },
    { question: "A company's revenue grew from $200,000 to $250,000. What was the percentage increase?", options: ["20%", "25%", "30%", "22%"], correctIndex: 1, explanation: "Increase of 50,000 ÷ 200,000 = 25%." },
    { question: "If x + y = 20 and x − y = 4, what is x?", options: ["8", "10", "12", "16"], correctIndex: 2, explanation: "Adding the equations: 2x = 24, so x = 12." },
    { question: "A tank fills at 5 liters per minute and drains at 2 liters per minute simultaneously. How long to fill a 90-liter tank?", options: ["18 minutes", "30 minutes", "45 minutes", "15 minutes"], correctIndex: 1, explanation: "Net rate is 3 L/min, so 90 ÷ 3 = 30 minutes." },
    { question: "Which fraction is closest in value to 0.42?", options: ["2/5", "3/7", "5/12", "1/3"], correctIndex: 0, explanation: "2/5 = 0.40, closest to 0.42 among these options." },
  ],
};

export function NumericalReasoningTest() {
  return <MCQQuiz config={config} />;
}
