import Link from "next/link";
import { TestDefinition } from "@/data/tests";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function TestCard({ test }: { test: TestDefinition }) {
  return (
    <Link href={`/test/${test.slug}`} className="block h-full">
      <Card hover className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl">{test.icon}</span>
          <Badge tone="muted">{test.estTime}</Badge>
        </div>
        <div>
          <h3 className="font-bold text-foreground">{test.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{test.shortDescription}</p>
        </div>
        <span className="mt-auto text-xs font-semibold text-primary">Try it now →</span>
      </Card>
    </Link>
  );
}
