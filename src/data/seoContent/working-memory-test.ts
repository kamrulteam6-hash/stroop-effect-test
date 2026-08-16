import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Working Memory Test to track and update the most recent value in three slots and measure your working memory updating ability.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures working memory updating — your ability to continuously replace outdated information with the most recent relevant value.",
        },
      ],
    },
  ],
};
