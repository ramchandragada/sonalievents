import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/cta";
import { FaqList } from "@/components/faq-list";
import { MediaFrame } from "@/components/media-frame";
import { RichText } from "@/components/rich-text";
import { getGuide, guides } from "@/lib/guides";
import { guideJsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getGuide(slug);
  if (!item) return { title: "Guide" };
  return pageMeta(`/guides/${slug}`, {
    title: { absolute: item.title },
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [{ url: item.image }],
      type: "article",
    },
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const item = getGuide(slug);
  if (!item) notFound();

  const other = guides.find((entry) => entry.slug !== item.slug);

  return (
    <article className="pt-20 md:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd(item)) }}
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
                  <p key={paragraph.slice(0, 48)}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14 border-t border-ink/10 pt-10 md:mt-20 md:pt-14">
          <p className="eyebrow">Continue</p>
          <h2 className="display mt-2 text-3xl md:text-5xl">The day, and the place.</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {item.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="pressable inline-flex min-h-11 items-center rounded-full border border-ink/15 bg-paper px-4 text-xs font-semibold tracking-[0.14em] uppercase hover:border-garnet/40 hover:text-garnet-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/guides"
                className="pressable inline-flex min-h-11 items-center rounded-full border border-ink/15 bg-paper px-4 text-xs font-semibold tracking-[0.14em] uppercase hover:border-garnet/40 hover:text-garnet-deep"
              >
                All guides
              </Link>
            </li>
          </ul>
        </section>

        {item.faqs.length ? <FaqList items={item.faqs} /> : null}

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-ink/10 pt-10 sm:flex-row sm:items-center md:mt-16">
          <WhatsAppButton desktopOnly message={item.whatsappMessage} />
          <p className="max-w-sm text-sm text-ink-muted">
            WhatsApp {site.phoneDisplay}. Tell us the date, the headcount, and
            whether it is home, lawn, clubhouse, or hall.
          </p>
        </div>

        {other ? (
          <p className="mt-10 text-sm text-ink-muted">
            Also in this series:{" "}
            <Link
              href={`/guides/${other.slug}`}
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
