"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "emotional-regulation-test",
  intro:
    "Answer 10 short statements about how you typically manage strong emotions when they arise. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I can calm myself down without needing someone else's help." },
    { text: "I can identify what I'm feeling while I'm feeling it, not just afterward." },
    { text: "I pause before reacting when I feel a strong emotion coming on." },
    { text: "I have go-to strategies (breathing, movement, etc.) that help me manage stress." },
    { text: "I can experience a difficult emotion without it controlling my behavior." },
    { text: "Strong emotions take over before I can manage them.", reverse: true },
    { text: "I say or do things I regret when I'm overwhelmed.", reverse: true },
    { text: "I suppress my emotions until they build up and come out all at once.", reverse: true },
    { text: "Small setbacks throw off my whole day.", reverse: true },
    { text: "I struggle to recover quickly after an emotional upset.", reverse: true },
  ],
  bands: [
    {
      max: 30,
      tone: "danger",
      label: "Developing Regulation Skills",
      description: "Your answers suggest strong emotions are often hard to manage in the moment. Techniques like paced breathing and naming the emotion can help, and a therapist can teach more tools.",
    },
    {
      max: 55,
      tone: "gold",
      label: "Moderate Regulation Skills",
      description: "You reported a mixed pattern — steady with some emotions, more overwhelmed by others.",
    },
    {
      max: 78,
      tone: "primary",
      label: "Good Regulation Skills",
      description: "You reported a generally solid ability to notice and manage strong emotions before they take over.",
    },
    {
      max: 100,
      tone: "success",
      label: "Strong Regulation Skills",
      description: "You reported a consistently strong ability to notice, tolerate, and manage difficult emotions.",
    },
  ],
  resultHeading: "Emotional Regulation Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general concept of emotional regulation (noticing and managing emotional responses). It is not a validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function EmotionalRegulationTest() {
  return <LikertScreener config={config} />;
}
