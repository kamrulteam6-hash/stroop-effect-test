import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "What do you usually do when what you want clashes with what someone else wants? Push for your position? Look for a win-win solution? Split the difference? Step away? Give the other person what they want? A Conflict Style Test helps you explore which approaches you tend to use when dealing with disagreement.",
    },
    {
      type: "paragraph",
      text: "This page uses the widely known five-mode conflict framework associated with Kenneth W. Thomas and Ralph H. Kilmann: competing, collaborating, compromising, avoiding, and accommodating. This is a self-reflection test using original questions inspired by that framework — it is not the official, proprietary Thomas-Kilmann Conflict Mode Instrument (TKI), and its result should not be treated as equivalent to a licensed TKI administration.",
    },
    { type: "heading", id: "what-is-conflict-style", text: "What Is a Conflict Style?" },
    {
      type: "paragraph",
      text: "A conflict style is a pattern in how you respond when your goals, preferences, needs, or concerns differ from someone else's. Conflict does not automatically mean shouting — it can be a disagreement about a deadline, two people wanting different plans, a workplace priority dispute, a family boundary issue, negotiation over resources, or disagreement about how to solve a problem. The important question is: how do you try to handle the difference?",
    },
    { type: "heading", id: "two-dimensions", text: "The Two Dimensions Behind the Five Conflict Modes" },
    {
      type: "paragraph",
      text: "The Thomas-Kilmann model organizes conflict behavior around two dimensions: assertiveness and cooperativeness. Assertiveness refers to the extent to which you try to satisfy your own concerns. Cooperativeness refers to the extent to which you try to satisfy the other person's concerns. Different combinations produce five conflict-handling modes, which makes the framework more useful than calling one person \"good at conflict\" and another \"bad at conflict\" — different situations call for different responses.",
    },
    { type: "heading", id: "five-styles", text: "The Five Conflict Styles" },
    {
      type: "table",
      headers: ["Style", "Pattern", "Useful When"],
      rows: [
        ["Competing", "High assertiveness, lower cooperativeness — push strongly for your position", "A quick decision is needed, safety is involved, or you must defend an important boundary"],
        ["Collaborating", "High assertiveness, high cooperativeness — seek a solution addressing both sides", "Both sides have important needs, the issue is complex, or long-term commitment matters"],
        ["Compromising", "Moderate assertiveness and cooperativeness — both sides give up something", "Time is limited, power is comparable, or a temporary solution is needed"],
        ["Avoiding", "Lower assertiveness and cooperativeness — postpone or withdraw", "The issue is trivial, emotions need time to settle, or more information is needed"],
        ["Accommodating", "Lower assertiveness, high cooperativeness — prioritize the other person's concerns", "The issue matters far more to them, or preserving goodwill outweighs winning"],
      ],
    },
    {
      type: "paragraph",
      text: "Each style also has a downside when overused. Competing too often can make other people feel ignored or dominated. Collaborating on every issue takes time, openness, and effort that minor disagreements don't need. Compromising means neither side may get everything it really wants. Avoiding becomes problematic when important issues remain unresolved simply because conflict feels uncomfortable. Accommodating too often can create resentment or repeatedly sacrifice legitimate needs.",
    },
    { type: "heading", id: "no-best-style", text: "There Is No Single \"Best\" Conflict Style" },
    {
      type: "paragraph",
      text: "It is tempting to rank the modes — collaborating as \"good,\" avoiding as \"bad\" — but that misses the purpose of the framework. Imagine a small disagreement about where to eat lunch: spending an hour deeply collaborating would be absurd, and a quick compromise is probably enough. Now imagine a safety emergency: slow consensus-building may be inappropriate, and competing or decisive action may be necessary. The useful skill is not maximizing one mode — it is matching the mode to the situation.",
    },
    { type: "heading", id: "what-result-means", text: "What Your Conflict Style Result Means" },
    {
      type: "paragraph",
      text: "A result should ideally show a profile across all five styles rather than one label. High competing may mean you're comfortable taking a firm position and acting decisively — watch whether urgency is real or whether every disagreement becomes a contest. High collaborating may mean you invest heavily in understanding both sides — watch the time cost when an issue is simple. High compromising may mean you're good at finding practical middle ground — watch whether splitting the difference prevents a better solution. High avoiding may mean you're skilled at choosing your battles — watch whether important issues remain untouched. High accommodating may mean you're generous and relationship-focused — watch whether your own priorities repeatedly disappear.",
    },
    { type: "heading", id: "vs-communication-style", text: "Conflict Style vs. Communication Style" },
    {
      type: "paragraph",
      text: "These concepts overlap, but they answer different questions. Conflict style asks what strategy you use when interests differ. Communication style asks how you express your needs, feelings, and disagreement. You can collaborate while communicating badly, and you can also compete while communicating clearly and respectfully. Our [Communication Style Test](/test/communication-style-test) compares assertive, passive, aggressive, and passive-aggressive communication patterns.",
    },
    { type: "heading", id: "choosing-a-mode", text: "How to Choose a Conflict Mode More Deliberately" },
    {
      type: "paragraph",
      text: "Before reacting, ask five questions. How important is the issue to me — if the outcome barely matters, heavy competition may waste energy. How important is it to the other person — if it matters greatly to them and very little to you, accommodation may make sense. How much time do we have — collaboration can produce strong solutions but requires time. Does the relationship matter — a one-time transaction and a long-term partnership may justify different strategies. And do we have enough information — sometimes avoiding temporarily means \"we should not decide yet,\" which can be wise rather than fearful.",
    },
    { type: "heading", id: "compromise-vs-collaboration", text: "Compromise Is Not the Same as Collaboration" },
    {
      type: "paragraph",
      text: "These styles are frequently confused. Compromise asks what each of us can give up. Collaboration asks whether there is a solution that addresses the important concerns on both sides. Suppose two departments both want the same meeting room — compromise might split the available hours, while collaboration might discover that one team only needs the room because of equipment that can be moved elsewhere. The collaborative solution changes the problem instead of simply dividing the original resource.",
    },
    { type: "heading", id: "building-flexibility", text: "How to Build More Conflict Flexibility" },
    {
      type: "paragraph",
      text: "The goal is not to erase your preferred style — it is to expand your options. Practice identifying situations where your default mode performs poorly. If you usually avoid, practice addressing a small disagreement directly. If you usually compete, practice asking the other person's underlying concern before arguing your position. If you always accommodate, state one legitimate need before agreeing. If you always collaborate, notice when a simple compromise would be faster. Flexibility makes the model useful.",
    },
    {
      type: "callout",
      icon: "ℹ️",
      title: "About the framework",
      tone: "primary",
      text: "This test's questions are original and inspired by the well-known assertiveness/cooperativeness framework popularized by Thomas and Kilmann. It is not a licensed administration of the proprietary Thomas-Kilmann Conflict Mode Instrument (TKI).",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What are the five conflict styles?", answer: "Competing, collaborating, compromising, avoiding, and accommodating." },
        { question: "What does the Thomas-Kilmann model measure?", answer: "It organizes conflict-handling behavior around assertiveness and cooperativeness and describes five modes created from different combinations of those dimensions." },
        { question: "Which conflict style is best?", answer: "No single style is best in every situation. Effectiveness depends on the issue, urgency, relationship, power, and other contextual factors." },
        { question: "Is avoiding conflict always bad?", answer: "No. Temporary or deliberate avoidance can be appropriate when the issue is trivial, more information is needed, or emotions should cool." },
        { question: "What is the difference between compromising and collaborating?", answer: "Compromise usually involves each side giving up part of what it wants. Collaboration searches for a solution that more fully addresses both sides' concerns." },
        { question: "Is this the official TKI?", answer: "No. Only a properly licensed administration of the proprietary Thomas-Kilmann Conflict Mode Instrument should be represented as the official TKI. This is an original quiz that uses the five-style concept without claiming to be the official instrument." },
      ],
    },
    { type: "heading", text: "The Goal Is Not One Perfect Style" },
    {
      type: "paragraph",
      text: "Conflict skill is not always competing. It is not always collaborating. It is not always keeping the peace. The real skill is having more than one response available — sometimes stand firm, sometimes search for a win-win solution, sometimes split the difference, sometimes wait, sometimes let the other person have the issue. Your Conflict Style Test result shows where you naturally tend to start. The next step is learning when another mode would work better.",
    },
  ],
};
