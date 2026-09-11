import type { FaqItem } from "@/lib/seo";

export function FaqList({
  items,
  title = "Questions we hear",
}: {
  items: FaqItem[];
  title?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="mt-12 border-t border-ink/10 pt-10 md:mt-16 md:pt-14">
      <p className="eyebrow">Ask plainly</p>
      <h2 className="display mt-2 text-3xl md:text-5xl">{title}</h2>
      <dl className="mt-8 space-y-6">
        {items.map((item) => (
          <div key={item.q} className="border-t border-ink/10 pt-4">
            <dt className="font-serif text-2xl text-ink md:text-3xl">{item.q}</dt>
            <dd className="mt-2 max-w-2xl text-base leading-relaxed text-ink-soft">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
