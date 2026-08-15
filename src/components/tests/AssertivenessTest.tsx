"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "assertiveness-test",
  intro:
    "Answer 10 short statements about how you typically express your needs and opinions to other people. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I can say no to a request without feeling excessively guilty." },
    { text: "I speak up when something is bothering me instead of staying silent." },
    { text: "I can share a differing opinion in a group without much hesitation." },
    { text: "I ask directly for what I need rather than hinting at it." },
    { text: "I can give constructive criticism without avoiding the conversation." },
    { text: "I avoid conflict even when something really needs to be said.", reverse: true },
    { text: "I agree with things I don't actually agree with, just to keep the peace.", reverse: true },
    { text: "I let my needs go unmet rather than risk upsetting someone else.", reverse: true },
    { text: "I stay quiet in meetings even when I have something useful to add.", reverse: true },
    { text: "I struggle to set boundaries with people who push past them.", reverse: true },
  ],
  bands: [
    {
      max: 30,
      tone: "danger",
      label: "Low Assertiveness",
      description:
        "Your answers suggest you often hold back your needs and opinions to avoid conflict. Practicing small, direct requests can help build this skill over time.",
    },
    {
      max: 55,
      tone: "gold",
      label: "Developing Assertiveness",
      description: "You reported a mixed pattern — assertive in some situations, more passive in others. This is very common and improvable with practice.",
    },
    {
      max: 78,
      tone: "primary",
      label: "Generally Assertive",
      description: "You reported a generally healthy ability to express your needs and opinions clearly and respectfully.",
    },
    {
      max: 100,
      tone: "success",
      label: "Highly Assertive",
      description: "You reported a strong, consistent ability to communicate your needs and opinions directly and confidently.",
    },
  ],
  resultHeading: "Assertiveness Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general concept of assertiveness (expressing needs and opinions directly while respecting others). It is not a validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function AssertivenessTest() {
  return <LikertScreener config={config} />;
}
