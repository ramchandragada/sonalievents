import type { Metadata } from "next";
import { MediaFrame } from "@/components/media-frame";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { work } from "@/lib/work-picks";

export const metadata: Metadata = pageMeta("/about", {
  title: "About",
  description:
    "Sonali Events — Pune event house with specialist teams for birthdays, namkaran, weddings, and office nights. Nanded City, Sinhgad Road. 1,000+ celebrations.",
});

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="mx-auto grid max-w-7xl items-end gap-6 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="md:col-span-7">
          <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
            The house
          </p>
          <h1 className="display mt-3 text-4xl md:mt-4 md:text-7xl">
            {site.name}
          </h1>
        </div>
        <p className="text-base text-ink-soft md:col-span-5 md:text-lg">
          {site.houseLine} Based at Nanded City, Sinhgad Road. Built on three
          years and more than a thousand events.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl gap-2 px-5 md:mt-14 md:grid-cols-3 md:gap-4 md:px-8">
        <MediaFrame
          src={work.banquetDoor}
          alt="Banquet entrance dressed by Sonali Events"
          className="min-h-[220px] overflow-hidden md:min-h-[480px] md:col-span-2"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
        <MediaFrame
          src={work.houseGarlands}
          alt="Housewarming floral at a Pune home"
          className="min-h-[180px] overflow-hidden md:min-h-[480px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-2 md:gap-12 md:px-8 md:py-20">
        <div className="space-y-4 text-base leading-relaxed text-ink-soft md:space-y-5 md:text-lg">
          <p>
            Families in Pune should not have to assemble a wedding — or a
            child’s birthday — from six vendors and a group chat. Sonali
            Events is the single window: venue, decoration, food, invitations,
            music, dance, and party games.
          </p>
          <p>
            Delivery sits with experienced teams for each category, so a munj
            and an office night can share a Saturday without sharing a crew.
            Quality is held at the house, not left to a rotating vendor list.
          </p>
          <p>
            The website is English. On the floor the team speaks Marathi,
            Hindi, and English. Themes run Maharashtrian, North Indian, and
            South Indian — because Pune families are all three.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-4 md:gap-6">
          {[
            ["House", site.name],
            ["Base", site.address],
            ["Record", `${site.eventsDelivered} events in ${site.years} years`],
            ["Spoken", site.languagesSpoken.join(" · ")],
            ["Contact", site.phoneDisplay],
            ["Director", site.proprietor],
          ].map(([k, v]) => (
            <div key={k} className="border-t border-ink/10 pt-3">
              <dt className="text-[0.65rem] tracking-[0.2em] text-garnet uppercase">
                {k}
              </dt>
              <dd className="mt-1 font-serif text-xl md:mt-2 md:text-2xl">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
