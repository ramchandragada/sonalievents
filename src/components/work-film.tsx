"use client";

import { useEffect, useState } from "react";
import type { WorkItem } from "@/lib/work-media";

export function WorkFilm({ items }: { items: WorkItem[] }) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.src}
          className={`relative overflow-hidden rounded-3xl bg-cream ${
            index === 0 ? "min-h-[360px] md:col-span-2 md:min-h-[520px]" : "min-h-[280px]"
          }`}
        >
          <video
            src={item.src}
            autoPlay={!reduce}
            muted
            loop
            playsInline
            controls={reduce}
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
