import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Episodic Memory Test to study item-location-day combinations and recall them to measure your episodic memory binding.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures episodic memory — your ability to bind an item to both its location and the day it occurred, the 'what, where, and when' of an event.",
        },
      ],
    },
  ],
};
