import { tests } from "@/data/tests";
import { Button } from "@/components/ui/Button";

/** Promotes a test inline inside a blog post. Pulls live data by slug, so it never goes stale. */
export function TestPromo({ slug, label = "Try the test" }: { slug: string; label?: string }) {
  const test = tests.find((t) => t.slug === slug);
  if (!test) return null;

  return (
    <div className="flex items-center gap-4 rounded-2xl border-2 border-primary/25 bg-primary/5 p-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl">
        {test.icon}
      </span>
      <div className="flex-1">
        <p className="text-sm font-bold text-foreground">{test.title}</p>
        <p className="mt-0.5 text-xs text-muted-2">{test.shortDescription}</p>
      </div>
      <Button href={`/test/${test.slug}`} size="sm" className="shrink-0">
        {label} →
      </Button>
    </div>
  );
}
