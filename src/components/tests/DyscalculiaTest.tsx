"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "dyscalculia-test",
  intro:
    "Answer 10 short statements about numbers, math, and quantity. Answer with what has generally been true for you, especially growing up.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I struggle to do simple math in my head that others seem to do easily." },
    { text: "I find it hard to estimate quantities, like how many items are in a group, at a glance." },
    { text: "I mix up numbers when reading or writing them (like 13 and 31)." },
    { text: "I have trouble remembering math facts, like multiplication tables, even with practice." },
    { text: "I get confused following multi-step math procedures." },
    { text: "I find it hard to judge time intervals or how long something will take." },
    { text: "I struggle to read graphs, charts, or tables that involve numbers." },
    { text: "I avoid situations that involve calculating in front of others, like splitting a bill." },
    { text: "Math felt significantly harder for me than for my classmates growing up." },
    { text: "I lose track of numbers when counting money or making change." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Few Reported Difficulties",
      description: "Your answers suggest few number-related difficulties commonly associated with dyscalculia.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Some Difficulties",
      description: "You reported some difficulty with numbers and math. Many people experience this to varying degrees.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Notable Difficulties",
      description:
        "You reported a fairly high level of number-related difficulty. A formal evaluation by an educational psychologist can clarify whether dyscalculia support strategies would help.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Difficulties",
      description:
        "You reported a high level of number-related difficulty. This screener cannot diagnose dyscalculia, but a formal assessment could open the door to helpful accommodations and strategies.",
    },
  ],
  resultHeading: "Dyscalculia Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by commonly discussed numerical and math-related traits associated with dyscalculia. It is not a validated clinical or educational instrument, and cannot diagnose dyscalculia or any learning disability. A proper evaluation requires standardized testing by a qualified educational psychologist or specialist.",
};

export function DyscalculiaTest() {
  return <LikertScreener config={config} />;
}
