import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { PageIntro } from "@/components/page-intro";
import { pageMeta } from "@/lib/seo";
import { events } from "@/lib/events";

export const metadata: Metadata = pageMeta("/events", {
  title: "Events",
  description:
    "Birthdays, naming ceremonies, engagements, marriages, housewarming, thread ceremonies, office parties, and celebration nights from Nanded City and Sinhgad Road.",
});

export default function EventsPage() {
  return (
    <div className="pt-20 md:pt-24">
      <PageIntro
        kicker="What we hold"
        title="Celebrations we hold."
        body="From namkaran to wedding week — each day has its own experienced team. Venue, décor, food, invitations, music, dance, games."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-5 pb-12 md:grid-cols-4 md:gap-1.5 md:px-8 md:pb-20">
        {events.map((item) => (
          <Link
            key={item.slug}
            href={`/events/${item.slug}`}
            className="group img-zoom relative aspect-[3/4] overflow-hidden"
          >
            <MediaFrame
              src={item.image}
              alt={item.name}
              className="absolute inset-0 h-full w-full"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-3 pt-14 md:p-4 md:pt-20">
              <p className="text-[0.55rem] tracking-[0.16em] text-paper/70 uppercase">
                {item.local}
              </p>
              <h2 className="display mt-1 text-lg text-paper md:text-2xl">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
