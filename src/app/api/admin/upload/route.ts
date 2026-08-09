import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/adminAuth";
import { putBinaryFile } from "@/lib/githubContent";

const UPLOAD_DIR = "public/blog-images";
const MAX_BYTES = 1.5 * 1024 * 1024; // 1.5MB - keeps uploads reliable via the GitHub Contents API
const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

function sanitizeBaseName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "")
    .slice(0, 60) || "image";
}

export async function POST(request: NextRequest) {
  const authed = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!authed) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = await request.json().catch(() => null);
  const { filename, dataBase64, contentType } = data || {};

  if (typeof dataBase64 !== "string" || !dataBase64) {
    return NextResponse.json({ error: "No image data received" }, { status: 400 });
  }
  const ext = ALLOWED_TYPES[contentType];
  if (!ext) {
    return NextResponse.json({ error: "Unsupported image type. Use JPG, PNG, WEBP, or GIF." }, { status: 400 });
  }

  const approxBytes = (dataBase64.length * 3) / 4;
  if (approxBytes > MAX_BYTES) {
    return NextResponse.json({ error: "Image is too large. Please keep it under 1.5MB." }, { status: 400 });
  }

  const baseName = sanitizeBaseName(typeof filename === "string" ? filename : "image");
  const path = `${UPLOAD_DIR}/${Date.now()}-${baseName}.${ext}`;

  try {
    await putBinaryFile(path, dataBase64, `Upload blog image: ${baseName}`);
    return NextResponse.json({ url: `/blog-images/${path.split("/").pop()}` });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Upload failed" }, { status: 500 });
  }
}
