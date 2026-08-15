"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "social-anxiety-test",
  intro:
    "Answer 10 short statements about how you feel in social situations. Respond with whatever has generally been true for you.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I worry for days before a social event or meeting." },
    { text: "I fear being judged or embarrassed in front of others." },
    { text: "I avoid speaking up in group settings, even when I have something to say." },
    { text: "I blush, sweat, or shake noticeably when I'm the center of attention." },
    { text: "I replay conversations afterward, worrying about what I said." },
    { text: "I find it hard to make eye contact with people I don't know well." },
    { text: "I avoid parties, gatherings, or events where I'll have to talk to strangers." },
    { text: "I feel like people are watching and judging me when I'm in public." },
    { text: "I have trouble eating, writing, or performing tasks while others watch." },
    { text: "My worry about social situations gets in the way of school, work, or relationships." },
  ],
  bands: [
    {
      max: 20,
      tone: "success",
      label: "Minimal Symptoms",
      description: "Your answers suggest a low level of social anxiety in everyday situations.",
    },
    {
      max: 45,
      tone: "primary",
      label: "Mild Symptoms",
      description:
        "You reported a mild level of social discomfort. Some nervousness in social settings is very common.",
    },
    {
      max: 70,
      tone: "gold",
      label: "Moderate Symptoms",
      description:
        "You reported a moderate level of symptoms often associated with social anxiety. If this is limiting activities you'd otherwise want to do, a mental health professional can help.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Symptoms",
      description:
        "You reported a high level of social anxiety symptoms. Consider speaking with a mental health professional, especially if avoidance is affecting school, work, or relationships.",
    },
  ],
  resultHeading: "Social Anxiety Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described social anxiety symptom domains. It is not the SPIN, LSAS, or any clinical instrument, has not been validated, and cannot diagnose social anxiety disorder or any condition. Only a qualified clinician can provide a diagnosis.",
};

export function SocialAnxietyTest() {
  return <LikertScreener config={config} />;
}
