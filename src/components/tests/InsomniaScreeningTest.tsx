"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "insomnia-screening-test",
  intro:
    "Answer 10 short statements about difficulty sleeping over the past month. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I have trouble falling asleep, even when I'm tired." },
    { text: "I wake up during the night and struggle to fall back asleep." },
    { text: "I wake up too early and can't get back to sleep." },
    { text: "I lie awake worrying about not being able to sleep." },
    { text: "My poor sleep affects my mood or concentration the next day." },
    { text: "I feel anxious or frustrated about my sleep before I even get into bed." },
    { text: "I check the clock repeatedly during the night." },
    { text: "I've tried things (medication, routines) to help me sleep, with limited success." },
    { text: "My sleep problems have lasted for weeks or longer." },
    { text: "I dread bedtime because I expect another difficult night." },
  ],
  bands: [
    {
      max: 20,
      tone: "success",
      label: "Minimal Symptoms",
      description: "Your answers suggest few, if any, symptoms commonly associated with insomnia.",
    },
    {
      max: 45,
      tone: "primary",
      label: "Mild Symptoms",
      description: "You reported a mild level of sleep difficulty. Consistent sleep habits and limiting late caffeine can often help.",
    },
    {
      max: 70,
      tone: "gold",
      label: "Moderate Symptoms",
      description:
        "You reported a moderate level of symptoms often associated with insomnia. Talking to a doctor about cognitive behavioral therapy for insomnia (CBT-I) is a well-supported next step.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Symptoms",
      description:
        "You reported a high level of symptoms. Please consider speaking with a doctor or sleep specialist — persistent insomnia is treatable, and you don't have to just live with it.",
    },
  ],
  resultHeading: "Insomnia Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described insomnia symptom domains (difficulty falling asleep, staying asleep, and daytime impact). It is not the Insomnia Severity Index or any clinical instrument, has not been validated, and cannot diagnose insomnia or any condition. Only a qualified clinician can provide a diagnosis.",
};

export function InsomniaScreeningTest() {
  return <LikertScreener config={config} />;
}
