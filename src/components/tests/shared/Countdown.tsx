"use client";

import { useEffect, useState } from "react";

export function Countdown({ seconds = 3, onDone }: { seconds?: number; onDone: () => void }) {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (count <= 0) {
      onDone();
      return;
    }
    const t = window.setTimeout(() => setCount((c) => c - 1), 700);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-2">
      <span key={count} className="animate-pop-in text-7xl font-black text-primary">
        {count > 0 ? count : "Go!"}
      </span>
    </div>
  );
}
