"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[90] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-garnet md:block"
      />
      <div
        ref={ring}
        className="cursor-ring pointer-events-none fixed top-0 left-0 z-[90] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-garnet/40 md:block"
      />
    </>
  );
}
