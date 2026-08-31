"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
  hidden?: boolean;
}

export function ReviewsAdmin() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [configured, setConfigured] = useState(true);
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/reviews");
    if (res.ok) {
      const data = await res.json();
      setReviews(data.reviews ?? []);
      setConfigured(data.configured ?? true);
      setAuthed(true);
    } else {
      setAuthed(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
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
      setPassword("");
      load();
    } else {
      const data = await res.json().catch(() => ({}));
      setLoginError(data.error || "Login failed");
    }
  };

  const toggleHidden = async (id: string, hidden: boolean) => {
    setUpdatingId(id);
    const res = await fetch("/api/admin/reviews", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, hidden }),
    });
    if (res.ok) {
      setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, hidden } : r)));
    }
    setUpdatingId(null);
  };

  if (authed === null) {
    return <div className="mx-auto max-w-md px-4 py-20 text-center text-sm text-muted-2">Loading…</div>;
  }

  if (!authed) {
    return (
      <div className="mx-auto flex max-w-sm flex-col gap-4 px-4 py-24">
        <h1 className="text-xl font-bold text-foreground">Admin Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
          />
          <button
            type="submit"
            disabled={loggingIn}
            className="rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {loggingIn ? "Logging in…" : "Log In"}
          </button>
          {loginError && (
            <div className="rounded-lg border border-danger/30 bg-danger/10 px-3 py-2 text-[11px] leading-relaxed text-danger">
              {loginError}
            </div>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Review Moderation</h1>
        <Link href="/admin" className="text-sm font-semibold text-primary hover:underline">
          ← Back to Blog Admin
        </Link>
      </div>

      {!configured && (
        <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-600">
          Reviews storage isn&apos;t configured yet. Add the Vercel KV (Upstash) integration to your project and
          redeploy for the review system to store data.
        </div>
      )}

      {loading ? (
        <p className="text-sm text-muted-2">Loading reviews…</p>
      ) : reviews.length === 0 ? (
        <p className="text-sm text-muted-2">No reviews submitted yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {reviews.map((r) => (
            <div
              key={r.id}
              className={`flex flex-col gap-2 rounded-xl border p-4 ${
                r.hidden ? "border-border bg-surface-2 opacity-60" : "border-border bg-surface"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{r.name}</span>
                  <span className="text-amber-500">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <time className="text-xs text-muted-2">{new Date(r.createdAt).toLocaleDateString()}</time>
                  <button
                    onClick={() => toggleHidden(r.id, !r.hidden)}
                    disabled={updatingId === r.id}
                    className="rounded-lg border border-border px-2.5 py-1 text-xs font-semibold text-foreground hover:border-primary hover:text-primary disabled:opacity-60"
                  >
                    {r.hidden ? "Unhide" : "Hide"}
                  </button>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted">{r.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
