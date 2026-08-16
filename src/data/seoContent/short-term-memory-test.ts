import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Short-Term Memory Test to study a word list and recall it immediately to measure your short-term memory capacity.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures short-term free recall — how many unrelated words you can remember immediately after a brief study period.",
        },
      ],
    },
  ],
};
