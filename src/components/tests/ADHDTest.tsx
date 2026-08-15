"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "adhd-test",
  intro:
    "Answer 12 short statements about your attention and activity levels over the last six months. There are no right or wrong answers — just respond with what's typically true for you.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  dimensions: { IA: "Inattention", HI: "Hyperactivity & Impulsivity" },
  questions: [
    { dimension: "IA", text: "I lose track of what I'm doing partway through a task." },
    { dimension: "IA", text: "I have trouble keeping my attention on things that feel boring or repetitive." },
    { dimension: "IA", text: "I misplace things I need, like keys, my phone, or paperwork." },
    { dimension: "IA", text: "I get easily distracted by unrelated thoughts or things happening around me." },
    { dimension: "IA", text: "I forget appointments, deadlines, or things I promised to do." },
    { dimension: "IA", text: "I avoid or put off tasks that require sustained mental effort." },
    { dimension: "HI", text: "I feel restless or fidgety when I have to sit still for a long time." },
    { dimension: "HI", text: "I interrupt people or blurt out answers before a question is finished." },
    { dimension: "HI", text: "I find it hard to wait my turn in a line or during conversation." },
    { dimension: "HI", text: "I feel like I'm 'on the go', as if driven by a motor." },
    { dimension: "HI", text: "I talk more than the situation calls for." },
    { dimension: "HI", text: "I make quick decisions without fully thinking through the consequences." },
  ],
  bands: [
    {
      max: 30,
      tone: "success",
      label: "Few Reported Traits",
      description:
        "Your answers suggest attention and activity patterns that are broadly typical, without many traits commonly associated with ADHD.",
    },
    {
      max: 55,
      tone: "primary",
      label: "Some Traits Present",
      description:
        "You reported a moderate number of inattentive or hyperactive-impulsive traits. Many people experience some of these at times, especially under stress.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Several Traits Present",
      description:
        "You reported a fairly high number of traits often associated with ADHD. If these patterns are frequent and affect daily life, discussing them with a doctor or psychologist can help.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Many Traits Present",
      description:
        "You reported a high number of inattentive and/or hyperactive-impulsive traits. This screening result does not diagnose ADHD, but a conversation with a qualified clinician is a reasonable next step.",
    },
  ],
  resultHeading: "ADHD Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described ADHD symptom domains (inattention and hyperactivity-impulsivity). It is not the official ASRS or any clinical instrument, has not been validated, and cannot diagnose ADHD or any condition. Only a qualified clinician can provide a diagnosis.",
};

export function ADHDTest() {
  return <LikertScreener config={config} />;
}
