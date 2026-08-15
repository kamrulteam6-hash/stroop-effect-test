import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "When a vivid description points one way but the statistics point another, which information controls your judgment? Take this free **Base Rate Neglect Test** using short probability and classification problems. Each scenario gives you a base rate — how common something is before new evidence — and additional information about a specific case. Your job is to combine both.",
    },
    { type: "paragraph", text: "The test explores whether case-specific evidence receives too much weight while prior probabilities receive too little. It is a reasoning demonstration, not a complete test of mathematical ability." },
    { type: "heading", id: "how-to-take", text: "How to Take the Base Rate Neglect Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read the base-rate information first.",
        "Read the evidence about the specific case.",
        "Ask how diagnostic that evidence actually is.",
        "Estimate or choose the most defensible probability.",
        "Continue through all scenarios.",
        "Review the correct logic and explanation.",
        "Pay attention to whether you ignored the starting prevalence.",
      ],
    },
    { type: "paragraph", text: "Do not assume the descriptive detail is more important merely because it is vivid. Sometimes the base rate should dominate. Sometimes strong diagnostic evidence should substantially update it." },
    { type: "heading", text: "What Is a Base Rate?" },
    {
      type: "paragraph",
      text: "A base rate is the prior frequency or prevalence of an event or category before case-specific evidence is considered. Suppose a population contains 70 lawyers and 30 engineers. If one person is selected randomly and you know nothing else, the initial probability is 70% lawyer and 30% engineer — those are the base rates. New evidence can change the probability, but the base rate remains part of the calculation.",
    },
    { type: "heading", text: "What Is Base Rate Neglect?" },
    {
      type: "paragraph",
      text: "Base rate neglect refers to underweighting or ignoring prior probability information when making a judgment. Instead, people may rely heavily on a vivid description, a stereotype, a test result, a recent observation, or an individual story. The classic psychological issue is not that people should always follow base rates blindly — it is that base-rate information sometimes receives much less weight than normative probability reasoning would require.",
    },
    { type: "heading", text: "Kahneman and Tversky's Lawyer–Engineer Problems" },
    {
      type: "paragraph",
      text: "Daniel Kahneman and Amos Tversky published influential research in 1973 on what they called insensitivity to prior probability of outcomes. Participants received different base rates for lawyers and engineers, then read descriptions of individuals and estimated whether each person was more likely to be a lawyer or an engineer.",
    },
    { type: "paragraph", text: "When descriptions strongly resembled stereotypes of one occupation, judgments often changed relatively little when the underlying base rates were reversed. That suggested people were relying heavily on representativeness — how much the description resembled their mental image of a category." },
    { type: "heading", text: "Representativeness vs. Probability" },
    {
      type: "paragraph",
      text: "Imagine a person described as quiet, enjoys technical magazines, and likes solving mathematical puzzles. That may sound representative of an engineer, but representativeness does not tell you the probability by itself. If engineers are extremely rare in the population, the base rate matters. A description can be highly typical of a category while the category remains statistically uncommon. The correct judgment depends on both prior prevalence and diagnostic strength of the evidence.",
    },
    { type: "heading", text: "Bayesian Reasoning" },
    {
      type: "paragraph",
      text: "Bayes' theorem provides the normative framework for combining prior probability with new evidence. In odds form: posterior odds = prior odds × likelihood ratio. The prior odds come from the base rate; the likelihood ratio describes how much more likely the evidence is under one hypothesis than another. This structure makes an important point: strong evidence can overcome a low base rate, but weak evidence should not. Base-rate neglect occurs when prior information is underweighted relative to the evidence.",
    },
    { type: "heading", text: "Medical-Test Example" },
    {
      type: "paragraph",
      text: "Suppose a condition is rare, and a test has high sensitivity and reasonably high specificity. A positive result may sound highly convincing, but if the disease prevalence is extremely low, many positive results can still come from healthy people because there are so many more healthy people being tested. This is why P(positive test | disease) is not the same as P(disease | positive test) — the second probability depends heavily on the base rate. This is one of the most practical applications of Bayesian reasoning.",
    },
    { type: "heading", text: "Natural Frequencies" },
    {
      type: "paragraph",
      text: "One of the strongest findings in Bayesian reasoning research is that people often perform better when statistical information is presented as natural frequencies rather than abstract percentages. Instead of 1% prevalence, 80% sensitivity, and 10% false-positive rate, you might say: out of 1,000 people, 10 have the condition, 8 of those 10 test positive, and about 99 of the 990 without the condition also test positive. Now the relevant comparison is visible: 8 true positives among 107 total positives. Research has repeatedly found that natural-frequency formats can improve Bayesian reasoning.",
    },
    { type: "heading", text: "Why Frequency Format Helps" },
    {
      type: "paragraph",
      text: "Percentages often require several conditional-probability calculations. Natural frequencies preserve the underlying counts — you can directly see how many people start in each category, how many from each category produce the evidence, and how many total evidence-positive cases exist. This reduces the need to mentally reconstruct the population. For educational value, result explanations can show both probability format and frequency format.",
    },
    { type: "heading", text: "Base Rate Neglect Is Not Always Total Neglect" },
    {
      type: "paragraph",
      text: "The name can sound as though people literally assign the base rate zero weight. Research is more nuanced — people often underweight base rates rather than ignore them completely. Performance also changes with wording, causal interpretation, statistical sophistication, frequency format, strength of case evidence, and task structure. So the test should report degree of performance rather than saying one wrong answer proves the base rate was completely ignored.",
    },
    { type: "heading", text: "Base Rate vs. Diagnostic Evidence" },
    {
      type: "paragraph",
      text: "The most important skill is balancing both. When evidence is weak, the base rate may deserve substantial weight. When evidence is strong — for example, a highly diagnostic test result much more likely under one hypothesis — the posterior probability may shift strongly toward that alternative. Good Bayesian reasoning is not \"always pick the common category.\" It is \"combine prevalence with the actual diagnosticity of the evidence.\"",
    },
    { type: "heading", text: "Base Rate Neglect vs. Conjunction Fallacy" },
    {
      type: "paragraph",
      text: "The [Conjunction Fallacy Test](/test/conjunction-fallacy-test) asks whether \"A and B\" can be more probable than \"A\" alone. Base Rate Neglect asks whether prior prevalence is properly integrated with new evidence. Both appear in judgment-under-uncertainty research and can involve representativeness, but the mathematical errors are different.",
    },
    { type: "heading", text: "Base Rate Neglect vs. Availability Heuristic" },
    {
      type: "paragraph",
      text: "The [Availability Heuristic Test](/test/availability-heuristic-test) concerns judgments based on how easily examples come to mind. Base-rate neglect concerns prior statistical prevalence being underweighted. A vivid example can contribute to both, but the mechanisms and experimental structures are distinct.",
    },
    { type: "heading", text: "What Does a Good Score Mean?" },
    {
      type: "paragraph",
      text: "A high score shows strong performance on the specific Bayesian/base-rate problems presented. It does not mean perfect statistical intelligence or immunity to cognitive bias. A low score can reflect difficulty with percentages, misunderstanding conditional probability, weak numeracy, representativeness, or confusing wording. For this reason, explanations are as important as the final score.",
    },
    { type: "heading", text: "How to Reduce Base Rate Neglect" },
    { type: "paragraph", text: "Before answering, ask:" },
    {
      type: "list",
      ordered: true,
      items: [
        "How common is the outcome before I see the new evidence?",
        "How likely is this evidence if the outcome is true?",
        "How likely is the same evidence if the outcome is false?",
        "Can I convert the percentages into 100 or 1,000 hypothetical cases?",
        "Am I choosing based on stereotype rather than probability?",
        "Is the case description actually diagnostic?",
      ],
    },
    { type: "paragraph", text: "The natural-frequency method is especially useful for diagnostic problems." },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is base rate neglect?", answer: "Underweighting prior probability information when making a judgment based on new evidence." },
        { question: "What is a base rate?", answer: "The prevalence or prior probability of an event or category before case-specific evidence is considered." },
        { question: "Who studied base rate neglect?", answer: "Kahneman and Tversky's 1973 work on prior probabilities and representativeness is foundational." },
        { question: "Is Bayes' theorem always required?", answer: "Not every everyday judgment needs explicit calculation, but Bayesian logic provides the normative framework for combining priors and evidence." },
        { question: "Why do natural frequencies help?", answer: "They make the underlying counts and nested sets easier to see than abstract conditional percentages." },
        { question: "Should I always choose the more common category?", answer: "No. Strong diagnostic evidence can overcome a low base rate." },
        { question: "Is this a math test?", answer: "It involves probability reasoning, but the key concept is integrating prior prevalence with new evidence." },
      ],
    },
    {
      type: "paragraph",
      text: "A vivid description can feel highly informative. Sometimes it is. But before letting the story take over, ask: what was the probability before I learned this new detail? Then ask how strongly the detail should update that starting point. That two-step habit is the core defense against base-rate neglect.",
    },
  ],
};
