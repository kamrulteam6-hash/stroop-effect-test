import type { MetadataRoute } from "next";
import { tests } from "@/data/tests";
import { BLOG_SLUGS, BlogMeta } from "@/data/blog";

const BASE_URL = "https://www.stroopeffecttest.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/tests`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const testRoutes: MetadataRoute.Sitemap = tests.map((test) => ({
    url: `${BASE_URL}/test/${test.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: test.slug === "stroop-effect-test" ? 1 : 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = await Promise.all(
    BLOG_SLUGS.map(async (slug) => {
      const mod = (await import(`@/content/blog/${slug}.mdx`)) as { metadata: BlogMeta };
      return {
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: new Date(mod.metadata.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      };
    })
  );

  return [...staticRoutes, ...testRoutes, ...blogRoutes];
}
