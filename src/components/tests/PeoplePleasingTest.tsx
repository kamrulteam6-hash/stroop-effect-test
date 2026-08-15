"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "people-pleasing-test",
  intro:
    "Answer 10 short statements about how you typically respond to other people's needs and expectations. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I say yes to things I don't want to do because I'm afraid of disappointing someone." },
    { text: "I feel responsible for other people's emotions." },
    { text: "I apologize even when I haven't done anything wrong." },
    { text: "I go out of my way to avoid conflict, even at my own expense." },
    { text: "I worry that people will be upset with me if I express a different opinion." },
    { text: "I put other people's needs ahead of my own, even when I'm exhausted." },
    { text: "I have trouble figuring out what I actually want because I'm so focused on others." },
    { text: "I feel anxious if I sense someone might be even slightly annoyed with me." },
    { text: "I agree to plans I don't really want to be part of." },
    { text: "I feel resentful afterward for having said yes to something I didn't want to do." },
  ],
  bands: [
    {
      max: 30,
      tone: "success",
      label: "Low People-Pleasing",
      description: "Your answers suggest you generally balance your own needs with other people's fairly well.",
    },
    {
      max: 55,
      tone: "primary",
      label: "Some People-Pleasing Tendencies",
      description: "You reported a moderate tendency to prioritize others' comfort over your own needs. This is common and manageable with practice.",
    },
    {
      max: 78,
      tone: "gold",
      label: "Notable People-Pleasing",
      description:
        "You reported a fairly strong tendency to put others' needs first, often at your own expense. Practicing small boundaries can help you build a more sustainable pattern.",
    },
    {
      max: 100,
      tone: "danger",
      label: "High People-Pleasing",
      description:
        "You reported a strong, consistent pattern of people-pleasing that may be leaving you exhausted or resentful. A therapist can help you build boundaries without guilt.",
    },
  ],
  resultHeading: "People-Pleasing Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general concept of people-pleasing (prioritizing others' approval and comfort over one's own needs). It is not a validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function PeoplePleasingTest() {
  return <LikertScreener config={config} />;
}
