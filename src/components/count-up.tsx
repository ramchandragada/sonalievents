"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({
  value,
  suffix = "",
  label,
  tint = "bg-paper",
}: {
  value: number;
  suffix?: string;
  label: string;
  tint?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        if (reduce) {
          setShown(value);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1400);
          const eased = 1 - (1 - t) ** 3;
          setShown(Math.round(value * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={`rounded-none border-t border-ink/10 ${tint} py-3 md:py-8`}>
      <p className="display text-3xl text-garnet md:text-6xl">
        {shown.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="mt-1.5 text-[0.62rem] leading-snug tracking-[0.14em] text-ink-soft uppercase md:mt-2 md:text-[0.7rem] md:tracking-[0.18em]">
        {label}
      </p>
    </div>
  );
}
