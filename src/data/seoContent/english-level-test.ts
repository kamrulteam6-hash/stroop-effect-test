import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free English Level Test to answer short statements about your English ability and get an informal CEFR level estimate from A1 to C2.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported English ability across reading, writing, listening, and speaking to estimate a CEFR level.",
        },
      ],
    },
  ],
};
