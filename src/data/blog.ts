export interface BlogMeta {
  title: string;
  description: string;
  excerpt: string;
  date: string;
  tags: string[];
  featuredImage?: string;
}

/** Every published post's slug. Add new posts here after dropping the .mdx file in src/content/blog/. */
export const BLOG_SLUGS = ["how-the-stroop-effect-works-in-the-brain", "how-accurate-are-online-iq-tests", "science-of-reaction-time", "working-memory-vs-short-term-memory", "how-color-blind-tests-actually-work", "big-five-vs-myers-briggs", "night-owl-or-morning-lark-chronotype-biology", "field-guide-to-cognitive-biases", "what-is-a-good-typing-speed"] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];
