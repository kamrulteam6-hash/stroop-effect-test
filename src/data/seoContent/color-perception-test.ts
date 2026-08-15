import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How well can you tell apart two colors that look almost the same?",
    },
    {
      type: "paragraph",
      text: "Take this free **Color Perception Test** to challenge your ability to distinguish subtle differences in **shade and lightness**. Each round gives you several swatches from the same color family. Your task is to arrange them from **lightest to darkest**.",
    },
    {
      type: "paragraph",
      text: "Choose 6, 8, or 12 swatches and complete 1, 3, or 5 rounds.",
    },
    {
      type: "paragraph",
      text: "A lower error score means your ordering was closer to the correct sequence. A score of **0** means you placed every swatch in the correct position.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Color Perception Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Choose 6, 8, or 12 swatches.",
        "Choose 1, 3, or 5 rounds.",
        "Start the test.",
        "Look at the full group before making your first choice.",
        "Select the swatches from lightest to darkest.",
        "Complete the entire sequence.",
        "Review your error score.",
        "Repeat the process for the remaining rounds.",
      ],
    },
    {
      type: "paragraph",
      text: "There is no need to rush. This test is about visual discrimination, not reaction speed.",
    },
    {
      type: "paragraph",
      text: "For the most useful comparison, use the same device, brightness, browser, swatch count, and lighting conditions each time.",
    },
    {
      type: "heading",
      id: "what-does-it-measure",
      text: "What Does This Color Perception Test Measure?",
    },
    {
      type: "paragraph",
      text: "This specific test mainly challenges **lightness discrimination within a color family**.",
    },
    {
      type: "paragraph",
      text: "That distinction matters.",
    },
    {
      type: "paragraph",
      text: "Color can be described using several perceptual properties, including:",
    },
    {
      type: "list",
      items: [
        "hue — whether a color looks red, green, blue, yellow, and so on;",
        "lightness — how light or dark it appears;",
        "saturation or chroma — how vivid or muted the color appears.",
      ],
    },
    {
      type: "paragraph",
      text: "In this test, the swatches within a round belong to the same general hue family but vary from lighter to darker.",
    },
    {
      type: "paragraph",
      text: "Your task is therefore not simply to identify a color name. You must compare close neighboring shades and place them in the correct lightness order.",
    },
    {
      type: "heading",
      text: "Is This a Hue Test?",
    },
    {
      type: "paragraph",
      text: "Not exactly.",
    },
    {
      type: "paragraph",
      text: "A true **hue discrimination** task changes hue while attempting to control other color properties.",
    },
    {
      type: "paragraph",
      text: "The classic Farnsworth–Munsell 100 Hue Test is a well-known example. It asks people to arrange many colored caps in a smooth hue sequence. The official test uses a large set of carefully specified colors.",
    },
    {
      type: "paragraph",
      text: "This browser test uses a simpler arrangement idea, but the task is different: you are ordering shades primarily by **lightness within a hue**, not arranging a full hue circle.",
    },
    {
      type: "paragraph",
      text: "That makes “shade discrimination test” or “color lightness discrimination test” a more precise description of what you are doing here.",
    },
    {
      type: "paragraph",
      text: "It is also why your score should not be compared directly with a Farnsworth–Munsell 100 Hue score.",
    },
    {
      type: "heading",
      text: "How Is the Error Score Calculated?",
    },
    {
      type: "paragraph",
      text: "After you arrange the swatches, your selected order is compared with the correct light-to-dark order.",
    },
    {
      type: "paragraph",
      text: "Swatches that are farther from their correct position add more error.",
    },
    {
      type: "paragraph",
      text: "That means: **0 error = perfect ordering**",
    },
    {
      type: "paragraph",
      text: "A higher error score means more swatches were misplaced, or some swatches were placed farther from their correct positions.",
    },
    {
      type: "paragraph",
      text: "The exact number should be interpreted within the current test settings.",
    },
    {
      type: "paragraph",
      text: "A score of 5 with 6 swatches is not necessarily equivalent to a score of 5 with 12 swatches because the number of comparisons and spacing between shades can differ.",
    },
    {
      type: "paragraph",
      text: "Compare like with like.",
    },
    {
      type: "heading",
      text: "Why More Swatches Make the Test Harder",
    },
    {
      type: "paragraph",
      text: "Six swatches leave relatively large steps between neighboring shades.",
    },
    {
      type: "paragraph",
      text: "With 12 swatches, more intermediate shades have to fit into the same overall light-to-dark sequence.",
    },
    {
      type: "paragraph",
      text: "The closest neighbors may therefore look extremely similar.",
    },
    {
      type: "paragraph",
      text: "This turns the test from obvious sorting into fine visual comparison.",
    },
    {
      type: "paragraph",
      text: "If 6 swatches feels easy, move to 8. If you can consistently order 8 with very little error, try 12.",
    },
    {
      type: "paragraph",
      text: "Do not assume a higher error score at 12 means your color perception suddenly became worse. You changed the difficulty.",
    },
    {
      type: "heading",
      text: "Is This a Color Blind Test?",
    },
    {
      type: "paragraph",
      text: "No.",
    },
    {
      type: "paragraph",
      text: "A [Color Blind Test](/test/colorblind-test-online) and a Color Perception Test are related to color vision, but they are designed around different tasks.",
    },
    {
      type: "paragraph",
      text: "Your Color Blind Test uses pseudoisochromatic, Ishihara-style patterns to screen informally for possible **red-green color vision difficulty**.",
    },
    {
      type: "paragraph",
      text: "This page asks you to arrange subtle shades from light to dark.",
    },
    {
      type: "paragraph",
      text: "Someone can perform well on one task and find the other difficult.",
    },
    {
      type: "paragraph",
      text: "A good score here does not rule out color vision deficiency, and a poor score does not automatically mean you are color blind.",
    },
    {
      type: "paragraph",
      text: "If your concern is red-green color confusion specifically, use the Color Blind Test instead.",
    },
    {
      type: "heading",
      text: "Why Your Screen Can Change the Result",
    },
    {
      type: "paragraph",
      text: "This is one of the most important limitations of any online color test.",
    },
    {
      type: "paragraph",
      text: "A browser sends color values to your display, but different screens do not reproduce those values identically.",
    },
    {
      type: "paragraph",
      text: "Your result can be affected by:",
    },
    {
      type: "list",
      items: [
        "screen brightness,",
        "contrast settings,",
        "display color profile,",
        "Night Light or Night Shift,",
        "blue-light filters,",
        "HDR or vivid-color modes,",
        "viewing angle,",
        "ambient lighting,",
        "screen quality,",
        "and screen damage.",
      ],
    },
    {
      type: "paragraph",
      text: "On some displays, small lightness differences may be easier to see than on others.",
    },
    {
      type: "paragraph",
      text: "That means this test measures **your perception through your current display**, not your visual system in isolation.",
    },
    {
      type: "heading",
      text: "How to Prepare Your Screen",
    },
    {
      type: "paragraph",
      text: "Before taking the test:",
    },
    {
      type: "list",
      items: [
        "turn off Night Light, Night Shift, and blue-light filters;",
        "disable accessibility filters that alter colors;",
        "avoid an extremely dim or extremely bright screen;",
        "sit directly in front of the display;",
        "avoid strong glare;",
        "keep the browser zoom at a normal level;",
        "and use the same setup for repeat tests.",
      ],
    },
    {
      type: "paragraph",
      text: "If your result seems surprisingly poor, try another good-quality screen before assuming the result reflects your eyes.",
    },
    {
      type: "paragraph",
      text: "Professional color tests use controlled equipment and viewing conditions for exactly this reason.",
    },
    {
      type: "heading",
      text: "What Is the Farnsworth–Munsell 100 Hue Test?",
    },
    {
      type: "paragraph",
      text: "The **Farnsworth–Munsell 100 Hue Test**, often shortened to FM100, is a standardized color-arrangement test used to evaluate color discrimination.",
    },
    {
      type: "paragraph",
      text: "Despite the name, the traditional test uses 85 movable color caps arranged across four trays between fixed reference colors.",
    },
    {
      type: "paragraph",
      text: "The task is to place those caps in a smooth hue sequence.",
    },
    {
      type: "paragraph",
      text: "Its scoring system analyzes arrangement errors, and lower error is better.",
    },
    {
      type: "paragraph",
      text: "Your browser test shares the general idea that people can reveal subtle color discrimination through **ordering**, but it is not a digital copy of the FM100 and should not use FM100 clinical or occupational score ranges.",
    },
    {
      type: "paragraph",
      text: "This distinction keeps the result honest and easier to understand.",
    },
    {
      type: "heading",
      id: "good-score",
      text: "What Is a Good Color Perception Score?",
    },
    {
      type: "paragraph",
      text: "The simplest answer is: **Lower is better, and 0 is perfect for the current round.**",
    },
    {
      type: "paragraph",
      text: "There is no universal browser score that defines excellent, average, or poor color perception for this specific game.",
    },
    {
      type: "paragraph",
      text: "The result depends on:",
    },
    {
      type: "list",
      items: [
        "number of swatches;",
        "number of rounds;",
        "generated color family;",
        "spacing between shades;",
        "display characteristics;",
        "ambient lighting;",
        "and the scoring formula.",
      ],
    },
    {
      type: "paragraph",
      text: "Avoid comparing your score with fixed cutoffs from a different color test.",
    },
    {
      type: "paragraph",
      text: "Instead, compare repeated sessions using the same settings.",
    },
    {
      type: "paragraph",
      text: "If your average error falls while conditions stay consistent, you are getting better at this particular shade-ordering task.",
    },
    {
      type: "heading",
      text: "Why Can One Color Family Feel Harder Than Another?",
    },
    {
      type: "paragraph",
      text: "Human color perception is not perfectly uniform across every part of color space.",
    },
    {
      type: "paragraph",
      text: "Displays are not perfectly uniform either.",
    },
    {
      type: "paragraph",
      text: "Two shades that differ by a similar numerical amount in software do not always look equally different to a human observer.",
    },
    {
      type: "paragraph",
      text: "That means one round may naturally feel easier than another.",
    },
    {
      type: "paragraph",
      text: "Do not overinterpret a single difficult hue family.",
    },
    {
      type: "paragraph",
      text: "Multiple rounds provide a better picture of your performance on the game.",
    },
    {
      type: "heading",
      text: "Can Color Discrimination Improve With Practice?",
    },
    {
      type: "paragraph",
      text: "You can become better at the task.",
    },
    {
      type: "paragraph",
      text: "Practice teaches you to compare neighboring swatches more systematically and to pay attention to smaller differences.",
    },
    {
      type: "paragraph",
      text: "People who work with color frequently may also develop strong practical strategies for visual comparison.",
    },
    {
      type: "paragraph",
      text: "But repeated improvement can partly reflect **task familiarity**, not a biological change in your eyes.",
    },
    {
      type: "paragraph",
      text: "That is another reason to describe the result as performance on a color-perception challenge rather than a medical measurement.",
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
          question: "What does a score of 0 mean?",
          answer: "It means you placed every swatch in the correct light-to-dark order for that round.",
        },
        {
          question: "Is this a hue discrimination test?",
          answer:
            "It is better described as a shade or lightness discrimination test because the main task is ordering lighter and darker versions within the same color family.",
        },
        {
          question: "Is this the Farnsworth–Munsell 100 Hue Test?",
          answer:
            "No. The FM100 is a standardized hue-arrangement test with a different stimulus set, procedure, and scoring system. This browser task is only conceptually related through color ordering.",
        },
        {
          question: "Can this test diagnose color blindness?",
          answer:
            "No. Use the separate Color Blind Test for an informal red-green screening, and consult an eye-care professional for diagnosis.",
        },
        {
          question: "Does a bad screen make my score worse?",
          answer:
            "It can. Display brightness, contrast, color processing, viewing angle, and filters can make subtle shade differences easier or harder to see.",
        },
      ],
    },
    {
      type: "heading",
      text: "Test Your Color Perception Again",
    },
    {
      type: "paragraph",
      text: "For a repeatable benchmark, choose one setup and keep it constant.",
    },
    {
      type: "paragraph",
      text: "For example: **8 swatches + 3 rounds + same display**",
    },
    {
      type: "paragraph",
      text: "Turn off color-changing filters, use comfortable neutral lighting, and compare your average error across sessions.",
    },
    {
      type: "paragraph",
      text: "The goal is not to earn a medical label. It is to see how accurately you can detect and order **small visual differences that are easy to overlook**.",
    },
  ],
};
