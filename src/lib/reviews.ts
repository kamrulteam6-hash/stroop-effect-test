import { kv } from "@vercel/kv";

export interface Review {
  id: string;
  name: string;
  rating: number; // 1-5
  comment: string;
  createdAt: string; // ISO
  hidden?: boolean;
}

const LIST_KEY = "reviews:list";
const MAX_STORED = 500;
const MAX_NAME_LEN = 40;
const MAX_COMMENT_LEN = 500;

/** True when Vercel KV env vars are present. Every reviews function no-ops safely when this is false. */
export function reviewsConfigured(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

export function sanitizeName(raw: string): string {
  const trimmed = raw.trim().slice(0, MAX_NAME_LEN);
  return trimmed || "Anonymous";
}

export function validateReviewInput(input: { name?: unknown; rating?: unknown; comment?: unknown }): string | null {
  const rating = Number(input.rating);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return "Rating must be a whole number from 1 to 5.";
  const comment = typeof input.comment === "string" ? input.comment.trim() : "";
  if (comment.length < 10) return "Please write at least 10 characters.";
  if (comment.length > MAX_COMMENT_LEN) return `Comment must be under ${MAX_COMMENT_LEN} characters.`;
  if (typeof input.name !== "undefined" && typeof input.name !== "string") return "Invalid name.";
  return null;
}

export async function addReview(input: { name?: string; rating: number; comment: string }): Promise<Review> {
  const review: Review = {
    id: crypto.randomUUID(),
    name: sanitizeName(input.name ?? ""),
    rating: input.rating,
    comment: input.comment.trim().slice(0, MAX_COMMENT_LEN),
    createdAt: new Date().toISOString(),
  };
  await kv.lpush(LIST_KEY, JSON.stringify(review));
  await kv.ltrim(LIST_KEY, 0, MAX_STORED - 1);
  return review;
}

/** All non-hidden reviews, newest first. `limit` caps how many are returned (from the front of the list). */
export async function getReviews(limit?: number): Promise<Review[]> {
  const end = limit ? limit - 1 : -1;
  const raw = await kv.lrange<string>(LIST_KEY, 0, limit ? Math.max(end, limit * 3) : -1);
  const parsed = raw
    .map((r) => {
      try {
        return JSON.parse(r) as Review;
      } catch {
        return null;
      }
    })
    .filter((r): r is Review => r !== null && !r.hidden);
  return limit ? parsed.slice(0, limit) : parsed;
}

export async function getReviewStats(): Promise<{ count: number; average: number }> {
  const all = await getReviews();
  if (all.length === 0) return { count: 0, average: 0 };
  const sum = all.reduce((acc, r) => acc + r.rating, 0);
  return { count: all.length, average: Math.round((sum / all.length) * 10) / 10 };
}

/** Admin-only: full list including hidden ones, for moderation. */
export async function getAllReviewsForAdmin(): Promise<Review[]> {
  const raw = await kv.lrange<string>(LIST_KEY, 0, -1);
  return raw
    .map((r) => {
      try {
        return JSON.parse(r) as Review;
      } catch {
        return null;
      }
    })
    .filter((r): r is Review => r !== null);
}

export async function setReviewHidden(id: string, hidden: boolean): Promise<boolean> {
  const raw = await kv.lrange<string>(LIST_KEY, 0, -1);
  let found = false;
  const updated = raw.map((r) => {
    try {
      const parsed = JSON.parse(r) as Review;
      if (parsed.id === id) {
        found = true;
        return JSON.stringify({ ...parsed, hidden });
      }
      return r;
    } catch {
      return r;
    }
  });
  if (!found) return false;
  const pipeline = kv.pipeline();
  pipeline.del(LIST_KEY);
  if (updated.length > 0) pipeline.rpush(LIST_KEY, ...updated);
  await pipeline.exec();
  return true;
}

const RATE_LIMIT_WINDOW_SECONDS = 60 * 60 * 24; // one review per IP per day

export async function checkReviewRateLimit(ipHash: string): Promise<boolean> {
  const key = `reviews:ratelimit:${ipHash}`;
  const alreadySubmitted = await kv.get(key);
  if (alreadySubmitted) return false;
  await kv.set(key, "1", { ex: RATE_LIMIT_WINDOW_SECONDS });
  return true;
}
