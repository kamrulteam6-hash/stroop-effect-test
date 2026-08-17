import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "You can spend eight hours in bed and still feel that you slept badly. You can also sleep less than usual for one night and wake feeling fine. A Sleep Quality Test looks beyond hours alone and asks how well your sleep actually works over the past month.",
    },
    {
      type: "paragraph",
      text: "This assessment can examine perceived sleep quality, time to fall asleep, sleep duration, sleep efficiency, nighttime disturbances, sleep-related medication use, and daytime dysfunction. This is a screening and self-reflection tool, not a diagnosis of insomnia, sleep apnea, restless legs syndrome, or another sleep disorder.",
    },
    { type: "heading", id: "what-is-sleep-quality", text: "What Is Sleep Quality?" },
    {
      type: "paragraph",
      text: "Sleep quality is a broad concept describing how satisfactory and restorative your sleep feels and how well your sleep pattern supports daytime functioning. It includes both subjective and behavioral features — how easily you fall asleep, how often you wake, how long you sleep, whether you feel rested, and whether poor sleep interferes with daytime function. That is why sleep duration alone cannot define sleep quality.",
    },
    { type: "heading", id: "psqi", text: "The Pittsburgh Sleep Quality Index" },
    {
      type: "paragraph",
      text: "The most widely known research questionnaire in this area is the Pittsburgh Sleep Quality Index, or PSQI. Daniel Buysse and colleagues introduced the PSQI in 1989. It assesses sleep quality and sleep disturbances over a one-month interval, using 19 self-rated items that contribute to scoring. The PSQI became widely used in clinical research and sleep studies. This site's test uses original questions inspired by the same major domains — it is not the official PSQI.",
    },
    { type: "heading", id: "seven-components", text: "The Seven PSQI Components" },
    {
      type: "paragraph",
      text: "The PSQI organizes sleep into seven components: Subjective Sleep Quality, Sleep Latency, Sleep Duration, Habitual Sleep Efficiency, Sleep Disturbances, Use of Sleeping Medication, and Daytime Dysfunction. Each component captures a different problem, and two people can receive similar overall scores through very different sleep profiles — that is why component-level feedback is valuable.",
    },
    { type: "heading", id: "subjective-quality", text: "Subjective Sleep Quality" },
    {
      type: "paragraph",
      text: "This asks the simplest question: how would you rate your sleep overall? Subjective judgment matters — a wearable device may report a certain amount of sleep, yet the person may feel restless, unrefreshed, or dissatisfied. Conversely, someone may report good sleep despite small variations in objective measures. Sleep quality is partly subjective by definition.",
    },
    { type: "heading", id: "sleep-latency", text: "Sleep Latency" },
    {
      type: "paragraph",
      text: "Sleep latency is the amount of time between trying to sleep and actually falling asleep. Occasionally taking longer is common; persistent difficulty can reduce perceived sleep quality. But exact estimates are difficult, since people do not usually know the precise minute they fell asleep — self-reported sleep latency is an estimate rather than a stopwatch measurement.",
    },
    { type: "heading", id: "sleep-duration", text: "Sleep Duration" },
    {
      type: "paragraph",
      text: "Duration answers how much sleep you obtained. Sleep need differs across individuals and age groups, so a Sleep Quality Test should report duration without pretending that one number is ideal for every person. More sleep is also not automatically better — very long sleep can occur for many reasons. The useful question is whether your amount of sleep is sufficient and compatible with good daytime functioning.",
    },
    { type: "heading", id: "sleep-efficiency", text: "Habitual Sleep Efficiency" },
    {
      type: "paragraph",
      text: "Sleep efficiency compares time actually asleep with time spent in bed, roughly time asleep divided by time in bed times 100. If you spend eight hours in bed but estimate only six hours asleep, sleep efficiency is lower than if you sleep for most of the time you are in bed. This metric is especially useful because long time in bed can hide fragmented or inefficient sleep.",
    },
    { type: "heading", id: "sleep-disturbances", text: "Sleep Disturbances" },
    {
      type: "paragraph",
      text: "Sleep can be disrupted by many experiences, such as waking during the night, needing the bathroom, uncomfortable temperature, pain, coughing, disturbing dreams, or breathing-related symptoms. A questionnaire can identify that disturbances are present, but it cannot always identify the medical cause. Repeated loud snoring, gasping, or breathing pauses deserve different attention from ordinary occasional waking.",
    },
    { type: "heading", id: "daytime-dysfunction", text: "Daytime Dysfunction" },
    {
      type: "paragraph",
      text: "Poor sleep often matters because of what happens after waking — difficulty with concentration, alertness, energy, motivation, driving, work, or school. A person may tolerate a slightly unusual sleep schedule without impairment, while another person's disturbed sleep may create major daytime difficulty. That impact is part of the sleep-quality picture.",
    },
    { type: "heading", id: "vs-insomnia", text: "Sleep Quality vs. Insomnia" },
    {
      type: "paragraph",
      text: "Our [Insomnia Screening Test](/test/insomnia-screening-test) focuses specifically on insomnia-like symptoms: difficulty falling asleep, difficulty staying asleep, early waking, distress, and daytime impairment. Sleep quality is broader — poor sleep can occur because of insomnia, breathing problems, pain, circadian mismatch, environmental disturbance, or other medical or behavioral factors. So a poor Sleep Quality Test score does not automatically mean insomnia.",
    },
    { type: "heading", id: "vs-chronotype", text: "Sleep Quality vs. Chronotype" },
    {
      type: "paragraph",
      text: "Chronotype asks when your body prefers to sleep. Sleep quality asks how well your sleep works. A person may have a late chronotype but excellent sleep when allowed a late schedule, while another may have an early chronotype and fragmented sleep. Use our [Sleep Chronotype Test](/test/sleep-chronotype-test) for timing preference, and this page for quality and disturbance.",
    },
    { type: "heading", id: "global-score", text: "What Does the PSQI Global Score Mean?" },
    {
      type: "paragraph",
      text: "In the original PSQI, component scores are combined into a global score, with higher scores indicating poorer sleep quality. A frequently used cutoff is greater than 5, which in the original validation distinguished poorer sleepers from better sleepers with useful diagnostic sensitivity and specificity in the study sample. However, cutoff performance can differ across populations, and an online test should not present one threshold as a universal medical diagnosis.",
    },
    { type: "heading", id: "one-bad-night", text: "One Bad Night vs. a Sleep Pattern" },
    {
      type: "paragraph",
      text: "A quality assessment should not overreact to yesterday. One difficult night can happen after travel, stress, illness, noise, or an unusual schedule. The PSQI uses a one-month reference window partly because sleep quality is better understood as a pattern — this test asks about the past month rather than your entire life.",
    },
    { type: "heading", id: "what-score-means", text: "What Your Sleep Quality Score Means" },
    {
      type: "paragraph",
      text: "Better sleep quality means you report relatively few disturbances and generally satisfactory, restorative sleep. Some sleep quality problems means one or more areas — such as latency, duration, waking, or daytime function — may be reducing overall sleep quality. Poorer sleep quality means you report several recurring problems or meaningful daytime consequences. Look at the component pattern — the overall score cannot identify the cause.",
    },
    { type: "heading", id: "wearables-disagree", text: "Why Wearables and Questionnaires Can Disagree" },
    {
      type: "paragraph",
      text: "A smartwatch may estimate that you slept seven hours, while you report poor sleep — both observations can coexist. Consumer wearables estimate sleep from signals such as movement and heart rate, while questionnaires capture your subjective sleep experience and symptoms. Neither method is identical to laboratory polysomnography, so a Sleep Quality Test should avoid telling users that their self-report is \"wrong\" because a wearable produced a different number.",
    },
    { type: "heading", id: "when-to-seek-help", text: "When Poor Sleep Quality Deserves Medical Attention" },
    {
      type: "paragraph",
      text: "Consider professional evaluation if poor sleep is persistent, significantly impairing daytime function, associated with loud snoring or gasping, causing dangerous sleepiness, accompanied by unusual nighttime behaviors, associated with severe mood changes, or worsening without an obvious explanation. Do not rely on an online score when safety or significant medical symptoms are involved.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Sleep Quality Test?", answer: "It is a questionnaire that measures several aspects of sleep, including satisfaction, latency, duration, efficiency, disturbances, and daytime effects." },
        { question: "What is the PSQI?", answer: "The Pittsburgh Sleep Quality Index is a widely used 19-item self-rated questionnaire that assesses sleep quality over the previous month." },
        { question: "Is sleep quality the same as sleep duration?", answer: "No. Duration is only one component. Fragmentation, latency, efficiency, restfulness, and daytime function also matter." },
        { question: "Does a poor sleep-quality score mean insomnia?", answer: "No. Insomnia is one possible cause of poor sleep, but many other conditions and circumstances can reduce sleep quality." },
        { question: "What is sleep efficiency?", answer: "It is the proportion of time in bed that you estimate you actually spent asleep." },
        { question: "Can an online Sleep Quality Test diagnose sleep apnea?", answer: "No. Symptoms such as loud snoring, witnessed breathing pauses, or gasping require appropriate medical evaluation." },
      ],
    },
    { type: "heading", text: "Good Sleep Is More Than Enough Hours" },
    {
      type: "paragraph",
      text: "Hours matter, but they are only part of the picture. Did you fall asleep reasonably? Stay asleep? Spend most of your bed time sleeping? Wake restored? Function well during the day? That broader pattern is what sleep quality means. Use your score to identify which part of sleep is creating the problem — not to turn one number into a diagnosis.",
    },
  ],
};
