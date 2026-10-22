export function GuttersWarningSignsSection() {
  const signs = [
    "Overflowing gutters during rain",
    "Sagging or detached gutters",
    "Water stains on exterior walls",
    "Basement leaks or moisture buildup",
    "Peeling paint near rooflines",
    "Rust or cracks in gutter material",
    "Mold or mildew growth",
    "Pooling water near foundation",
    "Frequent clogging with debris",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Warning Signs
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Signs You Need Gutter
            <br />
            <em className="text-primary italic">Repair or Replacement</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            You may need professional gutter services if you notice any of the
            following issues around your home.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {signs.map((sign) => (
              <div
                key={sign}
                className="flex items-center gap-3 border border-stone-200/90 p-4"
              >
                <div className="h-px w-5 shrink-0 bg-primary" />
                <span className="text-sm font-medium text-black">{sign}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
            Early repair helps prevent expensive structural damage.
          </p>
        </div>
      </div>
    </section>
  );
}