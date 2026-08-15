import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Multitasking Test to compare single-task and dual-task performance and measure your multitasking cost.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures the performance cost of doing two things at once by comparing your baseline reaction time to your reaction time while tracking a secondary task.",
        },
      ],
    },
  ],
};
