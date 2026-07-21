import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Not all memorizing is equal — how you think about information while encountering it has a huge effect on whether you'll remember it later. This test recreates a classic memory science experiment: you'll judge some words by their appearance and others by their meaning, then take a surprise recognition test to see which approach actually produced better memory.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Levels of Processing Test Works",
    },
    {
      type: "paragraph",
      text: "First, you'll judge 8 words by a shallow, visual property — simply whether each one is shown in capital letters. Next, you'll judge 8 different words by a deeper, meaning-based property — whether each one refers to something alive. After a short break, you'll get a surprise recognition test mixing both sets of words with new ones you haven't seen, and your results break down recall separately for the two encoding conditions.",
    },
    {
      type: "heading",
      text: "The Research Behind This Design",
    },
    {
      type: "paragraph",
      text: "This test is based on the Levels of Processing framework introduced by psychologists Fergus Craik and Robert Lockhart in 1972, and tested directly in a well-known 1975 study by Craik and Endel Tulving. Their experiment used the exact task structure recreated here: judging words by capitalization (shallow, structural processing) versus judging words by whether they name a living thing (deep, semantic processing) — and found that deep processing produced substantially better recall, even though participants had no idea a memory test was coming.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why Meaning Beats Appearance for Memory",
    },
    {
      type: "paragraph",
      text: "The core idea is that memory isn't really about how long or how hard you study something — it's about how deeply you process it. Judging a word's capitalization only requires engaging with its surface visual form, leaving a fairly shallow, easily-forgotten trace. Judging whether a word represents something alive forces you to access its meaning and connect it to your broader knowledge, creating a richer, more distinctive, and more durable memory trace — even without any intention to memorize the word at all.",
    },
    {
      type: "heading",
      text: "How to Use This in Real Studying",
    },
    {
      type: "list",
      items: [
        "Instead of just re-reading notes (a shallow, appearance-level pass), actively ask what each concept means and how it connects to something you already know.",
        "Explaining material in your own words forces deeper semantic processing than simply highlighting or copying it.",
        "Generating your own examples of a concept engages meaning far more than passively recognizing an example someone else gives you.",
        "If something feels easy to review but hard to recall later, that's often a sign the processing was too shallow.",
      ],
    },
    {
      type: "callout",
      icon: "🧠",
      title: "A well-replicated finding",
      tone: "gold",
      text: "The deep-processing memory advantage has been replicated across dozens of studies since the 1970s — it's one of the more dependable findings in cognitive psychology.",
    },
    {
      type: "paragraph",
      text: "Curious about a different memory phenomenon? Try our [Serial Position Effect Test](/test/serial-position-test), which looks at how a word's position in a list — not how it's processed — shapes recall.",
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
          question: "What is the levels of processing theory?",
          answer:
            "It's a framework proposed by Fergus Craik and Robert Lockhart in 1972 suggesting that memory retention depends on how deeply information is processed at encoding, rather than simply how much time or repetition is spent on it.",
        },
        {
          question: "Why did I remember the 'deep' words better?",
          answer:
            "Judging meaning forces you to connect a word to your existing knowledge, creating a richer and more distinctive memory trace than a purely visual judgment like checking capitalization.",
        },
        {
          question: "Does this mean shallow processing is useless?",
          answer:
            "Not entirely — shallow processing still produces some memory trace, just a noticeably weaker one on average compared to processing that engages meaning.",
        },
        {
          question: "Can I apply this to studying for exams?",
          answer:
            "Yes — actively engaging with what material means, rather than just rereading or highlighting it, is one of the most consistently supported study strategies to come out of this line of research.",
        },
        {
          question: "Is this the same task used in the original research?",
          answer:
            "It closely follows the classic design from Craik and Tulving's 1975 study, using capitalization judgments for shallow processing and living/non-living judgments for deep processing.",
        },
      ],
    },
  ],
};
