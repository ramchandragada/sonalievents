"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { WorkItem } from "@/lib/work-media";

function Reel({ item, featured }: { item: WorkItem; featured?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setOn(true);
      },
      { rootMargin: "240px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-cream ${
        featured ? "min-h-[220px] md:col-span-2 md:min-h-[520px]" : "min-h-[180px] md:min-h-[280px]"
      }`}
    >
      {item.poster ? (
        <Image
          src={item.poster}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : null}
      {on ? (
        <video
          src={item.src}
          poster={item.poster}
          autoPlay={!reduce}
          muted
          loop
          playsInline
          controls={false}
          preload="none"
          aria-label="A Sonali Events celebration in Pune"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
    </div>
  );
}

export function WorkFilm({ items }: { items: WorkItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="grid gap-2 md:grid-cols-3 md:gap-4">
      {items.map((item, index) => (
        <div key={item.src} className={index > 0 ? "hidden md:block" : ""}>
          <Reel item={item} featured={index === 0} />
        </div>
      ))}
    </div>
  );
}
