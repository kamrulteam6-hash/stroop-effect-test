import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "A workplace problem rarely arrives with four perfectly labeled choices: good, bad, best, worst. Instead, several responses may sound reasonable. The challenge is deciding which action is most effective in context.",
    },
    {
      type: "paragraph",
      text: "Take this free Situational Judgement Test (SJT) using realistic workplace scenarios involving teamwork, communication, priorities, professionalism, customer situations, conflict, responsibility, and judgment under pressure. Situational judgement is context-dependent — the best response should be based on the role, responsibilities, constraints, and behavioral standards built into the scenario, not marketed as a simple \"common sense test.\"",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Situational Judgement Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Read the scenario carefully.",
        "Identify your role in the situation.",
        "Notice what authority and information you actually have.",
        "Consider the likely consequences of each response.",
        "Separate immediate action from longer-term follow-up.",
        "Choose the most effective response, or rate each response if instructed.",
        "Avoid inventing facts not given in the scenario.",
      ],
    },
    {
      type: "paragraph",
      text: "The question is not \"what would make me look nicest?\" It is \"what response best addresses this situation while respecting the role and constraints?\"",
    },
    { type: "heading", id: "what-is", text: "What Is a Situational Judgement Test?" },
    {
      type: "paragraph",
      text: "A **Situational Judgement Test**, often shortened to SJT, presents a realistic scenario and asks you to evaluate possible responses. Research descriptions commonly define SJTs as assessments in which examinees review hypothetical situations and choose or rate how they would respond. SJTs have been used in employee selection, professional education, healthcare admissions, leadership development, and public-sector assessment — sometimes called low-fidelity simulations because they represent job situations without recreating the full job environment.",
    },
    { type: "heading", id: "what-does-it-measure", text: "What Does an SJT Measure?" },
    {
      type: "paragraph",
      text: "There is no single answer. An SJT can be designed to assess procedural knowledge, interpersonal judgment, teamwork, professionalism, leadership, conflict management, conscientious behavior, or safety judgment. This is why an SJT should not automatically produce one universal \"judgment ability\" score — the construct depends on scenario content, response options, scoring method, and job context. Research has repeatedly noted that SJTs are multidimensional: the same format can measure different attributes depending on what is built into the items.",
    },
    { type: "heading", id: "not-just-common-sense", text: "Situational Judgement Is Not Just Common Sense" },
    {
      type: "paragraph",
      text: "It is tempting to describe an SJT as \"a test of common sense.\" That is too vague. Industrial-organizational psychology commentary has specifically warned against equating SJTs with common sense. A response that is effective for a nurse, a manager, a trainee, or a customer-service employee may differ because their authority and professional responsibilities differ — good judgment depends on understanding the situation and role.",
    },
    { type: "heading", id: "role-matters", text: "Role Matters" },
    {
      type: "paragraph",
      text: "If you notice a colleague has made a potentially serious error, the best action depends on whether you can correct it, whether safety is involved, whether the colleague is present, whether escalation is required, and what authority you have. A junior employee and a department director may not have identical options — every scenario in this test makes your role clear.",
    },
    { type: "heading", id: "context-matters", text: "Context Matters" },
    {
      type: "paragraph",
      text: "Small contextual details can change the best response. \"Immediately issue a refund\" may be excellent if the employee is authorized, or inappropriate if company policy requires supervisor approval. A good SJT item provides enough context to distinguish the alternatives — otherwise scoring becomes arbitrary.",
    },
    { type: "heading", id: "best-worst", text: "Best and Worst Response" },
    {
      type: "paragraph",
      text: "A common item format asks which response is MOST effective and which is LEAST effective, forcing discrimination among plausible alternatives. If a teammate repeatedly misses deadlines, publicly criticizing them, privately discussing the issue, ignoring it indefinitely, and immediately reporting misconduct without checking circumstances are all possible responses — in many ordinary teamwork contexts, the private discussion is likely strongest because it addresses the issue directly and proportionately. Scenarios are written so the scoring rationale is clear.",
    },
    { type: "heading", id: "rating-effectiveness", text: "Rating Response Effectiveness" },
    {
      type: "paragraph",
      text: "Another format asks you to rate each action as Very Effective, Effective, Ineffective, or Very Ineffective. This captures more information than one best-answer selection, but creates scoring complexity, since several responses can be partly effective — the test needs a defensible reference key rather than pretending every scenario has one morally obvious answer.",
    },
    { type: "heading", id: "how-scored", text: "How Should SJT Answers Be Scored?" },
    {
      type: "paragraph",
      text: "This is one of the most important design questions. Common approaches include subject-matter-expert consensus, empirical scoring, theory-based scoring, and distance from expert ratings. A practical starting approach: define the target competency, write scenarios from that competency, have multiple knowledgeable reviewers rate response effectiveness, revise items with weak agreement, and validate scoring against relevant criteria before making strong claims. An answer key should never be based on only one writer's personal preference.",
    },
    { type: "heading", id: "subject-matter-experts", text: "Subject-Matter Experts" },
    {
      type: "paragraph",
      text: "A **subject-matter expert (SME)** understands the work context well enough to judge what effective behavior looks like. For a general workplace SJT, SMEs can include experienced managers, HR professionals, team leaders, and organizational psychologists. Multiple reviewers are better than one — disagreement can reveal that a scenario is underspecified.",
    },
    { type: "heading", id: "plausible-distractors", text: "Why Plausible Distractors Matter" },
    {
      type: "paragraph",
      text: "An SJT becomes useless when three choices are absurd — screaming at everyone or destroying equipment makes the answer obvious. Strong SJT options are all believable actions that differ in timing, proportionality, communication, escalation, and completeness. You have to compare trade-offs, not spot the villain.",
    },
    { type: "heading", id: "avoid-moral-caricatures", text: "Avoid Moral Caricatures" },
    {
      type: "paragraph",
      text: "Situational judgment is not measured well by asking users to choose between an honest professional and an obvious villain. Real workplace judgment is more subtle — two actions may both be reasonable, and the better one may address the problem sooner, gather missing information, reduce unnecessary conflict, or escalate at the appropriate level. That creates meaningful discrimination.",
    },
    { type: "heading", id: "sjt-validity", text: "SJT Validity" },
    {
      type: "paragraph",
      text: "Research has found that SJTs can show useful criterion-related validity, but results vary by construct, scoring, context, criterion, and item design. A 2023 study reviewing constructed-response SJTs discussed prior systematic reviews finding moderate validity in some selection contexts, while other research has found weaker prediction in specific applications. The responsible conclusion: SJTs can be useful assessment tools when carefully designed and validated, but the format itself does not guarantee validity.",
    },
    { type: "heading", id: "vs-general-aptitude", text: "SJT vs. General Aptitude Test" },
    {
      type: "paragraph",
      text: "Our [General Aptitude Test](/test/general-aptitude-test) measures abilities such as verbal, numerical, abstract, spatial, and clerical. The SJT focuses on judgment in context — it may draw on cognitive ability, but it also depends on procedural knowledge, social understanding, and experience. The scores are kept separate.",
    },
    { type: "heading", id: "response-explanations", text: "Response Explanations" },
    {
      type: "paragraph",
      text: "Every scenario explains why the preferred response is strong and what limitation each weaker response has — for example, \"this response addresses the colleague directly, gathers information before escalating, and keeps the issue focused on completing the work,\" rather than just \"correct answer: B.\" That shows the scoring has a reason, which is more educational.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall SJT Accuracy** — agreement with the scoring key.",
        "**Teamwork** — collaboration and coordination scenarios.",
        "**Communication** — clarity and interpersonal response.",
        "**Prioritization** — urgency and workload judgment.",
        "**Professionalism** — responsibility and appropriate conduct.",
        "**Conflict Management** — proportional response to disagreement.",
        "**Customer/Stakeholder Judgment** — handling service or expectation problems.",
      ],
    },
    { type: "heading", id: "can-employers-use", text: "Can Employers Use This Free Score?" },
    {
      type: "paragraph",
      text: "Not as a validated selection result by default. Employment use requires stronger evidence than a public practice tool — a high-stakes SJT should be supported by job analysis, competent item development, defensible scoring, reliability evidence, validity evidence, and fairness review. This page provides practice and education, not a claim of universal hiring validity.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is a Situational Judgement Test?",
          answer: "An assessment that presents realistic scenarios and asks users to choose, rank, or rate possible responses.",
        },
        {
          question: "Is an SJT a common sense test?",
          answer: "No. Judgment depends on context, role, constraints, and the competency being assessed.",
        },
        {
          question: "What do SJTs measure?",
          answer: "They can measure procedural knowledge, teamwork, professionalism, interpersonal judgment, leadership, or other attributes depending on design.",
        },
        {
          question: "How are correct SJT answers determined?",
          answer: "Well-developed tests often use subject-matter experts, empirical data, theory, or combinations of these approaches.",
        },
        {
          question: "Is the \"best\" response always obvious?",
          answer: "It should be defensible, but good items often contain several plausible options.",
        },
        {
          question: "Can SJTs predict job performance?",
          answer: "They can show useful validity in some contexts, but predictive strength varies and is not perfect.",
        },
        {
          question: "Can I practice for an SJT?",
          answer: "Yes. Practice can improve familiarity with contextual decision making and response comparison.",
        },
      ],
    },
    { type: "heading", text: "Good Judgment Starts With the Situation" },
    {
      type: "paragraph",
      text: "There is no response that is always correct. \"Speak up immediately\" can be excellent in one situation and reckless in another. \"Ask for more information\" can be thoughtful in one situation and dangerous delay in another. So before choosing an answer, ask: what is happening? What is my role? What matters most right now? What happens if I choose this action? Situational judgment begins when the response fits the situation — not when it merely sounds good.",
    },
  ],
};
