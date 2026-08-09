import { NextRequest, NextResponse } from "next/server";
import { checkPassword, checkRateLimit, createSessionToken, SESSION_COOKIE } from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many attempts. Try again in a few minutes." }, { status: 429 });
  }

  const data = await request.json().catch(() => null);
  const password = data?.password;
  if (typeof password !== "string" || !password) {
    return NextResponse.json({ error: "Password required" }, { status: 400 });
  }

  let valid = false;
  try {
    valid = checkPassword(password);
  } catch {
    return NextResponse.json({ error: "Server is not configured for login yet" }, { status: 500 });
  }

  if (!valid) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const token = await createSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
