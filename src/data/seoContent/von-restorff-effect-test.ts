import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "One item that looks different from everything around it tends to stick in memory far more easily than items that blend in — a pattern known as the Von Restorff effect, or isolation effect. This test lets you experience it directly: study a list of ordinary words with one visually distinctive item mixed in, then see how much better you remember it.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Von Restorff Effect Test Works",
    },
    {
      type: "paragraph",
      text: "You'll see 13 words appear one at a time. Twelve look identical in plain text, and one is rendered much larger, bolder, and in a different color — just watch naturally, no need to do anything special. Afterward, you'll see a larger set of words, some from the list and some decoys that were never shown. Click every word you remember, and your result shows whether you recalled the distinctive word, alongside your overall recall rate for the plain ones.",
    },
    {
      type: "heading",
      text: "The Discovery Behind This Effect",
    },
    {
      type: "paragraph",
      text: "The effect is named after German psychiatrist and pediatrician Hedwig von Restorff, who first documented it in a 1933 study. She found that when people studied a list of similar items with one distinctive item mixed in, memory for that isolated item was consistently stronger than memory for the surrounding uniform items — a finding that has been replicated across nearly a century of subsequent memory research.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why Standing Out Helps Memory",
    },
    {
      type: "paragraph",
      text: "The leading explanation involves attention: an item that visually contrasts with its surroundings automatically captures more attentional resources at the moment you encounter it, and that extra attention translates into a stronger, more distinctive memory trace. It's a different mechanism from the serial position effect, which is about where an item sits in a sequence — the isolation effect is about how an item looks compared to everything around it, regardless of its position.",
    },
    {
      type: "heading",
      text: "Where This Effect Shows Up in Real Life",
    },
    {
      type: "list",
      items: [
        "Textbooks and slides that bold, color, or box key terms to make them memorable.",
        "Advertising that uses a visually distinct product or color to stand out from a cluttered environment.",
        "Public speakers who vary their tone or pause dramatically to make a key point land harder.",
        "User interface design, where a uniquely styled button or alert draws attention and sticks in memory.",
      ],
    },
    {
      type: "callout",
      icon: "✨",
      title: "Distinctiveness works even without extra effort",
      tone: "gold",
      text: "You don't have to consciously try to remember the distinctive item — the visual contrast alone tends to boost recall automatically.",
    },
    {
      type: "paragraph",
      text: "Curious about how position in a list affects memory instead of appearance? Try our [Serial Position Effect Test](/test/serial-position-test), which shows the recall boost for the first and last items in a sequence.",
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
          question: "Who discovered the Von Restorff effect?",
          answer:
            "German psychiatrist and pediatrician Hedwig von Restorff first documented it in a 1933 study on memory for lists containing one distinctive item among similar ones.",
        },
        {
          question: "Is the Von Restorff effect the same as the serial position effect?",
          answer:
            "No — the serial position effect concerns an item's position in a list (first, middle, or last), while the Von Restorff effect concerns how visually or conceptually distinctive an item is compared to its surroundings, independent of position.",
        },
        {
          question: "Why does a visually different item get remembered better?",
          answer:
            "Distinctiveness captures more attention at the moment of encoding, and that extra attention tends to create a stronger, more durable memory trace than items that blend in with their surroundings.",
        },
        {
          question: "Can I use this effect to study more effectively?",
          answer:
            "Yes — deliberately highlighting, coloring, or otherwise visually distinguishing the most important information in your notes can help it stand out in memory more than uniformly formatted text.",
        },
        {
          question: "Does the effect only work with color, or other properties too?",
          answer:
            "Research has found it can work with various forms of distinctiveness, including size, font, spacing, and even conceptual oddity — not just color alone.",
        },
      ],
    },
  ],
};
