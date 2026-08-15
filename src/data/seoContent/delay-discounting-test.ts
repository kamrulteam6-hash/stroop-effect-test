import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Delay Discounting Test to reveal how you weigh immediate rewards against larger delayed ones. Choose between smaller-sooner and larger-later amounts across several rounds.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures delay discounting — how steeply you devalue future rewards compared to smaller, immediate ones, a marker of impulsivity and patience.",
        },
      ],
    },
  ],
};
