import type { Metadata } from "next";
import { PlanForm } from "@/components/plan-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan your event",
  description:
    "Start a Pune celebration with Sonali Events. The form opens WhatsApp with your brief.",
};

export default function PlanPage() {
  return (
    <div className="pt-24">
      <PageIntro
        kicker="Begin"
        title="A date, a ritual, a room."
        body={`The brief lands on WhatsApp — ${site.phoneDisplay}. No account, no waiting for email.`}
      />
      <div className="mx-auto grid max-w-7xl gap-16 px-5 pb-24 md:grid-cols-2 md:px-8">
        <PlanForm />
        <div className="self-start rounded-3xl bg-marigold p-8 md:p-10">
          <p className="font-serif text-3xl">What happens next</p>
          <ol className="mt-6 space-y-4 text-ink-soft">
            <li>01 · We reply in Marathi, Hindi, or English.</li>
            <li>02 · A short discovery on call or at Nanded City.</li>
            <li>03 · Theme board, venue options, estimate.</li>
            <li>04 · A named team for your kind of event.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
