export function CarpentrySignsSection() {
  const signs = [
    "Cracked or rotting wood",
    "Sagging floors or decks",
    "Damaged trim or molding",
    "Loose door or window frames",
    "Water-damaged wood structures",
    "Pest-damaged wood",
    "Structural instability in wooden areas",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Warning Signs
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Signs You Need
            <br />
            <em className="text-primary italic">Carpentry Services</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            Wood structures naturally experience wear over time due to moisture,
            weather exposure, aging, and pests. Identifying problems early can
            help prevent expensive repairs and maintain the safety and integrity
            of your property.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-2xl text-black">
            Common Warning Signs
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {signs.map((sign) => (
              <div
                key={sign}
                className="flex items-center gap-3 border-b border-stone-200/70 pb-4"
              >
                <div className="h-px w-5 shrink-0 bg-primary" />
                <span className="text-sm text-black/80">{sign}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
            Early repair and professional evaluation can prevent costly
            structural damage, improve safety, and extend the lifespan of your
            home&apos;s wood components.
          </p>
        </div>
      </div>
    </section>
  );
}