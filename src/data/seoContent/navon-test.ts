import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Do you see the forest before the trees? Take this free **Navon Test** using hierarchical figures: a large letter or shape built from many smaller letters or shapes. Depending on the cue, respond to either the large global form or the small local elements.",
    },
    { type: "paragraph", text: "The test can compare global and local reaction times, congruent and incongruent trials, and how much one level interferes with judgments about the other." },
    { type: "heading", id: "how-to-take", text: "How to Take the Navon Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Keep your attention near the center.",
        "Read the instruction for the current block or trial.",
        "If asked for Global, identify the large overall figure.",
        "If asked for Local, identify the small elements composing it.",
        "Respond quickly and accurately.",
        "Continue through congruent and incongruent figures.",
        "Review global speed, local speed, and interference effects.",
      ],
    },
    { type: "paragraph", text: "Do not deliberately blur your eyes or move far away from the screen. Use normal viewing conditions." },
    { type: "heading", text: "What Is a Navon Figure?" },
    {
      type: "paragraph",
      text: "A Navon figure is a hierarchical visual stimulus — for example, a large letter H made from many small letter S characters. The stimulus therefore contains information at two levels: the global level (the overall large shape, H) and the local level (the small component shapes, S). These levels can agree or conflict. Navon figures are named after psychologist David Navon, whose landmark 1977 paper was titled \"Forest Before Trees: The Precedence of Global Features in Visual Perception.\"",
    },
    { type: "heading", text: "What Is Global Precedence?" },
    {
      type: "paragraph",
      text: "Navon's original research supported the idea that global structure can receive processing priority over local detail. In many hierarchical-letter tasks, global judgments are faster than local judgments, and global information interferes with local judgments more than local information interferes with global judgments. This pattern is commonly called global precedence.",
    },
    { type: "paragraph", text: "However, \"global always comes first\" is too strong. Later research showed that the effect depends substantially on stimulus and viewing conditions. The better statement is: many Navon-style displays produce a global processing advantage under appropriate conditions." },
    { type: "heading", text: "Congruent vs. Incongruent Navon Figures" },
    {
      type: "paragraph",
      text: "In congruent figures, the global and local identities match — for example, a large H made of small H's. In incongruent figures, the identities differ — a large H made of small S's. If the task is to identify the local letter, the irrelevant global H may interfere with responding S. If the task is global, the local S elements may also produce interference. Comparing congruent and incongruent trials reveals cross-level interference.",
    },
    { type: "heading", text: "Global Interference" },
    {
      type: "paragraph",
      text: "Global interference occurs when the large overall form disrupts local-level judgments. For example, if the task is to identify small letters and the stimulus is a large H made of small S's, responses to the local S becoming slower because of the global H is global-to-local interference. Navon's original findings emphasized strong global influence on local processing.",
    },
    { type: "heading", text: "Local Interference" },
    {
      type: "paragraph",
      text: "Local interference occurs when the small component elements disrupt judgments about the global figure. In many standard conditions this effect is weaker than global interference, but it can still occur. The relative size of global and local interference depends on how the stimuli are designed — a good result page should measure both rather than assume one direction in advance.",
    },
    { type: "heading", text: "How Is Global Precedence Measured?" },
    {
      type: "paragraph",
      text: "There is no single universal Navon score. Useful measures include global RT (average or median correct response time when judging the large form), local RT (correct response time when judging small elements), global advantage (local RT minus global RT, where a positive value means global judgments were faster), global-to-local interference (local incongruent RT minus local congruent RT), and local-to-global interference (global incongruent RT minus global congruent RT). Showing these separately gives a clearer picture than one combined \"global thinker\" score.",
    },
    { type: "heading", text: "Why \"Global Thinker vs. Detail Person\" Is Misleading" },
    {
      type: "paragraph",
      text: "Online personality content sometimes interprets Navon performance as global meaning big-picture personality and local meaning detail-oriented personality. That goes well beyond what the task establishes. The Navon paradigm measures visual processing under specific hierarchical-stimulus conditions — it does not tell you whether you are strategically good at corporate planning, proofreading, creativity, leadership, or attention to detail in everyday life. A faster local response should not become a personality label.",
    },
    { type: "heading", text: "Stimulus Size Changes the Effect" },
    {
      type: "paragraph",
      text: "The physical dimensions of Navon figures matter. Researchers have shown that global precedence can change with overall visual angle, size of local elements, spacing, density, and eccentricity. If local letters are extremely large and easy to distinguish, local processing can become relatively efficient. If the global figure is too small or poorly formed, the expected global advantage can weaken. This means browser layout must be standardized — responsive design should not make the same Navon stimulus huge on one device and tiny on another without accounting for it.",
    },
    { type: "heading", text: "Density and Spacing Matter" },
    {
      type: "paragraph",
      text: "Imagine a large H built from many tightly packed S's — the global H is visually coherent. Now spread those S's far apart, and the overall H may become weaker. The perceptual relationship between local elements influences whether they group into a strong global shape. Gestalt principles such as proximity and grouping therefore interact with global/local processing. A good web test should use consistent element density.",
    },
    { type: "heading", text: "Global Precedence Is Not Universal" },
    {
      type: "paragraph",
      text: "Navon's title, \"forest before trees,\" became famous because it expresses the original theoretical idea beautifully. But later work showed that global precedence can reverse or disappear under certain conditions, including stimulus size, density, exposure duration, attentional set, visual field, task instructions, and individual differences. This test does not tell every user that humans always process the whole before the parts — the correct claim is more conditional.",
    },
    { type: "heading", text: "Navon Test and Selective Attention" },
    {
      type: "paragraph",
      text: "Hierarchical figures force users to select one representational level while ignoring another, which makes the task useful for studying selective attention. If the global H and local S both activate response tendencies, the instructed level must win. The interference effect therefore reflects competition between simultaneously available visual structures, connecting Navon to the broader attention and conflict-test cluster while remaining visually distinctive.",
    },
    { type: "heading", text: "Navon Test vs. Stroop Test" },
    {
      type: "paragraph",
      text: "The [Stroop Effect Test](/test/stroop-effect-test) requires users to ignore word meaning while responding to ink color. Navon requires users to ignore one spatial scale while responding to another. Stroop uses competing semantic/color dimensions; Navon uses competing global/local visual levels. Both use interference logic, but their stimulus organization and perceptual questions are very different.",
    },
    { type: "heading", text: "Navon Test vs. Visual Search" },
    {
      type: "paragraph",
      text: "The [Visual Search Test](/test/visual-search-test) asks users to locate a target among competing objects. Navon presents one hierarchical object containing both global and local structure. Visual Search asks you to find one item among many; Navon asks you to select the correct spatial level within one organized figure. That gives Navon a distinct role in the visual-attention category.",
    },
    { type: "heading", text: "Navon Test vs. Odd One Out" },
    {
      type: "paragraph",
      text: "The [Odd One Out Test](/test/odd-one-out-test) asks which object violates a shared rule. Navon does not require discovering a rule — the response rule is explicit: global or local. The challenge is selecting the correct level while potentially conflicting information exists at the other level.",
    },
    { type: "heading", text: "What Does a Good Navon Score Mean?" },
    {
      type: "paragraph",
      text: "A global advantage on this task means global-level judgments were faster under these stimulus conditions. It does not mean you naturally see the big picture in life. A local advantage does not mean you have superior attention to detail. The result is task-specific. Useful output includes global accuracy, local accuracy, global RT, local RT, and congruity effects. Avoid personality interpretations unless separately validated.",
    },
    { type: "heading", text: "What Is a Good Global Precedence Score?" },
    {
      type: "paragraph",
      text: "There is no universal millisecond benchmark. Results depend heavily on display geometry, element density, target letters, task blocks, device size, viewing distance, and trial count. The scientifically useful comparison occurs within the same implementation. If your site later gathers large-scale same-task data, it can provide transparent percentiles.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is the Navon Test?", answer: "A global/local attention task using large figures constructed from smaller figures." },
        { question: "Who created Navon figures?", answer: "David Navon's influential 1977 work established the classic global-precedence paradigm." },
        { question: "What does \"forest before trees\" mean?", answer: "It refers to the idea that global visual structure can receive processing priority before local detail." },
        { question: "Is global processing always faster?", answer: "No. Global precedence depends on stimulus size, density, timing, task, and viewing conditions." },
        { question: "What is global interference?", answer: "Slower local judgments when an incompatible global form is present." },
        { question: "Does a local advantage mean I am detail-oriented?", answer: "Not as a personality conclusion. It describes performance on this specific hierarchical visual task." },
        { question: "Is Navon the same as Stroop?", answer: "No. Both involve interference, but Navon uses competing global/local levels rather than color-word conflict." },
      ],
    },
    {
      type: "paragraph",
      text: "A Navon figure contains two valid answers: the large shape and the small elements. The instruction decides which one matters. When one level slows your response to the other, the test makes global–local competition visible. The result is not a personality label — it is a direct demonstration that visual attention can operate at multiple spatial scales, and that the scale you are supposed to ignore can still influence what you do.",
    },
  ],
};
