import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The Number Memory Test measures your digit span — how many numbers you can hold in working memory at once. Starting with your chosen number of digits, each level adds one more until you finally make a mistake. Choose Forward mode for the classic version, or Backward (Reverse) mode, where you have to type the digits in reverse order — a harder, more demanding variant used in real neuropsychological testing.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Number Memory Test Works",
    },
    {
      type: "paragraph",
      text: "You'll briefly see a string of digits on screen — the longer the string, the longer it stays visible so you have time to absorb it. Once it disappears, type the sequence back from memory (in reverse, if you selected Backward mode). Get it right, and the next round adds one more digit. Get it wrong, and the test ends, showing you the highest length you reached — the maximum number of digits you could reliably hold in memory under that mode.",
    },
    {
      type: "heading",
      text: "The Science Behind Digit Span",
    },
    {
      type: "paragraph",
      text: "Digit span tests have been used in psychology for over a century and remain part of standardized cognitive assessments today. They tap into working memory — the mental workspace your brain uses to temporarily hold and manipulate information, as opposed to simple passive storage. Psychologist George Miller's famous 1956 paper proposed that most people can hold around seven items, plus or minus two, in short-term memory at once — a number often summarized as \"the magical number seven.\" Later research refined this estimate, but digit span remains one of the simplest, most reliable ways to get a rough read on working memory capacity.",
    },
    {
      type: "heading",
      id: "forward-backward",
      text: "Forward vs. Backward Digit Span",
    },
    {
      type: "paragraph",
      text: "Forward digit span (repeat the numbers in the order shown) mostly measures simple short-term storage. Backward digit span (repeat them in reverse) demands more: you have to hold the sequence in mind and actively manipulate it, engaging working memory more heavily than forward recall alone. Because of that extra demand, backward span is typically about two digits shorter than forward span for the same person — so don't be discouraged if your Reverse mode result is noticeably lower than your Forward mode result. That gap is expected, not a sign of poor memory.",
    },
    {
      type: "heading",
      id: "chunking",
      text: "The Chunking Technique",
    },
    {
      type: "paragraph",
      text: "Chunking means grouping individual digits into meaningful units — the same reason a phone number like 894-555-7302 feels far easier to remember than ten random digits typed in a row. Each chunk occupies roughly one \"slot\" of working memory regardless of how many digits it contains, which is why chunking is the single most effective technique for boosting digit span. In a well-known case study, a long-distance runner trained himself to encode digit strings as race times he already knew well, pushing his digit span from a normal 7 up to an astonishing 80 digits — an extreme example, but a real demonstration of how much structure (not raw memory capacity) can improve recall.",
    },
    {
      type: "heading",
      text: "Tips to Improve Your Score",
    },
    {
      type: "list",
      items: [
        "Chunk the digits into small groups of 2–3 as they appear, rather than waiting until the sequence ends.",
        "Look for patterns — repeated digits, familiar numbers, or dates you already know.",
        "Say the numbers silently in your head as they appear to reinforce them verbally.",
        "Minimize distractions — background noise or multitasking noticeably hurts digit span performance.",
        "Stay relaxed; anxiety measurably reduces working memory capacity.",
        "Try Forward mode first to find your baseline, then challenge yourself with Backward mode.",
      ],
    },
    {
      type: "table",
      headers: ["Digits Remembered (Forward)", "Typical Interpretation"],
      rows: [
        ["4 or fewer", "Below the typical range"],
        ["5–6", "Low-average range"],
        ["7", "Average adult digit span (roughly the 50th percentile)"],
        ["8", "Above average (roughly the 75th percentile)"],
        ["9+", "Superior range (roughly the 90th percentile and above)"],
      ],
    },
    {
      type: "callout",
      icon: "🧩",
      title: "Explore other memory tests",
      tone: "primary",
      text: "Working memory isn't just about numbers. Try our [Sequence Memory Test](/test/sequence-memory-test) for spatial-order recall, or the [Visual Memory Test](/test/visual-memory-test) to test how many locations you can hold in mind at once.",
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
          question: "What is a good number memory score?",
          answer:
            "Most adults can reliably remember around 7 digits forward. Scores of 8 or 9 are considered above average, and consistently reaching 10 or more usually involves a deliberate memorization technique like chunking.",
        },
        {
          question: "Why is my Backward mode score lower than Forward mode?",
          answer:
            "That's expected. Backward digit span requires actively manipulating the sequence in your head, not just storing it, so it's typically about two digits shorter than forward span for the same person.",
        },
        {
          question: "Is this the same as an IQ test?",
          answer:
            "No. Digit span is one narrow measure of working memory and is sometimes used as part of broader IQ test batteries, but on its own it doesn't measure overall intelligence.",
        },
        {
          question: "Does chunking actually work, or is it a gimmick?",
          answer:
            "It genuinely works and is well-documented in memory research — grouping digits into familiar chunks measurably increases how many you can recall, since each chunk uses roughly one 'slot' of working memory regardless of its length.",
        },
        {
          question: "Why do I do worse when I'm tired?",
          answer:
            "Working memory is highly sensitive to fatigue, stress, and distraction, all of which reduce the mental resources available to hold and rehearse information.",
        },
        {
          question: "Can I train my digit span?",
          answer:
            "Yes, to a meaningful degree. Techniques like chunking numbers into groups or associating them with familiar patterns can noticeably increase how many digits you can reliably recall.",
        },
      ],
    },
  ],
};
