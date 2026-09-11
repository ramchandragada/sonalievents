import type { Metadata } from "next";
import Link from "next/link";
import { CategoryChips } from "@/components/category-chips";
import { SeeWorkButton, WhatsAppButton } from "@/components/cta";
import { HeroStage } from "@/components/hero-stage";
import { InquiryBar } from "@/components/inquiry-bar";
import { Magnetic } from "@/components/magnetic";
import { MediaFrame } from "@/components/media-frame";
import { Stat } from "@/components/stat";
import { caseStudies } from "@/lib/case-studies";
import { events } from "@/lib/events";
import { locations } from "@/lib/locations";
import { scope, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const homeTitle = "Event Planner Nanded City & Sinhgad Road Pune | Sonali Events";
const homeDescription =
  "End-to-end event management in Nanded City and on Sinhgad Road, Pune — birthdays, namkaran, engagements, weddings, housewarming, munj, office parties. Venue, décor, food, music. WhatsApp +91 89757 60707.";

export const metadata: Metadata = pageMeta("/", {
  title: { absolute: homeTitle },
  description: homeDescription,
  openGraph: {
    title: homeTitle,
    description: homeDescription,
  },
});

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-ink">
        <HeroStage />
        <div className="absolute inset-0 bg-ink/35 md:bg-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25 md:from-ink/85 md:via-ink/35 md:to-transparent" />
        <div className="absolute inset-y-0 left-0 hidden w-[55%] bg-gradient-to-r from-ink/80 via-ink/40 to-transparent md:block" />
        <div
          className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-5 pb-14 md:px-8 md:pb-28"
          style={{
            paddingTop: "calc(var(--header-h) + 1.25rem)",
            minHeight: "min(92svh, 52rem)",
          }}
        >
          <p
            className="hero-copy text-[0.7rem] tracking-[0.28em] text-paper uppercase"
            style={{ animation: "rise 0.8s 0.12s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {site.baseLine}
          </p>
          <h1
            className="hero-copy mt-4 max-w-2xl font-serif text-[1.65rem] leading-[1.15] text-paper sm:text-3xl md:text-4xl"
            style={{ animation: "rise 0.9s 0.22s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Event management for Nanded City &amp; Sinhgad Road
          </h1>
          <h2
            className="hero-copy display mt-3 max-w-3xl text-[13vw] leading-[0.9] text-paper sm:text-[11vw] lg:text-[8.5vw] xl:text-[7.5rem]"
            style={{ animation: "rise 1s 0.28s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            You live
            <br />
            the day.
          </h2>
          <p
            className="hero-copy mt-4 max-w-md text-base leading-relaxed text-paper/95 md:mt-5 md:text-lg"
            style={{ animation: "rise 0.85s 0.48s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Venue, décor, food, music, dance, and games — at home, society lawn,
            or banquet hall near Nanded City and Sinhgad Road.
          </p>
          <div
            className="mt-6 flex flex-wrap items-center gap-2 md:mt-8"
            style={{ animation: "rise 0.85s 0.62s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <span className="hidden md:inline-flex">
              <Magnetic>
                <WhatsAppButton />
              </Magnetic>
            </span>
            <SeeWorkButton className="border-paper/80 bg-ink/40 text-paper backdrop-blur-sm" />
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-8 px-5 md:-mt-14 md:px-8">
        <InquiryBar />
      </div>

      <CategoryChips />

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-1 px-5 py-12 md:grid-cols-4 md:gap-x-10 md:px-8 md:py-16">
        <Stat value="1,000+" label="Events held" accent />
        <Stat value="Home · lawn · hall" label="Where we stage" />
        <Stat value="3 languages" label="Marathi · Hindi · English" />
        <Stat value="Since 2023" label="With families nearby" />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-2 md:px-8">
        <p className="max-w-2xl text-base leading-relaxed text-ink-soft">
          {site.honestLine} We work at Nanded City homes, society lawns,
          Sinhgad Road banquet halls, and halls such as Serenova Banquet.
        </p>
      </section>

      <section className="section-pad px-5 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="reveal">
            <p className="eyebrow">Where we work</p>
            <h2 className="display mt-2 text-4xl md:text-6xl">
              Nanded City and Sinhgad Road.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              The Pune township of homes and lawns, and the banquet corridor on
              the same road — not Nanded district in Marathwada.
            </p>
          </div>
          <div className="mt-6 grid gap-2 md:mt-8 md:grid-cols-2 md:gap-3">
            {locations.map((item) => (
              <Link
                key={item.slug}
                href={`/locations/${item.slug}`}
                className="group img-zoom relative min-h-[240px] overflow-hidden md:min-h-[320px]"
              >
                <MediaFrame
                  src={item.image}
                  alt={item.imageAlt}
                  className="absolute inset-0 h-full w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-5 pt-20">
                  <p className="text-[0.55rem] tracking-[0.16em] text-paper/75 uppercase">
                    {item.kicker}
                  </p>
                  <h3 className="display mt-1 text-2xl text-paper md:text-4xl">
                    {item.navLabel}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-paper/85">{item.lede}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad px-5 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4">
            <div className="reveal">
              <p className="eyebrow">From the floor</p>
              <h2 className="display mt-2 text-4xl md:text-6xl">Real days nearby.</h2>
            </div>
            <Link
              href="/gallery"
              className="nav-link shrink-0 text-xs font-semibold tracking-[0.16em] text-garnet-deep uppercase"
            >
              Gallery
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-1 md:mt-8 md:gap-1.5">
            {caseStudies.slice(0, 4).map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group img-zoom reveal relative aspect-[4/5] overflow-hidden md:aspect-[5/4]"
              >
                <MediaFrame
                  src={item.image}
                  alt={`${item.title} — ${item.place}`}
                  className="absolute inset-0 h-full w-full"
                  sizes="(max-width: 768px) 50vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-3 pt-16 md:p-5 md:pt-24">
                  <p className="text-[0.58rem] tracking-[0.18em] text-paper/75 uppercase">
                    {item.place}
                  </p>
                  <h3 className="display mt-1 text-xl text-paper md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-4 md:px-8 md:pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4">
            <div className="reveal">
              <p className="eyebrow">Celebrations</p>
              <h2 className="display mt-2 text-4xl md:text-6xl">
                From namkaran to wedding week.
              </h2>
            </div>
            <Link
              href="/events"
              className="nav-link shrink-0 text-xs font-semibold tracking-[0.16em] text-garnet-deep uppercase"
            >
              See all
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-1 md:mt-8 md:grid-cols-4 md:gap-1.5">
            {events.map((item) => (
              <Link
                key={item.slug}
                href={`/events/${item.slug}`}
                className="group img-zoom reveal relative aspect-[3/4] overflow-hidden"
              >
                <MediaFrame
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-3 pt-14 text-paper md:p-4 md:pt-20">
                  <p className="text-[0.55rem] tracking-[0.16em] text-paper/75 uppercase">
                    {item.local}
                  </p>
                  <h3 className="display mt-1 text-lg md:text-2xl">{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow">One window</p>
        <h2 className="display mt-2 max-w-3xl text-4xl md:mt-3 md:text-5xl">
          What Sonali Events holds.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {site.oneWindowLine}
        </p>
        <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
          {scope.map((item) => (
            <span
              key={item}
              className="inline-flex min-h-11 items-center rounded-full border border-ink/15 px-4 text-xs font-semibold tracking-[0.14em] uppercase md:px-5"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-5 text-xs font-semibold tracking-[0.16em] uppercase">
          <Link href="/themes" className="nav-link text-garnet-deep">
            Themes →
          </Link>
          <Link href="/way" className="nav-link text-garnet-deep">
            How we work →
          </Link>
          <Link href="/about" className="nav-link text-garnet-deep">
            About →
          </Link>
        </div>
      </section>

      <section className="liquid-ink section-pad px-5 text-paper md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-marigold uppercase">
            {site.domain}
          </p>
          <h2 className="display mt-3 text-4xl md:mt-4 md:text-7xl">
            Tell us the date, the tradition, and where it is.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-paper/85">
            Home, society lawn, or banquet hall near Nanded City and Sinhgad
            Road — we hold the rest.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10 md:gap-4">
            <WhatsAppButton desktopOnly />
            <SeeWorkButton className="border-paper/60 text-paper" />
          </div>
        </div>
      </section>
    </div>
  );
}
