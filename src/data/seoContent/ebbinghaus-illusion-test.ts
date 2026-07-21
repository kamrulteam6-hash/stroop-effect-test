import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Two circles can be exactly the same size, yet look completely different, just because of what's surrounding them. The Ebbinghaus illusion — also known as the Titchener circles — is a classic demonstration that your brain never judges size in isolation. This test lets you measure exactly how strongly it affects your own perception.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Ebbinghaus Illusion Test Works",
    },
    {
      type: "paragraph",
      text: "You'll see two center circles side by side — the left one is surrounded by small circles, and the right one is surrounded by large circles. Drag the slider to change the right circle's actual size until it looks exactly as big as the left one. Once you lock in your answer, we reveal the real sizes and show you the gap — that gap is a rough personal measurement of how strongly this illusion distorts your size perception.",
    },
    {
      type: "heading",
      text: "Why Surrounding Circles Change What You See",
    },
    {
      type: "paragraph",
      text: "The illusion is named after German psychologist Hermann Ebbinghaus, though it's also commonly called the Titchener circles after psychologist Edward Titchener, who helped popularize it in English-language psychology. The effect happens because your visual system judges an object's size relative to nearby objects, not as an absolute measurement. A center circle surrounded by large circles looks small by contrast, while the same circle surrounded by small circles looks comparatively large — even though nothing about the circle itself has changed at all.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "What This Reveals About Visual Perception",
    },
    {
      type: "paragraph",
      text: "Like other classic illusions, the Ebbinghaus illusion demonstrates that vision is a relative, context-dependent process rather than a precise measuring instrument. Interestingly, research has found that this illusion can be weaker for reaching and grasping movements than for conscious size judgments — suggesting your brain may use somewhat different size-processing pathways for perception versus physical action, a finding that has made this illusion particularly useful in visual neuroscience research.",
    },
    {
      type: "heading",
      text: "Tips for a Precise Result",
    },
    {
      type: "list",
      items: [
        "Adjust the slider slowly and pass the match point a few times to zero in on your true equal setting.",
        "Try briefly covering the surrounding circles with your fingers to confirm the center circles really are different sizes — a useful sanity check.",
        "View the screen straight-on rather than at an angle for the most consistent result.",
        "Take the test a few times; your result should land in a broadly similar range each attempt.",
      ],
    },
    {
      type: "callout",
      icon: "⭕",
      title: "A universal effect, not a vision problem",
      tone: "gold",
      text: "Nearly everyone experiences some version of this illusion — susceptibility to it says nothing about your visual acuity or intelligence.",
    },
    {
      type: "paragraph",
      text: "Curious about a different classic illusion? Try our [Visual Illusion Test](/test/visual-illusion-test), featuring the Müller-Lyer line-length illusion.",
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
          question: "Why is it called both the Ebbinghaus illusion and the Titchener circles?",
          answer:
            "It's named after German psychologist Hermann Ebbinghaus, who is credited with the original demonstration, and is also called the Titchener circles after psychologist Edward Titchener, who helped popularize it in English-language psychology.",
        },
        {
          question: "Why do the surrounding circles change how big the center circle looks?",
          answer:
            "Your visual system judges size relative to nearby objects rather than in absolute terms, so large neighboring circles make a center circle look smaller by contrast, and small neighbors make it look larger.",
        },
        {
          question: "Does being fooled by this illusion mean something is wrong with my eyes?",
          answer:
            "No — nearly everyone experiences some version of this effect. It reflects normal, relative size-processing built into human visual perception rather than a vision problem.",
        },
        {
          question: "Is this the same illusion as the Müller-Lyer illusion?",
          answer:
            "No, they're different illusions. The Ebbinghaus illusion distorts perceived size through surrounding context, while the Müller-Lyer illusion distorts perceived line length through angled fins that mimic depth cues.",
        },
        {
          question: "Has this illusion been used in real research?",
          answer:
            "Yes — it's a well-studied tool in visual neuroscience, notably in research comparing how strongly the illusion affects conscious size judgments versus physical reaching and grasping movements.",
        },
      ],
    },
  ],
};
