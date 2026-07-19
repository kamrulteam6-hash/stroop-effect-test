import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The Visual Memory Test asks you to remember which tiles on a grid briefly light up, then click them all back correctly — in any order. Unlike sequence memory, order doesn't matter here; what matters is remembering the full set of locations. Choose a 5×5 grid for the standard version or 6×6 for a larger, harder field of possible positions, and pick 3 or 5 lives before you start.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Visual Memory Test Works",
    },
    {
      type: "paragraph",
      text: "A handful of tiles on the grid flash briefly to show you which ones are \"targets\" for this round. Once they go dark, click the tiles you remember being highlighted, in any order you like. Correctly click them all, and the next round adds one more target tile. Click a tile that wasn't a target, and you lose a life. The game ends when your lives run out, and your score is the highest level you reached.",
    },
    {
      type: "heading",
      text: "The Science Behind Visual Memory",
    },
    {
      type: "paragraph",
      text: "This task measures visual working memory capacity — specifically, how many distinct spatial locations you can hold in mind simultaneously, independent of order. Unlike sequence memory, which relies partly on temporal/order-based encoding, this version leans more heavily on parallel visual encoding, where your brain tries to \"snapshot\" the whole pattern at once. Research on visual working memory generally finds a capacity limit of around 3 to 4 independent items for most people, though spatial clustering and pattern recognition can help push effective performance higher.",
    },
    {
      type: "heading",
      id: "why-3-4-items",
      text: "Why Only 3–4 Items? The Iconic Memory Connection",
    },
    {
      type: "paragraph",
      text: "In a classic 1960 experiment, psychologist George Sperling briefly flashed grids of letters to participants and asked them to report as many as they could. People consistently reported only 4 to 5 items — even though later versions of the experiment showed that nearly all the letters were briefly available in a separate, extremely short-lived buffer called iconic memory. The bottleneck isn't your eyes; it's the hard limit on how much visual information your working memory can actually hold onto and consciously report before it fades. That well-replicated 3–4 item ceiling is exactly what makes a 5×5 or 6×6 grid with more than a handful of targets genuinely difficult, no matter how sharp your vision is.",
    },
    {
      type: "heading",
      id: "grid-size",
      text: "5×5 vs. 6×6 Grid",
    },
    {
      type: "paragraph",
      text: "The 5×5 grid gives you 25 possible tile positions; 6×6 expands that to 36. More possible positions means each target is harder to pin down precisely in memory, even at the same target count — so a 6×6 result is a meaningfully tougher achievement than the same level reached on 5×5.",
    },
    {
      type: "heading",
      text: "Tips to Improve Your Score",
    },
    {
      type: "list",
      items: [
        "Try to see the highlighted tiles as a shape or pattern rather than individual dots — chunking nearby tiles into one mental cluster effectively raises your capacity.",
        "Scan the grid systematically (left to right, top to bottom) as tiles flash to anchor their positions.",
        "Click the tiles you're most confident about first, then work through the uncertain ones.",
        "Avoid rushing your clicks — there's no time pressure once the recall phase begins.",
        "Start on 5×5 with 5 lives, then move to 6×6 or 3 lives once you're consistently clearing early levels.",
      ],
    },
    {
      type: "callout",
      icon: "🧩",
      title: "Compare with an order-based memory test",
      tone: "primary",
      text: "This test ignores order. For a version where the exact sequence matters, try our [Sequence Memory Test](/test/sequence-memory-test), or test a completely different memory system with our [Number Memory Test](/test/number-memory-test).",
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
          question: "What's a good visual memory test level?",
          answer:
            "Reaching level 8 to 10 (remembering roughly 10 to 12 tile locations) is a strong result for most people, though performance varies a lot based on how you mentally group the pattern.",
        },
        {
          question: "How is this different from the sequence memory test?",
          answer:
            "Here, the order you click tiles doesn't matter — only that you identify the correct set of locations. Sequence memory, by contrast, requires reproducing the exact order tiles flashed in.",
        },
        {
          question: "Why can I only really hold 3–4 items in mind at once?",
          answer:
            "It's a well-documented limit of visual working memory, distinct from the much larger but extremely short-lived 'iconic memory' buffer that briefly holds raw visual input before most of it fades within a fraction of a second.",
        },
        {
          question: "Why do some people see it as shapes?",
          answer:
            "Many people naturally group nearby highlighted tiles into a mental shape (like an L or a triangle), which is an effective memory strategy called 'chunking' that reduces the number of individual items to remember.",
        },
        {
          question: "Does screen size affect performance?",
          answer:
            "It can — a larger, clearer grid generally makes it easier to encode precise tile positions compared to a small or cramped screen.",
        },
      ],
    },
  ],
};
