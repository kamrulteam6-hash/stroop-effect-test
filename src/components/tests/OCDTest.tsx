"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "ocd-test",
  intro:
    "Answer 10 short statements about unwanted thoughts and repetitive behaviors. Respond with whatever has generally been true for you over the past month.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  dimensions: { OB: "Intrusive Thoughts", CO: "Repetitive Behaviors" },
  questions: [
    { dimension: "OB", text: "I have unwanted thoughts that keep coming back no matter how hard I try to stop them." },
    { dimension: "OB", text: "I worry excessively about germs, contamination, or things being 'dirty'." },
    { dimension: "OB", text: "I have intrusive thoughts about something bad happening to me or someone I care about." },
    { dimension: "OB", text: "I feel a strong need for things to be symmetrical, even, or 'just right'." },
    { dimension: "OB", text: "Unwanted thoughts cause me significant anxiety or distress." },
    { dimension: "CO", text: "I check things repeatedly, like locks, switches, or appliances, even after confirming them." },
    { dimension: "CO", text: "I wash my hands or clean things more than seems necessary." },
    { dimension: "CO", text: "I count, repeat words, or perform actions a specific number of times to feel 'right'." },
    { dimension: "CO", text: "I arrange or order objects in a specific way and feel distressed if they're disturbed." },
    { dimension: "CO", text: "My repetitive behaviors take up a significant amount of time each day." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Few Reported Symptoms",
      description: "Your answers suggest few intrusive thoughts or repetitive behaviors affecting daily life.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Mild Symptoms",
      description:
        "You reported a mild level of intrusive thoughts or repetitive behaviors. Many people experience occasional versions of these.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Moderate Symptoms",
      description:
        "You reported a moderate level of symptoms often associated with obsessive-compulsive patterns. If these thoughts or behaviors are distressing or time-consuming, a mental health professional can help.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Symptoms",
      description:
        "You reported a high level of intrusive thoughts and repetitive behaviors. Consider speaking with a mental health professional, especially if this is taking up significant time or causing distress.",
    },
  ],
  resultHeading: "OCD Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described obsessive-compulsive symptom domains (intrusive thoughts and repetitive behaviors). It is not the Y-BOCS or any clinical instrument, has not been validated, and cannot diagnose OCD or any condition. Only a qualified clinician can provide a diagnosis.",
};

export function OCDTest() {
  return <LikertScreener config={config} />;
}
