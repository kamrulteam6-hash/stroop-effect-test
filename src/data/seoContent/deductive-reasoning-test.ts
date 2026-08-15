import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Deductive Reasoning Test to solve logic puzzles using strict deduction from given clues, measuring your reasoning ability.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures deductive reasoning — your ability to draw conclusions that follow strictly and necessarily from given premises, without outside assumptions.",
        },
      ],
    },
  ],
};
