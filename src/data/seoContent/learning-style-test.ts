import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Learning Style Test to answer 12 short statements and discover your primary learning style: Visual, Auditory, Reading/Writing, or Kinesthetic.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures your preferred way of absorbing new information, based on the popular VARK model of learning preferences.",
        },
      ],
    },
  ],
};
