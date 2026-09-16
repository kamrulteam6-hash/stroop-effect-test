import { readFile, mkdir, writeFile, rename, unlink } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { getTestBySlug } from "@/data/tests";
import { getFile, putFile } from "@/lib/githubContent";
import { AffiliateSection, emptyAffiliateSection, validateAffiliateSection } from "@/lib/affiliate";

function filePath(slug: string) {
  if (!getTestBySlug(slug)) throw new Error("Unknown test.");
  return `src/content/affiliates/${slug}.json`;
}
export function affiliateStorageMode() {
  return process.env.NODE_ENV === "production" ? "github" : "local";
}
export async function readAffiliate(slug: string): Promise<{ section: AffiliateSection; revision: string | null }> {
  const file = filePath(slug);
  if (affiliateStorageMode() === "github") {
    const result = await getFile(file);
    return result ? { section: validateAffiliateSection(JSON.parse(result.content)), revision: result.sha } : { section: emptyAffiliateSection(), revision: null };
  }
  try {
    const content = await readFile(path.join(process.cwd(), file), "utf8");
    return { section: validateAffiliateSection(JSON.parse(content)), revision: content };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return { section: emptyAffiliateSection(), revision: null };
    throw error;
  }
}
// Serialize local writes and reject stale editors. GitHub also checks the blob SHA.
let pending = Promise.resolve();
export async function saveAffiliate(slug: string, section: AffiliateSection, revision: string | null) {
  const operation = pending.then(async () => {
    const current = await readAffiliate(slug);
    if (current.revision !== revision) throw new Error("This test was changed by another editor. Reload it before saving.");
    const file = filePath(slug);
    const content = JSON.stringify(section, null, 2) + "\n";
    if (affiliateStorageMode() === "github") {
      await putFile(file, content, `Update product recommendations: ${slug}`, revision ?? undefined);
    } else {
      const target = path.join(process.cwd(), file);
      await mkdir(path.dirname(target), { recursive: true });
      const temporary = `${target}.${randomUUID()}.tmp`;
      await writeFile(temporary, content, "utf8");
      try {
        // Windows file watchers can briefly hold the destination open.
        for (let attempt = 0; ; attempt++) {
          try { await rename(temporary, target); break; }
          catch (error) {
            if (attempt >= 8 || !["EPERM", "EACCES", "EBUSY"].includes((error as NodeJS.ErrnoException).code ?? "")) throw error;
            await delay(50 * (attempt + 1));
          }
        }
      } finally { await unlink(temporary).catch(() => {}); }
    }
    return readAffiliate(slug);
  });
  pending = operation.then(() => undefined, () => undefined);
  return operation;
}
