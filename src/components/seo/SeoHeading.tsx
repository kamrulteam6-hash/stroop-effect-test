import { ReactNode } from "react";

export function SeoHeading({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-xl font-bold text-foreground sm:text-2xl">
      {children}
    </h2>
  );
}

export function SeoSubheading({ children }: { children: ReactNode }) {
  return <h3 className="mt-6 text-base font-semibold text-foreground">{children}</h3>;
}
