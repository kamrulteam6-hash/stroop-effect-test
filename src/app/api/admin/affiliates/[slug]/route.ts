import { hasSameOrigin } from "@/lib/requestOrigin";
import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/adminAuth";
import { readAffiliate, saveAffiliate, affiliateStorageMode } from "@/lib/affiliateStore";
import { validateAffiliateSection } from "@/lib/affiliate";
import { getTestBySlug } from "@/data/tests";

export const runtime = "nodejs";
type Context = { params: Promise<{ slug: string }> };
export async function GET(request: NextRequest, context: Context) {
  if (!await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { slug } = await context.params;
  if (!getTestBySlug(slug)) return NextResponse.json({ error: "Unknown test" }, { status: 404 });
  try { return NextResponse.json({ ...await readAffiliate(slug), storage: affiliateStorageMode() }, { headers: { "Cache-Control": "no-store" } }); }
  catch { return NextResponse.json({ error: "Could not load recommendations. Check the server storage configuration." }, { status: 500 }); }
}
export async function PUT(request: NextRequest, context: Context) {
  if (!await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!hasSameOrigin(request)) return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  const { slug } = await context.params;
  if (!getTestBySlug(slug)) return NextResponse.json({ error: "Unknown test" }, { status: 404 });
  let section, revision;
  try {
    const body = await request.text();
    if (body.length > 50000) throw new Error("Section is too large.");
    const data = JSON.parse(body);
    section = validateAffiliateSection(data.section);
    revision = data.revision;
    if (revision !== null && typeof revision !== "string") throw new Error("Reload the editor before saving.");
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid section" }, { status: 400 }); }
  try { return NextResponse.json(await saveAffiliate(slug, section, revision)); }
  catch (error) {
    const conflict = error instanceof Error && error.message.includes("another editor");
    return NextResponse.json({ error: conflict ? error.message : "Save failed. Check your GitHub connection or reload if another editor has saved changes." }, { status: conflict ? 409 : 500 });
  }
}
