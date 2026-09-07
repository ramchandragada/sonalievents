import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

export function WhatsappDock() {
  return (
    <Link
      href={whatsappHref("Hello Sonali Events, I would like to plan a celebration in Pune.")}
      aria-label={`Chat on WhatsApp ${site.phoneDisplay}`}
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] md:right-6 md:bottom-6 md:h-auto md:w-auto md:gap-3 md:px-4 md:py-3"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm">
        WA
      </span>
      <span className="hidden pr-1 text-[0.68rem] tracking-[0.18em] uppercase md:inline">
        {site.phoneDisplay}
      </span>
    </Link>
  );
}
