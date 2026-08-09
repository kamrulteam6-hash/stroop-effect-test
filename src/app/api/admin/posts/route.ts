import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/adminAuth";
import { listDir, getFile, checkRepoAccess } from "@/lib/githubContent";
import { parsePostFile } from "@/lib/blogPostFile";

const CONTENT_DIR = "src/content/blog";

export async function GET(request: NextRequest) {
  const authed = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!authed) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const entries = await listDir(CONTENT_DIR);
    const posts = await Promise.all(
      entries
        .filter((e) => e.name.endsWith(".mdx"))
        .map(async (e) => {
          const slug = e.name.replace(/\.mdx$/, "");
          const file = await getFile(e.path);
          if (!file) return null;
          try {
            const { metadata } = parsePostFile(file.content);
            return { slug, ...metadata };
          } catch {
            return { slug, title: slug, description: "", excerpt: "", date: "", tags: [] as string[] };
          }
        })
    );

    const validPosts = posts.filter((p): p is NonNullable<typeof p> => p !== null);
    validPosts.sort((a, b) => (a.date < b.date ? 1 : -1));

    if (validPosts.length === 0) {
      const repoAccessible = await checkRepoAccess().catch(() => false);
      return NextResponse.json({ posts: [], repoAccessible });
    }

    return NextResponse.json({ posts: validPosts, repoAccessible: true });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed to load posts" }, { status: 500 });
  }
}
