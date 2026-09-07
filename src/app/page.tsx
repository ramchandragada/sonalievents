import type { Metadata } from "next";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { Magnetic } from "@/components/magnetic";
import { Marquee } from "@/components/marquee";
import { MediaFrame } from "@/components/media-frame";
import { WorkFilm } from "@/components/work-film";
import { events } from "@/lib/events";
import { scope, site, steps, whatsappHref } from "@/lib/site";
import { themes } from "@/lib/themes";
import { work } from "@/lib/work-picks";
import { getWorkPhotos, getWorkVideos } from "@/lib/work-media";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta("/", {});

const pillColors = [
  "border-garnet bg-garnet/10 text-garnet",
  "border-brass bg-brass/10 text-brass",
  "border-forest bg-forest/10 text-forest",
  "border-sky bg-sky/15 text-sky",
];

export default function Home() {
  const photos = getWorkPhotos();
  const videos = getWorkVideos();
  const hero = photos[0]?.src ?? work.birthdayUnicorn;
  const heroSide = photos[1]?.src ?? work.namingPrincess;

  return (
    <div>
      <section className="relative isolate overflow-hidden px-5 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24">
        <div className="liquid-orb top-[-8%] left-[-6%] h-72 w-72 rounded-full bg-marigold md:h-[28rem] md:w-[28rem]" />
        <div className="liquid-orb right-[-10%] top-[12%] h-64 w-64 rounded-full bg-garnet/35 md:h-[22rem] md:w-[22rem]" />
        <div className="liquid-orb bottom-[-8%] left-[30%] h-56 w-56 rounded-full bg-forest/30" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex rounded-full bg-marigold px-4 py-1.5 text-[0.7rem] tracking-[0.28em] text-ink uppercase">
              Pune · Nanded City · Sinhgad Road
            </p>
            <h1 className="display mt-6 max-w-xl text-[16vw] sm:text-[12vw] lg:text-[6.5rem]">
              You live
              <br />
              <span className="text-garnet">the day.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              {site.proprietor} and her teams hold venue, décor, food,
              invitations, music, dance, and games. {site.eventsDelivered}{" "}
              celebrations in three years.
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
                className="inline-flex rounded-full border-2 border-ink/15 bg-paper px-7 py-3 text-[0.72rem] tracking-[0.22em] uppercase"
              >
                See the work
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl p-6 md:p-10">
            <div className="frame-pop relative h-[420px] rounded-[2.2rem] md:h-[560px]">
              <MediaFrame
                src={hero}
                alt="A celebration staged by Sonali Events"
                className="h-full w-full rounded-[2.2rem]"
                imageClassName="ken"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -top-5 right-2 rotate-6 rounded-2xl bg-marigold px-4 py-3 text-[0.65rem] tracking-[0.16em] text-ink uppercase shadow-lg md:right-[-8px]">
              Maharashtrian · North · South
            </div>
            <div className="absolute -bottom-5 left-2 rounded-full bg-forest px-5 py-3 text-[0.65rem] tracking-[0.18em] text-paper uppercase shadow-lg md:left-[-12px]">
              {site.eventsDelivered} events
            </div>
            <div className="absolute right-[-4%] bottom-[18%] hidden h-36 w-28 overflow-hidden rounded-2xl border-4 border-paper shadow-xl md:block">
              <MediaFrame
                src={heroSide}
                alt="Another Sonali Events celebration"
                className="h-full w-full"
                sizes="120px"
              />
            </div>
          </div>
        </div>
      </section>

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
        <CountUp value={1000} suffix="+" label="Events in 3 years" tint="bg-marigold" />
        <CountUp value={8} label="Event categories" tint="bg-paper" />
        <CountUp value={3} label="Regional themes" tint="bg-cream" />
        <CountUp value={3} label="Languages on the floor" tint="bg-paper" />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <p className="max-w-2xl text-ink-soft">
          The photographs and films on this site are from real Pune days — Nanded
          City homes, Sinhgad Road halls, and rooms such as Serenova Banquet.
          Not stock. Not a moodboard.
        </p>
      </section>

      {photos.length + videos.length > 0 ? (
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
                  From the floor
                </p>
                <h2 className="display mt-3 text-5xl md:text-7xl">
                  Real Pune celebrations.
                </h2>
              </div>
              <Link
                href="/gallery"
                className="nav-link w-fit text-[0.72rem] tracking-[0.2em] uppercase"
              >
                Full gallery
              </Link>
            </div>
            {videos.length > 0 ? (
              <div className="mt-10">
                <WorkFilm items={videos.slice(0, 3)} />
              </div>
            ) : null}
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {photos.slice(0, 4).map((item) => (
                <Link
                  key={item.src}
                  href="/gallery"
                  className="img-zoom relative min-h-[220px] overflow-hidden rounded-3xl md:min-h-[320px]"
                >
                  <MediaFrame
                    src={item.src}
                    alt="Sonali Events celebration"
                    className="h-full min-h-[220px] w-full md:min-h-[320px]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </Link>
              ))}
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
                className={`group img-zoom relative overflow-hidden rounded-3xl ${
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
                <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-paper/95 p-4 text-ink shadow-[0_12px_30px_rgba(42,17,64,0.12)] md:p-5">
                  <p className="text-[0.65rem] tracking-[0.2em] text-garnet uppercase">
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
          {themes.map((theme, index) => (
            <Link
              key={theme.slug}
              href={`/themes/${theme.slug}`}
              className="group img-zoom relative min-h-[420px] overflow-hidden rounded-3xl md:min-h-[560px]"
            >
              <MediaFrame
                src={theme.image}
                alt={theme.name}
                className="h-full min-h-[420px] w-full md:min-h-[560px]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className={`absolute inset-x-3 bottom-3 rounded-2xl p-5 shadow-[0_12px_30px_rgba(42,17,64,0.12)] md:p-6 ${
                  index === 0
                    ? "bg-marigold"
                    : index === 1
                      ? "bg-paper"
                      : "bg-cream"
                }`}
              >
                <p className="text-[0.65rem] tracking-[0.22em] text-garnet uppercase">
                  {theme.kicker}
                </p>
                <h3 className="display mt-2 text-4xl md:text-5xl">{theme.name}</h3>
                <p className="mt-3 max-w-xs text-sm text-ink-soft">{theme.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-24">
        <div className="liquid-orb top-[-20%] right-[-8%] h-72 w-72 rounded-full bg-garnet/20" />
        <div className="liquid-orb bottom-[-20%] left-[-8%] h-64 w-64 rounded-full bg-forest/25" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
            End to end
          </p>
          <h2 className="display mt-3 max-w-3xl text-5xl md:text-7xl">
            One window. Every moving part.
          </h2>
          <div className="mt-12 flex flex-wrap gap-3">
            {scope.map((item, index) => (
              <span
                key={item}
                className={`rounded-full border-2 px-5 py-2 text-[0.72rem] tracking-[0.18em] uppercase ${pillColors[index % pillColors.length]}`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.n}
                className={`reveal rounded-3xl p-6 md:p-8 ${
                  index % 2 === 0 ? "bg-paper" : "bg-ivory"
                }`}
              >
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
        <div className="mask-rise relative min-h-[420px] overflow-hidden rounded-[2rem] md:min-h-[560px]">
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

      <section className="relative overflow-hidden bg-marigold px-5 py-28 text-ink md:px-8">
        <div className="liquid-orb top-[-20%] right-[-10%] h-80 w-80 rounded-full bg-garnet/25" />
        <div className="relative mx-auto max-w-4xl text-center">
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
              className="rounded-full border-2 border-ink/20 bg-paper px-8 py-3 text-[0.72rem] tracking-[0.2em] uppercase"
            >
              WhatsApp us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
