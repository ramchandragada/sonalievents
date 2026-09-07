"use client";

import { useMemo, useState } from "react";
import { MediaFrame } from "@/components/media-frame";
import { gallery } from "@/lib/gallery";

const filters = ["All", ...Array.from(new Set(gallery.map((item) => item.tag)))];

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const items = useMemo(
    () =>
      filter === "All" ? gallery : gallery.filter((item) => item.tag === filter),
    [filter],
  );

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
                ? "bg-garnet text-ivory"
                : "border border-ink/15 text-ink-soft"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <figure key={item.src + item.tag} className="img-zoom mb-4 break-inside-avoid">
            <MediaFrame
              src={item.src}
              alt={item.alt}
              className="min-h-[240px] aspect-[4/5]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <figcaption className="mt-2 text-[0.65rem] tracking-[0.18em] text-ink-soft/60 uppercase">
              {item.tag}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
