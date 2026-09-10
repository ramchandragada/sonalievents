import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/cta";
import { MediaFrame } from "@/components/media-frame";
import { events } from "@/lib/events";
import { getLocation, locations } from "@/lib/locations";
import { locationJsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getLocation(slug);
  if (!item) return { title: "Location" };
  return pageMeta(`/locations/${slug}`, {
    title: { absolute: item.title },
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [{ url: item.image }],
    },
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const item = getLocation(slug);
  if (!item) notFound();

  const other = locations.find((entry) => entry.slug !== item.slug);

  return (
    <article className="pt-20 md:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd(item)) }}
      />
      <div className="mx-auto grid max-w-7xl items-end gap-6 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="md:col-span-7">
          <p className="eyebrow">{item.kicker}</p>
          <h1 className="display mt-3 text-4xl md:mt-4 md:text-7xl">{item.h1}</h1>
        </div>
        <p className="text-base leading-relaxed text-ink-soft md:col-span-5 md:text-lg">
          {item.lede}
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-5 md:mt-12 md:px-8">
        <MediaFrame
          src={item.image}
          alt={item.imageAlt}
          className="min-h-[220px] overflow-hidden md:min-h-[480px]"
          priority
          sizes="100vw"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <div className="max-w-3xl space-y-12 md:space-y-16">
          {item.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="display text-3xl md:text-5xl">{section.heading}</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14 border-t border-ink/10 pt-10 md:mt-20 md:pt-14">
          <p className="eyebrow">Celebrations</p>
          <h2 className="display mt-2 text-3xl md:text-5xl">Days we hold here.</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {events.map((event) => (
              <li key={event.slug}>
                <Link
                  href={`/events/${event.slug}`}
                  className="pressable inline-flex min-h-11 items-center rounded-full border border-ink/15 bg-paper px-4 text-xs font-semibold tracking-[0.14em] uppercase hover:border-garnet/40 hover:text-garnet-deep"
                >
                  {event.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-ink/10 pt-10 sm:flex-row sm:items-center md:mt-16">
          <WhatsAppButton
            desktopOnly
            message={`Hello Sonali Events, I would like to plan a celebration in ${item.name}.`}
          />
          <p className="max-w-sm text-sm text-ink-muted">
            WhatsApp {site.phoneDisplay}. Tell us the date, the tradition, and
            whether it is home, lawn, or hall.
          </p>
        </div>

        {other ? (
          <p className="mt-10 text-sm text-ink-muted">
            Also on this road:{" "}
            <Link
              href={`/locations/${other.slug}`}
              className="text-garnet-deep underline-offset-4 hover:underline"
            >
              {other.h1}
            </Link>
            .
          </p>
        ) : null}
      </div>
    </article>
  );
}
