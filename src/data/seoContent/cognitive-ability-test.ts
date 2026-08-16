import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Cognitive Ability Test to answer 12 mixed questions covering logic, numerical reasoning, and verbal comprehension, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures general cognitive ability across logic, numerical reasoning, and verbal comprehension, similar in style to pre-employment screening tests.",
        },
      ],
    },
  ],
};
