import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Loss Aversion Test to discover how strongly losses loom larger than equivalent gains in your decision-making.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures loss aversion, a core concept from prospect theory describing the tendency to weigh potential losses more heavily than equivalent potential gains.",
        },
      ],
    },
  ],
};
