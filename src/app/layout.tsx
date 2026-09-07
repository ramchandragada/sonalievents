import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Grain } from "@/components/grain";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { WhatsappDock } from "@/components/whatsapp-dock";
import { site } from "@/lib/site";
import "lenis/dist/lenis.css";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sonali Events · Pune event management",
    template: "%s · Sonali Events",
  },
  description:
    "End-to-end event management in Pune. Birthdays, namkaran, engagements, marriages, housewarming, munj, office parties. 1,000+ celebrations. Nanded City, Sinhgad Road.",
  keywords: [
    "event planner Pune",
    "wedding planner Pune",
    "Sonali Events",
    "naming ceremony Pune",
    "Nanded City events",
    "Sinhgad Road event management",
  ],
  openGraph: {
    title: "Sonali Events · You live the day. We hold it.",
    description:
      "1,000+ Pune celebrations. Maharashtrian, North Indian, and South Indian themes. Nanded City, Sinhgad Road.",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventPlanningBusiness",
  name: site.name,
  url: site.url,
  telephone: site.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nanded City, Sinhgad Road",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: site.proprietor,
  },
  areaServed: "Pune",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Grain />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsappDock />
        </Providers>
      </body>
    </html>
  );
}
