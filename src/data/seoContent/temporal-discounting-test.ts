import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How much is a future reward worth to you today? Take this free **Temporal Discounting Test** using an adjusting-amount intertemporal choice procedure. You will repeatedly choose between a smaller reward available sooner and a larger reward available later. The sooner amount adjusts based on your choices until the test estimates an indifference point for each delay.",
    },
    { type: "paragraph", text: "Your results can be displayed as a discounting curve across time. This is closely related to delay discounting; the terms temporal discounting and delay discounting are often used interchangeably in research." },
    { type: "heading", id: "how-to-take", text: "How to Take the Temporal Discounting Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read the sooner and later reward options.",
        "Assume payments are guaranteed unless the instructions say otherwise.",
        "Choose the option you genuinely prefer.",
        "Watch as the sooner amount adjusts.",
        "Continue until the test estimates an indifference value.",
        "Repeat the procedure for several delays.",
        "Review your discounting curve, area under the curve, and consistency.",
      ],
    },
    { type: "paragraph", text: "Do not try to choose what seems more patient or financially impressive. The task is meant to estimate your actual intertemporal preference." },
    { type: "heading", text: "Temporal Discounting vs. Delay Discounting" },
    {
      type: "paragraph",
      text: "In behavioral research, temporal discounting and delay discounting usually refer to the same broad phenomenon: future outcomes often have less subjective value than more immediate outcomes. This site's [Delay Discounting Test](/test/delay-discounting-test) uses a fixed set of smaller-sooner versus larger-later choices — useful for a quick preference profile. This Temporal Discounting Test remains meaningfully different by using an adjusting-amount procedure that estimates indifference points at several delays and builds a personalized discounting curve. The science overlaps, but the test experience and output differ.",
    },
    { type: "heading", text: "What Is an Indifference Point?" },
    {
      type: "paragraph",
      text: "An indifference point is the sooner amount that feels approximately equal in value to a larger delayed reward. Suppose the later reward is $100 in 6 months. The program asks $50 now or $100 in 6 months, and you choose $100 later. The immediate amount increases to $75 now or $100 in 6 months, and you choose $75 now. The program narrows the range, and after several choices it may estimate that you are roughly indifferent around $68 now ≈ $100 in 6 months. That $68 is an estimate of the delayed reward's current subjective value under the task.",
    },
    { type: "heading", text: "How an Adjusting-Amount Procedure Works" },
    {
      type: "paragraph",
      text: "A simple adaptive method starts the immediate amount near half of the delayed reward. If you choose the delayed reward, the immediate offer rises; if you choose the immediate reward, the immediate offer falls. The adjustment becomes smaller over successive choices, similar to a binary search. The goal is not to force a preference — it is to locate the point where the two alternatives become difficult to distinguish. Repeating this process across delays creates a series of subjective values.",
    },
    { type: "heading", text: "Building a Discounting Curve" },
    {
      type: "paragraph",
      text: "Suppose the delayed reward is always $100. Estimated indifference points might be $98 at 1 day, $94 at 1 week, $84 at 1 month, $66 at 6 months, and $55 at 1 year. Plotting delay on the horizontal axis against subjective value on the vertical axis, the line generally falls as delay increases. A steep decline indicates stronger temporal discounting; a shallow decline indicates that delayed rewards retain more present subjective value. The shape is often more informative than one single choice.",
    },
    { type: "heading", text: "Hyperbolic Discounting" },
    {
      type: "paragraph",
      text: "One famous mathematical model is V = A / (1 + kD), where V is subjective value, A is the delayed amount, D is the delay, and k is the discount rate. A higher k means steeper discounting. The hyperbolic model became popular because it can describe patterns such as stronger discounting at short delays and preference reversals as options approach the present. But hyperbolic discounting should not be presented as a proven psychological law for every person.",
    },
    { type: "heading", text: "There Is No Single Universally Best Discounting Model" },
    {
      type: "paragraph",
      text: "Researchers have proposed exponential models, hyperbolic models, hyperboloid models, quasi-hyperbolic models, models involving nonlinear perception of time, and heuristic models. Model-comparison work shows that several functions can describe intertemporal choice well under different conditions. This matters for a public result page — a fitted k value is model-dependent, not a direct biological measurement of \"patience.\"",
    },
    { type: "heading", text: "Area Under the Curve" },
    {
      type: "paragraph",
      text: "A useful alternative summary is Area Under the Curve (AUC). Myerson, Green, and Warusawitharana proposed an empirical AUC measure for discounting in 2001. First normalize delay and subjective reward value, then calculate the area beneath the observed discounting function using trapezoids. In the conventional normalized approach, AUC near 1 indicates shallower discounting, and AUC near 0 indicates steeper discounting. AUC has the advantage of not requiring one specific theoretical discount function.",
    },
    { type: "heading", text: "Why AUC and k Can Tell the Story Differently" },
    {
      type: "paragraph",
      text: "The k parameter comes from fitting a mathematical model. AUC summarizes the observed curve more directly. Two users can have similar fitted k values but different irregularities in their observed choice patterns. Conversely, different model assumptions can produce different parameter estimates from the same data. A strong browser result can therefore report indifference points, curve, normalized AUC, and optional fitted k. The empirical curve should remain visible rather than hiding everything behind one parameter.",
    },
    { type: "heading", text: "What Is Present Bias?" },
    {
      type: "paragraph",
      text: "Some intertemporal models distinguish general discounting from an additional preference for outcomes available immediately. For example, $80 now vs. $100 in one month may produce stronger preference for the sooner reward than $80 in one year vs. $100 in thirteen months, even though the gap is one month in both choices. This pattern is often discussed as present bias. However, observing one preference reversal is not enough to estimate present bias reliably — a dedicated design needs choices that compare equivalent delay differences at different temporal locations.",
    },
    { type: "heading", text: "Preference Reversals" },
    {
      type: "paragraph",
      text: "Imagine today you prefer $120 in 13 months over $100 in 12 months. But one year later, when the options become $120 in 1 month versus $100 now, you switch to $100 now. That is a dynamic preference reversal. Hyperbolic and quasi-hyperbolic models can accommodate this type of behavior more naturally than simple constant-rate exponential discounting. But real-world preference reversals can also reflect uncertainty and changing circumstances.",
    },
    { type: "heading", text: "Time Is Not the Only Thing Being Valued" },
    {
      type: "paragraph",
      text: "A delayed reward can feel less attractive because of waiting, uncertainty that it will arrive, opportunity cost, inflation, changing needs, distrust, or subjective perception of time. Experimental tasks usually instruct users to assume the reward is guaranteed, intended to isolate delay more cleanly. Real-world financial decisions contain more factors — the browser result should not be treated as a complete model of saving or investing.",
    },
    { type: "heading", text: "Magnitude Effects" },
    {
      type: "paragraph",
      text: "Temporal discounting can depend on reward size. People often discount small monetary rewards more steeply than larger monetary rewards — this is called the magnitude effect. For example, someone may strongly prefer $10 now over $15 later while being more willing to wait when the choice becomes $1,000 now vs. $1,500 later. A test using only one delayed amount measures only one portion of a person's preference pattern; an advanced mode can repeat the curve at two reward magnitudes.",
    },
    { type: "heading", text: "Temporal Discounting and Impulsivity" },
    {
      type: "paragraph",
      text: "Steeper temporal discounting is frequently associated with impulsive choice in research, and has also been studied in relation to many health and behavioral outcomes. But it is not a diagnostic test of impulsivity. Impulsivity contains several dimensions — the [Stop Signal Test](/test/stop-signal-test) measures action cancellation, Temporal Discounting measures intertemporal preference, and the [Risk-Taking Test](/test/risk-taking-test) measures decisions under uncertainty. Someone can show fast response inhibition but steep temporal discounting, or the reverse.",
    },
    { type: "heading", text: "What Is a Good Temporal Discounting Score?" },
    {
      type: "paragraph",
      text: "There is no universal ideal AUC or k. Preference depends on reward magnitude, delays, instructions, real vs. hypothetical payment, adjustment procedure, model, and individual circumstances. A shallow curve is not automatically morally superior — waiting has costs. A steep curve is not automatically irrational. The result should describe how future value changed in this task, not rank personal worth.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is temporal discounting?", answer: "The reduction in subjective value of an outcome as the delay to receiving it increases." },
        { question: "Is temporal discounting different from delay discounting?", answer: "The terms are often used interchangeably. This site differentiates the tools by procedure: fixed-choice Delay Discounting versus adaptive Temporal Discounting." },
        { question: "What is an indifference point?", answer: "The sooner amount that is approximately equally attractive as a larger delayed amount." },
        { question: "What is k?", answer: "A fitted discount-rate parameter used in hyperbolic and related models." },
        { question: "What is AUC?", answer: "Area Under the Curve, a model-light way of summarizing the empirical discounting curve." },
        { question: "Is higher AUC better?", answer: "It indicates shallower discounting in the conventional normalized calculation, but it is not inherently a better personality score." },
        { question: "Can this diagnose impulsivity?", answer: "No. It measures one form of intertemporal choice." },
      ],
    },
    {
      type: "paragraph",
      text: "One choice can tell you what you preferred once. A sequence of adjusting choices can reveal something richer: how much value the same future reward retains as the delay grows. The indifference points make that change visible. Together, they turn an abstract preference for sooner versus later into a personal temporal-discounting curve.",
    },
  ],
};
