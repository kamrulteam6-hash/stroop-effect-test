import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "This page lets you take the Stroop test online in full — including two variations you won't find on most competing sites. It's a hands-on, deeper companion to the quick version on our homepage: below you'll find exactly how the test works, the real formula researchers use to score interference, the different types of Stroop tasks psychologists study, and research-backed ways to improve your result.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How This Stroop Test Works",
    },
    {
      type: "paragraph",
      text: "A series of color words flash on screen, each printed in an ink color that often doesn't match the word itself. Your job is to click the button that matches the ink color as quickly as possible, ignoring what the word says. Above, you can choose Classic mode (mostly conflicting rounds), Fifty-Fifty mode (an even split of matching and conflicting rounds), or Reverse mode, which flips the task entirely — you respond to the word instead of the ink color. Keyboard shortcuts (keys 1–5) are also supported, which researchers note gives a truer read on processing speed than clicking with a mouse.",
    },
    {
      type: "heading",
      text: "The Science Behind the Stroop Effect — and the Interference Score",
    },
    {
      type: "paragraph",
      text: "The effect is named after psychologist John Ridley Stroop, who published the original experiment in 1935. Reading is such an automatic, over-learned skill that your brain processes a word's meaning almost involuntarily, even when told to ignore it. Naming a color, by contrast, requires a slower, deliberate step. When the two processes disagree, your brain has to actively suppress the automatic response in favor of the controlled one — and that suppression work is what shows up as slower reaction times and more mistakes.",
    },
    {
      type: "paragraph",
      text: "Researchers formalize this with an interference score: your average response time on incongruent (conflicting) rounds minus your average response time on congruent (matching) rounds. A bigger gap means your brain is working harder to suppress the automatic reading response. Our Fifty-Fifty mode is designed specifically to let you feel this contrast yourself, since it mixes both round types evenly rather than weighting heavily toward conflict like Classic mode does.",
    },
    {
      type: "heading",
      id: "variations",
      text: "Types of Stroop Tests",
    },
    {
      type: "paragraph",
      text: "The classic color-word task is just one member of a whole family of Stroop-style paradigms psychologists use to study different aspects of cognition:",
    },
    {
      type: "list",
      items: [
        "Classic (color-word) Stroop — name the ink color while ignoring a conflicting color word. This is what our Classic and Fifty-Fifty modes above measure.",
        "Reverse Stroop — respond to the word itself instead of the ink color. Try this with our built-in Reverse mode above.",
        "Emotional Stroop — replaces color words with emotionally charged words to study attentional bias in anxiety and mood research.",
        "Numerical Stroop — compares physical size versus numerical value of digits (e.g. is a small-printed '9' or a large-printed '3' bigger?).",
        "Spatial Stroop — tests interference between an arrow's direction and its on-screen position rather than color or word meaning.",
      ],
    },
    {
      type: "paragraph",
      text: "If you're interested in a completely different family of attention tasks, our [Attention & Focus Test](/test/attention-span-test) uses a go/no-go paradigm instead — a different way of measuring impulse control and sustained attention that research shows draws on some of the same prefrontal brain circuits as the Stroop task.",
    },
    {
      type: "heading",
      text: "Tips to Improve Your Score",
    },
    {
      type: "list",
      items: [
        "Focus on the color itself, not the letters — try slightly softening your focus on the word shape.",
        "Respond with your first instinct; second-guessing usually slows you down without improving accuracy.",
        "Use the keyboard shortcuts (1–5) instead of clicking for a faster, more consistent measurement.",
        "Get a full night's sleep before testing — research links a single poor night's sleep to a meaningfully larger interference effect.",
        "Light aerobic exercise 20–40 minutes before testing has been shown to temporarily improve Stroop performance.",
        "Expect measurable improvement within your first 2–3 attempts as your brain adapts — that's the practice effect, and it's normal.",
        "Once Classic mode feels easy, switch to Fifty-Fifty or Reverse mode for a harder, less predictable challenge.",
      ],
    },
    {
      type: "callout",
      icon: "🧠",
      title: "Want a pure speed comparison?",
      tone: "primary",
      text: "Try our [Reaction Time Test](/test/reaction-time-test) alongside this one — it strips away the word-color conflict entirely and measures simple visual reaction time on its own, which is useful context for interpreting your Stroop results.",
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
          question: "What is the formula for the Stroop interference score?",
          answer:
            "Interference score = average incongruent response time − average congruent response time, usually measured in milliseconds. A larger positive number means the conflicting word-color combinations slowed you down more.",
        },
        {
          question: "What's the difference between this test and the one on the homepage?",
          answer:
            "They use the same underlying test engine, but this page includes the full mode selector (Classic, Fifty-Fifty, and Reverse) plus this deeper explanation of the science, scoring, and related Stroop variations.",
        },
        {
          question: "Can I improve my Stroop test performance with practice?",
          answer:
            "Yes, to a degree. Repeated practice measurably reduces interference and reaction time within just a few attempts, which is part of why the task is used in cognitive training research — though the underlying effect never disappears entirely.",
        },
        {
          question: "Why do I make more mistakes when I go faster?",
          answer:
            "Speeding up gives your brain less time to suppress the automatic urge to read the word, so the interference effect gets stronger — this speed-accuracy tradeoff is a normal part of the task, not a flaw in how you're taking it.",
        },
        {
          question: "Is the Stroop task used in real psychology research?",
          answer:
            "Yes — it's one of the most replicated findings in experimental psychology, and its variations (including reverse, emotional, and spatial versions) are widely used to study selective attention, executive function, and cognitive control.",
        },
      ],
    },
  ],
};
