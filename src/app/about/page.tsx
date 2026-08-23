import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Why Stroop Effect Test exists, what we build, and the standards we hold our tests to.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <SectionLabel>About Us</SectionLabel>
        <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">About Stroop Effect Test</h1>
      </div>

      <div className="mt-10 flex flex-col gap-8">
        <p className="leading-relaxed text-muted">
          Stroop Effect Test started with one goal: build a fast, free, ad-light way to try the classic Stroop
          effect experiment online — no sign-up, no app download, instant results. It grew from there into a much
          larger collection of interactive tests covering reaction time, memory, focus, perception, personality, and
          general knowledge, because the same principle that made the original test useful applied everywhere else:
          a good test should be quick to take, honest about what it measures, and free to use.
        </p>

        <section className="flex flex-col gap-3">
          <SeoHeading id="what-we-build">What We Build</SeoHeading>
          <p className="leading-relaxed text-muted">
            Every test on this site runs directly in your browser. You click start, complete the task, and get an
            instant result — no account, no email address, no waiting. Behind that simplicity is content we take
            seriously: each test page explains what the test actually measures, what the science behind it does and
            does not support, how to interpret your result responsibly, and where a self-test reaches its limits.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="our-standards">Our Standards</SeoHeading>
          <ul className="ml-5 flex list-disc flex-col gap-2 leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">Honest framing.</strong> When a test is inspired by a published
              research instrument (for example, a well-known personality or screening questionnaire), we say so
              clearly — and we say clearly when our version is an original, informal test rather than the official,
              validated instrument.
            </li>
            <li>
              <strong className="text-foreground">No diagnosis claims.</strong> Screener-style tests on this site are
              for self-reflection and education. We do not present any result as a medical, psychological, or
              psychiatric diagnosis, and we say so directly on the relevant pages.
            </li>
            <li>
              <strong className="text-foreground">No account required.</strong> You can use every test on this site
              without registering, logging in, or providing personal information.
            </li>
            <li>
              <strong className="text-foreground">Free to use.</strong> All tests are free. See our{" "}
              <Link href="/privacy-policy" className="text-primary underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              for how the site is supported and what data we collect to keep it running.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="who-its-for">Who It&apos;s For</SeoHeading>
          <p className="leading-relaxed text-muted">
            Curious individuals, students learning about cognitive psychology, teachers looking for a classroom demo,
            people passing time productively, and anyone who wants a quick, structured way to check their reaction
            time, memory span, or focus. Whatever the reason you landed here, you can take any test on this site in a
            couple of minutes and walk away with a real result.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="get-in-touch">Get in Touch</SeoHeading>
          <p className="leading-relaxed text-muted">
            Found a bug, have a suggestion for a new test, or spotted something inaccurate in the content? We want to
            hear about it.
          </p>
          <div>
            <Button href="/contact">Contact Us</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
