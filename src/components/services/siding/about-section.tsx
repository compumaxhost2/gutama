export function WhatIsSidingSection() {
  const materials = [
    "Vinyl Siding",
    "Fiber Cement Siding",
    "Wood Siding",
    "Aluminum Siding",
    "Engineered Wood Siding",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Understanding Siding
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-snug font-bold text-white">
              What Is
              <br />
              <em className="text-secondary italic">Home Siding?</em>
            </h2>

            <div className="mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-5 text-base leading-loose text-stone-600">
              Home siding is the outer protective layer of a building&apos;s exterior
              walls. It acts as a barrier against rain, wind, snow, heat, and
              moisture while helping improve energy efficiency and overall
              aesthetics.
            </p>

            <p className="text-base leading-loose text-stone-600">
              The right siding system protects your property from weather
              exposure, reduces maintenance needs, and enhances curb appeal for
              years to come.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-10">
            <h3 className="mb-8 font-serif text-2xl text-stone-900">
              Common Siding Materials
            </h3>

            <div className="grid gap-4">
              {materials.map((material) => (
                <div
                  key={material}
                  className="flex items-center gap-4 border-b border-stone-200/70 pb-4 last:border-0 last:pb-0"
                >
                  <div className="h-px w-6 shrink-0 bg-secondary" />
                  <span className="text-sm tracking-wide text-stone-900/80">
                    {material}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-stone-200/90 pt-6">
              <p className="text-sm leading-loose text-stone-600">
                Each siding material offers different levels of durability,
                maintenance requirements, appearance, and long-term value,
                allowing homeowners to choose the best option for their
                property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}