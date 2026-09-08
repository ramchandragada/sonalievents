"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { whatsappHref } from "@/lib/site";

const FUNCTIONS = [
  "Birthday",
  "Naming ceremony",
  "Engagement",
  "Marriage",
  "Housewarming",
  "Thread ceremony",
  "Office party",
  "Celebration party",
] as const;

const VENUES = [
  { value: "At home", label: "At home" },
  { value: "Society lawn / clubhouse", label: "Society lawn / clubhouse" },
  { value: "Banquet / marriage hall", label: "Banquet / marriage hall" },
] as const;

export function InquiryBar() {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [fn, setFn] = useState("");
  const [guests, setGuests] = useState("");
  const [venue, setVenue] = useState("");

  useEffect(() => {
    if (!open) return;
    document.documentElement.dataset.sheetOpen = "true";
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      delete document.documentElement.dataset.sheetOpen;
      document.body.style.overflow = prev;
    };
  }, [open]);

  function compose() {
    const lines = [
      `Hi Sonali — I'd like to plan a ${fn || "celebration"}.`,
      guests && `~${guests} guests`,
      venue && `Function at: ${venue}`,
      "Near Nanded City / Sinhgad Road.",
    ].filter(Boolean);
    return whatsappHref(lines.join(" "));
  }

  function close() {
    setOpen(false);
    setStep(0);
  }

  function goWhatsApp() {
    window.open(compose(), "_blank", "noopener,noreferrer");
    close();
  }

  return (
    <>
      <form
        className="mx-auto hidden max-w-7xl grid-cols-[1.2fr_0.8fr_1.2fr_auto] items-end gap-4 border-l-4 border-l-garnet bg-paper/95 p-5 shadow-[0_20px_60px_-28px_rgba(42,17,64,0.35)] backdrop-blur-sm md:grid"
        onSubmit={(event) => {
          event.preventDefault();
          goWhatsApp();
        }}
      >
        <Field label="Celebration">
          <select
            value={fn}
            onChange={(e) => setFn(e.target.value)}
            className="field-input"
          >
            <option value="">Any celebration</option>
            {FUNCTIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Guests">
          <input
            inputMode="numeric"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="80"
            className="field-input"
          />
        </Field>
        <Field label="Function at">
          <select
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="field-input"
          >
            <option value="">Not decided yet</option>
            {VENUES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
        <button
          type="submit"
          className="pressable cta-label min-h-12 rounded-full bg-wa px-7 text-white hover:bg-wa-bright"
        >
          Plan on WhatsApp
        </button>
      </form>

      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="pressable flex w-full items-center justify-between gap-3 border-l-4 border-l-garnet bg-paper px-4 py-4 text-left shadow-[0_16px_40px_-24px_rgba(42,17,64,0.35)]"
        >
          <span>
            <span className="eyebrow">Plan in 3 taps</span>
            <span className="mt-1 block font-serif text-2xl text-ink">
              Start your brief
            </span>
          </span>
          <span className="cta-label rounded-full bg-wa px-4 py-2.5 text-white">
            Open
          </span>
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[70] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/55 backdrop-blur-[3px]"
            aria-label="Close planner"
            onClick={close}
          />
          <div className="sheet absolute inset-x-0 bottom-0 flex max-h-[88dvh] flex-col rounded-t-[1.75rem] bg-ivory shadow-[0_-24px_80px_rgba(42,17,64,0.28)]">
            <div className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-ink/15" />
            <div className="flex items-start justify-between gap-3 px-5 pt-4 pb-2">
              <div className="min-w-0">
                <p className="eyebrow">Step {step + 1} of 3</p>
                <h2 id={titleId} className="display mt-1 text-[1.85rem] text-ink">
                  {step === 0 && "What are you celebrating?"}
                  {step === 1 && "About how many guests?"}
                  {step === 2 && "Where is the function?"}
                </h2>
              </div>
              <button
                type="button"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-base text-ink"
                aria-label="Close"
                onClick={close}
              >
                ✕
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-3">
              {step === 0 ? (
                <div className="grid grid-cols-2 gap-2.5">
                  {FUNCTIONS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setFn(item);
                        setStep(1);
                      }}
                      className={`pressable min-h-12 rounded-2xl border px-3 py-3 text-left text-sm ${
                        fn === item
                          ? "border-garnet-deep bg-garnet/8 text-ink"
                          : "border-ink/10 bg-paper text-ink"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              ) : null}

              {step === 1 ? (
                <input
                  inputMode="numeric"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="e.g. 80"
                  className="sheet-input min-h-14 w-full rounded-2xl border border-ink/12 bg-paper px-4 text-lg text-ink outline-none"
                  autoFocus
                />
              ) : null}

              {step === 2 ? (
                <div className="space-y-2.5">
                  {VENUES.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setVenue(item.value)}
                      className={`pressable flex min-h-12 w-full items-center rounded-2xl border px-4 text-left text-sm ${
                        venue === item.value
                          ? "border-garnet-deep bg-garnet/8"
                          : "border-ink/10 bg-paper"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setVenue("")}
                    className={`pressable flex min-h-12 w-full items-center rounded-2xl border px-4 text-left text-sm ${
                      venue === ""
                        ? "border-garnet-deep bg-garnet/8"
                        : "border-ink/10 bg-paper"
                    }`}
                  >
                    Not decided yet
                  </button>
                </div>
              ) : null}
            </div>

            {/* Always-visible actions — never under the WhatsApp dock */}
            {step > 0 ? (
              <div
                className="shrink-0 border-t border-ink/8 bg-ivory px-5 pt-3"
                style={{
                  paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
                }}
              >
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="pressable min-h-12 flex-1 rounded-full border border-ink/15 text-sm font-semibold text-ink"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                  >
                    Back
                  </button>
                  {step === 1 ? (
                    <button
                      type="button"
                      className="pressable cta-label min-h-12 flex-[1.6] rounded-full bg-wa text-white hover:bg-wa-bright"
                      onClick={() => setStep(2)}
                    >
                      Next
                    </button>
                  ) : (
                    <a
                      href={compose()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pressable cta-label flex min-h-12 flex-[1.6] items-center justify-center rounded-full bg-wa text-white hover:bg-wa-bright"
                      onClick={close}
                    >
                      Plan on WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div
                className="shrink-0"
                style={{
                  paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
                }}
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-xs font-semibold tracking-[0.16em] uppercase">
      {label}
      {children}
    </label>
  );
}
