import { NextResponse } from "next/server";
import { getTestBySlug } from "@/data/tests";
import { readAffiliate } from "@/lib/affiliateStore";

export const runtime = "nodejs";
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getTestBySlug(slug)) return NextResponse.json({ section: null }, { status: 404 });
  try {
    const { section } = await readAffiliate(slug);
    return NextResponse.json({ section: section.enabled ? section : null }, { headers: { "Cache-Control": "no-store" } });
  } catch { return NextResponse.json({ section: null }, { status: 503 }); }
}
