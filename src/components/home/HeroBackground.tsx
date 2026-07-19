export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="hero-blob-a absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="hero-blob-b absolute -right-16 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
    </div>
  );
}
