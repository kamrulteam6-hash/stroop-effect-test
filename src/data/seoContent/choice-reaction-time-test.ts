import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How quickly can you choose the correct response when more than one response is possible? Take this free **Choice Reaction Time Test** to measure response speed under decision uncertainty.",
    },
    {
      type: "paragraph",
      text: "Instead of waiting for one signal and making one identical click, each stimulus maps to a different response. You must first identify what appeared, select the correct response, and then act. Your results should include both reaction time and accuracy — this is not the same task as simple reaction time.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Choice Reaction Time Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Learn the stimulus-response mapping.",
        "Keep your fingers ready on the response keys.",
        "Wait for a stimulus.",
        "Identify which stimulus appeared.",
        "Press the corresponding key as quickly as possible.",
        "Avoid guessing.",
        "Continue through all trials.",
        "Review correct-trial reaction time and accuracy.",
      ],
    },
    { type: "paragraph", text: "If the tool offers 2-choice and 4-choice modes, keep separate benchmarks for each. More alternatives create a different decision problem." },
    { type: "heading", text: "What Is Choice Reaction Time?" },
    {
      type: "paragraph",
      text: "Choice reaction time measures how long it takes to respond when more than one stimulus-response alternative is possible. A simple example: red circle means press F, blue circle means press J. The total measured time includes detecting the stimulus, identifying it, selecting the correct response, initiating the movement, and registering the keypress.",
    },
    { type: "paragraph", text: "Simple reaction time removes much of the response-selection stage because there is only one possible action. Choice reaction time therefore tends to be slower." },
    { type: "heading", text: "Choice Reaction Time vs. Simple Reaction Time" },
    {
      type: "paragraph",
      text: "The [Reaction Time Test](/test/reaction-time-test) asks something like \"the signal appeared — click now.\" There is one stimulus category and one response. Choice reaction time asks which signal appeared and which response belongs to it — for example, left arrow means Left key, right arrow means Right key, up arrow means Up key, down arrow means Down key.",
    },
    { type: "paragraph", text: "The additional selection stage means the two scores should not be compared directly. A 320 ms choice reaction can represent excellent performance even though 320 ms might seem slow on a simple click test." },
    { type: "heading", text: "Hick–Hyman Law" },
    {
      type: "paragraph",
      text: "One of the most important findings in choice reaction time is the Hick–Hyman law. Research by W. E. Hick in 1952 and Ray Hyman in 1953 showed that response time often increases approximately with the information associated with the number and probability of alternatives. For equally likely choices, this relationship is commonly summarized as RT ≈ a + b log₂(N), where RT is reaction time, N is the number of possible alternatives, and a and b depend on the person and task.",
    },
    { type: "paragraph", text: "The key idea is not simply \"twice as many choices = twice as slow.\" The increase is closer to logarithmic under the conditions where Hick–Hyman behavior appears." },
    { type: "heading", text: "Two Choices vs. Four Choices" },
    {
      type: "paragraph",
      text: "Suppose a test offers a 2-choice mode with two stimuli mapped to two keys, and a 4-choice mode with four stimuli mapped to four keys. The 4-choice condition adds uncertainty and response-selection demand, and average reaction time will usually increase. But the number of alternatives is not the only factor — difficulty also changes with stimulus similarity, response-key layout, practice, probability of each stimulus, and compatibility between stimulus and response. That is why a choice count alone does not determine the score.",
    },
    { type: "heading", text: "Stimulus–Response Compatibility" },
    {
      type: "paragraph",
      text: "Mapping matters. A compatible mapping, such as left arrow to left key and right arrow to right key, is often easier than an arbitrary mapping, such as blue square to F and green square to J. Spatially natural mappings tend to reduce response-selection difficulty. This is important when comparing online tests — two \"4-choice reaction tests\" can produce very different times if one uses intuitive arrow-key mappings and the other requires memorizing arbitrary symbol-key pairs.",
    },
    { type: "heading", text: "Accuracy Changes the Meaning of Speed" },
    {
      type: "paragraph",
      text: "A player can reduce reaction time by guessing — that does not represent faster decision processing. Suppose Run A averages 310 ms with 72% accuracy, and Run B averages 360 ms with 98% accuracy. Run A is faster, but Run B is far more accurate. A strong result must consider the speed–accuracy trade-off.",
    },
    { type: "paragraph", text: "Useful metrics include median correct reaction time, accuracy, incorrect responses, omissions, and RT by number of choices. Do not calculate reaction-time averages from incorrect trials as though they represent successful decisions." },
    { type: "heading", text: "Why Median Reaction Time Can Be Useful" },
    {
      type: "paragraph",
      text: "Reaction-time data are usually skewed. Most responses cluster within one range, but occasional trials become very slow because of distraction, hesitation, a blink, or momentary loss of the key mapping. A mean can be pulled upward by those long responses. A median correct RT is less affected by extreme values. If both average and median are available, show both clearly.",
    },
    { type: "heading", text: "What Is a Good Choice Reaction Time?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff that applies across all choice tasks. Your score depends on 2 vs. 4 vs. more choices, stimulus type, response mapping, practice, trial count, device latency, age, and accuracy requirements. Do not borrow the 200–250 ms benchmarks commonly quoted for simple visual reaction time and apply them to choice reaction — they measure different tasks. The best current benchmark is repeated performance using the same number of choices and mapping.",
    },
    { type: "heading", text: "Why Device Latency Matters" },
    {
      type: "paragraph",
      text: "The browser measures the combined delay from stimulus display to registered response — human processing plus display delay plus input delay. Potential hardware effects include monitor refresh rate, keyboard polling, touchscreen latency, Bluetooth devices, browser timing, and operating-system scheduling. For within-session comparisons between 2-choice and 4-choice conditions, much of the fixed device delay may affect both. For comparisons between people or devices, hardware differences become more important.",
    },
    { type: "heading", text: "Choice Reaction Time and Decision Speed" },
    {
      type: "paragraph",
      text: "It is reasonable to use decision speed as a plain-language description, but do not imply that the test measures real-life decision quality. Choosing the correct key for one of four arrows is highly constrained. Real decisions may involve incomplete information, values, uncertainty, planning, and emotional consequences. The task measures rapid stimulus identification and response selection, not wisdom or judgment.",
    },
    { type: "heading", text: "Choice Reaction Time and Processing Speed" },
    {
      type: "paragraph",
      text: "Choice RT is also related to the broader concept of processing speed, but it does not provide a complete processing-speed assessment. The measured time contains perceptual, decisional, and motor components. Someone may be slowed by an unfamiliar keyboard mapping even if their perceptual processing is fast. A browser result is therefore task-specific — avoid converting it into an IQ or \"brain speed\" score.",
    },
    { type: "heading", text: "Why Practice Makes You Faster" },
    {
      type: "paragraph",
      text: "Repeated practice reduces several costs. You become better at remembering the mapping, positioning your fingers, anticipating the task structure, and selecting the response automatically. Reaction time can fall substantially even if the raw sensory signal has not changed — that is genuine task learning. But it means a tenth attempt and first attempt are not equivalent. For progress tracking, record whether a score is a first-session baseline or a practiced performance.",
    },
    { type: "heading", text: "Choice Reaction Time vs. Simon Effect" },
    {
      type: "paragraph",
      text: "The [Simon Effect Test](/test/simon-effect-test) can also involve choosing between left and right responses, but the research question differs. Choice Reaction Time asks how quickly can you select among multiple mapped responses. Simon Effect asks how much does an irrelevant spatial location speed or slow that mapped response. A Simon task is therefore a special conflict design built on top of choice reaction.",
    },
    { type: "heading", text: "Choice Reaction Time vs. Flanker Test" },
    {
      type: "paragraph",
      text: "The [Flanker Test](/test/flanker-test) adds irrelevant surrounding arrows. Choice Reaction Time can use clean stimuli with no distractor conflict, making Choice RT a useful baseline for understanding how additional conflict affects response selection.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is choice reaction time?", answer: "The time required to identify one of multiple possible stimuli and make its corresponding response." },
        { question: "How is it different from simple reaction time?", answer: "Simple reaction uses one expected response. Choice reaction requires selecting among alternatives." },
        { question: "What is Hick's law?", answer: "The Hick–Hyman relationship describes how choice reaction time often increases with the information or number of response alternatives." },
        { question: "Does twice as many choices make you twice as slow?", answer: "No. Under classic Hick–Hyman conditions, the increase is approximately logarithmic rather than linear." },
        { question: "Is faster always better?", answer: "No. Fast responses with poor accuracy may reflect guessing." },
        { question: "Can I compare my result with a simple reaction-time score?", answer: "Not directly. Choice reaction includes additional stimulus identification and response-selection demands." },
        { question: "Is this an IQ test?", answer: "No. It measures performance on a rapid choice-response task." },
      ],
    },
    {
      type: "paragraph",
      text: "Simple reaction is mostly about when to respond. Choice reaction adds another question: which response is correct? That small change reveals the cost of uncertainty. As the number of alternatives grows, response selection generally takes longer — making Choice Reaction Time one of the clearest ways to experience how decision complexity affects speed.",
    },
  ],
};
