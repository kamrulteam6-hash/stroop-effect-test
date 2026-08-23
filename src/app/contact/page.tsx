import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Stroop Effect Test team about bugs, suggestions, or general questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <SectionLabel>Get in Touch</SectionLabel>
        <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">Contact Us</h1>
        <p className="max-w-xl text-balance text-muted">
          Questions, bug reports, content corrections, or ideas for a new test — we&apos;d like to hear from you.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-8">
        <section className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 text-center">
          <SeoHeading id="email-us">Email Us</SeoHeading>
          <a
            href="mailto:ad.suborganizer@gmail.com"
            className="text-lg font-semibold text-primary underline underline-offset-2"
          >
            ad.suborganizer@gmail.com
          </a>
          <p className="text-sm leading-relaxed text-muted">
            We read every message and try to respond within a few business days.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="what-to-include">What to Include</SeoHeading>
          <ul className="ml-5 flex list-disc flex-col gap-1 leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">Bug reports:</strong> which test or page, what happened, and your
              browser/device if possible.
            </li>
            <li>
              <strong className="text-foreground">Content corrections:</strong> a link to the page and the specific
              claim you think is inaccurate.
            </li>
            <li>
              <strong className="text-foreground">Test suggestions:</strong> what the test would measure and why
              you&apos;d find it useful.
            </li>
            <li>
              <strong className="text-foreground">Privacy or data questions:</strong> see our{" "}
              <a href="/privacy-policy" className="text-primary underline underline-offset-2">
                Privacy Policy
              </a>{" "}
              first — it may already answer your question.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
