import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free General Aptitude Test to answer 12 broad questions spanning math, logic, verbal skills, and general reasoning, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures a broad range of aptitude skills including basic math, logic, vocabulary, and general reasoning ability.",
        },
      ],
    },
  ],
};
