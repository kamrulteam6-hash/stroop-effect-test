"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "imposter-syndrome-test",
  intro:
    "Answer 10 short statements about how you feel regarding your achievements and abilities. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I feel like I've fooled people into thinking I'm more capable than I really am." },
    { text: "I attribute my successes to luck or timing rather than my own ability." },
    { text: "I worry that people will eventually 'find out' I'm not as good as they think." },
    { text: "I downplay my accomplishments when other people bring them up." },
    { text: "I feel intense pressure to overwork so no one notices any gaps in my ability." },
    { text: "I compare myself unfavorably to peers, even when my results are similar or better." },
    { text: "I find it hard to internalize praise or positive feedback." },
    { text: "I feel anxious before performance reviews or evaluations, even when I've prepared well." },
    { text: "I believe I need to be perfect to deserve my position or role." },
    { text: "I avoid taking credit for group work, even when I contributed significantly." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Imposter Feelings",
      description: "Your answers suggest you generally attribute your successes accurately and feel secure in your abilities.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Mild Imposter Feelings",
      description: "You reported a mild level of self-doubt about your competence. Many high achievers experience this occasionally.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Moderate Imposter Feelings",
      description:
        "You reported a fairly high level of self-doubt relative to your actual achievements. Naming this pattern is often the first step — talking with mentors or a therapist can help.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Imposter Feelings",
      description:
        "You reported a high level of imposter feelings. This pattern, often called imposter syndrome, is common among capable people and can be worked through with support and reframing.",
    },
  ],
  resultHeading: "Imposter Syndrome Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the widely discussed concept of imposter syndrome (persistent self-doubt about competence despite evidence of success). It is not the Clance IP Scale or any validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function ImposterSyndromeTest() {
  return <LikertScreener config={config} />;
}
