export function FlatRoofCostSection() {
  const factors = [
    "Roof size",
    "Roofing material",
    "Accessibility",
    "Insulation requirements",
    "Existing roof condition",
    "Drainage upgrades",
  ];

  const pricing = [
    {
      service: "Flat Roof Repair",
      cost: "$500 - $5,000+",
    },
    {
      service: "Flat Roof Replacement",
      cost: "$5,000 - $30,000+",
    },
    {
      service: "Commercial Flat Roofing",
      cost: "Varies by size and scope",
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Pricing Guide
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-white">
              How Much Does
              <br />
              <em className="text-secondary italic">Flat Roofing Cost?</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-8 text-base leading-loose text-stone-600">
              Flat roofing costs vary based on several project-specific
              factors. Every property is different, which is why a professional
              inspection is the best way to receive an accurate estimate.
            </p>

            <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8">
              <h3 className="mb-6 font-serif text-xl text-stone-900">
                Factors Affecting Cost
              </h3>

              <div className="space-y-4">
                {factors.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-center gap-3"
                  >
                    <div className="h-px w-5 shrink-0 bg-secondary" />
                    <span className="text-sm text-stone-900/85">
                      {factor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <h3 className="mb-8 font-serif text-2xl text-stone-900">
              Average Flat Roofing Costs
            </h3>

            <div className="space-y-4">
              {pricing.map((item) => (
                <div
                  key={item.service}
                  className="flex items-center justify-between border-b border-stone-200/70 pb-4"
                >
                  <span className="font-medium text-stone-900">
                    {item.service}
                  </span>

                  <span className="text-secondary">
                    {item.cost}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-stone-200 pt-8">
              <p className="text-sm leading-loose text-stone-600">
                Pricing varies based on roofing material selection, project
                complexity, and building requirements. A professional inspection
                provides the most accurate estimate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}