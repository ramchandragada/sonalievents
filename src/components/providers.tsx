"use client";

import { ReactLenis } from "lenis/react";
import { Cursor } from "./cursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,
        duration: 1.15,
        smoothWheel: true,
        anchors: false,
      }}
    >
      <Cursor />
      {children}
    </ReactLenis>
  );
}
