import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions for using the free online cognitive tests at stroopeffecttest.com.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">Terms of Service</h1>
        <p className="text-sm text-muted-2">Last updated: August 23, 2026</p>
      </div>

      <div className="mt-10 flex flex-col gap-8">
        <p className="leading-relaxed text-muted">
          These Terms of Service (&quot;Terms&quot;) govern your use of stroopeffecttest.com (&quot;the site&quot;),
          operated by Stroop Effect Test (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using
          the site, you agree to these Terms. If you do not agree, please do not use the site.
        </p>

        <section className="flex flex-col gap-3">
          <SeoHeading id="use-of-the-site">Use of the Site</SeoHeading>
          <p className="leading-relaxed text-muted">
            The site provides free, browser-based cognitive, reaction, memory, perception, and personality-style
            tests for entertainment, educational, and self-reflection purposes. You may use the site for personal,
            non-commercial purposes. You agree not to:
          </p>
          <ul className="ml-5 flex list-disc flex-col gap-1 leading-relaxed text-muted">
            <li>Copy, scrape, or reproduce the site&apos;s content, tests, or underlying code for redistribution or commercial use without permission</li>
            <li>Attempt to disrupt, overload, or interfere with the normal operation of the site</li>
            <li>Use automated tools to extract data from the site at scale</li>
            <li>Use the site for any unlawful purpose</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="no-medical-or-professional-advice">Not Medical, Diagnostic, or Professional Advice</SeoHeading>
          <p className="leading-relaxed text-muted">
            The tests, quizzes, and scores on this site are for entertainment, educational, and informational
            purposes only. They are not medical devices, psychological assessments, or diagnostic tools, and they are
            not a substitute for professional medical, psychological, psychiatric, educational, or legal advice,
            diagnosis, or treatment.
          </p>
          <p className="leading-relaxed text-muted">
            Many of our screener-style tests are original questionnaires inspired by published research concepts —
            they are explicitly not the official, validated clinical or research instruments they may reference
            (for example, official scales for anxiety, depression, personality, or attention). Never disregard
            professional advice or delay seeking it because of something you read or a score you received on this
            site. If you are experiencing a medical or mental health emergency, contact your local emergency services
            or a qualified professional immediately.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="intellectual-property">Intellectual Property</SeoHeading>
          <p className="leading-relaxed text-muted">
            The site&apos;s design, original written content, test logic, and branding are owned by us or our
            licensors and are protected by copyright and other intellectual property laws. You may share links to our
            pages and quote brief excerpts with attribution, but you may not republish substantial portions of our
            content elsewhere without permission.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="third-party-links-and-ads">Third-Party Links and Advertising</SeoHeading>
          <p className="leading-relaxed text-muted">
            The site may contain links to third-party websites and, where enabled, display advertising served by
            third parties such as Google AdSense. We do not control and are not responsible for the content,
            accuracy, or practices of third-party sites or advertisers. Visiting a third-party link or interacting
            with an ad is at your own discretion and risk.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="disclaimer-of-warranties">Disclaimer of Warranties</SeoHeading>
          <p className="leading-relaxed text-muted">
            The site and all tests, content, and results are provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, whether express or implied, including but not limited to accuracy,
            reliability, fitness for a particular purpose, or uninterrupted availability. We do our best to keep the
            site accurate and working correctly, but we do not guarantee it will always be error-free or available.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="limitation-of-liability">Limitation of Liability</SeoHeading>
          <p className="leading-relaxed text-muted">
            To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, or
            consequential damages arising from your use of, or inability to use, the site, including any decisions
            made based on a test result or score.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="changes-to-the-site-or-terms">Changes to the Site or These Terms</SeoHeading>
          <p className="leading-relaxed text-muted">
            We may update, add, remove, or modify tests, content, or features at any time. We may also update these
            Terms from time to time; the &quot;Last updated&quot; date above will reflect the most recent revision.
            Continued use of the site after changes are posted means you accept the updated Terms.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <SeoHeading id="contact-us">Contact Us</SeoHeading>
          <p className="leading-relaxed text-muted">
            Questions about these Terms can be sent to{" "}
            <a href="mailto:ad.suborganizer@gmail.com" className="text-primary underline underline-offset-2">
              ad.suborganizer@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
