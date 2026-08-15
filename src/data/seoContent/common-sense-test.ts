import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Common Sense Test to choose the most sensible response to everyday scenarios and measure your practical judgment.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures practical, everyday judgment through scenarios with a generally agreed-upon most sensible response.",
        },
      ],
    },
  ],
};
