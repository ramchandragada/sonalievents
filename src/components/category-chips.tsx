import Link from "next/link";
import { events } from "@/lib/events";

export function CategoryChips() {
  return (
    <div className="border-y border-ink/10 bg-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-5 py-4 md:px-8 md:py-5">
        {events.map((item) => (
          <Link
            key={item.slug}
            href={`/events/${item.slug}`}
            className="pressable inline-flex min-h-11 items-center rounded-full border border-ink/15 bg-paper px-4 text-xs font-semibold tracking-[0.14em] text-ink uppercase transition hover:border-garnet/40 hover:text-garnet-deep"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
