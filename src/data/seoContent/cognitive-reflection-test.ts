import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you notice when the first answer that comes to mind is tempting — but wrong? Take this free **Cognitive Reflection Test (CRT)** using original intuition-conflict reasoning problems. Each question is designed so that a quick response may feel obvious. Solving it correctly often requires checking that initial intuition before answering.",
    },
    { type: "paragraph", text: "This test uses new and expanded items rather than only the three famous original questions. The classic items are now widely known, and prior exposure can change what a score means." },
    { type: "heading", id: "how-to-take", text: "How to Take the Cognitive Reflection Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read each problem carefully.",
        "Notice the first answer that comes to mind.",
        "Do not assume that answer is correct.",
        "Work through the quantities or logic.",
        "Enter your final answer.",
        "Continue without searching online.",
        "Review correct answers and explanations after finishing.",
      ],
    },
    { type: "paragraph", text: "Do not time yourself so aggressively that the task becomes a speed contest. The core challenge is whether you verify an intuitive response." },
    { type: "heading", text: "What Is the Cognitive Reflection Test?" },
    {
      type: "paragraph",
      text: "The Cognitive Reflection Test, usually abbreviated CRT, was introduced by economist Shane Frederick in 2005. The original version contained only three short problems, each designed to evoke an intuitively appealing incorrect answer. The participant had to suppress or reconsider that first response and engage in more reflective reasoning.",
    },
    { type: "paragraph", text: "Frederick described the test as measuring a particular type of cognitive ability or disposition related to resisting the first response that comes to mind. The CRT became extremely influential in research on judgment, decision-making, risk preference, time preference, and reasoning style." },
    { type: "heading", text: "The Famous Bat-and-Ball Problem" },
    {
      type: "paragraph",
      text: "The most famous original CRT item is the bat-and-ball problem. Because it is now so widely circulated, repeating the exact item on a public website creates a major problem: many users already know the answer. A correct response might therefore reflect memory rather than fresh cognitive reflection. For SEO content, it is useful to explain the concept — for the actual interactive test, this site uses novel problems with the same intuition-conflict logic rather than building the entire score around famous items users may have seen before.",
    },
    { type: "heading", text: "Why the First Answer Feels Right" },
    {
      type: "paragraph",
      text: "CRT problems are constructed so that a quick heuristic produces a plausible answer. The error is usually not random — it follows from a predictable shortcut. To solve the problem correctly, you often need to detect that the intuitive answer may be suspicious, represent the problem more carefully, perform the required reasoning or arithmetic, and verify the result. This makes CRT different from ordinary trivia — the user is not supposed to recall a fact, they must overcome a misleading initial representation.",
    },
    { type: "heading", text: "Intuition vs. Reflection" },
    {
      type: "paragraph",
      text: "CRT is often explained using dual-process language. A simplified version contrasts fast/intuitive processing (quick, automatic, low-effort responses) with reflective/analytic processing (slower, more deliberate checking and reasoning). This framework is useful, but it should not be treated as though the mind literally contains two separate buttons labeled \"System 1\" and \"System 2.\" Modern reasoning research treats intuitive and analytic processing as more complex and interacting. The CRT demonstrates conflict between a compelling initial response and a more carefully reasoned answer.",
    },
    { type: "heading", text: "CRT Is Not Just Math Ability" },
    {
      type: "paragraph",
      text: "The classic CRT uses numerical word problems, which creates an obvious relationship with numeracy. Researchers have debated how much the test measures cognitive reflection, arithmetic skill, numeracy, problem-solving insight, or general cognitive ability. Some studies find that CRT performance reflects more than a pure willingness to think carefully — a person who detects the need for reflection may still fail because they cannot solve the arithmetic.",
    },
    { type: "paragraph", text: "That is why a strong modern web version should include a mixture of numerical intuition-conflict problems, non-numerical reasoning problems, and logic-based reflection items. This reduces dependence on one narrow skill." },
    { type: "heading", text: "Why the Original Three Items Are Not Enough" },
    {
      type: "paragraph",
      text: "Scoring three items produces only 0, 1, 2, or 3 — limited precision. The original questions are also now highly familiar through textbooks, social media, YouTube, online quizzes, and research participation. Later researchers therefore developed expanded CRT versions with additional items. A public site should follow that broader approach rather than pretending that three famous riddles produce a highly precise personal reasoning profile.",
    },
    { type: "heading", text: "The Familiarity Problem" },
    {
      type: "paragraph",
      text: "Research has directly examined whether prior exposure changes CRT performance. Some studies report that familiarity with the classic questions can inflate performance or change response processes. Other work suggests the CRT retains some predictive validity even after repeated exposure. The correct conclusion is therefore not \"exposure completely ruins the CRT,\" nor is it \"exposure never matters.\" A public web test faces unusually high familiarity because users may specifically search for CRT questions — using original item variants makes the result more meaningful.",
    },
    { type: "heading", text: "Accuracy vs. Response Time" },
    {
      type: "paragraph",
      text: "CRT is mainly scored by correct answers. Reaction time can be interesting, but it is difficult to interpret. A fast correct answer might mean excellent insight, prior familiarity, or strong arithmetic skill. A slow correct answer might mean careful reflection, difficulty understanding the problem, or distraction. A fast wrong answer may indicate acceptance of the intuitive response, but even that interpretation is not guaranteed. For a public tool, prioritize accuracy plus explanation over a simplistic \"faster is smarter\" metric.",
    },
    { type: "heading", text: "Intuitive Errors Are Informative" },
    {
      type: "paragraph",
      text: "A powerful CRT result page can show three categories: correct reflective answer (the final answer matches the logically correct solution), classic intuitive error (the response matches the tempting answer the item was designed to evoke), and other error (the answer is wrong but does not match the predicted intuitive response). Someone making a classic intuitive error followed the intended lure. Another incorrect answer may come from arithmetic or misunderstanding — the two should not automatically receive the same interpretation.",
    },
    { type: "heading", text: "Cognitive Reflection vs. IQ" },
    {
      type: "paragraph",
      text: "CRT performance correlates with cognitive ability measures. That does not make it an IQ test. A valid IQ score requires a standardized multi-domain assessment with appropriate norms. CRT samples a narrower kind of reasoning: can you question an intuitive answer when the problem is designed to make that answer tempting? A high CRT score does not prove general genius, and a low score does not prove low intelligence.",
    },
    { type: "heading", text: "Cognitive Reflection vs. Critical Thinking" },
    {
      type: "paragraph",
      text: "The concepts overlap but are not identical. Critical thinking can involve evaluating evidence, identifying assumptions, judging sources, reasoning about arguments, and updating beliefs. CRT focuses on short problems where an immediate response conflicts with a more reflective solution. It can be considered one small component of reflective reasoning rather than a complete critical-thinking test.",
    },
    { type: "heading", text: "Cognitive Reflection vs. Bias Tests" },
    {
      type: "paragraph",
      text: "This site already includes tests for Anchoring Bias, Framing Effect, Conjunction Fallacy, Sunk Cost Fallacy, and Gambler's Fallacy. CRT differs because it does not manipulate one named bias in the same way — instead, it tests whether users override tempting intuitive responses across a small set of problems. Research has found relationships between cognitive reflection and some judgment/decision-making outcomes, but a high CRT score does not make someone immune to cognitive biases.",
    },
    { type: "heading", text: "Designing Original CRT Items" },
    {
      type: "paragraph",
      text: "A good new item should have a tempting intuitive answer, one defensible correct answer, enough information to solve it, no trick wording that relies on ambiguity, and an explanation showing why the intuitive answer fails. Avoid riddles where the answer depends on a pun or hidden assumption — the task should reward reflection, not guessing what the author meant.",
    },
    { type: "heading", text: "What Is a Good CRT Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for an original web version. A score depends on number of questions, item difficulty, prior exposure, and numerical demands. Do not copy thresholds from Frederick's original three-item CRT onto a new 10-item or 12-item test. If your implementation later collects a large sample, you can create same-test percentile norms. Until then, report number correct, classic intuitive errors, and question explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "Who created the Cognitive Reflection Test?", answer: "Shane Frederick introduced the famous three-item CRT in 2005." },
        { question: "What does CRT measure?", answer: "It is designed to assess the tendency or ability to reconsider tempting intuitive responses and engage in reflective reasoning." },
        { question: "Is CRT an IQ test?", answer: "No. It correlates with some cognitive measures but is much narrower than a standardized intelligence test." },
        { question: "Why not use only the original three questions?", answer: "They are now extremely well known, so prior familiarity can influence scores." },
        { question: "Is a slow answer better?", answer: "Not necessarily. Accuracy and reasoning matter more than raw response time." },
        { question: "Does a high CRT score mean I am free from cognitive biases?", answer: "No. Cognitive reflection relates to some reasoning outcomes but does not provide immunity from bias." },
        { question: "Can I improve?", answer: "You can improve at checking intuitive responses and solving this task format, though that should not be overstated as a universal increase in rationality." },
      ],
    },
    {
      type: "paragraph",
      text: "The Cognitive Reflection Test works because the wrong answer often feels right immediately. The important skill is not simply \"thinking slowly.\" It is recognizing when an intuitive answer deserves verification. When a response pops into mind, ask: does the math or logic actually support it? That single habit captures the central idea behind cognitive reflection.",
    },
  ],
};
