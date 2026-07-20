import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Matrix reasoning puzzles — spotting the rule that governs a grid of shapes and predicting what belongs in the missing cell — are one of the most respected formats in nonverbal intelligence testing, largely because they don't depend on language, vocabulary, or cultural background. This test generates a fresh 3×3 puzzle every round, so there's no fixed answer key to memorize.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Pattern IQ Test Works",
    },
    {
      type: "paragraph",
      text: "Each puzzle is a 3×3 grid with the bottom-right cell missing. Every row uses a consistent shape, and every column uses a consistent count of that shape — once you spot both rules, you can work out exactly what the missing cell should contain. Pick the matching option from the four choices below the grid. You'll solve 8 puzzles per session, and your score is how many you get right.",
    },
    {
      type: "heading",
      text: "Why Matrix Reasoning Is a Trusted IQ Format",
    },
    {
      type: "paragraph",
      text: "Tests built around this exact format — most famously Raven's Progressive Matrices — have been used in psychological research for decades specifically because they isolate abstract, nonverbal reasoning from vocabulary, reading ability, and cultural knowledge. Instead of asking you to recall a fact or define a word, matrix reasoning asks you to identify an abstract rule from limited examples and apply it correctly — a skill closely associated with fluid intelligence, the ability to reason and solve novel problems independent of prior learned knowledge.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Two Rules, Not One",
    },
    {
      type: "paragraph",
      text: "The trick in each puzzle here is that there are two independent rules running at once — one governing shape identity across each row, and one governing quantity across each column. Many people instinctively look for just one pattern and get stuck; the puzzles resolve cleanly once you separate \"what shape belongs in this row\" from \"how many copies belong in this column\" as two separate questions rather than one combined guess.",
    },
    {
      type: "heading",
      text: "Tips for Solving Faster",
    },
    {
      type: "list",
      items: [
        "Scan each row first and ask: what's the one shape that stays constant across it?",
        "Then scan each column and ask: what's the one count that stays constant down it?",
        "Combine both answers for the missing cell — the shape from its row, the count from its column.",
        "Rule out any option that matches only one of the two rules before picking your final answer.",
      ],
    },
    {
      type: "callout",
      icon: "🧩",
      title: "New puzzle every attempt",
      tone: "primary",
      text: "Every puzzle is freshly generated with a new random shape and count arrangement, so retaking the test always gives you a genuinely new set to reason through.",
    },
    {
      type: "paragraph",
      text: "Want to test a different kind of nonverbal reasoning? Try our [Schulte Table Test](/test/schulte-table-test), which measures visual search speed and peripheral scanning instead of rule inference.",
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
          question: "Is this an official IQ test?",
          answer:
            "No. This is a free, casual matrix-reasoning game inspired by the same puzzle format used in formal nonverbal IQ tests, built for entertainment and self-practice rather than clinical or official IQ scoring.",
        },
        {
          question: "What is matrix reasoning actually measuring?",
          answer:
            "It's generally associated with fluid intelligence — the ability to identify abstract patterns and solve novel problems using logic alone, independent of learned facts or vocabulary.",
        },
        {
          question: "Why do puzzles use two rules instead of one?",
          answer:
            "Combining a row-based rule (shape) with a column-based rule (count) makes the puzzle a genuine matrix-reasoning task rather than a simple single-pattern guess, closer to the classic format used in tests like Raven's Progressive Matrices.",
        },
        {
          question: "Can I get better at this with practice?",
          answer:
            "Yes — recognizing the two-rule structure quickly is a learnable strategy, and most people notice faster solving times after a few rounds, even though puzzles are freshly randomized each time.",
        },
        {
          question: "Why is this test nonverbal?",
          answer:
            "It relies entirely on visual shapes and counts rather than words or numbers, which is intentional — nonverbal reasoning tests are designed to reduce the influence of language, vocabulary, and cultural background on the result.",
        },
      ],
    },
  ],
};
