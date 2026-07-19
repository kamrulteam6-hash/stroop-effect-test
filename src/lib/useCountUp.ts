"use client";

import { useEffect, useState } from "react";

export function useCountUp(target: number, duration = 700) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    // Safety net: if rAF is throttled (e.g. a backgrounded tab), guarantee the
    // real value still lands instead of leaving the display stuck at 0.
    const fallback = window.setTimeout(() => setValue(target), duration + 100);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
    };
  }, [target, duration]);

  return value;
}
