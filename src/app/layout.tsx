import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { Providers } from "@/components/providers";
import { businessJsonLd, shareImages } from "@/lib/seo";
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
    default: "Sonali Events · Nanded City & Sinhgad Road",
    template: "%s · Sonali Events",
  },
  description:
    "Event management from Nanded City and Sinhgad Road. Birthdays, namkaran, engagements, marriages, housewarming, munj, office parties. 1,000+ celebrations. Nearby Pune.",
  keywords: [
    "event planner Nanded City",
    "event planner Sinhgad Road",
    "wedding planner Pune",
    "Sonali Events",
    "naming ceremony Pune",
    "Nanded City events",
    "Sinhgad Road event management",
  ],
  openGraph: {
    title: "Sonali Events · You live the day. We hold it.",
    description:
      "1,000+ celebrations from Nanded City and Sinhgad Road. Maharashtrian, North Indian, and South Indian themes.",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    ...shareImages.openGraph,
  },
  twitter: shareImages.twitter,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#e31c79",
  viewportFit: "cover",
};

const jsonLd = businessJsonLd;

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
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-garnet focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          <Header />
          <main
            id="main"
            className="flex-1 pb-[calc(4.25rem+env(safe-area-inset-bottom))] md:pb-0"
          >
            {children}
          </main>
          <Footer />
          <MobileActionBar />
        </Providers>
      </body>
    </html>
  );
}
