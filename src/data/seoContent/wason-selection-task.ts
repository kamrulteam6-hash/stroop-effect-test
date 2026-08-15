import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Wason Selection Task to test your formal logical reasoning by selecting the right cards to verify a conditional rule.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures conditional logical reasoning using the classic Wason card-selection paradigm from cognitive psychology.",
        },
      ],
    },
  ],
};
