import { SignJWT, jwtVerify } from "jose";
import { createHash, timingSafeEqual } from "crypto";

export const SESSION_COOKIE = "admin_session";
const SESSION_TTL = "7d";

function getSecret(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET env var is not set");
  return new TextEncoder().encode(secret);
}

/** Constant-time password compare. Hashes both sides first so differing lengths can't leak via timingSafeEqual's length check. */
export function checkPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) throw new Error("ADMIN_PASSWORD env var is not set");
  const a = createHash("sha256").update(candidate).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

export async function createSessionToken(): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(SESSION_TTL)
    .sign(getSecret());
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload.role === "admin";
  } catch {
    return false;
  }
}

const LOGIN_ATTEMPTS = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;

/** Best-effort in-memory rate limit. Resets on cold start / doesn't share state across instances, but still raises the bar against casual brute force. */
export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = LOGIN_ATTEMPTS.get(key);
  if (!entry || now > entry.resetAt) {
    LOGIN_ATTEMPTS.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_ATTEMPTS) return false;
  entry.count += 1;
  return true;
}
