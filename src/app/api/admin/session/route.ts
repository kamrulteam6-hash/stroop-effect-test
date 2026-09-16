import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/adminAuth";

export async function GET(request: NextRequest) {
  const authed = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  return NextResponse.json({ authed }, { status: authed ? 200 : 401, headers: { "Cache-Control": "no-store" } });
}
