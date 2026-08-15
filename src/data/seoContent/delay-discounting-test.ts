import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Would you rather receive a smaller reward now or a larger reward after waiting? Take this free **Delay Discounting Test** to explore how time changes the subjective value of future rewards. On each trial, choose between a smaller-sooner reward and a larger-later reward.",
    },
    { type: "paragraph", text: "There is no universally correct answer to each choice. The goal is to estimate your pattern of time preference — not to label every preference for immediate reward as irrational." },
    { type: "heading", id: "how-to-take", text: "How to Take the Delay Discounting Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read both reward options.",
        "Assume the stated rewards are guaranteed unless told otherwise.",
        "Choose the option you genuinely prefer.",
        "Treat the choices independently.",
        "Continue across different amounts and delays.",
        "Avoid selecting what you think the test considers \"good.\"",
        "Review your smaller-sooner choices, larger-later choices, and estimated discounting pattern.",
      ],
    },
    { type: "paragraph", text: "If the task uses hypothetical money, imagine each option as seriously as possible." },
    { type: "heading", text: "What Is Delay Discounting?" },
    {
      type: "paragraph",
      text: "Delay discounting is the decline in an outcome's subjective value as the wait for that outcome becomes longer. Consider $100 today versus $100 in one year — most people prefer the money today. The delayed $100 is physically the same amount, but waiting reduces its subjective attractiveness. Now consider $100 today versus $150 in one year — the larger delayed amount may compensate for the wait. Delay-discounting tasks vary amounts and delays to estimate how strongly time changes preference.",
    },
    { type: "heading", text: "Smaller-Sooner vs. Larger-Later Rewards" },
    {
      type: "paragraph",
      text: "The classic human task presents repeated choices between smaller-sooner (SS) and larger-later (LL) rewards — for example, $30 now or $50 in one month. Someone who often chooses smaller-sooner rewards under a given procedure is described as showing steeper delay discounting. Someone who is more willing to wait for larger rewards shows shallower discounting. These are descriptive patterns and should not automatically become value judgments such as \"impatient person\" or \"disciplined person.\"",
    },
    { type: "heading", text: "The Monetary Choice Questionnaire" },
    {
      type: "paragraph",
      text: "A widely used fixed-choice approach is the Monetary Choice Questionnaire (MCQ) associated with Kirby and colleagues. A common version contains 27 choices between smaller immediate monetary rewards and larger delayed rewards, designed to span different reward sizes and implied discount rates. The MCQ has been used extensively in research. For your site, you can create an original MCQ-style monetary choice task or use an openly available protocol only if its licensing permits it — do not imply that a custom shortened set is the official 27-item questionnaire.",
    },
    { type: "heading", text: "What Is a Discount Rate?" },
    {
      type: "paragraph",
      text: "Researchers often summarize delay discounting using a parameter called k. A classic hyperbolic equation is V = A / (1 + kD), where V is subjective present value, A is the delayed reward amount, D is the delay, and k is the discount rate. Higher k values represent steeper discounting — as delay increases, the subjective value falls. This equation is useful, but it is a model, not a direct reading from the brain. Different mathematical models can fit discounting behavior, and individual choices contain noise.",
    },
    { type: "heading", text: "Why Hyperbolic Discounting Became Important" },
    {
      type: "paragraph",
      text: "A simple exponential model assumes value declines at a constant proportional rate over time. Human and animal choice data often show patterns better captured by hyperbolic or related functions. One implication is that preferences can reverse as rewards become closer in time. Imagine $100 in 365 days versus $120 in 395 days — you may prefer $120. But when the first option becomes immediate ($100 now versus $120 in 30 days), you may switch toward $100. This kind of dynamic preference is one reason delay discounting became important in behavioral economics and psychology.",
    },
    { type: "heading", text: "Indifference Points" },
    {
      type: "paragraph",
      text: "An indifference point is the smaller-sooner amount at which you are roughly equally willing to choose it or the larger delayed reward. Suppose the later reward is $100 in six months. If you consistently prefer $70 now but prefer $100 later over $60 now, your current indifference value may lie somewhere between those amounts. Adaptive tasks can adjust the immediate reward until they estimate this point. Repeating the procedure across several delays produces a discounting curve, which is more detailed than simply counting immediate choices.",
    },
    { type: "heading", text: "Fixed Choices vs. Adjusting-Amount Tasks" },
    {
      type: "paragraph",
      text: "There are several ways to measure discounting. A fixed-choice questionnaire presents a predetermined set of choices — fast, easy to score, easy to repeat consistently. An adjusting-amount procedure holds the delayed reward constant and changes the immediate amount based on previous answers — this estimates indifference points and can generate a personalized curve. The two procedures are related but not identical. This Delay Discounting page uses a fixed monetary choice format as a strong, simple browser design; a future [Temporal Discounting Test](/test/temporal-discounting-test) can use an adjusting-amount format to avoid duplicating the same tool.",
    },
    { type: "heading", text: "Area Under the Curve" },
    {
      type: "paragraph",
      text: "Another common summary is Area Under the Curve (AUC). Instead of assuming one particular mathematical discounting model, AUC summarizes the empirical relationship between normalized delay and subjective value — values closer to 1 indicate less discounting, values closer to 0 indicate steeper discounting. AUC can be useful for an adjusting-amount task with multiple indifference points; it is less natural for a very short fixed-choice quiz unless enough data are available to estimate the curve.",
    },
    { type: "heading", text: "Is Choosing the Immediate Reward Irrational?" },
    {
      type: "paragraph",
      text: "No. A sooner reward can be rational when you need the resource now, future payment is uncertain, waiting has opportunity costs, inflation matters, you can invest the immediate reward, or your circumstances may change. Laboratory delay-discounting tasks usually ask participants to assume the delayed reward is guaranteed, which removes some real-world uncertainty. Even then, people can legitimately value time differently. The task measures preference structure, not moral character.",
    },
    { type: "heading", text: "Delay Is Not the Same as Risk" },
    {
      type: "paragraph",
      text: "A future reward can feel uncertain, but delay discounting and probability discounting are distinct paradigms. Delay discounting involves a certain reward, but you must wait. Probability discounting involves a reward that may occur, but it is uncertain. A good delay task should explicitly say that the delayed reward is guaranteed if that is the intended design — otherwise participants may partly answer a risk question.",
    },
    { type: "heading", text: "Hypothetical vs. Real Rewards" },
    {
      type: "paragraph",
      text: "Many human delay-discounting studies use hypothetical money because actually paying every delayed reward would be expensive and difficult. Research comparing hypothetical and real monetary outcomes has often found meaningful similarity in discounting patterns, though that does not mean the two procedures are identical under every condition. Do not claim users literally earned the displayed money.",
    },
    { type: "heading", text: "Delay Discounting and \"Impulsivity\"" },
    {
      type: "paragraph",
      text: "Steeper discounting is often discussed as one dimension of impulsive choice. Research has found relationships between delay discounting and various behavioral or clinical outcomes. But impulsivity is not one single trait — it can include rapid action without thinking, difficulty stopping responses, sensation seeking, and preference for immediate reward. The [Stop Signal Test](/test/stop-signal-test) examines action cancellation; Delay Discounting examines intertemporal choice. A person can perform differently across those dimensions, and one discounting score should not be used to diagnose an impulse-control disorder.",
    },
    { type: "heading", text: "Amount Effects" },
    {
      type: "paragraph",
      text: "Discounting can change with reward magnitude. People often discount larger monetary rewards less steeply than smaller ones — a pattern known as the magnitude effect. That is one reason established questionnaires use several reward sizes. If a web test uses only one amount, it may capture a narrower preference pattern. A richer version can sample small, medium, and larger rewards, showing whether choices shift with magnitude.",
    },
    { type: "heading", text: "What Is a Good Delay Discounting Score?" },
    {
      type: "paragraph",
      text: "There is no universal \"good\" k value for a custom browser test. Discount estimates depend on reward amounts, delays, real vs. hypothetical outcomes, fixed vs. adjusting procedure, model used, scoring method, and response consistency. Do not label users \"low k = disciplined\" or \"high k = impulsive\" as though those were clinical categories — report the pattern descriptively.",
    },
    { type: "heading", text: "Delay Discounting vs. Risk-Taking Test" },
    {
      type: "paragraph",
      text: "The [Risk-Taking Test](/test/risk-taking-test) uses uncertain outcomes and escalating risk. Delay discounting usually assumes a certain future reward with a waiting cost. Risk asks \"will I get the reward?\" Delay asks \"how long must I wait?\" These can interact in real life but should remain separate experimental dimensions.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is delay discounting?", answer: "The decline in an outcome's subjective value as the delay to receiving it increases." },
        { question: "What does smaller-sooner mean?", answer: "A reward available earlier but smaller than the alternative." },
        { question: "What does larger-later mean?", answer: "A larger reward available after a longer delay." },
        { question: "What is k?", answer: "A parameter commonly used in hyperbolic discounting models. Higher values represent steeper discounting." },
        { question: "Is choosing money now always impulsive?", answer: "No. Immediate rewards can be rational depending on circumstances, and a laboratory preference should not be turned into a personality diagnosis." },
        { question: "Can hypothetical rewards be useful?", answer: "Yes. Research has found that hypothetical monetary tasks can produce meaningful delay-discounting patterns, although procedures should be described accurately." },
        { question: "Is delay discounting the same as risk-taking?", answer: "No. Standard delay discounting assumes delayed rewards are certain; risk tasks manipulate outcome probability." },
      ],
    },
    {
      type: "paragraph",
      text: "Each choice involves a trade-off: more reward versus less waiting. Delay discounting turns that trade-off into a measurable preference pattern. The useful question is not whether waiting is always better — it is how much additional reward it takes before waiting becomes worth it to you.",
    },
  ],
};
