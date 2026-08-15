import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Conflict Style Test to answer short statements about how you behave during disagreements and discover your primary conflict style.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures which of five conflict-resolution styles — avoiding, accommodating, competing, compromising, or collaborating — you tend to default to.",
        },
      ],
    },
  ],
};
