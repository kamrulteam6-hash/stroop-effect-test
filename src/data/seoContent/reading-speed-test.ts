import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Reading Speed Test to measure your words-per-minute reading speed with a built-in comprehension check.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures your reading speed in words per minute, paired with a comprehension quiz to confirm you actually absorbed the content.",
        },
      ],
    },
  ],
};
