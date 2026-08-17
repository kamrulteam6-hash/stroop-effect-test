import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "When would you naturally sleep if alarms, work, school, and social obligations stopped choosing your schedule? This Sleep Chronotype Test estimates whether your preferred biological timing leans earlier, later, or somewhere in between, and maps your answers onto one of four popular chronotype labels — Lion, Bear, Wolf, or Dolphin.",
    },
    {
      type: "paragraph",
      text: "Chronotype is a timing preference, not a diagnosis of insomnia or a circadian rhythm sleep-wake disorder.",
    },
    { type: "heading", id: "what-is-chronotype", text: "What Is Sleep Chronotype?" },
    {
      type: "paragraph",
      text: "Chronotype describes individual differences in the timing of sleep, wakefulness, and daily alertness. At one end are stronger morning types; at the other are stronger evening types, with many people falling between the two. Chronotype reflects the timing of your internal circadian system together with behavioral and environmental influences — it is better understood as a continuum than a rigid category.",
    },
    { type: "heading", id: "vs-morning-night-owl", text: "Why This Page Is Different From a Morning Person vs. Night Owl Quiz" },
    {
      type: "paragraph",
      text: "Our [Morning Person vs. Night Owl Test](/test/morning-person-vs-night-owl-test) provides an intuitive early-versus-late classification. This Sleep Chronotype Test goes a step further by drawing on concepts from established chronotype research — including free-day sleep timing, workday versus free-day mismatch, and alarm dependence — and translating the result into a more memorable animal label.",
    },
    { type: "heading", id: "meq", text: "The Morningness-Eveningness Questionnaire" },
    {
      type: "paragraph",
      text: "The Morningness-Eveningness Questionnaire, or MEQ, is one of the most widely used chronotype instruments. Horne and Östberg developed it in 1976, and it contains 19 questions about preferences such as wake time, bedtime, morning alertness, evening tiredness, and preferred time for activity. Scores run from stronger eveningness to stronger morningness. The MEQ primarily measures phase preference — when you prefer to function. This site's test uses original questions inspired by these concepts and is not the official MEQ.",
    },
    { type: "heading", id: "mctq", text: "The Munich Chronotype Questionnaire" },
    {
      type: "paragraph",
      text: "The Munich Chronotype Questionnaire, or MCTQ, takes a different approach by focusing on actual sleep behavior — work schedule, sleep onset, wake time, workdays, free days, and alarm use. Researchers use the midpoint of sleep on free days as an important chronotype indicator, often with adjustment for sleep debt accumulated during workdays. This makes the MCTQ useful when your required schedule differs from your natural preference.",
    },
    { type: "heading", id: "mid-sleep", text: "Mid-Sleep on Free Days" },
    {
      type: "paragraph",
      text: "Imagine you sleep from 12:30 a.m. to 8:30 a.m. — your midpoint is approximately 4:30 a.m. Now suppose on workdays you sleep from 10:30 p.m. to 5:30 a.m. — the workday schedule looks much earlier. Your free-day midpoint may reveal more about your preferred timing than the alarm-driven work schedule, which is one reason a chronotype test should ask about days without obligations.",
    },
    { type: "heading", id: "social-jet-lag", text: "Social Jet Lag" },
    {
      type: "paragraph",
      text: "Social jet lag describes the mismatch between biological timing and socially required timing. One way to estimate it is by comparing the midpoint of sleep on workdays and free days — a workday midpoint of 2:30 a.m. versus a free-day midpoint of 5:00 a.m. suggests a substantial schedule shift. The term \"jet lag\" is useful because the body repeatedly experiences a timing change without physically crossing time zones.",
    },
    { type: "heading", id: "alarm-use", text: "Why Alarm Use Matters" },
    {
      type: "paragraph",
      text: "An alarm clock can hide natural wake timing. If you wake at 6:00 a.m. every weekday because an alarm forces you up, that does not necessarily mean your natural chronotype is early. A good test asks what happens when you do not set an alarm — do you wake around the same time, or sleep several hours later? Large differences can indicate that social obligations are pulling your schedule away from your preferred timing.",
    },
    { type: "heading", id: "vs-circadian-rhythm", text: "Chronotype vs. Circadian Rhythm" },
    {
      type: "paragraph",
      text: "Chronotype is related to circadian timing but is not a direct laboratory measurement of the circadian clock. Researchers can assess biological circadian phase using markers such as melatonin timing under controlled conditions. Questionnaires are simpler and much easier to use at scale, but they rely on self-report and behavior — a chronotype questionnaire is an estimate, not a direct measurement of internal biological phase.",
    },
    { type: "heading", id: "vs-sleep-quality", text: "Chronotype vs. Sleep Quality" },
    {
      type: "paragraph",
      text: "Chronotype asks when you prefer to sleep. Sleep quality asks how well you sleep. You can have an early chronotype and poor sleep, a late chronotype and excellent sleep, or an intermediate chronotype with insomnia symptoms. Our [Sleep Quality Test](/test/sleep-quality-test) measures sleep experience and disturbance rather than timing preference — these pages should not share the same scoring model.",
    },
    { type: "heading", id: "shifts-with-age", text: "Chronotype Can Shift With Age" },
    {
      type: "paragraph",
      text: "Chronotype changes across the lifespan — adolescence commonly brings later timing, and morningness tends to increase again across adulthood and older age. Individual variation remains large, so do not present chronotype as \"you were born a wolf and will always be a wolf.\" Current sleep timing reflects biology, age, light exposure, schedule, and behavior — the result can change.",
    },
    { type: "heading", id: "animal-labels", text: "About Bear, Wolf, Lion, and Dolphin Chronotypes" },
    {
      type: "paragraph",
      text: "Animal chronotype labels are popular online because they are easy to remember, but they are not the standard categories used by the major research instruments such as the MEQ or MCTQ. Research more commonly describes morningness, eveningness, intermediate timing, sleep midpoint, and social jet lag. This test uses the animal labels as an accessible, optional interpretation layer built on top of morningness-eveningness style questions — treat them as a memorable summary rather than an established clinical category.",
    },
    { type: "heading", id: "shift-workers", text: "Shift Workers Need Special Caution" },
    {
      type: "paragraph",
      text: "Chronotype questionnaires are harder to interpret when work includes night shifts, rotating shifts, or irregular schedules. A night worker's sleep time may reflect job requirements rather than preferred timing. If you work shifts, try to answer preference questions based on your natural tendencies whenever possible, and consider your days free from shift obligations as more representative of your true chronotype.",
    },
    { type: "heading", id: "accurate-answers", text: "How to Get a More Accurate Result" },
    {
      type: "list",
      ordered: true,
      items: [
        "Think about your natural timing, not an unusual day.",
        "Distinguish workdays from free days.",
        "Consider whether you rely on an alarm.",
        "Avoid basing answers on one unusual weekend.",
        "Consider several typical weeks.",
        "Note shift work or major schedule changes.",
      ],
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a sleep chronotype?", answer: "It is your tendency toward earlier or later timing of sleep, wakefulness, and daily alertness." },
        { question: "What is the MEQ?", answer: "The Morningness-Eveningness Questionnaire is a 19-item measure of morningness versus eveningness preference." },
        { question: "What is the MCTQ?", answer: "The Munich Chronotype Questionnaire estimates chronotype using real-world sleep timing on workdays and free days." },
        { question: "What is social jet lag?", answer: "It is the mismatch between sleep timing on workdays and free days, often reflecting conflict between biological and social timing." },
        { question: "Is chronotype the same as sleep quality?", answer: "No. Chronotype describes timing; sleep quality describes how well you sleep." },
        { question: "Are bear, wolf, lion, and dolphin official scientific chronotypes?", answer: "They are popular descriptive labels, but the established research literature more commonly uses morningness-eveningness and sleep-timing measures such as MEQ and MCTQ." },
      ],
    },
    { type: "heading", text: "Find the Timing Underneath the Schedule" },
    {
      type: "paragraph",
      text: "Your calendar tells you when you have to wake up. Chronotype asks when your body tends to sleep and wake when the calendar stops interfering. Compare workdays with free days. Notice when alertness naturally rises and falls. That pattern gives you a more useful chronotype than a catchy animal label alone — though the label can still be a handy way to remember it.",
    },
  ],
};
