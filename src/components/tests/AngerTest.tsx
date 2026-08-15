"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "anger-test",
  intro:
    "Answer 10 short statements about how you typically experience and express anger. Answer honestly for the most useful result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "Small annoyances build up quickly into real irritation for me." },
    { text: "I raise my voice or snap at people when I'm frustrated." },
    { text: "I stay angry about something long after the situation has passed." },
    { text: "I feel physical tension, like a tight jaw or fast heartbeat, when I'm angry." },
    { text: "I say things in anger that I later regret." },
    { text: "I get angry more easily than most people I know." },
    { text: "I find it hard to calm down once I've become angry." },
    { text: "Other people tell me I seem 'on edge' or quick to react." },
    { text: "I've damaged an object, slammed a door, or done something similar when angry." },
    { text: "My anger has caused problems in my relationships or work." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Reactivity",
      description: "Your answers suggest you generally stay calm and regulate frustration well.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Moderate Reactivity",
      description: "You reported a moderate level of anger reactivity — occasional frustration that's part of normal life.",
    },
    {
      max: 75,
      tone: "gold",
      label: "High Reactivity",
      description:
        "You reported a fairly high level of anger reactivity. Techniques like pausing before responding, physical activity, or talking to a counselor can help you manage it more comfortably.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Very High Reactivity",
      description:
        "You reported a high level of anger intensity and reactivity, and that it may be affecting your relationships or work. A counselor experienced in anger management can offer practical tools.",
    },
  ],
  resultHeading: "Anger Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general concept of anger reactivity and control (how quickly anger builds and how it's expressed). It is not the STAXI or any validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function AngerTest() {
  return <LikertScreener config={config} />;
}
