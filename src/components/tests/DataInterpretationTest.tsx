"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "data-interpretation-test",
  intro:
    "Read each small data table or figure described below and answer the question using only the data given.",
  resultHeading: "Data Interpretation Result",
  disclaimer: "This is an original data interpretation quiz. It is not an official aptitude assessment used by employers.",
  questions: [
    {
      question: "Quarterly sales: Q1 $40,000, Q2 $55,000, Q3 $50,000, Q4 $65,000. What was the total annual sales?",
      options: ["$200,000", "$210,000", "$195,000", "$220,000"],
      correctIndex: 1,
      explanation: "40,000 + 55,000 + 50,000 + 65,000 = 210,000.",
    },
    {
      question: "Quarterly sales: Q1 $40,000, Q2 $52,000, Q3 $48,000, Q4 $70,000. Which quarter had the largest dollar increase from the previous quarter?",
      options: ["Q2", "Q3", "Q4", "No increase occurred"],
      correctIndex: 2,
      explanation: "Q2 rose $12,000 from Q1, Q3 fell $4,000, and Q4 rose $22,000 from Q3 — the largest increase.",
    },
    {
      question: "A survey of 200 people: 120 prefer tea, 60 prefer coffee, 20 prefer neither. What percentage prefer tea?",
      options: ["50%", "60%", "65%", "40%"],
      correctIndex: 1,
      explanation: "120 out of 200 is 60%.",
    },
    {
      question: "A class has 30 students. Test score distribution: 5 scored A, 12 scored B, 9 scored C, 4 scored D. What fraction scored either A or B?",
      options: ["1/3", "17/30", "1/2", "3/5"],
      correctIndex: 1,
      explanation: "5 + 12 = 17 students out of 30 scored A or B, giving 17/30.",
    },
    {
      question: "A bar chart shows monthly rainfall (mm): Jan 40, Feb 55, Mar 30, Apr 70. What is the average monthly rainfall over these four months?",
      options: ["48.75mm", "50mm", "45mm", "52.5mm"],
      correctIndex: 0,
      explanation: "(40+55+30+70) ÷ 4 = 195 ÷ 4 = 48.75mm.",
    },
    {
      question: "A company's expenses pie chart: Salaries 50%, Rent 20%, Marketing 15%, Other 15%. If total expenses are $400,000, how much was spent on Marketing?",
      options: ["$60,000", "$80,000", "$40,000", "$100,000"],
      correctIndex: 0,
      explanation: "15% of $400,000 = $60,000.",
    },
    {
      question: "Website visits grew from 10,000 in January to 15,000 in June. What was the percentage growth over that period?",
      options: ["33%", "50%", "150%", "40%"],
      correctIndex: 1,
      explanation: "Growth of 5,000 ÷ 10,000 = 50%.",
    },
    {
      question: "A table lists product ratings out of 5 from 4 reviewers: 4, 3, 5, 4. What is the median rating?",
      options: ["3.5", "4", "4.5", "3"],
      correctIndex: 1,
      explanation: "Sorted: 3, 4, 4, 5 — the median of an even count is the average of the two middle values: (4+4)/2 = 4.",
    },
    {
      question: "A line graph shows temperature rising steadily from 10°C at 6am to 22°C at 2pm. Assuming a constant rate, what was the approximate temperature at 10am?",
      options: ["14°C", "16°C", "18°C", "20°C"],
      correctIndex: 1,
      explanation: "10am is halfway through the 8-hour window (6am–2pm), so temperature is roughly halfway between 10°C and 22°C, which is 16°C.",
    },
    {
      question: "Two products' monthly sales: Product A steady at 100 units/month; Product B starts at 40 and grows by 20 units each month. In which month does Product B first exceed Product A?",
      options: ["Month 3", "Month 4", "Month 5", "Month 6"],
      correctIndex: 2,
      explanation: "Product B: Month1=40, Month2=60, Month3=80, Month4=100 (tied, not exceeding), Month5=120, which is the first month it strictly exceeds A's 100.",
    },
  ],
};

export function DataInterpretationTest() {
  return <MCQQuiz config={config} />;
}
