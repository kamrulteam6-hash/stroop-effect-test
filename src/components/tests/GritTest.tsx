"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "grit-test",
  intro:
    "Answer 10 short statements about your persistence and passion for long-term goals. Answer honestly for the most accurate result.",
  scaleLabels: ["Not like me", "Slightly like me", "Somewhat like me", "Mostly like me", "Very much like me"],
  questions: [
    { text: "I finish whatever I begin, even when it takes a long time." },
    { text: "I work hard toward goals even after setbacks and disappointments." },
    { text: "I stay committed to my long-term goals year after year." },
    { text: "I'm diligent — I never give up, even on difficult projects." },
    { text: "Setbacks don't discourage me from working toward a goal I care about." },
    { text: "New ideas and projects sometimes distract me from previous ones.", reverse: true },
    { text: "I've changed goals or interests frequently over the years.", reverse: true },
    { text: "I lose interest in projects that take a long time to complete.", reverse: true },
    { text: "I get discouraged easily by obstacles and setbacks.", reverse: true },
    { text: "I have difficulty maintaining focus on projects that take more than a few months to complete.", reverse: true },
  ],
  bands: [
    {
      max: 30,
      tone: "danger",
      label: "Low Grit",
      description: "Your answers suggest interests and goals shift fairly often, and sustained long-term effort feels harder to maintain.",
    },
    {
      max: 55,
      tone: "gold",
      label: "Moderate Grit",
      description: "You reported a mix — persistent in some areas, but goals or interests sometimes shift before completion.",
    },
    {
      max: 78,
      tone: "primary",
      label: "Solid Grit",
      description: "Your answers suggest a generally strong ability to sustain effort and interest toward long-term goals.",
    },
    {
      max: 100,
      tone: "success",
      label: "High Grit",
      description: "Your answers suggest exceptional passion and perseverance for long-term goals, even through setbacks and plateaus.",
    },
  ],
  resultHeading: "Grit Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by Angela Duckworth's research on grit (passion and perseverance for long-term goals). It is not the official validated Grit Scale, and its result is a rough snapshot, not a diagnosis.",
};

export function GritTest() {
  return <LikertScreener config={config} />;
}
