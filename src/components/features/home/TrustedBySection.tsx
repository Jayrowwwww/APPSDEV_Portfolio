const brands = [
  { name: "Loom", className: "uppercase tracking-widest" },
  { name: "Northside", className: "uppercase tracking-widest" },
  { name: "canon", className: "lowercase tracking-tight" },
  { name: "H E X A", className: "uppercase tracking-[0.3em]" },
  { name: "\\WARE", className: "uppercase tracking-tighter flex items-center gap-1" },
  { name: "SISU", className: "uppercase tracking-wide" },
];

export function TrustedBySection() {
  return (
    <section className="py-12 flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
      <span className="text-primary text-xs font-bold tracking-widest uppercase">
        Trusted By
      </span>
      {brands.map((brand) => (
        <div
          key={brand.name}
          className={`text-xl font-black ${brand.className}`}
        >
          {brand.name === "\\WARE" ? (
            <>
              <span className="text-2xl">\</span>WARE
            </>
          ) : (
            brand.name
          )}
        </div>
      ))}
    </section>
  );
}
