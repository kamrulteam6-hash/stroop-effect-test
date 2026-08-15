import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How much does it slow you down when the rule changes from one trial to the next? Take this free **Task Switching Test** to experience a classic measure of cognitive flexibility. You will perform two simple tasks using the same kinds of stimuli — some trials repeat the previous rule, other trials require you to switch to the other rule.",
    },
    { type: "paragraph", text: "The key result is the switch cost: the difference in performance between switch trials and repeat trials." },
    { type: "heading", id: "how-to-take", text: "How to Take the Task Switching Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Learn both response rules.",
        "Watch the cue telling you which rule applies.",
        "Respond using the current rule.",
        "On some trials, the rule repeats.",
        "On other trials, it switches.",
        "Work quickly while maintaining accuracy.",
        "Complete all trials.",
        "Review repeat RT, switch RT, accuracy, and switch cost.",
      ],
    },
    { type: "paragraph", text: "Do not deliberately slow every repeat trial to make the switch cost appear smaller. The test is most meaningful when you respond naturally under both conditions." },
    { type: "heading", text: "What Is Task Switching?" },
    {
      type: "paragraph",
      text: "Task switching refers to changing from one task rule or mental set to another. A laboratory example might use a single digit — under one cue, decide odd or even; under another cue, decide greater than 5 or less than 5. The stimulus can be the same number, but the required decision changes.",
    },
    {
      type: "paragraph",
      text: "This forces the cognitive system to configure the appropriate task rule while suppressing or overcoming interference from the other rule. The phenomenon has a long history in experimental psychology and became especially influential through modern work by Robert Rogers and Stephen Monsell.",
    },
    { type: "heading", text: "The Rogers and Monsell Paradigm" },
    {
      type: "paragraph",
      text: "Rogers and Monsell's influential 1995 experiments used predictable sequences in which participants alternated between simple tasks. A common structure is often described as alternating runs: A A B B A A B B. This sequence creates both repeat trials and switch trials.",
    },
    {
      type: "paragraph",
      text: "Participants were typically slower on trials where the task changed. Importantly, even when they had time to prepare for the upcoming switch, a residual switch cost often remained. That finding became central to theories of task-set reconfiguration and cognitive control.",
    },
    { type: "heading", text: "What Is Switch Cost?" },
    {
      type: "paragraph",
      text: "A basic reaction-time switch cost is switch RT minus repeat RT. For example, if repeat trials average 520 ms and switch trials average 610 ms, the switch cost is 90 ms. A positive value means the task change slowed responses.",
    },
    { type: "paragraph", text: "Accuracy can show a switch cost too. If errors increase on switch trials, the change in rules affected response selection as well as speed. A good result page should therefore report both RT and accuracy by condition." },
    { type: "heading", text: "Why Switching Takes Time" },
    {
      type: "paragraph",
      text: "Several processes may contribute to the switch cost. Task-set reconfiguration means the system may need to activate the new task rules and prepare the correct mapping. Interference from the previous task means the old task set may remain active and compete with the new one. Stimulus and response conflict means the same stimulus may activate different responses under different rules. Cue processing means you must interpret which task cue is currently relevant.",
    },
    { type: "paragraph", text: "No single mechanism explains every switch cost in every experiment. Modern task-switching research treats the cost as the result of several interacting processes rather than one pure \"flexibility module.\"" },
    { type: "heading", text: "Repeat Trials Are Important" },
    {
      type: "paragraph",
      text: "A task-switching score only makes sense relative to a baseline. If your switch trials average 650 ms, is that large? It depends on your repeat trials. If repeats average 630 ms, the switch cost is only 20 ms. If repeats average 400 ms, the switch cost is 250 ms. This is why an overall reaction time is not the primary outcome — the scientifically interesting measure is the difference between transition types.",
    },
    { type: "heading", text: "Switch Cost vs. Mixing Cost" },
    {
      type: "paragraph",
      text: "Task-switching research distinguishes two different costs. Switch cost is the performance difference between switch and repeat trials within a mixed-task block. Mixing cost is the performance difference between repeat trials in a mixed-task block and trials in a pure single-task block. Why might repeat trials become slower in a mixed block? Because you must maintain multiple task rules and remain ready to switch.",
    },
    { type: "paragraph", text: "A simple browser test may report only switch cost. A more advanced version can add pure blocks and calculate mixing cost separately. The two should not be treated as the same measure." },
    { type: "heading", text: "Cognitive Flexibility: Useful but Broad" },
    {
      type: "paragraph",
      text: "Task switching is commonly described as a measure of cognitive flexibility. That is reasonable, but a smaller switch cost does not directly equal a universally flexible mind. Performance also depends on basic reaction speed, cue interpretation, working memory, rule learning, response compatibility, practice, and speed–accuracy strategy. Cognitive flexibility in real life includes far more than switching between two button-press rules — treat the result as task-specific.",
    },
    { type: "heading", text: "Why a Zero Switch Cost Is Not Automatically Ideal" },
    {
      type: "paragraph",
      text: "It might seem that the best possible score is 0 ms. But a tiny switch cost can occur for several reasons — a participant might respond slowly on every trial, sacrifice accuracy, wait before responding, misunderstand one rule, or have too few trials for a stable estimate. That is why a good result should always show repeat speed, switch speed, repeat accuracy, and switch accuracy. The difference score needs context.",
    },
    { type: "heading", text: "Task Switching vs. Wisconsin Card Sorting" },
    {
      type: "paragraph",
      text: "The [Wisconsin Card Sorting Test](/test/wisconsin-card-sorting-test) is another cognitive-flexibility paradigm, but it uses hidden rules. In Task Switching, the current rule is explicitly cued and your job is to reconfigure quickly. In WCST-style card sorting, the rule is hidden — you must infer it from feedback and recognize when it changes. The WCST adds concept learning and feedback-based discovery, while Task Switching isolates rule transitions more directly.",
    },
    { type: "heading", text: "Task Switching vs. Choice Reaction Time" },
    {
      type: "paragraph",
      text: "The [Choice Reaction Time Test](/test/choice-reaction-time-test) requires choosing the correct response from multiple alternatives. Task Switching adds a second layer: the mapping rule itself changes. The same stimulus may require one response under Task A and another response under Task B. That makes switching cost distinct from the general cost of having several response options.",
    },
    { type: "heading", text: "Predictable vs. Random Switching" },
    {
      type: "paragraph",
      text: "Tasks can change according to a predictable sequence or an unpredictable cue. In predictable switching, you may know the next task in advance, which allows preparation. In random or cued switching, the next task is determined by a cue and may be less predictable, adding uncertainty. Switch costs can differ across these formats, so an online result should be compared only with scores from the same procedure.",
    },
    { type: "heading", text: "What Is a Good Switch Cost?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff. A switch cost depends on which tasks are used, cue timing, response mapping, preparation interval, switch probability, trial count, stimulus compatibility, device, and practice. Do not label \"under 50 ms = excellent\" or \"over 200 ms = poor flexibility\" without norms for the exact implementation. Use the within-session comparison and your own repeated baseline.",
    },
    { type: "heading", text: "Can Practice Reduce Switch Cost?" },
    {
      type: "paragraph",
      text: "Yes. Practice can make task rules more familiar and reduce the time needed to select them. But training can also change strategy — you may learn the sequence, anticipate switches, or slow repeats to balance performance. Improvement on this game does not automatically mean broad improvement in multitasking or executive function outside the test. The strongest claim is that practice can improve performance on the practiced switching procedure.",
    },
    { type: "heading", text: "Is Task Switching the Same as Multitasking?" },
    {
      type: "paragraph",
      text: "Not exactly. Task switching is often used to explain part of the cost of everyday multitasking — when people alternate between activities, each transition can require reorienting goals and rules. But real multitasking may also involve interruptions, memory for unfinished goals, complex planning, and different sensory modalities. A laboratory switch cost is a clean model of one component of multitasking, not a complete measurement of multitasking ability.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a task-switching test?", answer: "A test where you alternate between two or more task rules and compare switch trials with repeat trials." },
        { question: "What is switch cost?", answer: "The additional reaction time or errors associated with switching tasks compared with repeating the same task." },
        { question: "Is a smaller switch cost always better?", answer: "Not automatically. Overall speed, accuracy, strategy, and task design must also be considered." },
        { question: "What is mixing cost?", answer: "The extra cost of performing repeat trials in a mixed-task context compared with performing the same task alone in a pure block." },
        { question: "Does task switching measure cognitive flexibility?", answer: "It is widely used to study cognitive flexibility, but the score also reflects several other perceptual, memory, and response processes." },
        { question: "Is this a multitasking test?", answer: "It models one important cost involved in alternating between tasks, but it is not a complete measure of real-world multitasking." },
        { question: "Can this diagnose ADHD or executive dysfunction?", answer: "No. It is an experimental cognitive task, not a stand-alone diagnostic assessment." },
      ],
    },
    {
      type: "paragraph",
      text: "Task switching is difficult because the correct response depends on more than what you see — it also depends on which rule is active right now. Repeat trials let the current mental set continue; switch trials force the system to update. The extra time and errors produced by that transition are the switch cost — one of cognitive psychology's clearest demonstrations that changing goals has a measurable performance cost.",
    },
  ],
};
