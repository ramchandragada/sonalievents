import type { Metadata } from "next";
import { MediaFrame } from "@/components/media-frame";
import { events } from "@/lib/events";
import { pageMeta } from "@/lib/seo";
import { scope, site } from "@/lib/site";
import { themes } from "@/lib/themes";
import { work } from "@/lib/work-picks";

export const metadata: Metadata = pageMeta("/about", {
  title: "About",
  description:
    "Sonali Events — event house at Nanded City and Sinhgad Road with experienced teams for birthdays, namkaran, weddings, and office nights. 1,000+ celebrations.",
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
            Three years. A thousand days.
          </h1>
        </div>
        <p className="text-base text-ink-soft md:col-span-5 md:text-lg">
          {site.houseLine} Three years of work, more than a thousand events —
          focused on Nanded City and Sinhgad Road before we look farther.
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
            Families near Nanded City and Sinhgad Road should not have to
            assemble a wedding — or a child’s birthday — from six vendors and a
            group chat. Sonali Events is the single window for what we actually
            hold: venue, decoration, food, invitations, music, dance, and party
            games.
          </p>
          <p>
            Delivery sits with experienced crews for each kind of day, so a
            munj and an office night can share a Saturday without sharing a crew.
            We do not list staff names, degrees, or awards here that we cannot
            stand behind.             We do not claim photography, purohit booking, or other
            services until we can book them from one WhatsApp.
          </p>
          <p>
            The website is English. On the floor the team speaks Marathi,
            Hindi, and English. Themes run Maharashtrian, North Indian, and
            South Indian — because families on this road are all three.
          </p>
          <p className="text-sm md:text-base">{site.honestLine}</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 md:gap-6">
          {[
            ["House", site.name],
            ["Base", site.address],
            ["Record", `${site.eventsDelivered} events in ${site.years} years`],
            ["Spoken", site.languagesSpoken.join(" · ")],
            ["Contact", site.phoneDisplay],
            [site.role, site.proprietor],
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

      <div className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-24">
        <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
          What we run
        </p>
        <h2 className="display mt-2 text-3xl md:text-5xl">
          What we actually run.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-[0.65rem] tracking-[0.2em] text-garnet uppercase">
              In the plan
            </p>
            <ul className="mt-3 space-y-1 text-ink-soft">
              {scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.2em] text-garnet uppercase">
              Kinds of day
            </p>
            <ul className="mt-3 space-y-1 text-ink-soft">
              {events.map((item) => (
                <li key={item.slug}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.2em] text-garnet uppercase">
              How the day can feel
            </p>
            <ul className="mt-3 space-y-1 text-ink-soft">
              {themes.map((item) => (
                <li key={item.slug}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
