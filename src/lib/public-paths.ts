import { events } from "./events";
import { locations } from "./locations";
import { site } from "./site";
import { themes } from "./themes";

/** Public paths the sitemap and internal indexes must stay aligned with. */
export const staticPaths = [
  "",
  "/events",
  "/themes",
  "/way",
  "/gallery",
  "/about",
  "/plan",
  "/locations",
] as const;

export function publicPaths(): string[] {
  return [
    ...staticPaths,
    ...locations.map((item) => `/locations/${item.slug}`),
    ...events.map((item) => `/events/${item.slug}`),
    ...themes.map((item) => `/themes/${item.slug}`),
  ];
}

export function publicUrl(path: string) {
  return path === "" ? site.url : `${site.url}${path}`;
}
