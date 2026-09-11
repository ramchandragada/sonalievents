import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { GoogleReviewLink, WhatsAppButton } from "./cta";
import { events } from "@/lib/events";
import { locations } from "@/lib/locations";
import { nav, site } from "@/lib/site";
import { themes } from "@/lib/themes";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper pb-[calc(1rem+env(safe-area-inset-bottom))] text-ink md:pb-16">
      <div className="h-px bg-garnet" />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 md:grid-cols-12 md:gap-12 md:px-8 md:py-16">
        <div className="md:col-span-5">
          <BrandMark compact />
          <p className="mt-5 max-w-sm text-ink-soft">
            {site.houseLine} Venue, décor, food, music, dance, invitations,
            games. Based at {site.address}.
          </p>
          <WhatsAppButton className="mt-6" desktopOnly />
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-3 hidden min-h-11 items-center text-sm text-ink-soft underline-offset-4 hover:text-garnet hover:underline md:flex"
          >
            Call {site.phoneDisplay}
          </a>
          <GoogleReviewLink className="mt-3 flex min-h-11 items-center text-sm text-ink-soft underline-offset-4 hover:text-garnet hover:underline" />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
          <div>
            <p className="eyebrow">Visit</p>
            <ul className="mt-4 space-y-1 text-sm text-ink-soft">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center hover:text-garnet"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/plan"
                  className="inline-flex min-h-11 items-center hover:text-garnet"
                >
                  Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="inline-flex min-h-11 items-center hover:text-garnet"
                >
                  See the work
                </Link>
              </li>
              <li className="pt-3">
                <Link
                  href="/locations"
                  className="inline-flex min-h-11 items-center font-semibold text-ink hover:text-garnet"
                >
                  Locations
                </Link>
              </li>
              {locations.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/locations/${item.slug}`}
                    className="inline-flex min-h-11 items-center hover:text-garnet"
                  >
                    {item.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:block">
            <p className="eyebrow">Events</p>
            <ul className="mt-4 space-y-1 text-sm text-ink-soft">
              {events.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/events/${item.slug}`}
                    className="inline-flex min-h-11 items-center hover:text-garnet"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">House</p>
            <ul className="mt-4 space-y-1 text-sm text-ink-soft">
              {themes.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/themes/${item.slug}`}
                    className="inline-flex min-h-11 items-center hover:text-garnet"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 text-ink-muted">{site.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-garnet/15 bg-ivory px-5 py-5 text-[0.7rem] tracking-[0.16em] text-ink-muted uppercase md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
