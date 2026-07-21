import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Some images refuse to sit still — not because anything on the page is moving, but because your visual system can't fully settle on a single interpretation. The Necker cube is the classic example: a simple wireframe drawing of a cube that spontaneously seems to flip between two different 3D orientations the longer you stare at it.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Necker Cube Test Works",
    },
    {
      type: "paragraph",
      text: "Stare at the wireframe cube for 30 seconds. At some point, your perception of which face is \"in front\" will spontaneously flip to the opposite interpretation — click the button every time you notice this happen. Your result shows your total flip count and an estimated flips-per-minute rate.",
    },
    {
      type: "heading",
      text: "Why the Cube Won't Hold Still",
    },
    {
      type: "paragraph",
      text: "The Necker cube is named after Swiss crystallographer Louis Albert Necker, who first described the effect in 1832 while sketching rhomboid crystal shapes. Because the drawing uses simple line-based wireframe edges with no shading, occlusion, or perspective cues to indicate which face is nearer, your visual system has two equally valid ways to interpret it as a 3D object — and with no tiebreaker available, perception doesn't settle on one permanently. Instead, it spontaneously alternates, a phenomenon researchers call bistable perception.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "What Bistable Perception Reveals",
    },
    {
      type: "paragraph",
      text: "Ambiguous figures like the Necker cube are valuable to vision researchers precisely because the image on the page never changes — only your interpretation of it does. That makes it a useful tool for studying how the brain resolves visual ambiguity, and how attention and prior expectations can influence which interpretation feels dominant at any given moment. Some studies have found people show a subtle bias toward perceiving the cube from an above-facing perspective, possibly reflecting how most real-world objects are viewed from that angle in everyday life.",
    },
    {
      type: "heading",
      text: "Tips for Noticing More Flips",
    },
    {
      type: "list",
      items: [
        "Relax your gaze rather than staring rigidly at one spot — a slightly unfocused gaze tends to trigger more frequent flips.",
        "Try deliberately focusing on different corners of the cube; this can sometimes trigger or delay a flip.",
        "Don't worry if your rate feels slow or fast compared to a previous attempt — reversal rate is known to vary naturally with fatigue and attention.",
        "Take a short break if you find the image genuinely stuck in one interpretation — fresh eyes often see the flip more readily.",
      ],
    },
    {
      type: "callout",
      icon: "🧊",
      title: "No 'better' or 'worse' result here",
      tone: "gold",
      text: "Flip rate is a matter of natural individual variation, attention, and fatigue — there's no target number to aim for.",
    },
    {
      type: "paragraph",
      text: "Interested in a completely different visual illusion? Try our [Visual Illusion Test](/test/visual-illusion-test), featuring the classic Müller-Lyer line-length illusion.",
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
          question: "Who discovered the Necker cube illusion?",
          answer:
            "Swiss crystallographer Louis Albert Necker first described the effect in 1832 while studying the appearance of rhomboid crystal shapes under a microscope.",
        },
        {
          question: "Why does the cube seem to flip on its own?",
          answer:
            "Because the flat wireframe drawing has no shading or occlusion cues to indicate depth, your visual system has two equally valid 3D interpretations available, and perception spontaneously alternates between them rather than settling permanently.",
        },
        {
          question: "Is a faster or slower flip rate better?",
          answer:
            "Neither — flip rate reflects natural individual variation in visual processing and attention, not a skill or ability being measured for performance.",
        },
        {
          question: "Can I control when it flips?",
          answer:
            "You can influence it somewhat by shifting your focus to different parts of the cube, but you generally can't fully prevent or force a flip at will — it happens at a largely automatic level of visual processing.",
        },
        {
          question: "Is this related to other optical illusions on this site?",
          answer:
            "It's a different category of illusion — the Necker cube demonstrates bistable perception (two competing but equally valid interpretations), while illusions like the Müller-Lyer effect distort a single, fixed judgment such as perceived length.",
        },
      ],
    },
  ],
};
