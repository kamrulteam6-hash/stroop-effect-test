const API_BASE = "https://api.github.com";

function getConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || "kamrulteam6-hash/stroop-effect-test";
  const branch = process.env.GITHUB_BRANCH || "main";
  if (!token) throw new Error("GITHUB_TOKEN env var is not set");
  return { token, repo, branch };
}

function authHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

export interface GithubFile {
  content: string;
  sha: string;
}

/** Fetches a file's decoded content and blob sha (needed to update it later). Returns null if it doesn't exist yet. */
export async function getFile(path: string): Promise<GithubFile | null> {
  const { token, repo, branch } = getConfig();
  const res = await fetch(`${API_BASE}/repos/${repo}/contents/${path}?ref=${branch}`, {
    headers: authHeaders(token),
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub getFile ${path} failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return { content: Buffer.from(data.content, "base64").toString("utf-8"), sha: data.sha };
}

/** Creates or updates a file. Pass the previous sha when updating an existing file (GitHub requires it). */
export async function putFile(path: string, content: string, message: string, sha?: string): Promise<void> {
  const { token, repo, branch } = getConfig();
  const res = await fetch(`${API_BASE}/repos/${repo}/contents/${path}`, {
    method: "PUT",
    headers: { ...authHeaders(token), "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      content: Buffer.from(content, "utf-8").toString("base64"),
      branch,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) throw new Error(`GitHub putFile ${path} failed: ${res.status} ${await res.text()}`);
}

export interface GithubDirEntry {
  name: string;
  path: string;
}

/** Lists files in a directory. Returns [] if the directory doesn't exist yet. */
export async function listDir(path: string): Promise<GithubDirEntry[]> {
  const { token, repo, branch } = getConfig();
  const res = await fetch(`${API_BASE}/repos/${repo}/contents/${path}?ref=${branch}`, {
    headers: authHeaders(token),
    cache: "no-store",
  });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`GitHub listDir ${path} failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { name: string; path: string; type: string }[];
  return data.filter((e) => e.type === "file").map((e) => ({ name: e.name, path: e.path }));
}
