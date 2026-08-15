import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How quickly can you find one target hidden among many distractors? Take this free **Visual Search Test** to measure how efficiently you locate visual targets in clutter. A target appears among distractors — depending on the mode, the target may differ by one obvious feature or by a combination of features.",
    },
    { type: "paragraph", text: "A strong result should examine accuracy, reaction time, and how search time changes as the number of items increases." },
    { type: "heading", id: "how-to-take", text: "How to Take the Visual Search Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Learn what target you are looking for.",
        "Search the display.",
        "Indicate whether the target is present or absent, or click the target if required.",
        "Work quickly without guessing.",
        "Continue across different display sizes.",
        "Complete feature and conjunction conditions if available.",
        "Review your search speed and accuracy.",
      ],
    },
    { type: "paragraph", text: "Keep your eyes moving naturally. Visual search is about locating the target efficiently, not staring at one fixed point." },
    { type: "heading", text: "What Is Visual Search?" },
    {
      type: "paragraph",
      text: "Visual search is the process of finding a target among competing items. Everyday examples include finding your keys on a desk, locating one name in a list, searching for a road sign, finding a product on a shelf, or spotting a suspicious item in an X-ray. Laboratory visual-search tasks simplify this into controlled displays, such as searching for a red circle among blue circles, or a red vertical bar among red horizontal and blue vertical bars.",
    },
    { type: "paragraph", text: "The pattern of reaction times reveals how efficiently visual attention can guide search." },
    { type: "heading", text: "Feature Search" },
    {
      type: "paragraph",
      text: "In a feature search, the target differs from distractors by a simple visual feature — red among blue, vertical among horizontal, moving among stationary, or large among small. Some feature targets can appear to pop out, and search time may increase only slightly as more distractors are added.",
    },
    { type: "paragraph", text: "This inspired early theories proposing that certain basic features can be processed broadly across the visual field before focused attention is directed to one object." },
    { type: "heading", text: "Conjunction Search" },
    {
      type: "paragraph",
      text: "In a conjunction search, the target is defined by a combination of features. Example target: a red vertical bar among red horizontal bars and blue vertical distractors. No single feature uniquely identifies the target — the search system must use both color and orientation.",
    },
    {
      type: "paragraph",
      text: "Classic experiments often found that conjunction search becomes slower as set size increases. However, modern visual-search science shows that the simple rule \"feature = parallel, conjunction = serial\" is too rigid. Many conjunction searches can be efficient when the target strongly differs from distractors or when attention is guided effectively.",
    },
    { type: "heading", text: "Feature Integration Theory" },
    {
      type: "paragraph",
      text: "Anne Treisman and Garry Gelade's Feature Integration Theory, published in 1980, became one of the foundational models of visual attention. The theory proposed that basic features such as color and orientation can initially be represented separately across the visual field, and focused attention is important for binding features into coherent object representations. The theory helped explain why a target defined by one unique feature can sometimes pop out, while certain feature conjunctions require more focused search. The model was enormously influential, and modern search research has refined many of its original claims.",
    },
    { type: "heading", text: "Guided Search" },
    {
      type: "paragraph",
      text: "Jeremy Wolfe and colleagues developed Guided Search models to explain how information available across the scene can guide attention toward likely target locations. Instead of imagining a completely random serial inspection of every object, attention can be directed by target features, visual salience, prior experience, scene meaning, and search history. For example, if you are looking for a red vertical target, both redness and vertical orientation can help prioritize likely locations, producing more efficient search than checking every item equally.",
    },
    { type: "heading", text: "What Is Set Size?" },
    {
      type: "paragraph",
      text: "Set size is the total number of items in the search display — for example 5, 10, 20, or 40 items. Researchers often plot reaction time against set size. The slope of that relationship is called search efficiency. If reaction time barely changes as items are added, the slope is shallow. If reaction time rises strongly, the slope is steeper. This makes set-size effects one of the most informative measures in a visual-search test.",
    },
    { type: "heading", text: "Search Slope" },
    {
      type: "paragraph",
      text: "Suppose average target-present times are 500 ms at 5 items, 550 ms at 10 items, and 650 ms at 20 items. The additional time per added item can be estimated with a regression line — that slope provides a more meaningful search-efficiency metric than one overall average RT. However, search slopes depend heavily on the exact target and distractors, so a slope from one test cannot be treated as a universal attention score.",
    },
    { type: "heading", text: "Target Present vs. Target Absent" },
    {
      type: "paragraph",
      text: "Target-absent trials can be harder. When the target is present, search can stop once you find it. When the target is absent, you need enough evidence that the display has been searched sufficiently. Classic serial-search models predicted absent slopes roughly twice present slopes under certain assumptions, though real visual search is more complex and the exact relationship varies. Still, separating target-present RT, target-absent RT, present accuracy, and absent accuracy can reveal useful differences.",
    },
    { type: "heading", text: "Target–Distractor Similarity" },
    {
      type: "paragraph",
      text: "Set size is not the only thing that matters. Search becomes harder when the target resembles the distractors. Finding a red O among blue O's may be easy; finding a slightly tilted line among nearly identical tilted lines can be much slower. Modern visual-search research emphasizes target–distractor similarity and distractor–distractor similarity as major determinants of difficulty, which is why one fixed \"average visual search time\" is not scientifically meaningful across arbitrary stimuli.",
    },
    { type: "heading", text: "Search Asymmetry" },
    {
      type: "paragraph",
      text: "Search difficulty can change when target and distractor roles are reversed. For example, finding a Q among O's may be easier than finding an O among Q's. The displays use almost the same elements, but one direction of search is more efficient. This phenomenon is called search asymmetry, and it shows that search is not explained only by counting differences between objects — the direction and diagnostic value of a feature matter.",
    },
    { type: "heading", text: "What Does the Visual Search Test Measure?" },
    { type: "paragraph", text: "Performance can involve selective attention, perceptual discrimination, eye movements, target template maintenance, decision thresholds, visual processing, and motor response. The task should not be described as a pure \"attention span\" measure. Visual search asks whether attention can efficiently select a target from competing visual information — that is distinct from sustaining concentration over several minutes." },
    { type: "heading", text: "Visual Search vs. Pop-Up Target Test" },
    {
      type: "paragraph",
      text: "The [Pop-Up Target Test](/test/pop-up-target-test) shows one obvious target in one location with no competing distractors. Visual Search deliberately adds distractors — Pop-Up Target asks you to detect and reach one appearing target, while Visual Search asks you to find a target among competing items. That difference gives the search task a clear scientific purpose.",
    },
    { type: "heading", text: "Visual Search vs. Change Blindness" },
    {
      type: "paragraph",
      text: "Visual Search gives you a stable display and asks you to locate a target. The [Change Blindness Test](/test/change-blindness-test) alternates two versions of a scene and asks what changed. Search can contribute to change detection, but the memory and interruption demands are different.",
    },
    { type: "heading", text: "What Is a Good Visual Search Score?" },
    {
      type: "paragraph",
      text: "There is no universal benchmark. Performance depends on target type, distractor similarity, set size, target-present probability, display spacing, response mode, practice, and device size. A 600 ms search can be easy or extremely difficult depending on the display. The most useful result is a comparison within the same test: feature vs. conjunction, small vs. large set size, present vs. absent.",
    },
    { type: "heading", text: "Does Practice Improve Visual Search?" },
    {
      type: "paragraph",
      text: "Yes. Practice can make search more efficient — you can learn which features are diagnostic, where to direct attention, how to reject distractors faster, and task-specific target templates. Expert visual search appears in real professions such as radiology and security screening. But practice effects are often highly specific — getting faster at finding one artificial target does not automatically improve every kind of real-world search.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a visual search test?", answer: "A task where you locate a target among distractor items." },
        { question: "What is feature search?", answer: "Search for a target that differs by a single feature such as color or orientation." },
        { question: "What is conjunction search?", answer: "Search for a target defined by a combination of features shared separately by distractors." },
        { question: "What is set size?", answer: "The number of items in the display." },
        { question: "Why does set size matter?", answer: "Increasing the number of items can increase search time, especially in inefficient search conditions." },
        { question: "Is feature search always parallel and conjunction search always serial?", answer: "No. That classic distinction was influential, but modern research shows search efficiency varies continuously and is strongly guided by stimulus properties." },
        { question: "Does this measure eyesight?", answer: "Not directly. It measures target selection under visual competition, not visual acuity." },
      ],
    },
    {
      type: "paragraph",
      text: "Visual search is more than seeing — it is deciding where attention should go next. Some targets announce themselves immediately; others hide among distractors that share their features. By comparing conditions and set sizes, the test reveals how visual similarity and attentional guidance change the time needed to find what you are looking for.",
    },
  ],
};
