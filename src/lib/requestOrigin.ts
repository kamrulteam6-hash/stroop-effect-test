/** Use the incoming Host header: Next.js may normalize loopback URLs internally. */
export function hasSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try { return new URL(origin).host === request.headers.get("host"); }
  catch { return false; }
}
