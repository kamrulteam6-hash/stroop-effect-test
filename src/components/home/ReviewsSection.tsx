"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Card, SectionLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface ReviewsData {
  configured: boolean;
  count: number;
  average: number;
  recent: Review[];
}

function Stars({ rating, size = "text-base" }: { rating: number; size?: string }) {
  return (
    <span className={`text-amber-500 ${size}`} aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="text-border">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

function timeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diffMs / 86_400_000);
  if (days <= 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years > 1 ? "s" : ""} ago`;
}

export function ReviewsSection() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const load = () => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData({ configured: false, count: 0, average: 0, recent: [] }));
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (rating < 1) {
      setSubmitError("Please choose a star rating.");
      return;
    }
    if (comment.trim().length < 10) {
      setSubmitError("Please write at least a short sentence about your experience.");
      return;
    }
    setSubmitting(true);
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, rating, comment, website }),
    });
    setSubmitting(false);
    if (res.ok) {
      setSubmitted(true);
      setName("");
      setRating(0);
      setComment("");
      setShowForm(false);
      load();
    } else {
      const err = await res.json().catch(() => ({}));
      setSubmitError(err.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="mt-20 flex flex-col gap-8 border-t border-border pt-12">
      <div className="flex flex-col items-center gap-3 text-center">
        <SectionLabel>What Users Say</SectionLabel>
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Real Feedback From Real Visitors</h2>
        {data && data.configured && data.count > 0 ? (
          <p className="flex items-center gap-2 text-sm text-muted">
            <Stars rating={Math.round(data.average)} />
            <span className="font-semibold text-foreground">{data.average.toFixed(1)}</span>
            <span>
              average from {data.count} review{data.count === 1 ? "" : "s"}
            </span>
          </p>
        ) : (
          <p className="max-w-md text-balance text-sm text-muted">
            Be the first to share what you think of the tests on this site.
          </p>
        )}
      </div>

      {data && data.recent.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {data.recent.map((r) => (
            <Card key={r.id} className="flex flex-col gap-3">
              <Stars rating={r.rating} />
              <p className="text-sm leading-relaxed text-muted">&ldquo;{r.comment}&rdquo;</p>
              <p className="text-xs font-semibold text-muted-2">
                — {r.name} · {timeAgo(r.createdAt)}
              </p>
            </Card>
          ))}
        </div>
      )}

      <div className="mx-auto w-full max-w-lg">
        {submitted && !showForm && (
          <p className="mb-4 text-center text-sm font-semibold text-primary">
            Thanks for your review! It now appears above.
          </p>
        )}

        {!showForm ? (
          <div className="flex justify-center">
            <Button variant="secondary" onClick={() => setShowForm(true)}>
              Leave a Review
            </Button>
          </div>
        ) : (
          <Card>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-foreground">Share your experience</h3>

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="text-2xl leading-none transition-transform hover:scale-110"
                    aria-label={`Rate ${star} out of 5`}
                  >
                    <span className={star <= (hoverRating || rating) ? "text-amber-500" : "text-border"}>★</span>
                  </button>
                ))}
              </div>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                maxLength={40}
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />

              {/* Honeypot — hidden from real users via CSS, bots that auto-fill every field trip it */}
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                name="website"
                autoComplete="off"
                tabIndex={-1}
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What did you think of the tests?"
                maxLength={500}
                rows={3}
                className="resize-none rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />

              {submitError && <p className="text-xs text-danger">{submitError}</p>}

              <div className="flex items-center gap-2">
                <Button type="submit" size="sm" disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit Review"}
                </Button>
                <Button type="button" size="sm" variant="ghost" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        )}
      </div>
    </section>
  );
}
