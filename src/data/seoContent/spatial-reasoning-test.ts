import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Spatial Reasoning Test to judge whether grid patterns are rotated matches or different shapes, measuring spatial ability.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures spatial reasoning — your ability to mentally recognize rotated versions of a pattern versus genuinely different patterns.",
        },
      ],
    },
  ],
};
