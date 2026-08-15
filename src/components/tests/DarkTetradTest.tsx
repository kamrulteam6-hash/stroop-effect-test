"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "dark-tetrad-test",
  intro:
    "Answer 16 short statements covering four personality traits studied together as the 'Dark Tetrad': narcissism, Machiavellianism, psychopathy, and everyday sadism. Answer honestly for the most useful result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  dimensions: { NA: "Narcissism", MA: "Machiavellianism", PS: "Psychopathy", SA: "Sadism" },
  questions: [
    { dimension: "NA", text: "I believe I deserve special recognition for what I've accomplished." },
    { dimension: "NA", text: "I enjoy being admired and get frustrated when I'm overlooked." },
    { dimension: "NA", text: "I tend to see myself as more important than most people around me." },
    { dimension: "NA", text: "I find it hard to admit when I'm wrong." },
    { dimension: "MA", text: "I believe most people can be manipulated if you know what they want." },
    { dimension: "MA", text: "I think it's smart to keep your real intentions hidden from others." },
    { dimension: "MA", text: "I'm willing to bend the truth if it helps me get ahead." },
    { dimension: "MA", text: "I plan several steps ahead when trying to get something from a situation." },
    { dimension: "PS", text: "Other people's emotional reactions don't affect me much." },
    { dimension: "PS", text: "I don't feel much guilt after doing something that hurt someone else." },
    { dimension: "PS", text: "I act on impulse rather than thinking through consequences." },
    { dimension: "PS", text: "I find it easy to break rules when I think I won't get caught." },
    { dimension: "SA", text: "I find it entertaining when someone gets embarrassed or humiliated." },
    { dimension: "SA", text: "I enjoy watching characters suffer in violent movies or shows." },
    { dimension: "SA", text: "I sometimes tease people even after they've asked me to stop." },
    { dimension: "SA", text: "I find a certain enjoyment in winning an argument by making someone feel bad." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Dark Tetrad Traits",
      description: "Your answers suggest low levels of narcissism, Machiavellianism, psychopathy, and sadism-related traits overall.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Some Traits Present",
      description: "You reported a moderate level of these traits across the four dimensions below.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Several Traits Present",
      description: "You reported a fairly high combined level of these traits. The breakdown below shows which are most prominent for you.",
    },
    {
      max: 100,
      tone: "danger",
      label: "High Dark Tetrad Traits",
      description:
        "You reported a high combined level of these traits. This is not a diagnosis — reflecting on how these patterns show up in your relationships and behavior can still be worthwhile.",
    },
  ],
  resultHeading: "Dark Tetrad Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by the 'Dark Tetrad' research extension that adds everyday sadism to the Dark Triad of narcissism, Machiavellianism, and psychopathy. It is not the SD4, Dirty Dozen, or any validated clinical instrument, and cannot diagnose any personality disorder or condition. Only a qualified clinician can provide a diagnosis.",
};

export function DarkTetradTest() {
  return <LikertScreener config={config} />;
}
