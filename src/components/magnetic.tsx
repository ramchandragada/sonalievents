"use client";

import { useRef } from "react";

export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="inline-block will-change-transform"
      onMouseMove={(event) => {
        const node = ref.current;
        if (!node) return;
        const box = node.getBoundingClientRect();
        const dx = event.clientX - (box.left + box.width / 2);
        const dy = event.clientY - (box.top + box.height / 2);
        node.style.transform = `translate3d(${dx * 0.22}px, ${dy * 0.28}px, 0)`;
      }}
      onMouseLeave={() => {
        const node = ref.current;
        if (!node) return;
        node.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        node.style.transform = "translate3d(0,0,0)";
        window.setTimeout(() => {
          if (node) node.style.transition = "";
        }, 600);
      }}
    >
      {children}
    </div>
  );
}
