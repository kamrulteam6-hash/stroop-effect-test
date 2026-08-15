import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you discover a hidden rule — and abandon it when the rule suddenly changes? Try this free **Wisconsin Card Sorting Test-style task** to challenge rule learning, feedback use, set shifting, and cognitive flexibility.",
    },
    {
      type: "paragraph",
      text: "You will see cards varying in features such as color, shape, and number. Match each new card to one of the reference cards. The correct sorting rule is hidden — you must infer it from Correct and Incorrect feedback.",
    },
    {
      type: "paragraph",
      text: "After you learn one rule, the rule may change without warning. Your challenge is to detect that shift and adapt. This browser task is inspired by the Wisconsin Card Sorting paradigm. It is **not the proprietary standardized WCST assessment** and should not use clinical norms from official versions.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Card Sorting Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Examine the reference cards.",
        "Look at the new card.",
        "Decide which reference card it belongs with.",
        "Use the feedback to infer the hidden rule.",
        "Keep applying the rule while it works.",
        "If previously correct choices start receiving negative feedback, reconsider the rule.",
        "Continue adapting as sorting rules change.",
        "Review your categories, errors, and rule-shift performance.",
      ],
    },
    { type: "paragraph", text: "You are not supposed to know the rule in advance. Learning from feedback is the core of the task." },
    { type: "heading", text: "What Is the Wisconsin Card Sorting Test?" },
    {
      type: "paragraph",
      text: "The Wisconsin Card Sorting Test (WCST) grew from card-sorting research developed by Esta Berg and David Grant in the 1940s. The classic task presents cards that vary along several dimensions, traditionally including color, form, and number. Participants match response cards to reference cards, and the examiner gives feedback about whether each sort is correct but does not explain the sorting principle.",
    },
    {
      type: "paragraph",
      text: "After the participant demonstrates that the current rule has been learned, the rule changes. The participant must recognize that the old strategy no longer works and discover the new one. This combination made card sorting a major paradigm for studying adaptive behavior and executive function.",
    },
    { type: "heading", text: "Why the Rule Is Hidden" },
    {
      type: "paragraph",
      text: "If the page simply told you to sort by color, the task would mostly test whether you can follow an instruction. By hiding the rule, the test requires concept formation — you must generate hypotheses (is it color? is it shape? is it number?) and use feedback to update them.",
    },
    { type: "paragraph", text: "The feedback converts each choice into evidence. Once a rule seems stable, you exploit it. When feedback changes, you must revise the model. That learning process is central to card-sorting tasks." },
    { type: "heading", text: "What Is Cognitive Flexibility?" },
    {
      type: "paragraph",
      text: "Cognitive flexibility broadly refers to the ability to adjust thoughts, rules, or behavior when circumstances change. Card sorting creates a concrete version of that challenge. At first, persistence is useful — if three color-based choices are correct, continuing to sort by color makes sense. After the rule changes, the same persistence becomes a problem, since successful performance now requires abandoning the old rule.",
    },
    { type: "paragraph", text: "That tension between maintaining a useful strategy and shifting when evidence changes is one reason the paradigm is so informative." },
    { type: "heading", text: "What Is a Perseverative Error?" },
    {
      type: "paragraph",
      text: "A perseverative error occurs when a participant continues responding according to a previously relevant sorting principle even after feedback indicates that the rule has changed. For example, you correctly learn Color, the hidden rule changes to Shape, but you continue sorting by Color despite repeated Incorrect feedback. Those continued old-rule responses are evidence of perseveration.",
    },
    { type: "paragraph", text: "Perseverative errors are among the most widely discussed WCST measures, but they should not be oversimplified as a pure score of mental rigidity." },
    { type: "heading", text: "Why Perseverative Errors Have More Than One Possible Cause" },
    {
      type: "paragraph",
      text: "Continuing with an old rule can reflect difficulty shifting, but research also shows that WCST performance depends on several processes — working memory, concept formation, attention, sensitivity to feedback, remembering previous rules, reversal learning, and response strategy.",
    },
    {
      type: "paragraph",
      text: "Suppose someone receives negative feedback but forgets which dimensions have already been tried. Their error may look like poor flexibility while partly reflecting working-memory demand. That is why a WCST-style task should not claim to isolate one executive function perfectly.",
    },
    { type: "heading", text: "Categories Completed" },
    {
      type: "paragraph",
      text: "A category usually represents a successfully learned sorting rule. In many WCST variants, a participant must make a sequence of consecutive correct sorts before the category counts as completed. The exact number differs across versions. When the required streak is achieved, the sorting rule changes.",
    },
    { type: "paragraph", text: "A person who completes more categories has successfully discovered rules, maintained them, noticed changes, and shifted to alternatives. However, category counts depend strongly on test length and stopping rules, and cannot be compared across different implementations without caution." },
    { type: "heading", text: "Other Useful Card-Sorting Measures" },
    { type: "paragraph", text: "Depending on the implementation, useful results can include:" },
    {
      type: "list",
      items: [
        "Total Correct — how many cards were sorted correctly?",
        "Total Errors — how many responses received negative feedback?",
        "Perseverative Errors — how often did you continue applying an old rule after it was no longer rewarded?",
        "Categories Completed — how many rule sets did you successfully discover and maintain?",
        "Failure to Maintain Set — did you break from a currently correct rule before the task actually changed it?",
        "Trials to First Category — how quickly did you infer the first sorting principle?",
      ],
    },
    { type: "paragraph", text: "A single combined \"brain score\" throws away much of this useful information." },
    { type: "heading", text: "Wisconsin Card Sorting Test vs. Task Switching Test" },
    {
      type: "paragraph",
      text: "The [Task Switching Test](/test/task-switching-test) also examines changing rules, but the structure is different. In task switching, the correct rule is usually explicitly cued — you know whether to perform Task A or Task B, and the cost is switching between them. In WCST-style card sorting, the rule is hidden — you must infer it from feedback and detect when it changes. This adds concept learning and feedback-based inference. The tasks overlap in cognitive flexibility but are not duplicates.",
    },
    { type: "heading", text: "Is This an Executive Function Test?" },
    {
      type: "paragraph",
      text: "WCST performance is widely associated with executive function. That is a reasonable broad description, but executive function is not one single ability. The task combines abstraction, updating, working memory, feedback processing, set maintenance, set shifting, and problem solving, so this page avoids claiming it gives your exact executive-function level. It is better described as a card-sorting paradigm that challenges several executive processes.",
    },
    { type: "heading", text: "Why This Page Must Distinguish the Official WCST" },
    {
      type: "paragraph",
      text: "The standardized Wisconsin Card Sorting Test is a proprietary clinical instrument with specific materials, administration procedures, scoring conventions, and norms. An independently created online task can reproduce the general research paradigm — sort multidimensional cards, receive feedback, infer rule, adapt when rule changes — but it should be described as WCST-style, Wisconsin Card Sorting-inspired, or a card sorting cognitive flexibility task.",
    },
    { type: "paragraph", text: "It should not claim to be the official standardized clinical test unless appropriately licensed and implemented. Clinical norms from proprietary versions should not be copied onto a browser adaptation." },
    { type: "heading", text: "What Is a Good WCST-Style Score?" },
    {
      type: "paragraph",
      text: "There is no universal online benchmark. Results depend on number of trials, rule-change schedule, number of dimensions, category criterion, card generator, feedback timing, stopping rule, and scoring definition. A person completing four categories on a 60-trial task cannot be compared directly with someone completing four categories on a different standardized procedure. For personal tracking, compare attempts using the same version.",
    },
    { type: "heading", text: "Can the Test Diagnose ADHD, Dementia, or Brain Injury?" },
    {
      type: "paragraph",
      text: "No. Clinical and research card-sorting tasks have been used with many populations, but that does not make one browser score diagnostic. A high number of perseverative errors can occur because of misunderstanding, distraction, feedback confusion, working-memory difficulty, fatigue, task strategy, or normal variation. Diagnosis requires validated clinical assessment far beyond this page.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "Who developed the Wisconsin Card Sorting Test?", answer: "The paradigm grew from work by Esta Berg and David Grant in the 1940s." },
        { question: "What is the hidden rule?", answer: "The rule typically involves a dimension such as color, shape/form, or number, but it changes during the task." },
        { question: "What is a perseverative error?", answer: "Continuing to use a previously correct rule after feedback indicates that it is no longer correct." },
        { question: "Does WCST measure cognitive flexibility?", answer: "It challenges cognitive flexibility, but performance also depends on working memory, feedback processing, concept formation, and other processes." },
        { question: "Is this the official clinical WCST?", answer: "No. This is an independent browser task inspired by the Wisconsin Card Sorting paradigm." },
        { question: "What is a good score?", answer: "There is no universal benchmark for an unstandardized online version. Use metrics from the exact implementation and avoid importing clinical cutoffs." },
        { question: "Can practice improve the score?", answer: "Yes, but improvement may reflect learning the task structure and possible rule dimensions rather than a broad change in executive function." },
      ],
    },
    {
      type: "paragraph",
      text: "The hardest part of card sorting is not discovering a successful rule — it is recognizing when that successful rule has stopped being useful. Use feedback, build a hypothesis, maintain it while the evidence supports it, then change course when the evidence changes. That cycle of learn, maintain, detect change, and shift is the core challenge of a WCST-style card sorting task.",
    },
  ],
};
