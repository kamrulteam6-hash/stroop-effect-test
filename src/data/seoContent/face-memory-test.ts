import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How well can you recognize a face when the angle, lighting, or photograph changes? Take this free **Face Memory Test** to challenge memory for unfamiliar facial identities. First, study a small set of target faces. Then identify those people among similar-looking distractors in new images.",
    },
    {
      type: "paragraph",
      text: "This browser task is inspired by established face-memory research, but it uses original images. It is not the official Cambridge Face Memory Test and should not be compared to its protected stimulus set or clinical-style cutoffs.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Face Memory Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Study each target face carefully.",
        "Pay attention to the identity rather than one photograph.",
        "Continue to the recognition phase.",
        "Select the previously learned person from the choices.",
        "Expect viewpoint or image changes on harder trials.",
        "Complete all trials.",
        "Review overall accuracy and difficulty-by-condition results.",
      ],
    },
    { type: "paragraph", text: "Avoid using obvious non-face clues such as background, clothing, filenames, or image borders. A good test should minimize those shortcuts." },
    { type: "heading", text: "What Is Face Recognition Memory?" },
    {
      type: "paragraph",
      text: "Face recognition memory is the ability to learn a person's facial identity and recognize that person later. This is more demanding than deciding whether two simultaneously visible photos match — in a memory task, you must build and retain a representation of the target identity, then later distinguish that person from unfamiliar distractors.",
    },
    {
      type: "paragraph",
      text: "Real face recognition is challenging because appearance changes with viewpoint, lighting, facial expression, camera, hairstyle, image quality, and age. A strong face-memory test therefore asks whether you remember who the person is, not merely whether you remember an identical photograph.",
    },
    { type: "heading", text: "The Cambridge Face Memory Test" },
    {
      type: "paragraph",
      text: "One of the best-known research tools in this area is the Cambridge Face Memory Test (CFMT), introduced by Brad Duchaine and Ken Nakayama in 2006. The original CFMT teaches participants six unfamiliar target identities, then tests recognition using three-alternative forced-choice trials. The task becomes progressively harder, including changes in viewpoint and more visually challenging conditions.",
    },
    { type: "paragraph", text: "The standard CFMT contains 72 test items. It was designed to provide a more useful measure of individual differences in face recognition than several earlier tests." },
    { type: "heading", text: "Why Your Online Test Should Be CFMT-Inspired, Not a Copy" },
    {
      type: "paragraph",
      text: "The scientific logic of the CFMT is extremely useful: learn identities, recognize them among distractors, vary image conditions. But a new public website should not simply reproduce the official stimulus images, exact protected materials, or established scoring claims without permission. A strong independent version creates its own face set, learning phase, distractor pool, viewpoint changes, difficulty levels, and scoring system.",
    },
    { type: "paragraph", text: "This page accurately describes itself as inspired by face-memory research. It does not claim to administer the standardized CFMT." },
    { type: "heading", text: "Face Memory vs. Face Matching" },
    {
      type: "paragraph",
      text: "These tasks are different. In face matching, two faces are visible at the same time and you decide whether they show the same person. In face memory, you learn an identity first, and later the study image is no longer available — you must recognize that person from memory. Face matching reduces the memory requirement, so a person can be relatively good at matching photographs while having more difficulty recognizing previously learned identities.",
    },
    { type: "heading", text: "Why New Photographs Make the Test Better" },
    {
      type: "paragraph",
      text: "Suppose you study one image of a person and later see the exact same image — you could succeed by remembering image-specific details like a shadow, a crop, a wrinkle in the background, or exact pixel patterns. Now suppose the recognition image shows the same person from a slightly different angle. Image matching becomes less useful, and you need a more identity-centered representation. That makes cross-image recognition a better test of face memory.",
    },
    { type: "heading", text: "Viewpoint Changes" },
    {
      type: "paragraph",
      text: "Faces look different from front view, three-quarter view, and profile. A robust identity representation must tolerate those changes. The original CFMT deliberately used multiple viewpoints in its learning and testing procedure. An original web task can do something similar using licensed photographs of the same people from several angles, with difficulty rising as the recognition image becomes less similar to the learned view.",
    },
    { type: "heading", text: "Face Inversion Effect" },
    {
      type: "paragraph",
      text: "Faces become much harder to process when turned upside down. Duchaine and Nakayama used inverted-face performance as part of the validation of the CFMT. The face inversion effect has a much broader history in face-perception research — inversion disrupts the normal processing of facial configuration and spatial relationships.",
    },
    { type: "paragraph", text: "However, an inverted-face condition should not be used to tell users whether their brain is \"face specialized.\" It is simply a useful experimental manipulation showing how strongly normal face recognition depends on upright orientation." },
    { type: "heading", text: "Face Memory and Prosopagnosia" },
    {
      type: "paragraph",
      text: "Prosopagnosia, often called face blindness, is a condition involving severe difficulty recognizing faces. Some people acquire it after brain injury; others report lifelong developmental difficulties. Face-memory tests such as the CFMT have been used as part of research and assessment in developmental prosopagnosia, but diagnosis should never be based on one casual browser test. Researchers commonly use multiple measures, history, and carefully selected normative criteria. A low score on this site is not a diagnosis of face blindness.",
    },
    { type: "heading", text: "What Is a Super Recognizer?" },
    {
      type: "paragraph",
      text: "At the other end of the spectrum, some people show exceptionally strong face-recognition ability. Researchers have described such individuals as super-recognizers. Studies beginning with work by Richard Russell and colleagues found people who performed extraordinarily well on face-memory tasks and real-world face-recognition challenges.",
    },
    { type: "paragraph", text: "But a custom online test cannot responsibly label someone a super-recognizer from one high score unless the test has been properly normed and validated for that purpose. Use descriptive language such as \"high accuracy on this test\" rather than a diagnostic or professional label." },
    { type: "heading", text: "Face Recognition Ability Varies Widely" },
    {
      type: "paragraph",
      text: "Face recognition shows substantial individual differences. Some people seem to recognize unfamiliar faces with very little exposure. Others need repeated encounters and rely heavily on voice, hairstyle, clothing, and context. This variability is one reason face-memory tests are scientifically interesting. But the score can also be influenced by the stimulus set itself — if distractors are unusually similar, the task becomes harder; if each target has a highly distinctive feature, it becomes easier.",
    },
    { type: "heading", text: "What Should the Result Measure?" },
    {
      type: "paragraph",
      text: "Useful metrics include overall accuracy (percentage of identities correctly recognized), easy vs. hard accuracy (performance under similar and changed image conditions), response time (how quickly correct choices are made), and error pattern (which identities or distractors created confusion). If there is a timed component, speed should never outweigh correct identification — face memory is primarily a recognition-accuracy task.",
    },
    { type: "heading", text: "What Is a Good Face Memory Score?" },
    {
      type: "paragraph",
      text: "There is no universal benchmark for a custom browser version. The score depends on number of target identities, learning time, distractor similarity, viewpoint changes, lighting, image quality, test length, and demographic composition. Do not borrow percentile cutoffs from the official CFMT and apply them to a different face set — norms belong to the test on which they were collected.",
    },
    { type: "heading", text: "Face Memory vs. Emotional Recognition" },
    {
      type: "paragraph",
      text: "The [Emotion Recognition Test](/test/emotion-recognition-test) asks what expression category a face is communicating. Face Memory asks whether you have seen this person's identity before. Those processes overlap because both use faces, but recognizing who someone is differs from classifying what expression they are making. Someone can have difficulty with identity recognition yet still interpret many facial expressions, or vice versa.",
    },
    { type: "heading", text: "Face Memory vs. Visual Memory" },
    {
      type: "paragraph",
      text: "The [Visual Memory Test](/test/visual-memory-test) asks users to remember highlighted grid locations. Face Memory requires a rich, highly similar class of visual stimuli — faces share the same basic structure of two eyes, nose, mouth, and overall head shape. The challenge is identifying subtle variations within that shared configuration, which makes face memory a very different kind of visual recognition problem.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What does a Face Memory Test measure?", answer: "It measures how accurately you can learn unfamiliar facial identities and recognize them later." },
        { question: "Is this the Cambridge Face Memory Test?", answer: "No. This is an original browser task inspired by the general face-memory paradigm, not a copy of the standardized CFMT." },
        { question: "What is prosopagnosia?", answer: "Prosopagnosia, or face blindness, is a severe difficulty recognizing faces. One web score cannot diagnose it." },
        { question: "What is a super-recognizer?", answer: "A person with exceptionally strong face-recognition ability demonstrated on appropriately validated tasks and often additional tests." },
        { question: "Why use different photographs at test?", answer: "Changing viewpoint or image conditions reduces simple picture matching and requires memory for identity." },
        { question: "Are upside-down faces harder?", answer: "Usually. Face inversion substantially disrupts normal face recognition in many experimental tasks." },
        { question: "Does a low result mean I am face blind?", answer: "No. Proper assessment requires validated tests, norms, history, and often multiple measures." },
      ],
    },
    {
      type: "paragraph",
      text: "A useful face-memory test should make one thing difficult: memorizing a photograph is not enough. The lighting may change. The viewpoint may change. The expression may change. What has to remain stable is the person's identity — that ability to recognize the same individual across changing images is what makes face memory such a distinctive and fascinating visual-memory skill.",
    },
  ],
};
