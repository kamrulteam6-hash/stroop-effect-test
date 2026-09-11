import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_SLUGS, BlogMeta } from "@/data/blog";

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

async function loadPost(slug: string) {
  if (!BLOG_SLUGS.includes(slug as (typeof BLOG_SLUGS)[number])) return null;
  const mod = (await import(`@/content/blog/${slug}.mdx`)) as {
    default: React.ComponentType;
    metadata: BlogMeta;
  };
  return mod;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mod = await loadPost(slug);
  if (!mod) return {};
  const { title, description, featuredImage } = mod.metadata;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.stroopeffecttest.com/blog/${slug}`,
      type: "article",
      ...(featuredImage ? { images: [{ url: featuredImage }] } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = await loadPost(slug);
  if (!mod) notFound();

  const { default: Post, metadata } = mod;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.description,
    datePublished: metadata.date,
    dateModified: metadata.date,
    author: { "@type": "Organization", name: "Stroop Effect Test Editorial Team" },
    publisher: { "@type": "Organization", name: "Stroop Effect Test" },
    mainEntityOfPage: `https://www.stroopeffecttest.com/blog/${slug}`,
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-xs text-muted-2">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {metadata.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="mt-3 text-2xl font-bold text-foreground sm:text-4xl">{metadata.title}</h1>
      <p className="mt-2 flex flex-wrap items-center gap-x-1.5 text-xs text-muted-2">
        <time dateTime={metadata.date}>
          {new Date(metadata.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
        <span>·</span>
        <span>
          By the{" "}
          <Link href="/about#editorial-team" className="font-semibold text-primary hover:underline">
            Stroop Effect Test Editorial Team
          </Link>
        </span>
      </p>

      {metadata.featuredImage && (
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface-2">
          <Image
            src={metadata.featuredImage}
            alt={metadata.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      )}

      <article className="mt-8 flex flex-col gap-5">
        <Post />
      </article>
    </div>
  );
}
