import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Seeing a signal is fast. Choosing the correct response adds another step. This Decision Speed Test measures how quickly you can identify the largest number among a growing set of choices and select it accurately under time pressure.",
    },
    {
      type: "paragraph",
      text: "Unlike a simple reaction-time test where you click as soon as one signal appears, this task gives you alternatives — as the round progresses, the number of options grows from two to four, so your brain must scan the choices, identify the correct one, and produce the response. This is a cognitive performance test, not a diagnosis or a direct measure of intelligence.",
    },
    { type: "heading", id: "what-is-decision-speed", text: "What Is Decision Speed?" },
    {
      type: "paragraph",
      text: "Decision speed is the time required to move from presented information to a selected response. In laboratory-style cognitive testing, this is closely related to choice reaction time. Simple reaction time asks \"did the signal appear?\" Choice reaction time asks \"which option is correct, and which response matches it?\" That extra choice makes the task cognitively richer — the result reflects a chain of processing, not one isolated ability.",
    },
    { type: "heading", id: "simple-vs-choice", text: "Simple Reaction Time vs. Choice Reaction Time" },
    {
      type: "paragraph",
      text: "Imagine a screen that turns green with the only instruction \"click when it turns green\" — that is a simple reaction-time task. Now imagine several numbers on screen and you must identify and click the largest one. That is a choice reaction-time task. It adds stimulus identification, comparison among alternatives, response selection, and error control. For a Decision Speed Test, choice reaction time is usually the more relevant model.",
    },
    { type: "heading", id: "what-it-measures", text: "What Does a Decision Speed Test Measure?" },
    {
      type: "paragraph",
      text: "A useful result can include several metrics: average correct decision time (how long correct responses took), accuracy (what percentage of choices were correct), errors (how often you selected the wrong number), missed responses (how often you failed to respond before the time limit), consistency (were your response times stable across trials), and performance by choice complexity (did your decision time change as more numbers appeared). Together, these metrics are more meaningful than one \"milliseconds\" number.",
    },
    { type: "heading", id: "hick-hyman-law", text: "More Choices Usually Require More Processing" },
    {
      type: "paragraph",
      text: "A classic finding in cognitive psychology is associated with the Hick-Hyman law. In general, choice reaction time tends to increase as the number or uncertainty of possible responses increases — choosing between two numbers is usually simpler than choosing among four. This does not mean twice as many choices always produce exactly twice the decision time; the relationship is more nuanced. But the practical idea is useful: more uncertainty usually creates more response-selection work, which is exactly why this test increases the option count as it progresses.",
    },
    { type: "heading", id: "speed-accuracy-tradeoff", text: "Speed Without Accuracy Is Not Good Decision Performance" },
    {
      type: "paragraph",
      text: "Suppose Person A averages 320 ms with 72% accuracy, while Person B averages 390 ms with 97% accuracy — who performed better? There is no responsible answer from speed alone. Decision research often deals with a speed-accuracy tradeoff: when people prioritize speed, errors can increase; when they prioritize accuracy, responses may become slower. A useful Decision Speed Test should therefore report both, otherwise users can \"improve\" their score simply by clicking faster and guessing.",
    },
    { type: "heading", id: "what-score-means", text: "What Your Decision Speed Score Means" },
    {
      type: "paragraph",
      text: "Faster, accurate performance means you selected correct responses quickly and consistently in this task, suggesting efficient performance under the current rules — it does not mean you should make major real-life decisions faster. Moderate performance means your choice speed may fall in the middle range, or you may be balancing speed and caution — look at accuracy and consistency before interpreting the average time. Slower performance may mean you needed more time to scan the options or act; that is not automatically poor cognition, and testing conditions matter.",
    },
    { type: "heading", id: "decision-vs-movement", text: "Decision Time vs. Movement Time" },
    {
      type: "paragraph",
      text: "A click-based test contains at least two broad stages: deciding what response is correct, then physically making the response. Those are not identical — researchers sometimes separate reaction time from movement time. Device setup can also affect the motor portion, since a mouse, keyboard, touchscreen, trackpad, or mobile device may produce different timings. That is one reason browser-based milliseconds should not be treated as laboratory-perfect measurements.",
    },
    { type: "heading", id: "vs-processing-speed", text: "Decision Speed vs. Processing Speed" },
    {
      type: "paragraph",
      text: "These concepts overlap. Processing speed is a broad ability involving how efficiently simple cognitive operations are completed. Decision speed is narrower: how quickly you can choose the appropriate response from alternatives. Our [Processing Speed Test](/test/processing-speed-test) uses tasks that emphasize broader rapid information processing, while this page focuses specifically on timed selection.",
    },
    { type: "heading", id: "vs-decision-style", text: "Decision Speed vs. Decision-Making Style" },
    {
      type: "paragraph",
      text: "Do not confuse cognitive speed with personality preference. Our [Decision-Making Style Test](/test/decision-making-style-test) asks whether you typically approach choices rationally, intuitively, dependently, avoidantly, or spontaneously — that is self-reported behavior. This Decision Speed Test asks how quickly and accurately you respond during controlled choices. Someone can be a slow, deliberate real-life decision-maker and still have excellent choice reaction time.",
    },
    { type: "heading", id: "practice-effects", text: "Why Practice Can Make You Faster" },
    {
      type: "paragraph",
      text: "The first few trials are not identical to later trials. At the start, you may still be learning where the numbers appear, how the task moves, and what to expect. Later, this becomes more automatic, which can reduce response time. A well-designed test may include easier early rounds before the option count grows; if it does not, early learning can influence the final average.",
    },
    { type: "heading", id: "what-affects-score", text: "What Can Affect Your Decision Speed Today?" },
    {
      type: "paragraph",
      text: "Your result can vary because of sleep, fatigue, distraction, stress, motivation, caffeine, alcohol or other substances, medications, age, familiarity with the task, mouse or touchscreen latency, display refresh, and device performance. Because online timing includes hardware and software, small differences should not be overinterpreted — a 12-millisecond change is not automatically a meaningful cognitive change.",
    },
    { type: "heading", id: "consistency", text: "Why Consistency Matters" },
    {
      type: "paragraph",
      text: "Consider two participants with the same average. Person A: 410, 405, 415, 408, 412 ms. Person B: 250, 610, 270, 650, 260 ms. The averages can move toward a similar range, but the second pattern is much more variable. Consistency can reveal lapses or unstable responding that an average hides. A strong results page should therefore include variability when the test collects enough trials to estimate it meaningfully.",
    },
    { type: "heading", id: "can-improve", text: "Can Decision Speed Improve?" },
    {
      type: "paragraph",
      text: "Practice can improve performance on a specific choice task — you learn the layout, reduce hesitation, and develop more efficient scanning strategies. That does not automatically mean every real-world decision becomes better. Real decisions may involve uncertain outcomes, competing values, incomplete information, social consequences, and long-term tradeoffs. A 350-millisecond number choice and a career decision are both \"decisions,\" but they are not the same psychological problem.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Decision Speed Test?", answer: "It is a timed choice task that measures how quickly and accurately you select the correct response from multiple alternatives." },
        { question: "Is decision speed the same as reaction time?", answer: "Choice reaction time is closely related to decision speed. Simple reaction time has only one required response, while choice reaction tasks require selecting among responses." },
        { question: "What is a good decision speed?", answer: "There is no universal browser-based cutoff. Scores depend on the task, number of alternatives, device, age, practice, and scoring method." },
        { question: "Are faster decisions always better?", answer: "No. Speed has to be interpreted together with accuracy." },
        { question: "Does a fast score mean I have high intelligence?", answer: "No. Choice reaction time measures a limited cognitive process and is not a substitute for an intelligence test." },
        { question: "Why did I get faster the second time?", answer: "Practice, familiarity with the layout, motivation, and normal variability can all improve retest performance." },
      ],
    },
    { type: "heading", text: "Fast Is Useful Only When It Is Correct" },
    {
      type: "paragraph",
      text: "A Decision Speed Test should not reward frantic clicking. The real challenge is to see the options, identify the correct one, and choose it efficiently. That is why milliseconds alone are not enough — look at your speed, then look at accuracy, then look at consistency. Together, those measures tell you how efficiently you made rapid choices in the test.",
    },
  ],
};
