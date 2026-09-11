import type { Metadata } from "next";
import {
  EmailLink,
  GoogleMapsLink,
  GoogleReviewLink,
  JustdialLink,
  WhatsAppButton,
} from "@/components/cta";
import { MediaFrame } from "@/components/media-frame";
import { events } from "@/lib/events";
import { pageMeta } from "@/lib/seo";
import { scope, site } from "@/lib/site";
import { themes } from "@/lib/themes";
import { work } from "@/lib/work-picks";

export const metadata: Metadata = pageMeta("/about", {
  title: "About",
  description:
    "Sonali Events — the event house at Nanded City and Sinhgad Road. Founded in 2023 by Sonali Upagnalawar. 1,000+ celebrations held with clear communication and on-time delivery.",
});

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="mx-auto grid max-w-7xl items-end gap-6 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="md:col-span-7">
          <p className="eyebrow">About us</p>
          <h1 className="display mt-3 text-4xl md:mt-4 md:text-7xl">
            The house that holds the day.
          </h1>
        </div>
        <p className="text-base leading-relaxed text-ink-soft md:col-span-5 md:text-lg">
          Sonali Events is an event house based at Nanded City and Sinhgad Road —
          built so families live the celebration while one team holds the rest.
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

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <p className="eyebrow">The house</p>
        <h2 className="display mt-2 max-w-3xl text-3xl md:text-5xl">
          One window. Experienced crews. Days that run.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-14">
          <div className="space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              A birthday, a namkaran, a roka, a wedding week — none of these
              should arrive as six vendors and a group chat. Sonali Events holds
              what we actually run: venue, décor, food, invitations, music,
              dance, games, and show-calling — at home, on a society lawn, or in
              a banquet hall near Nanded City and Sinhgad Road.
            </p>
            <p>
              Since 2023 we have held more than a thousand celebrations. The
              work is measured simply: professional execution, clear
              communication, on-time delivery, and living the commitment we make
              before the day begins. That is how new orders keep arriving —
              through families who send the next family.
            </p>
            <p>
              The website is English. On the floor the team speaks Marathi,
              Hindi, and English. Themes run Maharashtrian, North Indian, and
              South Indian — because this road is all three.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-5 gap-y-6 self-start">
            {[
              ["House", site.name],
              ["Base", site.address],
              ["Record", `${site.eventsDelivered} events in ${site.years} years`],
              ["Spoken", site.languagesSpoken.join(" · ")],
              ["Contact", site.phoneDisplay],
              ["Email", site.email],
              ["Hours", site.hoursDisplay],
              ["Founded", "2023"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-ink/10 pt-3">
                <dt className="eyebrow">{k}</dt>
                <dd
                  className={`mt-1.5 font-serif text-ink ${
                    k === "Hours" ? "text-lg md:text-xl" : "text-xl md:text-2xl"
                  }`}
                >
                  {k === "Contact" ? (
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                    >
                      {v}
                    </a>
                  ) : k === "Email" ? (
                    <EmailLink className="inline-flex min-h-11 items-center underline-offset-4 hover:underline" />
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">
          {site.honestLine} If we held your day near Nanded City or Sinhgad
          Road, you can{" "}
          <GoogleReviewLink className="underline underline-offset-4 hover:text-garnet">
            share it on Google
          </GoogleReviewLink>
          . Find us on{" "}
          <GoogleMapsLink className="underline underline-offset-4 hover:text-garnet">
            Google Maps
          </GoogleMapsLink>
          . Also listed on{" "}
          <JustdialLink className="underline underline-offset-4 hover:text-garnet" />
          .
        </p>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:gap-12 md:px-8 md:py-20">
          <div className="md:col-span-5">
            <p className="eyebrow">About the founder</p>
            <h2 className="display mt-2 text-4xl md:text-6xl">
              {site.founderShort}
            </h2>
            <p className="mt-3 text-sm font-semibold tracking-[0.16em] text-garnet-deep uppercase">
              {site.role} · {site.name}
            </p>
            <p className="mt-2 text-sm text-ink-muted">{site.proprietor}</p>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-soft md:col-span-7 md:text-lg">
            <p>
              Before Sonali Events, {site.founderShort} spent more than twenty
              years in finance — working across corporates, learning how systems
              hold under pressure, and how people deliver when the brief is
              clear. That discipline still sits under every celebration we run.
            </p>
            <p>
              She was always, at heart, an artist, a creator, and a cook. In
              2023 she left a flourishing career to follow that pull — art,
              food, and the craft of people: building teams, reading a room, and
              holding a day until it feels effortless for the family living it.
            </p>
            <p>
              She founded Sonali Events from the ground up: the crews, the
              standards, the way a WhatsApp brief becomes a finished floor. The
              reputation the house holds in Nanded City and nearby is not a
              campaign — it is the result of work done on time, spoken plainly,
              and finished the way it was promised.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-24">
        <p className="eyebrow">What we run</p>
        <h2 className="display mt-2 text-3xl md:text-5xl">
          What we actually hold.
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="eyebrow">In the plan</p>
            <ul className="mt-4 space-y-2 text-base text-ink-soft">
              {scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Kinds of day</p>
            <ul className="mt-4 space-y-2 text-base text-ink-soft">
              {events.map((item) => (
                <li key={item.slug}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">How the day can feel</p>
            <ul className="mt-4 space-y-2 text-base text-ink-soft">
              {themes.map((item) => (
                <li key={item.slug}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-ink/10 pt-10 sm:flex-row sm:items-center">
          <WhatsAppButton
            desktopOnly
            message="Hello Sonali Events — I read About and would like to plan a celebration near Nanded City / Sinhgad Road."
          />
          <p className="max-w-sm text-sm text-ink-muted">
            Tell us the date, the tradition, and where the function is. We hold
            the rest.
          </p>
        </div>
      </div>
    </div>
  );
}
