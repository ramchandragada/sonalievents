import Image from "next/image";
import Link from "next/link";

export function BrandMark({
  compact = false,
  light = false,
}: {
  compact?: boolean;
  light?: boolean;
}) {
  const size = compact ? 40 : 48;

  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Sonali Events">
      <span
        className={`relative shrink-0 overflow-hidden rounded-full transition-[box-shadow] duration-300 group-hover:shadow-[0_0_0_3px_rgba(201,24,104,0.28)] ${
          compact ? "h-10 w-10" : "h-11 w-11 md:h-12 md:w-12"
        }`}
      >
        <Image
          src="/brand/mark-192.png"
          alt=""
          width={size}
          height={size}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      <span className="flex flex-col justify-center leading-none">
        <span
          className={`font-serif font-medium tracking-[-0.03em] transition-colors ${
            light ? "text-paper" : "text-garnet"
          } ${compact ? "text-[1.5rem]" : "text-[1.65rem] md:text-[1.8rem]"}`}
        >
          Sonali
        </span>
        <span
          className={`mt-1 text-[0.7rem] font-semibold tracking-[0.34em] uppercase transition-colors ${
            light ? "text-paper/85" : "text-ink"
          }`}
        >
          Events
        </span>
      </span>
    </Link>
  );
}
