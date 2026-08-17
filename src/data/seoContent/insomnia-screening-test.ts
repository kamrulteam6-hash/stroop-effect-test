import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Do you regularly struggle to fall asleep? Wake repeatedly during the night? Wake much earlier than you intended? Or spend enough time in bed but still feel that poor sleep is interfering with your day? An Insomnia Screening Test helps you examine the severity and impact of insomnia-like symptoms.",
    },
    {
      type: "paragraph",
      text: "This test is a screening tool, not a diagnosis. Persistent sleep problems can have many causes, and diagnosing insomnia requires more than an online score. If your sleep difficulty is severe, persistent, suddenly changing, or affecting safety and daily functioning, discuss it with a qualified healthcare professional.",
    },
    { type: "heading", id: "what-is-insomnia", text: "What Is Insomnia?" },
    {
      type: "paragraph",
      text: "Insomnia involves difficulty sleeping despite having an adequate opportunity to sleep, together with distress or daytime impairment. Common nighttime patterns include difficulty falling asleep, difficulty staying asleep, repeated awakenings, difficulty returning to sleep, and waking earlier than desired. The daytime consequences matter too — a person can occasionally sleep badly without having insomnia disorder. Clinical insomnia is defined by a broader pattern involving frequency, duration, opportunity for sleep, and impact on functioning.",
    },
    { type: "heading", id: "chronic-criteria", text: "Chronic Insomnia Criteria" },
    {
      type: "paragraph",
      text: "Modern diagnostic criteria generally require more than simply saying \"I sleep badly.\" For chronic insomnia disorder, key features include difficulty initiating sleep, maintaining sleep, or early-morning awakening; clinically important distress or daytime impairment; symptoms occurring at least three nights per week; symptoms lasting at least three months; and adequate opportunity and circumstances for sleep. Other sleep disorders, substances, medical conditions, and mental health conditions may also need consideration — an online screening score cannot complete that differential diagnosis.",
    },
    { type: "heading", id: "what-it-measures", text: "What Does an Insomnia Screening Test Measure?" },
    {
      type: "paragraph",
      text: "A useful screener should examine both nighttime sleep difficulty and daytime impact. Areas can include sleep onset (how difficult is it to fall asleep), sleep maintenance (how often do you wake and struggle to return to sleep), early waking (do you wake earlier than intended and remain awake), sleep satisfaction (how satisfied are you with your current sleep pattern), daytime interference (does poor sleep affect concentration, mood, energy, work, school, relationships, or daily functioning), and worry about sleep (how distressed or preoccupied are you about your sleep). The severity of insomnia is not captured by one clock measurement alone.",
    },
    { type: "heading", id: "isi", text: "The Insomnia Severity Index" },
    {
      type: "paragraph",
      text: "The Insomnia Severity Index, or ISI, is one of the most widely used self-report insomnia measures. It contains seven items and asks about both nighttime and daytime aspects of insomnia. The total score ranges from 0 to 28.",
    },
    {
      type: "table",
      headers: ["ISI Score", "Common Interpretation"],
      rows: [
        ["0–7", "No clinically significant insomnia"],
        ["8–14", "Subthreshold insomnia"],
        ["15–21", "Moderate insomnia"],
        ["22–28", "Severe insomnia"],
      ],
    },
    {
      type: "paragraph",
      text: "These bands describe symptom severity on the ISI. They are not, by themselves, a complete medical diagnosis.",
    },
    {
      type: "callout",
      icon: "ℹ️",
      title: "ISI licensing note",
      tone: "primary",
      text: "The official ISI is copyrighted and distributed by Mapi Research Trust on behalf of its copyright holder, Professor Charles Morin. This site's test uses original insomnia-screening questions covering similar symptom domains — it is not the official ISI.",
    },
    { type: "heading", id: "trouble-falling-asleep", text: "Trouble Falling Asleep" },
    {
      type: "paragraph",
      text: "Sleep-onset difficulty means taking longer than expected or desired to fall asleep. Occasional difficulty can happen after stress, travel, excitement, caffeine, or schedule changes. The pattern becomes more clinically relevant when it is persistent and creates distress or daytime consequences. Clock-watching can make the experience feel even worse, which is why insomnia assessment considers the whole pattern rather than one night's estimated sleep-onset time.",
    },
    { type: "heading", id: "vs-short-sleep", text: "Insomnia vs. Short Sleep by Choice" },
    {
      type: "paragraph",
      text: "Suppose you sleep five hours because you stay up working or watching videos even though you could sleep longer. That is not the same as allowing eight hours for sleep but spending much of that time unable to sleep. Insomnia involves sleep difficulty despite adequate opportunity. Voluntary sleep restriction can still cause serious fatigue and health problems, but the mechanism is different — a screening page should not label every short sleeper as having insomnia.",
    },
    { type: "heading", id: "vs-sleep-quality", text: "Insomnia vs. Poor Sleep Quality" },
    {
      type: "paragraph",
      text: "Poor sleep quality is broader. You may sleep poorly because of insomnia, sleep apnea, restless legs, pain, environmental noise, circadian misalignment, substance use, or another health problem. Our [Sleep Quality Test](/test/sleep-quality-test) can examine the broader experience of sleep, while this Insomnia Screening Test focuses specifically on insomnia-like difficulty initiating or maintaining sleep and its consequences.",
    },
    { type: "heading", id: "vs-chronotype", text: "Insomnia vs. Sleep Chronotype" },
    {
      type: "paragraph",
      text: "Being a night owl is not automatically insomnia. A person with a late chronotype may sleep well when allowed to follow a later schedule. The problem appears when required sleep times conflict with the body's preferred timing — that can look like \"I cannot fall asleep at 10 p.m.\" but may represent circadian timing rather than insomnia. Our [Sleep Chronotype Test](/test/sleep-chronotype-test) explores preferred sleep timing separately.",
    },
    { type: "heading", id: "what-result-means", text: "What Your Screening Result Means" },
    {
      type: "paragraph",
      text: "Few insomnia-like symptoms mean you report little current difficulty in the areas covered by this screener — occasional bad nights are still normal. A mild or subthreshold pattern means you may have some symptoms without the frequency, duration, or impact associated with more severe insomnia, though this can still be worth addressing if it is distressing. A more significant pattern means you report more frequent or disruptive sleep difficulty — if symptoms are persistent, especially for three months or longer and at least three nights per week, professional assessment may be appropriate. The score alone does not establish a diagnosis.",
    },
    { type: "heading", id: "daytime-impact", text: "Why Daytime Impact Matters" },
    {
      type: "paragraph",
      text: "Sleep is not evaluated only at night. Insomnia may affect concentration, memory, mood, energy, motivation, work performance, school performance, and driving safety. Someone who takes slightly longer to fall asleep but functions well may have a different clinical picture from someone whose sleep problems severely disrupt daily life. That is why good screening includes impairment.",
    },
    { type: "heading", id: "other-sleep-disorders", text: "Insomnia and Other Sleep Disorders" },
    {
      type: "paragraph",
      text: "Not every sleep problem is insomnia. Professional evaluation may need to consider symptoms such as loud snoring, witnessed breathing pauses, gasping during sleep, uncomfortable urges to move the legs, unusual nighttime behaviors, extreme daytime sleepiness, or highly irregular sleep timing. Those patterns can point toward other sleep disorders that an insomnia quiz is not designed to identify.",
    },
    { type: "heading", id: "what-helps", text: "What Helps Persistent Insomnia?" },
    {
      type: "paragraph",
      text: "For chronic insomnia, cognitive behavioral therapy for insomnia, usually called CBT-I, is a well-established first-line treatment approach. CBT-I is more than generic sleep-hygiene advice — it commonly includes behavioral and cognitive methods targeting the patterns that maintain insomnia. Treatment should be individualized, especially when medical conditions, medications, mental health concerns, or other sleep disorders may be involved. Do not use an online test result to self-prescribe sedating medication.",
    },
    { type: "heading", id: "when-to-seek-help", text: "When to Seek Medical Help" },
    {
      type: "paragraph",
      text: "Consider professional assessment if sleep problems persist for months, occur several nights per week, significantly impair daytime functioning, create severe distress, begin suddenly without explanation, occur with breathing problems, occur with dangerous daytime sleepiness, or happen alongside major mood or health changes. If sleepiness affects driving or operation of machinery, safety takes priority.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is an Insomnia Screening Test?", answer: "It is a questionnaire that explores insomnia-like symptoms such as difficulty falling asleep, staying asleep, early waking, sleep dissatisfaction, and daytime impact." },
        { question: "What is the Insomnia Severity Index?", answer: "The ISI is a seven-item self-report instrument designed to measure perceived insomnia severity and impact." },
        { question: "Can an online test diagnose insomnia?", answer: "No. Screening can identify symptom patterns, but diagnosis requires a broader clinical assessment." },
        { question: "How long must insomnia last to be considered chronic?", answer: "Common modern diagnostic criteria use a duration of at least three months, with difficulty occurring at least three nights per week." },
        { question: "Is sleeping only five hours automatically insomnia?", answer: "No. Insomnia requires difficulty sleeping despite adequate opportunity. Voluntarily restricting sleep is a different problem." },
        { question: "Is insomnia the same as being a night owl?", answer: "No. Chronotype describes preferred sleep timing. A late chronotype can create schedule conflict without necessarily causing insomnia." },
      ],
    },
    { type: "heading", text: "Insomnia Is About More Than One Bad Night" },
    {
      type: "paragraph",
      text: "Almost everyone has nights when sleep refuses to cooperate. Screening becomes useful when the problem forms a pattern. How often does it happen? How long has it been happening? Do you have enough opportunity to sleep? Does it affect your day? Those questions matter more than one frustrating night. Use your result to understand the pattern — if the pattern is persistent or disruptive, use it as a reason to seek a fuller assessment, not as a diagnosis from a browser.",
    },
  ],
};
