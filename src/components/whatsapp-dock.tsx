import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

export function WhatsappDock() {
  return (
    <Link
      href={whatsappHref("Hello Sonali Events, I would like to plan a celebration in Pune.")}
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full bg-forest px-4 py-3 text-ivory shadow-[0_12px_40px_rgba(27,18,16,0.28)] md:right-6 md:bottom-6"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ivory/15 text-sm">
        WA
      </span>
      <span className="pr-1 text-[0.68rem] tracking-[0.18em] uppercase">
        {site.phoneDisplay}
      </span>
    </Link>
  );
}
