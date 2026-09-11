"use client";

import { Fragment, useState } from "react";
import { useSearchParams } from "next/navigation";
import { TestDefinition, categories } from "@/data/tests";
import { TestCard } from "@/components/home/TestCard";
import { AdSlot } from "@/components/ads/AdSlot";

const AD_EVERY_N_CARDS = 9;

export function TestsBrowser({ tests }: { tests: TestDefinition[] }) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const [active, setActive] = useState<string>(
    initialCategory && categories.includes(initialCategory as (typeof categories)[number]) ? initialCategory : "All"
  );
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
        {filtered.map((test, i) => (
          <Fragment key={test.slug}>
            <TestCard test={test} />
            {(i + 1) % AD_EVERY_N_CARDS === 0 && (
              <AdSlot
                placement="tests-grid"
                className="col-span-1 rounded-2xl border border-border bg-surface p-2 sm:col-span-2 lg:col-span-3"
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
