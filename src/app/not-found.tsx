import Link from "next/link";
import { WhatsAppButton } from "@/components/cta";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <p className="eyebrow">Missing page</p>
      <h1 className="display mt-4 text-5xl md:text-7xl">This day is not here.</h1>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="pressable cta-label inline-flex min-h-12 items-center rounded-full border border-ink/20 px-6 text-ink"
        >
          Home
        </Link>
        <WhatsAppButton desktopOnly />
      </div>
    </div>
  );
}
