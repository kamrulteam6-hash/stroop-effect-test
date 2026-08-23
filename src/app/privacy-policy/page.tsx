import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Stroop Effect Test collects, uses, and protects information when you use our free online cognitive tests.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">Privacy Policy</h1>
        <p className="text-sm text-muted-2">Last updated: August 23, 2026</p>
      </div>

      <div className="mt-10 flex flex-col gap-8">
        <p className="leading-relaxed text-muted">
          Stroop Effect Test (&quot;we,&quot; &quot;our,&quot; or &quot;the site&quot;) operates stroopeffecttest.com. This
          Privacy Policy explains what information we collect when you visit our site, how we use it, and the choices
          you have. We built this site so anyone can take our tests without creating an account or handing over
          personal details — this policy exists to be transparent about the parts of your visit we do measure.
        </p>

        <section className="flex flex-col gap-3">
          <SeoHeading id="what-we-collect">What Information We Collect</SeoHeading>
          <p className="leading-relaxed text-muted">
            We do not require registration, accounts, or logins to use any test on this site. We do not ask for your
            name, email address, or other personal information to take a test or view a result.
          </p>
          <p className="leading-relaxed text-muted">
            When you visit the site, we and our service providers automatically collect some technical and usage
            information, including:
          </p>
          <ul className="ml-5 flex list-disc flex-col gap-1 leading-relaxed text-muted">
            <li>Pages and tests you view, and how long you spend on them</li>
            <li>General location (country/region, inferred from IP address)</li>
            <li>Device, browser type, and operating system</li>
            <li>Referring website or search engine that sent you here</li>
            <li>Your individual test results and scores, processed in your browser and not tied to any personal identity</li>
          </ul>
          <p className="leading-relaxed text-muted">
            Your test answers and scores are calculated and shown to you directly in your browser. We do not store
            your individual test results on our servers or associate them with you personally.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="cookies-and-tracking">Cookies and Similar Technologies</SeoHeading>
          <p className="leading-relaxed text-muted">
            We use cookies and similar technologies (such as local storage) for the following purposes:
          </p>
          <ul className="ml-5 flex list-disc flex-col gap-1 leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">Analytics</strong> — we use Google Analytics to understand how many
              people visit the site, which pages and tests are popular, and where traffic comes from. Google Analytics
              uses cookies to distinguish visitors and sessions.
            </li>
            <li>
              <strong className="text-foreground">Preferences</strong> — some tests may save your recent scores or
              settings locally in your browser (for example, to show a personal best) so you can compare future
              attempts. This data stays on your device and is never sent to us.
            </li>
            <li>
              <strong className="text-foreground">Advertising</strong> — if and when we display advertising on this
              site (for example, through Google AdSense), our advertising partners may use cookies or similar
              technologies to serve ads and measure their performance. These partners may use non-personally
              identifiable information about your visits to this and other websites to provide advertisements about
              goods and services of interest to you.
            </li>
          </ul>
          <p className="leading-relaxed text-muted">
            You can control or delete cookies through your browser settings. Blocking cookies may affect some
            features of the site, such as saved scores or personalized ad relevance, but it will not prevent you from
            taking any test.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="third-party-services">Third-Party Services</SeoHeading>
          <p className="leading-relaxed text-muted">We use the following third-party services to operate this site:</p>
          <ul className="ml-5 flex list-disc flex-col gap-1 leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">Google Analytics</strong> — website traffic and usage analytics. See{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                Google&apos;s Privacy Policy
              </a>{" "}
              for details on how Google handles this data.
            </li>
            <li>
              <strong className="text-foreground">Google AdSense</strong> (where enabled) — third-party advertising.
              Google and its partners use cookies to serve ads based on your prior visits to this and other websites.
              You can opt out of personalized advertising by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                Google Ads Settings
              </a>
              .
            </li>
            <li>
              <strong className="text-foreground">Hosting and content delivery providers</strong> — used to serve the
              website reliably and securely.
            </li>
          </ul>
          <p className="leading-relaxed text-muted">
            These third parties have their own privacy policies governing how they use information, and we encourage
            you to review them.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="childrens-privacy">Children&apos;s Privacy</SeoHeading>
          <p className="leading-relaxed text-muted">
            This site is intended for a general audience and is not directed specifically at children under 13. We do
            not knowingly collect personal information from children under 13. If you believe a child has provided
            us with personal information, please contact us and we will take appropriate steps to remove it.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="your-choices">Your Choices and Rights</SeoHeading>
          <p className="leading-relaxed text-muted">Depending on where you live, you may have rights to:</p>
          <ul className="ml-5 flex list-disc flex-col gap-1 leading-relaxed text-muted">
            <li>Opt out of analytics tracking (for example, using a browser extension or ad blocker)</li>
            <li>Opt out of personalized advertising through your browser or Google Ads Settings</li>
            <li>Request information about data collected about you, where applicable</li>
            <li>Clear cookies and locally stored data at any time through your browser</li>
          </ul>
          <p className="leading-relaxed text-muted">
            Because we do not require accounts and do not store personally identifying information tied to your test
            results, there is generally no personal account data for us to provide, correct, or delete beyond what
            your browser already controls.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="data-security">Data Security</SeoHeading>
          <p className="leading-relaxed text-muted">
            We take reasonable measures to protect the site and the limited data we process, including serving the
            site over HTTPS. No method of transmission over the internet is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="changes-to-this-policy">Changes to This Policy</SeoHeading>
          <p className="leading-relaxed text-muted">
            We may update this Privacy Policy from time to time, for example to reflect new features or legal
            requirements. We will update the &quot;Last updated&quot; date at the top of this page when we do.
            Continued use of the site after changes are posted means you accept the updated policy.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="contact-us">Contact Us</SeoHeading>
          <p className="leading-relaxed text-muted">
            If you have questions about this Privacy Policy or how your information is handled, contact us at{" "}
            <a href="mailto:ad.suborganizer@gmail.com" className="text-primary underline underline-offset-2">
              ad.suborganizer@gmail.com
            </a>{" "}
            or visit our{" "}
            <Link href="/contact" className="text-primary underline underline-offset-2">
              Contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
