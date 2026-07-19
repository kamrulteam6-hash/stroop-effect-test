import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The Verbal Memory Test challenges you to keep track of every word you've seen during the game, drawn from a pool of 70 words. Each time a word appears, you decide whether it's NEW or one you've already SEEN. It sounds simple at first, but as the list of remembered words grows, so does the mental load — see how long you can keep it up before you run out of lives.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Verbal Memory Test Works",
    },
    {
      type: "paragraph",
      text: "A single word appears on screen. If you haven't seen it yet in this session, click NEW. If it's a repeat from earlier in the game, click SEEN. Choose 3 or 5 lives before you start — every wrong answer costs one life, and the game ends when you run out. Your final score is the total number of words you correctly identified, which reflects how large a mental \"seen\" list you could maintain at once.",
    },
    {
      type: "heading",
      id: "recognition-vs-recall",
      text: "Recognition vs. Recall Memory",
    },
    {
      type: "paragraph",
      text: "Memory researchers distinguish between two very different retrieval tasks. Recall means producing a memory with no cue to help you — like typing back a sequence of digits from scratch in our [Number Memory Test](/test/number-memory-test). Recognition means simply deciding whether something feels familiar, which this test measures directly. Recognition is consistently easier and more reliable than recall: people can typically recognize far more items than they could ever recall unprompted, because the word itself acts as its own retrieval cue. That's exactly why verbal memory scores tend to run much higher than digit span or sequence memory scores — you're testing a fundamentally easier kind of memory, not a \"better\" one.",
    },
    {
      type: "heading",
      text: "The Science Behind Verbal Memory",
    },
    {
      type: "paragraph",
      text: "As the pool of previously seen words grows, your brain relies increasingly on a mix of semantic memory (word meaning) and episodic memory (the specific experience of having seen that word during this game session), making sustained performance a genuine test of memory endurance, not just quick recognition. Recognition memory tasks like this one are also used in clinical and research settings — including studies of how memory changes with conditions like Alzheimer's disease — because they isolate a specific, well-understood memory system.",
    },
    {
      type: "heading",
      text: "Tips to Improve Your Score",
    },
    {
      type: "list",
      items: [
        "Create a quick mental image or association for unusual words as they appear.",
        "Stay in a steady rhythm rather than rushing — panic tends to cause avoidable mistakes.",
        "Focus fully on the task; even brief distractions can cause you to miss a repeat.",
        "Notice word categories (animals, objects, colors) to build extra memory cues.",
        "Take short breaks between attempts — verbal memory endurance benefits from a fresh mental state.",
        "Start with 5 lives while you're learning the test, then challenge yourself with 3 once you're consistent.",
      ],
    },
    {
      type: "table",
      headers: ["Words Correctly Identified", "Typical Interpretation"],
      rows: [
        ["Under 10", "Below typical — try again once fully focused"],
        ["10–17", "Typical range for a first attempt"],
        ["18–24", "Strong recognition memory and sustained focus"],
        ["25+", "Elite — excellent recognition memory endurance"],
      ],
    },
    {
      type: "callout",
      icon: "🧠",
      title: "Try a recall-based memory test next",
      tone: "primary",
      text: "This test measures recognition. For a harder, recall-based comparison, try our [Sequence Memory Test](/test/sequence-memory-test), which asks you to actively reproduce a pattern rather than just recognize one.",
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
          question: "What's a good verbal memory score?",
          answer:
            "Scores vary widely, but many first-time testers land somewhere between 10 and 17 correct identifications. Scores of 18–24 reflect strong recognition memory, and 25+ is considered an elite result.",
        },
        {
          question: "Why is recognizing words easier than recalling them?",
          answer:
            "Recognition memory only requires you to judge whether something feels familiar, while recall requires actively retrieving it from memory with no cue — recognition is a much lower cognitive bar, which is why scores here tend to run higher than recall-based tests like digit span.",
        },
        {
          question: "Does vocabulary size affect my score?",
          answer:
            "Not directly — the test only asks whether you've seen a specific word during this session, not whether you know its meaning, so vocabulary size has minimal impact on your result.",
        },
        {
          question: "Should I play with 3 or 5 lives?",
          answer:
            "5 lives is more forgiving and lets you play longer to build up your score, while 3 lives is a stricter, more precise test of your recognition accuracy since a single lapse costs more.",
        },
        {
          question: "Can I improve with practice?",
          answer:
            "Yes. Repeated play tends to improve scores as you develop better focus and pattern-recognition strategies for spotting repeats.",
        },
      ],
    },
  ],
};
