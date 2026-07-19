export function SoundToggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={enabled ? "Mute sound effects" : "Unmute sound effects"}
      className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface-2 text-sm text-muted transition-colors hover:text-foreground"
    >
      {enabled ? "🔊" : "🔇"}
    </button>
  );
}
