import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { pageMeta } from "@/lib/seo";
import { steps } from "@/lib/site";

export const metadata: Metadata = pageMeta("/way", {
  title: "The Sonali way",
  description:
    "How Sonali Events plans and delivers celebrations from Nanded City and Sinhgad Road — from first WhatsApp to show-calling.",
});

export default function WayPage() {
  return (
    <div className="pt-20 md:pt-24">
      <PageIntro
        kicker="Method"
        title="The day has a sequence."
        body="You decide the date, the tradition, the guest count, and where the function is — at home, society lawn, or banquet hall. The same six steps for a birthday and a wedding week. Only the depth changes. Different teams can run on the same Saturday near Nanded City and Sinhgad Road without borrowing each other’s people."
      />
      <div className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-24">
        <ol className="grid gap-2 md:grid-cols-2 md:gap-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="border-t border-ink/10 p-4 md:p-12"
            >
              <p className="eyebrow">
                {step.n}
              </p>
              <h2 className="display mt-2 text-3xl md:mt-4 md:text-5xl">{step.title}</h2>
              <p className="mt-2 max-w-md text-sm text-ink-soft md:mt-4 md:text-base">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
