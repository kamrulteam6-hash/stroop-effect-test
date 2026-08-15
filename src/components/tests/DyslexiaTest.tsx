"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "dyslexia-test",
  intro:
    "Answer 10 short statements about reading, spelling, and written language. Answer with what has generally been true for you, especially growing up.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I find reading aloud noticeably harder than reading silently." },
    { text: "I mix up similar-looking letters (like b and d) or words when reading or writing." },
    { text: "I read more slowly than people around me, even on familiar material." },
    { text: "I have to re-read sentences multiple times to understand them." },
    { text: "My spelling is inconsistent, even for words I've written many times before." },
    { text: "I lose my place easily when reading a page of text." },
    { text: "I find it hard to sound out unfamiliar words." },
    { text: "Reading felt significantly harder for me than for my classmates growing up." },
    { text: "I avoid tasks that involve a lot of reading when I can." },
    { text: "I understand spoken information much more easily than the same information in writing." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Few Reported Difficulties",
      description: "Your answers suggest few reading-related difficulties commonly associated with dyslexia.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Some Difficulties",
      description: "You reported some difficulty with reading and written language. Many people experience this to varying degrees.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Notable Difficulties",
      description:
        "You reported a fairly high level of reading-related difficulty. A formal evaluation by an educational psychologist can clarify whether dyslexia support strategies would help.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Difficulties",
      description:
        "You reported a high level of reading-related difficulty. This screener cannot diagnose dyslexia, but a formal assessment could open the door to helpful accommodations and strategies.",
    },
  ],
  resultHeading: "Dyslexia Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by commonly discussed reading and language traits associated with dyslexia. It is not a validated clinical or educational instrument, and cannot diagnose dyslexia or any learning disability. A proper evaluation requires standardized testing by a qualified educational psychologist or specialist.",
};

export function DyslexiaTest() {
  return <LikertScreener config={config} />;
}
