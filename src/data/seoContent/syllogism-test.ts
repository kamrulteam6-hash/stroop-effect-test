import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Syllogism Test to judge whether logical conclusions truly follow from their premises, testing pure deductive reasoning.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures deductive reasoning — your ability to judge logical validity independent of whether a conclusion sounds true in the real world.",
        },
      ],
    },
  ],
};
