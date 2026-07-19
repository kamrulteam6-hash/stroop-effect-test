import type { MetadataRoute } from "next";
import { tests } from "@/data/tests";

const BASE_URL = "https://www.stroopeffecttest.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/tests`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const testRoutes: MetadataRoute.Sitemap = tests.map((test) => ({
    url: `${BASE_URL}/test/${test.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: test.slug === "stroop-effect-test" ? 1 : 0.7,
  }));

  return [...staticRoutes, ...testRoutes];
}
