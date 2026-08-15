import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can a detailed story make a logically narrower possibility feel more likely than the broader possibility that contains it?",
    },
    {
      type: "paragraph",
      text: "Take this free **Conjunction Fallacy Test**, inspired by the famous **Linda problem**. You will read six short descriptions of fictional people and choose which of two statements seems more probable.",
    },
    {
      type: "paragraph",
      text: "One option states a single condition.",
    },
    {
      type: "paragraph",
      text: "The other combines that condition with an additional condition.",
    },
    {
      type: "paragraph",
      text: "Under standard probability logic, a conjunction cannot be more probable than one of the events that contains it.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Conjunction Fallacy Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Read each person's description.",
        "Compare the two answer choices.",
        "Choose the statement you believe is more probable.",
        "Complete all 6 scenarios.",
        "Review how often you selected the combined statement.",
      ],
    },
    {
      type: "paragraph",
      text: "Try to answer the probability question rather than:",
    },
    {
      type: "paragraph",
      text: "**“Which option sounds more like this person?”**",
    },
    {
      type: "paragraph",
      text: "That distinction is the heart of the experiment.",
    },
    {
      type: "heading",
      id: "what-is",
      text: "What Is the Conjunction Fallacy?",
    },
    {
      type: "paragraph",
      text: "The **conjunction fallacy** occurs when people judge:",
    },
    {
      type: "paragraph",
      text: "**A and B**",
    },
    {
      type: "paragraph",
      text: "as more probable than:",
    },
    {
      type: "paragraph",
      text: "**A**",
    },
    {
      type: "paragraph",
      text: "alone.",
    },
    {
      type: "paragraph",
      text: "Under standard probability theory:",
    },
    {
      type: "paragraph",
      text: "**P(A and B) ≤ P(A)**",
    },
    {
      type: "paragraph",
      text: "The conjunction can equal the probability of A in a special case where B always occurs whenever A occurs.",
    },
    {
      type: "paragraph",
      text: "But it cannot exceed A.",
    },
    {
      type: "paragraph",
      text: "Why?",
    },
    {
      type: "paragraph",
      text: "Because every case in which **A and B** are both true is already included among the cases in which **A** is true.",
    },
    {
      type: "paragraph",
      text: "Adding another requirement cannot create more possible cases.",
    },
    {
      type: "heading",
      text: "The Famous Linda Problem",
    },
    {
      type: "paragraph",
      text: "Psychologists **Amos Tversky and Daniel Kahneman** published the landmark conjunction-fallacy paper in 1983.",
    },
    {
      type: "paragraph",
      text: "Participants read a description of a fictional woman named Linda.",
    },
    {
      type: "paragraph",
      text: "The description made her seem strongly associated with social-justice and feminist concerns.",
    },
    {
      type: "paragraph",
      text: "Participants then compared statements including:",
    },
    {
      type: "paragraph",
      text: "**Linda is a bank teller**",
    },
    {
      type: "paragraph",
      text: "and",
    },
    {
      type: "paragraph",
      text: "**Linda is a bank teller and active in the feminist movement**",
    },
    {
      type: "paragraph",
      text: "Many judged the combined statement as more probable.",
    },
    {
      type: "paragraph",
      text: "Yet every feminist bank teller is also a bank teller.",
    },
    {
      type: "paragraph",
      text: "The combined category is therefore a subset of the broader category.",
    },
    {
      type: "paragraph",
      text: "The finding became one of the most famous examples of conflict between intuitive plausibility and formal probability.",
    },
    {
      type: "heading",
      text: "Why the Combined Option Feels Better",
    },
    {
      type: "paragraph",
      text: "The detailed option fits the story more closely.",
    },
    {
      type: "paragraph",
      text: "That is where **representativeness** becomes important.",
    },
    {
      type: "paragraph",
      text: "People often judge probability partly by asking:",
    },
    {
      type: "paragraph",
      text: "**“How well does this outcome match the description?”**",
    },
    {
      type: "paragraph",
      text: "The feminist-bank-teller option matches Linda's profile better than the plain bank-teller option.",
    },
    {
      type: "paragraph",
      text: "But similarity to a story is not the same as probability.",
    },
    {
      type: "paragraph",
      text: "A highly representative outcome can still be mathematically less probable because it contains extra conditions.",
    },
    {
      type: "paragraph",
      text: "The fallacy occurs when that intuitive fit overrides the conjunction rule.",
    },
    {
      type: "heading",
      text: "The Set Logic Behind the Rule",
    },
    {
      type: "paragraph",
      text: "Imagine 1,000 people.",
    },
    {
      type: "paragraph",
      text: "Some are bank tellers.",
    },
    {
      type: "paragraph",
      text: "A smaller subset are both:",
    },
    {
      type: "paragraph",
      text: "**bank tellers AND feminist activists**",
    },
    {
      type: "paragraph",
      text: "Every member of the smaller group must also belong to the larger bank-teller group.",
    },
    {
      type: "paragraph",
      text: "Therefore:",
    },
    {
      type: "paragraph",
      text: "**number of bank tellers and activists ≤ number of bank tellers**",
    },
    {
      type: "paragraph",
      text: "The same structure applies to any conjunction.",
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "paragraph",
      text: "**teachers who run marathons**",
    },
    {
      type: "paragraph",
      text: "cannot be more numerous than:",
    },
    {
      type: "paragraph",
      text: "**teachers**",
    },
    {
      type: "paragraph",
      text: "because the first group is contained inside the second.",
    },
    {
      type: "paragraph",
      text: "This set relationship is the simplest way to see why the conjunction rule works.",
    },
    {
      type: "heading",
      text: "But Natural Language Creates an Important Complication",
    },
    {
      type: "paragraph",
      text: "The mathematics is strict.",
    },
    {
      type: "paragraph",
      text: "Human language is not always.",
    },
    {
      type: "paragraph",
      text: "Researchers have debated the Linda problem partly because words such as **“probable”** and **“and”** can be interpreted conversationally in more than one way.",
    },
    {
      type: "paragraph",
      text: "Some participants may read:",
    },
    {
      type: "paragraph",
      text: "**“Linda is a bank teller”**",
    },
    {
      type: "paragraph",
      text: "as implicitly meaning:",
    },
    {
      type: "paragraph",
      text: "**“Linda is a bank teller and not especially connected with feminism.”**",
    },
    {
      type: "paragraph",
      text: "That is not the formal logical meaning intended by the experiment.",
    },
    {
      type: "paragraph",
      text: "Research by Hertwig and colleagues has shown that wording and interpretation can influence conjunction responses.",
    },
    {
      type: "paragraph",
      text: "This does not eliminate the conjunction fallacy as a research phenomenon.",
    },
    {
      type: "paragraph",
      text: "It does mean that the cleanest interpretation separates:",
    },
    {
      type: "paragraph",
      text: "**the formal probability rule**",
    },
    {
      type: "paragraph",
      text: "from",
    },
    {
      type: "paragraph",
      text: "**the pragmatic way ordinary language is understood.**",
    },
    {
      type: "heading",
      text: "Frequency Formats Can Reduce the Error",
    },
    {
      type: "paragraph",
      text: "Another important finding is that people often reason better when the problem is presented using **natural frequencies**.",
    },
    {
      type: "paragraph",
      text: "Instead of asking:",
    },
    {
      type: "paragraph",
      text: "**“Which is more probable?”**",
    },
    {
      type: "paragraph",
      text: "you might ask:",
    },
    {
      type: "paragraph",
      text: "**“Out of 100 people matching this description, how many would be bank tellers, and how many would be bank tellers who are also feminist activists?”**",
    },
    {
      type: "paragraph",
      text: "The subset relationship becomes easier to visualize.",
    },
    {
      type: "paragraph",
      text: "Research has found that frequency-based representations can markedly reduce conjunction errors, although they do not remove them in every procedure.",
    },
    {
      type: "paragraph",
      text: "This suggests the format of probability information matters.",
    },
    {
      type: "heading",
      text: "Does Statistical Training Eliminate the Fallacy?",
    },
    {
      type: "paragraph",
      text: "No—but the strong claim that training never helps is also too simple.",
    },
    {
      type: "paragraph",
      text: "Tversky and Kahneman found conjunction errors even among statistically knowledgeable participants in some conditions.",
    },
    {
      type: "paragraph",
      text: "Later research shows that performance depends on:",
    },
    {
      type: "list",
      items: ["wording;", "response format;", "explicit probability instruction;", "frequency representation;", "statistical knowledge;", "and how transparent the subset relationship is."],
    },
    {
      type: "paragraph",
      text: "Formal knowledge can help when people actually apply it.",
    },
    {
      type: "paragraph",
      text: "The effect is therefore not proof that humans are incapable of probability reasoning.",
    },
    {
      type: "paragraph",
      text: "It shows how intuitive reasoning can compete with formal rules.",
    },
    {
      type: "heading",
      text: "What Does Your Score Mean?",
    },
    {
      type: "paragraph",
      text: "Your site gives you six scenarios.",
    },
    {
      type: "paragraph",
      text: "If you choose the conjunction on four of them, that means:",
    },
    {
      type: "paragraph",
      text: "**4 of your 6 responses violated the conjunction rule under the intended formal interpretation.**",
    },
    {
      type: "paragraph",
      text: "It does not mean:",
    },
    {
      type: "paragraph",
      text: "**“You are 67% irrational.”**",
    },
    {
      type: "paragraph",
      text: "Six items are too few to estimate a stable reasoning trait.",
    },
    {
      type: "paragraph",
      text: "The scenarios also vary in how convincing their descriptions are.",
    },
    {
      type: "paragraph",
      text: "Use the score as a compact demonstration of intuitive probability judgment.",
    },
    {
      type: "heading",
      text: "Conjunction Fallacy vs. Base-Rate Neglect",
    },
    {
      type: "paragraph",
      text: "These effects are related through the broader concept of representativeness but are not identical.",
    },
    {
      type: "paragraph",
      text: "**Conjunction fallacy:** a combined event is judged more probable than one of its components.",
    },
    {
      type: "paragraph",
      text: "**Base-rate neglect:** relevant prior probabilities are underweighted when vivid case information is available.",
    },
    {
      type: "paragraph",
      text: "The Linda description can encourage both kinds of reasoning, but the conjunction rule has a particularly clear mathematical constraint.",
    },
    {
      type: "heading",
      text: "Conjunction Fallacy vs. Gambler's Fallacy",
    },
    {
      type: "paragraph",
      text: "The [Gambler's Fallacy Test](/test/gamblers-fallacy-test) concerns mistaken beliefs about sequences of independent random events.",
    },
    {
      type: "paragraph",
      text: "The conjunction fallacy concerns probability relationships between overlapping categories or events.",
    },
    {
      type: "paragraph",
      text: "One asks:",
    },
    {
      type: "paragraph",
      text: "**“What happens next after a streak?”**",
    },
    {
      type: "paragraph",
      text: "The other asks:",
    },
    {
      type: "paragraph",
      text: "**“Can A-and-B be more likely than A?”**",
    },
    {
      type: "paragraph",
      text: "These are different errors.",
    },
    {
      type: "heading",
      text: "Why Stories Are So Powerful",
    },
    {
      type: "paragraph",
      text: "A coherent narrative can feel more convincing than a bland statistical statement.",
    },
    {
      type: "paragraph",
      text: "That is useful in ordinary life because stories help us organize information and infer likely causes.",
    },
    {
      type: "paragraph",
      text: "But a compelling story can become dangerous when it quietly replaces probability structure.",
    },
    {
      type: "paragraph",
      text: "A detailed prediction may sound realistic because every detail fits.",
    },
    {
      type: "paragraph",
      text: "Yet every added condition usually makes the full prediction less likely.",
    },
    {
      type: "paragraph",
      text: "For forecasting, that creates a useful discipline:",
    },
    {
      type: "paragraph",
      text: "**separate narrative coherence from mathematical probability.**",
    },
    {
      type: "heading",
      text: "How to Avoid the Conjunction Fallacy",
    },
    {
      type: "paragraph",
      text: "Before comparing two options, strip them down.",
    },
    {
      type: "paragraph",
      text: "Ask:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Does one option contain everything in the other plus an extra condition?",
        "Can I draw the options as sets?",
        "Is one set fully inside the other?",
        "Would a frequency format make the relationship clearer?",
        "Am I choosing the detailed option because it fits the story better?",
      ],
    },
    {
      type: "paragraph",
      text: "If one statement is literally:",
    },
    {
      type: "paragraph",
      text: "**A and B**",
    },
    {
      type: "paragraph",
      text: "while the other is:",
    },
    {
      type: "paragraph",
      text: "**A**",
    },
    {
      type: "paragraph",
      text: "then A-and-B cannot have the larger probability under standard logic.",
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
          question: "What is the conjunction fallacy?",
          answer: "It is judging two conditions together as more probable than one of those conditions alone.",
        },
        {
          question: "What was the Linda problem?",
          answer:
            "A famous Tversky and Kahneman experiment in which a detailed description made “bank teller and feminist activist” seem more likely than “bank teller.”",
        },
        {
          question: "Why is the combined option mathematically impossible to be more likely?",
          answer: "Because every A-and-B case is already included among the A cases.",
        },
        {
          question: "Does wording matter?",
          answer: "Yes. Research shows that conversational interpretation and probability format can change error rates.",
        },
        {
          question: "Do frequencies help?",
          answer: "Often. Presenting problems as counts out of a group can make subset relations easier to see.",
        },
        {
          question: "Does choosing the conjunction mean I am bad at logic?",
          answer: "No. A six-item browser test cannot measure overall logical ability.",
        },
        {
          question: "Is representativeness the only explanation?",
          answer: "It is the classic explanation, but language interpretation, task format, and other reasoning processes also influence responses.",
        },
      ],
    },
    {
      type: "heading",
      text: "Plausible Is Not the Same as Probable",
    },
    {
      type: "paragraph",
      text: "A richer story can feel like a better prediction.",
    },
    {
      type: "paragraph",
      text: "But probability follows set relationships, not narrative detail.",
    },
    {
      type: "paragraph",
      text: "When one option contains an extra requirement, ask the simplest possible question:",
    },
    {
      type: "paragraph",
      text: "**Can the smaller, more specific group contain more cases than the larger group it belongs to?**",
    },
    {
      type: "paragraph",
      text: "Once you see the sets clearly, the conjunction rule becomes much harder to miss.",
    },
  ],
};
