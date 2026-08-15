import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Cognitive Reflection Test (CRT) to see how well you override tempting but wrong intuitive answers with deliberate reasoning.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures cognitive reflection — the ability to resist an intuitive but incorrect answer in favor of further reflection that leads to the correct response.",
        },
      ],
    },
  ],
};
