"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, whatsappHref } from "@/lib/site";
import { Magnetic } from "./magnetic";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const overHero = pathname === "/" && !scrolled;
  const light = overHero || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,color,box-shadow] duration-500 ${
        open
          ? "bg-garnet-deep text-ivory"
          : overHero
            ? "bg-transparent text-ivory"
            : "bg-ivory/80 text-ink shadow-[0_1px_0_rgba(27,18,16,0.08)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight md:text-[1.7rem]">
            Sonali
          </span>
          <span className="text-[0.65rem] tracking-[0.28em] uppercase opacity-70">
            Events
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
              className="nav-link text-[0.72rem] tracking-[0.18em] uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Magnetic>
            <Link
              href={whatsappHref(
                "Hello Sonali Events, I would like to plan a celebration in Pune.",
              )}
              className={`rounded-full px-5 py-2 text-[0.7rem] tracking-[0.2em] uppercase transition ${
                overHero
                  ? "bg-ivory text-garnet-deep hover:bg-brass hover:text-ink"
                  : "bg-garnet text-ivory hover:bg-garnet-deep"
              }`}
            >
              Plan an event
            </Link>
          </Magnetic>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`h-px w-6 origin-center bg-current transition ${open ? "translate-y-[4px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-current transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 origin-center bg-current transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-screen" : "max-h-0"
        }`}
        aria-hidden={!open}
        inert={open ? undefined : true}
      >
        <div className="flex min-h-[calc(100dvh-4rem)] flex-col justify-between bg-garnet-deep px-6 pb-10 text-ivory">
          <nav className="flex flex-col gap-2 pt-6">
            {nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="display text-5xl"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/plan" className="display text-5xl">
              Plan
            </Link>
          </nav>
          <p className="text-sm tracking-wide text-ivory/70">
            {site.address}
            <br />
            {site.phoneDisplay}
          </p>
        </div>
      </div>
    </header>
  );
}
