import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Clerical Aptitude Test to answer questions on filing order, data checking, and basic office math skills, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures core clerical office skills like alphabetical/numerical filing, basic office math, and record organization.",
        },
      ],
    },
  ],
};
