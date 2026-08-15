import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you remember a sequence of locations — and then mentally reverse it before responding? Take this free **Backward Spatial Span Test**. A series of blocks flashes one at a time. Instead of repeating the sequence in the same order, click the locations in reverse order.",
    },
    { type: "paragraph", text: "The task is inspired by backward versions of the classic Corsi Block-Tapping Task. It challenges spatial sequence storage plus mental manipulation." },
    { type: "heading", id: "how-to-take", text: "How to Take the Backward Spatial Span Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Watch each location carefully.",
        "Keep the entire spatial sequence in mind.",
        "Wait until the presentation ends.",
        "Start with the last location shown.",
        "Continue backward through the sequence.",
        "Submit the complete reversed order.",
        "Continue as sequence length increases.",
        "Review backward span, total correct trials, and errors by length.",
      ],
    },
    { type: "paragraph", text: "Do not simply reproduce the original order. Correct locations in the wrong sequence should count as an error." },
    { type: "heading", text: "What Is Spatial Span?" },
    {
      type: "paragraph",
      text: "Spatial span refers to the amount of sequential spatial information a person can retain and reproduce under a particular procedure. The classic laboratory task is the Corsi Block-Tapping Task. In the traditional physical version, blocks are arranged irregularly on a board, the examiner taps a sequence of blocks, and the participant reproduces the sequence — usually called forward Corsi span. Computerized versions replace physical taps with flashing blocks, illuminated squares, or touchscreen locations.",
    },
    { type: "heading", text: "What Is Backward Spatial Span?" },
    {
      type: "paragraph",
      text: "In a backward version, the presentation is the same but the response rule changes — the participant must reproduce the spatial sequence in reverse. That requires more than temporary storage; the sequence must also be transformed or reordered before output. For that reason, backward span is often described as placing greater demands on spatial working memory and executive processing.",
    },
    { type: "heading", text: "Forward vs. Backward Spatial Span" },
    {
      type: "paragraph",
      text: "In forward spatial span, you remember the sequence and reproduce it in the same order. In backward spatial span, you remember the sequence, reverse the serial order, then reproduce it. The second version adds a manipulation requirement. Studies comparing the tasks have found meaningful differences between forward and backward spatial span. Research also suggests that backward Corsi should not simply be assumed to be the perfect visuospatial equivalent of backward Digit Span.",
    },
    { type: "heading", text: "The Corsi Block-Tapping Task" },
    {
      type: "paragraph",
      text: "The Corsi task originated from work associated with Philip Corsi in the early 1970s. The classic board contains nine blocks arranged irregularly. The procedure became widely used to study visuospatial short-term memory, and today computerized Corsi-like tasks appear in cognitive research, neuropsychology, developmental studies, and aging research. But different digital implementations vary in block arrangement, sequence generation, timing, scoring, and stopping rules — those differences affect span estimates.",
    },
    { type: "heading", text: "Why Backward Corsi Is Not Fully Standardized Across All Versions" },
    {
      type: "paragraph",
      text: "For many years, the forward Corsi procedure was more established than the backward procedure, and researchers used different rules for backward administration. Kessels and colleagues published work in 2008 specifically noting that a standardized backward condition had been lacking and proposed a backward procedure. That history matters for online interpretation — there is no single generic \"backward spatial span norm\" that can be imported into every browser design. Norms belong to particular procedures and populations.",
    },
    { type: "heading", text: "Why Reversing the Sequence Is Harder" },
    {
      type: "paragraph",
      text: "A forward response can preserve the same temporal structure as the presentation. Backward recall requires the user to maintain all items and then produce them using a transformed retrieval order. Possible demands include retaining spatial positions, preserving sequence order, updating output position, suppressing the natural forward response, and mentally reorganizing the sequence. As sequence length grows, the manipulation becomes increasingly difficult.",
    },
    { type: "heading", text: "Storage vs. Manipulation" },
    {
      type: "paragraph",
      text: "This distinction is useful for understanding working memory. Storage means holding the locations temporarily. Manipulation means changing the order in which those stored locations must be used. Backward spatial span combines both, which is why it is often considered a working-memory task rather than a simple immediate-memory span. Still, it should not be described as a pure measure of a single \"central executive\" — multiple strategies and spatial processes can contribute.",
    },
    { type: "heading", text: "Backward Spatial Span vs. Sequence Memory Test" },
    {
      type: "paragraph",
      text: "The [Sequence Memory Test](/test/sequence-memory-test) presents locations and requires reproduction in the original order — conceptually much closer to a forward spatial sequence task. Backward Spatial Span changes one critical rule: reverse the entire sequence. That makes this test a legitimate new task rather than a duplicate.",
    },
    { type: "heading", text: "Backward Spatial Span vs. Spatial Search" },
    {
      type: "paragraph",
      text: "The [Spatial Search Test](/test/spatial-search-test) requires self-directed exploration and memory for which locations have already yielded targets. Backward Spatial Span is experimenter-ordered — you do not choose the original sequence, the computer presents it, and your challenge is to retain and reverse it. One measures self-ordered spatial updating; the other measures sequential spatial retention plus manipulation.",
    },
    { type: "heading", text: "How Should Difficulty Increase?" },
    {
      type: "paragraph",
      text: "A clean adaptive task starts with short sequences, such as 2, 3, 4, then 5 locations, increasing after successful trials. After errors, the test can repeat the same length, provide a limited number of attempts, or stop after a defined failure criterion. A scientifically interpretable version should state the stopping rule — one-error sudden death creates more score noise than multiple trials at each sequence length.",
    },
    { type: "heading", text: "What Is Backward Span?" },
    {
      type: "paragraph",
      text: "A common descriptive measure is the longest sequence length reproduced correctly according to the test's criterion. But this number depends on the scoring rule — another test might require two correct trials per level, and a third might calculate total items correctly. Do not compare raw span values without checking the procedure.",
    },
    { type: "heading", text: "Spatial Layout" },
    {
      type: "paragraph",
      text: "The classic Corsi arrangement is irregular rather than a simple numbered grid, because a perfectly regular grid may encourage easy verbal coding or keypad-like patterns. An irregular arrangement reduces some obvious naming strategies. For a web adaptation, use nine irregularly positioned blocks with a stable layout throughout the test, and avoid showing numbers on the blocks during the task — the user should remember spatial locations, not visible labels.",
    },
    { type: "heading", text: "Does Backward Span Always Have to Be Lower Than Forward Span?" },
    {
      type: "paragraph",
      text: "Backward recall is often more demanding. Many studies find lower backward than forward spatial span, especially in particular groups or task variants, but the exact relationship is not universal. Some users may develop efficient reversal strategies. Do not tell a user that a backward score must be exactly one or two items below their forward score — the two should be measured rather than assumed.",
    },
    { type: "heading", text: "What Does the Test Measure?" },
    {
      type: "paragraph",
      text: "Performance can involve visuospatial short-term retention, spatial working memory, serial-order memory, manipulation, attention, strategy, and response planning. It does not directly measure IQ, photographic memory, a single brain region, or clinical impairment. The safest description is a backward spatial sequence working-memory task.",
    },
    { type: "heading", text: "Can It Diagnose Dementia or Learning Disorders?" },
    {
      type: "paragraph",
      text: "No. Backward spatial span appears in research involving aging, neurological conditions, learning difficulties, and developmental differences, but that does not make a free browser adaptation diagnostic. Low performance can result from misunderstanding the reversal rule, distraction, unfamiliar interface, device size, or normal variation. Clinical assessment requires validated procedures and appropriate norms.",
    },
    { type: "heading", text: "What Is a Good Backward Spatial Span Score?" },
    {
      type: "paragraph",
      text: "There is no universal online cutoff. Performance depends on layout, sequence timing, number of trials, stopping rule, age, device, and scoring method. Avoid unsupported labels such as \"span 5 = average\" or \"span 8 = elite\" unless you have normative data for the exact test. The best initial benchmark is your own performance using the same implementation.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is Backward Spatial Span?", answer: "A task where you watch a sequence of spatial locations and reproduce them in reverse order." },
        { question: "Is it based on the Corsi Block-Tapping Task?", answer: "Yes. Backward spatial span is commonly implemented as a backward Corsi-style task." },
        { question: "How is it different from forward Corsi?", answer: "Forward Corsi reproduces the original order; backward Corsi requires the sequence to be reversed." },
        { question: "Does backward span measure working memory?", answer: "It challenges visuospatial storage plus manipulation and is widely used as a spatial working-memory measure." },
        { question: "Is it the same as backward Digit Span?", answer: "No. Both require reversal, but spatial and verbal tasks are not exact equivalents." },
        { question: "Should backward span always be lower than forward span?", answer: "Not necessarily for every person or procedure, although backward recall often adds processing demands." },
        { question: "Can this diagnose a memory disorder?", answer: "No. It is a browser cognitive task, not a clinical diagnosis." },
      ],
    },
    {
      type: "paragraph",
      text: "Forward sequence memory asks you to preserve what happened. Backward spatial span adds another operation: preserve it, then reverse it. That small instruction changes the task substantially. The better you can maintain the spatial path while reorganizing its order, the farther your backward span can extend.",
    },
  ],
};
