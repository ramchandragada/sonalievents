import { site, whatsappHref } from "@/lib/site";

export function MobileActionBar() {
  return (
    <div
      className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-ivory/95 px-3 pt-2 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2">
        <a
          href={`tel:${site.phoneTel}`}
          aria-label={`Call ${site.phoneDisplay}`}
          className="pressable flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink"
        >
          <PhoneIcon />
        </a>
        <a
          href={whatsappHref(
            "Hello Sonali Events, I would like to plan a celebration near Nanded City / Sinhgad Road.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="pressable cta-label flex h-12 min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-wa px-4 text-white hover:bg-wa-bright"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-[0.7rem] font-semibold">
            WA
          </span>
          Plan on WhatsApp
        </a>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7.5 3.75h2.4l1.2 3.6-1.65 1.05a12.6 12.6 0 0 0 5.55 5.55l1.05-1.65 3.6 1.2v2.4A1.5 1.5 0 0 1 18.15 17.4 14.4 14.4 0 0 1 6.6 5.85 1.5 1.5 0 0 1 7.5 3.75Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
