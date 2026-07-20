import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The Müller-Lyer illusion is one of the oldest and most famous optical illusions in psychology, first described by German psychiatrist Franz Carl Müller-Lyer in 1889. Two lines of identical length look strikingly different depending only on the direction of small arrow-like fins added to their ends — and this interactive version lets you measure exactly how strongly it affects your own perception.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Visual Illusion Test Works",
    },
    {
      type: "paragraph",
      text: "You'll see a fixed reference line at the top with its fins pointing inward, and an adjustable line below it with its fins pointing outward. Drag the slider to change the adjustable line's actual length until it looks exactly as long as the reference line above it. Once you lock in your answer, we reveal the real physical lengths and show you the size of the gap — that gap is a rough personal measurement of how much this illusion distorts your perception of length.",
    },
    {
      type: "heading",
      text: "Why the Illusion Happens",
    },
    {
      type: "paragraph",
      text: "The leading explanation is that your visual system has learned, from a lifetime of viewing real three-dimensional scenes, to use converging and diverging line angles as depth cues — the kind you'd see at the inside versus outside corner of a room, for instance. Outward-pointing fins resemble cues your brain associates with a farther, and therefore perceptually \"stretched,\" edge, while inward-pointing fins resemble cues associated with a nearer, more compressed edge. Your visual system applies that same depth-based size correction automatically, even though these are just flat lines on a screen with no real depth at all.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "What Illusion Susceptibility Says About Perception",
    },
    {
      type: "paragraph",
      text: "Almost everyone perceives some version of this effect — that's exactly what makes it a textbook illusion rather than a rare curiosity. The interesting research finding isn't that people are fooled, it's how consistently a purely 2D pattern can trigger visual processing that evolved for interpreting 3D space. Studies have even found the illusion's strength can vary somewhat across different cultural and environmental backgrounds, particularly ones with differing amounts of exposure to rectangular, \"carpentered\" architecture — a striking hint that even something as basic as line-length perception is shaped partly by visual experience.",
    },
    {
      type: "heading",
      text: "Tips for a Precise Result",
    },
    {
      type: "list",
      items: [
        "Adjust the slider slowly and go past the match a few times to zero in on the exact equal point.",
        "Try covering the arrow fins briefly with your fingers to confirm the shafts really are different lengths — it's a good sanity check.",
        "Take the test a few times; your result should land in a broadly similar range each attempt.",
        "View the screen straight-on rather than at a steep angle for the most consistent result.",
      ],
    },
    {
      type: "callout",
      icon: "🔀",
      title: "Not a measure of vision quality",
      tone: "gold",
      text: "Being susceptible to this illusion is universal and has nothing to do with visual acuity or intelligence — it reflects normal depth-cue processing in the human visual system.",
    },
    {
      type: "paragraph",
      text: "Want to explore a completely different kind of perceptual gap? Try our [Blind Spot Test](/test/blind-spot-test), which reveals a literal hole in your visual field that your brain automatically fills in.",
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
          question: "Who discovered the Müller-Lyer illusion?",
          answer:
            "German psychiatrist Franz Carl Müller-Lyer first described it in 1889, and it has since become one of the most widely studied and referenced illusions in perceptual psychology.",
        },
        {
          question: "Why does everyone see this illusion differently in strength?",
          answer:
            "The exact degree of distortion varies from person to person and can even be influenced by cultural and environmental factors, such as how much exposure someone has had to rectangular, human-built architecture.",
        },
        {
          question: "Does being fooled by the illusion mean something is wrong with my vision?",
          answer:
            "No — nearly everyone experiences some version of this effect. It reflects normal depth-cue processing built into human visual perception, not a vision problem.",
        },
        {
          question: "What causes the Müller-Lyer illusion?",
          answer:
            "The leading explanation is that the fin angles mimic depth cues from 3D scenes, like converging room corners, causing your visual system to apply an automatic size correction that doesn't actually apply to flat 2D lines.",
        },
        {
          question: "Are the two lines ever actually the same length?",
          answer:
            "In this test, the reference line is fixed while you adjust the other — the goal is to measure the point where they look equal to you, then reveal how far apart their real lengths actually are.",
        },
      ],
    },
  ],
};
