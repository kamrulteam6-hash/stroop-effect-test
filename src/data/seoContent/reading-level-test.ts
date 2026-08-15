import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Reading Level Test to answer short statements about your reading habits and comprehension for an informal reading-level estimate.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported reading habits and comprehension confidence to give a rough estimate of your reading level.",
        },
      ],
    },
  ],
};
