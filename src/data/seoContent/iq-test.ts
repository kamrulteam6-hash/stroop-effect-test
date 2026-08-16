import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free IQ Test to answer 15 questions spanning numerical, verbal, and pattern-based reasoning, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "Is this a real, clinically valid IQ score?",
          answer: "No — this is an entertainment-oriented quiz for self-assessment and is not a substitute for a professionally administered intelligence test.",
        },
      ],
    },
  ],
};
