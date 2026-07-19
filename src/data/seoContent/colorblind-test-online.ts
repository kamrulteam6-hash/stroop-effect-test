import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "This free online color blind test uses dot-pattern plates inspired by the classic Ishihara test, the most widely used screening method for red-green color vision deficiency. Unlike sites that reuse the same set of static plate images for every visitor, every plate here is generated fresh on your device, so no two attempts look identical. In under two minutes, you'll view several plates made of colored dots and try to identify the hidden number in each one. It's a quick, informal screening — not a substitute for a comprehensive eye exam — but it can give you a useful first signal.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Color Blind Test Works",
    },
    {
      type: "paragraph",
      text: "Each plate is made of hundreds of randomly sized, randomly placed dots in two color groups: one forming a hidden number, and one forming the background. People with typical color vision can usually pick the number out easily because the two color groups look clearly distinct. People with red-green color vision deficiency often see the dots as a fairly uniform field, since the specific hues used are the ones their eyes struggle to tell apart. Choose Quick mode for 5 plates or Full mode for all 10 — at least one plate in every run is a control, designed to be visible to everyone including people with color vision deficiency, which helps confirm your screen brightness, distance, and lighting are working correctly.",
    },
    {
      type: "heading",
      text: "The Science Behind Color Vision Deficiency",
    },
    {
      type: "paragraph",
      text: "Human color vision relies on three types of cone cells in the retina, each most sensitive to red, green, or blue wavelengths of light. Color vision deficiency happens when one type of cone is missing, reduced in number, or shifted in its sensitivity — usually due to an inherited gene on the X chromosome. This is why it affects roughly 1 in 12 men but only about 1 in 200 women: men only need one altered X chromosome to be affected, while women need two. It's rarely total color blindness; most people with the condition still see plenty of color, they simply have difficulty distinguishing specific pairs of hues that look obviously different to people with typical color vision.",
    },
    {
      type: "heading",
      id: "types",
      text: "Types of Color Blindness",
    },
    {
      type: "paragraph",
      text: "\"Color blindness\" actually covers several distinct conditions, grouped by which cone type is affected and how severely:",
    },
    {
      type: "table",
      headers: ["Type", "Affected Cone", "Approx. Prevalence"],
      rows: [
        ["Deuteranomaly / Deuteranopia", "Green (M-cone)", "~5% of men (most common form)"],
        ["Protanomaly / Protanopia", "Red (L-cone)", "~2.5% of men"],
        ["Tritanomaly / Tritanopia", "Blue (S-cone)", "Under 0.01% — very rare, affects both sexes equally"],
        ["Achromatopsia", "All cone types", "Extremely rare — near-total color blindness"],
      ],
    },
    {
      type: "paragraph",
      text: "The \"-anomaly\" forms (like deuteranomaly) are the milder, more common version where a cone type is present but shifted in sensitivity; the \"-anopia\" forms are the rarer, more severe version where a cone type is effectively absent. This test, like most Ishihara-style screenings, is specifically tuned to catch red-green deficiency (deuteranomaly, deuteranopia, protanomaly, and protanopia together), since that accounts for around 99% of inherited color vision deficiency.",
    },
    {
      type: "heading",
      text: "Tips for Taking This Test",
    },
    {
      type: "list",
      items: [
        "Use a well-lit room and avoid taking the test in direct glare on your screen.",
        "Make sure your screen brightness and color settings are at their defaults — heavy filters can distort the plates.",
        "Sit at a normal viewing distance, roughly arm's length from the screen.",
        "Answer quickly with your first impression rather than staring and analyzing.",
        "Try Full mode (10 plates) for a more reliable read than Quick mode's 5 — more plates means less chance a single lucky or unlucky guess skews your result.",
        "If you consistently miss the red-green plates but pass the control plate, consider a professional eye exam.",
      ],
    },
    {
      type: "callout",
      icon: "🩺",
      title: "Not a medical diagnosis",
      tone: "gold",
      text: "This is an informal screening tool for entertainment and awareness purposes. Only a comprehensive eye exam from a qualified optometrist or ophthalmologist can properly diagnose color vision deficiency.",
    },
    {
      type: "paragraph",
      text: "Curious how sharp your color discrimination is beyond a pass/fail screening? Our [Color Perception Test](/test/color-perception-test) asks you to arrange shades of the same hue from lightest to darkest — a different, more granular way to measure color vision that works for everyone, not just people screening for red-green deficiency.",
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
          question: "Can this test diagnose color blindness?",
          answer:
            "No. This is a quick informal screening based on the Ishihara method. A definitive diagnosis requires a comprehensive eye exam using calibrated, professionally validated test plates.",
        },
        {
          question: "What's the most common type of color blindness?",
          answer:
            "Deuteranomaly (a mild green-cone shift) is the single most common form, and red-green deficiency overall affects roughly 8% of men and 0.5% of women, mostly due to an inherited gene on the X chromosome.",
        },
        {
          question: "Can women be color blind?",
          answer:
            "Yes, though it's much less common. Because red-green color blindness is X-linked recessive, women need two copies of the altered gene (one from each parent) to be affected, while men only need one — which is why the condition is roughly 16 times more common in men.",
        },
        {
          question: "Why do I need to pass the control plate?",
          answer:
            "The control plate uses a blue-yellow color pair that's visible to virtually everyone, including people with red-green deficiency. If you can't see it, your screen, lighting, or viewing conditions may be affecting the test.",
        },
        {
          question: "Is color blindness treatable?",
          answer:
            "Inherited color vision deficiency isn't curable, but color-correcting glasses and apps can help many people distinguish colors more easily in daily life, even though they don't restore typical color perception.",
        },
        {
          question: "How is this different from a cone-isolation color test?",
          answer:
            "Ishihara-style tests like this one check whether you can distinguish specific color pairs embedded in a dot pattern — fast and simple, but it only gives a pass/fail-style signal. Cone-isolation tests instead measure the sensitivity of each individual cone type directly, giving a more granular result, but require more specialized equipment or calibration than a quick browser-based screening.",
        },
      ],
    },
  ],
};
