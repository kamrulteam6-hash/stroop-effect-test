import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Tone Memory Test to listen to and reproduce sequences of musical tones, measuring your auditory working memory span.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures auditory working memory — your ability to hold and reproduce a sequence of musical tones in the correct order.",
        },
      ],
    },
  ],
};
