import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import {
  addReview,
  checkReviewRateLimit,
  getReviewStats,
  getReviews,
  reviewsConfigured,
  validateReviewInput,
} from "@/lib/reviews";

export const dynamic = "force-dynamic";

function hashIp(ip: string): string {
  return createHash("sha256").update(ip).digest("hex");
}

function getIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function GET() {
  if (!reviewsConfigured()) {
    return NextResponse.json({ configured: false, count: 0, average: 0, recent: [] });
  }
  try {
    const [stats, recent] = await Promise.all([getReviewStats(), getReviews(3)]);
    return NextResponse.json({ configured: true, ...stats, recent });
  } catch {
    return NextResponse.json({ configured: false, count: 0, average: 0, recent: [] });
  }
}

export async function POST(request: NextRequest) {
  if (!reviewsConfigured()) {
    return NextResponse.json({ error: "Reviews are not set up yet. Check back soon." }, { status: 503 });
  }

  // Honeypot: a hidden field real users never fill in. Bots that auto-fill every field trip it.
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true }); // silently accept, discard — don't tip off the bot
  }

  const error = validateReviewInput(body);
  if (error) return NextResponse.json({ error }, { status: 400 });

  const ipHash = hashIp(getIp(request));
  const allowed = await checkReviewRateLimit(ipHash);
  if (!allowed) {
    return NextResponse.json({ error: "You've already submitted a review recently. Thanks for the feedback!" }, { status: 429 });
  }

  try {
    const review = await addReview({ name: body.name, rating: Number(body.rating), comment: body.comment });
    return NextResponse.json({ ok: true, review });
  } catch {
    return NextResponse.json({ error: "Something went wrong saving your review. Please try again." }, { status: 500 });
  }
}
