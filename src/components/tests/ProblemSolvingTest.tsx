"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "problem-solving-test",
  intro: "Answer 10 short logic and brain-teaser puzzles. Take your time — this is about reasoning, not speed.",
  resultHeading: "Problem Solving Result",
  disclaimer: "This is an original set of logic and lateral-thinking puzzles. It is not a validated intelligence or aptitude test.",
  questions: [
    { question: "A farmer has 17 sheep. All but 9 die. How many are left?", options: ["8", "9", "17", "0"], correctIndex: 1, explanation: "'All but 9 die' means 9 survive." },
    { question: "If you have a 3-liter jug and a 5-liter jug, how can you measure exactly 4 liters?", options: ["Fill the 3L, pour into 5L, refill 3L, pour into 5L until full, remainder is 1L", "Fill the 5L, pour into 3L, empty 3L, pour remaining 2L into 3L, refill 5L, pour into 3L until full — 4L remains in the 5L", "Fill both and combine", "It's impossible"], correctIndex: 1 },
    { question: "A clock shows 3:15. What is the angle between the hour and minute hands?", options: ["0°", "7.5°", "15°", "30°"], correctIndex: 1, explanation: "At 3:15 the hour hand has moved a quarter of the way from 3 to 4." },
    { question: "You have two ropes that each take exactly 1 hour to burn, but burn unevenly. How do you measure 45 minutes?", options: ["Burn one rope fully", "Light both ends of one rope and one end of the other simultaneously; when the first finishes, light the other end of the second", "Cut a rope in half", "It cannot be done"], correctIndex: 1 },
    { question: "Which number should come next: 2, 6, 12, 20, 30, ?", options: ["36", "40", "42", "44"], correctIndex: 2, explanation: "Differences increase by 2 each time: +4, +6, +8, +10, +12." },
    { question: "A man is looking at a photo. Someone asks who it is. He says, 'Brothers and sisters, I have none. But this man's father is my father's son.' Who is in the photo?", options: ["His father", "Himself", "His son", "His cousin"], correctIndex: 2, explanation: "'My father's son' with no siblings is himself, so the photo shows his son." },
    { question: "Three boxes are labeled Apples, Oranges, and Mixed — but all labels are wrong. You may pick one fruit from one box to figure out the correct labels. Which box should you pick from?", options: ["The one labeled Apples", "The one labeled Oranges", "The one labeled Mixed", "It doesn't matter"], correctIndex: 2, explanation: "The 'Mixed' box must actually be all one fruit since every label is wrong." },
    { question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?", options: ["100 minutes", "20 minutes", "5 minutes", "1 minute"], correctIndex: 2, explanation: "Each machine makes 1 widget in 5 minutes, regardless of how many machines run in parallel." },
    { question: "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?", options: ["$0.10", "$0.05", "$1.00", "$0.15"], correctIndex: 1, explanation: "If the ball is $0.05, the bat is $1.05, totaling $1.10." },
    { question: "What comes next in the pattern: J, F, M, A, M, J, ?", options: ["A", "J", "S", "M"], correctIndex: 1, explanation: "These are the first letters of the months: January...June, so next is July." },
  ],
};

export function ProblemSolvingTest() {
  return <MCQQuiz config={config} />;
}
