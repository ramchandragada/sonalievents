import type { MetadataRoute } from "next";
import { publicPaths, publicUrl } from "@/lib/public-paths";

/**
 * Build-time static sitemap. `new Date()` used to opt this metadata route
 * into dynamic/ISR rendering; cache misses then 500'd while robots.txt
 * still advertised /sitemap.xml. Force-static + no request-time Date keeps
 * the XML a CDN file generated at build.
 */
export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths().map((path) => ({
    url: publicUrl(path),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/locations") || path.startsWith("/guides")
          ? 0.8
          : 0.6,
  }));
}
