import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { WorkGallery } from "@/components/work-gallery";
import { pageMeta } from "@/lib/seo";
import { getWorkMedia } from "@/lib/work-media";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta("/gallery", {
  title: "Gallery",
  description:
    "Photographs and films from Sonali Events celebrations in Pune.",
});

export default function GalleryPage() {
  const items = getWorkMedia();
  const photos = items.filter((item) => item.kind === "photo").length;
  const films = items.filter((item) => item.kind === "video").length;

  return (
    <div className="pt-20 md:pt-24">
      <PageIntro
        kicker="From the floor"
        title="The work, as it happened."
        body={
          items.length === 0
            ? "Drop photographs and videos into the photos and videos folder, then refresh."
            : `${photos} photograph${photos === 1 ? "" : "s"} and ${films} film${films === 1 ? "" : "s"} from Pune celebrations. New files in the photos and videos folder appear here after a refresh.`
        }
      />
      <div className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-24">
        <WorkGallery items={items} />
      </div>
    </div>
  );
}
