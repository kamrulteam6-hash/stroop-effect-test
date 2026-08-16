import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Career Personality Test to answer 12 short statements and discover whether you're a Leader, Analyst, Creator, or Supporter at work.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures which of four broad workplace personality styles — Leader, Analyst, Creator, or Supporter — best matches how you naturally show up at work.",
        },
      ],
    },
  ],
};
