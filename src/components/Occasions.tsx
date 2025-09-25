import Image from "next/image";

const items = [
  { key: "shabbos", title: "Shabbos", note: "Shabbos Classic Navy", img: "/brand/shabboszuit.jpg", alt: "Shabbos — suits in classic navy" },
  { key: "yomtov", title: "Yom Tov", note: "Yom Tov Charcoal", img: "/brand/ytzuit.jpg?v=1", alt: "Yom Tov — elevated charcoal tones" },
  { key: "barmitzvah", title: "Bar Mitzvah", note: "Bar Mitzvah Slim", img: "/brand/shabboszuit.jpg", alt: "Bar Mitzvah — slim and sharp" },
  { key: "wedding", title: "Wedding", note: "Black-Tie Wedding", img: "/brand/blacktiezuit.jpg", alt: "Wedding — black tie perfection" },
];

export default function Occasions() {
  return (
    <section id="occasions" className="py-24">
      <div className="container-standard">
        <h2 className="font-serif text-3xl text-z-navy mb-6">Occasions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.key} className="rounded-2xl overflow-hidden border border-z-silver/30 bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src={it.img}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-top"
                  priority={false}
                />
              </div>
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


