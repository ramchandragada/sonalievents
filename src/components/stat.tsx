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
    <div className="flex min-h-[7.5rem] flex-col justify-end border-t border-ink/10 py-6 md:min-h-0 md:py-10">
      <p
        className={`display leading-[1.05] ${
          accent
            ? "text-[2.35rem] text-garnet md:text-6xl"
            : "text-[1.35rem] text-ink md:text-[1.85rem]"
        }`}
      >
        {value}
      </p>
      <p className="mt-2.5 text-xs font-semibold leading-snug tracking-[0.12em] text-ink-muted uppercase md:text-[0.8rem]">
        {label}
      </p>
    </div>
  );
}
