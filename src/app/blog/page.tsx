import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel, Card } from "@/components/ui/Card";
import { BLOG_SLUGS, BlogMeta } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on the science behind cognitive biases, reaction time, memory, and perception — with links to try the real tests yourself.",
  alternates: { canonical: "/blog" },
};

async function loadPosts() {
  const posts = await Promise.all(
    BLOG_SLUGS.map(async (slug) => {
      const mod = (await import(`@/content/blog/${slug}.mdx`)) as { metadata: BlogMeta };
      return { slug, ...mod.metadata };
    })
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function BlogIndexPage() {
  const posts = await loadPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <SectionLabel>The Blog</SectionLabel>
        <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Cognitive Science, Explained
        </h1>
        <p className="max-w-xl text-balance text-muted">
          The research behind the tests on this site — reaction time, memory, perception, and the biases that quietly
          shape your judgment.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card hover className="flex flex-col gap-4 sm:flex-row">
              {post.featuredImage && (
                <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl border border-border bg-surface-2 sm:h-auto sm:w-48">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-2 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-bold text-foreground">{post.title}</h2>
                <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <time dateTime={post.date} className="text-xs text-muted-2">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
