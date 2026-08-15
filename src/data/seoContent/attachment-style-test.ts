import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Attachment Style Test to answer short statements about closeness and trust and discover your secure, anxious, avoidant, or fearful-avoidant style.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported anxiety and avoidance in close relationships, the two dimensions commonly used to describe adult attachment style.",
        },
      ],
    },
  ],
};
