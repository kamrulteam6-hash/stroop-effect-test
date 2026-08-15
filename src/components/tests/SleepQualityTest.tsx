"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "sleep-quality-test",
  intro:
    "Answer 10 short statements about your sleep over the past month. Answer honestly for the most accurate result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I fall asleep within 20-30 minutes of going to bed." },
    { text: "I sleep through the night without waking up." },
    { text: "I wake up feeling rested and refreshed." },
    { text: "I have a consistent sleep and wake schedule." },
    { text: "I feel alert and energized throughout the day.", reverse: false },
    { text: "I lie awake for a long time before falling asleep.", reverse: true },
    { text: "I wake up multiple times during the night.", reverse: true },
    { text: "I feel groggy or unrested even after a full night's sleep.", reverse: true },
    { text: "I rely on caffeine to get through the day because I'm tired.", reverse: true },
    { text: "My sleep schedule varies a lot from day to day.", reverse: true },
  ],
  bands: [
    {
      max: 30,
      tone: "danger",
      label: "Poor Sleep Quality",
      description:
        "Your answers suggest your sleep isn't very restorative right now. Consistent sleep and wake times, limiting screens before bed, and reducing caffeine can help — and a doctor can help if this persists.",
    },
    {
      max: 55,
      tone: "gold",
      label: "Fair Sleep Quality",
      description: "You reported a mixed pattern — some restful nights, some rough ones. Small routine changes can often improve consistency.",
    },
    {
      max: 78,
      tone: "primary",
      label: "Good Sleep Quality",
      description: "You reported generally restful, consistent sleep with only occasional disruption.",
    },
    {
      max: 100,
      tone: "success",
      label: "Excellent Sleep Quality",
      description: "You reported consistently restful, refreshing sleep — a strong foundation for overall health.",
    },
  ],
  resultHeading: "Sleep Quality Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the general concept of subjective sleep quality (falling asleep, staying asleep, and feeling rested). It is not the Pittsburgh Sleep Quality Index or any validated clinical instrument, and its result is a rough snapshot, not a diagnosis.",
};

export function SleepQualityTest() {
  return <LikertScreener config={config} />;
}
