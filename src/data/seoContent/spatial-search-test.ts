import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you remember where you have already found a target while continuing to search the remaining locations? Take this free **Spatial Search Test**. Several boxes appear in different positions. Hidden targets must be discovered one at a time. After finding a target, continue searching — but do not return to a location that has already produced one.",
    },
    { type: "paragraph", text: "The task is a self-ordered spatial search challenge. It combines exploration, spatial working memory, and strategy. This is implemented as an original browser task rather than presented as the proprietary CANTAB Spatial Working Memory assessment." },
    { type: "heading", id: "how-to-take", text: "How to Take the Spatial Search Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Several boxes appear on the screen.",
        "Open boxes one at a time to search for the hidden target.",
        "When you find a target, remember which box contained it.",
        "A new search begins among the same locations.",
        "Do not reopen boxes that have already yielded a target.",
        "Continue until every target has been found.",
        "Complete larger sets as difficulty increases.",
        "Review total errors, between-search errors, and strategy measures.",
      ],
    },
    { type: "paragraph", text: "The challenge is not remembering one fixed sequence. You decide your own search order while maintaining a memory of where successful searches have already occurred." },
    { type: "heading", text: "What Is Self-Ordered Spatial Search?" },
    {
      type: "paragraph",
      text: "A self-ordered spatial search task presents multiple locations and requires the participant to choose where to search. The person must avoid repeating choices that are no longer useful. A common structure uses several boxes, each of which can yield a target once. After a target is found, the next target is hidden elsewhere, and previously successful locations should not be searched again. The user must maintain and update a mental record of searched locations and especially locations that have already produced a target — this makes the task different from ordinary visual search.",
    },
    { type: "heading", text: "Why It Is Called Self-Ordered" },
    {
      type: "paragraph",
      text: "In a sequence-memory test, the computer determines the order and you reproduce it. In self-ordered search, you choose the next location yourself, which creates an executive demand. The participant must generate a search strategy while remembering the consequences of previous choices. Two people can therefore approach the same display differently — one may use a systematic left-to-right pattern, another may jump around randomly. Their strategies affect memory load and error rate.",
    },
    { type: "heading", text: "Spatial Search and Working Memory" },
    {
      type: "paragraph",
      text: "Spatial working memory involves temporarily retaining and updating information about locations. In this task, the relevant information changes continuously — at first, all boxes are possible, but after each target is found, that successful location should be excluded from future searches. The mental state must be updated after every success. That combination of storage, updating, and self-generated choices is why self-ordered spatial search has been widely used in working-memory research.",
    },
    { type: "heading", text: "What Is a Between-Search Error?" },
    {
      type: "paragraph",
      text: "The most important error is a between-search error. Suppose Box 3 produced a target during an earlier search. Later, you open Box 3 again while searching for a different target — that location can no longer contain a target, and you have failed to remember or apply information from a previous search. That is a between-search error. In common spatial working-memory procedures, more between-search errors indicate poorer performance — a browser result should explain this clearly because a higher error count is worse, not better.",
    },
    { type: "heading", text: "What Is a Within-Search Error?" },
    {
      type: "paragraph",
      text: "A within-search error occurs when you reopen a box that you already checked during the current search and found empty. For example, if you open Box 1 (empty), then Box 4 (empty), then Box 1 again (still empty), that second Box 1 visit is unnecessary and indicates failure to keep track of the locations already sampled within the current search. Some versions distinguish within-search errors from between-search errors — both can be useful.",
    },
    { type: "heading", text: "Why Between-Search Errors Are Especially Important" },
    {
      type: "paragraph",
      text: "Within one search, users only need to remember a short list of boxes just checked. Between searches, they must preserve information across multiple target discoveries. As the trial continues, the set of permanently unproductive boxes grows, making between-search errors particularly informative about maintaining and updating spatial information over the full problem. Research using spatial working-memory tasks commonly treats between-search errors as a key outcome.",
    },
    { type: "heading", text: "Strategy Scores" },
    {
      type: "paragraph",
      text: "A systematic strategy can reduce memory demand. Imagine eight boxes — instead of choosing random starting locations after each target is found, you begin each new search from the same reference point and follow a stable pattern. This can make it easier to remember which boxes have been permanently eliminated and how far through the current search you have progressed. Some established spatial working-memory tasks calculate a strategy score based on how consistently searches begin from the same location or follow organized patterns. An independent browser version can provide a simpler descriptive strategy metric rather than copying proprietary scoring rules.",
    },
    { type: "heading", text: "Difficulty and Number of Boxes" },
    {
      type: "paragraph",
      text: "Difficulty can increase from 3 boxes to 4, 6, or 8 boxes. Larger arrays increase the number of locations that must be tracked and create more possible search paths. A result should therefore report errors by set size — three errors on an 8-box level cannot be interpreted the same way as three errors on a 3-box level. A progressive design can begin easy and increase the number of boxes after successful completion.",
    },
    { type: "heading", text: "Spatial Search vs. Visual Search" },
    {
      type: "paragraph",
      text: "The [Visual Search Test](/test/visual-search-test) asks can you find a visible target among distractors. Spatial Search asks can you remember where you have already searched and where targets were previously found. In Visual Search, the target is visually present. In self-ordered Spatial Search, the target is hidden and search history matters — that gives the pages completely different cognitive demands.",
    },
    { type: "heading", text: "Spatial Search vs. Sequence Memory" },
    {
      type: "paragraph",
      text: "The [Sequence Memory Test](/test/sequence-memory-test) presents an ordered sequence of locations and asks the user to reproduce that same order. Spatial Search provides no sequence to memorize — the participant generates the sequence through their own choices. The important memory is which locations are still worth searching, making it a working-memory and self-ordering task rather than serial reproduction.",
    },
    { type: "heading", text: "Spatial Search vs. Backward Spatial Span" },
    {
      type: "paragraph",
      text: "The [Backward Spatial Span Test](/test/backward-spatial-span-test) presents a sequence and requires reverse-order reproduction. Spatial Search does not ask for reverse recall — it requires continuous updating during self-directed exploration. These are complementary visuospatial working-memory tasks with different demands.",
    },
    { type: "heading", text: "Response Time Is Secondary" },
    {
      type: "paragraph",
      text: "The central outcome is usually search accuracy and efficiency, not raw reaction time. A user who clicks rapidly but repeatedly revisits completed locations is not performing well. Useful results include between-search errors, within-search errors, total searches, targets found, level completed, and optional completion time. Time can break ties between similarly accurate runs, but errors should remain central.",
    },
    { type: "heading", text: "What Is a Good Spatial Search Score?" },
    {
      type: "paragraph",
      text: "There is no universal browser norm. Performance depends on number of boxes, target rules, whether completed boxes remain visually marked, screen layout, strategy scoring, and level progression. Do not import norms from CANTAB or another standardized/proprietary implementation into a custom test. If your site later collects enough same-version data, it can build its own descriptive percentiles.",
    },
    { type: "heading", text: "Can Spatial Search Diagnose Memory Problems?" },
    {
      type: "paragraph",
      text: "No. Self-ordered spatial tasks are used in cognitive, neurological, developmental, and clinical research, but one browser result cannot diagnose dementia, ADHD, schizophrenia, brain injury, or executive dysfunction. Errors can increase because of distraction, misunderstanding, random strategy, fatigue, or unfamiliarity. Clinical interpretation requires validated assessment and appropriate norms.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Spatial Search Test?", answer: "A self-ordered task where you search locations for hidden targets while remembering which locations have already been successfully searched." },
        { question: "What is a between-search error?", answer: "Returning to a location that yielded a target during an earlier search." },
        { question: "What is a within-search error?", answer: "Rechecking a location already found empty during the current search." },
        { question: "Does fewer errors mean better performance?", answer: "Generally yes within the same level and implementation." },
        { question: "Is this the same as visual search?", answer: "No. Visual search finds visible targets; spatial search depends on memory for hidden-target search history." },
        { question: "Is this an official CANTAB test?", answer: "No. This is an original browser task inspired by the general self-ordered spatial-search paradigm." },
        { question: "Does it measure working memory?", answer: "It challenges spatial working memory, updating, and strategy, but it is not a pure measure of one isolated capacity." },
      ],
    },
    {
      type: "paragraph",
      text: "The problem becomes harder with every target you find. Each success creates a new rule for the rest of the trial: do not waste another search there. Strong performance means continuously updating that mental map while choosing an efficient route through the remaining possibilities.",
    },
  ],
};
