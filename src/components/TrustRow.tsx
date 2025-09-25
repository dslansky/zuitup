export default function TrustRow() {
  const items = [
    { label: "Perfect Fit Guarantee" },
    { label: "Premium Italian & English Mills" },
    { label: "Alteration Credit Included" },
    { label: "Simcha-Ready Delivery" },
  ];
  return (
    <section id="trust" className="bg-white">
      <div className="container-standard py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.label} className="text-center text-z-ink/80 border border-z-silver/30 rounded-xl py-3">
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


