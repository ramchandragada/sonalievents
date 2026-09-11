"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HERO_VIDEO = "/hero/hero.mp4";
const HERO_POSTER = "/hero/poster.jpg";

type Mode = "video" | "still";

export function HeroStage() {
  const [mode, setMode] = useState<Mode>("video");
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (reduce.matches) {
        setMode("still");
        setVideoReady(false);
      } else {
        setMode("video");
      }
    };

    apply();
    reduce.addEventListener("change", apply);
    return () => reduce.removeEventListener("change", apply);
  }, []);

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
      {mode === "video" ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
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
      ) : null}
    </div>
  );
}
