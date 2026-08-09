import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/adminAuth";
import { getFile, deleteFile, putFile } from "@/lib/githubContent";
import { parsePostFile, removeSlugFromRegistry } from "@/lib/blogPostFile";

const REGISTRY_PATH = "src/data/blog.ts";

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const authed = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!authed) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { slug } = await params;
  try {
    const file = await getFile(`src/content/blog/${slug}.mdx`);
    if (!file) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const { metadata, body } = parsePostFile(file.content);
    return NextResponse.json({ slug, ...metadata, body });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed to load post" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const authed = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!authed) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { slug } = await params;
  try {
    const filePath = `src/content/blog/${slug}.mdx`;
    const file = await getFile(filePath);
    if (!file) return NextResponse.json({ error: "Not found" }, { status: 404 });

    await deleteFile(filePath, `Delete blog post: ${slug}`, file.sha);

    const registry = await getFile(REGISTRY_PATH);
    if (registry) {
      const updated = removeSlugFromRegistry(registry.content, slug);
      if (updated !== registry.content) {
        await putFile(REGISTRY_PATH, updated, `Unregister blog post: ${slug}`, registry.sha);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Delete failed" }, { status: 500 });
  }
}
