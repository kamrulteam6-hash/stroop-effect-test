"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "empathy-test",
  intro:
    "Answer 10 short statements about how you generally respond to other people's feelings and experiences. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I can usually tell how someone is feeling, even if they don't say it directly." },
    { text: "I feel genuinely moved when I see someone else in distress." },
    { text: "I try to understand a situation from the other person's point of view before judging it." },
    { text: "Other people's emotions affect my own mood." },
    { text: "I find it easy to comfort someone who is upset." },
    { text: "I notice small changes in a friend's tone or body language that signal something's wrong." },
    { text: "I feel uncomfortable when someone I care about is in pain, even if it doesn't affect me directly." },
    { text: "I go out of my way to help someone who seems to be struggling." },
    { text: "I can imagine how a stranger in a difficult situation might be feeling." },
    { text: "People tell me I'm a good listener when they need to talk something through." },
  ],
  bands: [
    {
      max: 30,
      tone: "gold",
      label: "Lower Empathy",
      description:
        "Your answers suggest you may find it harder to tune into others' emotions or perspectives. This can be worked on — active listening and perspective-taking are trainable skills.",
    },
    {
      max: 55,
      tone: "primary",
      label: "Moderate Empathy",
      description: "You reported a moderate level of empathic responsiveness — you pick up on some emotional cues more than others.",
    },
    {
      max: 78,
      tone: "success",
      label: "High Empathy",
      description: "You reported a strong tendency to notice and respond to other people's emotions and perspectives.",
    },
    {
      max: 100,
      tone: "success",
      label: "Very High Empathy",
      description:
        "You reported a very strong empathic response to others. This is often a strength in relationships, though it's worth pairing with healthy boundaries to avoid emotional exhaustion.",
    },
  ],
  resultHeading: "Empathy Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general concept of empathy (recognizing and responding to others' emotions and perspectives). It is not the Empathy Quotient, IRI, or any validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function EmpathyTest() {
  return <LikertScreener config={config} />;
}
