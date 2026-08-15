import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can adding an option you would never choose make another option suddenly look better? Take this free **Decoy Effect Test**, also known as an attraction effect test. You will make choices between options that trade off two desirable features, such as lower price vs. higher quality, speed vs. battery life, or quantity vs. cost. Then a third option may be introduced.",
    },
    { type: "paragraph", text: "The new option is designed to be worse than one existing option on the relevant attributes while remaining less directly dominated by the other. If its presence shifts choice toward the dominating option, that pattern is consistent with the decoy effect." },
    { type: "heading", id: "how-to-take", text: "How to Take the Decoy Effect Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Compare the original options.",
        "Choose the option you genuinely prefer.",
        "Continue through several product or decision scenarios.",
        "In later matched choices, inspect the added third option.",
        "Choose again based on the full choice set.",
        "Review whether your preference shifted toward the target.",
        "Read the explanation for each decoy.",
      ],
    },
    { type: "paragraph", text: "Do not assume the cheapest, most expensive, or middle option is automatically correct. There is no objectively correct consumer preference in most decoy scenarios." },
    { type: "heading", text: "What Is the Decoy Effect?" },
    {
      type: "paragraph",
      text: "The decoy effect occurs when adding an inferior third option changes the relative preference between two existing options. It is also called the attraction effect or asymmetric dominance effect. The classic structure contains a target (the option the decoy is designed to make more attractive), a competitor (the alternative that trades off attributes with the target), and a decoy (an option that is clearly worse than the target but not equally dominated by the competitor). The presence of the decoy can increase the target's choice share.",
    },
    { type: "heading", text: "Huber, Payne, and Puto's 1982 Study" },
    {
      type: "paragraph",
      text: "Joel Huber, John Payne, and Christopher Puto published the landmark decoy-effect paper in 1982. They showed that adding an asymmetrically dominated alternative could increase the probability of choosing the option that dominated it. This was theoretically important because many traditional choice models assume regularity — adding another option should not increase the probability that an existing option is chosen. The decoy effect violates that simple expectation. Choice depends on the composition of the choice set.",
    },
    { type: "heading", text: "What Is Asymmetric Dominance?" },
    {
      type: "paragraph",
      text: "Suppose you are choosing between laptops. Laptop A is $900 with high performance; Laptop B is $700 with medium performance. Neither dominates the other — A is better in performance, B is better in price. Now add Laptop C (decoy): $920 with slightly lower performance than A. Laptop A is better than C on both price and performance, so C is dominated by A. But C is not simply dominated by B in the same way because B is much cheaper while also less powerful.",
    },
    { type: "paragraph", text: "The decoy creates an easy comparison: A clearly beats C. That can make A look more attractive relative to B." },
    { type: "heading", text: "Why the Decoy Is \"Asymmetrically\" Dominated" },
    {
      type: "paragraph",
      text: "The asymmetry is essential. If the decoy were worse than both A and B on every important attribute, it might simply look irrelevant. The classic decoy is positioned so that it creates a particularly favorable local comparison for one target. This changes the choice context — the test should therefore not label any obviously terrible third option a decoy. Its attribute placement matters.",
    },
    { type: "heading", text: "The Attraction Effect" },
    {
      type: "paragraph",
      text: "The term attraction effect describes the target becoming more attractive after the decoy is added. For example, without a decoy, A might be chosen by 45% and B by 55%. With decoy C added, A might be chosen by 60% while B plus C together account for 40%. The important observation is not merely that almost nobody chooses C — it is that adding C changes the relative share of A and B. That is the context effect.",
    },
    { type: "heading", text: "The Regularity Principle" },
    {
      type: "paragraph",
      text: "A basic regularity principle says that expanding the choice set should not increase the probability of choosing an option already available. If you originally have A or B and then add C, A has more competition, not less. Standard random-utility models often predict that A's choice probability should stay the same or fall. The classic decoy effect is interesting precisely because A's share can rise when C enters. That makes asymmetric dominance a major example of context-dependent choice.",
    },
    { type: "heading", text: "Is the Decoy Effect the Same as Choosing the Middle Option?" },
    {
      type: "paragraph",
      text: "No — this is a common oversimplification. A compromise effect occurs when an option becomes more attractive because it occupies an intermediate position within the set. The decoy effect specifically involves an asymmetrically dominated alternative that favors comparison with a target. The two are related context effects but are not identical. A good Decoy Effect Test should manipulate asymmetric dominance directly rather than merely present Small, Medium, and Large choices.",
    },
    { type: "heading", text: "Why Does the Decoy Effect Happen?" },
    {
      type: "paragraph",
      text: "There is no single explanation accepted for every context. Proposed mechanisms include easier attribute comparisons, contrast effects, changes in perceived value, attention toward dimensions where the target dominates, justification of the target choice, and context-dependent preference construction. Modern research continues to investigate when the effect emerges and when it does not — a 2023 framework emphasized factors such as ambiguity, accessibility, and applicability in explaining why attraction effects are robust in some numerical-choice contexts yet weaker in some perceptual tasks. So the effect should not be described as a universal marketing trick that works on everyone.",
    },
    { type: "heading", text: "How an Individual Online Test Can Demonstrate the Effect" },
    {
      type: "paragraph",
      text: "The strongest scientific evidence for the decoy effect comes from comparing choice rates across conditions or groups. For a personal browser test, one practical design is to show an A vs. B choice, later show a matched A vs. B vs. decoy choice, and record whether preference shifts. If a user changes from B to A after the decoy appears, that is an intuitive demonstration.",
    },
    { type: "paragraph", text: "But there is a limitation: the user may remember the first choice or recognize the purpose of the experiment, which can create consistency pressure or demand effects. Using many scenarios and separating matched choices can reduce the problem." },
    { type: "heading", text: "One Preference Shift Does Not Prove a Stable Bias" },
    {
      type: "paragraph",
      text: "Suppose you switch once — that does not mean you are \"80% vulnerable to decoy marketing.\" Maybe you reconsidered the attributes, the scenario was ambiguous, the third option clarified what mattered, you remembered the first choice, or you simply changed your mind. The decoy effect is most convincing as a group-level change in choice shares under controlled conditions. A short individual result should be presented descriptively.",
    },
    { type: "heading", text: "Decoy Effect vs. Framing Effect" },
    {
      type: "paragraph",
      text: "The [Framing Effect Test](/test/framing-effect-test) keeps the basic outcomes equivalent while changing how they are described. The Decoy Effect changes which alternatives are present. Framing changes description; Decoy changes choice-set composition. This distinction gives both tests clear independent search intent.",
    },
    { type: "heading", text: "How to Reduce Decoy Influence" },
    { type: "paragraph", text: "Before choosing:" },
    {
      type: "list",
      ordered: true,
      items: [
        "Identify the attributes that actually matter.",
        "Compare A and B directly.",
        "Temporarily remove the third option.",
        "Ask which option you preferred before seeing the decoy.",
        "Calculate value on the relevant dimensions.",
        "Ignore an option you would never choose and reassess the remaining pair.",
      ],
    },
    { type: "paragraph", text: "A useful test is: if this third option disappeared, would my preference between the original two change? If yes, context may be affecting the choice." },
    { type: "heading", text: "What Is a Good Decoy Effect Score?" },
    {
      type: "paragraph",
      text: "There is no universal individual score. A custom browser test might report number of matched choices, number of target shifts, number of stable preferences, and direction of shifts. But avoid categories such as \"0–2 = rational\" or \"5+ = highly manipulable\" without validation. The phenomenon describes context-sensitive choice, not a fixed personality defect.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is the decoy effect?", answer: "A shift in preference caused by adding an option that is asymmetrically dominated by one existing alternative." },
        { question: "What is the attraction effect?", answer: "Another name for the decoy effect, referring to increased attraction toward the target option." },
        { question: "What does asymmetrically dominated mean?", answer: "The decoy is clearly worse than the target on relevant attributes but not equivalently worse than the competing option." },
        { question: "Is the decoy always chosen?", answer: "Usually the interesting effect is the opposite: few people choose it, yet its presence changes the choice between the original options." },
        { question: "Is the decoy effect the same as the compromise effect?", answer: "No. The compromise effect favors an intermediate option; the decoy effect relies on asymmetric dominance." },
        { question: "Does the effect work on everyone?", answer: "No. Effect size depends on the choice context, attributes, presentation, and person." },
        { question: "Can one preference change prove I was biased?", answer: "No. Individual choices are noisy; controlled comparisons across multiple observations provide stronger evidence." },
      ],
    },
    {
      type: "paragraph",
      text: "The decoy effect exposes a surprising possibility: an option can influence your decision even when you have almost no intention of selecting it. When a third option makes one existing choice suddenly look much better, mentally remove it. Then ask: which of the original two options actually fits my priorities? That comparison gets closer to your underlying preference.",
    },
  ],
};
