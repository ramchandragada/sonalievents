import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaFrame } from "@/components/media-frame";
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
  return { title: `${item.name} theme`, description: item.summary };
}

export default async function ThemeDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getTheme(slug);
  if (!item) notFound();

  return (
    <article className="pt-24">
      <div className="relative min-h-[68dvh] overflow-hidden bg-ink text-ivory">
        <MediaFrame
          src={item.image}
          alt={item.name}
          className="absolute inset-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[68dvh] max-w-7xl flex-col justify-end px-5 pb-12 md:px-8">
          <p className="text-[0.7rem] tracking-[0.28em] text-brass uppercase">
            {item.kicker}
          </p>
          <h1 className="display mt-3 text-6xl md:text-8xl">{item.name}</h1>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8">
        <p className="text-xl leading-relaxed text-ink-soft md:col-span-7">
          {item.story}
        </p>
        <ul className="md:col-span-5">
          {item.cues.map((cue) => (
            <li
              key={cue}
              className="border-b border-ink/10 py-4 font-serif text-2xl"
            >
              {cue}
            </li>
          ))}
          <li className="pt-8">
            <Link
              href={whatsappHref(
                `Hello Sonali Events, I would like a ${item.name} theme celebration in Pune.`,
              )}
              className="rounded-full bg-garnet px-6 py-3 text-[0.7rem] tracking-[0.18em] text-ivory uppercase"
            >
              Request this theme
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
