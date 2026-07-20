import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Every person has a genuine blind spot in each eye — a small area with no light-sensing cells at all. You never normally notice it because your brain automatically fills the gap using surrounding visual information. This interactive version of the classic demonstration lets you find exactly where yours is, using a slider instead of the traditional \"move closer to the screen\" method.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Blind Spot Test Works",
    },
    {
      type: "paragraph",
      text: "Cover your left eye and focus your right eye on the cross — don't look directly at the dot, even though it will be tempting. Slowly drag the slider to increase the separation between the cross and the dot. At a certain point, the dot will vanish completely from view, even though your eye is still open. Click the button the moment it disappears, and we'll show you the pixel separation at which it happened.",
    },
    {
      type: "heading",
      text: "Why You Have a Blind Spot",
    },
    {
      type: "paragraph",
      text: "Your retina is lined with light-sensitive cells called rods and cones — except in one small spot, where the optic nerve exits the eye to carry visual signals to your brain. That exit point, called the optic disc, has no rods or cones at all, so any light landing exactly there simply isn't detected. Because your two eyes' blind spots sit in different parts of your visual field, and because your brain does a remarkably good job of interpolating the missing patch using the surrounding image, you go your entire life without ever noticing this literal hole in your vision — until a test like this deliberately isolates it.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "What This Demonstrates About Perception",
    },
    {
      type: "paragraph",
      text: "The blind spot is one of the clearest, most reproducible demonstrations that your visual experience isn't a raw camera feed — it's an active construction. Your brain doesn't show you a hole where the optic disc is; it fills the gap in with a best guess based on the surrounding pattern, color, and texture, and it does so convincingly enough that you never notice anything missing in normal life. This is the same general principle behind many other perceptual illusions: what you consciously see is your brain's interpretation of incomplete sensory data, not a direct, unfiltered transmission of it.",
    },
    {
      type: "heading",
      text: "Tips for a Clear Result",
    },
    {
      type: "list",
      items: [
        "Keep your right eye fixed firmly on the cross the entire time — looking at the dot directly will prevent the effect.",
        "Drag the slider slowly; moving too fast can make you miss the exact disappearance point.",
        "Sit at a comfortable, consistent distance from your screen while testing.",
        "Try it again to see how repeatable your result is — it should land in a similar range each time.",
        "Repeat with your right eye covered (looking with your left eye) to check your other eye's blind spot too.",
      ],
    },
    {
      type: "callout",
      icon: "👁️",
      title: "Completely normal, not a vision problem",
      tone: "gold",
      text: "This is a universal feature of human (and most vertebrate) eyes, not a sign of any eye condition. Everyone has one in each eye.",
    },
    {
      type: "paragraph",
      text: "Curious about another quick, interactive eye demonstration? Try our [Astigmatism Test](/test/astigmatism-test), a one-minute radial-line self-check for a completely different visual phenomenon.",
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
          question: "Is having a blind spot a vision problem?",
          answer:
            "No. It's a completely normal, universal feature of the eye's anatomy — every sighted person has one in each eye, caused by the optic nerve's exit point on the retina.",
        },
        {
          question: "Why don't I notice my blind spot in everyday life?",
          answer:
            "Your brain actively fills in the missing information using the surrounding visual pattern, and because both eyes are usually open with their blind spots in different positions, any single gap is easily covered by the other eye's input as well.",
        },
        {
          question: "Does the exact measurement matter?",
          answer:
            "Not really — the goal here is the demonstration itself, not a precise clinical measurement. The exact pixel value where the dot disappears will vary with your screen size, viewing distance, and setup.",
        },
        {
          question: "Can my blind spot get bigger or indicate a health problem?",
          answer:
            "An enlarged or shifted blind spot can occasionally be a clinical sign in real eye exams, but a browser-based demonstration like this can't diagnose anything — if you have vision concerns, see an eye care professional.",
        },
        {
          question: "Why does it work better with one eye at a time?",
          answer:
            "With both eyes open, the other eye's visual field typically covers the gap left by one eye's blind spot, so isolating a single eye is necessary to actually observe the effect.",
        },
      ],
    },
  ],
};
