import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { PageIntro } from "@/components/page-intro";
import { guides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("/guides", {
  title: "Guides — Nanded City & Sinhgad Road",
  description:
    "Planning notes from Sonali Events: a birthday at a Nanded City home or society lawn, and an office party on Sinhgad Road, Pune. WhatsApp +91 89757 60707.",
});

export default function GuidesPage() {
  return (
    <div className="pt-20 md:pt-24">
      <PageIntro
        kicker="Guides"
        title="How a day sits on this road."
        body="Practical notes for the Pune township and the banquet corridor — not Nanded district. A birthday in a Nanded City home or society lawn. An office night on Sinhgad Road."
      />
      <div className="mx-auto grid max-w-7xl gap-2 px-5 pb-12 md:grid-cols-2 md:gap-3 md:px-8 md:pb-24">
        {guides.map((item) => (
          <Link
            key={item.slug}
            href={`/guides/${item.slug}`}
            className="group img-zoom relative min-h-[280px] overflow-hidden md:min-h-[420px]"
          >
            <MediaFrame
              src={item.image}
              alt={item.imageAlt}
              className="absolute inset-0 h-full w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-5 pt-24 md:p-8 md:pt-32">
              <p className="text-[0.58rem] tracking-[0.18em] text-paper/75 uppercase">
                {item.kicker}
              </p>
              <h2 className="display mt-2 text-3xl text-paper md:text-5xl">{item.navLabel}</h2>
              <p className="mt-2 max-w-md text-sm text-paper/85">{item.lede}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
