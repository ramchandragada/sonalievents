import Link from "next/link";
import { events } from "@/lib/events";
import { nav, site, whatsappHref } from "@/lib/site";
import { themes } from "@/lib/themes";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper text-ink">
      <div className="h-2 bg-garnet" />
      <div className="h-2 bg-marigold" />
      <div className="h-2 bg-forest" />
      <div className="pointer-events-none absolute -right-10 -bottom-16 font-serif text-[28vw] leading-none text-garnet/10">
        SE
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
            Pune · Nanded City
          </p>
          <h2 className="display mt-4 text-5xl md:text-6xl">
            Ready when you are.
          </h2>
          <p className="mt-5 max-w-sm text-ink-soft">
            {site.proprietor} and her teams. Venue, décor, food, music, dance,
            invitations, games.
          </p>
          <Link
            href={whatsappHref(
              "Hello Sonali Events, I would like to plan a celebration.",
            )}
            className="mt-8 inline-flex rounded-full bg-garnet px-6 py-3 text-[0.7rem] tracking-[0.2em] text-paper uppercase"
          >
            WhatsApp {site.phoneDisplay}
          </Link>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] text-brass uppercase">
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
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] text-forest uppercase">
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
