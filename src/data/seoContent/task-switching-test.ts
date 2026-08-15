import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Task Switching Test to measure your cognitive flexibility. Switch between odd/even and low/high number judgments and see your switch cost.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures task-switching cost — the extra time it takes to respond after switching rules compared to repeating the same rule.",
        },
      ],
    },
  ],
};
