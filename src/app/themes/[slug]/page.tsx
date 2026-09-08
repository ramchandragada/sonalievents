import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaFrame } from "@/components/media-frame";
import { pageMeta } from "@/lib/seo";
import { getTheme, themes } from "@/lib/themes";
import { whatsappHref } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return themes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getTheme(slug);
  if (!item) return { title: "Theme" };
  return pageMeta(`/themes/${slug}`, {
    title: `${item.name} theme`,
    description: item.summary,
    openGraph: { images: [{ url: item.image }] },
  });
}

export default async function ThemeDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getTheme(slug);
  if (!item) notFound();

  return (
    <article className="pt-20 md:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 md:grid-cols-2 md:gap-10 md:px-8">
        <div className="relative h-[240px] md:h-[510px]">
          <MediaFrame
            src={item.image}
            alt={item.name}
            className="h-full w-full"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
            {item.kicker}
          </p>
          <h1 className="display mt-3 text-5xl md:mt-5 md:text-8xl">{item.name}</h1>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-12 md:gap-12 md:px-8 md:py-20">
        <p className="text-xl leading-relaxed text-ink-soft md:col-span-7">
          {item.story}
        </p>
        <ul className="md:col-span-5">
          {item.cues.map((cue) => (
            <li
              key={cue}
              className="border-b border-garnet/15 py-4 font-serif text-2xl"
            >
              {cue}
            </li>
          ))}
          <li className="pt-8">
            <Link
              href={whatsappHref(
                `Hello Sonali Events, I would like a ${item.name} theme celebration in Pune.`,
              )}
              className="rounded-full bg-garnet px-6 py-3 text-[0.7rem] tracking-[0.18em] text-paper uppercase"
            >
              Request this theme
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
