"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            SE
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold text-foreground">Stroop Effect Test</span>
            <span className="text-[10px] tracking-wide text-muted-2">FREE ONLINE COGNITIVE TESTS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-primary" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/test/stroop-effect-test"
          className="hidden whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground sm:block"
        >
          Take the Test
        </Link>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="relative block h-3.5 w-4">
            <span className={`absolute left-0 top-0 h-0.5 w-4 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-4 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-4 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface sm:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-surface-2 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/test/stroop-effect-test"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-xs font-bold text-primary-foreground"
            >
              Take the Test
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
