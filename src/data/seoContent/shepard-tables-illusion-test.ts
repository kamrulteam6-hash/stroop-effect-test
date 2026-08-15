import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Shepard Tables Illusion Test to measure how perspective distortion affects your judgment of identical shapes' sizes.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures susceptibility to the Shepard tables illusion, where identical parallelogram shapes appear to be different sizes due to perspective cues.",
        },
      ],
    },
  ],
};
