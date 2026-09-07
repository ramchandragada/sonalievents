import type { Metadata } from "next";
import { MediaFrame } from "@/components/media-frame";
import { site } from "@/lib/site";
import { work } from "@/lib/work-picks";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mrs Sonali Rahul Upagnalawar — proprietor of Sonali Events, Nanded City, Sinhgad Road, Pune. 1,000+ celebrations.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
            The proprietor
          </p>
          <h1 className="display mt-4 text-5xl md:text-7xl">
            {site.proprietor}
          </h1>
        </div>
        <p className="text-lg text-ink-soft md:col-span-5">
          A Pune proprietorship. Based at Nanded City, Sinhgad Road. Built on
          three years and more than a thousand events — not on a pitch deck.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 md:grid-cols-3 md:px-8">
        <MediaFrame
          src={work.banquetDoor}
          alt="Banquet entrance dressed by Sonali Events"
          className="min-h-[320px] overflow-hidden rounded-[2rem] md:min-h-[480px] md:col-span-2"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
        <MediaFrame
          src={work.houseGarlands}
          alt="Housewarming floral at a Pune home"
          className="min-h-[280px] overflow-hidden rounded-[2rem] md:min-h-[480px]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            Families in Pune should not have to assemble a wedding — or a
            child’s birthday — from six vendors and a group chat. Sonali
            Events is the single window: venue, decoration, food, invitations,
            music, dance, and party games.
          </p>
          <p>
            Delivery sits with experienced teams for each category, so a munj
            and an office night can share a Saturday without sharing a crew.
            Mrs Upagnalawar remains the brand and the quality gate.
          </p>
          <p>
            The website is English. On the floor the team speaks Marathi,
            Hindi, and English. Themes run Maharashtrian, North Indian, and
            South Indian — because Pune families are all three.
          </p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          {[
            ["Form", "Sole proprietorship"],
            ["Base", site.address],
            ["Record", `${site.eventsDelivered} events in ${site.years} years`],
            ["Spoken", site.languagesSpoken.join(" · ")],
            ["Contact", site.phoneDisplay],
            ["Domain", site.domain],
          ].map(([k, v]) => (
            <div key={k} className="border-t border-ink/10 pt-4">
              <dt className="text-[0.65rem] tracking-[0.2em] text-garnet uppercase">
                {k}
              </dt>
              <dd className="mt-2 font-serif text-2xl">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
