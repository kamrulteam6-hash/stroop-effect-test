import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you remember to perform an intended action at the right moment in the future while your attention is busy with something else? Take this free **Prospective Memory Test**. First, you receive an intention such as \"press the M key whenever the word GARDEN appears.\" Then you begin an unrelated ongoing task. Your challenge is to remember the intention when the correct event or time arrives.",
    },
    { type: "paragraph", text: "Prospective memory is often described as remembering to remember. It differs from ordinary retrospective memory because the crucial problem is not only remembering what the instruction was — it is remembering to execute it later." },
    { type: "heading", id: "how-to-take", text: "How to Take the Prospective Memory Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read the future-action instruction carefully.",
        "Memorize what you need to do and when.",
        "Begin the ongoing task.",
        "Focus normally on that task.",
        "When the target event or time occurs, perform the prospective action.",
        "Continue without external reminders.",
        "Complete all trials.",
        "Review prospective hits, misses, timing, and ongoing-task performance.",
      ],
    },
    { type: "paragraph", text: "Do not write yourself a reminder. The intention must be maintained internally while another task occupies your attention." },
    { type: "heading", text: "What Is Prospective Memory?" },
    {
      type: "paragraph",
      text: "Prospective memory is memory for an intended future action. Everyday examples include remembering to take food out of the oven, send a message after a meeting, buy something when passing a store, take medication at a scheduled time, or give a friend a document when you see them. This differs from remembering a past event — the question is not what happened yesterday, but will I remember to do what I planned when the appropriate moment arrives.",
    },
    { type: "heading", text: "Prospective vs. Retrospective Memory" },
    {
      type: "paragraph",
      text: "Retrospective memory remembers information from the past, such as what was the name of the restaurant. Prospective memory remembers to execute an intention in the future, such as remember to call the restaurant at 5:00 PM. But prospective memory still contains a retrospective component — to perform the action, you must remember what the intended action was and what cue or time should trigger it. So a prospective-memory failure can occur because the user forgets the intention entirely, or remembers the intention but fails to notice the right moment.",
    },
    { type: "heading", text: "Einstein and McDaniel's Laboratory Paradigm" },
    {
      type: "paragraph",
      text: "A foundational laboratory paradigm was developed by Gilles Einstein and Mark McDaniel in 1990. Participants performed an ongoing task while also holding an intention to perform an action when a target event appeared. Their experiments helped establish a controlled way to study prospective remembering separately from conventional recall and recognition. This basic structure remains central: ongoing task plus delayed intention plus prospective cue.",
    },
    { type: "heading", text: "What Is an Ongoing Task?" },
    {
      type: "paragraph",
      text: "The ongoing task keeps the user occupied — for example, deciding whether a word is a noun or verb, classifying numbers as odd or even, solving simple comparisons, or making lexical decisions. While doing this task, the user also has a second instruction: whenever you see the target word, press a special key. If the screen simply displayed \"remember to press M now,\" there would be little prospective-memory demand. The intention has to survive while another goal is active.",
    },
    { type: "heading", text: "Event-Based Prospective Memory" },
    {
      type: "paragraph",
      text: "In event-based prospective memory, a specific event tells you when to act — for example, when the word GARDEN appears, press M; when you see a picture of a bicycle, click Remember; when a number divisible by 11 appears, perform the special response. The environment supplies a retrieval cue. Event-based tasks are among the most common laboratory prospective-memory paradigms.",
    },
    { type: "heading", text: "Time-Based Prospective Memory" },
    {
      type: "paragraph",
      text: "In time-based prospective memory, the intended action must occur at a particular time — for example, press M after 3 minutes, or respond every 2 minutes. There may be no external event saying \"now is the moment.\" The participant often needs to monitor the passage of time, which can place stronger demands on self-initiated monitoring. Research has long distinguished event- and time-based prospective remembering.",
    },
    { type: "heading", text: "Event-Based vs. Time-Based Tasks" },
    {
      type: "paragraph",
      text: "These modes have separate scores. In event-based tasks, success depends on detecting a cue while doing something else. In time-based tasks, success depends on remembering the intention and monitoring time. A person may perform differently across them. Time-based tasks can also be strongly affected by whether a clock is visible — a constant countdown provides an external reminder and reduces part of the prospective-memory challenge.",
    },
    { type: "heading", text: "Focal vs. Nonfocal Event Cues" },
    {
      type: "paragraph",
      text: "Event-based prospective cues can be focal or nonfocal relative to the ongoing task. Suppose the ongoing task is judging whether each word is a noun, and the prospective cue is press M when the word TIGER appears — because word identity is already being processed, TIGER is a focal cue. Now suppose the instruction is press M whenever a word contains the letter combination \"ig\" — that feature may not be needed for the noun judgment, so it is more nonfocal. Focal cues often support more spontaneous retrieval; nonfocal cues may require more monitoring.",
    },
    { type: "heading", text: "Spontaneous Retrieval vs. Monitoring" },
    {
      type: "paragraph",
      text: "How do we remember an intention at the right time? In strategic monitoring, you keep checking whether this is the target — maintaining the intention consumes attention and may slow the ongoing task. In spontaneous retrieval, the target itself triggers the intention without continuous conscious checking. Modern prospective-memory theories allow both mechanisms, and which one dominates depends on cue focality, importance, expectations, task demands, and cue distinctiveness.",
    },
    { type: "heading", text: "Ongoing-Task Cost" },
    {
      type: "paragraph",
      text: "Holding a future intention can change current performance. Suppose you normally classify words in 600 ms, but during a prospective-memory block you average 680 ms — that slowing may reflect monitoring cost. The user is doing more than the visible ongoing task; part of attention may be allocated to looking for the prospective cue. A rich result can therefore report prospective-memory accuracy, ongoing-task RT without intention, and ongoing-task RT with intention, revealing the cost of remembering to remember.",
    },
    { type: "heading", text: "Prospective Hits and Misses" },
    {
      type: "paragraph",
      text: "A prospective hit is when the target event occurs and you perform the intended special action correctly. A prospective miss is when the cue occurs but you fail to carry out the intention. A false prospective response is when you perform the special action when the cue is absent. A user who presses the prospective key constantly may catch every target but produce many false alarms — therefore both hits and false responses matter.",
    },
    { type: "heading", text: "Remembering the Action vs. Remembering the Cue" },
    {
      type: "paragraph",
      text: "At the end of the task, it can be useful to ask what action were you supposed to perform and what was the trigger. If the user misses every prospective target and also cannot remember the instruction afterward, the problem may be retrospective memory for the intention. If they remember the instruction perfectly afterward, then the intention was stored but failed to become active at the correct moment. This distinction makes the result more informative.",
    },
    { type: "heading", text: "Prospective Memory vs. Working Memory" },
    { type: "paragraph", text: "Working memory keeps information actively available for current processing. Prospective memory often requires preserving an intention while attention shifts to another task. The target event must reactivate the intention at the correct time." },
    { type: "heading", text: "Prospective Memory vs. Delayed Recall" },
    { type: "paragraph", text: "Delayed recall might ask you to tell me the five words you learned after 10 minutes. Prospective memory asks you to remember to perform an action when a particular event occurs during those 10 minutes. Both involve delay, but only prospective memory includes the future-action requirement." },
    { type: "heading", text: "What Is a Good Prospective Memory Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff. Performance depends on event-based vs. time-based design, cue focality, cue frequency, ongoing-task difficulty, delay, reminders, and number of targets. Useful results include prospective hit rate, false prospective responses, timing accuracy, ongoing-task cost, and retrospective recall of the intention. Avoid turning one missed cue into a claim about memory impairment.",
    },
    { type: "heading", text: "Can This Diagnose Dementia or ADHD?" },
    {
      type: "paragraph",
      text: "No. Prospective memory is important in everyday functioning and is studied in aging and clinical populations, but one browser task cannot diagnose dementia, mild cognitive impairment, ADHD, brain injury, or executive dysfunction. Clinical prospective-memory assessment requires validated methods, context, and broader cognitive evaluation.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is prospective memory?", answer: "Memory for carrying out an intended action at the appropriate future moment." },
        { question: "Why is it called \"remembering to remember\"?", answer: "Because you must remember to initiate a planned action later, not merely recall past information when directly asked." },
        { question: "What is event-based prospective memory?", answer: "Remembering to act when a specific external event occurs." },
        { question: "What is time-based prospective memory?", answer: "Remembering to act at a specific time or after a time interval." },
        { question: "What is the ongoing task?", answer: "The task that occupies attention while the prospective intention is being maintained." },
        { question: "Can holding an intention slow the ongoing task?", answer: "Yes. Monitoring for a future cue can create measurable ongoing-task costs." },
        { question: "Is this a clinical memory test?", answer: "No. It is an experimental browser task." },
      ],
    },
    {
      type: "paragraph",
      text: "Remembering an instruction immediately is not enough. Prospective memory succeeds only when the intention returns at the right future moment. You have to store the plan, keep functioning normally, and then interrupt yourself when the cue or time arrives. That is why prospective memory feels so different from ordinary recall, and why forgetting to do something can happen even when you still remember perfectly well what you intended.",
    },
  ],
};
