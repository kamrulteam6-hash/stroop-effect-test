"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "perfectionism-test",
  intro:
    "Answer 10 short statements about your standards and self-expectations. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I set extremely high standards for myself, even when it's not strictly necessary." },
    { text: "I feel intense frustration when I make even small mistakes." },
    { text: "I redo work repeatedly until it feels flawless before I'm willing to submit it." },
    { text: "I judge my self-worth heavily based on how well I perform." },
    { text: "I procrastinate on tasks because I'm afraid the result won't be good enough." },
    { text: "I can accept 'good enough' work when the situation calls for it.", reverse: true },
    { text: "I feel comfortable making small mistakes without much distress.", reverse: true },
    { text: "I can celebrate my accomplishments without immediately focusing on flaws.", reverse: true },
    { text: "I finish tasks in reasonable time without excessive re-checking.", reverse: true },
    { text: "I forgive myself relatively quickly after falling short of a goal.", reverse: true },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Perfectionism",
      description: "Your answers suggest a relatively relaxed relationship with mistakes and imperfect results, without much self-imposed pressure.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Moderate Perfectionism",
      description: "You reported a healthy drive for high standards, balanced with some flexibility around mistakes and imperfect outcomes.",
    },
    {
      max: 75,
      tone: "gold",
      label: "High Perfectionism",
      description: "Your answers suggest strong self-imposed standards that may sometimes tip into excessive self-criticism or procrastination.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Very High Perfectionism",
      description: "Your answers suggest very intense self-expectations that may be creating significant stress, self-criticism, or avoidance around tasks.",
    },
  ],
  resultHeading: "Perfectionism Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general psychological concept of perfectionism. It is not a validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function PerfectionismTest() {
  return <LikertScreener config={config} />;
}
