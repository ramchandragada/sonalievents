import type { MetadataRoute } from "next";
import { events } from "@/lib/events";
import { site } from "@/lib/site";
import { themes } from "@/lib/themes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/events", "/themes", "/way", "/gallery", "/about", "/plan"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
    }),
  );
  const eventRoutes = events.map((item) => ({
    url: `${site.url}/events/${item.slug}`,
    lastModified: now,
  }));
  const themeRoutes = themes.map((item) => ({
    url: `${site.url}/themes/${item.slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...eventRoutes, ...themeRoutes];
}
