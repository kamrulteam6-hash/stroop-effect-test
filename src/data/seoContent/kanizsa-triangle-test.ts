import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Kanizsa Triangle Test to measure how quickly you perceive illusory contours formed by inducing shapes.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures perception of illusory contours — shapes your brain constructs from inducing elements even though no real edges are drawn.",
        },
      ],
    },
  ],
};
