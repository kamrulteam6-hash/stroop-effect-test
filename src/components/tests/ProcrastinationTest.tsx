"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "procrastination-test",
  intro:
    "Answer 10 short statements about how you typically approach tasks and deadlines. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I put off tasks until the deadline is close, even when I know better." },
    { text: "I find myself doing less important tasks to avoid a bigger one." },
    { text: "I tell myself I 'work better under pressure' to justify delaying." },
    { text: "I feel a wave of guilt or anxiety about tasks I keep postponing." },
    { text: "I start tasks promptly rather than putting them off.", reverse: true },
    { text: "I get distracted by my phone, browsing, or other small tasks when I should be focused." },
    { text: "I overestimate how much time I'll have later to do something." },
    { text: "I finish important tasks well before the deadline.", reverse: true },
    { text: "I avoid starting tasks that feel overwhelming or unclear." },
    { text: "I regret how much time I lost to procrastination on past projects." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Procrastination",
      description: "Your answers suggest you generally start and complete tasks in a timely way.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Mild Procrastination",
      description: "You reported a mild tendency to delay tasks — very common, and usually manageable with basic structure.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Moderate Procrastination",
      description:
        "You reported a fairly strong tendency to delay tasks, often followed by stress. Breaking tasks into smaller steps and removing distractions can meaningfully help.",
    },
    {
      max: 100,
      tone: "danger",
      label: "High Procrastination",
      description:
        "You reported a strong pattern of procrastination that's causing real stress or regret. Working with a coach, therapist, or structured productivity system can help address the underlying avoidance.",
    },
  ],
  resultHeading: "Procrastination Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general concept of task-avoidance procrastination. It is not the GPS, IPS, or any validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function ProcrastinationTest() {
  return <LikertScreener config={config} />;
}
