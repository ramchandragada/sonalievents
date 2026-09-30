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
    default:
      "Event Management Company in Nanded City & Sinhgad Road, Pune | Sonali Events",
    template: "%s · Sonali Events",
  },
  description:
    "Event management company and event planner in Nanded City, Pune — the Sinhgad Road township, also spelled Sinhagad Road, not Nanded district. Birthdays, weddings, parties. WhatsApp +91 89757 60707.",
  keywords: [
    "event management company Nanded City Pune",
    "event planner Nanded City Pune",
    "birthday planner Nanded City",
    "wedding planner Sinhgad Road Pune",
    "wedding planner Sinhagad Road Pune",
    "event management Sinhgad Road Pune",
    "event management Sinhagad Road",
    "party planner Nanded City Pune",
    "Sonali Events",
  ],
  openGraph: {
    title:
      "Event Management Company in Nanded City & Sinhgad Road, Pune | Sonali Events",
    description:
      "Event management company and event planner in Nanded City, Pune — the Sinhgad Road township, also spelled Sinhagad Road, not Nanded district. Birthdays, weddings, parties.",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    ...shareImages.openGraph,
  },
  twitter: shareImages.twitter,
  robots: { index: true, follow: true },
  verification: {
    google: "2l7q61AQH6iUq_D0-McGPI754pL1d-4SPhRMzGId4a0",
    other: {
      "msvalidate.01": "A6DBD23F32B3EB7EECA90F3BD991D48B",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#c91868",
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
