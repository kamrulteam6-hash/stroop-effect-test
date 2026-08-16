"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "resilience-test",
  intro:
    "Answer 10 short statements about how you typically respond to setbacks and stress. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I'm able to bounce back fairly quickly after a difficult setback." },
    { text: "I find a way to keep going even when things feel overwhelming." },
    { text: "I stay hopeful about the future even during hard times." },
    { text: "I can adapt my plans when circumstances suddenly change." },
    { text: "I learn something useful from most of my failures." },
    { text: "I feel stuck and unable to move forward after a setback.", reverse: true },
    { text: "Stressful situations leave me feeling overwhelmed for a long time.", reverse: true },
    { text: "I struggle to see a way forward when plans fall apart.", reverse: true },
    { text: "I dwell on difficulties longer than feels productive.", reverse: true },
    { text: "Setbacks make me want to give up on my goals entirely.", reverse: true },
  ],
  bands: [
    {
      max: 30,
      tone: "danger",
      label: "Developing Resilience",
      description: "Your answers suggest setbacks currently feel especially hard to recover from. Building small coping strategies and support systems can help strengthen this over time.",
    },
    {
      max: 55,
      tone: "gold",
      label: "Moderate Resilience",
      description: "You reported a mixed pattern — you recover from some setbacks well, while others feel harder to move past.",
    },
    {
      max: 78,
      tone: "primary",
      label: "Solid Resilience",
      description: "Your answers suggest a generally healthy ability to adapt and recover after difficulties.",
    },
    {
      max: 100,
      tone: "success",
      label: "High Resilience",
      description: "Your answers suggest a strong, consistent ability to bounce back from setbacks and stay adaptable under pressure.",
    },
  ],
  resultHeading: "Resilience Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general psychological concept of resilience. It is not a validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function ResilienceTest() {
  return <LikertScreener config={config} />;
}
