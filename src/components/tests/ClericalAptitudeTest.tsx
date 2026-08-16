"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "clerical-aptitude-test",
  intro:
    "Answer 12 questions covering filing order, data checking, basic office math, and record organization — core clerical office skills.",
  resultHeading: "Clerical Aptitude Result",
  disclaimer: "This is an original clerical aptitude quiz. It is not an official aptitude assessment used by employers.",
  questions: [
    {
      question: "Which of these names comes first in standard alphabetical filing order?",
      options: ["McDonald, J.", "MacDonald, J.", "Madison, J.", "McDonnell, J."],
      correctIndex: 1,
      explanation: "In strict letter-by-letter alphabetical order, 'MacDonald' precedes 'Madison', 'McDonald', and 'McDonnell'.",
    },
    {
      question: "Files are organized by date, oldest first. Where does an invoice dated 03/15/2023 belong among 01/10/2023, 05/22/2023, 02/28/2023?",
      options: ["Before 01/10/2023", "Between 02/28/2023 and 05/22/2023", "After 05/22/2023", "Between 01/10/2023 and 02/28/2023"],
      correctIndex: 1,
      explanation: "March 15 falls chronologically after February 28 and before May 22.",
    },
    {
      question: "An office orders 8 boxes of paper at $32.50 each. What is the total cost?",
      options: ["$240.00", "$260.00", "$250.00", "$270.00"],
      correctIndex: 1,
      explanation: "8 × 32.50 = 260.00.",
    },
    {
      question: "Which filing code follows correctly after 'INV-2024-0456' in numerical order?",
      options: ["INV-2024-0455", "INV-2024-0457", "INV-2024-0460", "INV-2023-0457"],
      correctIndex: 1,
      explanation: "The next sequential number after 0456 is 0457.",
    },
    {
      question: "A meeting starts at 2:15 PM and lasts 105 minutes. What time does it end?",
      options: ["3:45 PM", "4:00 PM", "3:50 PM", "4:15 PM"],
      correctIndex: 1,
      explanation: "105 minutes = 1 hour 45 minutes; 2:15 PM + 1:45 = 4:00 PM.",
    },
    {
      question: "Which of these is the correctly formatted business memo subject line?",
      options: ["re: q3 budget review", "RE: Q3 Budget Review", "Re Q3. Budget, Review", "RE Q3 BUDGET review;"],
      correctIndex: 1,
      explanation: "'RE: Q3 Budget Review' uses standard capitalization and punctuation for a memo subject line.",
    },
    {
      question: "A supply closet has 240 pens to be split evenly among 15 desks. How many pens per desk?",
      options: ["14", "16", "18", "20"],
      correctIndex: 1,
      explanation: "240 ÷ 15 = 16.",
    },
    {
      question: "Which record should be filed FIRST under a 'last name, first name' alphabetical system: O'Brien, Sean; Ortiz, Maria; O'Neil, Kevin?",
      options: ["O'Brien, Sean", "Ortiz, Maria", "O'Neil, Kevin", "They are already in order"],
      correctIndex: 0,
      explanation: "Comparing letter by letter, 'O'Brien' comes before 'O'Neil' and 'Ortiz' alphabetically.",
    },
    {
      question: "A document must be routed to the 'Accounts Payable' department. Which abbreviation is most standard on an office routing slip?",
      options: ["AP", "ACP", "APD", "ACPY"],
      correctIndex: 0,
      explanation: "'AP' is the standard, widely recognized abbreviation for Accounts Payable.",
    },
    {
      question: "A spreadsheet has 3,600 rows split evenly across 12 report tabs. How many rows per tab?",
      options: ["250", "280", "300", "320"],
      correctIndex: 2,
      explanation: "3,600 ÷ 12 = 300.",
    },
    {
      question: "Which task should typically be prioritized first in a busy inbox: a same-day deadline request from a manager, a newsletter, or a routine weekly report?",
      options: ["The same-day deadline request", "The newsletter", "The routine weekly report", "Whichever arrived first"],
      correctIndex: 0,
      explanation: "Urgency and deadline proximity typically outweigh non-time-sensitive items like newsletters or routine reports.",
    },
    {
      question: "A form requires entries in MM/DD/YYYY format. Which entry is correctly formatted?",
      options: ["2024-05-09", "09/05/2024", "05/09/2024", "May 9, 24"],
      correctIndex: 2,
      explanation: "05/09/2024 correctly follows the MM/DD/YYYY structure requested.",
    },
  ],
};

export function ClericalAptitudeTest() {
  return <MCQQuiz config={config} />;
}
