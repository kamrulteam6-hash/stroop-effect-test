import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How accurately can you classify facial expressions when you have only the face to work with? Take this free **Emotion Recognition Test**. You will see faces displaying different expressions and choose the emotion category that best matches each image.",
    },
    { type: "paragraph", text: "Possible categories may include happiness, sadness, anger, fear, disgust, and surprise." },
    {
      type: "paragraph",
      text: "This task measures recognition of posed or labeled facial-expression categories. It does not prove that you can read another person's true internal emotional state from their face alone.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Emotion Recognition Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Look at the face carefully.",
        "Pay attention to the eyes, eyebrows, nose, and mouth.",
        "Choose the expression category that best matches the image.",
        "Respond before moving to the next face.",
        "Continue through all expressions.",
        "Review overall accuracy and performance by emotion category.",
      ],
    },
    { type: "paragraph", text: "Do not overthink what might have happened to the person. The task is to classify the displayed expression using the available categories." },
    { type: "heading", text: "What Is Facial Emotion Recognition?" },
    {
      type: "paragraph",
      text: "Facial emotion recognition refers to interpreting affective information from facial movements or expressions. Humans use faces as one source of social information — a smile, widened eyes, tightened lips, or wrinkled nose can contribute to judgments about another person's emotional state or communicative intent.",
    },
    {
      type: "paragraph",
      text: "Laboratory emotion-recognition tests simplify this process by presenting facial images and asking participants to choose among named categories. This provides a controlled classification task. Real social understanding is much richer — it also uses voice, body posture, context, language, relationship history, and cultural knowledge. A face-only browser test measures one narrow part of social perception.",
    },
    { type: "heading", text: "The Six Common Emotion Categories" },
    { type: "paragraph", text: "Many classic emotion-recognition tasks focus on six categories:" },
    { type: "list", items: ["happiness", "sadness", "anger", "fear", "disgust", "surprise"] },
    {
      type: "paragraph",
      text: "These categories became especially prominent through the work of researchers including Paul Ekman and Wallace Friesen and through standardized facial-expression sets used in decades of research. Some tasks also include neutral, contempt, or other compound or subtle expressions.",
    },
    { type: "paragraph", text: "For a general public test, the six-category format is easy to understand and provides a useful starting point. But it should not be described as a complete map of human emotional expression." },
    { type: "heading", text: "Facial Expression Is Not the Same as Hidden Emotion" },
    {
      type: "paragraph",
      text: "This is the most important scientific caution for the page. A face displaying a smile is not guaranteed to prove that the person is internally happy. People can smile politely, suppress emotion, pose an expression, display mixed emotions, or communicate socially rather than reveal an internal state.",
    },
    {
      type: "paragraph",
      text: "A major 2019 scientific review by Lisa Feldman Barrett, Ralph Adolphs, Stacy Marsella, Aleix Martinez, and Seth Pollak challenged the common assumption that specific facial movements provide a one-to-one diagnostic readout of internal emotion categories. The review did not conclude that facial expressions contain no emotional information — it concluded that the mapping is more variable and context-dependent than popular \"read anyone's face\" claims suggest.",
    },
    { type: "heading", text: "What This Test Actually Scores" },
    {
      type: "paragraph",
      text: "If an image was created or labeled to display fear, and you choose fear, the response is scored correct. That means the task assesses agreement with the intended or benchmark expression category — it does not directly verify that the person truly felt fear when photographed. This distinction matters especially if the stimuli are posed.",
    },
    { type: "paragraph", text: "The scientifically accurate description is facial-expression recognition accuracy, rather than mind-reading ability." },
    { type: "heading", text: "Posed vs. Spontaneous Expressions" },
    {
      type: "paragraph",
      text: "Many classic datasets use actors or participants instructed to produce particular expressions. These posed expressions are useful because categories are controlled, image quality can be standardized, and researchers know the intended label. But spontaneous real-world expressions can be subtler and more variable, so performance on posed photographs may be higher than performance in natural conversation.",
    },
    { type: "heading", text: "Emotion Recognition Accuracy by Category" },
    {
      type: "paragraph",
      text: "People do not necessarily recognize every category equally well. Some expressions are more visually distinctive; others share features — fear and surprise can both involve widened eyes, and anger and disgust can share tension in parts of the face. A result page can therefore report overall accuracy plus separate accuracy for happiness, sadness, anger, fear, disgust, and surprise. A confusion matrix would be even more informative if enough trials are available, since it can show which categories are commonly mistaken for each other.",
    },
    { type: "heading", text: "Why a Confusion Matrix Is Useful" },
    {
      type: "paragraph",
      text: "Suppose your result is 75% correct. That number alone does not tell you what went wrong — maybe you recognized every happy and sad face but repeatedly confused fear with surprise. A confusion matrix counts intended category against selected category, revealing patterns in errors. For a public site, the full matrix can be simplified into a section such as \"Most Common Confusion: Fear → Surprise,\" which gives the user a more meaningful result than one total percentage.",
    },
    { type: "heading", text: "Expression Intensity Matters" },
    {
      type: "paragraph",
      text: "A full-intensity posed smile can be easy to classify; a subtle expression is harder. Emotion-recognition tasks may vary the strength of expression to create different difficulty levels — easy (clear, high-intensity expressions), medium (moderate intensity), and hard (subtle facial changes or shorter presentation times). A score should only be compared with another result if the stimulus intensity and timing are similar.",
    },
    { type: "heading", text: "Culture and Context" },
    {
      type: "paragraph",
      text: "Emotion perception has a substantial cross-cultural research literature. There is evidence for meaningful cross-cultural regularities in how some facial expressions are produced and perceived, and also evidence for cultural variation in expression use, interpretation, attention to facial regions, and contextual expectations. Avoid both extremes — claiming facial expressions mean exactly the same thing everywhere, or that faces contain no cross-cultural information at all. A diverse face set and careful wording provide a more scientifically defensible test.",
    },
    { type: "heading", text: "Why Stimulus Diversity Matters" },
    {
      type: "paragraph",
      text: "If every face belongs to the same narrow demographic group, the test may not generalize equally to all users. A stronger image set includes diversity in age, sex, skin tone, facial structure, and cultural background. Lighting, cropping, and image quality should be standardized as much as possible so that expression — not photographic quality — is the main source of difficulty.",
    },
    { type: "heading", text: "Emotion Recognition vs. Emotional Intelligence" },
    {
      type: "paragraph",
      text: "The [Emotional Intelligence Test](/test/emotional-intelligence-test) is a broader self-report assessment. This Emotion Recognition Test is a performance task. The Emotional Intelligence Test asks about your typical perceptions, behaviors, or self-reported skills; the Emotion Recognition Test asks whether you correctly classify specific facial expressions. A high score on one does not automatically guarantee a high score on the other — they measure different things.",
    },
    { type: "heading", text: "Emotion Recognition vs. Face Memory" },
    {
      type: "paragraph",
      text: "The [Face Memory Test](/test/face-memory-test) asks who this is. Emotion Recognition asks what expression category this face is displaying. Identity and expression are distinct aspects of face processing — a person can remember identities well but find subtle expressions difficult, and another person may classify expressions accurately yet struggle to recognize unfamiliar identities later. These tests should link to each other but remain separate.",
    },
    { type: "heading", text: "Can This Test Detect Autism or Other Conditions?" },
    {
      type: "paragraph",
      text: "No. Emotion-recognition tasks are used in research involving autism, neurological conditions, psychiatric disorders, and healthy individual differences, but one browser score cannot diagnose any condition. Performance can be affected by familiarity with the categories, image quality, cultural experience, attention, vision, language, and test design. Clinical interpretation requires validated instruments and broader assessment.",
    },
    { type: "heading", text: "What Is a Good Emotion Recognition Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for a new custom test. Accuracy depends on which expression set is used, category count, expression intensity, presentation duration, face diversity, image quality, and whether neutral is included. A 90% result on exaggerated posed expressions may be easier than 70% on brief subtle expressions. Do not import norms from Ekman-based or other standardized instruments into an original stimulus set.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What does an Emotion Recognition Test measure?", answer: "It measures how accurately you classify facial expressions into predefined emotion categories." },
        { question: "What are the six common categories?", answer: "Happiness, sadness, anger, fear, disgust, and surprise are widely used in classic research." },
        { question: "Can you tell exactly how someone feels from their face?", answer: "No. Facial movements provide useful social information, but the mapping between expression and internal emotion is variable and context-dependent." },
        { question: "Why are posed expressions used?", answer: "They make it easier to create controlled, labeled stimuli, although they are not identical to natural spontaneous expressions." },
        { question: "Is this an emotional intelligence test?", answer: "No. It is a performance task focused specifically on expression classification." },
        { question: "Can a low score diagnose autism?", answer: "No. A browser task cannot diagnose autism or another clinical condition." },
        { question: "Can recognition improve with practice?", answer: "Task performance can improve with practice and feedback, but that does not automatically translate into broad real-world social ability." },
      ],
    },
    {
      type: "paragraph",
      text: "Faces matter in social communication, but the scientifically responsible question is not \"can I know exactly what this person truly feels?\" It is \"how accurately can I classify the facial pattern being displayed using these expression categories?\" That narrower question still produces an engaging and useful test — without pretending that a photograph gives direct access to another person's private emotional state.",
    },
  ],
};
