import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { events } from "@/lib/events";
import { nav, site, whatsappHref } from "@/lib/site";
import { themes } from "@/lib/themes";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper pb-8 text-ink md:pb-16">
      <div className="h-px bg-garnet" />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 md:grid-cols-12 md:gap-12 md:px-8 md:py-16">
        <div className="md:col-span-5">
          <BrandMark compact />
          <p className="mt-5 max-w-sm text-ink-soft">
            {site.houseLine} Venue, décor, food, music, dance, invitations,
            games. Based at {site.address}.
          </p>
          <Link
            href={whatsappHref(
              "Hello Sonali Events, I would like to plan a celebration near Nanded City / Sinhgad Road.",
            )}
            className="mt-6 inline-flex rounded-full bg-garnet px-6 py-3 text-[0.7rem] tracking-[0.2em] text-paper uppercase"
          >
            WhatsApp {site.phoneDisplay}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] text-garnet uppercase">
              Visit
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-garnet">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/plan" className="hover:text-garnet">
                  Plan your event
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden sm:block">
            <p className="text-[0.65rem] tracking-[0.22em] text-garnet uppercase">
              Events
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {events.map((item) => (
                <li key={item.slug}>
                  <Link href={`/events/${item.slug}`} className="hover:text-garnet">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] text-garnet uppercase">
              House
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {themes.map((item) => (
                <li key={item.slug}>
                  <Link href={`/themes/${item.slug}`} className="hover:text-garnet">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 text-ink-soft/80">
                {site.address}
                <br />
                Proprietorship
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-garnet/15 bg-cream/50 px-5 py-5 text-[0.7rem] tracking-[0.16em] text-ink-soft uppercase md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
