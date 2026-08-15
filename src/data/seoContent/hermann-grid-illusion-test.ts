import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Hermann Grid Illusion Test to see the classic phantom dots illusion while testing your visual search speed at grid intersections.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures visual search speed against the backdrop of the Hermann grid illusion, where phantom gray dots appear at white intersections of a black grid.",
        },
      ],
    },
  ],
};
