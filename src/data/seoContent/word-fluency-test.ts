import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Word Fluency Test to generate as many words as possible starting with a given letter, measuring verbal fluency.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures verbal fluency — your ability to rapidly generate words matching a rule under time pressure, a common neuropsychological assessment task.",
        },
      ],
    },
  ],
};
