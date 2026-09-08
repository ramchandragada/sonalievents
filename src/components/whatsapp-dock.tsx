"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, whatsappHref } from "@/lib/site";

export function WhatsappDock() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 700);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <Link
      href={whatsappHref(
        "Hello Sonali Events, I would like to plan a celebration near Nanded City / Sinhgad Road.",
      )}
      aria-label={`Plan on WhatsApp ${site.phoneDisplay}`}
      className={`fixed right-4 bottom-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-all duration-500 md:right-6 md:bottom-6 md:h-auto md:w-auto md:gap-3 md:px-4 md:py-3 ${
        ready ? "scale-100 opacity-100" : "scale-75 opacity-0"
      }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm">
        WA
      </span>
      <span className="hidden pr-1 text-[0.68rem] tracking-[0.18em] uppercase md:inline">
        Plan on WhatsApp
      </span>
    </Link>
  );
}
