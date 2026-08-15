import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Which is larger: the digit with the greater numerical value or the digit that is physically bigger on the screen? Take this free **Numerical Stroop Test** to experience the size congruity effect. Two digits appear at different physical sizes — depending on the rule, you must respond to numerical value while ignoring physical size, or respond to physical size while ignoring numerical value.",
    },
    { type: "paragraph", text: "Some trials make both dimensions point to the same response. Others put them in conflict. The difference in reaction time and accuracy between these conditions reveals numerical Stroop interference." },
    { type: "heading", id: "how-to-take", text: "How to Take the Numerical Stroop Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read the current instruction carefully.",
        "If the rule is Numerical, choose the digit with the larger numerical value.",
        "Ignore which digit is physically larger.",
        "If the rule is Physical, choose the digit printed in the larger visual size.",
        "Ignore its numerical value.",
        "Respond quickly while protecting accuracy.",
        "Complete congruent, incongruent, and neutral trials.",
        "Review reaction time and accuracy by condition.",
      ],
    },
    { type: "paragraph", text: "Do not change your rule mid-trial. The irrelevant dimension is intentionally designed to compete with the dimension you are supposed to judge." },
    { type: "heading", text: "What Is the Numerical Stroop Effect?" },
    {
      type: "paragraph",
      text: "The Numerical Stroop effect, also called the size congruity effect, occurs when numerical magnitude and physical size influence each other during comparison. Imagine two digits where the numerically larger one is also physically larger — that is a congruent trial. Now imagine the numerically smaller digit is printed much larger — if your job is to select the numerically larger digit, physical size and numerical value point in opposite directions. That is an incongruent trial. People are generally slower and sometimes more error-prone when the two dimensions conflict.",
    },
    { type: "heading", text: "Henik and Tzelgov's Classic Study" },
    {
      type: "paragraph",
      text: "A foundational numerical Stroop experiment was published by Avishai Henik and Joseph Tzelgov in 1982 under the memorable title \"Is Three Greater Than Five?\" Participants compared pairs of digits — in some conditions they judged numerical magnitude, in others they judged physical size. Reaction times showed that the supposedly irrelevant dimension still influenced performance: if numerical and physical size agreed, responses tended to be facilitated, and if they conflicted, responses were slowed. This demonstrated that numerical meaning and perceptual size can interact even when one of them is irrelevant to the current task.",
    },
    { type: "heading", text: "Congruent, Incongruent, and Neutral Trials" },
    {
      type: "paragraph",
      text: "A strong online test should distinguish at least three conditions. In congruent trials, the numerically larger digit is also physically larger. In incongruent trials, the numerically larger digit is physically smaller. In neutral trials, only the relevant dimension provides useful comparison information, or the irrelevant dimension is controlled so it does not favor either response. Neutral trials help distinguish facilitation from interference.",
    },
    { type: "heading", text: "How Is the Numerical Stroop Effect Calculated?" },
    {
      type: "paragraph",
      text: "A simple interference score is incongruent RT minus congruent RT. For example, if congruent RT is 470 ms and incongruent RT is 530 ms, the numerical Stroop effect is 60 ms. A positive difference means conflicting size information slowed responding. If a neutral condition is included, you can calculate interference (incongruent RT minus neutral RT) and facilitation (neutral RT minus congruent RT) separately, telling users whether the overall congruity effect comes mostly from slowing under conflict, speeding under agreement, or both.",
    },
    { type: "heading", text: "Numerical Task vs. Physical Task" },
    {
      type: "paragraph",
      text: "The numerical Stroop paradigm can run in two directions. In numerical comparison, you choose the digit with the larger numerical value and ignore physical font size. In physical comparison, you choose the digit with the larger physical size and ignore numerical value. Both can produce congruity effects. Research has also found asymmetries between the tasks, so they should not simply be averaged into one number — a useful result reports a separate congruity effect for each rule.",
    },
    { type: "heading", text: "Why Is Numerical Meaning Hard to Ignore?" },
    {
      type: "paragraph",
      text: "Once people become fluent with Arabic digits, symbols rapidly activate numerical meaning. You do not normally need to consciously translate \"8\" into the concept of eight before understanding that it is numerically larger than 3. Numerical Stroop research has therefore been used to study the automaticity of numerical magnitude processing. But \"automatic\" should not be interpreted as completely uncontrollable under all conditions — attention, task demands, proportion of congruent trials, development, and experience can all change the size-congruity effect.",
    },
    { type: "heading", text: "Physical Size Is Also Difficult to Ignore" },
    {
      type: "paragraph",
      text: "The interaction works in both directions. When users are asked to judge which digit is physically larger, numerical magnitude can still interfere. This shows that the task is not simply about reading numbers too automatically — visual magnitude itself is highly salient, and the two dimensions compete.",
    },
    { type: "heading", text: "Numerical Distance Matters" },
    {
      type: "paragraph",
      text: "Comparing 2 vs. 9 is not the same as comparing 7 vs. 8. Numerical comparison is often faster when the numerical distance between digits is larger — this is called the numerical distance effect. A Numerical Stroop Test therefore needs to balance numerical distance across congruity conditions. Otherwise, one condition may appear faster simply because its digit pairs are easier numerically. Good stimulus generation controls this rather than choosing arbitrary numbers.",
    },
    { type: "heading", text: "Numerical Stroop vs. Classic Stroop" },
    {
      type: "paragraph",
      text: "The [Stroop Effect Test](/test/stroop-effect-test) uses color words and ink colors — the relevant dimension is ink color, and the irrelevant dimension is word meaning. Numerical Stroop's relevant dimension is numerical or physical size, and its irrelevant dimension is the competing magnitude dimension. Both produce interference from irrelevant information, but the content and automatic processes are different. This makes Numerical Stroop a natural extension of the core Stroop category rather than a duplicate page.",
    },
    { type: "heading", text: "Numerical Stroop vs. Simon Effect" },
    {
      type: "paragraph",
      text: "The [Simon Effect Test](/test/simon-effect-test) creates conflict between a stimulus feature and an irrelevant spatial location. Numerical Stroop creates conflict between two size dimensions of the stimuli. Simon concerns where the target appears; Numerical Stroop concerns what size the target represents versus how large it looks. Both are congruency tasks, but their conflict sources differ.",
    },
    { type: "heading", text: "Accuracy and Speed Must Be Combined" },
    {
      type: "paragraph",
      text: "A user can reduce reaction time by guessing — that does not demonstrate less interference. Useful results should include congruent median RT, incongruent median RT, neutral median RT, accuracy by condition, and an interference score. Calculate RT effects primarily from correct trials — if accuracy is very low, the reaction-time difference becomes difficult to interpret.",
    },
    { type: "heading", text: "What Is a Good Numerical Stroop Score?" },
    {
      type: "paragraph",
      text: "There is no universal millisecond cutoff. The effect depends on digit set, numerical distance, physical-size difference, trial count, response keys, task direction, device latency, and congruency proportion. A 40 ms effect on one implementation cannot automatically be compared with a 70 ms effect from another. Your result should emphasize within-test condition differences.",
    },
    { type: "heading", text: "Does a Smaller Effect Mean Better Inhibition?" },
    {
      type: "paragraph",
      text: "Not automatically. A smaller congruity effect could reflect more efficient control, but it could also occur because both conditions are slow, the physical-size manipulation is weak, the user makes many errors, too few trials were collected, or the irrelevant dimension was not processed strongly. Numerical Stroop performance involves magnitude processing and conflict resolution, but the effect should not be converted directly into an \"inhibition percentage.\"",
    },
    { type: "heading", text: "Can This Test Diagnose Dyscalculia?" },
    {
      type: "paragraph",
      text: "No. Numerical Stroop paradigms have been used in research on mathematical development and developmental dyscalculia, but that does not make a browser score diagnostic. A person's result can be affected by age, familiarity with digits, vision, attention, device timing, and task understanding. Diagnosis of a mathematical learning disorder requires a much broader standardized assessment.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is the Numerical Stroop Test?", answer: "A task where numerical value and physical size are manipulated so that they can agree or conflict." },
        { question: "What is the size congruity effect?", answer: "The reaction-time or accuracy difference between congruent and incongruent numerical/physical size trials." },
        { question: "Who introduced the classic numerical Stroop paradigm?", answer: "Henik and Tzelgov published the influential \"Is Three Greater Than Five?\" study in 1982." },
        { question: "What is an incongruent trial?", answer: "A trial where numerical magnitude and physical size favor different responses." },
        { question: "Is this the same as the color-word Stroop test?", answer: "No. Both are interference paradigms, but they use different stimulus dimensions." },
        { question: "Does a small effect mean strong cognitive control?", answer: "Possibly, but not by itself. Overall speed, accuracy, and stimulus design matter." },
        { question: "Can this diagnose dyscalculia?", answer: "No. It is an online cognitive task, not a clinical or educational diagnostic assessment." },
      ],
    },
    {
      type: "paragraph",
      text: "The Numerical Stroop Test creates two meanings of size: how large the digit looks, and how large the number is. When those meanings agree, responding is easier. When they conflict, irrelevant information can slow the decision. That conflict is what makes the numerical Stroop effect such a clean demonstration of how automatically processed magnitude can influence attention and response selection.",
    },
  ],
};
