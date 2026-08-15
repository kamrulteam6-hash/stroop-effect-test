"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "highly-sensitive-person-test",
  intro:
    "Answer 10 short statements about how you respond to sensory input, emotions, and your environment. Answer with what has generally been true throughout your life.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I notice subtle details in my environment that others seem to miss." },
    { text: "I get easily overwhelmed by bright lights, strong smells, or loud noises." },
    { text: "I feel emotions, both mine and other people's, very intensely." },
    { text: "I need to withdraw and recharge after a busy or stimulating day." },
    { text: "I'm deeply moved by art, music, or beauty in nature." },
    { text: "Other people's moods affect my own mood quite strongly." },
    { text: "I startle easily at sudden sounds or surprises." },
    { text: "I find it hard to perform well when I'm being closely watched or evaluated." },
    { text: "I notice when something in my surroundings is 'off' before others do." },
    { text: "I feel uncomfortable in chaotic, crowded, or overstimulating environments." },
  ],
  bands: [
    {
      max: 30,
      tone: "primary",
      label: "Lower Sensory Sensitivity",
      description: "Your answers suggest you're less easily overwhelmed by sensory input and emotional intensity than average.",
    },
    {
      max: 55,
      tone: "primary",
      label: "Moderate Sensitivity",
      description: "You reported a moderate level of sensory and emotional sensitivity, similar to many people.",
    },
    {
      max: 78,
      tone: "gold",
      label: "High Sensitivity",
      description:
        "You reported a fairly high level of sensory and emotional sensitivity, a pattern sometimes described as being a 'highly sensitive person.' This isn't a flaw — it often comes with strong empathy and attentiveness, alongside a need for downtime.",
    },
    {
      max: 100,
      tone: "gold",
      label: "Very High Sensitivity",
      description:
        "You reported a very high level of sensory and emotional sensitivity. Understanding this trait can help you plan your environment and pace to work with it rather than against it.",
    },
  ],
  resultHeading: "Highly Sensitive Person Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the publicly described concept of sensory processing sensitivity (\"highly sensitive person\"). It is not the HSP Scale or any validated clinical instrument, and its result is a rough trait snapshot, not a diagnosis. High sensitivity is considered a normal personality trait, not a disorder.",
};

export function HighlySensitivePersonTest() {
  return <LikertScreener config={config} />;
}
