import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Sonali Events",
    description:
      "Event management from Nanded City and Sinhgad Road. Birthdays, namkaran, marriages, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff6ef",
    theme_color: "#e31c79",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
