import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { WorkGallery } from "@/components/work-gallery";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { getGallerySets } from "@/lib/work-media";

export const metadata: Metadata = pageMeta("/gallery", {
  title: "Gallery",
  description:
    "Photographs and films from Sonali Events celebrations near Nanded City and Sinhgad Road.",
});

export default function GalleryPage() {
  const { featured, rest } = getGallerySets();

  return (
    <div className="pt-20 md:pt-24">
      <PageIntro
        kicker="From the floor"
        title="The work, as it happened."
        body={
          featured.length === 0
            ? "Photographs from days we hold will appear here."
            : `A selection of real days near Nanded City and Sinhgad Road — not every file on a phone. ${site.honestLine}`
        }
      />
      <div className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-24">
        <WorkGallery featured={featured} rest={rest} />
      </div>
    </div>
  );
}
