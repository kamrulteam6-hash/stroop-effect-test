import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Visual Paired Associates Test to study shape-color pairs and test your visual associative memory.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures visual associative memory — your ability to link and later recall the association between two unrelated visual properties.",
        },
      ],
    },
  ],
};
