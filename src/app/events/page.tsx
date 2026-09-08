import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { PageIntro } from "@/components/page-intro";
import { pageMeta } from "@/lib/seo";
import { events } from "@/lib/events";

export const metadata: Metadata = pageMeta("/events", {
  title: "Events",
  description:
    "Birthdays, naming ceremonies, engagements, marriages, housewarming, thread ceremonies, office parties, and celebration nights in Pune.",
});

export default function EventsPage() {
  return (
    <div className="pt-20 md:pt-24">
      <PageIntro
        kicker="What we hold"
        title="Eight celebrations. One house."
        body="Each category has its own experienced team. The same end-to-end promise: venue, décor, food, invitations, music, dance, games."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-5 pb-12 md:grid-cols-2 md:gap-4 md:px-8 md:pb-24">
        {events.map((item) => (
          <Link
            key={item.slug}
            href={`/events/${item.slug}`}
            className="group img-zoom overflow-hidden border-t border-ink/10 bg-paper md:grid md:grid-cols-2"
          >
            <MediaFrame
              src={item.image}
              alt={item.name}
              className="min-h-[140px] md:min-h-[240px]"
              sizes="(max-width: 768px) 50vw, 50vw"
            />
            <div className="flex flex-col justify-end p-3 md:p-8">
              <p className="text-[0.58rem] tracking-[0.16em] text-garnet uppercase md:text-[0.65rem] md:tracking-[0.2em]">
                {item.local}
              </p>
              <h2 className="display mt-1 text-xl md:mt-2 md:text-4xl">{item.name}</h2>
              <p className="mt-2 hidden text-sm text-ink-soft/80 md:mt-3 md:block md:text-base">{item.summary}</p>
              <span className="mt-2 hidden text-[0.7rem] tracking-[0.18em] uppercase md:mt-6 md:inline">
                View →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
