import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How old is your attention? Not your actual age, not your biological age — your \"attention age\" is an easy-to-read way of summarizing how your current performance on a quick attention task compares against an age-style scoring scale.",
    },
    {
      type: "paragraph",
      text: "The Attention Age Test uses a short go/no-go task — react quickly to most signals while holding back on the occasional \"no-go\" trap — then converts your speed and accuracy into a simple age-style result. Treat the number as a performance estimate from this playful minigame, not a medical measurement of your brain and not a diagnosis of ADHD, dementia, cognitive impairment, or any neurological condition.",
    },
    { type: "heading", id: "what-is-attention-age", text: "What Is \"Attention Age\"?" },
    {
      type: "paragraph",
      text: "\"Attention age\" is not a standard clinical diagnosis — it is a score format. Instead of telling you only \"accuracy: 91%\" or \"average response time: 426 ms,\" an attention-age result translates performance signals into a number that is easier to understand at a glance. A result that looks \"younger\" than your chronological age may indicate stronger performance on this specific task. A result that looks \"older\" may indicate slower or less accurate performance. But the number should never be interpreted as the literal age of your brain.",
    },
    { type: "heading", id: "go-no-go", text: "What Is a Go/No-Go Task?" },
    {
      type: "paragraph",
      text: "A go/no-go task presents a stream of signals where you respond quickly to most of them (\"go\" trials) but must hold back your response on a smaller number of exceptions (\"no-go\" trials). This design captures two things at once: how fast you can react, and whether you can inhibit an automatic response when the situation calls for restraint. Reacting too quickly and too often tends to produce false alarms on the no-go trials; reacting too cautiously slows down your overall speed. The test's scoring balances both.",
    },
    { type: "heading", id: "why-speed-alone-bad", text: "Why Speed Alone Is a Bad Measure of Attention" },
    {
      type: "paragraph",
      text: "Suppose two people complete the same task. Person A reacts extremely quickly but makes many mistakes on the no-go trials. Person B is slightly slower and misses almost nothing. Who has \"better\" attention? There is no honest answer if you look only at response time — cognitive performance involves a speed–accuracy tradeoff, and people can deliberately respond more cautiously depending on age, personality, task instructions, fatigue, or strategy. That is why this test's age-style result considers both how fast you responded and how reliably you responded correctly.",
    },
    { type: "heading", id: "changes-across-lifespan", text: "Attention Does Change Across the Lifespan — but Not in One Straight Line" },
    {
      type: "paragraph",
      text: "It is tempting to assume younger equals better attention and older equals worse attention. Research is more complicated. Large lifespan studies have found age-related changes in reaction speed and attention strategy, but different aspects of attention follow different trajectories — some research has found that older adults respond more slowly on average while maintaining sustained attention surprisingly well, and in certain settings older adults may even show less mind-wandering across a task than younger adults. So your Attention Age should not be read as a biological ranking of young versus old brains — it is a compact summary of this performance, on this task, under these conditions.",
    },
    { type: "heading", id: "how-to-interpret", text: "How to Interpret Your Attention Age" },
    {
      type: "paragraph",
      text: "Imagine your chronological age is 40. An attention age of 30 may mean your performance on this task resembles a stronger or \"younger\" reference profile — do not interpret this as \"my brain is literally ten years younger.\" An attention age near 40 may fall close to the test's expected middle range. An attention age of 55 may mean your current performance was slower or less accurate than the reference pattern used by the test — that is a reason to inspect the details, not panic. Sleep, stress, device lag, interruptions, unfamiliarity with the task, and simple day-to-day variation can all affect online cognitive performance.",
    },
    { type: "heading", id: "what-affects-score", text: "What Can Affect Your Score Today?" },
    {
      type: "paragraph",
      text: "Online attention testing is sensitive to conditions. Your result may be influenced by poor sleep, stress, anxiety, distraction, notifications, multitasking before the test, caffeine or other stimulants, alcohol or other substances, medications, pain, illness, screen size, mouse or touchscreen input, internet or device performance, and unfamiliarity with the task. That does not make the test useless — it means the test is a snapshot. If you want to compare results over time, make the conditions as similar as possible.",
    },
    { type: "heading", id: "cleaner-result", text: "How to Get a Cleaner Attention Age Result" },
    {
      type: "list",
      ordered: true,
      items: [
        "Use a device you are comfortable with.",
        "Close unnecessary tabs and apps.",
        "Silence notifications.",
        "Sit somewhere reasonably quiet.",
        "Read the instructions fully.",
        "Avoid switching devices in the middle of the test.",
        "Prioritize correct responses rather than trying to \"game\" the score with reckless speed.",
      ],
    },
    {
      type: "paragraph",
      text: "If you retake the test later, try to use the same device and a similar time of day — that makes the comparison more meaningful.",
    },
    { type: "heading", id: "not-iq", text: "Attention Age Is Not an IQ Score" },
    {
      type: "paragraph",
      text: "Attention supports many cognitive tasks, but it is not the same as intelligence. A slower response on this task does not tell you how well you reason, understand language, solve complex problems, learn new information, or make good judgments. This test does not convert one attention score into a global judgment about your intelligence.",
    },
    { type: "heading", id: "not-adhd-test", text: "Attention Age Is Not an ADHD Test" },
    {
      type: "paragraph",
      text: "Difficulty concentrating is associated with ADHD, but an Attention Age Test cannot diagnose it. ADHD assessment involves much more than one short computer task — clinicians consider patterns of symptoms, history, functioning across settings, developmental context, and alternative explanations. A poor attention score could reflect distraction, sleep loss, stress, or unfamiliarity with the task. If your real question is \"do I have ADHD?\" an attention-age number is not enough to answer it.",
    },
    { type: "heading", id: "not-dementia-test", text: "Attention Age Is Not a Dementia Test" },
    {
      type: "paragraph",
      text: "The same warning applies to dementia and cognitive decline. One unusual result should not be interpreted as proof of a neurological disease. Clinical cognitive assessment uses validated instruments, professional interpretation, medical history, and often multiple cognitive domains. If you or someone close to you has noticed persistent or worsening changes in memory, attention, reasoning, language, or daily functioning, an online game should not replace professional evaluation.",
    },
    { type: "heading", id: "can-improve", text: "Can You Improve Your Attention Age?" },
    {
      type: "paragraph",
      text: "You can often improve your test performance, but be careful about interpreting why — a second attempt may be better simply because you understand the task, which is called a practice effect. General habits that support day-to-day attention include adequate sleep, reducing unnecessary distractions, taking breaks during prolonged work, and doing one demanding task at a time instead of constantly switching.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is an Attention Age Test?",
          answer: "It is a go/no-go performance test that converts your speed and accuracy into an age-style result.",
        },
        {
          question: "Is attention age my real brain age?",
          answer: "No. It is a test-specific performance estimate, not a biological or medical age measurement.",
        },
        {
          question: "Is a lower attention age always better?",
          answer: "Not necessarily. The meaning depends on how the test is scored. Raw speed should not be rewarded if it comes with many errors.",
        },
        {
          question: "Why did my attention age change when I retook the test?",
          answer: "Fatigue, practice, motivation, distractions, sleep, device differences, and normal performance variability can all change a result.",
        },
        {
          question: "Can this test diagnose ADHD?",
          answer: "No. A short online attention task cannot diagnose ADHD.",
        },
        {
          question: "Can it detect dementia?",
          answer: "No. It is not a dementia screening or diagnostic assessment.",
        },
      ],
    },
    { type: "heading", text: "Think Beyond the Age Number" },
    {
      type: "paragraph",
      text: "The age-style score makes the result memorable. The performance details make it useful. Ask: was I accurate? Did I avoid the no-go traps? Did I sacrifice accuracy for speed? That is the real value of an Attention Age Test — your result is not a birthday for your brain, it is a snapshot of how your attention performed today.",
    },
  ],
};
