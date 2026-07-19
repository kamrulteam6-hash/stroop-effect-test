"use client";

import { useState } from "react";
import { TestDefinition, categories } from "@/data/tests";
import { TestCard } from "@/components/home/TestCard";

export function TestsBrowser({ tests }: { tests: TestDefinition[] }) {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? tests : tests.filter((t) => t.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
              active === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-surface text-muted hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((test) => (
          <TestCard key={test.slug} test={test} />
        ))}
      </div>
    </div>
  );
}
