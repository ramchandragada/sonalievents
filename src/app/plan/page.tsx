import type { Metadata } from "next";
import {
  EmailLink,
  GoogleMapsLink,
  GoogleReviewLink,
  JustdialLink,
} from "@/components/cta";
import { PlanForm } from "@/components/plan-form";
import { PageIntro } from "@/components/page-intro";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta("/plan", {
  title: "Plan",
  description:
    "Start a celebration near Nanded City or Sinhgad Road with Sonali Events. The form opens WhatsApp with your brief.",
});

export default function PlanPage() {
  return (
    <div className="pt-20 md:pt-24">
      <PageIntro
        kicker="Begin"
        title="Date, tradition, and where."
        body={`${site.oneWindowLine} The brief lands on WhatsApp — ${site.phoneDisplay} — or email ${site.email}.`}
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 pb-12 md:grid-cols-2 md:gap-16 md:px-8 md:pb-24">
        <PlanForm />
        <div className="self-start border-t border-ink/10 p-5 md:p-10">
          <p className="font-serif text-3xl">What happens next</p>
          <ol className="mt-6 space-y-4 text-ink-soft">
            <li>01 · We reply in Marathi, Hindi, or English.</li>
            <li>02 · A short discovery on call or at Nanded City.</li>
            <li>03 · Theme board, venue options, clear estimate.</li>
            <li>04 · A team for your kind of event near Nanded City / Sinhgad Road.</li>
          </ol>
          <div className="mt-10 border-t border-ink/10 pt-6 text-sm text-ink-soft">
            <p className="eyebrow">Reach us</p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-3 flex min-h-11 items-center underline-offset-4 hover:text-garnet hover:underline"
            >
              WhatsApp / call {site.phoneDisplay}
            </a>
            <EmailLink className="flex min-h-11 items-center underline-offset-4 hover:text-garnet hover:underline" />
            <p className="mt-2">{site.hoursDisplay}</p>
            <p className="mt-4">
              <GoogleMapsLink className="underline-offset-4 hover:text-garnet hover:underline" />
              {" · "}
              <GoogleReviewLink className="underline-offset-4 hover:text-garnet hover:underline" />
            </p>
            <p className="mt-2 text-ink-muted">
              Also listed on{" "}
              <JustdialLink className="underline-offset-4 hover:text-garnet hover:underline" />
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
