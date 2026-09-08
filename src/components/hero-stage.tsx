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

const SLIDE_MS = 7000;

export function HeroStage() {
  const [index, setIndex] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduce(prefersReduce);
    if (prefersReduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
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
          quality={85}
          sizes="100vw"
          className={`object-cover object-[center_38%] brightness-[1.05] contrast-[1.06] transition-opacity duration-[1600ms] ease-in-out ${
            i === index ? `opacity-100 ${reduce ? "" : "ken"}` : "opacity-0"
          }`}
        />
      ))}
      {!reduce ? (
        <div
          key={index}
          className="absolute inset-x-0 bottom-0 z-[1] h-[2px] origin-left bg-garnet"
          style={{ animation: `hero-progress ${SLIDE_MS}ms linear both` }}
          aria-hidden
        />
      ) : null}
    </div>
  );
}
