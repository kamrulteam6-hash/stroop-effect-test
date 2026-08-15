"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "alexithymia-test",
  intro:
    "Answer 10 short statements about how easily you can identify and describe your own emotions. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I find it hard to find the right words to describe how I'm feeling." },
    { text: "I'm often confused about what emotion I'm actually experiencing." },
    { text: "People tell me I seem emotionally distant, even when something is clearly affecting me." },
    { text: "I focus on physical sensations (like a fast heartbeat) more than the feeling behind them." },
    { text: "I find it easier to describe what happened than how I felt about it." },
    { text: "I have trouble telling the difference between being anxious and other physical sensations, like being tired." },
    { text: "I prefer to analyze a situation logically rather than explore how it makes me feel." },
    { text: "Other people seem to understand their own feelings faster than I understand mine." },
    { text: "I find it hard to imagine or describe how I'd feel in a hypothetical situation." },
    { text: "I sometimes only realize I was upset well after the moment has passed." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Alexithymic Traits",
      description: "Your answers suggest you generally identify and describe your emotions with relative ease.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Some Difficulty",
      description:
        "You reported some difficulty identifying or describing feelings. This is common and often improves with practices like journaling or naming emotions in the moment.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Notable Difficulty",
      description:
        "You reported a fairly high level of difficulty identifying and describing your emotions. This trait, sometimes called alexithymia, can make emotional situations feel confusing — a therapist can help build this skill.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Difficulty",
      description:
        "You reported a high level of difficulty recognizing and describing your own feelings. This is not a diagnosis, but if it's affecting your relationships or wellbeing, a mental health professional can help.",
    },
  ],
  resultHeading: "Alexithymia Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by the publicly described concept of alexithymia (difficulty identifying and describing one's own emotions). It is not the TAS-20 or any validated clinical instrument, and cannot diagnose alexithymia or any condition. Only a qualified clinician can provide a diagnosis.",
};

export function AlexithymiaTest() {
  return <LikertScreener config={config} />;
}
