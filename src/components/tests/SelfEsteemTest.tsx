"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "self-esteem-test",
  intro:
    "Answer 10 short statements about how you generally see and feel about yourself. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I generally feel satisfied with who I am." },
    { text: "I believe I have a number of good qualities." },
    { text: "I feel confident that I can handle most challenges I face." },
    { text: "I feel comfortable with my own decisions and choices." },
    { text: "I generally like the person I am becoming." },
    { text: "At times, I feel like I'm not good at anything.", reverse: true },
    { text: "I often wish I could be someone else.", reverse: true },
    { text: "I tend to focus on my flaws more than my strengths.", reverse: true },
    { text: "I feel like a failure more often than I'd like to admit.", reverse: true },
    { text: "I find it hard to accept compliments because I don't feel I deserve them.", reverse: true },
  ],
  bands: [
    {
      max: 30,
      tone: "danger",
      label: "Low Self-Esteem",
      description:
        "Your answers suggest you're often quite critical of yourself. Building self-esteem is possible — small wins, self-compassion, and sometimes professional support can help.",
    },
    {
      max: 55,
      tone: "gold",
      label: "Below-Average Self-Esteem",
      description:
        "You reported a below-average sense of self-worth. Many people move through periods like this — noticing your strengths deliberately can help shift the pattern.",
    },
    {
      max: 78,
      tone: "primary",
      label: "Healthy Self-Esteem",
      description: "You reported a generally healthy, balanced sense of self-worth, with room like everyone has for occasional doubt.",
    },
    {
      max: 100,
      tone: "success",
      label: "High Self-Esteem",
      description: "You reported a strong, stable sense of self-worth and confidence in your own value.",
    },
  ],
  resultHeading: "Self-Esteem Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general concept of global self-esteem (overall self-worth and self-acceptance). It is not the Rosenberg Self-Esteem Scale or any validated clinical instrument, and its result is a rough snapshot, not a diagnosis of any condition.",
};

export function SelfEsteemTest() {
  return <LikertScreener config={config} />;
}
