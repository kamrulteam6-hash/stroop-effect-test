"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "reading-level-test",
  intro:
    "Answer 10 short statements about your reading habits, comprehension, and vocabulary. This gives a rough, self-reported estimate — not a validated reading-level assessment.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I read books, articles, or long-form writing regularly." },
    { text: "I can understand dense or technical writing without much difficulty." },
    { text: "I rarely need to look up unfamiliar words while reading." },
    { text: "I can summarize the main argument of a complex article after one read." },
    { text: "I enjoy reading material that challenges me, not just easy material." },
    { text: "I find myself re-reading sentences to understand them.", reverse: true },
    { text: "I avoid books or articles that look long or complicated.", reverse: true },
    { text: "I struggle to follow the structure of a long argument or essay.", reverse: true },
    { text: "I prefer simple, straightforward writing over nuanced or literary writing.", reverse: true },
    { text: "I finish books or long articles I start, rather than abandoning them." },
  ],
  bands: [
    {
      max: 30,
      tone: "primary",
      label: "Developing Reader",
      description: "Your answers suggest you're most comfortable with shorter, more straightforward material — a fine starting point to build from with regular reading practice.",
    },
    {
      max: 55,
      tone: "primary",
      label: "Intermediate Reader",
      description: "You reported a solid, functional reading level, comfortable with everyday material and able to handle moderately complex writing.",
    },
    {
      max: 78,
      tone: "success",
      label: "Advanced Reader",
      description: "You reported strong comprehension and comfort with complex, long-form material.",
    },
    {
      max: 100,
      tone: "success",
      label: "Expert Reader",
      description: "You reported very strong reading habits and comprehension, comfortable with dense, technical, or literary writing.",
    },
  ],
  resultHeading: "Reading Level Result",
  disclaimer:
    "This is an original, informal self-report scale based on reading habits and self-rated comprehension — not a standardized reading-level or Lexile assessment, which requires an actual passage-based test administered by a reading specialist or educator.",
};

export function ReadingLevelTest() {
  return <LikertScreener config={config} />;
}
