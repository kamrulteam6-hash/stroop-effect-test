import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Mechanical Reasoning Test to answer questions about gears, levers, pulleys, and everyday mechanical systems, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures your intuitive understanding of basic mechanical and physical principles like gears, levers, and pulleys.",
        },
      ],
    },
  ],
};
