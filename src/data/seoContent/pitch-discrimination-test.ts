import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "This free Pitch Discrimination Test — often searched for as a \"tone deafness test\" — plays two tones, one after another, and asks whether the second was higher or lower than the first. The gap between the two tones narrows each round, so the test finds the smallest pitch difference you can reliably tell apart.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Pitch Discrimination Test Works",
    },
    {
      type: "paragraph",
      text: "Each round plays a fixed reference tone at 440Hz (the musical note A4), followed by a second tone that's either higher or lower by a certain number of cents — a musical unit where 100 cents equals one semitone. Pick Higher or Lower for each round; you can replay the pair if you need another listen. The gap shrinks across 12 rounds, from an easy 300 cents (three semitones) down to just 5 cents (a twentieth of a semitone). Your result is the smallest gap you correctly identified — your personal pitch discrimination threshold.",
    },
    {
      type: "heading",
      text: "What This Test Actually Measures",
    },
    {
      type: "paragraph",
      text: "It's worth being precise about terminology here. \"Perfect pitch,\" formally called absolute pitch, is the rare ability to identify or produce a musical note by name with no reference tone at all — something only a small fraction of people, often trained from early childhood, can do. This test measures something different and far more common: relative pitch discrimination, your ability to tell whether one tone is higher or lower than another when you hear them side by side. Genuine tone deafness (amusia) — real difficulty telling pitches apart even with a direct comparison — is much rarer than people often assume; most people who describe themselves as \"tone deaf\" actually have normal pitch discrimination and simply lack singing or musical training.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why Pitch Discrimination Matters",
    },
    {
      type: "paragraph",
      text: "Fine pitch discrimination underlies musical skills like singing in tune, playing by ear, and detecting when an instrument is out of tune — but it also matters outside music, contributing to how well you pick up the melodic patterns (intonation) that carry meaning and emotion in speech. Trained musicians typically develop noticeably finer pitch discrimination thresholds than non-musicians through years of active listening practice, which is good evidence that this ability, like most perceptual skills, responds to training rather than being fixed from birth.",
    },
    {
      type: "heading",
      text: "Tips for an Accurate Result",
    },
    {
      type: "list",
      items: [
        "Use headphones rather than speakers for cleaner, more precise tone reproduction.",
        "Test in a quiet room, free from background music or noise.",
        "Use the replay button if you're unsure — there's no penalty for listening again.",
        "Don't overthink small gaps; go with your first instinct once you've listened carefully.",
        "Try the test again on a different day — attention and fatigue both affect fine perceptual judgments like this.",
      ],
    },
    {
      type: "callout",
      icon: "🎧",
      title: "Related hearing tests",
      tone: "primary",
      text: "For a different kind of hearing check, try our [Hearing Range Test](/test/hearing-range-test), which finds the highest and lowest frequencies you can hear rather than the smallest pitch difference you can detect.",
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
          question: "What's a good pitch discrimination threshold?",
          answer:
            "Reliably telling apart tones 20–30 cents apart (a fifth to a third of a semitone) is a solid result for someone without musical training. Trained musicians often push well below 10 cents.",
        },
        {
          question: "Does this test measure perfect pitch?",
          answer:
            "No. Perfect (absolute) pitch is the ability to identify a note without any reference tone, which is rare. This test measures relative pitch discrimination — comparing two tones played back to back — which almost everyone has to some meaningful degree.",
        },
        {
          question: "Am I tone deaf if I score poorly?",
          answer:
            "Not necessarily. True tone deafness (amusia) is uncommon. A poor score here is more often explained by test conditions, fatigue, or simply lack of practice with focused listening, rather than a fundamental inability to perceive pitch.",
        },
        {
          question: "Can pitch discrimination improve with practice?",
          answer:
            "Yes. Musicians consistently show finer pitch discrimination than non-musicians, and there's good evidence that active ear training — regularly comparing and identifying pitches — measurably sharpens this skill over time.",
        },
        {
          question: "Why does the direction change each round?",
          answer:
            "Randomizing whether the second tone is higher or lower prevents you from guessing a pattern instead of actually discriminating pitch, keeping the test a genuine measure of your hearing rather than pattern recognition.",
        },
      ],
    },
  ],
};
