import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Prospective Memory Test to measure your ability to remember a delayed intention while performing another task.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures prospective memory — remembering to carry out a planned action at the right moment while your attention is occupied by an unrelated ongoing task.",
        },
      ],
    },
  ],
};
