import Link from "next/link";

export function BrandMark({
  compact = false,
  light = false,
}: {
  compact?: boolean;
  light?: boolean;
}) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Sonali Events">
      <span
        className={`flex shrink-0 items-center justify-center rounded-full bg-garnet font-serif leading-none text-paper transition-[box-shadow] duration-300 group-hover:shadow-[0_0_0_3px_rgba(227,28,121,0.28)] ${
          compact
            ? "h-10 w-10 text-2xl"
            : "h-11 w-11 text-[1.55rem] md:h-12 md:w-12 md:text-[1.7rem]"
        }`}
      >
        S
      </span>
      <span className="flex flex-col justify-center leading-none">
        <span
          className={`font-serif font-medium tracking-tight transition-colors ${
            light ? "text-paper" : "text-garnet"
          } ${compact ? "text-[1.55rem]" : "text-[1.7rem] md:text-[1.85rem]"}`}
        >
          Sonali
        </span>
        <span
          className={`mt-1 text-[0.68rem] font-semibold tracking-[0.38em] uppercase transition-colors ${
            light ? "text-paper/85" : "text-ink"
          }`}
        >
          Events
        </span>
      </span>
    </Link>
  );
}
