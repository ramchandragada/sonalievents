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
    <div className="mx-auto max-w-7xl px-5 pb-12 md:px-8">
      <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
        {kicker}
      </p>
      <h1 className="display mt-4 max-w-4xl text-5xl md:text-7xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft/80">
        {body}
      </p>
    </div>
  );
}
