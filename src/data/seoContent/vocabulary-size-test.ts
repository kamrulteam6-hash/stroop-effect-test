import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How many words do you actually know?",
    },
    {
      type: "paragraph",
      text: "Take this free **Vocabulary Size Test** to estimate the size of your receptive English vocabulary. You will see a mixture of real English words and realistic-looking fake words. Mark only the words whose meanings you genuinely know.",
    },
    {
      type: "paragraph",
      text: "The decoy words matter: selecting made-up words tells the test that guessing or familiarity may be inflating your result.",
    },
    {
      type: "paragraph",
      text: "This is an approximate browser estimate based on a sample of words. It is not a complete count of every word you know.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Vocabulary Size Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Read every word carefully.",
        "Mark a word only if you know what it means.",
        "Leave unfamiliar words unmarked.",
        "Do not select a word just because it looks or sounds real.",
        "Submit the full list.",
        "Review your estimated vocabulary size.",
      ],
    },
    {
      type: "paragraph",
      text: "A useful rule is:",
    },
    {
      type: "paragraph",
      text: "**If you could not explain the basic meaning or use the word appropriately in a sentence, do not mark it as known.**",
    },
    {
      type: "paragraph",
      text: "There is no advantage to guessing. The test includes nonwords specifically to detect overconfident yes-responses.",
    },
    {
      type: "heading",
      id: "what-it-measures",
      text: "What Does a Vocabulary Size Test Measure?",
    },
    {
      type: "paragraph",
      text: "This type of test mainly measures **receptive vocabulary breadth**.",
    },
    {
      type: "paragraph",
      text: "Receptive vocabulary means words you can recognize and understand when someone else presents them.",
    },
    {
      type: "paragraph",
      text: "That is different from **productive vocabulary**—the words you can actively retrieve and use yourself in speech or writing.",
    },
    {
      type: "paragraph",
      text: "Most people understand more words than they spontaneously produce.",
    },
    {
      type: "paragraph",
      text: "A vocabulary-size estimate also says more about **breadth** than depth. Knowing that a word exists and having a rough grasp of its meaning is different from knowing:",
    },
    {
      type: "list",
      items: ["every definition;", "subtle connotations;", "pronunciation;", "grammatical behavior;", "collocations;", "register;", "and how to use it precisely."],
    },
    {
      type: "paragraph",
      text: "So “How many words do I know?” is not as simple as it sounds.",
    },
    {
      type: "heading",
      text: "Why Fake Words Are Included",
    },
    {
      type: "paragraph",
      text: "Imagine a test containing only real words.",
    },
    {
      type: "paragraph",
      text: "If you mark every unfamiliar word as “known,” your score rises—even though your vocabulary did not.",
    },
    {
      type: "paragraph",
      text: "Fake words, also called **pseudowords or nonwords**, help reveal that response bias.",
    },
    {
      type: "paragraph",
      text: "A plausible decoy might look English enough that you feel you have probably seen it before. If you mark several such items, the test has evidence that some of your real-word selections may also have been guesses.",
    },
    {
      type: "paragraph",
      text: "Research vocabulary tests and lexical-decision measures often use real words alongside nonwords for exactly this reason.",
    },
    {
      type: "paragraph",
      text: "The goal is not to trick you.",
    },
    {
      type: "paragraph",
      text: "It is to make “yes, I know this” more informative.",
    },
    {
      type: "heading",
      text: "How Can a Short Test Estimate Thousands of Words?",
    },
    {
      type: "paragraph",
      text: "No practical web test can ask you about every English word.",
    },
    {
      type: "paragraph",
      text: "Instead, vocabulary tests use **sampling**.",
    },
    {
      type: "paragraph",
      text: "A carefully selected sample contains words from different frequency or difficulty levels. Your responses are then used to estimate how much of a much larger vocabulary you are likely to know.",
    },
    {
      type: "paragraph",
      text: "This is similar to estimating a large population from a sample rather than checking every individual.",
    },
    {
      type: "paragraph",
      text: "But the quality of the estimate depends heavily on the sample.",
    },
    {
      type: "paragraph",
      text: "A short list that overrepresents scientific terms, archaic words, American vocabulary, or one difficulty band could give a distorted result.",
    },
    {
      type: "paragraph",
      text: "That is why your final number should be read as an **estimate from this test's word sample**, not a literal inventory of your mind.",
    },
    {
      type: "heading",
      text: "What Counts as a “Word”?",
    },
    {
      type: "paragraph",
      text: "This is the biggest reason vocabulary-size claims vary so widely.",
    },
    {
      type: "paragraph",
      text: "Consider:",
    },
    {
      type: "paragraph",
      text: "**walk**\n**walks**\n**walked**\n**walking**",
    },
    {
      type: "paragraph",
      text: "Are those four words or forms of one underlying word?",
    },
    {
      type: "paragraph",
      text: "Researchers use several definitions.",
    },
    {
      type: "subheading",
      text: "Word Type",
    },
    {
      type: "paragraph",
      text: "Every distinct written form can be counted separately.",
    },
    {
      type: "subheading",
      text: "Lemma",
    },
    {
      type: "paragraph",
      text: "Inflected forms are grouped under a base form. “Walk,” “walks,” “walked,” and “walking” may be treated as one lemma.",
    },
    {
      type: "subheading",
      text: "Word Family",
    },
    {
      type: "paragraph",
      text: "Related derived words may be grouped even more broadly, depending on the rules used.",
    },
    {
      type: "paragraph",
      text: "For example, a word-family approach may connect a base word with some predictable derivatives.",
    },
    {
      type: "paragraph",
      text: "Different definitions produce very different totals.",
    },
    {
      type: "paragraph",
      text: "So two websites can give you different vocabulary numbers without one necessarily being fraudulent—they may simply be counting different units.",
    },
    {
      type: "heading",
      text: "How Many Words Does an Adult Know?",
    },
    {
      type: "paragraph",
      text: "Large-scale English vocabulary research gives useful context, but the numbers must be interpreted carefully.",
    },
    {
      type: "paragraph",
      text: "A widely cited 2016 study by Marc Brysbaert and colleagues estimated that the average 20-year-old native speaker of American English knew about **42,000 lemmas**, with substantial individual variation.",
    },
    {
      type: "paragraph",
      text: "Using the same framework, the researchers estimated about **48,200 lemmas** around age 60.",
    },
    {
      type: "paragraph",
      text: "Those are not universal cutoffs.",
    },
    {
      type: "paragraph",
      text: "The estimates depended on:",
    },
    {
      type: "list",
      items: ["how “word” was defined;", "the participant population;", "receptive recognition;", "the underlying word list;", "age;", "and language exposure."],
    },
    {
      type: "paragraph",
      text: "The same paper emphasized that vocabulary estimates are approximations and that receptive word knowledge is not all-or-nothing.",
    },
    {
      type: "paragraph",
      text: "Do not use 42,000 as a pass/fail target for every English speaker.",
    },
    {
      type: "heading",
      text: "Native Speakers vs. English Learners",
    },
    {
      type: "paragraph",
      text: "A vocabulary-size result means different things depending on language background.",
    },
    {
      type: "paragraph",
      text: "A native English speaker may have accumulated vocabulary across decades of conversation, education, reading, media, work, and hobbies.",
    },
    {
      type: "paragraph",
      text: "An English learner may know fewer total English words while having excellent vocabulary in another language.",
    },
    {
      type: "paragraph",
      text: "Multilingualism also complicates simple comparisons.",
    },
    {
      type: "paragraph",
      text: "Research on large online vocabulary samples has found relationships between vocabulary size and factors including age, education, and multilingual language experience.",
    },
    {
      type: "paragraph",
      text: "A lower English estimate is therefore not a measure of general intelligence or language ability.",
    },
    {
      type: "paragraph",
      text: "It is specifically about **English word knowledge in the tested sample**.",
    },
    {
      type: "heading",
      text: "Familiarity Is Not the Same as Knowledge",
    },
    {
      type: "paragraph",
      text: "One of the hardest decisions in a yes/no vocabulary test is what to do with a word that feels familiar.",
    },
    {
      type: "paragraph",
      text: "You may think:",
    },
    {
      type: "paragraph",
      text: "**“I know I have seen this somewhere.”**",
    },
    {
      type: "paragraph",
      text: "But can you explain what it means?",
    },
    {
      type: "paragraph",
      text: "Recognition has degrees.",
    },
    {
      type: "paragraph",
      text: "You might:",
    },
    {
      type: "list",
      items: [
        "recognize the spelling;",
        "know the general topic;",
        "know one meaning;",
        "know several meanings;",
        "or be able to use the word naturally.",
      ],
    },
    {
      type: "paragraph",
      text: "For this test, use a reasonably strict standard.",
    },
    {
      type: "paragraph",
      text: "Mark a word when you know its basic meaning, not merely when it triggers a feeling of familiarity.",
    },
    {
      type: "paragraph",
      text: "That makes your estimate more stable and reduces false positives.",
    },
    {
      type: "heading",
      text: "Vocabulary Size vs. Verbal Memory",
    },
    {
      type: "paragraph",
      text: "Vocabulary knowledge and verbal memory are different abilities.",
    },
    {
      type: "paragraph",
      text: "The [Verbal Memory Test](/test/verbal-memory-test) asks whether you remember seeing a particular word earlier in the same session.",
    },
    {
      type: "paragraph",
      text: "The Vocabulary Size Test asks whether you already know what a word means.",
    },
    {
      type: "paragraph",
      text: "You can have a large vocabulary and still forget which words appeared a minute ago.",
    },
    {
      type: "paragraph",
      text: "You can also have excellent short-term recognition memory while being unfamiliar with advanced vocabulary.",
    },
    {
      type: "paragraph",
      text: "Do not compare the two scores directly.",
    },
    {
      type: "heading",
      text: "Why Reading Is Strongly Connected to Vocabulary",
    },
    {
      type: "paragraph",
      text: "Words are learned through exposure.",
    },
    {
      type: "paragraph",
      text: "Conversation teaches many common words, but reading exposes people to a much wider range of low-frequency vocabulary.",
    },
    {
      type: "paragraph",
      text: "Books, long-form journalism, technical material, and varied subjects repeatedly place unfamiliar words into meaningful contexts.",
    },
    {
      type: "paragraph",
      text: "Large-scale vocabulary research has found that language exposure is strongly associated with vocabulary knowledge.",
    },
    {
      type: "paragraph",
      text: "That does not mean simply seeing a word once guarantees learning.",
    },
    {
      type: "paragraph",
      text: "Repeated encounters, meaningful context, retrieval, and actual use help turn a vague recognition into stronger knowledge.",
    },
    {
      type: "heading",
      text: "How to Grow Your Vocabulary",
    },
    {
      type: "paragraph",
      text: "Do not memorize random dictionary pages.",
    },
    {
      type: "paragraph",
      text: "A better approach is to learn words in useful contexts.",
    },
    {
      type: "paragraph",
      text: "Try:",
    },
    {
      type: "list",
      items: [
        "reading material slightly above your comfortable level;",
        "looking up words that repeatedly block understanding;",
        "writing a short definition in your own words;",
        "making a sentence using the word;",
        "reviewing the word later;",
        "learning common roots, prefixes, and suffixes;",
        "and noticing how the word is actually used in real sentences.",
      ],
    },
    {
      type: "paragraph",
      text: "Depth matters.",
    },
    {
      type: "paragraph",
      text: "Learning ten words well is often more useful than briefly memorizing fifty definitions and forgetting them.",
    },
    {
      type: "heading",
      id: "faq",
      text: "Frequently Asked Questions",
    },
    {
      type: "faq",
      items: [
        {
          question: "Is this an IQ test?",
          answer:
            "No. Vocabulary is related to language experience and appears in some cognitive assessments, but this browser test does not measure overall intelligence.",
        },
        {
          question: "Why are fake words included?",
          answer: "They help estimate how often you say “yes” to words you do not actually know, reducing score inflation from guessing.",
        },
        {
          question: "Does the result measure words I can use when speaking?",
          answer: "Mostly no. This is closer to receptive vocabulary—words you recognize and understand—than productive vocabulary.",
        },
        {
          question: "Is 42,000 words the average?",
          answer:
            "One major study estimated about 42,000 lemmas for an average 20-year-old native American English speaker under its particular definition and method. Different definitions produce different numbers.",
        },
        {
          question: "Should proper names count?",
          answer: "Vocabulary studies often exclude proper nouns when estimating lemmas. Other word-count systems may handle them differently.",
        },
        {
          question: "Can vocabulary keep growing in adulthood?",
          answer: "Yes. Research shows vocabulary can continue accumulating through adulthood, especially with continued language exposure.",
        },
        {
          question: "Is a higher vocabulary always better?",
          answer:
            "A larger vocabulary can support comprehension and precise communication, but one word-count estimate should not be treated as a ranking of intelligence or education.",
        },
      ],
    },
    {
      type: "heading",
      text: "Find Out What You Really Know",
    },
    {
      type: "paragraph",
      text: "The most useful strategy is honesty.",
    },
    {
      type: "paragraph",
      text: "Mark the words you truly understand.",
    },
    {
      type: "paragraph",
      text: "Leave uncertain words alone.",
    },
    {
      type: "paragraph",
      text: "Let the decoys do their job.",
    },
    {
      type: "paragraph",
      text: "Your final number is not a complete dictionary of your mind—it is a **sample-based estimate of receptive English vocabulary**, useful for curiosity, comparison, and motivating further learning.",
    },
  ],
};
