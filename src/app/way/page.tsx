import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { pageMeta } from "@/lib/seo";
import { steps } from "@/lib/site";

export const metadata: Metadata = pageMeta("/way", {
  title: "The Sonali way",
  description:
    "How Sonali Events plans and delivers celebrations in Pune — from first WhatsApp to show-calling.",
});

export default function WayPage() {
  return (
    <div className="pt-24">
      <PageIntro
        kicker="Method"
        title="The day has a sequence."
        body="The same six-stage file for a birthday and a wedding week. Only the depth changes. Multiple teams mean two celebrations can run on the same weekend without borrowing each other’s crew."
      />
      <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <ol className="grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <li
              key={step.n}
              className="border-t border-ink/10 p-8 md:p-12"
            >
              <p className="text-garnet">{step.n}</p>
              <h2 className="display mt-4 text-4xl md:text-5xl">{step.title}</h2>
              <p className="mt-4 max-w-md text-ink-soft/80">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
