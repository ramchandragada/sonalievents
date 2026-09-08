export function PageIntro({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-6 md:px-8 md:pb-12">
      <p className="eyebrow">{kicker}</p>
      <h1 className="display mt-3 max-w-4xl text-4xl sm:text-5xl md:mt-4 lg:text-7xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:mt-6 md:text-lg">
        {body}
      </p>
    </div>
  );
}
