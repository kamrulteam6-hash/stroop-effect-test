import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How many words can you retrieve when you have only one minute and one simple rule? Take this free **Word Fluency Test** using two classic verbal-fluency formats: Letter Fluency, generating words beginning with a specified letter, and Category Fluency, generating words belonging to a specified semantic category.",
    },
    {
      type: "paragraph",
      text: "The primary result is the number of **valid, unique responses** produced under the rule. A richer analysis can also examine repetitions, rule violations, clustering, and switching.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Word Fluency Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read the rule for the current round.",
        "Generate as many valid words as possible before time expires.",
        "Do not repeat words already entered.",
        "Follow any stated restrictions on names or word variants.",
        "Continue typing or speaking until the timer ends.",
        "Complete both letter and category rounds if available.",
        "Review valid words, repetitions, errors, clusters, and switches.",
      ],
    },
    { type: "paragraph", text: "Do not use a dictionary or autocomplete. The task is about rapid retrieval from your own mental lexicon." },
    { type: "heading", text: "What Is Verbal Fluency?" },
    {
      type: "paragraph",
      text: "Verbal fluency is the ability to generate words efficiently under a rule. The two most widely used forms are phonemic or letter fluency, generating words beginning with a particular letter, and semantic or category fluency, generating words belonging to a category such as animals — dog, cat, horse, tiger, whale. The task sounds easy because everyone knows many more words than they can produce in one minute; the challenge is retrieval under constraint.",
    },
    { type: "heading", text: "Letter Fluency and Category Fluency" },
    {
      type: "paragraph",
      text: "A letter-fluency round might say \"name as many English words as you can that begin with M,\" with responses like market, moon, music, melt, and mirror. Common rules in verbal-fluency tasks may exclude proper names, the same word with only a different ending, and repetitions, though exact rules vary across tests — your browser implementation states its rules clearly and uses the same rules for everyone, without calling a custom letter set an official standardized fluency test. A category round might say \"name as many animals as you can in 60 seconds,\" and the user may begin with dog, cat, lion, tiger, then move to shark, whale, dolphin, and later eagle, sparrow, crow. This sequence reveals more than the raw count — words often arrive in semantic groups, leading to the concepts of clustering and switching.",
    },
    { type: "heading", text: "Clustering and Switching" },
    {
      type: "paragraph",
      text: "A cluster is a run of related words generated close together — in animal fluency, lion, tiger, leopard forms a big-cat cluster, while shark, whale, dolphin forms a sea-animal cluster. For letter fluency, clusters can be based on similar initial sounds, rhymes, shared stems, or other phonemic relationships, reflecting the organization of lexical and semantic retrieval. Switching means moving from one cluster to another — lion, tiger, leopard, then shark, whale, dolphin, then eagle, crow, sparrow. The user is not only retrieving words within one semantic neighborhood but finding a new search path when the current cluster begins to run out. Troyer, Moscovitch, and Winocur's influential 1997 study showed that clustering and switching can be analyzed as partly separable components of verbal fluency performance.",
    },
    { type: "heading", text: "Why Switching Matters" },
    {
      type: "paragraph",
      text: "Imagine two users both produce 20 animal names. User A produces several large clusters but switches only a few times; User B produces smaller clusters but moves rapidly among many subcategories. Their total scores match, but their retrieval strategies differ. A richer browser result can therefore show total valid words, average cluster size, and number of switches — but automated cluster scoring is difficult, requiring carefully defined semantic relationships. For a first version, total valid responses should remain the primary score.",
    },
    { type: "heading", text: "Letter vs. Category Fluency" },
    {
      type: "paragraph",
      text: "These tasks overlap but are not identical. Category fluency search is guided by semantic organization — you can mentally explore pets to farm animals to sea animals to birds. Letter fluency search is guided by orthographic or phonological constraints — you may use ma-, me-, mi- or think through word families. Research comparing the tasks shows different patterns of lexical search and cognitive demand, and a user may perform much better on one than the other, so they should be reported separately.",
    },
    { type: "heading", text: "Why 60 Seconds Is Common" },
    {
      type: "paragraph",
      text: "Many verbal-fluency procedures use a one-minute response period, creating enough time for the initial easy words to be exhausted and forcing continued search. Early in the trial, words often come quickly; later, retrieval slows. That time course is informative — a browser result can divide the minute into 0–15, 16–30, 31–45, and 46–60 second blocks to reveal whether output dropped sharply or remained steady.",
    },
    { type: "heading", text: "Repetitions and Rule Violations" },
    {
      type: "paragraph",
      text: "A repetition occurs when the same word is produced twice — for example, dog, cat, horse, dog, where the second \"dog\" should not count as a valid new response. Repetitions are useful to track separately because they reflect self-monitoring as well as retrieval; a user generating 30 entries with 8 repetitions performed differently from a user generating 22 entries with no repetitions, even if both end with 22 unique valid words. A rule violation is a response that does not satisfy the current condition — for example, \"table\" in an M-letter round, \"chair\" in an animal category, or \"Michael\" when proper names are prohibited. The site should show valid unique words, repetitions, and rule violations separately, which is more transparent than silently deleting invalid responses.",
    },
    { type: "heading", text: "Typing vs. Speaking" },
    {
      type: "paragraph",
      text: "Traditional verbal-fluency testing is spoken. A browser version may use typing, which creates an important limitation: typed performance depends partly on typing speed, spelling, and keyboard familiarity, so a user may think of 25 words but enter only 16 before the timer ends. If browser speech recognition is available and reliable, a Voice Mode can better approximate oral fluency. Typed and spoken scores should not share the same norms.",
    },
    { type: "heading", text: "Why Vocabulary Is Not the Same as Fluency" },
    {
      type: "paragraph",
      text: "A person may know thousands of animal names yet retrieve only a limited number under a one-minute deadline. Word Fluency involves lexical access, search strategy, monitoring, rule maintenance, and switching. The [Synonym Test](/test/synonym-test) asks whether the user recognizes word meanings; Word Fluency asks whether words can be generated quickly without being shown. Recognition and production are different demands.",
    },
    { type: "heading", text: "Word Fluency vs. Anagram Test" },
    {
      type: "paragraph",
      text: "The [Anagram Test](/test/anagram-test) provides a fixed set of letters and asks the user to rearrange them into a word. Word Fluency provides a broad constraint but no letters to rearrange — generate many possible words, versus discover one target word from constrained letters. Both use lexical knowledge, but the search spaces are very different.",
    },
    { type: "heading", text: "What Does Word Fluency Measure?" },
    {
      type: "paragraph",
      text: "Performance can involve lexical retrieval, semantic memory, phonological search, executive control, switching, self-monitoring, and language proficiency. It should not be described as a pure measure of one brain region — neuropsychological research uses fluency tasks because performance is sensitive to several language and executive systems, and a browser test cannot localize a deficit from a word count.",
    },
    { type: "heading", text: "What Should the Result Show?" },
    {
      type: "paragraph",
      text: "Useful metrics include valid unique words (primary score), repetitions (words produced more than once), rule violations (responses outside the condition), output by 15-second block (shows the retrieval time course), letter fluency and category fluency totals reported separately, and optional clustering and switching when reliable automatic classification is available.",
    },
    { type: "heading", text: "What Is a Good Word Fluency Score?" },
    {
      type: "paragraph",
      text: "There is no universal online cutoff. Performance depends on cue letter, semantic category, spoken vs. typed response, time limit, language, age, and scoring rules. Do not import norms from an official clinical test into a custom typed browser version — your site can build its own same-version norms after collecting enough data.",
    },
    { type: "heading", text: "Can This Diagnose Dementia, Aphasia, or ADHD?" },
    {
      type: "paragraph",
      text: "No. Verbal-fluency tasks are widely used in neuropsychological research and assessment, but one online score cannot diagnose dementia, aphasia, Parkinson's disease, ADHD, frontal-lobe dysfunction, or another neurological condition. Low output can arise from language background, typing speed, unfamiliarity, distraction, or ordinary variation.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Word Fluency Test?", answer: "A timed task where you generate as many valid words as possible under a letter or category rule." },
        { question: "What is letter fluency?", answer: "Producing words that begin with a specified letter." },
        { question: "What is category fluency?", answer: "Producing words belonging to a semantic category such as animals." },
        { question: "What are clustering and switching?", answer: "Clustering is producing related words together; switching is moving to a new lexical or semantic cluster." },
        { question: "Why are repeated words not counted?", answer: "They do not represent a new retrieval and can reflect reduced monitoring." },
        { question: "Is typing equivalent to spoken verbal fluency?", answer: "No. Typing speed and spelling introduce additional demands." },
        { question: "Can this diagnose a neurological condition?", answer: "No. It is an online lexical-retrieval task, not a clinical assessment." },
      ],
    },
    {
      type: "paragraph",
      text: "Verbal fluency is not simply how many words do I know. The real challenge is how efficiently you can search what you know while following a rule and avoiding repeats. The first words usually come easily; the later seconds reveal whether you can keep finding new routes through the mental lexicon after the obvious answers are gone.",
    },
  ],
};
