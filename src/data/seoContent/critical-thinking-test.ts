import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Critical thinking is not the same as being skeptical of everything. It is the ability to ask: what exactly is being claimed? What evidence supports it? What assumptions are required? Does the conclusion really follow?",
    },
    {
      type: "paragraph",
      text: "Take this free Critical Thinking Test using short arguments, evidence summaries, causal claims, and reasoning problems. The test measures how well you can evaluate reasoning — not whether your opinions match the test writer's opinions.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Critical Thinking Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Read the claim or argument carefully.",
        "Separate the conclusion from the supporting reasons.",
        "Identify what must be assumed.",
        "Ask whether the evidence is relevant and sufficient.",
        "Look for alternative explanations.",
        "Distinguish correlation from causation.",
        "Decide what can reasonably be concluded.",
      ],
    },
    {
      type: "paragraph",
      text: "The key habit is: evaluate the reasoning before deciding whether you like the conclusion.",
    },
    { type: "heading", id: "what-is", text: "What Is Critical Thinking?" },
    {
      type: "paragraph",
      text: "A major expert-consensus project led by **Peter Facione** described critical thinking as purposeful, self-regulatory judgment involving skills such as interpretation, analysis, evaluation, inference, explanation, and self-regulation. Those categories are still widely used in critical-thinking education and assessment — they show that critical thinking is not one trick, but a coordinated set of reasoning skills.",
    },
    { type: "heading", id: "interpretation", text: "Interpretation" },
    {
      type: "paragraph",
      text: "**Interpretation** means understanding what information means. Before evaluating an argument, you must correctly identify the claim, the evidence, the context, and important definitions. \"Sales rose by 20% after the campaign\" requires knowing: 20% relative to what baseline? Over what period? Total sales or one product category? Critical thinking often begins by clarifying the statement before judging it.",
    },
    { type: "heading", id: "analysis", text: "Analysis" },
    {
      type: "paragraph",
      text: "**Analysis** involves identifying relationships among claims, reasons, and evidence. Claim: \"the new training program improved productivity.\" Evidence: \"productivity increased after the program was introduced.\" The evidence is relevant, but the argument still contains an unstated assumption — that the program caused the increase. Analysis exposes the structure so the next step, evaluation, becomes possible.",
    },
    { type: "heading", id: "evaluation", text: "Evaluation" },
    {
      type: "paragraph",
      text: "**Evaluation** asks how credible and strong the evidence is. Is the source reliable? Is the sample appropriate? Is the evidence directly relevant? Are important comparisons missing? Does the evidence justify the strength of the conclusion? A critical thinker does not reject weak evidence merely because the conclusion is disliked — the same standards apply regardless of preference.",
    },
    { type: "heading", id: "inference", text: "Inference" },
    {
      type: "paragraph",
      text: "**Inference** means drawing a conclusion from available information. Strong inference matches the strength of the evidence. If a small observational study finds an association, a cautious conclusion might be \"the variables were associated in this sample,\" while a much stronger claim — \"Variable A causes Variable B in everyone\" — requires more evidence. Critical thinking includes knowing when the conclusion outruns the data.",
    },
    { type: "heading", id: "self-regulation", text: "Self-Regulation" },
    {
      type: "paragraph",
      text: "**Self-regulation** means checking your own thinking: did I overlook a contradictory fact? Am I applying the same standard to both sides? Did I choose an answer too quickly? Am I defending my first impression? Facione's framework treats this reflective checking as a core part of critical thinking. A browser test cannot directly observe all self-regulation, but confidence ratings and answer review can make it more visible.",
    },
    { type: "heading", id: "claims-and-evidence", text: "Claims and Evidence" },
    {
      type: "paragraph",
      text: "A claim is something asserted to be true; evidence is information offered in support of that claim. Claim: \"this tutoring method improves exam scores.\" Evidence: \"students using it scored higher than students who did not.\" That sounds supportive, but critical thinking asks further questions: were students randomly assigned? Were the groups similar before tutoring? Did motivated students choose the tutoring? How large was the difference? Evidence quality matters as much as evidence direction.",
    },
    { type: "heading", id: "correlation-vs-causation", text: "Correlation vs. Causation" },
    {
      type: "paragraph",
      text: "This is one of the most important reasoning distinctions. Suppose people who exercise more report better sleep — possible explanations include that exercise improves sleep, that people who sleep well have more energy to exercise, that another variable influences both, or that the relationship is partly measurement or sampling bias. A correlation can be informative, but it does not, by itself, establish one-directional causation.",
    },
    { type: "heading", id: "confounding", text: "Confounding Variables" },
    {
      type: "paragraph",
      text: "A **confounder** is a variable related to both the proposed cause and the outcome. Ice cream sales and sunburn both increase in summer, but ice cream does not cause sunburn — temperature and sunny weather influence both. A good critical-thinking question may ask which additional variable most weakens the causal interpretation.",
    },
    { type: "heading", id: "alternative-explanations", text: "Alternative Explanations" },
    {
      type: "paragraph",
      text: "Suppose a company introduces new software and productivity rises. The software may have caused the improvement — but alternative explanations include increased staff numbers, a demand shift toward easier tasks, new bonuses, or a change in measurement. Critical thinking does not mean insisting every alternative is equally likely — it means asking whether important alternatives have been ruled out.",
    },
    { type: "heading", id: "necessary-assumptions", text: "Necessary Assumptions" },
    {
      type: "paragraph",
      text: "An argument often depends on something that is not stated. \"The city should add more buses because buses are currently crowded\" carries a hidden assumption: that additional buses would meaningfully reduce crowding. If passengers switch routes or driver shortages prevent additional service, the proposal may not work as expected. Assumption questions test the bridge between evidence and conclusion.",
    },
    { type: "heading", id: "sample-size", text: "Sample Size" },
    {
      type: "paragraph",
      text: "Very small samples are more sensitive to random variation. Three of four users preferring Product A is 75%, but only four people were tested — a percentage can look impressive while containing very little information. Critical-thinking questions train you to notice both proportion and sample size, which connects naturally with our [Data Interpretation Test](/test/data-interpretation-test).",
    },
    { type: "heading", id: "argument-strength", text: "Argument Strength" },
    {
      type: "paragraph",
      text: "Not every argument is deductive. Many real arguments are probabilistic — \"most previous launches from this system succeeded, conditions are normal today, therefore today's launch is likely to succeed\" is not logically guaranteed, but it may still be strong. A critical-thinking test distinguishes validity from argument strength. Our [Deductive Reasoning Test](/test/deductive-reasoning-test) handles strict necessity more deeply.",
    },
    { type: "heading", id: "overgeneralization", text: "Recognizing Overgeneralization" },
    {
      type: "paragraph",
      text: "Two customers complaining about delivery delays does not support the conclusion that \"the company's delivery service is always unreliable.\" The conclusion is too broad for the evidence — overgeneralization occurs when limited evidence is extended far beyond what it supports. The problem is not that the conclusion is impossible; the problem is that the evidence does not justify that level of certainty.",
    },
    { type: "heading", id: "vs-deductive", text: "Critical Thinking vs. Deductive Reasoning" },
    {
      type: "paragraph",
      text: "Our [Deductive Reasoning Test](/test/deductive-reasoning-test) asks whether the conclusion necessarily follows from the premises. Critical Thinking asks broader questions: are the premises credible? Is the evidence strong enough? Are assumptions justified? Are alternatives ignored? Is the causal claim warranted? Deduction evaluates logical necessity inside a premise set; critical thinking also evaluates the quality of the premise set itself.",
    },
    { type: "heading", id: "vs-verbal-reasoning", text: "Critical Thinking vs. Verbal Reasoning" },
    {
      type: "paragraph",
      text: "Our [Verbal Reasoning Test](/test/verbal-reasoning-test) uses a passage as a fixed evidence base, asking what follows from this text. Critical Thinking can question the evidence itself — is this study design strong enough to support the claim? That gives this test a distinct purpose.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — primary score.",
        "**Evidence Evaluation** — quality and relevance of support.",
        "**Assumption Detection** — unstated requirements in arguments.",
        "**Causal Reasoning** — correlation, confounding, and alternatives.",
        "**Inference** — matching conclusions to evidence strength.",
        "**Argument Evaluation** — overgeneralization, false choices, and structural flaws.",
        "**Data-Based Reasoning** — sample size, selection, and risk framing.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Critical Thinking Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for an original browser test. Performance depends on item content, reading demand, familiarity with research concepts, time limit, and education — score bands are not copied from commercial critical-thinking assessments.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is critical thinking?",
          answer: "Purposeful evaluation and inference involving skills such as interpretation, analysis, evaluation, explanation, and self-regulation.",
        },
        {
          question: "Is critical thinking the same as being skeptical?",
          answer: "No. Good critical thinking can lead you to accept a claim when the evidence is strong.",
        },
        {
          question: "What is the difference between evidence and an argument?",
          answer: "Evidence is information supporting a claim; an argument connects reasons or evidence to a conclusion.",
        },
        {
          question: "Does correlation prove causation?",
          answer: "No. Correlation can support investigation, but alternative causal directions and confounding variables must be considered.",
        },
        {
          question: "Is critical thinking the same as IQ?",
          answer: "No. Cognitive ability contributes, but critical thinking also depends on learned reasoning strategies and knowledge about evidence.",
        },
        {
          question: "Can critical thinking be trained?",
          answer: "Yes. Practice with evidence evaluation, assumptions, alternatives, and self-checking can improve performance.",
        },
        {
          question: "Is this a political-opinion test?",
          answer: "No. Items are scored on reasoning quality, not ideological agreement.",
        },
      ],
    },
    { type: "heading", text: "Strong Thinking Is Proportional to the Evidence" },
    {
      type: "paragraph",
      text: "Critical thinking is not about always saying \"I doubt it.\" It is about saying \"how confident should I be, given what I actually know?\" Weak evidence should produce cautious conclusions; strong evidence can justify stronger conclusions. The skill is keeping your certainty in proportion to the quality of the reasoning and evidence in front of you.",
    },
  ],
};
