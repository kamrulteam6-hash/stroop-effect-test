import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "A verbal analogy is not asking whether two words are similar. It is asking whether two relationships are similar. \"Bird is to nest as bee is to ?\" The answer is hive, because the relationship is animal → home.",
    },
    {
      type: "paragraph",
      text: "Take this free Verbal Analogy Test to measure how accurately you can identify a relationship between one pair of concepts and map that same relationship onto another pair. The strongest items reward relational reasoning, not obscure vocabulary.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Verbal Analogy Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Read the first word pair.",
        "State the relationship in your own words.",
        "Keep the direction of the relationship intact.",
        "Apply the same relation to the third word.",
        "Compare all answer choices.",
        "Reject options that are merely associated but do not preserve the relationship.",
        "Choose the best relational match.",
      ],
    },
    {
      type: "paragraph",
      text: "A useful habit is to turn the first pair into a sentence — \"a nest is the home of a bird\" — then apply the same sentence structure: \"a hive is the home of a bee.\"",
    },
    { type: "heading", id: "what-is", text: "What Is Analogical Reasoning?" },
    {
      type: "paragraph",
      text: "**Analogical reasoning** involves identifying a relationship in one case and using that relationship to understand or solve another case. The classic structure is A : B :: C : D, read as \"A is to B as C is to D.\" You must determine what relationship connects A and B, then find the option D that places C in the same relationship. This is different from simple association — bird and sky are associated, but bird : nest has a more specific relationship: creature : dwelling. Analogy quality depends on the relation, not just thematic closeness.",
    },
    { type: "heading", id: "relationships-over-similarity", text: "Why Relationships Matter More Than Similarity" },
    {
      type: "paragraph",
      text: "Suppose knife : cut, and you must choose the best completion for pen : ? — paper, ink, write, or desk. Write is best because a knife is a tool used to cut, and a pen is a tool used to write. Ink is strongly associated with pen, but it does not preserve the same relationship. This distinction between association and structural mapping is central to analogical reasoning.",
    },
    { type: "heading", id: "relational-mapping", text: "Relational Mapping" },
    {
      type: "paragraph",
      text: "Analogies require mapping — you identify the role of A, the role of B, and the relation between them, then map those roles onto C and D. Teacher : student :: doctor : patient — the relation is not \"two people in a profession,\" it is closer to \"professional → person receiving that professional's service or instruction.\" The more precise the relation, the easier it becomes to reject plausible distractors.",
    },
    { type: "heading", id: "direction-matters", text: "Direction Matters" },
    {
      type: "paragraph",
      text: "Analogies are directional. Puppy : dog is \"young form → adult form,\" so kitten : ? is cat. But if the first pair is reversed — dog : puppy — the relation becomes \"adult form → young form,\" and the direction must also reverse. A common analogy error is identifying the right concepts but applying the relation backward.",
    },
    { type: "heading", id: "part-to-whole", text: "Common Relationship Type: Part to Whole" },
    {
      type: "paragraph",
      text: "Page : book :: wheel : car — a page is part of a book, a wheel is part of a car. These analogies are easy when the part–whole relationship is direct. Harder versions can involve component → system, ingredient → product, or member → group. The test avoids cases where several options are equally valid parts.",
    },
    { type: "heading", id: "function", text: "Common Relationship Type: Function" },
    {
      type: "paragraph",
      text: "Thermometer : measure :: scissors : cut — the relationship is tool → primary function. Function analogies are useful because distractors can be strongly associated while relationally wrong — for scissors, \"paper\" is associated, but the matching relationship asks what scissors do.",
    },
    { type: "heading", id: "cause-effect", text: "Common Relationship Type: Cause and Effect" },
    {
      type: "paragraph",
      text: "Spark : fire :: infection : fever — a spark can cause a fire, an infection can cause a fever. Causal analogies need careful writing because real causes are often probabilistic, not guaranteed, so this test avoids relations that are only culturally assumed or scientifically questionable.",
    },
    { type: "heading", id: "degree", text: "Common Relationship Type: Degree" },
    {
      type: "paragraph",
      text: "Warm : hot :: cool : cold — the relation is \"less intense → more intense.\" Degree analogies can be difficult because synonyms often blur, so the test uses concepts with a clear intensity ordering.",
    },
    { type: "heading", id: "category-member", text: "Common Relationship Type: Category and Member" },
    {
      type: "paragraph",
      text: "Rose : flower :: salmon : fish — a rose belongs to the category flower, a salmon belongs to the category fish. Direction matters: flower : rose would instead be category → member, which is not interchangeable with member → category.",
    },
    { type: "heading", id: "vocabulary", text: "Vocabulary and Analogical Reasoning" },
    {
      type: "paragraph",
      text: "A verbal analogy requires knowing what the words mean, which creates an important measurement issue — if the target word is unfamiliar, you may fail before any analogy reasoning begins. Research on verbal analogical reasoning has shown contributions from both relational reasoning and semantic knowledge. A 2019 study found that verbal analogical reasoning made a unique contribution to reading comprehension beyond vocabulary and nonverbal matrix reasoning in children — a useful reminder that analogical reasoning is more than word knowledge, but language knowledge still matters.",
    },
    { type: "heading", id: "analogical-complexity", text: "Analogical Complexity" },
    {
      type: "paragraph",
      text: "Some analogies contain one obvious relation; others require several relations or more abstract relational structure. Research published in 2023 found that analogical reasoning performance was affected by relational complexity and was associated with fluid intelligence. Harder items in this test require more abstract or complex relationships, not merely rarer words.",
    },
    { type: "heading", id: "surface-similarity", text: "Surface Similarity Can Mislead" },
    {
      type: "paragraph",
      text: "Suppose doctor : patient, and one answer option is nurse : hospital — all words relate to healthcare, but the relation is wrong. The correct analogy might be lawyer : client, because both share \"professional → recipient of service.\" Good distractors often share the same topic while violating the structure, which forces genuine relational reasoning.",
    },
    { type: "heading", id: "vs-verbal-reasoning", text: "Verbal Analogy vs. Verbal Reasoning" },
    {
      type: "paragraph",
      text: "Our [Verbal Reasoning Test](/test/verbal-reasoning-test) asks you to reason from written passages and determine what conclusions follow. Verbal Analogy is narrower — it evaluates meaning and inference in text, while Verbal Analogy identifies a relationship between concepts and maps it to a new pair. This distinction is important for user expectations.",
    },
    { type: "heading", id: "why-not-rare-vocabulary", text: "Why Rare Vocabulary Should Not Drive Difficulty" },
    {
      type: "paragraph",
      text: "A bad hard item uses four words most users have never seen. A good hard item uses familiar words with a subtle relationship — difficulty comes from distinguishing tool → function, cause → effect, degree, category, part → whole, and agent → recipient. This keeps the construct closer to analogical reasoning and makes explanations more educational.",
    },
    { type: "heading", id: "multiple-relationships", text: "Multiple Possible Relationships" },
    {
      type: "paragraph",
      text: "One word pair can sometimes support more than one relationship — sun : light could mean source → product, object → property, or cause → effect. If the answer options allow several interpretations, the question becomes ambiguous. Good item writing requires selecting pairs where one relation is clearly strongest and where only one answer reproduces it.",
    },
    { type: "heading", id: "distractor-design", text: "Distractor Design" },
    {
      type: "list",
      items: [
        "**Associated Distractor** — the word is strongly related to C but does not preserve the analogy.",
        "**Reverse-Relation Distractor** — uses the right concepts in the wrong direction.",
        "**Near-Relation Distractor** — matches a broad relation but not the precise one.",
        "**Same-Category Distractor** — belongs to the same topic but has a different role.",
      ],
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — primary score.",
        "**Part–Whole** — component relationships.",
        "**Function** — tool/action and object/function relations.",
        "**Category** — member-class relationships.",
        "**Cause and Effect** — causal relations.",
        "**Degree** — intensity relationships.",
        "**Abstract Relations** — performance on less concrete analogies.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Verbal Analogy Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for a custom browser test. Performance depends on vocabulary level, item ambiguity, relation types, time pressure, and first-language status — score bands are not borrowed from SAT-style or commercial aptitude tests.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is a verbal analogy?",
          answer: "A problem where you identify the relationship between one pair of words and find another pair with the same relationship.",
        },
        {
          question: "Are analogies just vocabulary questions?",
          answer: "No. Vocabulary is required, but the core challenge is relational mapping.",
        },
        {
          question: "Why does direction matter?",
          answer: "Because A→B may represent a different relationship from B→A.",
        },
        {
          question: "What kinds of analogy relationships appear?",
          answer: "Part–whole, function, category, degree, cause–effect, and other conceptual relations.",
        },
        {
          question: "Is verbal analogy the same as verbal reasoning?",
          answer: "No. Verbal reasoning is broader; analogy specifically tests relationship mapping between concepts.",
        },
        {
          question: "Does analogical reasoning relate to fluid intelligence?",
          answer: "Yes, relational and analogical reasoning are associated with broader fluid reasoning, but a verbal analogy score is not a complete IQ measure.",
        },
        {
          question: "Can practice help?",
          answer: "Yes. Precisely naming the relationship before evaluating answers is especially useful.",
        },
      ],
    },
    { type: "heading", text: "Do Not Ask \"Which Word Fits?\"" },
    {
      type: "paragraph",
      text: "Ask \"what relationship must be preserved?\" That one change in strategy transforms analogy solving. The words are only the objects. The real answer lives in the connection between them. Once the relation is clear, the strongest distractors lose their power.",
    },
  ],
};
