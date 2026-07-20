import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Peripheral vision is everything you can detect outside the small area you're directly looking at — and it's surprisingly easy to underestimate. This test keeps your central gaze locked on a fixed cross while brief flashes appear at random points around the edge of your screen, giving you a rough, self-administered sense of how well you pick up motion and light outside your direct line of sight.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Peripheral Vision Test Works",
    },
    {
      type: "paragraph",
      text: "Keep your eyes fixed on the cross at the center of the box — this is the whole point of the test, so resist the urge to glance toward flashes as they appear. Over 14 trials, a small dot will flash briefly at varying distances from the center, some closer in and some near the edges. The instant you notice one, press the spacebar without moving your eyes. Your result shows your overall detection rate, plus a separate breakdown for flashes closer to center versus flashes near the outer edge of your field of view.",
    },
    {
      type: "heading",
      text: "Why Peripheral Vision Matters",
    },
    {
      type: "paragraph",
      text: "Central vision handles fine detail and color, but peripheral vision is what your visual system relies on to detect motion, sudden changes, and potential hazards outside your direct focus — it's a major factor in driving safety, sports performance, and general situational awareness. Researchers studying this capacity often use a related concept called \"useful field of view,\" which measures how much visual information a person can process outside central fixation, and which has been linked in research to real-world outcomes like driving safety in older adults.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Interpreting Your Zone Breakdown",
    },
    {
      type: "paragraph",
      text: "It's completely normal for your far-zone detection rate to be noticeably lower than your near-zone rate — visual acuity and sensitivity to fine detail drop off sharply the further a stimulus is from the point you're directly fixating on, even though motion and brightness detection remain relatively strong. A big near/far gap simply reflects normal visual field anatomy, not a problem with your vision.",
    },
    {
      type: "heading",
      text: "Tips for a More Accurate Result",
    },
    {
      type: "list",
      items: [
        "Sit at a normal, comfortable distance from your screen rather than very close.",
        "Genuinely keep your eyes on the center cross — even brief eye movements toward flashes will inflate your score.",
        "Use a well-lit room; dim lighting reduces peripheral flash visibility for everyone.",
        "Try the test again later in the day if you're tired — fatigue reduces peripheral detection noticeably.",
      ],
    },
    {
      type: "callout",
      icon: "👀",
      title: "This isn't a medical visual field test",
      tone: "gold",
      text: "This is a casual, browser-based self-check for fun and general awareness, not a clinical perimetry exam. If you have real concerns about vision loss or a narrowing visual field, see an eye care professional.",
    },
    {
      type: "paragraph",
      text: "Curious about a different perceptual quirk of the eye? Try our [Blind Spot Test](/test/blind-spot-test), which reveals the small literal gap in everyone's visual field.",
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
          question: "Why is my far-zone score lower than my near-zone score?",
          answer:
            "This is expected. Visual acuity and detail sensitivity drop off sharply as distance from your central fixation point increases, so lower detection rates further from center reflect normal visual field anatomy.",
        },
        {
          question: "Is this a medical test for glaucoma or vision loss?",
          answer:
            "No. This is a casual, browser-based self-check for general interest, not a clinical perimetry exam. Real visual field testing for medical purposes requires specialized equipment and should be done by an eye care professional.",
        },
        {
          question: "Why do I have to keep my eyes on the center?",
          answer:
            "The entire point of peripheral vision testing is measuring what you can detect without looking directly at it — if your eyes move toward the flash, you're no longer testing peripheral detection at all.",
        },
        {
          question: "What is 'useful field of view'?",
          answer:
            "It's a concept used in vision research describing how much visual information a person can process outside their central point of fixation, which has been studied in relation to real-world tasks like safe driving.",
        },
        {
          question: "Can peripheral vision be improved with practice?",
          answer:
            "Detection of peripheral stimuli can improve somewhat with practice and attention training, though the underlying anatomical drop-off in acuity away from central vision is a fixed feature of how the eye works.",
        },
      ],
    },
  ],
};
