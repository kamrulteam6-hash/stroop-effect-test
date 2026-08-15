"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "depression-test",
  intro:
    "Answer 10 short statements about how you've been feeling over the past two weeks. Answer honestly — there are no right or wrong answers.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I've felt little interest or pleasure in things I'd normally enjoy." },
    { text: "I've felt down, sad, or hopeless." },
    { text: "I've had trouble falling asleep, staying asleep, or sleeping too much." },
    { text: "I've felt tired or had little energy." },
    { text: "My appetite has changed noticeably, either eating much less or much more than usual." },
    { text: "I've felt bad about myself, like I'm a failure or have let people down." },
    { text: "I've had trouble concentrating on everyday tasks, like reading or watching TV." },
    { text: "I've moved or spoken more slowly than usual, or felt restless and unable to sit still." },
    { text: "I've had thoughts that I'd be better off not being here, or of hurting myself." },
    { text: "I've withdrawn from friends, family, or activities I used to care about." },
  ],
  bands: [
    {
      max: 20,
      tone: "success",
      label: "Minimal Symptoms",
      description: "Your answers suggest few, if any, symptoms commonly associated with low mood over the past two weeks.",
    },
    {
      max: 45,
      tone: "primary",
      label: "Mild Symptoms",
      description:
        "You reported a mild level of symptoms. Everyone has difficult stretches — if this persists, talking to someone you trust can help.",
    },
    {
      max: 70,
      tone: "gold",
      label: "Moderate Symptoms",
      description:
        "You reported a moderate level of symptoms often associated with depression. Speaking with a doctor or mental health professional is a reasonable next step.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Symptoms",
      description:
        "You reported a high level of symptoms. Please consider reaching out to a mental health professional or doctor soon. If you are having thoughts of harming yourself, contact a crisis line or emergency services in your area immediately.",
    },
  ],
  resultHeading: "Depression Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described depressive symptom domains (mood, sleep, energy, appetite, concentration). It is not the PHQ-9 or any clinical instrument, has not been validated, and cannot diagnose depression or any condition. Only a qualified clinician can provide a diagnosis. If you are in crisis, please contact a local emergency service or crisis line right away.",
};

export function DepressionTest() {
  return <LikertScreener config={config} />;
}
