import { MediaFrame } from "@/components/media-frame";
import type { FloorShot } from "@/lib/events";

export function FloorMedia({ shots }: { shots: FloorShot[] }) {
  if (shots.length === 0) return null;
  const single = shots.length === 1;

  return (
    <section className="mx-auto max-w-7xl px-5 pt-4 md:px-8 md:pt-8">
      <p className="eyebrow">From the floor</p>
      <div
        className={
          single
            ? "mt-6 max-w-md"
            : "mt-6 columns-2 gap-3 md:gap-4 lg:columns-3"
        }
      >
        {shots.map((shot) => (
          <figure key={shot.src} className="mb-4 break-inside-avoid">
            {shot.kind === "video" ? (
              <video
                src={shot.src}
                poster={shot.poster}
                controls
                playsInline
                preload="metadata"
                aria-label={shot.alt}
                className="aspect-[464/832] w-full bg-ink object-contain"
              />
            ) : (
              <div className="relative aspect-[3/4]">
                <MediaFrame
                  src={shot.src}
                  alt={shot.alt}
                  className="h-full w-full"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            <figcaption className="mt-2 text-[0.65rem] tracking-[0.18em] text-ink-soft uppercase">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
