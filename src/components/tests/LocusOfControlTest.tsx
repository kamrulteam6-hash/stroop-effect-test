"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "locus-of-control-test",
  intro:
    "Answer 10 short statements about how much control you feel you have over the outcomes in your life. Answer honestly for the most accurate result.",
  scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
  questions: [
    { text: "My own effort and choices are the main reason for my successes." },
    { text: "When something goes wrong, I look at what I could have done differently." },
    { text: "I believe I can shape my future through the decisions I make now." },
    { text: "Hard work usually pays off for me in the long run." },
    { text: "I feel in control of the major direction of my life." },
    { text: "My successes are mostly due to luck or being in the right place at the right time.", reverse: true },
    { text: "No matter what I do, outside circumstances decide how things turn out.", reverse: true },
    { text: "I often feel like things happen to me rather than because of me.", reverse: true },
    { text: "There's little point planning ahead since so much is out of my hands.", reverse: true },
    { text: "Other people's decisions have more impact on my life than my own choices.", reverse: true },
  ],
  bands: [
    {
      max: 30,
      tone: "gold",
      label: "Strong External Locus",
      description: "Your answers suggest you tend to attribute outcomes mainly to luck, fate, or outside circumstances rather than your own actions.",
    },
    {
      max: 55,
      tone: "primary",
      label: "Mixed / Balanced Locus",
      description: "You reported a blend — sometimes attributing outcomes to your own effort, sometimes to outside factors, depending on the situation.",
    },
    {
      max: 78,
      tone: "primary",
      label: "Mostly Internal Locus",
      description: "Your answers suggest you generally believe your own effort and choices strongly shape your outcomes.",
    },
    {
      max: 100,
      tone: "success",
      label: "Strong Internal Locus",
      description: "Your answers suggest a strong, consistent belief that your own actions and decisions are the primary driver of your life outcomes.",
    },
  ],
  resultHeading: "Locus of Control Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by Julian Rotter's psychological concept of locus of control. It is not a validated clinical instrument, and its result is a rough snapshot, not a diagnosis. Neither an internal nor external locus is inherently 'better' — both have strengths and trade-offs.",
};

export function LocusOfControlTest() {
  return <LikertScreener config={config} />;
}
