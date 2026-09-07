import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Lookbook of celebration atmospheres. Sonali Events Pune.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <PageIntro
        kicker="Lookbook"
        title="Rooms, before the guests arrive."
        body="Atmospheric stills while the archive of 1,000+ Pune celebrations is being added. When the photographs land, this grid becomes the proof."
      />
      <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <GalleryGrid />
      </div>
    </div>
  );
}
