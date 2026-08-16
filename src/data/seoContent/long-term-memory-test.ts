import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Long-Term Memory Test to study a word list, complete a distraction task, then recall it to measure memory retention over a delay.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures memory retention after a delay filled with an unrelated distractor task, rather than immediate recall.",
        },
      ],
    },
  ],
};
