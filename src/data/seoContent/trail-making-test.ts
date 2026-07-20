import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The Trail Making Test (TMT) is a real neuropsychological task used to measure visual attention, processing speed, and cognitive flexibility. Part A asks you to connect scattered numbers in ascending order — 1, 2, 3, and so on. Part B raises the difficulty by making you alternate between numbers and letters — 1, A, 2, B, 3, C — forcing your brain to constantly switch between two different sequencing rules.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Trail Making Test Works",
    },
    {
      type: "paragraph",
      text: "Choose Part A or Part B, and a count of 15 or 25 items. Circles scattered across the play area are labeled in a shuffled layout — click them in the correct order as quickly as you can. A line traces your path as you go, so you can see the route you took once you finish. Clicking the wrong circle doesn't end the test, but it's logged as an error and briefly flashes red. Your timer stops the instant you click the final circle correctly.",
    },
    {
      type: "heading",
      text: "What Part A vs. Part B Measures",
    },
    {
      type: "paragraph",
      text: "Part A is mostly a test of visual scanning speed and processing speed — how quickly you can locate and connect a simple, predictable sequence. Part B adds genuine cognitive complexity: alternating between two different category rules (numbers, then letters) requires cognitive flexibility and working memory to track which sequence comes next. In clinical use, a much larger Part B time relative to Part A time (sometimes called the B-A difference or B/A ratio) is specifically interpreted as reflecting difficulty with task-switching and cognitive flexibility, separate from raw visual search speed.",
    },
    {
      type: "heading",
      id: "clinical-use",
      text: "The Trail Making Test in Research and Clinical Practice",
    },
    {
      type: "paragraph",
      text: "The Trail Making Test is one of the most widely used neuropsychological assessments in the world, applied in research and clinical settings ranging from general cognitive screening to studies of stroke recovery and age-related cognitive change. Professional administrations use a standardized paper form, precise timing equipment, and trained scoring — this free browser-based version follows the same core logic in a simplified, self-directed format for casual practice and curiosity, not clinical assessment.",
    },
    {
      type: "heading",
      text: "Tips to Improve Your Time",
    },
    {
      type: "list",
      items: [
        "Scan the whole area briefly before starting to build a rough mental map of where key numbers are.",
        "Try Part A first to build a baseline before attempting the more demanding Part B.",
        "In Part B, say each item's category silently ('number... letter...') to reinforce the alternating rule.",
        "Move your cursor in a direct, efficient path rather than jumping erratically between distant circles.",
        "Don't panic after a wrong click — it costs you a moment, not the whole test.",
      ],
    },
    {
      type: "callout",
      icon: "🔢",
      title: "Another visual attention challenge",
      tone: "primary",
      text: "For a related but different visual search task, try our [Schulte Table Test](/test/schulte-table-test), which uses a fixed grid instead of scattered targets.",
    },
    {
      type: "heading",
      id: "faq",
      text: "Frequently Asked Questions",
    },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Trail Making Test time?",
          answer:
            "For the 25-item version, completing Part A in under 30 seconds and Part B in under 75 seconds are commonly cited as being within a typical healthy adult range, though results vary with age and practice.",
        },
        {
          question: "Why is Part B so much harder than Part A?",
          answer:
            "Part B requires constantly switching between two different sequencing rules (numbers and letters), which draws on cognitive flexibility and working memory in addition to the visual scanning speed that Part A measures on its own.",
        },
        {
          question: "Is this test used to screen for real conditions?",
          answer:
            "Professional, standardized versions of the Trail Making Test are used in clinical neuropsychology, including in research on stroke, traumatic brain injury, and age-related cognitive decline — but this free online version is a simplified format for casual practice, not a diagnostic tool.",
        },
        {
          question: "Does a wrong click end the test?",
          answer:
            "No. A wrong click briefly flashes red and adds to your error count, but the test continues — only successfully clicking every item in the correct order stops the timer.",
        },
        {
          question: "Should I do 15 or 25 items?",
          answer:
            "15 items is a faster, gentler introduction, especially for Part B. 25 items matches the traditional Trail Making Test format most commonly referenced in research.",
        },
      ],
    },
  ],
};
