export interface BlogMeta {
  title: string;
  description: string;
  excerpt: string;
  date: string;
  tags: string[];
  featuredImage?: string;
}

/** Every published post's slug. Add new posts here after dropping the .mdx file in src/content/blog/. */
export const BLOG_SLUGS = ["bilingual-stroop-effect"] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];
