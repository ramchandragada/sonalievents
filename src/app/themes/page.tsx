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
    <div className="pt-20 md:pt-24">
      <PageIntro
        kicker="How a room feels"
        title="Maharashtrian. North Indian. South Indian."
        body="Three design languages, one production house. Tell us the family, we dress the day."
      />
      <div className="mx-auto max-w-7xl space-y-2 px-5 pb-12 md:px-8 md:pb-24 md:space-y-3">
        {themes.map((theme, index) => (
          <Link
            key={theme.slug}
            href={`/themes/${theme.slug}`}
            className={`group img-zoom grid min-h-0 overflow-hidden md:min-h-[420px] md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <MediaFrame
              src={theme.image}
              alt={theme.name}
              className="min-h-[140px] md:min-h-[520px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="flex flex-col justify-center bg-paper p-4 md:p-14">
              <p className="text-[0.65rem] tracking-[0.22em] text-garnet uppercase">
                {theme.kicker}
              </p>
              <h2 className="display mt-2 text-3xl md:mt-3 md:text-6xl">{theme.name}</h2>
              <p className="mt-2 max-w-md text-sm text-ink-soft md:mt-5 md:text-lg">{theme.summary}</p>
              <span className="mt-4 text-[0.7rem] tracking-[0.18em] uppercase md:mt-8">
                Enter the lookbook →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
