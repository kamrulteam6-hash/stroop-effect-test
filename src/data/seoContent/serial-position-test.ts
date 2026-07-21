import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Not all items in a list are equally memorable. Decades of memory research have found a strikingly consistent pattern: people tend to remember the first few and last few items in a list far better than the ones in the middle. This test lets you experience that pattern — known as the serial position effect — firsthand, using your own personal recall curve.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Serial Position Effect Test Works",
    },
    {
      type: "paragraph",
      text: "You'll see 15 words appear one at a time — just watch and try to remember them, no need to do anything else. Afterward, you'll see a larger set of words, some from the list and some decoys that were never shown. Click every word you remember seeing. Your results break recall down into three zones: the first 5 words (primacy), the middle 5 (the typical low point), and the last 5 (recency).",
    },
    {
      type: "heading",
      text: "Why Your Memory Works This Way",
    },
    {
      type: "paragraph",
      text: "The serial position effect was formally documented by psychologist Hermann Ebbinghaus in the late 1800s and has been replicated countless times since. Two separate memory mechanisms are believed to drive it: the primacy effect happens because early items get more rehearsal time and have a better chance of moving into long-term memory, while the recency effect happens because the last few items are still sitting in short-term working memory, freshly accessible at the moment of recall. Items in the middle get the worst of both worlds — too late for extra rehearsal, and too early to still be fresh in working memory.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Where This Shows Up in Real Life",
    },
    {
      type: "paragraph",
      text: "This isn't just a lab curiosity — the serial position effect quietly shapes how you remember conversations, presentations, meeting agendas, and even first impressions of people you meet in a group setting. It's part of why speakers are often advised to put their most important points at the beginning and end of a talk, and why the middle of a long list of instructions is the part people are most likely to forget or get wrong.",
    },
    {
      type: "heading",
      text: "Tips for a Cleaner Result",
    },
    {
      type: "list",
      items: [
        "Just watch naturally — don't try to use special memorization tricks, since the point is to see your normal pattern.",
        "Avoid distractions during the study phase; even a brief glance away can disrupt encoding of nearby words.",
        "Don't overthink the recognition step — go with your gut sense of \"I saw this\" rather than second-guessing every word.",
        "Try the test again later; your overall recall may vary, but the primacy/recency shape usually holds up.",
      ],
    },
    {
      type: "callout",
      icon: "📃",
      title: "A normal memory pattern, not a weak spot",
      tone: "gold",
      text: "A dip in the middle of your recall curve is expected and universal — it reflects how memory encoding works, not a personal memory problem.",
    },
    {
      type: "paragraph",
      text: "Curious about a related memory phenomenon? Try our [False Memory Test](/test/false-memory-test), which reveals how your memory can sometimes create a false recollection of something you never actually saw.",
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
          question: "What is the serial position effect?",
          answer:
            "It's the well-documented tendency to recall the first and last items in a list better than items in the middle, first formally studied by Hermann Ebbinghaus in the 1880s.",
        },
        {
          question: "What causes the primacy effect specifically?",
          answer:
            "Early list items get more opportunity for rehearsal before later items arrive, giving them a better chance of transferring into stable long-term memory.",
        },
        {
          question: "What causes the recency effect specifically?",
          answer:
            "The last few items are still active in short-term working memory at the moment of recall, making them easy to retrieve immediately afterward — though this effect fades quickly with any delay or distraction.",
        },
        {
          question: "Is it bad if I remember the middle words poorly?",
          answer:
            "No — a dip in the middle of the list is the expected, universal pattern seen across memory research, not a sign of weaker memory.",
        },
        {
          question: "Does this effect apply outside of memorizing word lists?",
          answer:
            "Yes — it shows up in everyday recall of conversations, presentations, and instructions, which is part of why important information is often placed at the start or end of a talk.",
        },
      ],
    },
  ],
};
