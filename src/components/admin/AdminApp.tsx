"use client";

import { useEffect, useState, type FormEvent } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { tests } from "@/data/tests";
import "@uiw/react-md-editor/markdown-editor.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface PostSummary {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  tags: string[];
}

interface Draft {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  tags: string;
  body: string;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

const BLANK_DRAFT: Draft = { slug: "", title: "", description: "", excerpt: "", date: todayISO(), tags: "", body: "" };

export function AdminApp() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [draft, setDraft] = useState<Draft>(BLANK_DRAFT);
  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [savedSlug, setSavedSlug] = useState<string | null>(null);

  const [promoTest, setPromoTest] = useState(tests[0]?.slug ?? "");
  const [promoLabel, setPromoLabel] = useState("Try the test");

  const loadPosts = async () => {
    setLoadingPosts(true);
    const res = await fetch("/api/admin/posts");
    if (res.ok) {
      const data = await res.json();
      setPosts(data.posts);
    }
    setLoadingPosts(false);
  };

  useEffect(() => {
    fetch("/api/admin/posts")
      .then((res) => {
        if (res.ok) {
          setAuthed(true);
          return res.json();
        }
        setAuthed(false);
        return null;
      })
      .then((data) => {
        if (data) setPosts(data.posts);
      });
  }, []);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoggingIn(false);
    if (res.ok) {
      setAuthed(true);
      setPassword("");
      loadPosts();
    } else {
      const data = await res.json().catch(() => ({}));
      setLoginError(data.error || "Login failed");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setPosts([]);
  };

  const startNewPost = () => {
    setEditingSlug(null);
    setDraft(BLANK_DRAFT);
    setSlugTouched(false);
    setSaveError(null);
    setSavedSlug(null);
  };

  const openPost = async (slug: string) => {
    setSaveError(null);
    setSavedSlug(null);
    const res = await fetch(`/api/admin/posts/${slug}`);
    if (!res.ok) {
      setSaveError("Could not load that post.");
      return;
    }
    const data = await res.json();
    setEditingSlug(slug);
    setSlugTouched(true);
    setDraft({
      slug,
      title: data.title || "",
      description: data.description || "",
      excerpt: data.excerpt || "",
      date: data.date || todayISO(),
      tags: (data.tags || []).join(", "),
      body: data.body || "",
    });
  };

  const onTitleChange = (title: string) => {
    setDraft((d) => ({
      ...d,
      title,
      slug: slugTouched || editingSlug ? d.slug : slugify(title),
    }));
  };

  const insertTestPromo = () => {
    if (!promoTest) return;
    const snippet = `\n\n<TestPromo slug="${promoTest}" label=${JSON.stringify(promoLabel || "Try the test")} />\n`;
    setDraft((d) => ({ ...d, body: d.body + snippet }));
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveError(null);
    setSavedSlug(null);

    const tags = draft.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const res = await fetch("/api/admin/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: editingSlug || draft.slug || slugify(draft.title),
        title: draft.title,
        description: draft.description,
        excerpt: draft.excerpt,
        date: draft.date,
        tags,
        body: draft.body,
      }),
    });

    setSaving(false);
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setSavedSlug(data.slug);
      setEditingSlug(data.slug);
      loadPosts();
    } else {
      setSaveError(data.error || "Publish failed");
    }
  };

  if (authed === null) {
    return <div className="mx-auto max-w-md px-4 py-20 text-center text-sm text-muted-2">Loading…</div>;
  }

  if (!authed) {
    return (
      <div className="mx-auto flex max-w-sm flex-col gap-4 px-4 py-24">
        <h1 className="text-center text-xl font-bold text-foreground">Admin Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          {loginError && <p className="text-xs text-danger">{loginError}</p>}
          <button
            type="submit"
            disabled={loggingIn || !password}
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-50"
          >
            {loggingIn ? "Checking…" : "Log in"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Blog Admin</h1>
        <button onClick={handleLogout} className="text-xs font-semibold text-muted-2 hover:text-primary">
          Log out
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">
        <div className="flex flex-col gap-2">
          <button
            onClick={startNewPost}
            className="rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
          >
            + New Post
          </button>
          <div className="mt-2 flex flex-col gap-1">
            {loadingPosts && <p className="text-xs text-muted-2">Loading…</p>}
            {posts.map((p) => (
              <button
                key={p.slug}
                onClick={() => openPost(p.slug)}
                className={`rounded-md px-3 py-2 text-left text-xs font-medium transition-colors ${
                  editingSlug === p.slug ? "bg-primary/10 text-primary" : "text-muted hover:bg-surface-2"
                }`}
              >
                {p.title || p.slug}
              </button>
            ))}
            {!loadingPosts && posts.length === 0 && (
              <p className="px-3 text-xs text-muted-2">No posts yet.</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2">
              Title
              <input
                value={draft.title}
                onChange={(e) => onTitleChange(e.target.value)}
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2">
              Slug (URL)
              <input
                value={draft.slug}
                disabled={!!editingSlug}
                onChange={(e) => {
                  setSlugTouched(true);
                  setDraft((d) => ({ ...d, slug: slugify(e.target.value) }));
                }}
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary disabled:opacity-60"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2 sm:col-span-2">
              Meta Description (SEO — shown in Google search results)
              <textarea
                value={draft.description}
                onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))}
                rows={2}
                className="resize-none rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2 sm:col-span-2">
              Excerpt (shown on the blog index page)
              <textarea
                value={draft.excerpt}
                onChange={(e) => setDraft((d) => ({ ...d, excerpt: e.target.value }))}
                rows={2}
                className="resize-none rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2">
              Date
              <input
                type="date"
                value={draft.date}
                onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))}
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2">
              Tags (comma-separated)
              <input
                value={draft.tags}
                onChange={(e) => setDraft((d) => ({ ...d, tags: e.target.value }))}
                placeholder="stroop effect, memory"
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />
            </label>
          </div>

          <div className="flex flex-wrap items-end gap-2 rounded-lg border border-dashed border-border p-3">
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2">
              Promote a test
              <select
                value={promoTest}
                onChange={(e) => setPromoTest(e.target.value)}
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              >
                {tests.map((t) => (
                  <option key={t.slug} value={t.slug}>
                    {t.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2">
              Button label
              <input
                value={promoLabel}
                onChange={(e) => setPromoLabel(e.target.value)}
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />
            </label>
            <button
              onClick={insertTestPromo}
              className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-foreground hover:border-primary hover:text-primary"
            >
              Insert into post
            </button>
          </div>

          <div data-color-mode="light">
            <MDEditor value={draft.body} onChange={(v) => setDraft((d) => ({ ...d, body: v || "" }))} height={420} />
          </div>

          {saveError && <p className="text-xs text-danger">{saveError}</p>}
          {savedSlug && (
            <p className="text-xs text-success">
              Published.{" "}
              <Link href={`/blog/${savedSlug}`} target="_blank" className="font-semibold underline">
                View live post →
              </Link>
            </p>
          )}

          <button
            onClick={handleSave}
            disabled={saving || !draft.title.trim()}
            className="self-start rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-50"
          >
            {saving ? "Publishing…" : editingSlug ? "Save Changes" : "Publish"}
          </button>
        </div>
      </div>
    </div>
  );
}
