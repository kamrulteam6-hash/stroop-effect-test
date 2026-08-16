import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Cognitive ability is not one task. It is the collection of mental capacities you use to reason, remember, process information, understand language, work with numbers, and solve spatial problems.",
    },
    {
      type: "paragraph",
      text: "Take this free Cognitive Ability Test to build a broad profile across several cognitive domains. Instead of reducing everything immediately to one IQ-style number, this test shows where your performance is strongest and where it is relatively weaker.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Cognitive Ability Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Complete each section in order.",
        "Read the instructions when the task type changes.",
        "Work accurately before trying to maximize speed.",
        "Do not use external notes or calculators unless the section permits them.",
        "Finish all domains for the most complete profile.",
        "Review both overall and section-level results.",
      ],
    },
    {
      type: "paragraph",
      text: "A broad battery is only interpretable if you actually complete the different types of tasks. Skipping a section and still expecting a meaningful domain score would be misleading.",
    },
    { type: "heading", id: "what-is-cognitive-ability", text: "What Is Cognitive Ability?" },
    {
      type: "paragraph",
      text: "A **cognitive ability** is a mental capability involved in processing information successfully — reasoning through a new problem, holding information in mind, retrieving learned knowledge, making quick simple decisions, interpreting visual relationships, and understanding quantitative information.",
    },
    {
      type: "paragraph",
      text: "Psychometric research consistently shows that cognitive abilities are related but not identical. That means two things can be true at once: people who perform well in one domain often perform relatively well in others, and individuals can still show meaningful strengths and weaknesses across specific abilities.",
    },
    { type: "heading", id: "chc-model", text: "The CHC Model of Cognitive Abilities" },
    {
      type: "paragraph",
      text: "One of the most influential frameworks for organizing cognitive abilities is the **Cattell–Horn–Carroll model**, commonly called CHC theory. CHC models abilities hierarchically. At the top is a broad general factor often called **g**. Below it are broad abilities such as fluid reasoning, comprehension-knowledge, visual processing, working memory, processing speed, quantitative knowledge, auditory processing, and retrieval fluency. Below those broad domains are narrower skills measured by individual tasks.",
    },
    {
      type: "paragraph",
      text: "A browser battery cannot represent every CHC ability equally well, but the framework is useful because it prevents this test from pretending \"cognition\" means one reaction-time score.",
    },
    { type: "heading", id: "general-vs-specific", text: "General vs. Specific Cognitive Abilities" },
    {
      type: "paragraph",
      text: "Consider two users who receive similar overall composite scores. User A has strong verbal reasoning, average spatial performance, and weaker processing speed. User B has strong spatial reasoning, average speed, and weaker verbal performance. Their total scores may match — their cognitive profiles do not. This is why the Cognitive Ability Test prioritizes **subscores** alongside any overall composite.",
    },
    { type: "heading", id: "fluid-reasoning", text: "Fluid Reasoning" },
    {
      type: "paragraph",
      text: "**Fluid reasoning** involves solving unfamiliar problems: matrices, analogical relationships, rule induction, logical sequences, and novel constraints. The important feature is that the solution cannot be obtained by simply recalling one memorized fact. Fluid reasoning is closely related to broader intelligence, but it is not identical to working memory or processing speed.",
    },
    { type: "heading", id: "working-memory", text: "Working Memory" },
    {
      type: "paragraph",
      text: "**Working memory** involves maintaining information while using or updating it. Example: remember 7 – 2 – 9, then report the numbers in reverse order. That requires more than simple storage — you must preserve the items and transform their order. Other tasks may require updating a running sequence, remembering locations, or performing mental operations while retaining information. A cognitive battery should use a genuine working-memory task rather than infer working memory from a general reasoning score.",
    },
    { type: "heading", id: "processing-speed", text: "Processing Speed" },
    {
      type: "paragraph",
      text: "**Processing speed** refers to how efficiently a person can perform relatively simple cognitive operations under time pressure — symbol matching, visual comparison, simple coding, and rapid scanning. Processing speed is not the same as complex reasoning. A user may solve difficult logic problems accurately while working relatively slowly, while another may be extremely fast on simple comparisons but less successful on multi-step reasoning. The result keeps these domains separate.",
    },
    { type: "heading", id: "verbal-ability", text: "Verbal Ability" },
    {
      type: "paragraph",
      text: "Verbal cognitive tasks can involve vocabulary, analogies, verbal relationships, sentence reasoning, and understanding concepts. Some verbal tasks rely heavily on **crystallized knowledge** — what has been learned through language and education. Others involve more fluid verbal reasoning. Language background matters: a non-native English speaker should not have their entire cognitive profile defined by English vocabulary performance.",
    },
    { type: "heading", id: "numerical-ability", text: "Numerical Ability" },
    {
      type: "paragraph",
      text: "Numerical cognitive tasks can include arithmetic relationships, number sequences, proportional reasoning, and interpreting quantitative information. This should not be confused with the dedicated [Numerical Reasoning Test](/test/numerical-reasoning-test). In the broad cognitive battery, numerical ability is one domain; the specialized page goes much deeper into ratios, percentages, tables, charts, and applied quantitative reasoning.",
    },
    { type: "heading", id: "spatial-ability", text: "Spatial Ability" },
    {
      type: "paragraph",
      text: "Spatial ability includes several related skills: mental rotation, spatial relations, visualization, and perspective taking. The Cognitive Ability Test uses a short spatial section to estimate broad performance — for deeper testing, explore our other spatial and reasoning tools.",
    },
    { type: "heading", id: "cognitive-ability-and-g", text: "Cognitive Ability and g" },
    {
      type: "paragraph",
      text: "Broad cognitive batteries often produce a general factor because the individual tests correlate positively. That general factor can be useful, but it should not erase the profile. Current research continues to debate how much practical prediction comes from general cognitive ability versus specific abilities. For many outcomes, general ability predicts performance meaningfully; specific abilities can also matter depending on the task. Overall cognitive performance matters, and the pattern of specific abilities can also be informative.",
    },
    { type: "heading", id: "academic-performance", text: "Cognitive Ability and Academic Performance" },
    {
      type: "paragraph",
      text: "Cognitive ability is also associated with academic achievement. Reasoning, knowledge, working memory, and processing skills all contribute to learning. But school performance also depends on motivation, conscientiousness, teaching, attendance, prior knowledge, and socioeconomic opportunity. A cognitive score should not be interpreted as a fixed ceiling on what someone can learn.",
    },
    { type: "heading", id: "why-one-score-misleads", text: "Why One Total Cognitive Score Can Mislead" },
    {
      type: "paragraph",
      text: "Suppose a user is 90th percentile in reasoning, 85th percentile in working memory, and 40th percentile in processing speed. A single average hides that important pattern. The result therefore shows an overall composite plus a domain profile — if you want one headline number, you get it, but the chart or explanation immediately shows what contributed to it.",
    },
    { type: "heading", id: "cognitive-vs-iq", text: "Cognitive Ability Test vs. IQ Test" },
    {
      type: "paragraph",
      text: "The [IQ Test](/test/iq-test) emphasizes a norm-referenced overall intelligence estimate. The Cognitive Ability Test emphasizes the profile. IQ Test asks: what is my overall general reasoning score? Cognitive Ability Test asks: how do my reasoning, memory, speed, verbal, numerical, and spatial abilities compare with one another?",
    },
    { type: "heading", id: "cognitive-vs-aptitude", text: "Cognitive Ability Test vs. General Aptitude Test" },
    {
      type: "paragraph",
      text: "The [General Aptitude Test](/test/general-aptitude-test) is oriented more toward practical performance in education, hiring, and training, sampling abilities such as verbal, numerical, spatial, and clerical accuracy. Cognitive Ability is psychological in framing; General Aptitude is practical and prediction-oriented.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Cognitive Composite** — broad summary.",
        "**Fluid Reasoning** — novel problem solving.",
        "**Working Memory** — maintain and manipulate information.",
        "**Processing Speed** — fast accurate simple processing.",
        "**Verbal Ability** — language-based reasoning and knowledge.",
        "**Numerical Ability** — quantitative reasoning.",
        "**Spatial Ability** — visual-spatial relationships.",
      ],
    },
    { type: "heading", id: "diagnose", text: "Can This Diagnose Cognitive Impairment?" },
    {
      type: "paragraph",
      text: "No. A free browser battery cannot diagnose dementia, mild cognitive impairment, ADHD, brain injury, intellectual disability, or learning disorders. Clinical cognitive assessment requires standardized instruments, appropriate norms, history, and professional interpretation. A low online result may reflect fatigue, distraction, language, device issues, or unfamiliarity.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does a Cognitive Ability Test measure?",
          answer: "A broad set of mental abilities such as reasoning, memory, processing speed, verbal, numerical, and spatial performance.",
        },
        {
          question: "Is cognitive ability the same as IQ?",
          answer: "They overlap strongly. IQ usually refers to a standardized overall intelligence score, while cognitive ability can refer to both general and specific mental capacities.",
        },
        {
          question: "What is fluid reasoning?",
          answer: "Solving unfamiliar problems without relying mainly on memorized knowledge.",
        },
        {
          question: "Is processing speed the same as intelligence?",
          answer: "No. Processing speed is one cognitive ability that relates to broader performance but should be measured separately.",
        },
        {
          question: "Can I have a high overall score and one weaker domain?",
          answer: "Yes. Profiles can contain meaningful relative strengths and weaknesses.",
        },
        {
          question: "Does a cognitive test predict success?",
          answer: "Cognitive ability relates to academic and workplace outcomes, but success also depends on motivation, personality, knowledge, opportunity, and many other factors.",
        },
        {
          question: "Can this diagnose dementia or another condition?",
          answer: "No. It is an educational online assessment, not a clinical diagnostic battery.",
        },
      ],
    },
    { type: "heading", text: "Your Cognitive Profile Is More Useful Than One Label" },
    {
      type: "paragraph",
      text: "The most interesting result may not be your highest score — it may be the difference between domains. Perhaps you reason exceptionally well but prefer more time. Perhaps you process simple information rapidly but struggle when working memory becomes overloaded. A broad Cognitive Ability Test turns those differences into a profile, which is more informative than pretending every part of cognition can be described by one number.",
    },
  ],
};
