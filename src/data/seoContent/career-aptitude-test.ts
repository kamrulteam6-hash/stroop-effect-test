import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Career Aptitude Test to answer scenario and skill-based questions and see which broad career direction best fits your natural strengths.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures which broad category of skill — analytical, creative, mechanical, interpersonal, or organizational — best fits your natural strengths.",
        },
      ],
    },
  ],
};
