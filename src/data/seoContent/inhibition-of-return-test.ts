import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Inhibition of Return Test to measure how your attention resists returning to a previously cued location.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures inhibition of return — the slowed reaction time when a target appears at a location that was recently cued.",
        },
      ],
    },
  ],
};
