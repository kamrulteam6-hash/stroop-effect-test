import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Sound Localization Test to measure how accurately you can judge the direction of a stereo-panned sound.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures spatial hearing — your ability to localize the direction a sound is coming from based on stereo panning cues.",
        },
      ],
    },
  ],
};
