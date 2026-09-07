import Link from "next/link";
import { events } from "@/lib/events";
import { nav, site, whatsappHref } from "@/lib/site";
import { themes } from "@/lib/themes";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="pointer-events-none absolute -right-24 -bottom-28 font-serif text-[28vw] leading-none text-ivory/5">
        SE
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-brass">
            Pune · Nanded City
          </p>
          <h2 className="display mt-4 text-5xl md:text-6xl">
            Ready when you are.
          </h2>
          <p className="mt-5 max-w-sm text-ivory/70">
            {site.proprietor} and her teams. Venue, décor, food, music, dance,
            invitations, games.
          </p>
          <Link
            href={whatsappHref(
              "Hello Sonali Events, I would like to plan a celebration.",
            )}
            className="mt-8 inline-flex rounded-full bg-brass px-6 py-3 text-[0.7rem] tracking-[0.2em] text-ink uppercase"
          >
            WhatsApp {site.phoneDisplay}
          </Link>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] text-brass uppercase">
              Visit
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/80">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/plan" className="hover:text-ivory">
                  Plan your event
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] text-brass uppercase">
              Events
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/80">
              {events.map((item) => (
                <li key={item.slug}>
                  <Link href={`/events/${item.slug}`} className="hover:text-ivory">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] text-brass uppercase">
              House
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/80">
              {themes.map((item) => (
                <li key={item.slug}>
                  <Link href={`/themes/${item.slug}`} className="hover:text-ivory">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 text-ivory/60">
                {site.address}
                <br />
                Proprietorship
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10 px-5 py-5 text-[0.7rem] tracking-[0.16em] text-ivory/45 uppercase md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
