import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free HEXACO Personality Test to answer short statements and get your profile across all six HEXACO personality dimensions.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures your profile across the six HEXACO personality dimensions: Honesty-Humility, Emotionality, eXtraversion, Agreeableness, Conscientiousness, and Openness.",
        },
      ],
    },
  ],
};
