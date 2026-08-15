"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "ptsd-test",
  intro:
    "Answer 10 short statements about reactions you may have had after a difficult or distressing event. Respond with whatever has generally been true for you over the past month.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "Unwanted, distressing memories of a difficult past event have come back to me." },
    { text: "I've had dreams or nightmares related to something difficult that happened to me." },
    { text: "I've suddenly felt or acted as if the event were happening again." },
    { text: "I avoid places, people, or activities that remind me of what happened." },
    { text: "I avoid thinking or talking about what happened, even when it comes up." },
    { text: "I've felt distant or cut off from people around me since the event." },
    { text: "I've lost interest in activities I used to enjoy." },
    { text: "I've felt constantly on guard, jumpy, or easily startled." },
    { text: "I've had trouble sleeping because of thoughts related to the event." },
    { text: "I've blamed myself or felt persistent negative emotions since the event." },
  ],
  bands: [
    {
      max: 20,
      tone: "success",
      label: "Minimal Symptoms",
      description: "Your answers suggest few, if any, symptoms commonly associated with post-traumatic stress.",
    },
    {
      max: 45,
      tone: "primary",
      label: "Mild Symptoms",
      description: "You reported a mild level of symptoms. Reactions like these are common after a difficult event and often ease with time and support.",
    },
    {
      max: 70,
      tone: "gold",
      label: "Moderate Symptoms",
      description:
        "You reported a moderate level of symptoms often associated with post-traumatic stress. Speaking with a mental health professional is a reasonable next step.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Symptoms",
      description:
        "You reported a high level of symptoms. Please consider reaching out to a mental health professional or doctor soon — trauma-focused support can make a meaningful difference.",
    },
  ],
  resultHeading: "PTSD Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described post-traumatic stress symptom domains (intrusion, avoidance, negative mood, and arousal). It is not the PCL-5 or any clinical instrument, has not been validated, and cannot diagnose PTSD or any condition. Only a qualified clinician can provide a diagnosis.",
};

export function PTSDTest() {
  return <LikertScreener config={config} />;
}
