import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Leadership Style Test to answer short statements about how you lead or would like to lead a team and discover your leadership style.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures which of five leadership styles — directive, democratic, coaching, visionary, or supportive — you tend to default to.",
        },
      ],
    },
  ],
};
