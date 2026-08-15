import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Problem Solving Test to answer 10 logic and brain-teaser puzzles and measure your problem-solving ability.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures problem-solving ability through a set of original logic puzzles and lateral-thinking brain teasers.",
        },
      ],
    },
  ],
};
