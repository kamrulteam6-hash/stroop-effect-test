"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "stress-test",
  intro:
    "Answer 10 short statements about how you've felt over the past month. Respond with whatever has generally been true for you.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I've felt unable to control the important things in my life." },
    { text: "I've felt nervous or stressed." },
    { text: "I've felt confident about handling my personal problems.", reverse: true },
    { text: "I've felt that things were going my way.", reverse: true },
    { text: "I've found I could not cope with everything I had to do." },
    { text: "I've been able to control irritations in my life.", reverse: true },
    { text: "I've felt on top of things.", reverse: true },
    { text: "I've been angered by things outside of my control." },
    { text: "I've felt difficulties were piling up so high I could not overcome them." },
    { text: "I've had trouble winding down at the end of the day." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Stress",
      description: "Your answers suggest you're generally feeling in control and coping well with day-to-day demands.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Moderate Stress",
      description:
        "You reported a moderate level of perceived stress. This is common — building in regular breaks and coping strategies can help keep it manageable.",
    },
    {
      max: 75,
      tone: "gold",
      label: "High Stress",
      description:
        "You reported a fairly high level of perceived stress. It may be worth identifying your biggest stressors and considering support, whether from people around you or a professional.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Very High Stress",
      description:
        "You reported a very high level of perceived stress. Chronic stress at this level can affect sleep, health, and mood — consider talking to a doctor or counselor about ways to manage it.",
    },
  ],
  resultHeading: "Stress Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by the general concept of perceived stress (feeling overwhelmed versus feeling in control). It is not the PSS or any clinical instrument, has not been validated, and cannot diagnose a stress-related condition. Only a qualified clinician can provide a diagnosis.",
};

export function StressTest() {
  return <LikertScreener config={config} />;
}
