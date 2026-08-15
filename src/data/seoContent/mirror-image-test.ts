import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Mirror Image Test to judge whether rotated letters are normal or mirrored, measuring your visual discrimination speed.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures visual discrimination — how quickly and accurately you can tell a mirror-reversed shape from a normal one, even when rotated.",
        },
      ],
    },
  ],
};
