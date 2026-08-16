import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Most people are not one career type. You may enjoy solving analytical problems, helping people, and creating new things. The RIASEC Test is designed to measure that full pattern.",
    },
    {
      type: "paragraph",
      text: "Take this free career-interest assessment to compare six vocational-interest dimensions: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional. Unlike our [Holland Code Career Test](/test/holland-code-test), this result emphasizes the entire six-score profile, not just the top three letters.",
    },
    { type: "heading", id: "what-does-riasec-mean", text: "What Does RIASEC Mean?" },
    {
      type: "paragraph",
      text: "RIASEC is an acronym for six broad vocational-interest types. R is Realistic — practical, hands-on, physical, technical, or outdoor activities. I is Investigative — analyzing, researching, understanding, and solving complex problems. A is Artistic — creating, expressing, designing, and working with less rigid structure. S is Social — helping, teaching, supporting, advising, and communicating. E is Enterprising — leading, persuading, influencing, deciding, and business-oriented activity. C is Conventional — organizing, recording, structuring, managing data, and following procedures. These six dimensions form the basis of John Holland's influential vocational-interest model.",
    },
    { type: "heading", id: "interest-model", text: "RIASEC Is an Interest Model" },
    {
      type: "paragraph",
      text: "RIASEC does not directly measure intelligence, aptitude, skill, personality disorder, or employability. It asks which work activities you tend to like, dislike, find interesting, or want to explore. Asking \"are you good at repairing machines?\" partly measures self-evaluated ability. Asking \"how much would you enjoy repairing a mechanical device?\" is much closer to Realistic interest.",
    },
    { type: "heading", id: "onet-interest-profiler", text: "The O*NET Interest Profiler" },
    {
      type: "paragraph",
      text: "The U.S. Department of Labor's O*NET Interest Profiler is one of the most widely used modern implementations of the RIASEC framework, designed for educational planning, career exploration, and career guidance. Its current tools measure the six RIASEC interest areas and link results directly to hundreds of occupations. The current O*NET Mini Interest Profiler uses 30 items, while its longer Short Form uses 60. This site does not have to duplicate either format, but preserves the key principle: balanced activity-based measurement across all six categories.",
    },
    { type: "heading", id: "realistic-interest", text: "Realistic Interest" },
    {
      type: "paragraph",
      text: "Realistic interests often involve direct interaction with tools, equipment, materials, plants, animals, and outdoor environments — for example, how much would you enjoy repairing a bicycle, building a wooden structure, operating equipment, or caring for farm animals? Realistic does not mean \"not academic\" — some Realistic careers require extensive technical education. The category describes preferred activities.",
    },
    { type: "heading", id: "investigative-interest", text: "Investigative Interest" },
    {
      type: "paragraph",
      text: "Investigative interests focus on analyzing, researching, diagnosing, understanding, experimenting, and solving problems — investigating why a system failed, analyzing scientific data, researching a medical question, or testing competing explanations. Investigative interest can appear in science, medicine, technology, research, and analytics — it is an interest orientation, not an IQ score.",
    },
    { type: "heading", id: "artistic-interest", text: "Artistic Interest" },
    {
      type: "paragraph",
      text: "Artistic interests involve creating, designing, writing, performing, expressing, and experimenting with original ideas — designing a visual identity, writing a story, composing music, or creating an original presentation. Artistic interests can exist in technical fields too — a product designer may combine Artistic, Investigative, and Enterprising interests.",
    },
    { type: "heading", id: "social-interest", text: "Social Interest" },
    {
      type: "paragraph",
      text: "Social interests involve helping, teaching, counseling, supporting, advising, and communicating — teaching someone a new skill, helping a person solve a personal problem, coaching a learner, or supporting patients or clients. Social interest is not the same as extroversion — someone may prefer one-to-one helping work and dislike large social events.",
    },
    { type: "heading", id: "enterprising-interest", text: "Enterprising Interest" },
    {
      type: "paragraph",
      text: "Enterprising interests involve influencing, leading, persuading, negotiating, and making business decisions — leading a project, negotiating a deal, pitching an idea, or organizing a business initiative. Enterprising interest may appear in sales, management, entrepreneurship, politics, and business development — it should not be confused with general ambition or narcissism.",
    },
    { type: "heading", id: "conventional-interest", text: "Conventional Interest" },
    {
      type: "paragraph",
      text: "Conventional interests involve organizing, recording, structuring, checking, working with data, and using established procedures — organizing financial records, maintaining a structured database, checking forms for accuracy, or following a detailed administrative process. Conventional work can be highly skilled — the category describes preference for structured information and routines.",
    },
    { type: "heading", id: "full-profile", text: "Your Full Six-Score Profile" },
    {
      type: "paragraph",
      text: "Suppose you score R=12, I=27, A=25, S=24, E=18, C=10. A simple Holland Code would emphasize IAS. The RIASEC profile shows more — that I, A, and S are all strong, E is moderate, and R and C are lower. That richer pattern can help explain why one occupation feels more attractive than another even when both share the same first interest.",
    },
    { type: "heading", id: "fourth-score", text: "Why the Fourth Score Can Matter" },
    {
      type: "paragraph",
      text: "Suppose R=23, I=22, A=21, S=20. Your top three are RIA, but Social is only one point lower than Artistic. Calling the user simply an \"RIA type\" throws away information. This test explicitly shows score distance, ties, and near-ties — a major reason to keep it separate from the Holland Code page.",
    },
    { type: "heading", id: "interests-vs-abilities", text: "Interests vs. Abilities" },
    {
      type: "paragraph",
      text: "Interest is \"I enjoy analyzing data.\" Ability is \"I perform well on quantitative reasoning tasks.\" They can align — they can also diverge. Career exploration becomes much more useful when you compare RIASEC with your [Career Aptitude Test](/test/career-aptitude-test) results. High Investigative interest plus high numerical aptitude may strengthen interest in analytic career exploration. High Investigative interest plus lower current numerical aptitude may suggest developing quantitative skills or exploring Investigative careers that rely less heavily on mathematics. Neither result should veto the other.",
    },
    { type: "heading", id: "interests-vs-work-style", text: "Interests vs. Work Style" },
    {
      type: "paragraph",
      text: "Our [Career Personality Test](/test/career-personality-test) adds another layer. Two people can both score high on Social interest — one with high social orientation, high leadership orientation, and high ambiguity tolerance, the other with high empathy, high dependability, lower leadership preference, and a strong preference for structure. Both may enjoy helping careers, but prefer very different roles. RIASEC tells you what kind of activity attracts you; work style helps describe how you prefer to do the work.",
    },
    { type: "heading", id: "occupational-profiles", text: "Occupational Interest Profiles" },
    {
      type: "paragraph",
      text: "O*NET maintains interest information for occupations, allowing a useful matching process: measure the user's RIASEC interests, compare them with occupational interest profiles, and surface occupations with similar activity patterns. This is one of the strongest practical reasons to use RIASEC on a career website — interest results can be connected to real occupations rather than left as abstract labels.",
    },
    { type: "heading", id: "vs-holland-code", text: "RIASEC vs. Holland Code Career Test" },
    {
      type: "paragraph",
      text: "Our [Holland Code Career Test](/test/holland-code-test) makes the three-letter code the hero, best for \"what is my 3-letter code?\" This RIASEC Test makes the six-dimensional profile the hero, best for \"what is my complete vocational-interest profile?\" The same underlying theory supports both pages without making them identical.",
    },
    { type: "heading", id: "question-writing", text: "Question Writing" },
    {
      type: "paragraph",
      text: "This test uses activities that are concrete, understandable, and broad enough to avoid one occupation — \"analyze the results of an experiment\" rather than \"be a biostatistical epidemiologist.\" The first measures Investigative interest cleanly; the second mixes knowledge of a job title, prestige, imagined salary, and career familiarity.",
    },
    { type: "heading", id: "avoid-ability-language", text: "Avoid Ability Language" },
    {
      type: "paragraph",
      text: "This test asks \"how much would you enjoy designing a poster?\" not \"how good would you be at designing a poster?\" It asks \"how much would you enjoy repairing a machine?\" not \"could you repair a machine?\" This simple wording choice protects the interest construct.",
    },
    { type: "heading", id: "scoring", text: "Scoring the Six Areas" },
    {
      type: "paragraph",
      text: "Each category receives the same number of items — four per type, rated 1–5, so each scale ranges from 4–20 before converting to a percentage. All six are shown, keeping the scoring transparent rather than collapsing everything into one hidden composite.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Six RIASEC Scores** — R, I, A, S, E, C.",
        "**Top Interest** — highest score.",
        "**Secondary Interests** — other strong dimensions.",
        "**Holland Code** — optional three-letter summary.",
        "**Profile Shape** — clear peaks vs. close scores.",
        "**Related Tests** — Career Aptitude and Career Personality.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good RIASEC Score?" },
    {
      type: "paragraph",
      text: "There is no good or bad interest type. High Conventional is not worse than high Artistic. High Realistic is not less intelligent than high Investigative. These are preferences — the useful question is which work activities fit what you naturally enjoy.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does RIASEC stand for?",
          answer: "Realistic, Investigative, Artistic, Social, Enterprising, and Conventional.",
        },
        {
          question: "Is RIASEC the same as Holland Code?",
          answer: "The Holland Code is commonly a three-letter summary derived from RIASEC interests. The full RIASEC profile includes all six scores.",
        },
        {
          question: "Is RIASEC a personality test?",
          answer: "It is primarily a vocational-interest model, not a broad personality assessment.",
        },
        {
          question: "Does RIASEC measure aptitude?",
          answer: "No. It measures interests, not ability.",
        },
        {
          question: "Can I have four strong RIASEC areas?",
          answer: "Yes. The full profile can show several close or strong interests even if a three-letter code summarizes only the top three.",
        },
        {
          question: "Is there a best RIASEC type?",
          answer: "No. Different interest profiles fit different work activities.",
        },
        {
          question: "Can my results change?",
          answer: "Yes. Interests can develop and change with experience.",
        },
      ],
    },
    { type: "heading", text: "Your Lowest Score Can Be Useful Too" },
    {
      type: "paragraph",
      text: "Career tests often focus only on \"what did I score highest?\" But low-interest areas also provide information. If you strongly dislike repetitive data organization, constant persuasion, or hands-on repair, that can help eliminate environments that may drain you. The strongest RIASEC result is not merely a label — it is a map of what attracts you, what does not, and which combinations are worth exploring next.",
    },
  ],
};
