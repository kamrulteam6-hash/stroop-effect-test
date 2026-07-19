import { ReactNode } from "react";

export function OptionsBar({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-start justify-center gap-6">{children}</div>;
}
