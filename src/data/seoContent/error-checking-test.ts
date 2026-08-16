import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Most error-checking tasks contain no difficult knowledge. The challenge is that the wrong item looks almost right.",
    },
    {
      type: "paragraph",
      text: "Take this free Error Checking Test to measure how quickly and accurately you can verify letter strings, numerical codes, names, dates, reference numbers, and short records. Your job is usually to decide Same or Different as accurately as possible under time pressure. This page is narrower than our [Attention to Detail Test](/test/attention-to-detail-test) — Attention to Detail is a broad battery, while Error Checking is the specialist task: compare the source with the copy and detect whether an error exists.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Error Checking Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Compare the source and target item.",
        "Scan in a consistent direction.",
        "Check character order as well as character identity.",
        "Mark Same only when every required field matches.",
        "Mark Different when at least one meaningful discrepancy exists.",
        "Continue through progressively longer or more similar records.",
        "Work quickly without sacrificing accuracy.",
      ],
    },
    {
      type: "paragraph",
      text: "Do not rely on the overall \"shape\" of a code. Check the details.",
    },
    { type: "heading", id: "what-is", text: "What Is Error Checking?" },
    {
      type: "paragraph",
      text: "**Error checking** is the verification of information against a reference. In practical work, the task may involve checking whether a copied number matches the original, a customer code is correct, a date was entered accurately, a name contains a typo, fields were omitted, or records were transposed. This type of checking is common in administration, data entry, finance, logistics, healthcare records, and quality assurance. The browser task simulates the underlying cognitive demand without pretending to certify someone for a specific occupation.",
    },
    { type: "heading", id: "clerical-perception", text: "Clerical Perception" },
    {
      type: "paragraph",
      text: "Traditional aptitude frameworks often use the term **clerical perception** for quickly and accurately noticing differences in printed material. O*NET assessment materials describe this ability in terms of seeing differences in detail in text, numbers, lists, and tables, and noticing mistakes or careless errors. Error Checking is closely related to clerical perception, but it remains a narrow browser task rather than claiming equivalence to a standardized clerical-perception instrument.",
    },
    { type: "heading", id: "source-copy", text: "Source–Copy Comparison" },
    {
      type: "paragraph",
      text: "The most direct format presents a source, like 7Q4N-58216, and a copy, like 7Q4N-58216 — answer: Same. Another trial might show source 7Q4N-58216 and copy 7Q4N-52816 — answer: Different, because it contains a transposition. All digits are still present; their order changed. These near matches are ideal because they test precise verification.",
    },
    { type: "heading", id: "substitution", text: "Substitution Errors" },
    {
      type: "paragraph",
      text: "A substitution replaces one character — source ABF-7319 versus copy ABF-7369, where the digit 1 became 6. Substitutions can occur at the beginning, middle, or end, so the item bank distributes error position rather than making the last character wrong every time, which would let users learn a shortcut.",
    },
    { type: "heading", id: "transposition", text: "Transposition Errors" },
    {
      type: "paragraph",
      text: "A transposition swaps positions — source 584271 versus copy 584721. The same six digits appear; only order differs. Transpositions are often harder than obvious substitutions because the overall character set remains familiar. A systematic left-to-right scan helps.",
    },
    { type: "heading", id: "omission", text: "Omission Errors" },
    {
      type: "paragraph",
      text: "An omission removes information — source KR-482915 versus copy KR-48915, where one digit is missing and everything after it shifts position. This can make visual comparison surprisingly difficult, especially as longer strings increase the chance that users rely on overall appearance instead of exact position.",
    },
    { type: "heading", id: "insertion", text: "Insertion Errors" },
    {
      type: "paragraph",
      text: "An insertion adds an extra character — source MLT-7204 versus copy MLTT-7204, which contains one extra T. Insertions and omissions are useful because they challenge sequence tracking rather than simple character recognition.",
    },
    { type: "heading", id: "speed-accuracy", text: "Speed–Accuracy Trade-Off" },
    {
      type: "paragraph",
      text: "Error checking is usually speeded, creating a natural trade-off. User A checks 80 items and gets 79 correct; User B checks 120 items and gets 95 correct. User B completed more work, while User A was much more accurate. A good result shows both — the trade-off should never hide inside a mysterious single score.",
    },
    { type: "heading", id: "attempted-items", text: "Attempted Items" },
    {
      type: "paragraph",
      text: "**Attempted** means the number of items answered before time expires, measuring throughput opportunity. It should not automatically count as success — a user can attempt 100 items by clicking randomly, which is why attempted items must be interpreted alongside correctness.",
    },
    { type: "heading", id: "accuracy", text: "Accuracy" },
    {
      type: "paragraph",
      text: "A simple measure is correct ÷ attempted × 100 — for example, 47 correct out of 50 attempted is 94% accuracy. But someone who attempts only 10 very carefully and gets all 10 correct has 100% accuracy with low throughput, so accuracy and speed remain visible separately.",
    },
    { type: "heading", id: "correct-per-minute", text: "Correct Items per Minute" },
    {
      type: "paragraph",
      text: "A useful combined efficiency measure is correct items ÷ minutes, which rewards speed only when it produces correct work — 48 correct in 2 minutes is 24 correct items per minute. The result still shows total attempts, total errors, and accuracy percentage, since one efficiency number should not replace the raw information.",
    },
    { type: "heading", id: "misses", text: "Misses" },
    {
      type: "paragraph",
      text: "A **miss** occurs when the target contains an error but you respond Same — for example, missing the transposition in AB-7314 versus AB-7134. Miss rate can be especially useful in quality-control style tasks.",
    },
    { type: "heading", id: "false-alarms", text: "False Alarms" },
    {
      type: "paragraph",
      text: "A **false alarm** occurs when two items are identical but you mark Different. If every trial contained an error, you could simply click Different on every item — the test includes genuine matches as well as mismatches so response bias becomes visible.",
    },
    { type: "heading", id: "match-frequency", text: "Why Match Frequency Matters" },
    {
      type: "paragraph",
      text: "If 90% of trials contain errors, users quickly learn that \"Different\" is usually correct, which changes strategy. This test uses a reasonably balanced distribution of match and mismatch trials so that one response never becomes an obvious default.",
    },
    { type: "heading", id: "vs-proofreading", text: "Proofreading vs. Error Checking" },
    {
      type: "paragraph",
      text: "Proofreading involves identifying problems in meaningful language, depending on spelling, grammar, and sentence meaning. Error Checking minimizes those extra demands — a code such as KT9-440B does not require vocabulary, making direct comparison a cleaner measure of clerical-style visual verification. Our broader [Attention to Detail Test](/test/attention-to-detail-test) still includes proofreading as one component.",
    },
    { type: "heading", id: "vs-attention-to-detail", text: "Error Checking vs. Attention to Detail" },
    {
      type: "paragraph",
      text: "The [Attention to Detail Test](/test/attention-to-detail-test) is broad — proofreading, records, visual mismatch, consistency, and code comparison. Error Checking is narrow — source–target comparison, exact verification, and high-speed Same/Different decisions. That separation matters for both search intent and scoring.",
    },
    { type: "heading", id: "vs-clerical-aptitude", text: "Error Checking vs. Clerical Aptitude" },
    {
      type: "paragraph",
      text: "Our [Clerical Aptitude Test](/test/clerical-aptitude-test) includes several practical office abilities, and Error Checking is one component within it — a clerical battery may also include alphabetization, filing, coding, simple office arithmetic, and record organization. This page's score is specifically an error-checking score, not a clerical aptitude score.",
    },
    { type: "heading", id: "vs-visual-search", text: "Visual Search vs. Error Checking" },
    {
      type: "paragraph",
      text: "Our [Visual Search Test](/test/visual-search-test) asks you to locate a target among distractors. Error Checking presents explicit reference and comparison material — search asks you to find the target, while Error Checking asks you to verify whether the copy matches the source. The perceptual demands overlap, but the work simulation is different.",
    },
    { type: "heading", id: "scan-direction", text: "Fixed Scan Direction" },
    {
      type: "paragraph",
      text: "A consistent scanning method is more reliable than jumping around: left to right, one chunk at a time, compare source and copy, and stop only after every position matches. Random visual hopping increases the risk of checking the same area twice while skipping another — useful advice for both test preparation and real checking work.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Accuracy** — percent correct among attempted items.",
        "**Correct per Minute** — accuracy-adjusted throughput.",
        "**Attempted Items** — total workload completed.",
        "**Misses** — errors incorrectly accepted as matches.",
        "**False Alarms** — matches incorrectly rejected.",
        "**Substitution Detection** — one-character replacements.",
        "**Transposition Detection** — order changes.",
        "**Omission/Insertion Detection** — missing or extra characters.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Error Checking Score?" },
    {
      type: "paragraph",
      text: "There is no universal score for an original browser test. Performance depends on string length, font, time limit, error frequency, error type, and device — employer cutoffs are not borrowed from another clerical assessment.",
    },
    { type: "heading", id: "can-employers-use", text: "Can Employers Use This Score?" },
    {
      type: "paragraph",
      text: "This public browser test should not be presented as a validated hiring assessment. Employment testing requires evidence that the procedure is job relevant, reliable, valid for the intended use, fairly administered, and legally appropriate. Users can practice with the task, but organizations should not treat a casual website score as a selection decision.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is an Error Checking Test?",
          answer: "A speed-and-accuracy task where you compare source information with a copy and identify whether any discrepancy exists.",
        },
        {
          question: "What kinds of errors appear?",
          answer: "Substitutions, transpositions, omissions, insertions, and multi-field record mismatches.",
        },
        {
          question: "Is it the same as Attention to Detail?",
          answer: "No. Attention to Detail is broader; Error Checking focuses specifically on exact verification.",
        },
        {
          question: "Should I prioritize speed or accuracy?",
          answer: "Both matter. The result should report them separately.",
        },
        {
          question: "Why include identical records?",
          answer: "They reveal false alarms and prevent users from marking every item as Different.",
        },
        {
          question: "Is Error Checking part of clerical aptitude?",
          answer: "It can be one component, but clerical aptitude is broader.",
        },
        {
          question: "Can this be used as an employment test?",
          answer: "Not without job-specific validation and appropriate assessment procedures.",
        },
      ],
    },
    { type: "heading", text: "Do Not Ask \"Does It Look Right?\"" },
    {
      type: "paragraph",
      text: "Ask \"did I verify every position?\" That difference is the entire task. Near-matching codes are designed to create a feeling of familiarity. Reliable checking replaces that feeling with a method: scan, compare, confirm, then move on.",
    },
  ],
};
