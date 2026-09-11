import { NextResponse } from "next/server";
import { getAdsConfig } from "@/lib/adsConfig";

export const dynamic = "force-dynamic";

/** Public, unauthenticated: read by <AdSlot/> on every page. Only exposes what's needed to render ads — no admin data. */
export async function GET() {
  try {
    const config = await getAdsConfig();
    return NextResponse.json(config, {
      headers: { "Cache-Control": "public, max-age=0, s-maxage=30, stale-while-revalidate=60" },
    });
  } catch {
    // Ad config being unreachable must never break the site — fail closed (no ads) instead of erroring.
    return NextResponse.json({ adsGloballyEnabled: false, slots: [] });
  }
}
