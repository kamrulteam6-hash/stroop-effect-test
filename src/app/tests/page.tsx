import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";
import { TestsBrowser } from "@/components/home/TestsBrowser";
import { tests } from "@/data/tests";

export const metadata: Metadata = {
  title: "All Tests",
  description: "Browse all 14 free online cognitive, reaction, memory, and perception tests. No sign-up, instant results.",
  alternates: { canonical: "/tests" },
};

export default function TestsHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <SectionLabel>{tests.length} Free Tests</SectionLabel>
        <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">Browse All Tests</h1>
        <p className="max-w-xl text-balance text-muted">
          Filter by category to find a reaction, memory, perception, hearing, or math test. Every test gives instant
          results with no sign-up required.
        </p>
      </div>
      <div className="mt-10">
        <TestsBrowser tests={tests} />
      </div>
    </div>
  );
}
