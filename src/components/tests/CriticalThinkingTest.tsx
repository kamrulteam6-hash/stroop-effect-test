"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "critical-thinking-test",
  intro:
    "Read each short argument or scenario and identify the strongest logical conclusion, flaw, or assumption.",
  resultHeading: "Critical Thinking Result",
  disclaimer: "This is an original critical thinking quiz. It is not an official aptitude assessment used by employers.",
  questions: [
    {
      question: "'Every time I wash my car, it rains the next day. So washing my car causes rain.' What is the flaw in this reasoning?",
      options: ["It confuses correlation with causation", "It uses invalid math", "It is actually correct reasoning", "It commits a circular argument"],
      correctIndex: 0,
      explanation: "A repeated coincidence doesn't establish that one event causes the other; this is a classic correlation-causation error.",
    },
    {
      question: "'All the successful people I know wake up at 5am. Therefore, waking up at 5am causes success.' What is the strongest criticism?",
      options: ["The sample is a small, non-representative group", "5am is too early", "Success is not measurable", "The claim is unfalsifiable"],
      correctIndex: 0,
      explanation: "Generalizing from a small personal sample to a universal causal claim ignores confounding factors and selection bias.",
    },
    {
      question: "A politician says: 'My opponent wants to cut the defense budget — clearly they don't care about national security.' This is an example of:",
      options: ["A straw man argument", "A valid deduction", "An appeal to authority", "A false dilemma"],
      correctIndex: 0,
      explanation: "The argument misrepresents the opponent's actual position (budget cuts) as an extreme, easier-to-attack claim (not caring about security).",
    },
    {
      question: "'You're either with us or against us.' This statement is an example of:",
      options: ["A false dilemma", "A sound syllogism", "An appeal to emotion", "A hasty generalization"],
      correctIndex: 0,
      explanation: "It presents only two options when other positions (neutral, partial agreement) are actually possible.",
    },
    {
      question: "An advertisement claims: '9 out of 10 dentists recommend our toothpaste.' What key information is missing to fully evaluate this claim?",
      options: ["How many dentists were actually surveyed and how they were selected", "The toothpaste's exact ingredients", "The price of the toothpaste", "The dentists' years of experience"],
      correctIndex: 0,
      explanation: "A small or cherry-picked sample of dentists could easily produce a misleading '9 out of 10' statistic.",
    },
    {
      question: "'If it rains, the ground gets wet. The ground is wet. Therefore, it rained.' What is the logical flaw here?",
      options: ["Affirming the consequent — other causes could wet the ground", "Denying the antecedent", "It's a perfectly valid deduction", "Circular reasoning"],
      correctIndex: 0,
      explanation: "The ground could be wet for other reasons (a sprinkler, a spill), so the conclusion doesn't necessarily follow.",
    },
    {
      question: "A study finds ice cream sales and drowning deaths both rise in summer. Which explanation best accounts for this without assuming ice cream causes drowning?",
      options: ["A third factor (hot weather) increases both swimming and ice cream sales", "Ice cream directly causes drowning", "Drowning causes people to buy ice cream", "The data must be fabricated"],
      correctIndex: 0,
      explanation: "A confounding variable — warm weather driving both more swimming and more ice cream purchases — explains the correlation without direct causation.",
    },
    {
      question: "'Thousands of people believe in astrology, so there must be something to it.' This reasoning relies on:",
      options: ["An appeal to popularity", "Solid statistical evidence", "A controlled experiment", "Deductive logic"],
      correctIndex: 0,
      explanation: "Popularity of a belief doesn't establish its truth — this is the appeal-to-popularity fallacy.",
    },
    {
      question: "A company reports record profits this quarter but doesn't mention that costs also rose sharply. This is an example of:",
      options: ["Selective reporting (cherry-picking favorable data)", "A statistically invalid sample", "A logical contradiction", "A false analogy"],
      correctIndex: 0,
      explanation: "Presenting only the favorable figure while omitting the offsetting cost increase paints an incomplete picture.",
    },
    {
      question: "'This new policy must be good because a respected celebrity endorsed it.' What is the weakness in this reasoning?",
      options: ["Celebrity status doesn't establish expertise in policy matters", "Celebrities are never trustworthy", "The policy is automatically false", "It's a valid appeal to authority"],
      correctIndex: 0,
      explanation: "This is an appeal to authority that misapplies fame in an unrelated domain as if it were relevant expertise.",
    },
  ],
};

export function CriticalThinkingTest() {
  return <MCQQuiz config={config} />;
}
