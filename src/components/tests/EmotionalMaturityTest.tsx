"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "emotional-maturity-test",
  intro:
    "Answer 10 short statements about how you typically handle emotional situations and personal responsibility. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I can acknowledge when I'm wrong without becoming defensive." },
    { text: "I take responsibility for my mistakes instead of blaming others." },
    { text: "I can stay calm and think clearly during a disagreement." },
    { text: "I consider how my actions affect other people before I act." },
    { text: "I can sit with an uncomfortable emotion without immediately needing to react." },
    { text: "I hold grudges long after a conflict has been resolved.", reverse: true },
    { text: "I react impulsively when I feel criticized.", reverse: true },
    { text: "I blame external circumstances rather than reflecting on my own role in a problem.", reverse: true },
    { text: "I struggle to see a situation from another person's perspective.", reverse: true },
    { text: "My mood swings affect how I treat the people around me.", reverse: true },
  ],
  bands: [
    {
      max: 30,
      tone: "gold",
      label: "Developing Emotional Maturity",
      description: "Your answers suggest room to grow in staying composed and taking ownership during emotional situations — a skill everyone continues developing.",
    },
    {
      max: 55,
      tone: "primary",
      label: "Moderate Emotional Maturity",
      description: "You reported a mixed pattern — steady in some situations, more reactive in others.",
    },
    {
      max: 78,
      tone: "success",
      label: "Strong Emotional Maturity",
      description: "You reported a generally strong ability to stay composed, take responsibility, and consider others during emotional situations.",
    },
    {
      max: 100,
      tone: "success",
      label: "Very Strong Emotional Maturity",
      description: "You reported consistently high emotional composure, accountability, and perspective-taking under pressure.",
    },
  ],
  resultHeading: "Emotional Maturity Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general concept of emotional maturity (composure, accountability, and perspective-taking in emotional situations). It is not a validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function EmotionalMaturityTest() {
  return <LikertScreener config={config} />;
}
