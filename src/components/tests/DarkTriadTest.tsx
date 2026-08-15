"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "dark-triad-test",
  intro:
    "Answer 12 short statements covering three personality traits studied together as the 'Dark Triad': narcissism, Machiavellianism, and psychopathy. Answer honestly for the most useful result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  dimensions: { NA: "Narcissism", MA: "Machiavellianism", PS: "Psychopathy" },
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
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Dark Triad Traits",
      description: "Your answers suggest low levels of narcissism, Machiavellianism, and psychopathy-related traits overall.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Some Traits Present",
      description: "You reported a moderate level of these traits. Everyone has some capacity for self-interest and strategic thinking.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Several Traits Present",
      description:
        "You reported a fairly high combined level of these three traits. The breakdown below shows which one is most prominent for you.",
    },
    {
      max: 100,
      tone: "danger",
      label: "High Dark Triad Traits",
      description:
        "You reported a high combined level of these traits. This is not a diagnosis — reflecting on how these patterns show up in your relationships can still be worthwhile.",
    },
  ],
  resultHeading: "Dark Triad Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by the widely studied 'Dark Triad' of narcissism, Machiavellianism, and psychopathy. It is not the SD3, Dirty Dozen, or any validated clinical instrument, and cannot diagnose any personality disorder or condition. Only a qualified clinician can provide a diagnosis.",
};

export function DarkTriadTest() {
  return <LikertScreener config={config} />;
}
