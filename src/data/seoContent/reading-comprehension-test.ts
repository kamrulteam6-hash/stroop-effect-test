import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Reading Comprehension Test to read a passage and answer questions that measure your comprehension and retention.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures reading comprehension — how well you understand and retain information from a passage, independent of reading speed.",
        },
      ],
    },
  ],
};
