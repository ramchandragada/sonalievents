"use client";

import { useMemo, useState } from "react";
import { MediaFrame } from "@/components/media-frame";
import type { WorkItem } from "@/lib/work-media";

const filters = ["All", "Photos", "Films"] as const;

export function WorkGallery({ items }: { items: WorkItem[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<WorkItem | null>(null);

  const visible = useMemo(() => {
    if (filter === "Photos") return items.filter((item) => item.kind === "photo");
    if (filter === "Films") return items.filter((item) => item.kind === "video");
    return items;
  }, [filter, items]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-[0.68rem] tracking-[0.16em] uppercase transition ${
              filter === item
                ? "bg-garnet text-paper"
                : "border border-ink/15 text-ink-soft"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-16 max-w-md text-ink-soft/70">
          Drop photographs and videos into the{" "}
          <span className="text-ink">photos and videos</span> folder, then
          refresh this page.
        </p>
      ) : (
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(item)}
              className="img-zoom mb-4 block w-full break-inside-avoid text-left"
            >
              {item.kind === "photo" ? (
                <MediaFrame
                  src={item.src}
                  alt="Sonali Events celebration"
                  className="min-h-[240px] aspect-[3/4] rounded-3xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="relative flex min-h-[240px] aspect-[3/4] items-end overflow-hidden rounded-3xl bg-cream p-5">
                  <span className="pointer-events-none absolute inset-0 opacity-40">
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="relative rounded-full bg-ivory px-4 py-2 text-[0.62rem] tracking-[0.18em] text-garnet uppercase">
                    Play film
                  </span>
                </div>
              )}
              <span className="mt-2 block text-[0.65rem] tracking-[0.18em] text-ink-soft/60 uppercase">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/92 p-4 md:p-10"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Work preview"
        >
          <button
            type="button"
            className="absolute top-5 right-5 text-[0.7rem] tracking-[0.2em] text-ivory uppercase"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          <div
            className="max-h-[90dvh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {active.kind === "photo" ? (
              <div className="relative h-[80dvh]">
                <MediaFrame
                  src={active.src}
                  alt="Sonali Events celebration"
                  className="h-full w-full"
                  sizes="100vw"
                />
              </div>
            ) : (
              <video
                src={active.src}
                controls
                autoPlay
                playsInline
                className="max-h-[80dvh] w-full bg-ink"
              />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
