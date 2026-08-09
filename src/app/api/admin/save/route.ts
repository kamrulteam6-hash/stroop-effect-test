import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/adminAuth";
import { getFile, putFile } from "@/lib/githubContent";
import { buildPostFile, slugify, addSlugToRegistry, PostInput } from "@/lib/blogPostFile";

const CONTENT_DIR = "src/content/blog";
const REGISTRY_PATH = "src/data/blog.ts";

export async function POST(request: NextRequest) {
  const authed = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!authed) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = await request.json().catch(() => null);
  if (!data || typeof data.title !== "string" || !data.title.trim()) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const input: PostInput = {
    title: data.title.trim(),
    description: typeof data.description === "string" ? data.description.trim() : "",
    excerpt: typeof data.excerpt === "string" ? data.excerpt.trim() : "",
    date: typeof data.date === "string" && data.date ? data.date : new Date().toISOString().slice(0, 10),
    tags: Array.isArray(data.tags) ? data.tags.filter((t: unknown) => typeof t === "string" && t.trim()) : [],
    body: typeof data.body === "string" ? data.body : "",
  };

  const slug: string = (typeof data.slug === "string" && data.slug.trim()) || slugify(input.title);
  if (!slug) return NextResponse.json({ error: "Could not derive a slug from the title" }, { status: 400 });

  try {
    const filePath = `${CONTENT_DIR}/${slug}.mdx`;
    const existing = await getFile(filePath);
    const fileContent = buildPostFile(input);
    const commitMessage = existing ? `Update blog post: ${input.title}` : `Add blog post: ${input.title}`;
    await putFile(filePath, fileContent, commitMessage, existing?.sha);

    if (!existing) {
      const registry = await getFile(REGISTRY_PATH);
      if (registry) {
        const updated = addSlugToRegistry(registry.content, slug);
        if (updated !== registry.content) {
          await putFile(REGISTRY_PATH, updated, `Register blog post: ${slug}`, registry.sha);
        }
      }
    }

    return NextResponse.json({ ok: true, slug });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Publish failed" }, { status: 500 });
  }
}
