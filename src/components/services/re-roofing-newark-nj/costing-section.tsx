export function ReRoofingCostSection() {
  const factors = [
    "Roof size",
    "Roofing material",
    "Number of existing layers",
    "Roof pitch",
    "Accessibility",
    "Required repairs",
  ];

  const pricing = [
    {
      property: "Small Home",
      cost: "$4,000 - $8,000",
    },
    {
      property: "Medium Home",
      cost: "$8,000 - $15,000",
    },
    {
      property: "Large Home",
      cost: "$15,000 - $25,000+",
    },
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Pricing Guide
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            How Much Does
            <br />
            <em className="text-primary italic">Re-Roofing Cost?</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Cost Factors */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-primary">
              Cost Factors
            </p>

            <h3 className="mb-6 font-serif text-3xl text-black">
              What Affects Pricing?
            </h3>

            <p className="mb-8 text-sm leading-loose font-medium text-black">
              The cost of re-roofing in Newark, NJ depends on several factors
              that influence labor requirements, material quantities, and
              overall project complexity.
            </p>

            <div className="space-y-4">
              {factors.map((factor) => (
                <div key={factor} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="text-sm text-black/85">
                    {factor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Table */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-primary">
              Average Costs
            </p>

            <h3 className="mb-6 font-serif text-3xl text-black">
              Newark Re-Roofing Estimates
            </h3>

            <div className="overflow-hidden border border-stone-200/90">
              <div className="grid grid-cols-2 border-b border-stone-200/90 bg-primary/5">
                <div className="p-4 text-sm font-medium text-black">
                  Property Type
                </div>
                <div className="p-4 text-sm font-medium text-black">
                  Estimated Cost Range
                </div>
              </div>

              {pricing.map((item) => (
                <div
                  key={item.property}
                  className="grid grid-cols-2 border-b border-stone-200/90 last:border-0"
                >
                  <div className="p-4 text-sm text-black">
                    {item.property}
                  </div>

                  <div className="p-4 text-sm text-primary font-medium">
                    {item.cost}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-loose font-medium text-black">
              Costs vary based on project complexity, material selection, and
              structural conditions discovered during inspection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}