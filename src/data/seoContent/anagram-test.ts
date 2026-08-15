import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Anagram Test to unscramble letters and form real words as quickly as possible, testing your verbal processing speed.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures verbal processing speed and pattern recognition through the classic task of unscrambling jumbled letters into real words.",
        },
      ],
    },
  ],
};
