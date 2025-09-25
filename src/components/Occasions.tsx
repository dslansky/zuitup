const items = [
  { key: "shabbos", title: "Shabbos", note: "Shabbos Classic Navy" },
  { key: "yomtov", title: "Yom Tov", note: "Yom Tov Charcoal" },
  { key: "barmitzvah", title: "Bar Mitzvah", note: "Bar Mitzvah Slim" },
  { key: "wedding", title: "Wedding", note: "Black-Tie Wedding" },
];

export default function Occasions() {
  return (
    <section id="occasions" className="py-24">
      <div className="container-standard">
        <h2 className="font-serif text-3xl text-z-navy mb-6">Occasions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.key} className="rounded-2xl overflow-hidden border border-z-silver/30 bg-white">
              <div className="aspect-[4/3] bg-z-cream" />
              <div className="p-3">
                <h3 className="font-medium text-z-navy">{it.title}</h3>
                <p className="text-xs text-z-ink/70">{it.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


