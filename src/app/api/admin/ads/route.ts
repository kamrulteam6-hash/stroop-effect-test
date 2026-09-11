import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/adminAuth";
import { getAdsConfig, saveAdsConfig, AD_TYPES, AdSlotRecord, AdsConfig } from "@/lib/adsConfig";

async function requireAuth(request: NextRequest) {
  const authed = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  return authed;
}

export async function GET(request: NextRequest) {
  if (!(await requireAuth(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const config = await getAdsConfig();
    return NextResponse.json(config);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed to load ads config" }, { status: 500 });
  }
}

function validateSlot(raw: unknown): AdSlotRecord | null {
  if (!raw || typeof raw !== "object") return null;
  const s = raw as Record<string, unknown>;
  if (typeof s.id !== "string" || !s.id.trim()) return null;
  if (typeof s.label !== "string" || !s.label.trim()) return null;
  if (typeof s.type !== "string" || !AD_TYPES.includes(s.type as (typeof AD_TYPES)[number])) return null;
  if (typeof s.placement !== "string" || !s.placement.trim()) return null;

  return {
    id: s.id.trim(),
    label: s.label.trim(),
    type: s.type as AdSlotRecord["type"],
    adCode: typeof s.adCode === "string" ? s.adCode : "",
    placement: s.placement.trim(),
    enabled: !!s.enabled,
    height: typeof s.height === "number" && s.height > 0 ? Math.round(s.height) : 250,
  };
}

/** Replaces the whole config in one write — the admin UI always sends the full, current slot list. Simpler and avoids partial-update races against GitHub's sha-based optimistic concurrency. */
export async function POST(request: NextRequest) {
  if (!(await requireAuth(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = await request.json().catch(() => null);
  if (!data || typeof data !== "object") return NextResponse.json({ error: "Invalid body" }, { status: 400 });

  const slotsRaw = Array.isArray((data as Record<string, unknown>).slots) ? (data as { slots: unknown[] }).slots : [];
  const slots: AdSlotRecord[] = [];
  for (const raw of slotsRaw) {
    const slot = validateSlot(raw);
    if (!slot) return NextResponse.json({ error: "One of the ad slots is missing a required field" }, { status: 400 });
    slots.push(slot);
  }

  const ids = new Set<string>();
  for (const s of slots) {
    if (ids.has(s.id)) return NextResponse.json({ error: `Duplicate slot id: ${s.id}` }, { status: 400 });
    ids.add(s.id);
  }

  const config: AdsConfig = {
    adsGloballyEnabled: !!(data as Record<string, unknown>).adsGloballyEnabled,
    slots,
  };

  try {
    await saveAdsConfig(config, `Update ad slots (${slots.length} active)`);
    return NextResponse.json({ ok: true, config });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Save failed" }, { status: 500 });
  }
}
