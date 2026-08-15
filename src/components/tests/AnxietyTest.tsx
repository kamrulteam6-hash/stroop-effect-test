"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "anxiety-test",
  intro:
    "Answer 10 short statements about how you've felt over the past two weeks. Respond with whatever has generally been true for you.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I've felt nervous, anxious, or on edge." },
    { text: "I've found it hard to stop or control my worrying." },
    { text: "I've worried too much about different things." },
    { text: "I've had trouble relaxing." },
    { text: "I've been so restless that it's hard to sit still." },
    { text: "I've become easily annoyed or irritable." },
    { text: "I've felt afraid something awful might happen, without a clear reason." },
    { text: "My muscles have felt tense or I've had unexplained aches." },
    { text: "I've had trouble falling or staying asleep because my mind was racing." },
    { text: "I've avoided situations because they made me feel anxious." },
  ],
  bands: [
    {
      max: 20,
      tone: "success",
      label: "Minimal Symptoms",
      description: "Your answers suggest a low level of anxious symptoms over the past two weeks.",
    },
    {
      max: 45,
      tone: "primary",
      label: "Mild Symptoms",
      description:
        "You reported a mild level of anxious symptoms. Occasional worry and tension are common and often manageable with rest and coping strategies.",
    },
    {
      max: 70,
      tone: "gold",
      label: "Moderate Symptoms",
      description:
        "You reported a moderate level of symptoms often associated with anxiety. Speaking with a doctor or mental health professional could help you find useful tools.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Symptoms",
      description:
        "You reported a high level of anxious symptoms. Consider reaching out to a mental health professional or doctor, especially if this is affecting your daily life or sleep.",
    },
  ],
  resultHeading: "Anxiety Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described generalized anxiety symptom domains. It is not the GAD-7 or any clinical instrument, has not been validated, and cannot diagnose an anxiety disorder or any condition. Only a qualified clinician can provide a diagnosis.",
};

export function AnxietyTest() {
  return <LikertScreener config={config} />;
}
