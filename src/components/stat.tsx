export function Stat({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="border-t border-ink/10 py-4 md:py-8">
      <p
        className={`display leading-none ${
          accent
            ? "text-4xl text-garnet md:text-6xl"
            : "text-2xl text-ink md:text-4xl"
        }`}
      >
        {value}
      </p>
      <p className="mt-2 text-[0.62rem] leading-snug tracking-[0.14em] text-ink-muted uppercase md:text-[0.7rem] md:tracking-[0.18em]">
        {label}
      </p>
    </div>
  );
}
