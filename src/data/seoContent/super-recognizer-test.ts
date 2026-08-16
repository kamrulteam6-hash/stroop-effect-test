import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Super Recognizer Test to study faces and judge old versus new to measure your face recognition memory ability.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures face-recognition memory using an old/new judgment task, inspired by research on individual differences in face recognition ability.",
        },
      ],
    },
  ],
};
