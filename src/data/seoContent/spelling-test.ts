import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you spot the correctly spelled word without autocorrect's help? Do double letters, silent letters, vowel patterns, suffixes, and irregular words catch you out? This Spelling Test asks you to choose the correctly spelled word from a set of commonly misspelled English words, giving you an instant score.",
    },
    {
      type: "paragraph",
      text: "A good test should do more than count right and wrong answers — it can also show which spelling patterns cause the most difficulty. This is an educational skills assessment, not a diagnosis of dyslexia or another learning disorder.",
    },
    { type: "heading", id: "what-it-measures", text: "What Does a Spelling Test Measure?" },
    {
      type: "paragraph",
      text: "Spelling depends on several kinds of language knowledge working together. A strong assessment may sample sound-to-letter relationships, familiar word spellings, vowel patterns, consonant patterns, prefixes and suffixes, doubled letters, silent letters, and irregular spellings. English spelling is not perfectly predictable from pronunciation — that is why recognizing the correct form among plausible-looking alternatives is a meaningful skill in its own right, not just knowing how a word sounds.",
    },
    { type: "heading", id: "phonological-knowledge", text: "Phonological Knowledge" },
    {
      type: "paragraph",
      text: "Phonological knowledge concerns the sound structure of language. To recognize the correct spelling of an unfamiliar word, you may break it into sounds and check whether the letters plausibly match. For example, \"ship\" contains three main speech sounds represented by sh–i–p. This sound-to-letter process is especially important during early spelling development. But English contains many spellings that cannot be solved by a simple one-sound, one-letter rule, which is exactly why multiple-choice spelling questions can be genuinely tricky.",
    },
    { type: "heading", id: "orthographic-knowledge", text: "Orthographic Knowledge" },
    {
      type: "paragraph",
      text: "Orthography refers to the conventional written system of a language. Orthographic knowledge helps you recognize which letter patterns are legal or likely in English — an experienced reader often senses that one candidate spelling \"looks right\" and another does not, even before consciously applying a rule. Research on spelling distinguishes phonological, orthographic, and morphological knowledge because correct spelling recognition can draw on all three at once.",
    },
    { type: "heading", id: "morphological-knowledge", text: "Morphological Knowledge" },
    {
      type: "paragraph",
      text: "Morphology concerns meaningful word parts. Consider help, helpful, unhelpful — recognizing the base word and its affixes can support spelling recognition, especially with prefixes, suffixes, tense endings, plural forms, and related word families. Knowing the relationship between words can sometimes help you spot a correct spelling even when pronunciation changes. This is one reason advanced spelling recognition is not simply a matter of sounding words out.",
    },
    { type: "heading", id: "common-difficulty-areas", text: "Common Spelling Difficulty Areas" },
    {
      type: "paragraph",
      text: "Double consonants trip people up in words such as accommodate, necessary, and embarrass, because consonant doubling is not always obvious from pronunciation. Silent letters appear in words like knowledge, receipt, and island. Vowel patterns in English can be especially irregular. Suffix changes alter spelling, as in happy becoming happiness or run becoming running. And irregular high-frequency words must often be learned through repeated exposure because phonics alone does not predict the full spelling. A balanced test should sample several of these difficulty types.",
    },
    { type: "heading", id: "vs-grammar", text: "Spelling vs. Grammar" },
    {
      type: "paragraph",
      text: "Spelling and grammar are separate skills. \"I recieved the package\" has a spelling problem. \"She go to work every day\" has a grammar problem. A user can have strong grammar and weak spelling, or the reverse. Our [Grammar Test](/test/grammar-test) focuses on sentence structure, tense, articles, prepositions, and related grammatical rules — this page stays focused on correct written word forms.",
    },
    { type: "heading", id: "vs-dyslexia", text: "Spelling vs. Dyslexia" },
    {
      type: "paragraph",
      text: "Persistent spelling difficulty can be associated with dyslexia, but poor spelling alone does not diagnose it. Dyslexia assessment considers a broader pattern that may involve decoding, word reading, reading fluency, phonological processing, spelling, and developmental history. If spelling difficulties occur alongside persistent reading and decoding problems, our [Dyslexia Test](/test/dyslexia-test) is a more relevant screening page. This Spelling Test should report performance without assigning a learning-disorder label.",
    },
    { type: "heading", id: "british-vs-american", text: "British vs. American English" },
    {
      type: "paragraph",
      text: "English spelling varies by region — color/colour, center/centre, organize/organise. A global test should decide how to handle accepted variants, either by specifying which English variety is being tested or accepting established variants. Do not mark a legitimate regional spelling wrong simply because the answer key supports only one dialect — that creates avoidable frustration and weakens trust.",
    },
    { type: "heading", id: "distractor-design", text: "Why the Wrong Options Matter" },
    {
      type: "paragraph",
      text: "In a multiple-choice spelling question, the incorrect options are not random noise — they are usually built around a genuine, common misconception, such as a plausible-but-wrong double letter, a swapped vowel pair, or a missing silent letter. That design choice matters: if the wrong options are obviously silly, the question tests nothing useful. A good spelling test uses realistic near-miss distractors so that choosing correctly actually reflects orthographic knowledge rather than elimination by absurdity.",
    },
    { type: "heading", id: "what-score-means", text: "What Your Spelling Score Means" },
    {
      type: "paragraph",
      text: "A lower score means you identified fewer correctly spelled words — look at the error categories rather than only the total. A mid-range score means you handle common words reliably but may struggle with irregular, advanced, or pattern-heavy spellings. A higher score means you accurately identified a large proportion of correct spellings across several difficulty types — that indicates strong spelling recognition on this word set, though it does not mean you will know every unfamiliar technical or specialized word.",
    },
    { type: "heading", id: "error-analysis", text: "Error Analysis Is More Useful Than One Percentage" },
    {
      type: "paragraph",
      text: "Suppose two users both score 78%. User A misses mostly silent letters and doubled consonants. User B misses mostly suffix changes and vowel patterns. They need different practice. A strong results page can show performance by category — common words, vowel patterns, double letters, suffixes, irregular words — turning a quiz into an educational tool rather than a single verdict.",
    },
    { type: "heading", id: "how-to-improve", text: "How to Improve Spelling" },
    {
      type: "paragraph",
      text: "Study word families by connecting related forms rather than memorizing isolated words. Notice patterns, looking for recurring letter combinations. Use retrieval by trying to spell a word from memory rather than only recognizing it among options. Review errors by keeping a personal list of words you repeatedly miss. Learn meaning alongside spelling, since meaning helps distinguish homophones. And read regularly, since repeated exposure strengthens familiarity with conventional written forms.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Spelling Test?", answer: "It is an assessment of how accurately you can identify the conventional written form of English words among plausible-looking alternatives." },
        { question: "Is spelling the same as vocabulary?", answer: "No. You can know what a word means while spelling it incorrectly." },
        { question: "Is spelling the same as grammar?", answer: "No. Spelling concerns written word forms; grammar concerns how words and structures function together in sentences." },
        { question: "Does poor spelling mean dyslexia?", answer: "No. Persistent spelling problems can occur with dyslexia, but diagnosis requires a broader evaluation." },
        { question: "Should US and UK spellings both be accepted?", answer: "Established regional variants should be handled deliberately, either by accepting them or clearly specifying which English variety is being tested." },
        { question: "Can spelling improve?", answer: "Yes. Explicit pattern study, reading, morphology, retrieval practice, and targeted review of errors can improve spelling." },
      ],
    },
    { type: "heading", text: "Do Not Just Count Correct Answers" },
    {
      type: "paragraph",
      text: "A useful Spelling Test answers a second question: why did the wrong option look tempting? Was it the vowel pattern? A doubled consonant? A suffix? A silent letter? That error pattern tells you what to practice next. The total score tells you how many words you identified correctly. The mistakes tell you how to become a better speller.",
    },
  ],
};
