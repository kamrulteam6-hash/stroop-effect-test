import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Numerical reasoning is not simply \"can you calculate quickly?\" It is \"can you understand quantitative information, choose the correct mathematical relationship, and reach a justified answer?\"",
    },
    {
      type: "paragraph",
      text: "Take this free Numerical Reasoning Test using realistic questions involving percentages, ratios, proportions, rates, averages, tables, charts, numerical comparisons, and multi-step word problems. The test emphasizes applied quantitative reasoning rather than difficult school mathematics.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Numerical Reasoning Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Read the question before calculating.",
        "Identify what information is actually needed.",
        "Check units carefully.",
        "Use the table or chart when provided.",
        "Estimate the likely answer range.",
        "Perform the calculation.",
        "Check whether the result makes sense.",
        "Review accuracy by quantitative skill.",
      ],
    },
    { type: "heading", id: "what-is", text: "What Is Numerical Reasoning?" },
    {
      type: "paragraph",
      text: "**Numerical reasoning** is the ability to understand and use quantitative information to solve problems — arithmetic, number relationships, proportional thinking, interpreting data, evaluating probabilities, and selecting the correct calculation.",
    },
    {
      type: "paragraph",
      text: "Research on **numeracy** emphasizes that quantitative competence extends beyond basic arithmetic to understanding ratios, proportions, percentages, probabilities, tables, and graphs. That is the model this test follows.",
    },
    { type: "heading", id: "reasoning-vs-math", text: "Numerical Reasoning vs. Basic Math" },
    {
      type: "paragraph",
      text: "Consider 18 × 7 = ? That is primarily arithmetic computation. Now consider: a factory produced 18 units per hour for 7 hours, and rejected 8% of the units — approximately how many usable units remained? That requires identifying the production total, calculating a percentage, subtracting the rejected amount, and interpreting the answer in context. The arithmetic itself may be easy — the reasoning is deciding what to do with the numbers.",
    },
    { type: "heading", id: "percentages", text: "Percentages" },
    {
      type: "paragraph",
      text: "Percentage questions are common because they occur everywhere: discounts, taxes, growth, profit, survey results, and business metrics. Example: a product increases from $80 to $92 — an increase of $12, which is a 15% increase (12 ÷ 80 × 100). A common error is dividing by the new value instead of the original value, so result explanations show the reasoning step, not only the correct option.",
    },
    { type: "heading", id: "percentage-change-vs-points", text: "Percentage Change vs. Percentage Points" },
    {
      type: "paragraph",
      text: "These are often confused. Suppose a rate increases from 20% to 25%. The increase is 5 percentage points, but the relative percentage increase is 25%, because (25 − 20) ÷ 20 = 0.25. This distinction is important in finance, medicine, economics, and news, and advanced numerical-reasoning items test it carefully.",
    },
    { type: "heading", id: "ratios", text: "Ratios" },
    {
      type: "paragraph",
      text: "A ratio compares quantities. Example: red to blue items are in a 3:5 ratio. If there are 24 red items, one ratio unit equals 8 (24 ÷ 3), so blue items = 5 × 8 = 40. Strong numerical reasoning involves recognizing the proportional structure before computing — a user who starts multiplying random numbers may know arithmetic but miss the relationship.",
    },
    { type: "heading", id: "proportions", text: "Proportions" },
    {
      type: "paragraph",
      text: "Proportional reasoning asks whether two ratios express the same relationship. Example: 3/5 = x/20. Cross-multiplication gives 3 × 20 = 5x, so x = 12. Alternatively: 5 became 20 by multiplying by 4, so 3 × 4 = 12. Both are valid — the test rewards correct quantitative reasoning rather than one preferred method.",
    },
    { type: "heading", id: "rates", text: "Rates" },
    {
      type: "paragraph",
      text: "Rates compare quantities with different units, like kilometers per hour, dollars per item, units per worker, or liters per minute. Example: a machine produces 150 parts in 6 hours — an average rate of 25 parts per hour. At that rate, 400 parts would take 400 ÷ 25 = 16 hours. Unit awareness is essential — many numerical-reasoning mistakes are really unit mistakes.",
    },
    { type: "heading", id: "averages", text: "Averages" },
    {
      type: "paragraph",
      text: "The ordinary arithmetic mean is sum of values ÷ number of values. But average questions become harder when information is grouped. Example: Group A has 10 people with a mean score of 70; Group B has 20 people with a mean score of 80. The combined mean is not 75, because the groups are different sizes. Weighted total: (10 × 70) + (20 × 80) = 2300, divided by 30 people ≈ 76.7. This is a classic numerical-reasoning problem because the difficulty lies in choosing the correct weighting.",
    },
    { type: "heading", id: "tables", text: "Tables" },
    {
      type: "paragraph",
      text: "Tables test whether you can identify the correct row, identify the correct column, compare values, and calculate differences or ratios. The arithmetic may be simple — the challenge is extracting the right numbers. A good item might show monthly sales across four departments and ask which department had the largest percentage increase from March to April, requiring both data selection and calculation.",
    },
    { type: "heading", id: "graphs-and-charts", text: "Graphs and Charts" },
    {
      type: "paragraph",
      text: "Useful chart types include bar charts, line charts, stacked bars, and simple pie charts. The question tests quantitative interpretation rather than visual trickery — labels stay readable, axes stay clearly marked, and scales stay honest. If an axis starts at a non-zero value, that is made explicit rather than used as a source of unfair difficulty.",
    },
    { type: "heading", id: "vs-numerical-stroop", text: "Numerical Reasoning vs. Numerical Stroop" },
    {
      type: "paragraph",
      text: "Our [Numerical Stroop Test](/test/numerical-stroop-test) is a cognitive interference experiment — it asks you to ignore one dimension of size while responding to another. The Numerical Reasoning Test asks you to solve quantitative problems. Numerical Stroop measures automatic magnitude interference; Numerical Reasoning measures applied quantitative problem solving. The two have almost no overlap in what they measure.",
    },
    { type: "heading", id: "vs-mental-math", text: "Numerical Reasoning vs. Mental Math Speed" },
    {
      type: "paragraph",
      text: "Our [Mental Math Test](/test/mental-math-test) emphasizes quick arithmetic. Numerical Reasoning emphasizes selecting and applying the correct quantitative relationship — a calculator may even be permitted. If your reasoning is correct but your multiplication is slow, that should not automatically be treated as weak numerical reasoning.",
    },
    { type: "heading", id: "vs-general-aptitude", text: "Numerical Reasoning vs. General Aptitude Test" },
    {
      type: "paragraph",
      text: "The [General Aptitude Test](/test/general-aptitude-test) contains a short numerical section among several domains. This dedicated page goes deeper into ratios, percentages, charts, rates, and multi-step questions. If you discover numerical aptitude is a strength or weakness there, use this test for more detailed practice.",
    },
    { type: "heading", id: "common-errors", text: "Common Numerical Reasoning Errors" },
    {
      type: "list",
      items: [
        "**Wrong Base** — calculating percentage change using the final value instead of the starting value.",
        "**Unit Error** — mixing minutes and hours.",
        "**Unweighted Average** — averaging group means without considering group size.",
        "**Ratio Reversal** — using 5:3 instead of 3:5.",
        "**Data Extraction Error** — reading the wrong row or year.",
        "**Premature Calculation** — starting arithmetic before identifying what the question actually asks.",
      ],
    },
    { type: "heading", id: "better-strategy", text: "A Better Solving Strategy" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Identify the question** — what quantity is being requested?",
        "**Extract only relevant data** — ignore decorative numbers.",
        "**Identify the relationship** — percentage, ratio, rate, difference, or average?",
        "**Estimate** — what range should the answer fall in?",
        "**Calculate and check units** — does the result make practical sense?",
      ],
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — primary score.",
        "**Percentages** — performance on percent change and percentage calculations.",
        "**Ratios and Proportions** — relationship reasoning.",
        "**Rates** — unit-based quantitative reasoning.",
        "**Tables and Charts** — data interpretation.",
        "**Averages** — weighted and unweighted problems.",
        "**Error Profile** — most frequent problem type or mistake.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Numerical Reasoning Score?" },
    {
      type: "paragraph",
      text: "There is no universal score for a custom item bank. Performance depends on question difficulty, calculator policy, time limit, education, and item format. An 80% score does not mean \"investment-grade numerical intelligence,\" and it is not converted into an IQ score.",
    },
    { type: "heading", id: "can-improve", text: "Can Numerical Reasoning Improve?" },
    {
      type: "paragraph",
      text: "Yes. Performance can improve through arithmetic fluency, ratio understanding, graph reading, estimation, and practice recognizing common problem structures. Improvement does not make the test invalid — for practice-oriented users, improvement is the point.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does a Numerical Reasoning Test measure?",
          answer: "The ability to understand quantitative information and use it to solve applied problems.",
        },
        {
          question: "Is it just a math test?",
          answer: "No. Basic mathematics is required, but the central challenge is interpreting information and choosing the correct quantitative relationship.",
        },
        {
          question: "What topics are included?",
          answer: "Common topics include percentages, ratios, proportions, rates, averages, tables, charts, and basic probability.",
        },
        {
          question: "Can I use a calculator?",
          answer: "That depends on the test mode. The rule is stated before the test begins.",
        },
        {
          question: "Is numerical reasoning the same as numeracy?",
          answer: "They overlap strongly. Numeracy is a broader concept involving effective use of numbers in everyday decisions.",
        },
        {
          question: "Does numerical reasoning measure IQ?",
          answer: "It can correlate with broader cognitive ability, but this specialized test reports numerical reasoning rather than an IQ score.",
        },
        {
          question: "Can I improve my score?",
          answer: "Yes. Practice with ratios, percentages, data interpretation, estimation, and problem-selection strategies can improve performance.",
        },
      ],
    },
    { type: "heading", text: "The Hard Part Is Usually Choosing the Right Calculation" },
    {
      type: "paragraph",
      text: "Most numerical-reasoning questions do not require advanced mathematics. What makes them difficult is the layer before the calculation: which numbers matter? What relationship connects them? Which unit should the answer use? Does the result make sense? Once that structure is clear, the arithmetic is often straightforward. That is why numerical reasoning is best understood not as fast calculation, but as disciplined thinking with quantitative information.",
    },
  ],
};
