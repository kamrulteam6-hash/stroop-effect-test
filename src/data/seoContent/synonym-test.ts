import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How precisely do you know the meanings of English words? Take this free **Synonym Test** to measure receptive vocabulary knowledge. For each target word, choose the option that is **closest in meaning**.",
    },
    {
      type: "paragraph",
      text: "The questions progress from familiar everyday vocabulary to less frequent and more difficult words. Your result reflects performance on this item set — not an IQ score and not an exact count of every word you know.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Synonym Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read the target word.",
        "Read all answer choices before responding.",
        "Select the word or short phrase closest in meaning.",
        "If two choices seem related, choose the one with the most precise semantic match.",
        "Continue without using a dictionary or search engine.",
        "Review accuracy and difficulty level.",
        "Read definitions after the scored test if explanations are provided.",
      ],
    },
    { type: "paragraph", text: "Do not look up unfamiliar words during the test. The purpose is to estimate knowledge you already possess." },
    { type: "heading", text: "What Is a Synonym?" },
    {
      type: "paragraph",
      text: "A synonym is a word with the same or very similar meaning as another word — for example, rapid and fast. But perfect synonyms are rare; words can differ in nuance, register, emotional tone, grammatical use, and typical context. For example, slim and skinny both describe thinness, but their connotations differ. A good synonym question therefore asks for the closest meaning in the intended sense, not necessarily a word that can replace the target in every possible sentence.",
    },
    { type: "heading", text: "Synonym Tests and Vocabulary Knowledge" },
    {
      type: "paragraph",
      text: "Multiple-choice synonym tasks are widely used to measure receptive vocabulary — the user sees a target word and selects a semantically similar option. A recent example is the Web-based Open-access Reliable Decision on Synonyms (WORDS) English Vocabulary Test, developed specifically for online research. The published WORDS test contains 30 critical multiple-choice items and was designed as a quick, reliable web-based vocabulary measure. Your site uses its own original item bank rather than copying published test items. The important point is that synonym selection is an established way to assess vocabulary knowledge online.",
    },
    { type: "heading", text: "Receptive vs. Productive Vocabulary" },
    {
      type: "paragraph",
      text: "Vocabulary knowledge can be tested in different ways. Receptive vocabulary asks whether you can recognize or understand a word when you encounter it — a multiple-choice synonym task primarily measures this. Productive vocabulary asks whether you can produce the word yourself when speaking or writing. These are related but not identical: you may recognize that benevolent means something like kind without naturally using benevolent in conversation. Therefore a high Synonym Test score should be described as strong receptive lexical knowledge on the tested words.",
    },
    { type: "heading", text: "Breadth vs. Depth of Vocabulary" },
    {
      type: "paragraph",
      text: "Vocabulary also has breadth, how many words you know, and depth, how richly you know each word's meanings, associations, morphology, usage, and nuances. A synonym test samples both to some extent — recognizing a rare target requires breadth, while distinguishing the best synonym from plausible semantic neighbors requires deeper knowledge. But a short browser test cannot precisely enumerate a person's entire vocabulary.",
    },
    { type: "heading", text: "How a Synonym Question Works and Why Distractors Matter" },
    {
      type: "paragraph",
      text: "For example, the target abundant with options scarce, plentiful, fragile, and narrow has the correct answer plentiful. The distractors should be plausible English words but should not create multiple defensible answers — a good item tests meaning, not obscure grammar or trick phrasing. The difficulty of a multiple-choice item depends heavily on the wrong answers. If the target is rapid and the options are fast, pineapple, blanket, and triangle, the item is too easy because three distractors are unrelated. Compare that with fast, sudden, brief, and hurried — these choices are semantically closer, and the user needs more precise lexical knowledge. A strong item bank uses distractors that are plausible but clearly less correct than the target synonym.",
    },
    { type: "heading", text: "Word Frequency and Empirical Difficulty" },
    {
      type: "paragraph",
      text: "Common words are encountered often, and rare words appear less frequently. Vocabulary tests frequently use word frequency as one contributor to difficulty — an easy tier might include happy, large, and silent; a medium tier reluctant, vivid, and scarce; and a hard tier ubiquitous, intransigent, and parsimonious. Frequency alone does not determine difficulty, since some rare words are memorable and some common words have complex meanings, but a broad frequency range helps spread item difficulty. The best way to know whether a question is difficult is to collect response data rather than guess — if 95% of users answer an item correctly it is easy for that population, while 35% correct means it is much harder. Modern vocabulary-test development often uses Item Response Theory (IRT) to estimate item difficulty, item discrimination, and participant ability; the 2024 WORDS test used IRT during item development. Your site can begin with conventional scoring and later calibrate its item bank using real response data.",
    },
    { type: "heading", text: "Synonyms Depend on Context and Polysemy" },
    {
      type: "paragraph",
      text: "Consider the word bright, which can mean producing light, intelligent, vivid in color, or cheerful. A synonym depends on the intended sense, so ambiguous target words should either be avoided or placed in a short sentence — for example, \"she is a bright student\" makes intelligent clearly relevant. Context can improve item validity by specifying which meaning is being tested. Polysemy occurs when one word has multiple related meanings; if an item presents only the isolated word sharp, possible meanings include cutting edge, intelligent, sudden, high-pitched, and stylish, and without context more than one answer may be defensible. A high-quality synonym test should review items for polysemy before publication.",
    },
    { type: "heading", text: "Synonym Test vs. Vocabulary Size, Reading Comprehension, and Verbal Reasoning" },
    {
      type: "paragraph",
      text: "Your existing [Vocabulary Size Test](/test/vocabulary-size-test) attempts to estimate the breadth of known words across a sampled lexicon, while the Synonym Test more narrowly asks which option most closely matches this word's meaning — the two can correlate strongly while remaining distinct task formats. A person can know many individual words yet still struggle to understand complex passages, since reading comprehension also requires syntax, inference, working memory, background knowledge, and discourse integration; a synonym score is therefore a vocabulary measure, not a complete reading assessment. A synonym question should primarily test lexical meaning, unlike a verbal reasoning test that might require analogies, logical relationships, inference, and argument evaluation — hard vocabulary is enough for this test without added analogy rules.",
    },
    { type: "heading", text: "Does a Synonym Test Measure IQ?" },
    {
      type: "paragraph",
      text: "Not by itself. Vocabulary measures often correlate with broader verbal ability and can appear within standardized intelligence batteries, but an original online synonym quiz does not have full standardized administration, multi-domain coverage, or validated IQ norms. Therefore a score of 25/30 should be reported as performance on the synonym test, not converted into an IQ figure without appropriate validation.",
    },
    { type: "heading", text: "What Should the Result Show?" },
    {
      type: "paragraph",
      text: "Useful metrics include total correct (raw accuracy), difficulty reached (performance across easy, medium, and hard items), common vs. rare words (accuracy by frequency band), an optional confidence rating for metacognitive calibration, and definitions shown as educational explanations only after the scored response. If the item bank is eventually calibrated, a scaled vocabulary score can be added.",
    },
    { type: "heading", text: "What Is a Good Synonym Score?" },
    {
      type: "paragraph",
      text: "There is no universal interpretation for a custom item bank. A score depends on item difficulty, English proficiency, first-language status, age, education, and test length. Avoid arbitrary labels such as \"28/30 = genius vocabulary\" unless those categories are supported by same-test normative data. A better initial result describes percent correct, difficulty distribution, and personal percentile only after enough data exist.",
    },
    { type: "heading", text: "Can This Test Diagnose a Language Disorder?" },
    {
      type: "paragraph",
      text: "No. Vocabulary tests are used in educational and clinical assessment, but one online synonym task cannot diagnose language disorder, dyslexia, aphasia, or cognitive impairment. A low result may simply reflect English as a second language, unfamiliar vocabulary, educational exposure, or test difficulty.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Synonym Test?", answer: "A vocabulary task where you select the word or phrase closest in meaning to a target word." },
        { question: "Does it measure receptive or productive vocabulary?", answer: "Primarily receptive vocabulary because the correct meaning is recognized from options." },
        { question: "Are synonyms always exactly interchangeable?", answer: "No. Many synonyms differ in nuance, register, connotation, or grammatical context." },
        { question: "Why are some wrong answers similar to the target?", answer: "Plausible distractors require more precise semantic knowledge and create better vocabulary items." },
        { question: "Is this an IQ test?", answer: "No. Vocabulary relates to verbal ability but an original synonym quiz does not generate a validated IQ score." },
        { question: "Can the test be adaptive?", answer: "Yes, after the item bank has been empirically calibrated for difficulty and discrimination." },
        { question: "Should I use a dictionary?", answer: "Not during the scored test. Definitions can be provided afterward for learning." },
      ],
    },
    {
      type: "paragraph",
      text: "Seeing a word before is not the same as knowing it. A strong vocabulary representation tells you where the word sits among related meanings — what it means, what it does not mean, and which nearby word is the best semantic match. That is exactly what a carefully designed Synonym Test measures.",
    },
  ],
};
