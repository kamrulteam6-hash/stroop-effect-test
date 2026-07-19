import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tests, getTestBySlug } from "@/data/tests";
import { seoContentBySlug } from "@/data/seoContent";
import { testComponents } from "@/components/tests";
import { SectionLabel } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DeepContentRenderer } from "@/components/seo/DeepContentRenderer";

export function generateStaticParams() {
  return tests.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const test = getTestBySlug(slug);
  if (!test) return {};

  const title = test.metaTitle ?? test.title;

  return {
    title,
    description: test.metaDescription,
    keywords: test.keywords,
    alternates: { canonical: `/test/${test.slug}` },
    openGraph: {
      title,
      description: test.metaDescription,
      url: `https://www.stroopeffecttest.com/test/${test.slug}`,
      type: "website",
    },
  };
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const test = getTestBySlug(slug);
  if (!test) notFound();

  const TestComponent = testComponents[test.componentKey];
  const seoContent = seoContentBySlug[test.slug];

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: test.title,
    description: test.metaDescription,
    url: `https://www.stroopeffecttest.com/test/${test.slug}`,
    applicationCategory: "EducationalApplication",
    isAccessibleForFree: true,
    operatingSystem: "Any",
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <nav className="mb-6 text-xs text-muted-2">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/tests" className="hover:text-primary">
          All Tests
        </Link>{" "}
        / <span className="text-muted">{test.shortTitle}</span>
      </nav>

      <div className="flex flex-col items-center gap-4 text-center">
        <SectionLabel>{test.category}</SectionLabel>
        <h1 className="text-3xl font-black tracking-tight text-foreground text-balance sm:text-4xl">
          <span className="mr-2">{test.icon}</span>
          {test.title}
        </h1>
        <p className="max-w-xl text-balance text-muted">{test.shortDescription}</p>
        <div className="flex items-center gap-2">
          <Badge tone="primary">{test.difficulty}</Badge>
          <Badge tone="muted">{test.estTime}</Badge>
        </div>
      </div>

      <div className="mt-10">
        <TestComponent />
      </div>

      {seoContent && <DeepContentRenderer content={seoContent} />}

      <div className="mt-16 rounded-2xl border border-border bg-surface p-6 text-center">
        <p className="text-sm text-muted">Want to try something else?</p>
        <Link href="/tests" className="mt-2 inline-block text-sm font-semibold text-primary hover:underline">
          Browse all free tests →
        </Link>
      </div>
    </div>
  );
}
