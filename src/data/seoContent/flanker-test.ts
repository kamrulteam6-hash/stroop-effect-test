import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The flanker task is one of the most widely used tools in cognitive psychology for measuring selective attention and response inhibition. A row of arrows appears, and your only job is to respond to the direction of the center arrow — while the arrows surrounding it try to pull your response in the wrong direction.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Flanker Test Works",
    },
    {
      type: "paragraph",
      text: "Each trial shows five arrows in a row. Respond to the direction of the middle arrow only, using the Left/Right arrow keys or the on-screen buttons, as quickly and accurately as you can. Sometimes the surrounding arrows point the same way as the center one (congruent), and sometimes they point the opposite way (incongruent) — the incongruent trials are where the real test of selective attention happens.",
    },
    {
      type: "heading",
      text: "Why Psychologists Use the Flanker Task",
    },
    {
      type: "paragraph",
      text: "First introduced by researchers Barbara and Charles Eriksen in 1974, the flanker task remains a cornerstone of research on selective attention and cognitive control, alongside other classic paradigms like the Stroop task. It isolates a specific, measurable phenomenon: even though the flanking arrows are completely irrelevant to the task, your brain automatically processes them, creating measurable interference. That interference — slower and less accurate responses on incongruent trials — is called the flanker effect, and it's one of the cleanest demonstrations that irrelevant information competes for your attention whether you want it to or not.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Understanding Your Flanker Effect",
    },
    {
      type: "paragraph",
      text: "Your results break down reaction time separately for congruent and incongruent trials, plus the gap between them — your personal flanker effect. A larger gap means the surrounding arrows are pulling more of your attention away from the target; a smaller gap suggests stronger selective attention and better filtering of irrelevant information. A flanker effect of some size is completely normal and expected — even highly attentive people show slower incongruent responses, since the interference happens at an automatic, pre-conscious level of visual processing.",
    },
    {
      type: "heading",
      text: "Tips for a Cleaner Result",
    },
    {
      type: "list",
      items: [
        "Keep your eyes fixed on the row's center rather than scanning the whole row.",
        "Respond as quickly as you comfortably can — hesitating doesn't reduce the flanker effect, it just slows both trial types.",
        "Use the keyboard arrow keys rather than clicking for the fastest, most consistent responses.",
        "Expect incongruent trials to feel slightly harder — that's the intended effect, not a mistake on your part.",
      ],
    },
    {
      type: "callout",
      icon: "➡️",
      title: "Related selective-attention tests",
      tone: "primary",
      text: "For a different flavor of the same core skill, try our [Stroop Effect Test](/test/stroop-effect-test), which creates interference through word meaning and ink color instead of spatial arrow direction.",
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
          question: "Who created the flanker task?",
          answer:
            "Psychologists Barbara and Charles Eriksen introduced the flanker task in 1974, and it has since become one of the standard paradigms for studying selective attention and cognitive control.",
        },
        {
          question: "What is the 'flanker effect'?",
          answer:
            "It's the measurable slowdown (and drop in accuracy) on incongruent trials compared to congruent trials, caused by irrelevant flanking information automatically competing for your attention.",
        },
        {
          question: "Is it bad if my incongruent trials are much slower?",
          answer:
            "No — some slowdown on incongruent trials is the expected, universal pattern. A larger-than-average gap may simply reflect normal individual variation in attentional filtering, not a deficit.",
        },
        {
          question: "Why do the flanking arrows affect me if I'm ignoring them?",
          answer:
            "Visual processing of surrounding stimuli happens automatically and largely outside conscious control, so even fully ignoring the flankers on purpose doesn't fully prevent their influence on your response.",
        },
        {
          question: "How is this different from a simple reaction time test?",
          answer:
            "A simple reaction time test measures how fast you respond to a single, unambiguous cue. The flanker task adds a layer of selective attention on top of that — you have to identify and respond to the correct signal while filtering out competing, misleading information.",
        },
      ],
    },
  ],
};
