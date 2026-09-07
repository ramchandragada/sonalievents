export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden bg-garnet py-4 text-paper">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-6 text-[0.72rem] tracking-[0.32em] whitespace-nowrap uppercase"
          >
            {item}
            <span className="h-2 w-2 rounded-full bg-marigold" />
          </span>
        ))}
      </div>
    </div>
  );
}
