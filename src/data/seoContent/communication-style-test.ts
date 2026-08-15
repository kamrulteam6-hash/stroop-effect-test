import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Communication Style Test to answer short statements about how you express yourself and discover your primary communication style.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures which of four communication styles — passive, aggressive, passive-aggressive, or assertive — you tend to default to.",
        },
      ],
    },
  ],
};
