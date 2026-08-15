"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "bipolar-test",
  intro:
    "Answer 12 short statements about periods of high energy and periods of low mood you may have experienced. Respond with whatever has generally been true for you over your life, not just recently.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  dimensions: { MA: "Elevated / High-Energy Periods", DE: "Low-Mood Periods" },
  questions: [
    { dimension: "MA", text: "I've had stretches of days where I felt unusually energetic and needed very little sleep." },
    { dimension: "MA", text: "I've had periods where my thoughts raced faster than I could express them." },
    { dimension: "MA", text: "I've made impulsive decisions during high-energy periods that I later regretted." },
    { dimension: "MA", text: "I've felt unusually confident or 'on top of the world' for days at a time." },
    { dimension: "MA", text: "I've talked much faster or more than usual during certain stretches." },
    { dimension: "MA", text: "I've taken on far more projects or activities than usual during a burst of energy." },
    { dimension: "DE", text: "I've had periods of deep sadness or hopelessness lasting most of the day, for days at a time." },
    { dimension: "DE", text: "I've lost interest in things I normally enjoy for extended stretches." },
    { dimension: "DE", text: "My energy has dropped dramatically for days or weeks at a time." },
    { dimension: "DE", text: "I've had trouble concentrating during low periods." },
    { dimension: "DE", text: "I've slept far more or far less than usual during difficult stretches." },
    { dimension: "DE", text: "I've felt worthless or excessively guilty during low periods." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Few Reported Mood Swings",
      description: "Your answers suggest few extreme highs or lows in mood and energy over time.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Some Mood Variability",
      description:
        "You reported a moderate level of high-energy and/or low-mood periods. Everyone's mood fluctuates — what matters most is the intensity, duration, and impact on daily life.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Notable Mood Swings",
      description:
        "You reported a fairly high level of both elevated and low-mood periods. This pattern is worth discussing with a mental health professional, since it can be relevant to several conditions.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Mood Swings",
      description:
        "You reported a high level of both elevated and low-mood periods. Please consider speaking with a doctor or psychiatrist — proper evaluation requires a detailed history that a short quiz cannot capture.",
    },
  ],
  resultHeading: "Bipolar Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described mood-episode domains (elevated/manic-type and depressive-type periods). It is not the MDQ or any clinical instrument, has not been validated, and cannot diagnose bipolar disorder or any condition. Only a qualified clinician can provide a diagnosis.",
};

export function BipolarTest() {
  return <LikertScreener config={config} />;
}
