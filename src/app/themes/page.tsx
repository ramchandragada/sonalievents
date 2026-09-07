import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { PageIntro } from "@/components/page-intro";
import { pageMeta } from "@/lib/seo";
import { themes } from "@/lib/themes";

export const metadata: Metadata = pageMeta("/themes", {
  title: "Themes",
  description:
    "Traditional Maharashtrian, North Indian, and South Indian celebration themes by Sonali Events, Pune.",
});

export default function ThemesPage() {
  return (
    <div className="pt-24">
      <PageIntro
        kicker="How a room feels"
        title="Maharashtrian. North Indian. South Indian."
        body="Three design languages, one production house. Tell us the family, we dress the day."
      />
      <div className="mx-auto max-w-7xl space-y-4 px-5 pb-24 md:px-8">
        {themes.map((theme, index) => (
          <Link
            key={theme.slug}
            href={`/themes/${theme.slug}`}
            className={`group img-zoom grid min-h-[420px] overflow-hidden rounded-3xl md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <MediaFrame
              src={theme.image}
              alt={theme.name}
              className="min-h-[280px] md:min-h-[520px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className={`flex flex-col justify-center p-8 md:p-14 ${
                index === 0 ? "bg-marigold" : index === 1 ? "bg-paper" : "bg-cream"
              }`}
            >
              <p className="text-[0.65rem] tracking-[0.22em] text-garnet uppercase">
                {theme.kicker}
              </p>
              <h2 className="display mt-3 text-5xl md:text-6xl">{theme.name}</h2>
              <p className="mt-5 max-w-md text-lg text-ink-soft">{theme.summary}</p>
              <span className="mt-8 text-[0.7rem] tracking-[0.18em] uppercase">
                Enter the lookbook →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
