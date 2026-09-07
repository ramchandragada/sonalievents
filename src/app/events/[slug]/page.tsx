import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaFrame } from "@/components/media-frame";
import { events, getEvent } from "@/lib/events";
import { site, whatsappHref } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getEvent(slug);
  if (!item) return { title: "Event" };
  return {
    title: item.name,
    description: item.summary,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getEvent(slug);
  if (!item) notFound();

  return (
    <article className="pt-24">
      <div className="relative min-h-[70dvh] overflow-hidden bg-ink text-ivory">
        <MediaFrame
          src={item.image}
          alt={item.name}
          className="absolute inset-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="relative z-10 mx-auto flex min-h-[70dvh] max-w-7xl flex-col justify-end px-5 pb-12 md:px-8">
          <p className="text-[0.7rem] tracking-[0.28em] text-brass uppercase">
            {item.local}
          </p>
          <h1 className="display mt-3 text-6xl md:text-8xl">{item.name}</h1>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <p className="text-xl leading-relaxed text-ink-soft">{item.story}</p>
          <p className="mt-6 text-ink-soft/80">
            Typical gathering: {item.guests} guests. Final scale follows your
            home, hall, or hotel.
          </p>
        </div>
        <aside className="md:col-span-5">
          <div className="border border-ink/10 bg-paper p-6">
            <p className="text-[0.65rem] tracking-[0.22em] text-garnet uppercase">
              In the plan
            </p>
            <ul className="mt-4 space-y-2 text-ink-soft">
              {item.includes.map((line) => (
                <li key={line} className="border-b border-ink/5 py-2">
                  {line}
                </li>
              ))}
            </ul>
            <Link
              href={whatsappHref(
                `Hello Sonali Events, I would like to plan a ${item.name.toLowerCase()} in Pune.`,
              )}
              className="mt-6 inline-flex rounded-full bg-garnet px-6 py-3 text-[0.7rem] tracking-[0.18em] text-ivory uppercase"
            >
              Plan this on WhatsApp
            </Link>
            <p className="mt-4 text-xs text-ink-soft/60">{site.phoneDisplay}</p>
          </div>
        </aside>
      </div>
    </article>
  );
}
