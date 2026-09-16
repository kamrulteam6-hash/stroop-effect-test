import { hasSameOrigin } from "@/lib/requestOrigin";
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/adminAuth";
import { affiliateStorageMode } from "@/lib/affiliateStore";
import { putBinaryFile } from "@/lib/githubContent";

export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  if (!await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!hasSameOrigin(request)) return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  if (Number(request.headers.get("content-length")) > 1700000) return NextResponse.json({ error: "Keep images under 1.5MB." }, { status: 413 });
  try {
    const data = await request.formData();
    const file = data.get("image");
    if (!(file instanceof File) || file.size > 1.5 * 1024 * 1024 || !file.size) return NextResponse.json({ error: "Choose an image under 1.5MB." }, { status: 400 });
    const bytes = Buffer.from(await file.arrayBuffer());
    const ext = bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])) ? "png"
      : bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255 ? "jpg"
      : /GIF8[79]a/.test(bytes.subarray(0, 6).toString()) ? "gif"
      : bytes.subarray(0, 4).toString() === "RIFF" && bytes.subarray(8, 12).toString() === "WEBP" ? "webp" : null;
    if (!ext) return NextResponse.json({ error: "Use a PNG, JPG, GIF, or WebP image." }, { status: 400 });
    const filename = `affiliate-${randomUUID()}.${ext}`;
    const relative = `public/blog-images/${filename}`;
    if (affiliateStorageMode() === "github") await putBinaryFile(relative, bytes.toString("base64"), "Upload affiliate product image");
    else { await mkdir(path.join(process.cwd(), "public/blog-images"), { recursive: true }); await writeFile(path.join(process.cwd(), relative), bytes); }
    return NextResponse.json({ url: `/blog-images/${filename}`, storage: affiliateStorageMode() });
  } catch { return NextResponse.json({ error: "Upload failed. Check your storage connection." }, { status: 500 }); }
}
