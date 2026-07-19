import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "This Attention and Focus Test uses a classic \"go/no-go\" task to measure sustained attention and impulse control. Letters or shapes flash on screen one at a time — respond to most of them, but hold back when you see the specific \"no-go\" stimulus. Choose 20 or 40 trials, an Easy or Hard no-go rate, and Letters or Shapes. It's a simple task that gets surprisingly difficult to do perfectly.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Attention Test Works",
    },
    {
      type: "paragraph",
      text: "A stimulus briefly flashes on screen for each trial. Tap the screen or press the spacebar for every stimulus except the designated no-go one — when you see it, do nothing and let it pass. At the end, you'll see your accuracy along with a detailed breakdown: hits (correctly responding to go stimuli), misses (failing to respond in time), and false alarms (accidentally responding to the no-go stimulus), plus your average reaction time on successful hits.",
    },
    {
      type: "heading",
      id: "understanding-results",
      text: "Understanding Hits, Misses, and False Alarms",
    },
    {
      type: "paragraph",
      text: "Each of these three numbers tells a different story. Hits and misses together describe your sustained attention — how consistently you're catching the stimuli you're supposed to respond to. False alarms describe something more specific: impulse control, or how well you can suppress the automatic urge to respond once your brain has built a rhythm of constant \"go\" responses. Researchers formalize this distinction using signal detection theory, often summarized in a single sensitivity measure called d-prime, which separates true attentiveness from simple response bias. We keep the breakdown here in plain hits/misses/false-alarms form rather than a single composite score, so you can see directly which part of your performance — attention or inhibition — is driving your result.",
    },
    {
      type: "heading",
      text: "The Science Behind Go/No-Go Tasks",
    },
    {
      type: "paragraph",
      text: "The go/no-go paradigm is a well-established tool in cognitive psychology and neuroscience for measuring sustained attention and response inhibition — your brain's ability to suppress an automatic or prepared action. Because \"go\" trials vastly outnumber \"no-go\" trials, your brain builds a strong habitual urge to respond, making the occasional no-go trial a genuine test of impulse control rather than simple reaction speed. This is the same family of inhibitory control tested by our [Stroop Effect Test](/test/stroop-effect-test), just isolated in a purer, non-verbal form — go/no-go tasks don't have a word-reading component to suppress, only a prepared motor response.",
    },
    {
      type: "heading",
      id: "adhd-research",
      text: "Go/No-Go Tasks in Attention Research",
    },
    {
      type: "paragraph",
      text: "Go/no-go tasks are widely used in clinical and academic research on attention, including studies of ADHD, where researchers have found that participants with ADHD tend to make more false alarms (commission errors) and show more variable response times than comparison groups. It's important to be clear about what this means for you: research findings about group differences in controlled studies are not the same as a diagnostic test. This free browser-based version is for self-awareness and entertainment — it cannot screen for or rule out ADHD or any other condition, and shouldn't be treated as one data point toward a diagnosis.",
    },
    {
      type: "heading",
      id: "vigilance-decrement",
      text: "The Vigilance Decrement",
    },
    {
      type: "paragraph",
      text: "Performance on sustained attention tasks like this one tends to get measurably worse the longer the task runs — a well-documented effect researchers call the vigilance decrement. That's part of why we offer both a 20-trial and a 40-trial option: the longer version doesn't just test peak-focus accuracy, it also captures how well your attention holds up as fatigue sets in, which the shorter version may not reveal.",
    },
    {
      type: "heading",
      text: "Tips to Improve Your Score",
    },
    {
      type: "list",
      items: [
        "Stay relaxed and alert rather than tense — over-anticipating responses increases false alarms.",
        "Focus on each stimulus individually instead of falling into a fast, automatic rhythm.",
        "If you catch yourself zoning out, take a brief mental reset before continuing.",
        "Prioritize accuracy over speed — a slightly slower, more deliberate response reduces mistakes.",
        "Avoid multitasking or testing with background distractions, which measurably hurts sustained attention tasks.",
        "Try the 40-trial Hard mode once 20-trial Easy feels comfortable, to test your attention under real fatigue.",
      ],
    },
    {
      type: "callout",
      icon: "🩺",
      title: "Not a medical or diagnostic tool",
      tone: "gold",
      text: "This test is for entertainment and general self-awareness only. It is not designed or validated to diagnose ADHD or any other attention-related condition — consult a qualified professional for that.",
    },
    {
      type: "paragraph",
      text: "For a pure processing-speed comparison without any inhibition component, try our [Reaction Time Test](/test/reaction-time-test) — it isolates simple visual reaction time with no \"hold back\" requirement at all.",
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
          question: "What's a good score on this attention test?",
          answer:
            "Accuracy of 90% or higher, with few false alarms, generally reflects strong sustained attention and impulse control on this type of task.",
        },
        {
          question: "What does a false alarm mean?",
          answer:
            "A false alarm happens when you respond to the no-go stimulus by mistake. It typically reflects a lapse in inhibitory control — the urge to respond winning out — rather than a simple reaction time issue.",
        },
        {
          question: "Why do I get worse the longer I play?",
          answer:
            "Sustained attention naturally dips over time, an effect called the vigilance decrement that's well documented in attention research — it's normal for accuracy to decline slightly across a longer session, especially in 40-trial Hard mode.",
        },
        {
          question: "Should I choose Letters or Shapes?",
          answer:
            "Both test the same underlying go/no-go mechanism. Shapes rely slightly more on visual pattern recognition, while letters add a small amount of verbal processing — try both to see if one feels meaningfully different for you.",
        },
        {
          question: "Is this test used in real research?",
          answer:
            "Go/no-go tasks like this one are widely used in cognitive psychology and neuroscience research to study attention, impulsivity, and executive function, including research on ADHD — though this free version is not a diagnostic tool.",
        },
      ],
    },
  ],
};
