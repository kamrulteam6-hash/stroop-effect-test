"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "morning-person-vs-night-owl-test",
  intro:
    "Answer 10 short statements about when you naturally feel most alert and prefer to sleep. Answer based on your natural preference, not your current schedule.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I wake up naturally without an alarm, feeling refreshed, early in the morning." },
    { text: "I feel most mentally sharp before noon." },
    { text: "I prefer to exercise or do demanding tasks first thing in the morning." },
    { text: "I get tired and want to sleep relatively early in the evening." },
    { text: "Mornings feel like a struggle, even after a full night's sleep.", reverse: true },
    { text: "I do my best creative or focused work late at night.", reverse: true },
    { text: "I naturally stay up past midnight, even without obligations.", reverse: true },
    { text: "I feel groggy for hours after waking up.", reverse: true },
    { text: "Given a free choice, I'd choose an early bedtime and early wake time." },
    { text: "Social events that start late in the evening feel more appealing than early morning ones.", reverse: true },
  ],
  bands: [
    {
      max: 25,
      tone: "primary",
      label: "Strong Night Owl",
      description: "Your answers suggest a strong preference for later sleep and wake times, with peak alertness in the evening or night.",
    },
    {
      max: 45,
      tone: "primary",
      label: "Moderate Night Owl",
      description: "You reported a leaning toward evening alertness and later sleep timing.",
    },
    {
      max: 55,
      tone: "primary",
      label: "Intermediate",
      description: "You reported a fairly balanced pattern, without a strong morning or evening preference.",
    },
    {
      max: 75,
      tone: "primary",
      label: "Moderate Morning Person",
      description: "You reported a leaning toward early alertness and earlier sleep timing.",
    },
    {
      max: 100,
      tone: "primary",
      label: "Strong Morning Person",
      description: "Your answers suggest a strong preference for early sleep and wake times, with peak alertness in the morning.",
    },
  ],
  resultHeading: "Morning Person vs. Night Owl Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general concept of morningness-eveningness preference (chronotype). It is not the MEQ or any validated clinical instrument. Neither a morning nor an evening preference is 'better' — they're simply different natural rhythms, though modern schedules often favor morning types.",
};

export function MorningNightOwlTest() {
  return <LikertScreener config={config} />;
}
