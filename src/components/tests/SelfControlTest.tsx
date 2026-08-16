"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "self-control-test",
  intro:
    "Answer 10 short statements about how well you resist temptation and stick to your goals. Answer honestly for the most accurate result.",
  scaleLabels: ["Not like me", "Slightly like me", "Somewhat like me", "Mostly like me", "Very much like me"],
  questions: [
    { text: "I'm good at resisting temptation when it conflicts with my goals." },
    { text: "I am able to work effectively toward long-term goals." },
    { text: "I say no to things I know aren't good for me, even when they're tempting." },
    { text: "People would describe me as having strong self-discipline." },
    { text: "I keep working on boring or unpleasant tasks until they're finished." },
    { text: "I do things that feel good in the moment even when I know they're bad for me.", reverse: true },
    { text: "I have trouble concentrating when there are more interesting things to do.", reverse: true },
    { text: "I get easily distracted from tasks I'm supposed to be focusing on.", reverse: true },
    { text: "I act on impulse without considering the consequences.", reverse: true },
    { text: "Pleasure and fun sometimes keep me from getting work done.", reverse: true },
  ],
  bands: [
    {
      max: 30,
      tone: "danger",
      label: "Developing Self-Control",
      description: "Your answers suggest impulses and short-term temptations often win out over long-term goals. Small, structured habits can help build this skill over time.",
    },
    {
      max: 55,
      tone: "gold",
      label: "Moderate Self-Control",
      description: "You reported a mixed pattern — strong self-discipline in some areas, more impulsive in others.",
    },
    {
      max: 78,
      tone: "primary",
      label: "Solid Self-Control",
      description: "Your answers suggest a generally strong ability to resist temptation and stay focused on long-term goals.",
    },
    {
      max: 100,
      tone: "success",
      label: "High Self-Control",
      description: "Your answers suggest exceptional discipline and consistency in resisting impulses that conflict with your goals.",
    },
  ],
  resultHeading: "Self-Control Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general psychological concept of trait self-control (e.g., the Brief Self-Control Scale). It is not a validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function SelfControlTest() {
  return <LikertScreener config={config} />;
}
