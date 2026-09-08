"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

const HERO_VIDEO = "/hero/hero.mp4";
const HERO_POSTER = "/hero/poster.jpg";
const SLIDE_MS = 7000;

type Mode = "video" | "photos" | "still";

export function HeroStage() {
  const [mode, setMode] = useState<Mode>("photos");
  const [index, setIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");

    const apply = () => {
      if (reduce.matches) {
        setMode("still");
        setVideoReady(false);
      } else if (mobile.matches) {
        setMode("video");
      } else {
        setMode("photos");
        setVideoReady(false);
      }
    };

    apply();
    reduce.addEventListener("change", apply);
    mobile.addEventListener("change", apply);
    return () => {
      reduce.removeEventListener("change", apply);
      mobile.removeEventListener("change", apply);
    };
  }, []);

  useEffect(() => {
    if (mode !== "photos") return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [mode]);

  useEffect(() => {
    if (mode !== "video") return;
    const node = videoRef.current;
    if (!node) return;
    node.muted = true;
    const attempt = node.play();
    if (attempt) {
      attempt.catch(() => setMode("still"));
    }
  }, [mode]);

  if (mode === "video") {
    return (
      <div className="absolute inset-0 bg-ink">
        <Image
          src={HERO_POSTER}
          alt="Celebration staged by Sonali Events"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
        />
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          poster={HERO_POSTER}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          aria-hidden
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-ink">
      {slides.map((slide, i) => {
        const active = mode === "still" ? i === 0 : i === index;
        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            quality={85}
            sizes="100vw"
            className={`object-cover object-[center_38%] brightness-[1.05] contrast-[1.06] transition-opacity duration-[1600ms] ease-in-out ${
              active
                ? `opacity-100 ${mode === "photos" ? "ken" : ""}`
                : "opacity-0"
            }`}
          />
        );
      })}
      {mode === "photos" ? (
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
