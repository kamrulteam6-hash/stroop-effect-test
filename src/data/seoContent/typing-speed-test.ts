import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "This free Typing Speed Test measures your words per minute (WPM) and accuracy as you type. Choose Passage mode and pick a text category (Quotes, Tech, or Literature), or try the 60-second Sprint mode for a continuous, Monkeytype-style typing burst against a stream of common words. It's a quick way to check your baseline typing speed, whether you're preparing for a job requirement, curious how you compare to average, or just want a benchmark before a longer practice session.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Typing Speed Test Works",
    },
    {
      type: "paragraph",
      text: "In Passage mode, a short text appears on screen — start typing it out, and the timer begins automatically on your first keystroke. In 60-second Sprint mode, you type continuously against a long stream of text until time runs out, however far you get. As you type, each character is marked correct or incorrect in real time, and a live graph tracks your WPM throughout the test.",
    },
    {
      type: "heading",
      id: "net-vs-raw",
      text: "Net WPM vs. Raw WPM (How We Calculate Your Score)",
    },
    {
      type: "paragraph",
      text: "The main score you see is your net WPM — words per minute based only on the characters you typed correctly, divided by five (the standard average word length) and by the time elapsed in minutes. We also show your raw WPM, which counts every character you typed, mistakes included. The gap between the two matters: a typist who blazes through at high raw speed but makes constant errors will end up with a lower net WPM than someone typing more deliberately with fewer mistakes — which is exactly why net WPM, not raw WPM, is the number most typing tests (and most employers) actually care about.",
    },
    {
      type: "heading",
      text: "The Science Behind Typing Speed",
    },
    {
      type: "paragraph",
      text: "Typing quickly and accurately relies on procedural memory — the same type of long-term memory used for skills like riding a bike. With enough practice, your fingers learn key locations well enough that typing becomes largely automatic, freeing up your conscious attention to focus on the words themselves rather than individual keystrokes. This is why touch typists (who type without looking at the keyboard) are typically much faster and more accurate than \"hunt and peck\" typists, who must visually locate each key before pressing it, adding a slow, deliberate step to every keystroke.",
    },
    {
      type: "heading",
      id: "by-profession",
      text: "Average Typing Speed by Profession",
    },
    {
      type: "paragraph",
      text: "What counts as a \"good\" typing speed depends heavily on context. Published benchmarks for typing-heavy roles cluster around these ranges:",
    },
    {
      type: "table",
      headers: ["Group", "Typical WPM Range"],
      rows: [
        ["Untrained / beginner typist", "20–30 WPM"],
        ["General office / admin work", "40–50 WPM"],
        ["Trained touch typist", "65–75 WPM"],
        ["Data entry specialist", "65–80 WPM"],
        ["Legal secretary / transcriptionist", "70–90 WPM"],
        ["Professional / competitive typist", "80–120 WPM"],
      ],
    },
    {
      type: "heading",
      text: "Tips to Improve Your Score",
    },
    {
      type: "list",
      items: [
        "Keep your fingers on the home row (ASDF / JKL;) between keystrokes for faster, more accurate typing.",
        "Prioritize accuracy over raw speed at first — a typist at 65 WPM with 98% accuracy is faster in practice than one at 80 WPM with 85% accuracy, once you account for time spent correcting mistakes.",
        "Avoid looking at the keyboard; train yourself to trust muscle memory instead.",
        "Practice regularly in short sessions rather than occasional long ones — typing speed builds fastest with consistent repetition.",
        "Try the 60-second Sprint mode regularly — its live WPM graph makes it easy to see exactly where your speed drops off within a session.",
        "Sit with good posture and keep your wrists relaxed to avoid fatigue that slows you down over longer sessions.",
      ],
    },
    {
      type: "table",
      headers: ["Net WPM", "Typical Interpretation"],
      rows: [
        ["Under 30", "Beginner typing speed"],
        ["30–50", "Average typing speed"],
        ["50–70", "Above average, comfortable for most office work"],
        ["70+", "Fast typist, often achieved through touch typing practice"],
      ],
    },
    {
      type: "callout",
      icon: "⚡",
      title: "Test other kinds of speed",
      tone: "accent",
      text: "Typing speed is just one form of motor speed. Try our [Click Speed Test](/test/click-speed-test) for raw clicking speed, or the [Reaction Time Test](/test/reaction-time-test) for pure visual reflexes.",
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
          question: "What is a good typing speed?",
          answer:
            "The average typing speed is around 40 words per minute. Speeds of 60 WPM and above are generally considered fast, and professional typists in roles like transcription often reach 80–100+ WPM.",
        },
        {
          question: "What's the difference between net WPM and raw WPM?",
          answer:
            "Net WPM (the main score shown here) only counts correctly typed characters, so mistakes bring it down. Raw WPM counts every character you typed regardless of accuracy. Net WPM is the more meaningful number for most real-world typing.",
        },
        {
          question: "How is WPM calculated?",
          answer:
            "WPM is calculated by dividing the number of characters typed by five — the standard average word length — then dividing by the time taken in minutes. Net WPM uses only correctly typed characters; raw WPM uses all of them.",
        },
        {
          question: "Should I use Passage mode or 60-second Sprint mode?",
          answer:
            "Passage mode is a quick, consistent benchmark using the same fixed text structure each time. Sprint mode better reflects sustained real-world typing, since you're producing continuous text against the clock rather than a single short passage.",
        },
        {
          question: "How can I type faster without losing accuracy?",
          answer:
            "The fastest path is consistent touch-typing practice — learning proper finger placement so your speed increases naturally as the motion becomes automatic, rather than trying to force faster typing with poor technique.",
        },
      ],
    },
  ],
};
