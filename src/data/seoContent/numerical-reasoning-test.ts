import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Numerical Reasoning Test to answer 12 multiple-choice questions covering percentages, ratios, averages, and algebra, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures your ability to interpret and solve numerical problems involving percentages, ratios, averages, and basic algebra.",
        },
      ],
    },
  ],
};
