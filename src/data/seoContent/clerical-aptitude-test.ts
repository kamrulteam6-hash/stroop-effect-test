import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Clerical work often looks simple from the outside. The difficulty appears when dozens of small tasks must be completed quickly, accurately, and in the correct order.",
    },
    {
      type: "paragraph",
      text: "Take this free Clerical Aptitude Test using practical office-information tasks involving alphabetization, numerical filing, record checking, code comparison, basic data handling, form accuracy, simple office arithmetic, and ordering and classification. This is a broad clerical battery, not another Error Checking Test.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Clerical Aptitude Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Read the rule for each clerical section.",
        "Work accurately before increasing speed.",
        "Follow alphabetic or numeric order exactly.",
        "Check source records carefully.",
        "Use the specified filing convention.",
        "Complete simple calculations only when required.",
        "Move steadily through timed sections.",
      ],
    },
    {
      type: "paragraph",
      text: "Different sections measure different abilities — do not combine them blindly without considering item difficulty and timing.",
    },
    { type: "heading", id: "what-is", text: "What Is Clerical Aptitude?" },
    {
      type: "paragraph",
      text: "**Clerical aptitude** refers to abilities that support accurate and efficient handling of office information — checking details, organizing records, sorting, filing, coding, copying, basic numerical work, and following administrative rules. Historically, clerical aptitude testing has included abilities such as clerical perception — quickly and accurately noticing differences in printed material. Modern clerical work often happens digitally rather than on paper, but the underlying demands remain recognizable: find the right record, enter the right information, put it in the right place, notice when something is wrong.",
    },
    { type: "heading", id: "broader-than-typing", text: "Clerical Aptitude Is Broader Than Typing" },
    {
      type: "paragraph",
      text: "Typing speed is useful in many office roles, but clerical aptitude is not the same as typing. A person can type 80 words per minute and still make frequent record-entry errors; another can type more slowly but organize and verify data extremely accurately. Our [Typing Speed Test](/test/typing-speed-test) measures keyboard production — this page measures broader information-handling ability.",
    },
    { type: "heading", id: "clerical-perception", text: "Clerical Perception" },
    {
      type: "paragraph",
      text: "Clerical perception is one traditional component of clerical aptitude. O*NET assessment documentation describes it as quickly and accurately seeing differences in detail in printed text and numbers, including mistakes in lists, tables, and numerical material. That construct fits tasks such as comparing names, checking codes, and detecting data-entry errors — though this page does not stop there, since our separate [Error Checking Test](/test/error-checking-test) already specializes in verification.",
    },
    { type: "heading", id: "alphabetical-filing", text: "Alphabetical Filing" },
    {
      type: "paragraph",
      text: "A classic clerical task is arranging records alphabetically — Adams, Adler, Adrian, Albright. The test may become harder with similar beginnings like MacDonald, Mackay, MacKenzie, Madden. A browser version defines its filing rules before the task, since not every organization uses identical rules for spaces, hyphens, prefixes, and punctuation. This test uses straightforward names and standard lexical order.",
    },
    { type: "heading", id: "numerical-filing", text: "Numerical Filing" },
    {
      type: "paragraph",
      text: "Records may also be sorted numerically, like 10245, 10254, 10302, 11001. The task is not difficult arithmetic — it is accurate ordering. Harder items can use decimal values, dates, reference codes, or grouped numbers, and ambiguous date formats are avoided unless the locale is clearly stated.",
    },
    { type: "heading", id: "alphanumeric-codes", text: "Alphanumeric Codes" },
    {
      type: "paragraph",
      text: "Real office systems often mix letters and numbers, like A-104, A-118, B-009, B-011. A question may ask which record belongs between A-104 and B-009 — you must understand the stated ordering rule. The test provides the convention explicitly rather than assuming one universal alphanumeric sort method.",
    },
    { type: "heading", id: "record-matching", text: "Record Matching" },
    {
      type: "paragraph",
      text: "Clerical tasks often require checking whether information in one record matches another — invoice number, customer ID, date, amount — where one field may differ. This overlaps with Error Checking, which is appropriate because verification is one genuine clerical skill. The distinction is scale: Error Checking is the specialist verification page, while this test includes verification as one section among several.",
    },
    { type: "heading", id: "forms", text: "Forms and Required Fields" },
    {
      type: "paragraph",
      text: "A clerical form may contain name, reference number, date, department, and amount, and you may be asked which required field is missing. This tests procedural attention. A more advanced item can provide a simple rule — \"forms above $500 require supervisor initials\" — then show several forms and ask which one is incomplete, adding clerical rule application to the task.",
    },
    { type: "heading", id: "under-time-pressure", text: "Alphabetization Under Time Pressure" },
    {
      type: "paragraph",
      text: "A user may know alphabetical order perfectly but make mistakes when many near-similar records appear. This is why clerical aptitude often includes both accuracy and speed. Easy content can become demanding when the task requires rapid, repeated decisions — not all speed should be interpreted as general intelligence, since clerical speed is a more specific performance demand.",
    },
    { type: "heading", id: "speeded-vs-untimed", text: "Speeded vs. Untimed Clerical Tasks" },
    {
      type: "paragraph",
      text: "Some sections are speeded, like code comparison. Others allow more time, like multi-rule filing. A useful design has timed clerical perception for rapid checking, accuracy filing for alphabetic/numeric organization, and practical records for forms and simple rules — producing a better profile than one uniform timer for every task.",
    },
    { type: "heading", id: "vs-error-checking", text: "Clerical Aptitude vs. Error Checking" },
    {
      type: "paragraph",
      text: "Our [Error Checking Test](/test/error-checking-test) is narrow — it asks whether a copy matches the source. Clerical Aptitude is broad — where should this record be filed, which code comes next, which field is missing, is this record accurate, which total is correct? Error checking belongs inside clerical aptitude but does not define the whole construct.",
    },
    { type: "heading", id: "vs-attention-to-detail", text: "Clerical Aptitude vs. Attention to Detail" },
    {
      type: "paragraph",
      text: "Our [Attention to Detail Test](/test/attention-to-detail-test) measures broad detection and accuracy performance. Clerical Aptitude places those abilities into an office-information context — a detail task may ask which symbol differs, while a clerical task may ask whether invoice 548291 matches the database record. The practical context is part of this page's search intent.",
    },
    { type: "heading", id: "vs-general-aptitude", text: "Clerical Aptitude vs. General Aptitude" },
    {
      type: "paragraph",
      text: "Our [General Aptitude Test](/test/general-aptitude-test) samples several domains — verbal, numerical, abstract, spatial, and clerical. This page expands the clerical domain — if you take General Aptitude and want deeper analysis of office-oriented tasks, this test goes further.",
    },
    { type: "heading", id: "onet-clerical", text: "O*NET and Clerical Work" },
    {
      type: "paragraph",
      text: "O*NET currently lists occupations such as file clerks, general office clerks, order clerks, and billing and posting clerks. These roles involve combinations of record maintenance, communication, filing, data handling, and transaction processing. That supports a broad task-based approach, but a public test should not claim that one score certifies someone for every clerical occupation — different jobs require different skill profiles.",
    },
    { type: "heading", id: "digital-clerical", text: "Digital Clerical Work" },
    {
      type: "paragraph",
      text: "Modern clerical tasks may involve spreadsheets, customer databases, scheduling systems, document management, and online forms. This test presents digital records, form fields, and sortable lists to feel current — the underlying skills are traditional while the interface is modern, rather than presenting clerical work as though it still consists only of paper filing.",
    },
    { type: "heading", id: "accuracy-vs-productivity", text: "Accuracy vs. Productivity" },
    {
      type: "paragraph",
      text: "A useful clerical result should not reward reckless speed. User A attempts 50 tasks and gets 49 correct; User B attempts 75 tasks and gets 52 correct. User B completed more, but nearly one-third of responses were wrong. In many clerical settings, errors create extra work or real consequences, so this test shows attempted, correct, accuracy, and correct per minute so users can see the trade-off.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Clerical Profile** — broad summary, not a clinical score.",
        "**Filing Accuracy** — alphabetic and numerical ordering.",
        "**Clerical Perception** — rapid detail comparison.",
        "**Record Verification** — source–copy accuracy.",
        "**Classification** — applying filing or coding rules.",
        "**Basic Numerical Accuracy** — simple office calculations.",
        "**Throughput** — correct tasks per minute.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Clerical Aptitude Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for an original online battery. Performance depends on section mix, time limit, typing demands, item difficulty, and filing rules — hiring cutoffs are not borrowed from GATB or another commercial instrument.",
    },
    { type: "heading", id: "can-employers-use", text: "Can Employers Use This Result?" },
    {
      type: "paragraph",
      text: "Not as a validated hiring decision by default. A selection test should be linked to actual job requirements and supported by evidence for reliability, validity, fairness, and administration consistency. This free tool can provide practice, self-assessment, and familiarization — it should not claim to replace a job-specific assessment program.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is a Clerical Aptitude Test?",
          answer: "A test of abilities involved in accurate and efficient office-information work, such as filing, coding, checking, and record handling.",
        },
        {
          question: "Is clerical aptitude just typing speed?",
          answer: "No. Typing is one possible component, but clerical aptitude is broader.",
        },
        {
          question: "What is clerical perception?",
          answer: "The ability to quickly and accurately detect differences in printed or displayed text and numerical information.",
        },
        {
          question: "Is Error Checking part of clerical aptitude?",
          answer: "Yes, but it is only one component.",
        },
        {
          question: "Are filing skills still relevant in digital offices?",
          answer: "Yes. Digital systems still require accurate sorting, classification, naming, and record retrieval.",
        },
        {
          question: "Can this test be used for hiring?",
          answer: "Not without job-specific validation and appropriate employment-assessment procedures.",
        },
        {
          question: "Can practice improve clerical performance?",
          answer: "Yes. Checking strategies, filing familiarity, and speed can all improve.",
        },
      ],
    },
    { type: "heading", text: "Good Clerical Work Is Quietly Precise" },
    {
      type: "paragraph",
      text: "The best clerical performance often goes unnoticed because nothing goes wrong. The file appears where it should. The code matches. The form is complete. The number is entered correctly. That reliability comes from a combination of organization, speed, and accuracy — a good Clerical Aptitude Test measures all three without pretending that one rapid checking task represents the entire job.",
    },
  ],
};
