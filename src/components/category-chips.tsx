import Link from "next/link";
import { events } from "@/lib/events";

export function CategoryChips() {
  return (
    <div className="border-y border-ink/10 bg-ivory">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:justify-center md:overflow-visible md:px-8 md:py-4 [&::-webkit-scrollbar]:hidden">
        {events.map((item) => (
          <Link
            key={item.slug}
            href={`/events/${item.slug}`}
            className="pressable inline-flex min-h-11 shrink-0 items-center rounded-full border border-ink/15 bg-paper px-4 text-[0.68rem] tracking-[0.16em] text-ink uppercase transition hover:border-garnet/40 hover:text-garnet"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
