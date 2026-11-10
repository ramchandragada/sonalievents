"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

const HERO_VIDEO = "/hero/hero.mp4";
const HERO_POSTER = "/hero/poster.jpg";
const REDUCE_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(REDUCE_MOTION);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function reducedMotionSnapshot() {
  return window.matchMedia(REDUCE_MOTION).matches;
}

function arm(node: HTMLVideoElement) {
  node.defaultMuted = true;
  node.muted = true;
  node.playsInline = true;
  node.setAttribute("muted", "");
  node.setAttribute("playsinline", "");
}

export function HeroStage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    reducedMotionSnapshot,
    () => false,
  );

  const showIfFrameReady = useCallback((node: HTMLVideoElement | null) => {
    if (node && node.readyState >= 2) setVisible(true);
  }, []);

  const tryPlay = useCallback(() => {
    const node = videoRef.current;
    if (!node || userPausedRef.current) return;
    arm(node);
    if (!node.paused) {
      setVisible(true);
      setPaused(false);
      return;
    }
    const pending = node.play();
    if (!pending || typeof pending.then !== "function") return;
    pending.then(
      () => {
        if (userPausedRef.current) {
          node.pause();
          return;
        }
        setPaused(false);
        setVisible(true);
      },
      () => {
        // Rejected autoplay must not unmount the film. A later gesture,
        // visibility change, or intersection can call play() again.
        const current = videoRef.current;
        if (!current || userPausedRef.current || !current.paused) return;
        setPaused(true);
      },
    );
  }, []);

  const bindVideo = useCallback(
    (node: HTMLVideoElement | null) => {
      videoRef.current = node;
      if (!node) return;
      arm(node);
      showIfFrameReady(node);
    },
    [showIfFrameReady],
  );

  useLayoutEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    arm(node);
    showIfFrameReady(node);
    if (!node.paused) {
      setVisible(true);
      setPaused(false);
    }
  }, [showIfFrameReady]);

  useEffect(() => {
    const node = videoRef.current;
    const root = rootRef.current;
    if (node) arm(node);
    tryPlay();

    const retry = () => {
      if (userPausedRef.current) return;
      tryPlay();
    };

    const fromToggle = (target: EventTarget | null) =>
      target instanceof Element && Boolean(target.closest("[data-hero-toggle]"));

    const onPointerDown = (event: PointerEvent) => {
      if (fromToggle(event.target)) return;
      retry();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (fromToggle(event.target)) return;
      retry();
    };
    const onScroll = () => retry();
    const onVisibility = () => {
      if (document.visibilityState === "visible") retry();
    };
    const onReady = () => {
      if (node && node.readyState >= 2) setVisible(true);
      retry();
    };
    const onPlaying = () => {
      setVisible(true);
      if (!userPausedRef.current) setPaused(false);
    };

    node?.addEventListener("loadeddata", onReady);
    node?.addEventListener("canplay", onReady);
    node?.addEventListener("playing", onPlaying);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    const observer =
      root && typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) retry();
          })
        : null;
    if (root && observer) observer.observe(root);

    return () => {
      node?.removeEventListener("loadeddata", onReady);
      node?.removeEventListener("canplay", onReady);
      node?.removeEventListener("playing", onPlaying);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      observer?.disconnect();
    };
  }, [tryPlay]);

  const toggle = () => {
    const node = videoRef.current;
    if (!node) return;
    if (paused) {
      userPausedRef.current = false;
      setPaused(false);
      tryPlay();
      return;
    }
    userPausedRef.current = true;
    node.pause();
    setPaused(true);
  };

  return (
    <div ref={rootRef} className="absolute inset-0 bg-ink">
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
        ref={bindVideo}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        poster={HERO_POSTER}
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        aria-hidden
        onLoadedData={(event) => {
          if (event.currentTarget.readyState >= 2) setVisible(true);
        }}
        onCanPlay={() => setVisible(true)}
        onPlaying={() => {
          setVisible(true);
          if (!userPausedRef.current) setPaused(false);
        }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      {reducedMotion ? (
        <button
          type="button"
          data-hero-toggle
          onClick={toggle}
          aria-label={paused ? "Play background video" : "Pause background video"}
          className="absolute top-[calc(var(--header-h)+0.75rem)] right-5 z-30 inline-flex min-h-11 items-center justify-center rounded-full border border-paper/55 bg-ink/60 px-4 text-[0.68rem] font-semibold tracking-[0.16em] text-paper uppercase backdrop-blur-sm transition hover:bg-ink/80"
        >
          {paused ? "Play" : "Pause"}
        </button>
      ) : null}
    </div>
  );
}
