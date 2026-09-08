"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { work } from "@/lib/work-picks";

const slides = [
  {
    src: work.roka,
    alt: "Roka stage with a red rose arch, staged by Sonali Events near Sinhgad Road",
  },
  {
    src: work.lotusStage,
    alt: "Lotus mandap with brass lamps, staged by Sonali Events near Nanded City",
  },
  {
    src: work.floralMoon,
    alt: "Floral moon naming ceremony, staged by Sonali Events near Nanded City",
  },
] as const;

export function HeroStage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          quality={90}
          sizes="100vw"
          className={`object-cover object-[center_38%] brightness-[1.08] contrast-[1.05] saturate-[1.1] transition-opacity duration-[1600ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
