"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "burnout-test",
  intro:
    "Answer 12 short statements about how you've felt regarding your work, studies, or daily responsibilities recently. Respond with whatever has generally been true for you.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  dimensions: { EX: "Exhaustion", CY: "Cynicism & Detachment" },
  questions: [
    { dimension: "EX", text: "I feel emotionally drained by my work or responsibilities." },
    { dimension: "EX", text: "I feel used up at the end of the day." },
    { dimension: "EX", text: "I feel tired even before I start my day." },
    { dimension: "EX", text: "Working with people or tasks all day is a strain for me." },
    { dimension: "EX", text: "I feel physically exhausted, not just mentally." },
    { dimension: "EX", text: "I dread starting the next work day or task." },
    { dimension: "CY", text: "I've become more cynical about whether my work matters." },
    { dimension: "CY", text: "I've grown more detached or numb toward the people I work with." },
    { dimension: "CY", text: "I do the minimum required rather than putting in real effort." },
    { dimension: "CY", text: "I feel less connected to the purpose behind what I do." },
    { dimension: "CY", text: "I've lost enthusiasm for work I used to find meaningful." },
    { dimension: "CY", text: "I find myself irritable or short-tempered with colleagues, clients, or classmates." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Burnout Risk",
      description: "Your answers suggest you're generally feeling energized and engaged with your responsibilities.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Mild Burnout Risk",
      description:
        "You reported some early signs of exhaustion or detachment. Building in rest and reassessing your workload now can help prevent it from growing.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Moderate Burnout Risk",
      description:
        "You reported a fairly high level of exhaustion and/or cynicism. This is a meaningful signal worth addressing — through workload changes, boundaries, or support.",
    },
    {
      max: 100,
      tone: "danger",
      label: "High Burnout Risk",
      description:
        "You reported a high level of exhaustion and detachment consistent with significant burnout. Consider speaking with a doctor, counselor, or your workplace about support options.",
    },
  ],
  resultHeading: "Burnout Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by the widely discussed exhaustion and cynicism dimensions of occupational burnout research. It is not the Maslach Burnout Inventory or any clinical/validated instrument, and cannot diagnose burnout or any condition. Only a qualified clinician can provide a diagnosis.",
};

export function BurnoutTest() {
  return <LikertScreener config={config} />;
}
