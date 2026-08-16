import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "A chart can contain dozens of numbers and still ask only one question: what does the data actually show?",
    },
    {
      type: "paragraph",
      text: "Take this free Data Interpretation Test using tables, bar charts, line graphs, stacked charts, percentages, rates, comparisons, trends, and multi-step data questions. The challenge is not advanced mathematics — it is finding the relevant information, reading the display correctly, and drawing a conclusion that the data really supports.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Data Interpretation Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Read the chart title.",
        "Check the axes, units, categories, and time period.",
        "Read the question before calculating.",
        "Locate only the data needed.",
        "Compare values carefully.",
        "Calculate a difference, percentage, ratio, or average when required.",
        "Check whether the answer describes the data accurately.",
      ],
    },
    {
      type: "paragraph",
      text: "Do not begin calculating before you know what the graph is measuring. Many data-interpretation errors are reading errors, not arithmetic errors.",
    },
    { type: "heading", id: "what-is", text: "What Is Data Interpretation?" },
    {
      type: "paragraph",
      text: "**Data interpretation** is the ability to extract meaning from quantitative information presented in structured forms such as tables, charts, graphs, and dashboards. You may need to find an exact value, compare groups, calculate change, identify a trend, combine information, or determine what conclusion is justified. This overlaps with numerical reasoning and graph literacy, but the emphasis is the representation of data — you must understand both the numbers and how the display encodes them.",
    },
    { type: "heading", id: "graph-literacy", text: "Graph Literacy" },
    {
      type: "paragraph",
      text: "Research uses the term **graph literacy** for the ability to understand information presented graphically. A widely cited scale developed by Mirta Galesic and Rocio Garcia-Retamero measured graph understanding in nationally representative samples in the United States and Germany, showing meaningful individual differences in graph literacy and finding that not everyone benefits equally from graphical displays. A graph is not automatically easier than a table — it has to be read correctly.",
    },
    { type: "heading", id: "three-levels", text: "Three Levels of Graph Understanding" },
    {
      type: "paragraph",
      text: "Graph-comprehension research often distinguishes three useful levels. **Read the data** means extracting information directly, like what sales revenue was in March. **Read between the data** means comparing or combining values, like how much higher March revenue was than February revenue. **Read beyond the data** means drawing an inference or prediction supported by the pattern, like which product shows the most consistent upward trend. These levels structure this test — difficulty increases from extraction to relationships to evidence-based inference.",
    },
    { type: "heading", id: "read-title-first", text: "Read the Title First" },
    {
      type: "paragraph",
      text: "The title defines what the visualization represents. A graph titled \"Percentage of Customers Who Renewed\" with a bar at 80 means 80% renewed — it does not mean 80 customers unless the graph says so. Ignoring the title is one of the fastest ways to answer the wrong question correctly, so this test trains you to identify the measure before interpreting values.",
    },
    { type: "heading", id: "units-matter", text: "Units Matter" },
    {
      type: "paragraph",
      text: "A chart can display dollars, thousands of dollars, millions of dollars, percentage, number of people, or a rate per 100,000. If the vertical axis says \"Revenue ($ millions)\" and the bar reaches 4.2, the value is $4.2 million — not $4.20 and not $4,200. Data interpretation requires combining the axis value with the unit.",
    },
    { type: "heading", id: "truncated-axes", text: "Truncated Axes" },
    {
      type: "paragraph",
      text: "A bar chart does not always begin at zero. If Candidate A has 48% and Candidate B has 52%, but the vertical axis begins at 47%, the second bar may appear many times taller — the numerical difference remains 4 percentage points. This test includes a few axis-reading questions because real-world charts often use restricted scales, but the goal is to teach careful reading, not to trick users with invisible labels.",
    },
    { type: "heading", id: "percentage-vs-points", text: "Percentage vs. Percentage Points" },
    {
      type: "paragraph",
      text: "Suppose customer satisfaction rises from 60% to 75%. The absolute change is 15 percentage points, but the relative percentage increase is 25%, because (75 − 60) ÷ 60 = 0.25. Data interpretation often requires knowing which of these the question asks — the chart itself may contain percentages while the question asks for relative change.",
    },
    { type: "heading", id: "tables", text: "Tables" },
    {
      type: "paragraph",
      text: "Tables are powerful when exact values matter. You may need to locate the correct row, locate the correct column, compare years, or calculate a difference. Tables can become difficult when many rows are visually similar — this test avoids highlighting that would reveal the answer during the scored questions.",
    },
    { type: "heading", id: "multi-column", text: "Multi-Column Tables" },
    {
      type: "paragraph",
      text: "Harder tasks may require combining fields — given revenue, cost, and units sold, which region had the greatest profit per unit? You must calculate profit (revenue − cost), divide by units, and compare regions. This is deeper than reading one cell, but the calculation stays manageable so the task does not become an advanced accounting exam.",
    },
    { type: "heading", id: "trend-vs-fluctuation", text: "Trend vs. Fluctuation" },
    {
      type: "paragraph",
      text: "A series like 100, 104, 102, 108, 111 has short-term declines, but the overall pattern is still upward. A strong data interpreter distinguishes a general trend from every point moving in the same direction — this matters in finance, science, health, and business reporting. One downward point does not automatically erase an upward long-term trend.",
    },
    { type: "heading", id: "correlation-in-chart", text: "Correlation in a Chart" },
    {
      type: "paragraph",
      text: "A scatterplot may show that two variables tend to increase together — that is evidence of an association, not automatically evidence that one causes the other. Our [Critical Thinking Test](/test/critical-thinking-test) covers this concept more broadly. Data Interpretation asks the narrower question: what relationship is visible in the chart? The best answer describes positive association, negative association, or little visible association — without inventing a causal story.",
    },
    { type: "heading", id: "denominators", text: "Denominators" },
    {
      type: "paragraph",
      text: "Percentages can be misleading if group sizes differ. Team A has an 80% success rate among 10 cases (8 successes); Team B has a 70% success rate among 100 cases (70 successes). Team A has the higher rate, but Team B has more total successes — the correct answer depends on the question. A good data interpreter notices the denominator behind a percentage.",
    },
    { type: "heading", id: "vs-numerical-reasoning", text: "Data Interpretation vs. Numerical Reasoning" },
    {
      type: "paragraph",
      text: "Our [Numerical Reasoning Test](/test/numerical-reasoning-test) emphasizes quantitative problem solving across percentages, ratios, rates, and word problems. Data Interpretation emphasizes understanding information embedded in tables, graphs, charts, and dashboards. Numerical Reasoning asks which calculation solves the quantitative problem; Data Interpretation asks what the representation shows and which numbers answer the question. Calculation overlaps, but the search intent and visual task differ.",
    },
    { type: "heading", id: "vs-critical-thinking", text: "Data Interpretation vs. Critical Thinking" },
    {
      type: "paragraph",
      text: "Critical Thinking asks whether an argument's evidence supports its conclusion. Data Interpretation asks what the displayed data itself supports. The two meet when a chart is used to make a claim — \"sales doubled\" is supported if the data show 100 → 200, but \"sales doubled because of our advertising\" requires causal evidence not shown by the two sales values alone.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — primary score.",
        "**Reading the Data** — direct value extraction.",
        "**Comparing Data** — differences, ratios, and rankings.",
        "**Trend Interpretation** — changes across time or ordered conditions.",
        "**Tables** — row-column extraction and multi-field reasoning.",
        "**Charts** — bar, line, stacked, and other visual displays.",
        "**Inference** — conclusions supported by the data.",
      ],
    },
    { type: "heading", id: "common-errors", text: "Common Data Interpretation Errors" },
    {
      type: "list",
      items: [
        "**Wrong Unit** — reading thousands as single units.",
        "**Wrong Axis** — using the x-axis value as the y-axis value.",
        "**Wrong Series** — reading the blue line when the question asks about the dashed line.",
        "**Percentage Confusion** — mixing percentage points with relative percentage change.",
        "**Denominator Neglect** — comparing percentages without checking group size.",
        "**Visual-Only Judgment** — choosing the tallest-looking bar without reading the scale.",
        "**Unsupported Causation** — turning an observed relationship into a causal claim.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Data Interpretation Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for an original browser test. Performance depends on graph types, calculations, time pressure, visual complexity, education, and item difficulty — score bands are not copied from graduate recruitment assessments or standardized graph-literacy scales.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is a Data Interpretation Test?",
          answer: "A test of how accurately you can extract, compare, calculate from, and draw conclusions from tables, charts, and graphs.",
        },
        {
          question: "Is it the same as numerical reasoning?",
          answer: "No. They overlap, but Data Interpretation places greater emphasis on understanding quantitative displays.",
        },
        {
          question: "What is graph literacy?",
          answer: "The ability to understand and use information presented in graphs.",
        },
        {
          question: "Why do graph axes matter?",
          answer: "The axis determines the scale and units. A truncated or unusual scale can make visual differences look larger or smaller.",
        },
        {
          question: "Is a percentage-point increase the same as percentage increase?",
          answer: "No. A rise from 20% to 25% is 5 percentage points but a 25% relative increase.",
        },
        {
          question: "Does correlation in a chart prove causation?",
          answer: "No. It describes an association unless additional evidence supports causality.",
        },
        {
          question: "Can practice improve data interpretation?",
          answer: "Yes. Systematic checking of titles, units, axes, legends, and denominators can substantially reduce mistakes.",
        },
      ],
    },
    { type: "heading", text: "Read the Display Before You Read a Story Into It" },
    {
      type: "paragraph",
      text: "Data can support strong conclusions, but only when the display is read correctly. Start with what is being measured, then the units, then which values answer the question — only after that should you calculate or interpret. Good data interpretation is not about seeing a graph and instantly having an opinion. It is about extracting exactly what the evidence shows, and stopping where the evidence stops.",
    },
  ],
};
