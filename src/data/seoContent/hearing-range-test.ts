import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "This free Hearing Range Test estimates the highest and lowest audio frequencies you can hear, measured in Hertz (Hz). Using a series of pure tones played through your speakers or headphones, it gives you a rough picture of your personal hearing range compared to the typical human range of roughly 20 Hz to 20,000 Hz — with a Quick or Precise sweep, and a Stereo mode that tests each ear separately.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Hearing Range Test Works",
    },
    {
      type: "paragraph",
      text: "The test plays a sequence of tones, starting from high frequencies and working down, then repeating the process from low frequencies working up. After each tone plays, simply tell us whether you could hear it. Choose Precise mode for a finer-grained sweep with more steps, or Quick mode for a faster pass. Based on your responses, we estimate the highest and lowest frequency you can perceive, giving you an approximate personal hearing range at the end.",
    },
    {
      type: "heading",
      text: "The Science Behind Hearing Range",
    },
    {
      type: "paragraph",
      text: "Human hearing range is often cited as 20 Hz to 20,000 Hz, but this is really an average for young, healthy ears — actual range varies a lot between individuals and changes with age. This is why hearing range tests are sometimes used informally to estimate age range, and why teenagers can often hear high-pitched sounds (sometimes used in \"mosquito tone\" alarms) that most adults can no longer detect.",
    },
    {
      type: "heading",
      id: "presbycusis",
      text: "Presbycusis: Age-Related Hearing Loss",
    },
    {
      type: "paragraph",
      text: "High-frequency hearing tends to decline gradually starting in early adulthood, a natural process called presbycusis. The sharpest early losses tend to happen around 8,000 Hz and above, well within the range this test checks. Published prevalence estimates give a sense of how common this is:",
    },
    {
      type: "table",
      headers: ["Age Group", "Approx. Prevalence of Age-Related Hearing Loss"],
      rows: [
        ["44–54", "About 10%"],
        ["55–64", "About 25%"],
        ["65–84", "About 40%"],
        ["75+", "Nearly 50%"],
      ],
    },
    {
      type: "heading",
      id: "noise-induced",
      text: "Noise-Induced Hearing Loss",
    },
    {
      type: "paragraph",
      text: "Aging isn't the only cause of reduced hearing range — noise exposure is the second most common cause after presbycusis. An estimated 17% of adults aged 20–69 already have some hearing loss that may be noise-related, and researchers have flagged unsafe headphone listening habits among young people globally as a growing risk factor. Unlike age-related decline, noise-induced hearing loss is largely preventable by keeping volume moderate and taking listening breaks.",
    },
    {
      type: "heading",
      id: "stereo-testing",
      text: "Why Test Each Ear Separately?",
    },
    {
      type: "paragraph",
      text: "Hearing loss doesn't always affect both ears equally — noise exposure, ear infections, and other causes can create a real difference between your left and right ear's frequency range. Our Stereo mode routes the test tones to only one ear at a time using stereo panning, so you can compare your left and right ear results directly instead of only getting a single combined number.",
    },
    {
      type: "heading",
      text: "Tips for Accurate Results",
    },
    {
      type: "list",
      items: [
        "Use headphones rather than speakers for more accurate, consistent results — and required for Stereo mode to work correctly.",
        "Test in a quiet room, free from background noise like fans, traffic, or conversations.",
        "Set your volume to a comfortable, moderate level rather than very loud or very quiet.",
        "Take the test when you're not fatigued — tiredness can subtly affect auditory attention.",
        "Try Stereo mode to check for a meaningful difference between your left and right ear.",
        "Repeat the test at a different time of day if your first result seems unusually high or low.",
      ],
    },
    {
      type: "callout",
      icon: "🎧",
      title: "Speaker and headphone quality matters",
      tone: "gold",
      text: "Cheap speakers or headphones often can't accurately reproduce very high or very low frequencies, which will affect your results regardless of your actual hearing ability.",
    },
    {
      type: "paragraph",
      text: "Curious about another quick sensory screening? Try our [Color Blind Test](/test/colorblind-test-online), a two-minute Ishihara-style check for red-green color vision deficiency.",
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
          question: "What is the normal human hearing range?",
          answer:
            "The commonly cited range is 20 Hz to 20,000 Hz, though this represents an average for young adults with healthy hearing — most people's actual range is somewhat narrower, especially at the high end.",
        },
        {
          question: "Why can't I hear very high frequencies anymore?",
          answer:
            "High-frequency hearing loss (presbycusis) is a natural part of aging for most people, typically beginning in early adulthood and progressing gradually over decades. It can also result from noise exposure.",
        },
        {
          question: "How common is age-related hearing loss?",
          answer:
            "It's quite common: published estimates suggest roughly 25% of people aged 55–64 and around 40% of people aged 65–84 have some degree of age-related hearing loss.",
        },
        {
          question: "Can headphone volume really damage my hearing?",
          answer:
            "Yes. Noise-induced hearing loss from loud or prolonged headphone use is a well-documented and largely preventable cause of reduced hearing range, separate from natural age-related decline.",
        },
        {
          question: "Is this test medically accurate?",
          answer:
            "No — it's a casual screening tool affected by your device's speakers, your environment, and your browser's audio output. A proper hearing test requires calibrated equipment in a controlled clinical setting.",
        },
        {
          question: "Can hearing range be improved?",
          answer:
            "Hearing loss due to aging or noise damage generally isn't reversible, but protecting your ears from loud noise exposure can help preserve your remaining hearing range over time.",
        },
      ],
    },
  ],
};
