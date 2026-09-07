import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { Magnetic } from "@/components/magnetic";
import { Marquee } from "@/components/marquee";
import { MediaFrame } from "@/components/media-frame";
import { events } from "@/lib/events";
import { scope, site, steps, whatsappHref } from "@/lib/site";
import { themes } from "@/lib/themes";

export default function Home() {
  return (
    <div>
      <section className="relative isolate min-h-[100dvh] overflow-hidden bg-garnet-deep text-ivory">
        <MediaFrame
          src="/mood/indian-decor.jpg"
          alt="A celebration staged by Sonali Events"
          className="absolute inset-0"
          imageClassName="ken"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,18,16,0.38)_0%,rgba(27,18,16,0.18)_40%,rgba(27,18,16,0.78)_100%)]" />
        <div className="liquid-orb top-[20%] left-[-10%] h-72 w-72 rounded-full bg-brass/40 md:h-[28rem] md:w-[28rem]" />
        <div className="liquid-orb right-[-8%] bottom-[10%] h-64 w-64 rounded-full bg-garnet/50" />

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
          <p className="text-[0.72rem] tracking-[0.38em] uppercase text-brass">
            Pune · Nanded City · Sinhgad Road
          </p>
          <h1 className="display mt-5 max-w-5xl text-[18vw] sm:text-[12vw] md:text-[7.4rem]">
            You live
            <br />
            the day.
          </h1>
          <div className="mt-8 flex max-w-2xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-ivory/80">
              {site.proprietor} and her teams hold venue, décor, food,
              invitations, music, dance, and games. {site.eventsDelivered}{" "}
              celebrations in three years.
            </p>
            <Magnetic>
              <Link
                href={whatsappHref(
                  "Hello Sonali Events, I would like to plan a celebration in Pune.",
                )}
                className="inline-flex rounded-full bg-ivory px-7 py-3 text-[0.72rem] tracking-[0.22em] text-garnet-deep uppercase"
              >
                Begin on WhatsApp
              </Link>
            </Magnetic>
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

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-4 md:px-8 md:py-28">
        <CountUp value={1000} suffix="+" label="Events in 3 years" />
        <CountUp value={8} label="Event categories" />
        <CountUp value={3} label="Regional themes" />
        <CountUp value={3} label="Languages on the floor" />
      </section>

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
                  className="absolute inset-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-ivory md:p-6">
                  <p className="text-[0.65rem] tracking-[0.2em] text-brass uppercase">
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
                className="absolute inset-0"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-ink/45 transition duration-700 group-hover:bg-ink/30" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-ivory md:p-8">
                <p className="text-[0.65rem] tracking-[0.22em] uppercase text-brass">
                  {theme.kicker}
                </p>
                <h3 className="display mt-2 text-4xl md:text-5xl">{theme.name}</h3>
                <p className="mt-3 max-w-xs text-sm text-ivory/80">{theme.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[0.7rem] tracking-[0.28em] text-brass uppercase">
            End to end
          </p>
          <h2 className="display mt-3 max-w-3xl text-5xl md:text-7xl">
            One window. Every moving part.
          </h2>
          <div className="mt-12 flex flex-wrap gap-3">
            {scope.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ivory/20 px-5 py-2 text-[0.72rem] tracking-[0.18em] uppercase"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.n} className="reveal border-t border-ivory/15 pt-6">
                <p className="text-brass">{step.n}</p>
                <h3 className="display mt-3 text-3xl">{step.title}</h3>
                <p className="mt-3 text-ivory/70">{step.body}</p>
              </article>
            ))}
          </div>
          <Link
            href="/way"
            className="mt-12 inline-block text-[0.72rem] tracking-[0.2em] text-brass uppercase"
          >
            The Sonali way →
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8">
        <div className="mask-rise relative min-h-[420px] md:min-h-[560px]">
          <MediaFrame
            src="/mood/venue.jpg"
            alt="A banquet prepared for a Pune celebration"
            className="absolute inset-0"
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
          <p className="mt-2 text-sm tracking-[0.14em] text-ink-soft/70 uppercase">
            {site.role} · Proprietorship
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Based at Nanded City on Sinhgad Road. Multiple experienced teams
            for each kind of event. Conversations in Marathi, Hindi, and
            English. The website is English; the floor speaks the family.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-[0.72rem] tracking-[0.2em] uppercase"
          >
            About Sonali →
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-garnet px-5 py-28 text-ivory md:px-8">
        <div className="liquid-orb top-[-20%] right-[-10%] h-80 w-80 rounded-full bg-brass/30" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-[0.7rem] tracking-[0.28em] text-brass uppercase">
            {site.domain}
          </p>
          <h2 className="display mt-4 text-5xl md:text-7xl">
            Tell us the date. We will hold the rest.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/plan"
              className="rounded-full bg-ivory px-8 py-3 text-[0.72rem] tracking-[0.2em] text-garnet uppercase"
            >
              Plan your event
            </Link>
            <Link
              href={whatsappHref("Hello Sonali Events, I have a date in mind.")}
              className="rounded-full border border-ivory/40 px-8 py-3 text-[0.72rem] tracking-[0.2em] uppercase"
            >
              WhatsApp us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
