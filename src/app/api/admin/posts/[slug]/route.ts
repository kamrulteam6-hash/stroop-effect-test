import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/adminAuth";
import { getFile } from "@/lib/githubContent";
import { parsePostFile } from "@/lib/blogPostFile";

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
