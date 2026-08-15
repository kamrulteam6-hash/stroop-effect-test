"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "narcissism-test",
  intro:
    "Answer 10 short statements about how you generally see yourself and interact with others. Answer honestly — self-insight is more useful than a flattering score.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I believe I'm meant for great things, more so than most people." },
    { text: "I enjoy being the center of attention." },
    { text: "I expect people to recognize and admire my accomplishments." },
    { text: "I find it easy to manipulate situations to get what I deserve." },
    { text: "I get frustrated when others don't give me the credit I think I deserve." },
    { text: "I tend to see myself as more capable or important than most people around me." },
    { text: "I have a hard time genuinely admitting when I'm wrong." },
    { text: "I often fantasize about being exceptionally successful or powerful." },
    { text: "I feel entitled to special treatment, even if I haven't earned it." },
    { text: "I find it hard to stay interested in people once they stop admiring me." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Narcissistic Traits",
      description: "Your answers suggest few traits commonly associated with narcissism, such as grandiosity or entitlement.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Some Narcissistic Traits",
      description:
        "You reported a moderate level of these traits. Confidence and ambition are healthy in measure — the question is whether they come at the expense of others.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Several Narcissistic Traits",
      description:
        "You reported a fairly high level of grandiosity, entitlement, or need for admiration. Reflecting on how these patterns affect your relationships can be worthwhile.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Many Narcissistic Traits",
      description:
        "You reported a high level of these traits. This is not a diagnosis, but if these patterns are causing friction in your relationships or work, a psychologist can help you explore them constructively.",
    },
  ],
  resultHeading: "Narcissism Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described narcissistic trait domains (grandiosity, entitlement, and need for admiration). It is not the NPI or any clinical instrument, has not been validated, and cannot diagnose narcissistic personality disorder or any condition. Only a qualified clinician can provide a diagnosis.",
};

export function NarcissismTest() {
  return <LikertScreener config={config} />;
}
