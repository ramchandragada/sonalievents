import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { PageIntro } from "@/components/page-intro";
import { locations } from "@/lib/locations";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("/locations", {
  title: "Nanded City & Sinhgad Road",
  description:
    "Event management in Nanded City (Pune township) and on Sinhgad Road — homes, society lawns, and banquet halls. Not Nanded district. WhatsApp +91 89757 60707.",
});

export default function LocationsPage() {
  return (
    <div className="pt-20 md:pt-24">
      <PageIntro
        kicker="Where we work"
        title="Nanded City and Sinhgad Road."
        body="Two stretches of the same Pune road. The township of homes and lawns, and the banquet corridor. Not Nanded district in Marathwada."
      />
      <div className="mx-auto grid max-w-7xl gap-2 px-5 pb-12 md:grid-cols-2 md:gap-3 md:px-8 md:pb-24">
        {locations.map((item) => (
          <Link
            key={item.slug}
            href={`/locations/${item.slug}`}
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
              <p className="mt-2 max-w-sm text-sm text-paper/85">{item.lede}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
