import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Poggendorff Illusion Test to measure how accurately you can judge line alignment when a rectangle interrupts the line.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures susceptibility to the Poggendorff illusion, where an interrupted diagonal line appears misaligned when it passes behind an occluding shape.",
        },
      ],
    },
  ],
};
