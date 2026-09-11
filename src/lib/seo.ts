import type { Metadata } from "next";
import type { LocationPage } from "./locations";
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
  sameAs: [site.googleMaps],
  areaServed: [
    {
      "@type": "Place",
      name: "Nanded City, Pune",
    },
    {
      "@type": "Place",
      name: "Sinhgad Road, Pune",
    },
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

export type FaqItem = {
  q: string;
  a: string;
};

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function locationJsonLd(item: LocationPage) {
  const url = `${site.url}/locations/${item.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${site.url}/locations` },
        { "@type": "ListItem", position: 3, name: item.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "EventPlanningBusiness",
      name: site.name,
      url,
      image: `${site.url}${item.image}`,
      telephone: site.phoneTel,
      address: businessJsonLd.address,
      geo: businessJsonLd.geo,
      areaServed: item.areaServed,
      parentOrganization: {
        "@type": "EventPlanningBusiness",
        name: site.name,
        url: site.url,
      },
    },
  ];
}

export function eventJsonLd(item: {
  name: string;
  summary: string;
  slug: string;
  image: string;
  faqs?: FaqItem[];
}) {
  const url = `${site.url}/events/${item.slug}`;
  const blocks: Record<string, unknown>[] = [
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
  if (item.faqs?.length) {
    blocks.push(faqJsonLd(item.faqs));
  }
  return blocks;
}

export function guideJsonLd(item: {
  slug: string;
  title: string;
  description: string;
  h1: string;
  image: string;
  published: string;
  faqs?: FaqItem[];
}) {
  const url = `${site.url}/guides/${item.slug}`;
  const blocks: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/guides` },
        { "@type": "ListItem", position: 3, name: item.h1, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: item.h1,
      name: item.title,
      description: item.description,
      image: `${site.url}${item.image}`,
      datePublished: item.published,
      dateModified: item.published,
      author: { "@type": "Organization", name: site.name, url: site.url },
      publisher: { "@type": "Organization", name: site.name, url: site.url },
      mainEntityOfPage: url,
      about: {
        "@type": "EventPlanningBusiness",
        name: site.name,
        url: site.url,
      },
    },
  ];
  if (item.faqs?.length) {
    blocks.push(faqJsonLd(item.faqs));
  }
  return blocks;
}
