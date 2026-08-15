import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Does attention become temporarily slower to return to a location it has already visited? Take this free **Inhibition of Return Test** to explore a classic spatial-attention effect. A brief cue appears at one location. After attention is drawn there and then redirected, a target appears either at the previously cued location or somewhere else.",
    },
    { type: "paragraph", text: "At longer cue-to-target delays, responses are often slower when the target returns to the previously cued location. That reaction-time cost is called inhibition of return, or IOR." },
    { type: "heading", id: "how-to-take", text: "How to Take the Inhibition of Return Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Keep your eyes on the central fixation point.",
        "Notice the brief peripheral cue.",
        "Return attention to the center when the central cue appears.",
        "Wait for the target.",
        "Respond as quickly as possible when the target appears.",
        "Do not move your eyes toward the peripheral cue if fixation is required.",
        "Complete both previously cued and uncued target trials.",
        "Review reaction time and accuracy by condition.",
      ],
    },
    { type: "paragraph", text: "The critical comparison is not your overall reaction time. It is the difference between targets appearing at recently cued and uncued locations." },
    { type: "heading", text: "What Is Inhibition of Return?" },
    {
      type: "paragraph",
      text: "Inhibition of return is a spatial-orienting phenomenon in which responses become slower to targets appearing at a location that was attended or stimulated shortly before. The effect was first described in influential work by Michael Posner and Yoav Cohen in 1984. A peripheral event first attracts attention. At short delays, targets at that location can be detected more quickly. After attention moves away and more time passes, the pattern can reverse — targets returning to the previously cued position can become slower than targets appearing at an uncued position. That later slowing became known as inhibition of return.",
    },
    { type: "heading", text: "Early Facilitation vs. Later Inhibition" },
    {
      type: "paragraph",
      text: "The timing of the target is essential. At a short cue–target delay, a peripheral cue appears and a target follows quickly at the same location — responses may be faster because attention is already there, which is facilitation. At a longer cue–target delay, attention has time to disengage or reorient, and the target appears again at the previously cued location — responses can now become slower than at an uncued location, which is the IOR effect. This timing reversal is one reason this test remains separate from the [Posner Cueing Test](/test/posner-cueing-test).",
    },
    { type: "heading", text: "Cue–Target Onset Asynchrony" },
    {
      type: "paragraph",
      text: "The interval between cue onset and target onset is often called the cue–target onset asynchrony, or CTOA. The exact time course varies with procedure, but classical IOR commonly emerges when the cue-target interval extends beyond the early facilitation period. It would be inaccurate to say IOR always begins at exactly 300 ms — its timing depends on cue type, target task, fixation events, eye movements, stimulus modality, and trial structure. A browser implementation should keep timing consistent and report its actual CTOA.",
    },
    { type: "heading", text: "A Typical IOR Trial" },
    {
      type: "paragraph",
      text: "A simple trial may look like this: central fixation appears, a box on the left briefly brightens, a central event redirects attention toward fixation, and after a delay the target appears either at the previously cued location or at the opposite uncued location. If average correct reaction time is 365 ms at the cued location and 335 ms at the uncued location, the IOR effect is 365 minus 335, or 30 ms. A positive value means the previously cued location produced slower responding.",
    },
    { type: "heading", text: "Why Is It Called \"Inhibition of Return\"?" },
    {
      type: "paragraph",
      text: "The original functional interpretation suggested that the attentional system may discourage returning immediately to a location that has already been inspected. That could be useful during visual exploration — if you are searching a scene, repeatedly checking the same empty location wastes time. A temporary bias toward novel locations could support more efficient exploration, which inspired the phrase \"inhibition of return.\" But the name should not be mistaken for proof that one simple inhibitory mechanism has been demonstrated.",
    },
    { type: "heading", text: "Is IOR Really Caused by Inhibition?" },
    {
      type: "paragraph",
      text: "Not necessarily. The behavioral effect is well established — responses can be slower at previously cued locations. The mechanism has been debated, with researchers proposing explanations involving attentional inhibition, changes in orienting priority, habituation, attentional momentum, response processes, object representations, and altered perceptual processing. Reviews have specifically warned that the word inhibition can imply more mechanistic certainty than the evidence supports. Your result should therefore report an IOR reaction-time effect, not a percentage of \"brain inhibition.\"",
    },
    { type: "heading", text: "Why the Central Reorienting Cue Matters" },
    {
      type: "paragraph",
      text: "Many classic IOR procedures include a central cue after the peripheral cue. The peripheral cue initially draws attention toward one side; a central event encourages attention to move back toward fixation before the target appears. This helps create the conditions under which returning to the old peripheral location can become slower. Without appropriate reorienting and timing, the task may show facilitation instead of inhibition — the sequence is therefore part of the paradigm, not decorative animation.",
    },
    { type: "heading", text: "Inhibition of Return vs. Posner Cueing" },
    {
      type: "paragraph",
      text: "The [Posner Cueing Test](/test/posner-cueing-test) focuses on attentional benefits and costs when cues predict or misdirect target location, often emphasizing valid vs. invalid orienting at relatively short or predictive cue conditions. The IOR task focuses specifically on the later inhibitory/reorienting phase after a peripheral cue, emphasizing previously cued vs. uncued locations after enough time has passed for the early benefit to reverse. The same general display can support two different experiments depending on timing and cue meaning.",
    },
    { type: "heading", text: "Inhibition of Return vs. Negative Priming" },
    {
      type: "paragraph",
      text: "The [Negative Priming Test](/test/negative-priming-test) also produces slowing related to previous events, but the history is different. In negative priming, a previously ignored distractor becomes a target. In inhibition of return, a previously cued or attended location later receives a target. Negative priming concerns prior distractor status; IOR concerns spatial orienting history. They should not be treated as the same inhibitory process.",
    },
    { type: "heading", text: "Inhibition of Return and Visual Search" },
    {
      type: "paragraph",
      text: "IOR has long been proposed as a mechanism that could help visual search by discouraging attention from returning to locations already inspected. Robert Klein's 1988 work proposed an inhibitory tagging system that could facilitate search. Later studies produced evidence both for and against simple versions of the idea. Real visual search involves eye movements, memory for inspected items, scene structure, target guidance, and attentional priorities — so it is reasonable to explain that IOR may contribute to efficient search under some conditions, but not that it is the single system preventing every search revisit.",
    },
    { type: "heading", text: "Eye Movements and Browser Limitations" },
    {
      type: "paragraph",
      text: "If you move your eyes directly to the peripheral cue, the procedure changes. Laboratories can track gaze and remove trials where fixation is broken; a normal browser usually cannot verify fixation. Therefore instructions should emphasize central fixation, cues should be brief, target locations should not be extremely far from center, and the result should be described as a browser approximation of the classic paradigm. Repeated comparisons are best made using the same screen and viewing setup.",
    },
    { type: "heading", text: "How Is the IOR Effect Calculated?" },
    {
      type: "paragraph",
      text: "A straightforward measure is previously cued RT minus uncued RT, using correct-response trials. Also report cued accuracy, uncued accuracy, false starts, and median or trimmed RT by condition. If the test includes several cue-target delays, plot the effect over time — that can reveal the theoretically important transition from early facilitation to later slowing.",
    },
    { type: "heading", text: "What Is a Good Inhibition of Return Score?" },
    {
      type: "paragraph",
      text: "There is no universal \"best\" IOR value. A large positive effect does not automatically mean better attention. A small effect does not automatically mean poor inhibition. Effect size changes with CTOA, cue strength, target type, eye movements, detection vs. discrimination, trial count, and device latency. The scientifically useful result is whether your responses differ systematically across controlled conditions.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is inhibition of return?", answer: "Slower responding to a target at a location that was cued or attended shortly before, after an appropriate delay." },
        { question: "Who discovered IOR?", answer: "The phenomenon was first described in influential work by Michael Posner and Yoav Cohen in 1984." },
        { question: "Why can a cued location be faster at first but slower later?", answer: "Spatial cueing changes over time. Early attention can facilitate processing, while later responses can show an IOR cost." },
        { question: "Does IOR prove the brain inhibits locations?", answer: "No. The behavioral effect is robust, but several mechanisms have been proposed." },
        { question: "Is IOR the same as Posner cueing?", answer: "It is closely related but focuses specifically on the later slowing at previously cued locations." },
        { question: "Does IOR help visual search?", answer: "It has been proposed as one mechanism that can discourage revisiting inspected locations, although search behavior is more complex." },
        { question: "Can this diagnose an attention disorder?", answer: "No. It is an experimental spatial-attention task." },
      ],
    },
    {
      type: "paragraph",
      text: "Where you attended a moment ago can change how quickly you respond now. At first, a cue can help. After attention moves on, returning to that same place can carry a small cost. The Inhibition of Return Test makes that time-dependent spatial history visible in milliseconds.",
    },
  ],
};
