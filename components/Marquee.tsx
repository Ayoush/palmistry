const traditions = [
  "Hindu Hast Rekha",
  "Western Classical",
  "Chinese 掌相",
  "Tibetan Buddhist",
  "Tarot Fusion",
  "Kabbalistic",
];

export function Marquee() {
  const items = [...traditions, ...traditions, ...traditions];
  return (
    <section className="relative py-10 border-y border-[#e9c176]/10 bg-[#0b0b0d]/40">
      <div className="overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {items.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-8 font-display text-2xl text-[#b9ad97]"
            >
              {t}
              <span className="ml-16 text-[#e9c176]/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
