"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "optimism-test",
  intro:
    "Answer 10 short statements about how you typically view the future and uncertain situations. Answer honestly for the most accurate result.",
  scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
  questions: [
    { text: "In uncertain times, I usually expect the best." },
    { text: "I generally look on the bright side of things." },
    { text: "I'm always optimistic about my future." },
    { text: "Overall, I expect more good things to happen to me than bad." },
    { text: "I trust that things will generally work out for me." },
    { text: "If something can go wrong for me, it usually will.", reverse: true },
    { text: "I rarely count on good things happening to me.", reverse: true },
    { text: "I hardly ever expect things to go my way.", reverse: true },
    { text: "I find it hard to believe positive outcomes when facing uncertainty.", reverse: true },
    { text: "I tend to assume the worst-case scenario before anything else.", reverse: true },
  ],
  bands: [
    {
      max: 30,
      tone: "gold",
      label: "Pessimistic Outlook",
      description: "Your answers suggest you tend to expect negative outcomes more readily than positive ones, especially in uncertain situations.",
    },
    {
      max: 55,
      tone: "primary",
      label: "Balanced Outlook",
      description: "You reported a realistic mix — hopeful in some situations, cautious in others, without leaning strongly either way.",
    },
    {
      max: 78,
      tone: "primary",
      label: "Optimistic Outlook",
      description: "Your answers suggest you generally expect good outcomes and approach uncertainty with hope.",
    },
    {
      max: 100,
      tone: "success",
      label: "Highly Optimistic",
      description: "Your answers suggest a consistently hopeful, positive outlook on the future, even in uncertain situations.",
    },
  ],
  resultHeading: "Optimism Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general psychological concept of dispositional optimism (e.g., the Life Orientation Test). It is not a validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function OptimismTest() {
  return <LikertScreener config={config} />;
}
