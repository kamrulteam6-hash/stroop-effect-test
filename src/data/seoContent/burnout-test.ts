import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Burnout is more specific than \"I am tired.\" It refers to a pattern linked to chronic stress in the occupational context.",
    },
    {
      type: "paragraph",
      text: "Take this free Burnout Test to reflect on whether work has become associated with exhaustion, depletion, difficulty recovering, and emotional wear. This page uses a defensible burnout framework and avoids presenting burnout as a medical diagnosis.",
    },
    { type: "heading", id: "what-is-burnout", text: "What Is Burnout?" },
    {
      type: "paragraph",
      text: "The World Health Organization includes burn-out in ICD-11 as an **occupational phenomenon**. WHO explicitly states that burnout is not classified as a medical condition. In ICD-11, burnout results from chronic workplace stress that has not been successfully managed, with three broad features: feelings of energy depletion or exhaustion; increased mental distance from one's job, or negativism/cynicism related to the job; and reduced professional efficacy. The occupational part matters — a person can feel exhausted from caregiving, illness, or life stress without that experience automatically being occupational burnout under the ICD-11 definition.",
    },
    { type: "heading", id: "chronic-work-stress", text: "Burnout Is About Chronic Work Stress" },
    {
      type: "paragraph",
      text: "One hard week is not necessarily burnout. Burnout usually develops through sustained mismatch between demands, resources, and recovery — relentless workload, chronic understaffing, lack of control, role conflict, emotional demands, poor support, or values conflict. The individual matters, but the workplace context matters too — a Burnout Test should not imply that burnout means someone failed to manage themselves properly. Organizational conditions can be major contributors.",
    },
    { type: "heading", id: "exhaustion", text: "Exhaustion" },
    {
      type: "paragraph",
      text: "Exhaustion is the most intuitive burnout feature — waking already tired, using unusual effort to begin work, ending work depleted, needing longer to recover, or feeling emotionally drained. Exhaustion does not automatically mean burnout — it can also arise from sleep disorders, depression, medical illness, caregiving, or general stress. The occupational connection matters.",
    },
    { type: "heading", id: "cynicism", text: "Mental Distance and Cynicism" },
    {
      type: "paragraph",
      text: "Burnout can involve a growing emotional distance from work — \"I no longer care the way I used to,\" \"I feel detached from the people I serve,\" \"everything at work feels irritating,\" \"I have become cynical about the job.\" Cynicism is not simply having legitimate criticism of an employer — it is part of a broader change in relationship to the work.",
    },
    { type: "heading", id: "professional-efficacy", text: "Professional Efficacy" },
    {
      type: "paragraph",
      text: "WHO's third component concerns reduced professional efficacy — feeling ineffective, unproductive, or unable to make progress. A public Burnout Test should be careful here, since poor performance can have many causes, and a highly burned-out employee can continue producing excellent work for a while through extreme effort. Burnout is not measured well by \"did your output fall?\" alone.",
    },
    { type: "heading", id: "cbi", text: "The Copenhagen Burnout Inventory" },
    {
      type: "paragraph",
      text: "The **Copenhagen Burnout Inventory (CBI)** is a widely used public-domain burnout questionnaire developed by Kristensen and colleagues as an alternative to other burnout approaches. It contains 19 items organized into three dimensions: personal burnout, work-related burnout, and client-related burnout. Research has supported its reliability and validity across many populations, and because it is publicly available, it is a strong reference point for a free online burnout assessment. This test is an original, informal screener inspired by that three-dimension structure, using its own question set and scoring — it is not the CBI itself and does not apply CBI-published norms to a different questionnaire.",
    },
    { type: "heading", id: "personal-burnout", text: "Personal Burnout" },
    {
      type: "paragraph",
      text: "In the CBI framework, **personal burnout** refers broadly to physical and psychological fatigue and exhaustion, without requiring the exhaustion to be attributed only to work. That can help show whether exhaustion is general or especially linked to work — a user might score high on personal exhaustion but much lower on work-related burnout, which suggests caution before assuming work is the only source.",
    },
    { type: "heading", id: "work-related-burnout", text: "Work-Related Burnout" },
    {
      type: "paragraph",
      text: "**Work-related burnout** asks how much fatigue and exhaustion the person attributes to work — feeling emotionally exhausting, being worn out at the end of the workday, or needing substantial recovery. This is especially relevant to the WHO occupational framing, and the result makes work-related burnout the central interpretation.",
    },
    { type: "heading", id: "client-related-burnout", text: "Client-Related Burnout" },
    {
      type: "paragraph",
      text: "Some jobs involve intensive work with patients, students, customers, or clients. The CBI includes a client-related burnout dimension for exhaustion attributed to this people-facing work — someone in a back-office or non-client role can mark this section not applicable without being penalized.",
    },
    { type: "heading", id: "cbi-vs-mbi", text: "CBI vs. Maslach Burnout Inventory" },
    {
      type: "paragraph",
      text: "The **Maslach Burnout Inventory (MBI)** is one of the best-known burnout measures, assessing dimensions such as exhaustion, cynicism/depersonalization, and professional efficacy/accomplishment depending on the version. However, the MBI is a commercial copyrighted instrument distributed by Mind Garden — this site does not copy its items without appropriate licensing. The CBI is a more practical open reference point for this test's construct coverage.",
    },
    { type: "heading", id: "no-fake-cutoffs", text: "Do Not Invent MBI Cutoffs" },
    {
      type: "paragraph",
      text: "Mind Garden itself warns against simplistic burnout cutoffs for the MBI — burnout is better understood dimensionally. This is another reason this page does not publish \"you scored 70, therefore you have clinical burnout.\" Burnout is not a formal medical diagnosis in ICD-11 — a result describes lower, moderate, or higher burnout-related exhaustion, supported by the chosen scoring method rather than a borrowed cutoff.",
    },
    { type: "heading", id: "vs-stress", text: "Burnout vs. Stress" },
    {
      type: "paragraph",
      text: "Stress can come from any life domain. Burnout is occupational in WHO's ICD-11 definition. Someone may have high stress due to divorce, caregiving, or finances while still feeling engaged and effective at work; another person may have moderate total life stress but severe work exhaustion. Our [Stress Test](/test/stress-test) and this Burnout Test remain separate.",
    },
    { type: "heading", id: "vs-depression", text: "Burnout vs. Depression" },
    {
      type: "paragraph",
      text: "Burnout and depression can overlap — both may involve exhaustion, concentration difficulty, reduced motivation, and sleep problems. But depression is a mood disorder that can affect life broadly, while burnout is tied to the occupational context. A person whose low mood, loss of interest, hopelessness, and impairment extend well beyond work may need evaluation for depression or another condition rather than assuming everything is burnout. Our [Depression Test](/test/depression-test) provides a separate screening pathway.",
    },
    { type: "heading", id: "vs-fatigue", text: "Burnout vs. Ordinary Fatigue" },
    {
      type: "paragraph",
      text: "Fatigue after a demanding day is normal. Burnout is more persistent — questions focus on repeated exhaustion, inadequate recovery, and long-standing work strain, rather than one terrible afternoon, using a clearly defined recent time frame.",
    },
    { type: "heading", id: "recovery-matters", text: "Recovery Matters" },
    {
      type: "paragraph",
      text: "One useful question is: do I recover when I am away from work? If energy returns during evenings, weekends, or vacation, the pattern may differ from exhaustion that persists across all contexts. This is not diagnostic, but it can help you think about whether work is the primary source.",
    },
    { type: "heading", id: "workload-not-only-driver", text: "Workload Is Not the Only Driver" },
    {
      type: "paragraph",
      text: "Research on burnout and workplace conditions often examines workload, control, reward, community, fairness, and values. Two employees working the same hours may experience very different burnout depending on autonomy, support, conflict, meaning, and role clarity — a strong result page asks users to explore possible workplace contributors rather than only telling them to rest more.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Personal Burnout** — general exhaustion.",
        "**Work-Related Burnout** — exhaustion attributed to work.",
        "**Client-Related Burnout** — exhaustion related to client/patient/customer-facing work when relevant.",
        "**Context Summary** — whether work-related exhaustion appears stronger than general exhaustion.",
        "**Disclaimer** — burnout is an occupational phenomenon, not a medical diagnosis.",
      ],
    },
    { type: "heading", id: "high-score", text: "What Does a High Burnout Score Mean?" },
    {
      type: "paragraph",
      text: "A high score suggests substantial exhaustion or strain on this measure. It does not identify the exact cause, whether depression is present, whether a medical condition is contributing, or whether leaving a job is necessary. It is a signal to examine workload, recovery, control, support, job demands, and mental and physical health.",
    },
    { type: "heading", id: "what-can-help", text: "What Can Help With Burnout?" },
    {
      type: "paragraph",
      text: "The best response depends on the cause — workload, scheduling, boundaries, staffing, role clarity, social support, recovery, sleep, autonomy, and workplace fairness are all worth examining. If symptoms are severe, persistent, or affecting health and daily life, professional support can help assess whether burnout, depression, anxiety, sleep problems, or another condition is involved.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "Is burnout a medical diagnosis?",
          answer: "WHO classifies burnout as an occupational phenomenon, not a medical condition.",
        },
        {
          question: "Is burnout the same as stress?",
          answer: "No. Stress can occur in any life domain; burnout is tied specifically to chronic workplace stress in the ICD-11 framework.",
        },
        {
          question: "Is burnout the same as depression?",
          answer: "No, although symptoms can overlap and both may occur together.",
        },
        {
          question: "What is the Copenhagen Burnout Inventory?",
          answer: "A public-domain questionnaire measuring personal, work-related, and client-related burnout.",
        },
        {
          question: "Can I use the Maslach Burnout Inventory on a free website?",
          answer: "The MBI is a commercial copyrighted instrument and requires appropriate licensing for use.",
        },
        {
          question: "Can burnout improve?",
          answer: "Yes, but the most effective changes depend on whether the drivers involve workload, control, support, recovery, organizational conditions, or other health factors.",
        },
      ],
    },
    { type: "heading", text: "Burnout Is Not Proof That You Need to Become More Resilient" },
    {
      type: "paragraph",
      text: "Sometimes the problem is not \"how can I tolerate more?\" It is \"why has this work become chronically exhausting?\" A useful Burnout Test directs attention toward that question. Burnout sits at the intersection of the person and the work environment — understanding both sides is more useful than blaming either one alone.",
    },
  ],
};
