import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Cognitive Flexibility Test to list creative uses for a common object and measure divergent thinking and mental flexibility.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures divergent thinking and cognitive flexibility through an alternate-uses task, where you generate as many varied uses for an object as you can.",
        },
      ],
    },
  ],
};
