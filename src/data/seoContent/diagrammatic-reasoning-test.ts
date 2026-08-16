import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Diagrammatic Reasoning Test to trace simple flowcharts and process diagrams and work out what each process outputs, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures your ability to follow logical rules and processes represented as flowcharts and diagrams.",
        },
      ],
    },
  ],
};
