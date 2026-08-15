import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How long can you stay focused when most of the task tells you to respond, but one signal tells you to stop?",
    },
    {
      type: "paragraph",
      text: "This free **Attention & Focus Test** uses a go/no-go task to measure sustained attention and response control. Respond to the normal “go” stimuli as quickly as you can, but **do nothing when the no-go target appears**.",
    },
    {
      type: "paragraph",
      text: "Your results can show your accuracy, successful responses, missed targets, false alarms, and reaction time. For the most useful result, focus on being accurate first and fast second.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Attention Span Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Choose 20 or 40 trials.",
        "Select your difficulty and stimulus type.",
        "Start the test and watch each letter or shape carefully.",
        "Press the spacebar or tap for every **go** stimulus.",
        "Do not respond when the designated **no-go** stimulus appears.",
        "Finish all trials and review your results.",
      ],
    },
    {
      type: "paragraph",
      text: "On the letter version, for example, you may respond to every letter except **X**. Once you get used to responding repeatedly, the occasional no-go signal becomes surprisingly easy to click by mistake.",
    },
    {
      type: "paragraph",
      text: "That is the point of the test.",
    },
    {
      type: "heading",
      id: "what-does-it-measure",
      text: "What Does This Attention Test Measure?",
    },
    {
      type: "paragraph",
      text: "This is a **performance-based attention task**, not a questionnaire asking how focused you think you are.",
    },
    {
      type: "paragraph",
      text: "It mainly challenges three related abilities.",
    },
    {
      type: "subheading",
      text: "Sustained Attention",
    },
    {
      type: "paragraph",
      text: "Sustained attention is your ability to maintain focus over time. On this test, a lapse may cause you to miss a go stimulus that you should have responded to.",
    },
    {
      type: "subheading",
      text: "Response Inhibition",
    },
    {
      type: "paragraph",
      text: "Response inhibition is your ability to stop or withhold an action when the situation changes. Because go trials encourage you to build a response habit, a no-go trial requires you to interrupt that habit before you press.",
    },
    {
      type: "subheading",
      text: "Response Speed",
    },
    {
      type: "paragraph",
      text: "Your reaction time on correct go trials shows how quickly you detected a stimulus and produced the required response.",
    },
    {
      type: "paragraph",
      text: "These measures should be interpreted together. Responding extremely slowly can reduce mistakes, while responding to everything can produce many hits but also many false alarms.",
    },
    {
      type: "heading",
      id: "hits-misses",
      text: "Understanding Hits, Misses, False Alarms, and Correct Rejections",
    },
    {
      type: "paragraph",
      text: "A go/no-go test creates four possible outcomes.",
    },
    {
      type: "table",
      headers: ["Result", "What Happened", "What It Suggests"],
      rows: [
        ["Hit", "You responded correctly to a go stimulus", "Successful detection and response"],
        ["Miss", "You failed to respond to a go stimulus", "Possible lapse of attention or delayed response"],
        ["False alarm", "You responded to a no-go stimulus", "Failed response inhibition"],
        ["Correct rejection", "You correctly withheld your response", "Successful inhibition"],
      ],
    },
    {
      type: "paragraph",
      text: "Looking only at total accuracy can hide important differences.",
    },
    {
      type: "paragraph",
      text: "Imagine two users both score 90%. One misses several go targets but rarely clicks no-go targets. The other responds to nearly every go target but makes several false alarms. Their total accuracy may look similar, yet their response patterns are different.",
    },
    {
      type: "paragraph",
      text: "That is why a useful attention test should show the breakdown, not just one percentage.",
    },
    {
      type: "heading",
      text: "What Is a False Alarm?",
    },
    {
      type: "paragraph",
      text: "A **false alarm** happens when you respond to a stimulus that you were supposed to ignore.",
    },
    {
      type: "paragraph",
      text: "In a go/no-go task, repeated go trials make responding feel automatic. When the no-go signal appears, you must recognize it and stop the prepared response.",
    },
    {
      type: "paragraph",
      text: "A false alarm does not mean you are generally “impulsive,” and one online test cannot diagnose a problem. It simply means the response was not successfully withheld on that particular trial.",
    },
    {
      type: "paragraph",
      text: "When comparing repeated sessions, look at both your false-alarm rate and your reaction speed.",
    },
    {
      type: "heading",
      text: "What Does a Miss Mean?",
    },
    {
      type: "paragraph",
      text: "A **miss**, sometimes called an omission error, occurs when you fail to respond to a go stimulus before the trial ends.",
    },
    {
      type: "paragraph",
      text: "Misses may increase when attention drifts, when you are distracted, when the task becomes monotonous, or when you deliberately slow down too much to avoid false alarms.",
    },
    {
      type: "paragraph",
      text: "Again, one miss has little meaning by itself. The pattern across the entire session is more useful.",
    },
    {
      type: "heading",
      text: "Why a Longer Test Can Feel Harder",
    },
    {
      type: "paragraph",
      text: "Maintaining attention on a simple repetitive task is not always easy. Performance on sustained-attention tasks can change as time-on-task increases, a pattern often called the **vigilance decrement**.",
    },
    {
      type: "paragraph",
      text: "That is one reason the longer version of this test can be useful. Twenty trials provide a quick challenge. Forty trials give your attention more time to drift and make it easier to compare early performance with later performance.",
    },
    {
      type: "paragraph",
      text: "However, a browser-based task lasting only a few minutes should not be treated as a complete clinical measure of vigilance. It is a short cognitive challenge designed for personal comparison and curiosity.",
    },
    {
      type: "heading",
      id: "good-score",
      text: "What Is a Good Attention Test Score?",
    },
    {
      type: "paragraph",
      text: "There is no universal score that defines “good attention” on every online test.",
    },
    {
      type: "paragraph",
      text: "Go/no-go performance changes with trial count, target frequency, stimulus timing, response window, device, input method, and the proportion of no-go trials. A score from one website should not automatically be compared with a score from another test that uses different rules.",
    },
    {
      type: "paragraph",
      text: "Instead, look for a balanced pattern:",
    },
    {
      type: "list",
      items: [
        "high hit rate,",
        "few misses,",
        "few false alarms,",
        "stable reaction times,",
        "and similar performance from the beginning to the end of the session.",
      ],
    },
    {
      type: "paragraph",
      text: "Your own repeated results under the same settings are usually more useful for casual tracking than a generic “good” or “bad” label.",
    },
    {
      type: "heading",
      text: "Why Speed and Accuracy Must Be Viewed Together",
    },
    {
      type: "paragraph",
      text: "The fastest possible response is not automatically the best response.",
    },
    {
      type: "paragraph",
      text: "If you rush, you may click before fully identifying the stimulus and create more false alarms. If you become overly cautious, your reaction times may slow and you may start missing go trials.",
    },
    {
      type: "paragraph",
      text: "This is known as a **speed-accuracy trade-off**.",
    },
    {
      type: "paragraph",
      text: "The goal is not simply to press faster. The goal is to respond quickly when you should act and successfully hold back when you should not.",
    },
    {
      type: "paragraph",
      text: "That is what separates this task from a basic reaction time test.",
    },
    {
      type: "heading",
      text: "Attention Test vs. Reaction Time Test",
    },
    {
      type: "paragraph",
      text: "A simple [Reaction Time Test](/test/reaction-time-test) gives you one expected signal and one expected response. You wait for the signal and react.",
    },
    {
      type: "paragraph",
      text: "A go/no-go attention test adds a decision: **Should I respond to this stimulus or withhold my response?**",
    },
    {
      type: "paragraph",
      text: "That extra requirement makes the task useful for exploring sustained attention and inhibitory control rather than raw reaction speed alone.",
    },
    {
      type: "paragraph",
      text: "If you want to isolate simple response speed, take the [Reaction Time Test](/test/reaction-time-test). If you want another interference-based attention challenge, try the [Stroop Effect Test](/).",
    },
    {
      type: "heading",
      text: "Why Did My Attention Score Change?",
    },
    {
      type: "paragraph",
      text: "Your result can vary even when your underlying ability has not meaningfully changed.",
    },
    {
      type: "paragraph",
      text: "Possible influences include:",
    },
    {
      type: "list",
      items: [
        "sleep and fatigue,",
        "distractions or notifications,",
        "practice with the task,",
        "stress or mental load,",
        "device and browser latency,",
        "mouse, keyboard, or touchscreen input,",
        "stimulus settings,",
        "and normal trial-to-trial variability.",
      ],
    },
    {
      type: "paragraph",
      text: "For cleaner comparisons, test under similar conditions.",
    },
    {
      type: "heading",
      text: "Can This Test Diagnose ADHD?",
    },
    {
      type: "paragraph",
      text: "No.",
    },
    {
      type: "paragraph",
      text: "Go/no-go and continuous-performance tasks are used in psychological and neuroscience research, including studies involving ADHD. Researchers may find group-level differences in measures such as commission errors, omission errors, and reaction-time variability.",
    },
    {
      type: "paragraph",
      text: "But those differences are not specific enough for a short browser test to diagnose ADHD.",
    },
    {
      type: "paragraph",
      text: "A diagnosis requires a much broader clinical evaluation that considers symptoms, history, functioning, context, and other possible explanations. Use this test for education, curiosity, and repeated self-comparison—not as a medical screening result.",
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
          question: "What is an attention span test?",
          answer:
            "“Attention span test” is a broad term for tasks designed to challenge how consistently you can maintain focus. This page uses a go/no-go format, where frequent responses are interrupted by occasional signals that require you to withhold your response.",
        },
        {
          question: "What does a go/no-go test measure?",
          answer:
            "It primarily measures the ability to respond correctly to go signals while inhibiting responses to no-go signals. Hits, misses, false alarms, correct rejections, and reaction time provide different views of performance.",
        },
        {
          question: "Should I take 20 or 40 trials?",
          answer:
            "Choose 20 for a quick test. Choose 40 when you want a longer session that gives more opportunity for attention to fluctuate. For progress tracking, compare sessions using the same number of trials.",
        },
        {
          question: "Is fewer false alarms always better?",
          answer:
            "Not by itself. A person could avoid every false alarm by barely responding at all, but that would create many misses. False alarms should be interpreted together with hit rate and reaction time.",
        },
        {
          question: "Why am I accurate but slow?",
          answer:
            "You may be using a cautious response strategy. That can reduce false alarms while increasing reaction time. The most useful result balances speed with accurate go/no-go decisions.",
        },
        {
          question: "Can I improve my score with practice?",
          answer:
            "You can often become better at the specific task as you learn its rhythm, controls, and rules. Practice effects are normal, so compare later sessions using the same setup rather than assuming every improvement represents a broad change in attention.",
        },
      ],
    },
    {
      type: "heading",
      text: "Test Your Focus Again",
    },
    {
      type: "paragraph",
      text: "A single score is only one snapshot.",
    },
    {
      type: "paragraph",
      text: "Take the test again using the same trial count, difficulty, stimulus type, device, and input method. Compare your **hits, misses, false alarms, reaction time, and consistency** instead of chasing one perfect accuracy percentage.",
    },
    {
      type: "paragraph",
      text: "The most useful question is not “Did I get 100%?” It is: **Can I stay accurate, controlled, and consistent from the first trial to the last?**",
    },
  ],
};
