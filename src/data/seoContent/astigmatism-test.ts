import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "This astigmatism test uses a simple radial line pattern — sometimes called an astigmatic dial or fan chart — to give you a quick, informal sense of whether some directions of your vision might be less sharp than others. It takes about a minute and requires nothing but your screen and a normal reading distance.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Astigmatism Test Works",
    },
    {
      type: "paragraph",
      text: "Cover one eye, and from a comfortable distance, look at the center dot of the radial line pattern. All the lines are drawn with identical thickness and color — in a person with typical, even vision, they should all appear roughly equally dark and sharp. If astigmatism is present, the uneven way the eye focuses light across different angles can make some lines look bolder, blacker, or more in-focus than others, while lines at a different angle look comparatively lighter or blurrier. After you answer, repeat the check with your other eye for a fuller picture.",
    },
    {
      type: "heading",
      text: "What Is Astigmatism?",
    },
    {
      type: "paragraph",
      text: "Astigmatism is an extremely common and usually very manageable vision condition where the cornea or lens has a slightly irregular, more football-shaped curve instead of a perfectly round one. That irregular shape causes light to focus unevenly on the retina — sharply in one orientation but not in others — which is exactly what a radial line dial is designed to reveal informally. It's not a disease and it isn't caused by anything you did; most people have at least a small amount of it, and only more significant astigmatism tends to noticeably affect everyday vision.",
    },
    {
      type: "heading",
      id: "the-dial-test",
      text: "The History of the Astigmatic Dial",
    },
    {
      type: "paragraph",
      text: "Radial line charts like this one — sometimes called astigmatic dials or fan and block charts — have long been used informally and in clinical settings as a quick way to reveal directional blur. Professional versions used by optometrists are precisely calibrated and viewed under controlled conditions with proper equipment; this browser-based version follows the same basic visual principle in a simplified, self-directed format.",
    },
    {
      type: "heading",
      text: "Tips for an Accurate Self-Check",
    },
    {
      type: "list",
      items: [
        "Test each eye separately by covering the other one — astigmatism can affect one eye more than the other.",
        "Sit at a normal, comfortable reading distance rather than very close or very far from the screen.",
        "Make sure your screen brightness is at a normal level and you're in a well-lit room.",
        "If you normally wear glasses or contacts, try the test both with and without them.",
        "If you consistently see uneven lines in the same direction on both attempts, mention it at your next eye exam.",
      ],
    },
    {
      type: "callout",
      icon: "🩺",
      title: "Not a medical diagnosis",
      tone: "gold",
      text: "This is an informal self-check for awareness purposes only. Only a comprehensive eye exam with proper equipment from a qualified optometrist or ophthalmologist can diagnose astigmatism or any other vision condition.",
    },
    {
      type: "paragraph",
      text: "Curious about a different kind of vision screening? Try our [Color Blind Test](/test/colorblind-test-online), a two-minute Ishihara-style check for red-green color vision deficiency.",
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
          question: "Is astigmatism serious?",
          answer:
            "Usually not. Most people have at least a mild degree of astigmatism, and it's typically easily corrected with glasses, contact lenses, or refractive surgery when it's significant enough to affect daily vision.",
        },
        {
          question: "Can this test actually diagnose astigmatism?",
          answer:
            "No. It's an informal self-check based on the same visual principle used in clinical astigmatic dials, but without calibrated equipment or a professional exam, it can't provide a diagnosis — only suggest whether it might be worth getting checked.",
        },
        {
          question: "Why do I need to test each eye separately?",
          answer:
            "Astigmatism can differ between your two eyes, sometimes significantly, so checking one eye at a time gives a more complete picture than looking with both eyes open.",
        },
        {
          question: "What does it mean if lines in one direction look bolder?",
          answer:
            "It suggests your eye may be focusing light more sharply along that orientation than others, which is the basic visual pattern associated with astigmatism — though many other factors, including screen quality and lighting, can also affect what you see.",
        },
        {
          question: "Can astigmatism be corrected?",
          answer:
            "Yes, in most cases. Glasses, toric contact lenses, and refractive surgery are all common, effective corrections for astigmatism, typically prescribed after a proper eye exam.",
        },
      ],
    },
  ],
};
