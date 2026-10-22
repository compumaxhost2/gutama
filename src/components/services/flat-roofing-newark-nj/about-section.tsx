export function FlatRoofWhatIsSection() {
  const materials = [
    "EPDM Roofing (Rubber Roofing)",
    "TPO Roofing",
    "PVC Roofing",
    "Modified Bitumen Roofing",
    "Built-Up Roofing (BUR)",
    "Flat Roof Coating Systems",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Roofing Systems
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-white">
              What Is
              <br />
              <em className="text-secondary italic">Flat Roofing?</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-6 text-base leading-loose text-stone-600">
              Flat roofing refers to a roofing system with a very low slope
              designed to efficiently drain water while maximizing usable roof
              space. Unlike traditional pitched roofs, flat roofs offer easier
              maintenance access and are widely used for commercial properties
              and multi-family buildings throughout Newark, NJ.
            </p>

            <p className="text-base leading-loose text-stone-600">
              Modern flat roofing systems are engineered using advanced
              waterproof membranes and insulation materials that provide
              superior protection against rain, snow, wind, and temperature
              fluctuations.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-secondary">
              Common Flat Roofing Materials
            </p>

            <div className="space-y-4">
              {materials.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-stone-200/70 pb-4 last:border-0 last:pb-0"
                >
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}