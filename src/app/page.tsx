import type { Metadata } from "next";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { HeroStage } from "@/components/hero-stage";
import { InquiryBar } from "@/components/inquiry-bar";
import { Magnetic } from "@/components/magnetic";
import { Marquee } from "@/components/marquee";
import { MediaFrame } from "@/components/media-frame";
import { caseStudies } from "@/lib/case-studies";
import { events } from "@/lib/events";
import { scope, site, whatsappHref } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta("/", {});

export default function Home() {
  return (
    <div>
      <section className="relative isolate min-h-[72svh] overflow-hidden bg-ink md:min-h-[100svh]">
        <HeroStage />
        <div className="absolute inset-0 bg-ink/45 md:bg-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20 md:from-ink/90 md:via-ink/45 md:to-transparent" />
        <div className="absolute inset-y-0 left-0 hidden w-[58%] bg-gradient-to-r from-ink/80 via-ink/40 to-transparent md:block" />
        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-7xl flex-col justify-end px-5 pb-14 pt-20 md:min-h-[100svh] md:px-8 md:pb-32 md:pt-28">
          <p className="hero-copy text-[0.7rem] tracking-[0.28em] text-paper uppercase">
            {site.baseLine}
          </p>
          <h1 className="hero-copy display mt-3 max-w-3xl text-[14vw] text-paper sm:text-[12vw] lg:text-[7.5rem]">
            You live
            <br />
            the day.
          </h1>
          <p className="hero-copy mt-4 max-w-md text-base leading-relaxed text-paper md:mt-6 md:text-lg">
            {site.houseLine} Venue, décor, food, invitations, music, dance,
            and games — for the eight kinds of day we hold on this corridor.
          </p>
          <div className="mt-6 flex items-center gap-2 md:mt-8">
            <Magnetic>
              <Link
                href={whatsappHref(
                  "Hello Sonali Events, I would like to plan a celebration near Nanded City / Sinhgad Road.",
                )}
                className="inline-flex rounded-full bg-garnet px-5 py-2.5 text-[0.65rem] tracking-[0.18em] text-paper uppercase md:px-7 md:py-3 md:text-[0.72rem] md:tracking-[0.22em]"
              >
                Begin on WhatsApp
              </Link>
            </Magnetic>
            <Link
              href="/gallery"
              className="inline-flex rounded-full border border-paper/80 bg-ink/50 px-5 py-2.5 text-[0.65rem] tracking-[0.18em] text-paper uppercase md:px-7 md:py-3 md:text-[0.72rem] md:tracking-[0.22em]"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-12 px-5 md:-mt-20 md:px-8">
        <InquiryBar />
      </div>

      <Marquee
        items={[
          "Birthdays",
          "Namkaran",
          "Engagements",
          "Marriages",
          "Gruha pravesh",
          "Munj",
          "Office nights",
          "Celebration parties",
          "Maharashtrian",
          "North Indian",
          "South Indian",
        ]}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-5 py-8 md:grid-cols-4 md:px-8 md:py-16">
        <CountUp value={1000} suffix="+" label="Events in 3 years" tint="bg-transparent" />
        <CountUp value={8} label="Event categories" tint="bg-transparent" />
        <CountUp value={3} label="Regional themes" tint="bg-transparent" />
        <CountUp value={3} label="Languages on the floor" tint="bg-transparent" />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-4 md:px-8">
        <p className="max-w-2xl text-sm text-ink-soft md:text-base">
          {site.honestLine} Rooms include Nanded City homes, Sinhgad Road
          halls, and venues such as Serenova Banquet.
        </p>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
                Selected days
              </p>
              <h2 className="display mt-2 text-4xl md:mt-3 md:text-7xl">
                Days we have held nearby.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="nav-link w-fit text-[0.72rem] tracking-[0.2em] uppercase"
            >
              Gallery
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2 md:mt-12 md:grid-cols-3 md:gap-4">
            {caseStudies.slice(0, 4).map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group img-zoom relative overflow-hidden ${
                  index === 0
                    ? "min-h-[200px] md:col-span-2 md:min-h-[560px]"
                    : "min-h-[200px] md:min-h-[360px]"
                }`}
              >
                <MediaFrame
                  src={item.image}
                  alt={`${item.title} — ${item.place}`}
                  className="h-full min-h-[200px] w-full md:min-h-[360px]"
                  sizes={index === 0 ? "(max-width: 768px) 50vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
                <div className="absolute inset-x-0 bottom-0 bg-ink/55 p-3 md:p-6">
                  <p className="text-[0.6rem] tracking-[0.2em] text-paper/70 uppercase">
                    {item.place}
                  </p>
                  <h3 className="display mt-1 text-xl text-paper md:text-4xl">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
                The work
              </p>
              <h2 className="display mt-2 text-4xl md:mt-3 md:text-7xl">Eight kinds of joy.</h2>
            </div>
            <Link
              href="/events"
              className="nav-link w-fit text-[0.72rem] tracking-[0.2em] uppercase"
            >
              All events
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 md:mt-12 md:auto-rows-[280px] md:grid-cols-4 md:gap-4">
            {events.map((item) => (
              <Link
                key={item.slug}
                href={`/events/${item.slug}`}
                className="group img-zoom relative min-h-[160px] overflow-hidden md:min-h-[280px]"
              >
                <MediaFrame
                  src={item.image}
                  alt={item.name}
                  className="h-full min-h-[160px] w-full md:min-h-[280px]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-ink/55 p-3 text-paper md:p-5">
                  <p className="text-[0.6rem] tracking-[0.2em] text-paper/70 uppercase">
                    {item.local}
                  </p>
                  <h3 className="display mt-1 text-xl md:text-4xl">{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
          One window
        </p>
        <h2 className="display mt-2 max-w-3xl text-4xl md:mt-3 md:text-5xl">
          What the house holds.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink-soft md:text-lg">
          {site.oneWindowLine}
        </p>
        <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
          {scope.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink/15 px-4 py-1.5 text-[0.68rem] tracking-[0.18em] uppercase md:px-5 md:py-2 md:text-[0.72rem]"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-5 text-[0.72rem] tracking-[0.2em] uppercase">
          <Link href="/themes" className="text-garnet">
            Themes →
          </Link>
          <Link href="/way" className="text-garnet">
            How we work →
          </Link>
          <Link href="/about" className="text-garnet">
            The house →
          </Link>
        </div>
      </section>

      <section className="bg-ink px-5 py-10 text-paper md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
            {site.domain}
          </p>
          <h2 className="display mt-3 text-4xl md:mt-4 md:text-7xl">
            Tell us the date, the ritual, and the room.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-paper/75 md:text-base">
            We hold the rest from Nanded City and Sinhgad Road.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10 md:gap-4">
            <Link
              href="/plan"
              className="rounded-full bg-garnet px-8 py-3 text-[0.72rem] tracking-[0.2em] text-paper uppercase"
            >
              Plan your event
            </Link>
            <Link
              href={whatsappHref(
                "Hello Sonali Events, I have a date near Nanded City / Sinhgad Road.",
              )}
              className="rounded-full border border-paper/30 px-8 py-3 text-[0.72rem] tracking-[0.2em] uppercase"
            >
              WhatsApp us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
