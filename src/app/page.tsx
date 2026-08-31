import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SeoHeading, SeoSubheading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { StroopTest } from "@/components/tests/StroopTest";
import { tests, getTestBySlug, TestCategory } from "@/data/tests";

const otherTests = tests.filter((t) => t.slug !== "stroop-effect-test");

export const metadata: Metadata = {
  title: { absolute: "Stroop Effect Test — Free Online, Instant Results" },
  description: `Take the free Stroop Effect Test online and measure your cognitive control and selective attention in under 2 minutes. Instant results, no sign-up, plus ${otherTests.length} more free cognitive tests.`,
  keywords: [
    "stroop effect test",
    "stroop test online",
    "free stroop test",
    "color word test",
    "cognitive control test",
    "selective attention test",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Stroop Effect Test — Free Online, Instant Results",
    description:
      "Take the free Stroop Effect Test online and measure your cognitive control and selective attention in under 2 minutes.",
    url: "https://www.stroopeffecttest.com/",
    type: "website",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Stroop Effect Test",
  url: "https://www.stroopeffecttest.com/",
  description: `Free online Stroop Effect Test plus ${otherTests.length} more cognitive, reaction, memory, vision, and hearing tests.`,
};

const homeFaqs = [
  {
    question: "Is the Stroop Effect Test free to take?",
    answer:
      "Yes. Every test on this site, including the Stroop Effect Test, is completely free with no sign-up required and no limit on how many times you can play.",
  },
  {
    question: "What does the Stroop effect measure?",
    answer:
      "It measures selective attention and cognitive control — specifically, how well your brain can suppress an automatic response (reading a word) in favor of a slower, deliberate one (naming an ink color).",
  },
  {
    question: "What is a good Stroop test score?",
    answer:
      "There's no universal pass/fail score. A faster average response time with high accuracy generally reflects stronger cognitive control, but scores naturally vary with age, fatigue, and practice — compare your own results over time rather than to a fixed benchmark.",
  },
  {
    question: "Can this test diagnose ADHD or cognitive decline?",
    answer:
      "No. This is an informal, entertainment-oriented screening inspired by a real research paradigm. It is not validated as a diagnostic tool — only a qualified clinician using standardized instruments can assess conditions like ADHD or cognitive decline.",
  },
  {
    question: "How many tests are on this site?",
    answer: `We currently have ${tests.length} fully interactive cognitive, reaction, memory, vision, and hearing tests, with more being added regularly.`,
  },
  {
    question: "Do I need to create an account?",
    answer: "No. Every test runs entirely in your browser — there's no sign-up, no data collection form, and no account needed to see your results.",
  },
  {
    question: "Are these tests scientifically validated?",
    answer:
      "Most tests here are inspired by well-known paradigms from cognitive psychology, such as the Stroop task and go/no-go tasks. They're designed for fun and self-awareness, not as clinical diagnostic tools.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const categoryPicks: { label: string; icon: string; category: TestCategory; blurb: string; color: string }[] = [
  { label: "Memory", icon: "🧠", category: "Memory & Cognition", blurb: "Test your short and long-term memory", color: "bg-violet-500/10 text-violet-600" },
  { label: "Reaction Speed", icon: "⚡", category: "Reaction & Speed", blurb: "Measure your response time", color: "bg-amber-500/10 text-amber-600" },
  { label: "Attention", icon: "🎯", category: "Focus & Attention", blurb: "Improve your focus and concentration", color: "bg-emerald-500/10 text-emerald-600" },
  { label: "Vision", icon: "👁️", category: "Vision", blurb: "Check your visual perception", color: "bg-sky-500/10 text-sky-600" },
  { label: "Hearing", icon: "👂", category: "Hearing", blurb: "Test your auditory abilities", color: "bg-rose-500/10 text-rose-600" },
  { label: "Reasoning", icon: "🧩", category: "IQ & Logic", blurb: "Challenge your problem solving", color: "bg-orange-500/10 text-orange-600" },
];

const popularSlugs = [
  "reaction-time-test",
  "number-memory-test",
  "visual-memory-test",
  "sequence-memory-test",
  "colorblind-test-online",
  "typing-speed-test",
  "attention-span-test",
  "mental-math-test",
];
const popularTests = popularSlugs.map((slug) => getTestBySlug(slug)).filter((t): t is NonNullable<typeof t> => !!t);
const popularCardColors = [
  "bg-violet-500/10 text-violet-600",
  "bg-emerald-500/10 text-emerald-600",
  "bg-orange-500/10 text-orange-600",
  "bg-sky-500/10 text-sky-600",
  "bg-rose-500/10 text-rose-600",
  "bg-cyan-500/10 text-cyan-600",
  "bg-fuchsia-500/10 text-fuchsia-600",
  "bg-amber-500/10 text-amber-600",
];

const howItWorks = [
  { step: 1, title: "Choose a Test", body: `Select from ${tests.length}+ cognitive tests across ${new Set(tests.map((t) => t.category)).size} categories.`, color: "bg-sky-500" },
  { step: 2, title: "Take the Challenge", body: "Most tests take between 1 and 5 minutes to complete.", color: "bg-emerald-500" },
  { step: 3, title: "See Your Results", body: "Get instant results and performance details the moment you finish.", color: "bg-orange-500" },
  { step: 4, title: "Try Again & Improve", body: "Challenge yourself again and compare against your own past attempts.", color: "bg-violet-500" },
];

export default function Home() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      {/* Dark hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_#241a5e_0%,_#140f33_45%,_#0c0920_100%)] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-white/70">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                ✓ 100% Free
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                🚫 No Sign Up
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                ⚡ Instant Results
              </span>
            </div>
            <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Can You Outsmart <span className="text-[#8d7bff]">Your Brain?</span>
            </h1>
            <p className="max-w-lg text-balance text-white/70">
              Challenge your attention, reaction speed, memory, perception and cognitive control with our{" "}
              {tests.length}+ free online cognitive tests.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="#stroop-test" size="lg">
                Take the Stroop Test →
              </Button>
              <Button href="/tests" size="lg" variant="secondary" className="!border-white/20 !bg-white/5 !text-white hover:!border-white/40">
                Browse All Tests
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/homepage/hero-neural-brain.png"
                alt="Illustration of a glowing neural network in the shape of a human head, representing cognitive testing"
                fill
                sizes="(max-width: 1024px) 384px, 480px"
                className="object-contain drop-shadow-[0_0_40px_rgba(141,123,255,0.35)]"
                priority
              />
            </div>
            {/* Decorative preview card — a static snapshot of the real test below, not interactive */}
            <div
              aria-hidden
              className="absolute -top-2 right-0 hidden w-40 rounded-2xl border border-white/10 bg-[#181530]/90 p-4 text-center shadow-2xl backdrop-blur sm:block"
            >
              <p className="text-lg font-black text-[#3b6ef0]">BLUE</p>
              <p className="text-lg font-black text-[#e0374b]">RED</p>
              <p className="mt-2 text-[10px] text-white/50">Name the color, not the word.</p>
              <div className="mt-3 grid grid-cols-2 gap-1.5">
                {[
                  { label: "RED", color: "#e0374b" },
                  { label: "BLUE", color: "#3b6ef0" },
                  { label: "GREEN", color: "#16a672" },
                  { label: "YELLOW", color: "#f5c518" },
                ].map((c) => (
                  <span key={c.label} className="rounded-md border border-white/10 py-1 text-[9px] font-bold" style={{ color: c.color }}>
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Featured test */}
        <section id="stroop-test" className="-mt-20 scroll-mt-24 sm:-mt-24">
          <Card className="!p-6 sm:!p-8">
            <div className="mb-6 flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src="/images/homepage/featured-rainbow-brain.png"
                  alt="Colorful illustration of a human head with a rainbow-segmented brain"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div>
                <Badge tone="gold">★ Featured Test</Badge>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">Stroop Effect Test</h2>
                <p className="mt-1 text-sm text-muted">Can you ignore the word and identify the color?</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl border border-border bg-surface-2 p-3">
                    <p className="text-xs font-bold text-foreground">2 Min</p>
                    <p className="text-[10px] text-muted-2">Average Time</p>
                  </div>
                  <div className="rounded-xl border border-border bg-surface-2 p-3">
                    <p className="text-xs font-bold text-foreground">Attention</p>
                    <p className="text-[10px] text-muted-2">&amp; Control</p>
                  </div>
                  <div className="rounded-xl border border-border bg-surface-2 p-3">
                    <p className="text-xs font-bold text-foreground">Free</p>
                    <p className="text-[10px] text-muted-2">No Sign-Up</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  The Stroop effect is a classic psychology phenomenon that demonstrates how our brain struggles to
                  process conflicting information. Name the ink color, not the word, as fast and accurately as you
                  can.
                </p>
                <Link
                  href="/test/stroop-effect-test"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Read about the science behind the Stroop effect →
                </Link>
              </div>

              <div>
                <StroopTest />
              </div>
            </div>
          </Card>
        </section>

        {/* Category picker */}
        <section className="mt-20 flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">What Do You Want to Test?</h2>
          <p className="text-sm text-muted">Explore tests by cognitive ability</p>
          <div className="mt-6 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categoryPicks.map((cat) => (
              <Link key={cat.category} href={`/tests?category=${encodeURIComponent(cat.category)}`}>
                <Card hover className="flex flex-col items-center gap-2 !p-5 text-center">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${cat.color}`}>
                    {cat.icon}
                  </span>
                  <span className="text-sm font-bold text-foreground">{cat.label}</span>
                  <span className="text-xs leading-snug text-muted-2">{cat.blurb}</span>
                </Card>
              </Link>
            ))}
          </div>
          <Button href="/tests" variant="secondary" className="mt-4">
            Explore All Categories →
          </Button>
        </section>

        {/* Popular tests */}
        <section className="mt-20 flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Popular Tests</h2>
          <p className="text-sm text-muted">Try some of our most-taken cognitive tests</p>
          <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularTests.map((test, i) => (
              <Link key={test.slug} href={`/test/${test.slug}`}>
                <Card hover className="flex items-start gap-3 !p-4 text-left">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl ${popularCardColors[i % popularCardColors.length]}`}
                  >
                    {test.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-foreground">{test.title}</p>
                    <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-muted">{test.shortDescription}</p>
                    <p className="mt-1 text-[10px] font-semibold text-muted-2">{test.estTime}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <Button href="/tests" variant="secondary" className="mt-4">
            View All {tests.length} Tests →
          </Button>
        </section>

        {/* How it works */}
        <section className="mt-20 flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">How It Works</h2>
          <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center gap-2 text-center">
                {i < howItWorks.length - 1 && (
                  <span className="pointer-events-none absolute top-4 left-1/2 hidden w-full text-lg text-border lg:block">
                    <span className="absolute left-[calc(50%+1.25rem)]">→</span>
                  </span>
                )}
                <span className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white ${s.color}`}>
                  {s.step}
                </span>
                <h3 className="font-bold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why does it happen */}
        <section className="mt-20 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Why Does the Stroop Effect Happen?</h2>
            <p className="text-sm text-muted">
              Your brain automatically wants to read the word. But the test asks you to identify its color instead.
            </p>
            <Card className="flex flex-col gap-3 !p-5">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-2">Congruent</p>
                  <p className="text-2xl font-black text-[#3b6ef0]">BLUE</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-2">Incongruent</p>
                  <p className="text-2xl font-black text-[#e0374b]">BLUE</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 border-t border-border pt-3 text-sm text-muted">
                <p>
                  Word says: <span className="font-semibold text-[#3b6ef0]">BLUE</span>
                </p>
                <p>
                  Ink says: <span className="font-semibold text-[#e0374b]">RED</span>
                </p>
                <p>
                  Your task: identify <span className="font-semibold text-[#e0374b]">RED</span>
                </p>
              </div>
            </Card>
            <Button href="/test/stroop-effect-test" variant="secondary" className="self-start">
              Learn How the Stroop Effect Works →
            </Button>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs">
            <Image
              src="/images/homepage/split-brain-splash.png"
              alt="Artistic illustration of a brain split into cool blue and warm orange halves, representing two competing mental processes"
              fill
              sizes="320px"
              className="object-contain"
            />
          </div>
        </section>

        {/* Honest stats band */}
        <section className="mt-20 rounded-2xl bg-[#100e1f] px-6 py-8 text-white">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl">🧠</span>
              <p className="text-2xl font-black">{tests.length}+</p>
              <p className="text-xs text-white/60">Cognitive Tests</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl">🎁</span>
              <p className="text-2xl font-black">100%</p>
              <p className="text-xs text-white/60">Free to Use</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl">🚫</span>
              <p className="text-2xl font-black">0</p>
              <p className="text-xs text-white/60">Sign-Ups Required</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl">⏱️</span>
              <p className="text-2xl font-black">1–5 min</p>
              <p className="text-xs text-white/60">Per Test</p>
            </div>
          </div>
        </section>

        {/* SEO content */}
        <section className="mt-20 flex flex-col gap-8 border-t border-border pt-12">
          <SeoHeading id="what-is-stroop">What Is the Stroop Effect?</SeoHeading>
          <p className="leading-relaxed text-muted">
            The Stroop effect is a well-documented delay in reaction time that happens when your brain has to resolve
            conflicting information. In the classic version of the task, you&apos;re shown the name of a color printed
            in a different colored ink — for example, the word &quot;GREEN&quot; printed in red ink — and asked to say
            the ink color out loud, not read the word. Because reading is such an automatic skill, your brain has to
            actively work to override that automatic urge and focus on the actual color, which reliably slows people
            down and increases errors compared to when the word and ink color match.
          </p>
          <p className="leading-relaxed text-muted">
            First described by psychologist John Ridley Stroop in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Stroop_effect"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              1935
            </a>
            , this effect has become one of the most replicated findings in experimental psychology. It&apos;s used by
            researchers to study selective attention, cognitive control, and executive function — the mental systems
            that manage competing streams of information — and it&apos;s a genuinely fun, surprisingly hard little game
            to play on yourself.
          </p>

          <SeoHeading id="how-it-works">How the Stroop Effect Test Works</SeoHeading>
          <p className="leading-relaxed text-muted">
            Our free Stroop Effect Test follows the same core logic researchers have used for decades, with a few
            modern twists you can configure yourself:
          </p>
          <ol className="flex flex-col gap-3">
            {[
              "A color word flashes on screen, printed in an ink color that often conflicts with the word itself.",
              "Click the button matching the ink color — not the word — as quickly and accurately as you can.",
              "Choose Classic mode (mostly conflicting rounds), Fifty-Fifty mode (an even mix), or Reverse mode, where you name the word instead of the ink color.",
              "After 10, 20, or 30 rounds, see your accuracy, average response time, and how it compares to your personal best.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <SeoHeading id="interpreting-score">How to Interpret Your Stroop Test Score</SeoHeading>
          <p className="leading-relaxed text-muted">
            Researchers often calculate a formal &quot;interference score&quot; — the difference between your average
            response time on conflicting (incongruent) rounds and matching (congruent) rounds — to isolate exactly how
            much the word-color conflict slows you down. Our result screen keeps things simpler: your overall accuracy
            and average response time already reflect that same underlying interference effect, just without splitting
            congruent and incongruent rounds apart. As a rough guide for the default Classic mode:
          </p>
          <DataTable
            headers={["Average Response Time", "Typical Interpretation"]}
            rows={[
              ["Under 700ms", "Fast — well above average cognitive control on this task"],
              ["700–950ms", "Typical range for most adults"],
              ["950–1,200ms", "Slightly slower than average — fatigue and distraction are common causes"],
              ["Over 1,200ms", "Consider retaking the test in a quieter moment with fewer distractions"],
            ]}
          />
          <SeoSubheading>A Related Way to Measure Speed</SeoSubheading>
          <p className="leading-relaxed text-muted">
            If you want to isolate raw processing speed without the word-color conflict, try our{" "}
            <Link href="/test/reaction-time-test" className="font-semibold text-primary hover:underline">
              Reaction Time Test
            </Link>{" "}
            — it strips away the interference element entirely and just measures how fast you respond to a single
            visual cue.
          </p>

          <SeoHeading id="why-it-matters">Why the Stroop Effect Matters</SeoHeading>
          <p className="leading-relaxed text-muted">
            Beyond being a fun way to test yourself, the Stroop task is a genuine workhorse of cognitive psychology and
            neuroscience research. It&apos;s used to study how attention and inhibitory control develop through
            childhood, how they&apos;re affected by aging, and how they respond to fatigue, stress, or divided
            attention. Variants of it appear throughout research on executive function more broadly — the same family
            of skills tested by our{" "}
            <Link href="/test/attention-span-test" className="font-semibold text-primary hover:underline">
              Attention &amp; Focus Test
            </Link>
            , which uses a different paradigm (go/no-go) to measure sustained attention and impulse control. Together,
            tasks like these help researchers understand how the brain juggles competing demands — though, to be clear,
            none of the free tests on this site are diagnostic tools.
          </p>

          <SeoHeading id="about-this-site">What You&apos;ll Find Here</SeoHeading>
          <p className="leading-relaxed text-muted">
            This site started as a single, focused build: a fast, free, no-sign-up version of the classic Stroop
            effect experiment above. From there it grew into a much larger collection of interactive tests, because
            the same principle that made that first test useful kept applying: a good test should be quick to take,
            honest about what it actually measures, and free to use without a login wall or an email capture form.
          </p>
          <p className="leading-relaxed text-muted">
            The {tests.length} tests on this site fall into a few broad groups. Reaction and reflex tests measure raw
            response speed and motor precision. Memory tests cover short-term span, working memory, spatial memory,
            and long-term recall using established research paradigms like digit span and the N-back task. Perception
            and vision tests check things like color discrimination, visual illusions, and peripheral awareness.
            Cognitive-bias tests let you experience effects like anchoring, confirmation bias, and the sunk cost
            fallacy directly rather than just reading about them. And a set of personality and self-report screeners,
            built as original questionnaires inspired by publicly described research constructs, let you reflect on
            traits ranging from the Big Five to decision-making style.
          </p>
          <p className="leading-relaxed text-muted">
            We&apos;re explicit about what these tests are and aren&apos;t. None of them are clinical diagnostic tools,
            and none should replace a licensed professional for anything medical, psychological, or educational. Where
            a test is inspired by a named research instrument, such as a published personality or screening
            questionnaire, we say so directly on that test&apos;s page and clarify whether our version is an original
            screener or something closer to the official instrument. You can read more on the{" "}
            <Link href="/about" className="font-semibold text-primary hover:underline">
              About page
            </Link>
            , and how we handle your data on the{" "}
            <Link href="/privacy-policy" className="font-semibold text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          <SeoHeading id="faq">Frequently Asked Questions</SeoHeading>
          <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {homeFaqs.map((item) => (
                <details key={item.question} className="group rounded-2xl border border-border bg-surface p-4 open:pb-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-foreground marker:content-none">
                    {item.question}
                    <span className="shrink-0 text-lg text-muted-2 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
