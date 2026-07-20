import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Multiple Object Tracking (MOT) is a classic visual attention paradigm used in cognitive psychology labs to study how many moving items a person can track at once. A handful of dots briefly light up as targets among a field of identical distractors, then everything starts moving and looks the same — your job is to keep your attention locked onto the original targets and pick them back out once the motion stops.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Multiple Object Tracking Test Works",
    },
    {
      type: "paragraph",
      text: "Choose how many targets to track — 2, 3, or 4. A total of 8 dots appear on screen, and your chosen number of them highlight briefly so you know which ones to follow. Then every dot turns identical and starts drifting and bouncing around the area for several seconds. Once the motion stops, click the dots you believe were the original targets. Your score is how many you correctly identify out of the total number of targets.",
    },
    {
      type: "heading",
      text: "Why This Task Is Used in Vision Research",
    },
    {
      type: "paragraph",
      text: "MOT was introduced in the 1980s by psychologists Zenon Pylyshyn and Ron Storm to study sustained visual attention, and it remains a standard tool in perception and attention research today. It reveals something simple cameras and single-target tracking tasks can't: that human attention can be split across several independent moving targets at once, but only up to a limited capacity — most people can reliably track around three to four moving objects simultaneously before accuracy starts to drop. That capacity limit is the whole point of the task, and it's part of why MOT performance has been studied in contexts ranging from sports expertise to air traffic control training.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "What Your Score Reflects",
    },
    {
      type: "paragraph",
      text: "Getting all your targets right at 2-target difficulty simply confirms baseline tracking ability. The more interesting comparison is how your accuracy holds up as you move to 3 and then 4 targets — a steep drop-off between difficulty levels is the expected, normal pattern researchers have documented for decades, not a sign of poor attention. It reflects a genuine capacity limit in how attention divides across multiple moving items, similar in spirit to the divided-attention demands in our [Attention Span Test](/test/attention-span-test).",
    },
    {
      type: "heading",
      text: "Tips for Better Tracking",
    },
    {
      type: "list",
      items: [
        "Don't try to track each dot individually with sharp focus — use a broader, softer gaze that takes in the whole group.",
        "Avoid moving your eyes to follow one specific dot; that tends to lose the others.",
        "Start at 2 targets to get a feel for the motion speed before moving to 3 or 4.",
        "Mentally group the targets into a rough shape (like a triangle or square) and track how that shape moves and distorts, rather than tracking four separate points.",
        "Fatigue reduces tracking accuracy quickly — if your scores drop late in a session, that's likely attentional fatigue, not lost ability.",
      ],
    },
    {
      type: "callout",
      icon: "🎯",
      title: "Related attention challenges",
      tone: "primary",
      text: "For a working-memory take on tracking moving information over time, try our [N-Back Test](/test/n-back-test), which challenges continuous memory updating instead of continuous visual tracking.",
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
          question: "How many objects can the average person track at once?",
          answer:
            "Research on Multiple Object Tracking generally finds most people can reliably track around three to four moving targets at a time, with accuracy dropping off noticeably beyond that.",
        },
        {
          question: "Why do all the dots look the same while moving?",
          answer:
            "That's the core of the task — once tracking begins, targets and distractors are visually identical, so you have to rely purely on tracking motion and position over time rather than any visible marker.",
        },
        {
          question: "Is this test used in real psychology research?",
          answer:
            "Yes. Multiple Object Tracking is a well-established paradigm in vision science, introduced by researchers Zenon Pylyshyn and Ron Storm, and still widely used to study sustained and divided visual attention.",
        },
        {
          question: "Why did my accuracy drop a lot from 2 to 4 targets?",
          answer:
            "This is the expected pattern. Attention has a limited tracking capacity, and performance typically declines as the number of simultaneous targets increases — a steep drop-off doesn't indicate a problem.",
        },
        {
          question: "Can I improve my MOT performance with practice?",
          answer:
            "Some improvement with practice is common as you learn to use broader, group-based attention strategies instead of trying to follow individual dots, though the underlying capacity limit tends to remain fairly stable.",
        },
      ],
    },
  ],
};
