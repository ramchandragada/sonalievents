import type { Metadata } from "next";
import { site } from "./site";

const ogImage = {
  url: "/og/sonali-events-cover.jpg",
  width: 1200,
  height: 630,
  alt: "Sonali Events — Nanded City and Sinhgad Road celebrations",
};

export function pageMeta(path: string, extra: Metadata = {}): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  return {
    ...extra,
    alternates: { canonical: url, ...extra.alternates },
    openGraph: {
      url,
      images: [ogImage],
      ...extra.openGraph,
    },
  };
}

export const shareImages = {
  openGraph: {
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image" as const,
    images: [ogImage.url],
  },
};

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "EventPlanningBusiness",
  name: site.name,
  url: site.url,
  image: `${site.url}${ogImage.url}`,
  telephone: site.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nanded City, Sinhgad Road",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411068",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.4486,
    longitude: 73.8078,
  },
  founder: {
    "@type": "Person",
    name: site.proprietor,
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Nanded City, Sinhgad Road, Pune",
    },
    {
      "@type": "City",
      name: "Pune",
    },
  ],
};

export function eventJsonLd(item: {
  name: string;
  summary: string;
  slug: string;
  image: string;
}) {
  const url = `${site.url}/events/${item.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Events", item: `${site.url}/events` },
        { "@type": "ListItem", position: 3, name: item.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${item.name} — ${site.name}`,
      description: item.summary,
      image: `${site.url}${item.image}`,
      provider: { "@type": "EventPlanningBusiness", name: site.name, url: site.url },
      areaServed: "Nanded City, Sinhgad Road, and nearby Pune",
      url,
    },
  ];
}
