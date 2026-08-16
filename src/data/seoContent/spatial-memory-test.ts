import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Spatial Memory Test to memorize where a dot flashes, then click the exact spot after a short delay across 8 rounds, with instant accuracy scoring.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures spatial memory — your ability to remember and recall a precise location after a short delay.",
        },
      ],
    },
  ],
};
