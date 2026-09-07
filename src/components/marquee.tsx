export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-paper py-4 text-ink">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-6 text-[0.72rem] tracking-[0.32em] whitespace-nowrap uppercase"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-garnet" />
          </span>
        ))}
      </div>
    </div>
  );
}
