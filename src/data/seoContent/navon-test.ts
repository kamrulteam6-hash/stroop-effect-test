import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Navon Test to measure global versus local visual processing using large letters composed of smaller letters.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures global-local visual processing using the classic Navon figures paradigm, revealing whether you process the big picture or fine details faster.",
        },
      ],
    },
  ],
};
