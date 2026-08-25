export interface BlogMeta {
  title: string;
  description: string;
  excerpt: string;
  date: string;
  tags: string[];
  featuredImage?: string;
}

/** Every published post's slug. Add new posts here after dropping the .mdx file in src/content/blog/. */
export const BLOG_SLUGS = [
  "how-the-stroop-effect-works-in-the-brain",
  "how-accurate-are-online-iq-tests",
  "science-of-reaction-time",
  "working-memory-vs-short-term-memory",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];
