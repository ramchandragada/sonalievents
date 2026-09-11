import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/cta";
import { FaqList } from "@/components/faq-list";
import { MediaFrame } from "@/components/media-frame";
import { events, getEvent } from "@/lib/events";
import { guidesLinkingTo } from "@/lib/guides";
import { locations } from "@/lib/locations";
import { eventJsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { themes } from "@/lib/themes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getEvent(slug);
  if (!item) return { title: "Event" };
  return pageMeta(`/events/${slug}`, {
    title: item.metaTitle ?? item.name,
    description: item.summary,
    openGraph: { images: [{ url: item.image }] },
  });
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getEvent(slug);
  if (!item) notFound();
  const relatedGuides = guidesLinkingTo(`/events/${item.slug}`);

  return (
    <article className="pt-20 md:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd(item)) }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 md:grid-cols-2 md:gap-10 md:px-8">
        <div className="relative h-[240px] md:h-[530px]">
          <MediaFrame
            src={item.image}
            alt={item.name}
            className="h-full w-full"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="eyebrow">
            {item.local}
          </p>
          <h1 className="display mt-3 text-5xl md:mt-5 md:text-8xl">{item.name}</h1>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-12 md:gap-12 md:px-8 md:py-20">
        <div className="md:col-span-7">
          <p className="text-xl leading-relaxed text-ink-soft">{item.story}</p>
          {item.detail?.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
              {paragraph}
            </p>
          ))}
          <p className="mt-6 text-ink-soft/80">
            Typical gathering: {item.guests} guests. Final scale follows your
            home, society lawn, or Sinhgad Road hall.
          </p>
          <p className="mt-4 text-sm text-ink-muted">
            Areas we hold this:{" "}
            <InlineLinks
              items={locations.map((place) => ({
                href: `/locations/${place.slug}`,
                label: place.navLabel,
              }))}
            />
            .
          </p>
          {item.relatedThemes?.length ? (
            <p className="mt-2 text-sm text-ink-muted">
              Themes that sit under this day:{" "}
              <InlineLinks
                items={item.relatedThemes.flatMap((slug) => {
                  const theme = themes.find((entry) => entry.slug === slug);
                  return theme
                    ? [{ href: `/themes/${theme.slug}`, label: theme.name }]
                    : [];
                })}
              />
              .
            </p>
          ) : null}
          {item.relatedEvents?.length ? (
            <p className="mt-2 text-sm text-ink-muted">
              Related celebrations:{" "}
              <InlineLinks
                items={item.relatedEvents.flatMap((slug) => {
                  const related = events.find((entry) => entry.slug === slug);
                  return related
                    ? [{ href: `/events/${related.slug}`, label: related.name }]
                    : [];
                })}
              />
              .
            </p>
          ) : null}
          {relatedGuides.length ? (
            <p className="mt-2 text-sm text-ink-muted">
              Planning notes:{" "}
              <InlineLinks
                items={relatedGuides.map((guide) => ({
                  href: `/guides/${guide.slug}`,
                  label: guide.navLabel,
                }))}
              />
              .
            </p>
          ) : null}
          {item.faqs ? <FaqList items={item.faqs} /> : null}
        </div>
        <aside className="md:col-span-5">
          <div className="border-t border-ink/10 bg-paper p-6">
            <p className="eyebrow">In the plan</p>
            <ul className="mt-4 space-y-2 text-ink-soft">
              {item.includes.map((line) => (
                <li key={line} className="border-b border-ink/5 py-2">
                  {line}
                </li>
              ))}
            </ul>
            <WhatsAppButton
              desktopOnly
              className="mt-6"
              message={`Hello Sonali Events, I would like to plan a ${item.name.toLowerCase()} near Nanded City / Sinhgad Road.`}
            />
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-4 block text-xs text-ink-muted underline-offset-4 hover:underline"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </aside>
      </div>
    </article>
  );
}

function InlineLinks({ items }: { items: { href: string; label: string }[] }) {
  return items.map((item, index) => (
    <span key={item.href}>
      {index > 0 ? " · " : null}
      <Link
        href={item.href}
        className="text-garnet-deep underline-offset-4 hover:underline"
      >
        {item.label}
      </Link>
    </span>
  ));
}
