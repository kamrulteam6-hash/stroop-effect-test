import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Ponzo Illusion Test to measure how converging perspective lines distort your judgment of line length.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures susceptibility to the Ponzo illusion, where converging lines make identically sized objects appear different in length.",
        },
      ],
    },
  ],
};
