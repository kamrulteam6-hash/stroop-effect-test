import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Highly Sensitive Person Test to answer short statements about sensory and emotional sensitivity and find out if you're an HSP.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported sensory processing sensitivity — how strongly you respond to sensory input, emotions, and your environment.",
        },
      ],
    },
  ],
};
