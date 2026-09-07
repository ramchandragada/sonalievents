import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { PageIntro } from "@/components/page-intro";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Birthdays, naming ceremonies, engagements, marriages, housewarming, thread ceremonies, office parties, and celebration nights in Pune.",
};

export default function EventsPage() {
  return (
    <div className="pt-24">
      <PageIntro
        kicker="What we hold"
        title="Eight celebrations. One house."
        body="Each category has its own experienced team. The same end-to-end promise: venue, décor, food, invitations, music, dance, games."
      />
      <div className="mx-auto grid max-w-7xl gap-4 px-5 pb-24 md:grid-cols-2 md:px-8">
        {events.map((item, index) => (
          <Link
            key={item.slug}
            href={`/events/${item.slug}`}
            className={`group img-zoom grid overflow-hidden rounded-3xl md:grid-cols-2 ${
              index % 2 === 0 ? "bg-paper" : "bg-cream"
            }`}
          >
            <MediaFrame
              src={item.image}
              alt={item.name}
              className="min-h-[240px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="flex flex-col justify-end p-6 md:p-8">
              <p className="text-[0.65rem] tracking-[0.2em] text-garnet uppercase">
                {item.local}
              </p>
              <h2 className="display mt-2 text-4xl">{item.name}</h2>
              <p className="mt-3 text-ink-soft/80">{item.summary}</p>
              <span className="mt-6 text-[0.7rem] tracking-[0.18em] uppercase">
                View →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
