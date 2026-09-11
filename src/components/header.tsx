"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
import { BrandMark } from "./brand-mark";
import { Magnetic } from "./magnetic";
import { EmailLink, WhatsAppButton } from "./cta";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const isHome = pathname === "/";
  const overHero = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (open) {
        setHidden(false);
        lastY.current = y;
        return;
      }
      const goingDown = y > lastY.current;
      setHidden(y > 96 && goingDown);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.dataset.menuOpen = open ? "true" : "";
    return () => {
      document.body.style.overflow = "";
      delete document.documentElement.dataset.menuOpen;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,color,backdrop-filter,box-shadow] duration-200 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${
        overHero
          ? "border-b border-transparent bg-transparent text-paper"
          : scrolled || open
            ? "border-b border-garnet/15 bg-ivory/85 text-ink shadow-[0_8px_30px_-20px_rgba(42,17,64,0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-ivory text-ink"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between px-5 md:px-8">
        <BrandMark light={overHero} />

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
              className={`nav-link text-xs font-semibold tracking-[0.16em] uppercase ${
                overHero ? "text-paper/90" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Magnetic>
            <WhatsAppButton className="px-5 py-2.5" />
          </Magnetic>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
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
        className={`overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-[100dvh]" : "max-h-0"
        }`}
        aria-hidden={!open}
        inert={open ? undefined : true}
      >
        <div className="flex min-h-[calc(100dvh-var(--header-h))] flex-col justify-between bg-ivory px-6 pb-10 text-ink">
          <nav className="flex flex-col gap-1 pt-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-14 items-center font-serif text-3xl text-ink"
              >
                {item.label}
              </Link>
            ))}
            <WhatsAppButton className="mt-6 w-fit" />
          </nav>
          <div className="mt-8 text-base tracking-wide text-ink-soft">
            <p>{site.address}</p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-2 inline-flex min-h-11 items-center underline-offset-4 hover:underline"
            >
              {site.phoneDisplay}
            </a>
            <EmailLink className="mt-1 inline-flex min-h-11 items-center underline-offset-4 hover:underline" />
            <p className="mt-1 text-sm text-ink-muted">{site.hoursDisplay}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
