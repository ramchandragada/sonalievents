import type { Metadata } from "next";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { HeroStage } from "@/components/hero-stage";
import { InquiryBar } from "@/components/inquiry-bar";
import { Magnetic } from "@/components/magnetic";
import { Marquee } from "@/components/marquee";
import { MediaFrame } from "@/components/media-frame";
import { WorkFilm } from "@/components/work-film";
import { caseStudies } from "@/lib/case-studies";
import { events } from "@/lib/events";
import { scope, site, steps, whatsappHref } from "@/lib/site";
import { themes } from "@/lib/themes";
import { work } from "@/lib/work-picks";
import { getWorkVideos } from "@/lib/work-media";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta("/", {});

export default function Home() {
  const videos = getWorkVideos();

  return (
    <div>
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
        <HeroStage />
        <div className="absolute inset-0 bg-ink/45 md:bg-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20 md:from-ink/90 md:via-ink/45 md:to-transparent" />
        <div className="absolute inset-y-0 left-0 hidden w-[58%] bg-gradient-to-r from-ink/80 via-ink/40 to-transparent md:block" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-28 pt-28 md:px-8 md:pb-32">
          <p className="hero-copy text-[0.7rem] tracking-[0.28em] text-paper uppercase">
            Pune · Nanded City · Sinhgad Road
          </p>
          <h1 className="hero-copy display mt-4 max-w-3xl text-[16vw] text-paper sm:text-[12vw] lg:text-[7.5rem]">
            You live
            <br />
            the day.
          </h1>
          <p className="hero-copy mt-6 max-w-md text-lg leading-relaxed text-paper">
            {site.proprietor} and her teams hold venue, décor, food,
            invitations, music, dance, and games. Real Pune rooms — not a
            moodboard.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link
                href={whatsappHref(
                  "Hello Sonali Events, I would like to plan a celebration in Pune.",
                )}
                className="inline-flex rounded-full bg-garnet px-7 py-3 text-[0.72rem] tracking-[0.22em] text-paper uppercase"
              >
                Begin on WhatsApp
              </Link>
            </Magnetic>
            <Link
              href="/gallery"
              className="inline-flex rounded-full border border-paper/80 bg-ink/50 px-7 py-3 text-[0.72rem] tracking-[0.22em] text-paper uppercase"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-16 px-5 md:-mt-20 md:px-8">
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

      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-16 md:grid-cols-4 md:px-8 md:py-24">
        <CountUp value={1000} suffix="+" label="Events in 3 years" tint="bg-transparent" />
        <CountUp value={8} label="Event categories" tint="bg-transparent" />
        <CountUp value={3} label="Regional themes" tint="bg-transparent" />
        <CountUp value={3} label="Languages on the floor" tint="bg-transparent" />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <p className="max-w-2xl text-ink-soft">
          Photographs and films on this site are from real Pune days — Nanded
          City homes, Sinhgad Road halls, and rooms such as Serenova Banquet.
        </p>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
                Selected days
              </p>
              <h2 className="display mt-3 text-5xl md:text-7xl">
                Named Pune celebrations.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="nav-link w-fit text-[0.72rem] tracking-[0.2em] uppercase"
            >
              Full gallery
            </Link>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-3 md:gap-4">
            {caseStudies.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group img-zoom relative overflow-hidden ${
                  index === 0
                    ? "min-h-[420px] md:col-span-2 md:min-h-[560px]"
                    : "min-h-[320px] md:min-h-[360px]"
                }`}
              >
                <MediaFrame
                  src={item.image}
                  alt={`${item.title} — ${item.place}`}
                  className={`h-full w-full ${
                    index === 0 ? "min-h-[420px] md:min-h-[560px]" : "min-h-[320px]"
                  }`}
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
                <div className="absolute inset-x-0 bottom-0 bg-ink/55 p-5 md:p-6">
                  <p className="text-[0.65rem] tracking-[0.2em] text-paper/70 uppercase">
                    {item.place}
                  </p>
                  <h3 className="display mt-1 text-3xl text-paper md:text-4xl">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {videos.length > 0 ? (
        <section className="px-5 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
              In motion
            </p>
            <h2 className="display mt-3 text-5xl md:text-7xl">From the floor.</h2>
            <div className="mt-10">
              <WorkFilm items={videos.slice(0, 3)} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-5 pb-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
                The work
              </p>
              <h2 className="display mt-3 text-5xl md:text-7xl">Eight kinds of joy.</h2>
            </div>
            <Link
              href="/events"
              className="nav-link w-fit text-[0.72rem] tracking-[0.2em] uppercase"
            >
              All events
            </Link>
          </div>

          <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[280px] md:grid-cols-4 md:gap-4">
            {events.map((item, index) => (
              <Link
                key={item.slug}
                href={`/events/${item.slug}`}
                className={`group img-zoom relative overflow-hidden ${
                  index === 0 || index === 3 ? "md:col-span-2 md:row-span-2 md:auto-rows-auto" : ""
                } ${index === 0 ? "col-span-2 min-h-[280px] md:min-h-[580px]" : ""} ${
                  index === 3 ? "min-h-[220px] md:min-h-[580px]" : ""
                }`}
              >
                <MediaFrame
                  src={item.image}
                  alt={item.name}
                  className="h-full min-h-[220px] w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-ink/55 p-4 text-paper md:p-5">
                  <p className="text-[0.65rem] tracking-[0.2em] text-paper/70 uppercase">
                    {item.local}
                  </p>
                  <h3 className="display mt-1 text-3xl md:text-4xl">{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
          Themes
        </p>
        <h2 className="display mt-3 max-w-3xl text-5xl md:text-7xl">
          Three ways a room can feel like home.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {themes.map((theme) => (
            <Link
              key={theme.slug}
              href={`/themes/${theme.slug}`}
              className="group img-zoom relative min-h-[420px] overflow-hidden md:min-h-[560px]"
            >
              <MediaFrame
                src={theme.image}
                alt={theme.name}
                className="h-full min-h-[420px] w-full md:min-h-[560px]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-ink/55 p-5 md:p-6">
                <p className="text-[0.65rem] tracking-[0.22em] text-paper/70 uppercase">
                  {theme.kicker}
                </p>
                <h3 className="display mt-2 text-4xl text-paper md:text-5xl">{theme.name}</h3>
                <p className="mt-3 max-w-xs text-sm text-paper/80">{theme.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
            End to end
          </p>
          <h2 className="display mt-3 max-w-3xl text-5xl md:text-7xl">
            One window. Every moving part.
          </h2>
          <div className="mt-12 flex flex-wrap gap-3">
            {scope.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/15 px-5 py-2 text-[0.72rem] tracking-[0.18em] uppercase"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.n}>
                <p className="text-garnet">{step.n}</p>
                <h3 className="display mt-3 text-3xl">{step.title}</h3>
                <p className="mt-3 text-ink-soft">{step.body}</p>
              </article>
            ))}
          </div>
          <Link
            href="/way"
            className="mt-12 inline-block text-[0.72rem] tracking-[0.2em] text-garnet uppercase"
          >
            The Sonali way →
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8">
        <div className="mask-rise relative min-h-[420px] overflow-hidden md:min-h-[560px]">
          <MediaFrame
            src={work.lotusStage}
            alt="A celebration staged by Sonali Events in Pune"
            className="h-full min-h-[420px] w-full md:min-h-[560px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
            The house
          </p>
          <h2 className="display mt-3 text-5xl md:text-6xl">
            {site.proprietor}
          </h2>
          <p className="mt-2 text-sm tracking-[0.14em] text-ink-soft uppercase">
            Proprietor · Nanded City, Pune
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Based at Nanded City on Sinhgad Road. Multiple experienced teams
            for each kind of event. Conversations in Marathi, Hindi, and
            English. The website is English; the floor speaks the family.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-[0.72rem] tracking-[0.2em] text-garnet uppercase"
          >
            About Sonali →
          </Link>
        </div>
      </section>

      <section className="bg-ink px-5 py-28 text-paper md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
            {site.domain}
          </p>
          <h2 className="display mt-4 text-5xl md:text-7xl">
            Tell us the date. We will hold the rest.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/plan"
              className="rounded-full bg-garnet px-8 py-3 text-[0.72rem] tracking-[0.2em] text-paper uppercase"
            >
              Plan your event
            </Link>
            <Link
              href={whatsappHref("Hello Sonali Events, I have a date in mind.")}
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
