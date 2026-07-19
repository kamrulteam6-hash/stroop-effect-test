import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The Color Perception Test challenges your ability to discriminate between subtle shade differences. In each round, you'll see 6, 8, or 12 swatches (your choice) of the same color family shuffled out of order — your task is to click them from lightest to darkest as accurately as you can, across 1, 3, or 5 rounds. It's inspired by professional color discrimination tests used in design and vision science fields.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Color Perception Test Works",
    },
    {
      type: "paragraph",
      text: "Each round shows swatches that are all the same hue but at different lightness levels, arranged in a random shuffled order. Click them in the order you believe goes from lightest to darkest. Once you've clicked them all, we compare your chosen order to the actual correct order and calculate an error score — the total distance each swatch ended up from its correct position. A score of zero means a perfect round. The test repeats for your chosen number of rounds, each with a different randomly chosen hue.",
    },
    {
      type: "heading",
      id: "farnsworth-munsell",
      text: "The Farnsworth-Munsell 100 Hue Test",
    },
    {
      type: "paragraph",
      text: "This task is a simplified version of a real professional color arrangement test: the Farnsworth-Munsell 100 Hue Test, originally developed by Dean Farnsworth in the 1940s for military applications and still used today in fields from textile and paint manufacturing to occupational vision screening. The full version uses 85 movable color caps across four rows spanning the entire hue circle, scored so that zero represents a perfect arrangement — the same zero-is-best convention we use here. Ours simplifies that into a single-hue, lightness-ordering task that runs entirely in your browser, rather than a physical or fully licensed digital replica of the original 85-cap test.",
    },
    {
      type: "heading",
      text: "The Science Behind Color Discrimination",
    },
    {
      type: "paragraph",
      text: "Distinguishing fine differences in lightness and hue relies on the density and health of cone cells in your retina, as well as how well your visual cortex processes and compares closely related colors. Performance can also be affected by screen calibration, lighting conditions, and even short-term visual fatigue — which is worth keeping in mind before assuming a rough result reflects your actual color vision rather than your monitor.",
    },
    {
      type: "heading",
      id: "who-relies-on-it",
      text: "Who Relies on Strong Color Discrimination?",
    },
    {
      type: "paragraph",
      text: "Photographers, graphic designers, and video editors depend on precise color discrimination daily, since even small color misjudgments can throw off a final print, a client deliverable, or a color-graded scene. It's common advice in these fields to calibrate monitors monthly when working on color-critical projects, and casual users are generally advised to recalibrate every three to six months — a reminder that even strong natural color discrimination can be undermined by an uncalibrated screen.",
    },
    {
      type: "heading",
      text: "Tips to Improve Your Score",
    },
    {
      type: "list",
      items: [
        "Scan all the swatches first before clicking anything, rather than deciding as you go.",
        "Compare swatches side by side mentally rather than judging each one in isolation.",
        "Take the test in good, even lighting — glare and dim rooms both hurt discrimination.",
        "Avoid rushing; there's no time pressure, so a careful, deliberate approach tends to score better.",
        "Try 12 swatches once 6 or 8 feels easy — more swatches means smaller lightness differences between neighbors.",
        "If your results feel consistently off, try adjusting your screen brightness and contrast settings.",
      ],
    },
    {
      type: "callout",
      icon: "🔴",
      title: "Not the same as a color blindness screening",
      tone: "gold",
      text: "This test measures graded shade discrimination, not red-green color confusion specifically. For that, try our [Color Blind Test](/test/colorblind-test-online), a two-minute Ishihara-style screening.",
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
          question: "What's a good color perception score?",
          answer:
            "An error score of 0 to 4 per round is considered excellent color discrimination. Scores between 5 and 12 are still solid, while consistently higher scores may suggest reduced hue discrimination sensitivity — or simply an uncalibrated screen.",
        },
        {
          question: "Is this the same as a color blindness test?",
          answer:
            "It's related but different — this test measures fine-grained shade discrimination within a single hue, while a color blindness test screens specifically for red-green color confusion using contrasting hues.",
        },
        {
          question: "What is the Farnsworth-Munsell 100 Hue Test?",
          answer:
            "It's a well-known professional color arrangement test developed in the 1940s, using 85 color caps arranged into the correct hue order. It's used in vision research and industries where precise color discrimination matters, and it inspired the simplified format used here.",
        },
        {
          question: "Does my screen affect the results?",
          answer:
            "Yes, significantly. Screen color calibration, brightness, and even the viewing angle on some displays can shift how shades appear, affecting your score independent of your actual color vision.",
        },
        {
          question: "Can color discrimination be trained?",
          answer:
            "To a modest degree, yes — professionals like painters, designers, and photographers often develop sharper color discrimination through years of deliberate practice and attention to subtle color differences.",
        },
      ],
    },
  ],
};
