import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you keep information in mind while your attention is repeatedly pulled into another task? Take this free **Operation Span Test**, or **OSPAN**, to challenge working memory under interference. You will alternate between solving simple math operations and remembering letters. At the end of each set, recall the letters in the correct order.",
    },
    { type: "paragraph", text: "A meaningful result requires doing both parts of the task. Ignoring the math to rehearse the letters defeats the purpose of operation span." },
    { type: "heading", id: "how-to-take", text: "How to Take the Operation Span Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Solve the displayed math operation.",
        "Decide whether the proposed answer is correct.",
        "Remember the letter shown after the math problem.",
        "Repeat the math–letter sequence several times.",
        "At the end of the set, recall the letters in presentation order.",
        "Continue through different set sizes.",
        "Keep math accuracy high while protecting letter memory.",
        "Review memory score and math accuracy separately.",
      ],
    },
    { type: "paragraph", text: "Do not intentionally stop solving the equations in order to improve letter recall. Complex span measures are designed to divide your attention between processing and storage." },
    { type: "heading", text: "What Is the Operation Span Task?" },
    {
      type: "paragraph",
      text: "The Operation Span Task is a complex working-memory span task. Unlike a simple digit span, it requires you to remember information while performing an unrelated processing activity. A typical sequence looks like: solve equation, remember letter, solve equation, remember letter, recall letters.",
    },
    {
      type: "paragraph",
      text: "For example: (4 × 2) − 3 = 5? Then F. Then another equation. Then K. At the end, you might need to recall F – K – ... in the exact order presented. The competing math task prevents continuous rehearsal from being easy.",
    },
    { type: "heading", text: "Where Did Operation Span Come From?" },
    {
      type: "paragraph",
      text: "Operation span grew from work by Turner and Engle and became one of the most widely used measures of working-memory capacity. A highly influential automated version was published by Nelson Unsworth, Richard Heitz, Josef Schrock, and Randall Engle in 2005. Their computerized task was designed to be easy to administer while preserving the central complex-span logic — participants verified mathematical operations while remembering sequences of letters. The automated version showed useful reliability and relationships with other working-memory measures.",
    },
    { type: "heading", text: "Simple Span vs. Complex Span" },
    {
      type: "paragraph",
      text: "The [Number Memory Test](/test/number-memory-test) mainly asks you to maintain a sequence until recall — that is a simple span structure. Operation Span adds a competing processing task. In simple span, you remember 4 – 7 – 2 – 9 – 1. In complex span, you solve something, remember F, solve something else, remember K, continue, then recall F – K – ... This forces memory contents to survive while attention is occupied elsewhere, which is why OSPAN is often used as a working-memory-capacity measure rather than merely a short-term storage test.",
    },
    { type: "heading", text: "Why the Math Problems Matter" },
    {
      type: "paragraph",
      text: "The arithmetic is not there to measure advanced mathematics — the equations are intentionally simple. Their purpose is to occupy attention. If the math were impossibly difficult, performance would mostly reflect math skill. If the math were absent, the task would become ordinary letter span. The useful middle ground is easy enough to solve accurately, demanding enough to interrupt rehearsal. That balance is central to complex-span design.",
    },
    { type: "heading", text: "Math Accuracy Must Be Reported" },
    {
      type: "paragraph",
      text: "Imagine User A has excellent letter recall but only 55% math accuracy, while User B has slightly lower letter recall but 95% math accuracy. It would be misleading to call User A the stronger OSPAN performer if they largely ignored the processing task. The influential automated OSPAN procedure instructed participants to maintain high operation accuracy, commonly using an 85% criterion to ensure the math component was genuinely performed.",
    },
    { type: "paragraph", text: "A public browser version can display math accuracy alongside memory score, and warn users when processing accuracy is too low for confident interpretation." },
    { type: "heading", text: "Set Sizes" },
    {
      type: "paragraph",
      text: "The automated OSPAN procedure famously used letter-set sizes ranging from 3 to 7. A set of 3 contains three math decisions plus three letters; a set of 7 contains seven math decisions plus seven letters. Larger sets create more interference and a longer ordered sequence to maintain. A shorter public version can use fewer total sets, but it should not claim to be the exact validated automated OSPAN unless the full protocol is reproduced.",
    },
    { type: "heading", text: "Absolute OSPAN Scoring" },
    {
      type: "paragraph",
      text: "One traditional score is absolute span. You receive credit for letters only when the entire set is recalled perfectly in order. For example: set size 3 with all 3 correct earns 3 points; set size 4 with all 4 correct earns 4 points; set size 5 with only 4 of 5 correct earns 0 absolute points. Total: 7. This scoring is strict — one forgotten letter can remove credit for the whole set.",
    },
    { type: "heading", text: "Partial-Credit Scoring" },
    {
      type: "paragraph",
      text: "Researchers also use scoring approaches that give credit for correctly recalled items even when the full set is not perfect. For example, a 5-letter set with 4 letters correctly recalled in their positions can contribute partial credit. Different scoring methods are related but not identical. A useful website can report a perfect-set score, total letters correct, and math accuracy. The scoring formula should be clearly explained, and no single custom score should be presented as though it were the only official OSPAN metric.",
    },
    { type: "heading", text: "Order Matters" },
    {
      type: "paragraph",
      text: "Remembering the correct letters in the wrong order is not equivalent to correct serial recall. If the sequence was F – K – P – R, then F – P – K – R contains the right items but not the correct order. Operation span requires both item memory and serial-order memory. A browser recall screen should therefore record the sequence, not simply which letters were selected.",
    },
    { type: "heading", text: "What Does Operation Span Measure?" },
    {
      type: "paragraph",
      text: "OSPAN is widely used as a measure of working-memory capacity, but the task involves several processes: maintaining information, controlling attention, resisting interference, switching between processing and storage, serial recall, math verification, and strategy use. Working memory is broader than any one task. Researchers often combine several complex-span measures — such as operation span, reading span, and symmetry span — to estimate a broader latent working-memory construct. One browser OSPAN score should not be treated as the total capacity of someone's working memory.",
    },
    { type: "heading", text: "Working Memory vs. Short-Term Memory" },
    {
      type: "paragraph",
      text: "The terms overlap, but a useful distinction is that short-term memory emphasizes temporary retention, while working memory emphasizes maintaining information while also processing or manipulating information. Operation Span illustrates the second idea very clearly — you cannot simply hold letters passively, you must preserve them while repeatedly solving another problem.",
    },
    { type: "heading", text: "OSPAN and Fluid Intelligence" },
    {
      type: "paragraph",
      text: "Working-memory-capacity measures correlate with fluid reasoning and other cognitive abilities. That relationship has made OSPAN important in individual-differences research. But correlation does not mean OSPAN score equals IQ, or that a high OSPAN guarantees high intelligence. Fluid intelligence and working memory are related but distinguishable constructs — do not convert an original browser score into an IQ estimate.",
    },
    { type: "heading", text: "Why Timing the Math Matters" },
    {
      type: "paragraph",
      text: "If users are allowed unlimited time on every equation, they may use long pauses to rehearse the letters. The automated OSPAN procedure addressed this by establishing an individualized math-response deadline during practice. A simplified browser version can use reasonable time limits or calibrated practice timing. The goal is not to create panic — it is to prevent the processing phase from becoming an opportunity for unlimited memory rehearsal.",
    },
    { type: "heading", text: "Practice Effects" },
    {
      type: "paragraph",
      text: "Practice can improve equation familiarity, letter-rehearsal strategy, response speed, and understanding of the recall interface. That means repeated scores are not perfectly interchangeable with first-attempt scores. If the site offers personal history, label repeated sessions clearly, and use fresh equation and letter sequences so users cannot memorize fixed trials.",
    },
    { type: "heading", text: "Operation Span vs. N-Back" },
    {
      type: "paragraph",
      text: "The [N-Back Test](/test/n-back-test) continuously updates which previous stimulus is relevant. OSPAN alternates processing, storage, processing, storage, then recall. Both are called working-memory tasks, but they are not interchangeable — research often finds that different working-memory tasks share some variance while also reflecting task-specific demands.",
    },
    { type: "heading", text: "What Is a Good OSPAN Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for a shortened custom browser version. Scores depend on number of sets, set-size distribution, equation difficulty, math deadline, recall method, and scoring formula. Do not import norms from the 75-item automated OSPAN into a shorter adaptation. If you reproduce a published protocol exactly and have appropriate rights, its norms may be relevant. Otherwise, develop norms for your own implementation.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What does OSPAN stand for?", answer: "Operation Span." },
        { question: "What does Operation Span measure?", answer: "It is widely used to measure working-memory capacity under concurrent processing demands." },
        { question: "Why do I have to solve math while remembering letters?", answer: "The math occupies attention, making the task a complex span rather than a simple memory span." },
        { question: "Does math accuracy matter?", answer: "Yes. Poor math accuracy can indicate that the processing task was ignored in order to protect memory." },
        { question: "Why are letters recalled in order?", answer: "The task requires serial memory, not simply recognition of which letters appeared." },
        { question: "Is OSPAN an IQ test?", answer: "No. Working-memory capacity relates to reasoning ability, but OSPAN does not produce a complete IQ score." },
        { question: "Can I compare a short online version with published OSPAN norms?", answer: "Not safely unless the procedure and scoring are actually equivalent." },
      ],
    },
    {
      type: "paragraph",
      text: "The challenge is not remembering letters when nothing else is happening. It is preserving them while your attention is repeatedly required somewhere else. That is what gives Operation Span its power: storage and processing must succeed at the same time.",
    },
  ],
};
