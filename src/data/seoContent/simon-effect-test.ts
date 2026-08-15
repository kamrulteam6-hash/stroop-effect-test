import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Simon Effect Test to see how irrelevant spatial position can still influence your reaction time even when you're responding to color, not location.",
    },
    {
      type: "heading",
      id: "faq",
      text: "Frequently Asked Questions",
    },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures the Simon effect — the difference in reaction time between congruent and incongruent stimulus-response mapping.",
        },
      ],
    },
  ],
};
