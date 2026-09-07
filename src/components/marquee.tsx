export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-paper/60 py-4">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-6 text-[0.72rem] tracking-[0.32em] whitespace-nowrap uppercase"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-brass" />
          </span>
        ))}
      </div>
    </div>
  );
}
