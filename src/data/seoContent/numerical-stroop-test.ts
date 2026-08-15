import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Numerical Stroop Test to measure interference between numerical value and physical size judgments.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures the size-congruity effect — how physical size interferes with judging which of two digits has the larger numerical value.",
        },
      ],
    },
  ],
};
