"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, whatsappHref } from "@/lib/site";
import { BrandMark } from "./brand-mark";
import { Magnetic } from "./magnetic";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const overHero = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color,backdrop-filter] duration-500 ${
        overHero
          ? "border-b border-transparent bg-transparent text-paper"
          : scrolled || open
            ? "border-b border-garnet/20 bg-ivory/95 text-ink backdrop-blur-md"
            : "border-b border-transparent bg-ivory text-ink"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <BrandMark light={overHero} />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
              className={`nav-link text-[0.72rem] tracking-[0.18em] uppercase ${
                overHero ? "text-paper/90" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Magnetic>
            <Link
              href={whatsappHref(
                "Hello Sonali Events, I would like to plan a celebration near Nanded City / Sinhgad Road.",
              )}
              className="rounded-full bg-garnet px-5 py-2 text-[0.7rem] tracking-[0.2em] text-paper uppercase transition hover:bg-garnet-deep"
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
        <div className="flex flex-col justify-between bg-ivory px-6 pb-8 text-ink">
          <nav className="flex flex-col gap-1 pt-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="display text-3xl text-ink">
                {item.label}
              </Link>
            ))}
            <Link
              href="/plan"
              className="mt-4 inline-flex w-fit rounded-full bg-garnet px-6 py-2.5 font-serif text-2xl text-paper"
            >
              Plan
            </Link>
          </nav>
          <p className="mt-8 text-sm tracking-wide text-ink-soft">
            {site.address}
            <br />
            {site.phoneDisplay}
          </p>
        </div>
      </div>
    </header>
  );
}
