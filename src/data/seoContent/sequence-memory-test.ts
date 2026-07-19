import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The Sequence Memory Test, often called a \"chimp test\" after the famous chimpanzee memory study it's inspired by, challenges you to watch a growing pattern of flashing tiles and then repeat it back exactly. Choose a 3×3 grid for the classic version or 4×4 Hard mode for a much larger set of possible tile positions. It starts easy with just one tile, but each successful round adds another, quickly turning into a serious test of visual-spatial working memory.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Sequence Memory Test Works",
    },
    {
      type: "paragraph",
      text: "A grid of tiles is shown. A sequence of tiles lights up one at a time — watch closely, because the order matters. Once the sequence finishes, click the tiles back in the exact same order you saw them flash. Get it right, and the sequence grows by one more tile for the next round. Get it wrong, and the game ends, showing you the highest level and longest sequence you managed to reproduce.",
    },
    {
      type: "heading",
      id: "chimp-test",
      text: "Ayumu the Chimpanzee and the Study Behind This Test",
    },
    {
      type: "paragraph",
      text: "This style of test owes its popular nickname to a genuinely famous 2007 study by Kyoto University primatologists Inoue and Matsuzawa. A young chimpanzee named Ayumu was flashed the positions of nine numbered squares for just 210 milliseconds — barely a fifth of a second — and asked to touch them in ascending order from memory. Ayumu scored around 80% accuracy on the hardest trials, while a group of human college students given the same task averaged roughly 40%. The finding didn't suggest chimps have generally superior memory to humans — but it did show that young chimpanzees can have a remarkably strong, fast form of visuospatial working memory, which sparked wide interest in comparative memory research.",
    },
    {
      type: "heading",
      id: "corsi-task",
      text: "The Corsi Block-Tapping Task",
    },
    {
      type: "paragraph",
      text: "This test also draws on an older, well-established neuropsychological tool: the Corsi block-tapping task, developed in the early 1970s using nine physical wooden blocks on a board. In the original task, an examiner taps a sequence of blocks and the subject reproduces it, either forward or backward. Research using the Corsi task consistently finds an average human span of around 5 to 6 blocks — a useful benchmark for what counts as a solid, typical result on this style of spatial memory test.",
    },
    {
      type: "heading",
      id: "grid-size",
      text: "3×3 vs. 4×4 Hard Mode",
    },
    {
      type: "paragraph",
      text: "The 3×3 grid matches the classic version of this test, with 9 possible tile positions. The 4×4 Hard grid expands that to 16 positions, which makes each new tile in the sequence harder to visualize and place — even at the same sequence length, a 4×4 sequence is meaningfully more difficult to hold in memory than a 3×3 one, since there are more possible locations to distinguish between.",
    },
    {
      type: "heading",
      text: "Tips to Improve Your Score",
    },
    {
      type: "list",
      items: [
        "Watch the whole sequence before planning your response — don't try to click while it's still playing.",
        "Group tiles mentally into short chunks (like remembering 2–3 tiles at a time) rather than one long chain.",
        "Picture the sequence as a path or shape moving across the grid rather than isolated flashes.",
        "Stay calm under pressure — anxiety tends to disrupt visuospatial memory more than verbal memory.",
        "Start on the 3×3 grid to build confidence before trying 4×4 Hard mode.",
        "Take a short pause before each attempt if you're playing multiple rounds in a row.",
      ],
    },
    {
      type: "callout",
      icon: "🔢",
      title: "Compare with a numbers-based memory test",
      tone: "primary",
      text: "This test measures spatial sequence memory. For a comparison using pure numbers instead of grid positions, try our [Number Memory Test](/test/number-memory-test), or for a related but order-independent challenge, our [Visual Memory Test](/test/visual-memory-test).",
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
          question: "What's a good sequence memory level?",
          answer:
            "Reaching a sequence length of 7 to 9 tiles on the 3×3 grid is a solid result for most adults, roughly in line with typical working memory capacity limits and the average Corsi block span of 5–6 found in research.",
        },
        {
          question: "Why is it called the 'chimp test'?",
          answer:
            "It's named after a 2007 Kyoto University study in which a young chimpanzee, Ayumu, outperformed human college students on a very similar numbered-square memory task, drawing significant public and scientific attention.",
        },
        {
          question: "Can humans really not beat chimps at this?",
          answer:
            "Many people can and do match or exceed the human students' scores from the original study with practice — the widely cited comparison was against untrained college students at extremely brief 210-millisecond exposure times, not a claim that no human can compete.",
        },
        {
          question: "Is this the same as photographic memory?",
          answer:
            "No. This task measures short-term visuospatial working memory, which fades within seconds, rather than the extremely rare and scientifically debated phenomenon of long-term photographic memory.",
        },
        {
          question: "Should I play 3×3 or 4×4 mode?",
          answer:
            "Start with 3×3 to learn the mechanics and build a baseline, then switch to 4×4 Hard mode for a genuinely tougher challenge once tiles start feeling predictable.",
        },
        {
          question: "Can training improve my sequence memory?",
          answer:
            "Yes, with regular practice most people can improve their sequence length by a few tiles as they develop better chunking and visualization strategies.",
        },
      ],
    },
  ],
};
