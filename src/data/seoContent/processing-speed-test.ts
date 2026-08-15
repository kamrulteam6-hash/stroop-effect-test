import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Processing Speed Test to compare letter-string pairs as fast as you can and measure your perceptual processing speed.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures perceptual processing speed using a rapid same/different letter-string comparison task.",
        },
      ],
    },
  ],
};
