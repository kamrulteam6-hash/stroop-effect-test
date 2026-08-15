"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "loneliness-test",
  intro:
    "Answer 10 short statements about how connected you feel to the people around you. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I feel like I lack companionship." },
    { text: "There is no one I can turn to when something is bothering me." },
    { text: "I feel left out, even when I'm around other people." },
    { text: "I feel isolated from those around me." },
    { text: "I have people I can genuinely rely on when I need help.", reverse: true },
    { text: "I feel a strong sense of belonging with the people in my life.", reverse: true },
    { text: "I feel shy or awkward around people, even those I know." },
    { text: "There are people who really understand me.", reverse: true },
    { text: "I feel like no one really knows me well." },
    { text: "I have someone I could call late at night if I needed to talk.", reverse: true },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Loneliness",
      description: "Your answers suggest you generally feel connected and supported by the people in your life.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Mild Loneliness",
      description: "You reported a mild level of loneliness. Everyone experiences this at times, especially during transitions.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Moderate Loneliness",
      description:
        "You reported a fairly high level of loneliness. Reaching out, even in small ways, or joining a group around a shared interest can help rebuild connection over time.",
    },
    {
      max: 100,
      tone: "danger",
      label: "High Loneliness",
      description:
        "You reported a high level of loneliness. This is more common than it feels — consider talking to a counselor, and know that persistent loneliness is worth taking seriously and addressing with support.",
    },
  ],
  resultHeading: "Loneliness Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general concept of perceived social connectedness versus loneliness. It is not the UCLA Loneliness Scale or any validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function LonelinessTest() {
  return <LikertScreener config={config} />;
}
