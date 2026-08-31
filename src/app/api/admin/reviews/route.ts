import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/adminAuth";
import { getAllReviewsForAdmin, reviewsConfigured, setReviewHidden } from "@/lib/reviews";

export async function GET(request: NextRequest) {
  const authed = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!authed) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!reviewsConfigured()) return NextResponse.json({ configured: false, reviews: [] });

  try {
    const reviews = await getAllReviewsForAdmin();
    reviews.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    return NextResponse.json({ configured: true, reviews });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed to load reviews" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const authed = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!authed) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json().catch(() => null);
  if (!body || typeof body.id !== "string" || typeof body.hidden !== "boolean") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  try {
    const found = await setReviewHidden(body.id, body.hidden);
    if (!found) return NextResponse.json({ error: "Review not found." }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed to update review" }, { status: 500 });
  }
}
