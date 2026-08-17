import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SeoHeading, SeoSubheading } from "@/components/seo/SeoHeading";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";
import { DataTable } from "@/components/seo/DataTable";
import { HeroBackground } from "@/components/home/HeroBackground";
import { TestCard } from "@/components/home/TestCard";
import { StroopTest } from "@/components/tests/StroopTest";
import { tests } from "@/data/tests";

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

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      {/* Hero */}
      <section className="relative flex flex-col items-center gap-6 py-8 text-center">
        <HeroBackground />
        <SectionLabel>{tests.length} Free Online Tests · No Sign-up</SectionLabel>
        <h1 className="max-w-3xl text-balance text-4xl font-black tracking-tight text-foreground sm:text-6xl">
          Test Your Mind with the <span className="text-primary">Stroop Effect Test</span>
        </h1>
        <p className="max-w-xl text-balance text-lg text-muted">
          Name the ink color, not the word. Try the classic Stroop Effect Test below, then explore {otherTests.length}{" "}
          more free reaction, memory, vision, and hearing tests.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="#stroop-test" size="lg">
            Take the Test Now
          </Button>
          <Button href="/tests" size="lg" variant="secondary">
            Browse All Tests
          </Button>
        </div>
      </section>

      {/* Stroop test section */}
      <section id="stroop-test" className="scroll-mt-20 pt-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">The Stroop Effect Test</h2>
          <p className="max-w-xl text-balance text-muted">
            Click the button matching the <span className="font-semibold text-foreground">ink color</span> of each
            word, not the word itself. Sounds easy — most people are surprised how much it slows them down.
          </p>
          <div className="flex items-center gap-2">
            <Badge tone="primary">Medium</Badge>
            <Badge tone="muted">2 min</Badge>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-2xl">
          <StroopTest />
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Want the full breakdown?{" "}
          <Link href="/test/stroop-effect-test" className="font-semibold text-primary hover:underline">
            Read about the science behind the Stroop effect →
          </Link>
        </p>
      </section>

      {/* Test grid */}
      <section className="mt-20 border-t border-border pt-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionLabel>More Free Tests</SectionLabel>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Explore {otherTests.length} More Free Cognitive Tests</h2>
          <p className="max-w-xl text-balance text-muted">
            Reaction speed, memory, perception, hearing, and math — each test gives instant results, no sign-up.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherTests.map((test) => (
            <TestCard key={test.slug} test={test} />
          ))}
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

        <SeoHeading id="faq">Frequently Asked Questions About the Stroop Effect Test</SeoHeading>
        <SeoFaqBlock items={homeFaqs} />
      </section>
    </div>
  );
}
