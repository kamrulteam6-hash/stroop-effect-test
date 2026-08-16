import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "A Holland Code is a simple way to summarize your strongest vocational interests. Instead of saying \"I like some creative work, some analytical work, and some people-focused work,\" a Holland-style result can express your top interests with three letters — for example, IAS for Investigative, Artistic, Social.",
    },
    {
      type: "paragraph",
      text: "Take this free Holland Code Career Test to identify your strongest career-interest areas and build a three-letter code for career exploration. The code helps you explore possibilities — it does not tell you that only one career is suitable.",
    },
    { type: "heading", id: "what-is", text: "What Is a Holland Code?" },
    {
      type: "paragraph",
      text: "The Holland model organizes vocational interests into six broad categories: R — Realistic, I — Investigative, A — Artistic, S — Social, E — Enterprising, C — Conventional. Together, these are called RIASEC. A Holland Code usually summarizes the strongest interest areas, often using the top three letters — for example, SEC might indicate stronger Social, Enterprising, and Conventional interests. The code is an interest profile, not an IQ score, aptitude score, or personality diagnosis.",
    },
    { type: "heading", id: "where-from", text: "Where Does the Holland Model Come From?" },
    {
      type: "paragraph",
      text: "The model is associated with psychologist John Holland, whose theory of vocational personalities and work environments became highly influential in career counseling. The U.S. Department of Labor's O*NET Interest Profiler is explicitly based on Holland's RIASEC model, currently using the six categories to help users identify work-related interests and explore occupations — giving the Holland Code a strong and practical connection to modern career exploration.",
    },
    { type: "heading", id: "realistic", text: "Realistic — R" },
    {
      type: "paragraph",
      text: "Realistic interests involve practical, hands-on activities — building, repairing, operating equipment, working outdoors, and working with tools or physical materials. Career areas can include skilled trades, engineering technology, construction, agriculture, transportation, and mechanics. Realistic does not mean unintellectual — it describes preferred activity type.",
    },
    { type: "heading", id: "investigative", text: "Investigative — I" },
    {
      type: "paragraph",
      text: "Investigative interests involve ideas, analysis, research, problem solving, and understanding how things work. Career areas can include science, medicine, analytics, engineering, technology, and research. Investigative interest is not the same as intelligence — it describes what kinds of activities attract you.",
    },
    { type: "heading", id: "artistic", text: "Artistic — A" },
    {
      type: "paragraph",
      text: "Artistic interests involve creating, designing, expressing, imagining, and working with fewer rigid rules — writing, visual design, performance, music, media, and creative problem solving. Career areas can include design, writing, media, arts, and creative direction. An Artistic score should not be interpreted narrowly as \"you should become a painter\" — creativity appears in many industries.",
    },
    { type: "heading", id: "social", text: "Social — S" },
    {
      type: "paragraph",
      text: "Social interests involve helping, teaching, supporting, advising, and communicating. Career areas may include education, counseling, healthcare, social services, and training. Social interest is not simply \"being extroverted\" — someone can prefer meaningful helping work while still enjoying quiet or one-to-one interaction.",
    },
    { type: "heading", id: "enterprising", text: "Enterprising — E" },
    {
      type: "paragraph",
      text: "Enterprising interests involve leading, persuading, making decisions, influencing, and business activity. Career areas can include management, sales, entrepreneurship, business development, and leadership. Enterprising does not automatically mean aggressive — the category is about attraction to influence, leadership, and business-oriented activities.",
    },
    { type: "heading", id: "conventional", text: "Conventional — C" },
    {
      type: "paragraph",
      text: "Conventional interests involve data, detail, organization, procedures, and regular routines — maintaining records, organizing information, working with structured systems, and following established procedures. Career areas can include accounting, administration, finance operations, records, and logistics. Conventional does not mean uncreative — it means structured activities are relatively appealing.",
    },
    { type: "heading", id: "how-code-works", text: "How the Three-Letter Code Works" },
    {
      type: "paragraph",
      text: "Suppose your scores are Investigative 28, Artistic 25, Social 24, Realistic 15, Enterprising 13, Conventional 10 — your code would be IAS. The order matters: I is your strongest area, A is second, S is third. But the code is only a summary; the full six-score profile contains more information, which is why our separate [RIASEC Test](/test/riasec-test) provides a deeper six-dimension interpretation.",
    },
    { type: "heading", id: "close-scores", text: "Close Scores Matter" },
    {
      type: "paragraph",
      text: "Suppose Investigative 25, Artistic 24, Social 24, Enterprising 23 — a three-letter code has to leave one category out, but the fourth score is nearly identical. This test avoids pretending that IAS is radically different from IAE when scores are close, showing all six scores, the top three code, and the score gaps. The code is easier to remember, but the profile is more accurate.",
    },
    { type: "heading", id: "not-a-box", text: "A Code Is Not a Box" },
    {
      type: "paragraph",
      text: "Someone with RIC is not forbidden from entering a Social career. Interests can overlap, change, develop, and depend on experience, and career environments themselves are also mixed — a physician, for example, may use Investigative interests in diagnosis, Social interests in patient care, and Conventional interests in records and procedures. The code helps narrow exploration; it does not dictate identity.",
    },
    { type: "heading", id: "vs-career-aptitude", text: "Holland Code vs. Career Aptitude" },
    {
      type: "paragraph",
      text: "Our [Career Aptitude Test](/test/career-aptitude-test) asks what kinds of tasks you appear to perform well. The Holland Code asks what kinds of work activities interest you. Someone may show high mechanical aptitude but low Realistic interest — capable of hands-on technical work but not especially attracted to it. That distinction can prevent poor career recommendations.",
    },
    { type: "heading", id: "vs-career-personality", text: "Holland Code vs. Career Personality" },
    {
      type: "paragraph",
      text: "Our [Career Personality Test](/test/career-personality-test) asks how you tend to approach work. Holland Code asks what activities you enjoy. Two people can both have high Investigative interests — one may be highly social and leadership-oriented, the other may prefer independent concentration and stable routines. Their ideal work environments may differ even though their Holland Codes are similar.",
    },
    { type: "heading", id: "vs-riasec", text: "Holland Code vs. RIASEC Test" },
    {
      type: "paragraph",
      text: "These two pages need deliberate separation. This Holland Code Career Test answers \"what is my three-letter career code, and what careers match it?\" — emphasizing top three interests, code, and matched career exploration. Our [RIASEC Test](/test/riasec-test) answers \"what do all six RIASEC dimensions mean in my profile?\" — emphasizing six scores, balance, and strongest and weakest areas. Same theory, different product experience.",
    },
    { type: "heading", id: "question-design", text: "Question Design" },
    {
      type: "paragraph",
      text: "The test asks about activities, not job prestige — \"how much would you enjoy repairing a mechanical device?\" rather than \"would you like to be a famous engineer?\" The first targets an interest; the second mixes status, occupation stereotypes, and imagined salary. O*NET's Interest Profiler is also activity-focused, a strong model for vocational-interest assessment.",
    },
    { type: "heading", id: "like-vs-ability", text: "Like vs. Ability" },
    {
      type: "paragraph",
      text: "The test asks \"would you like doing this activity?\" not \"are you good at it?\" That keeps the construct clean — a user can enjoy writing stories without believing they are currently a skilled writer. Interest and skill can develop together, but they should not be confused during scoring.",
    },
    { type: "heading", id: "career-matching", text: "Career Matching" },
    {
      type: "paragraph",
      text: "After scoring, users can explore careers by first interest, top two, or top three. O*NET OnLine currently supports career exploration using up to three interest areas, which aligns naturally with Holland Code search intent — showing your top code followed by career areas commonly associated with that pattern.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Your Holland Code** — top three letters.",
        "**All Six Interest Scores** — R, I, A, S, E, C.",
        "**Top Interest** — strongest activity preference.",
        "**Secondary Interests** — additional themes.",
        "**Career Matches** — occupations with similar interest profiles.",
        "**Related Tests** — Career Aptitude, Career Personality, RIASEC.",
      ],
    },
    { type: "heading", id: "good-code", text: "What Is a Good Holland Code?" },
    {
      type: "paragraph",
      text: "There is no best code. RIA is not better than SEC. Each pattern represents different preferred activities — the goal is fit, not rank. Career tests become harmful when they make one interest pattern sound more intelligent, prestigious, or valuable than another.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is a Holland Code?",
          answer: "A summary of your strongest vocational interests using letters from the RIASEC model.",
        },
        {
          question: "What does RIASEC stand for?",
          answer: "Realistic, Investigative, Artistic, Social, Enterprising, and Conventional.",
        },
        {
          question: "How many letters are in a Holland Code?",
          answer: "Career exploration commonly emphasizes the top three interest areas.",
        },
        {
          question: "Is Holland Code an aptitude test?",
          answer: "No. It measures interests, not ability.",
        },
        {
          question: "Is Holland Code a personality test?",
          answer: "It is based on a vocational-interest theory sometimes described using vocational personality language, but the score primarily represents work interests.",
        },
        {
          question: "Can two different codes fit me?",
          answer: "Yes, especially when several interest scores are close.",
        },
        {
          question: "Does my code determine my career?",
          answer: "No. It helps you explore careers whose activities may be more appealing.",
        },
      ],
    },
    { type: "heading", text: "Use the Code as a Doorway, Not a Label" },
    {
      type: "paragraph",
      text: "A Holland Code is useful because three letters are easy to remember. But your career is not three letters. The code is a shortcut into a larger conversation: what kinds of activities energize me? What work environments fit those interests? Do my abilities support that path? Does the lifestyle fit my values? Use the code to open possibilities, not close them.",
    },
  ],
};
