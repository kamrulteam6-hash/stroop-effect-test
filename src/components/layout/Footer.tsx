import Link from "next/link";
import { footerLinks } from "@/data/nav";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-2">
                {section}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-2 sm:flex-row">
          <p>© {new Date().getFullYear()} Stroop Effect Test. All rights reserved.</p>
          <p className="max-w-md text-center sm:text-right">
            These tests are for entertainment and informational purposes only and are not a substitute for professional medical or psychological evaluation.
          </p>
        </div>
      </div>
    </footer>
  );
}
