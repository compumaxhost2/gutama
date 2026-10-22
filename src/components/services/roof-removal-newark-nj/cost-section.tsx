export function RoofRemovalCostSection() {
  const pricingFactors = [
    {
      factor: "Roof Size",
      impact: "Larger roofs cost more",
    },
    {
      factor: "Roofing Materials",
      impact: "Premium materials increase costs",
    },
    {
      factor: "Existing Roofing Layers",
      impact: "Additional layers require more labor",
    },
    {
      factor: "Structural Damage",
      impact: "Repairs add to the total cost",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Pricing Information
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Roof Replacement Cost
            <br />
            <em className="text-primary italic">Newark NJ</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            How much does roof removal cost? The total investment depends on
            your roof size, roofing materials, existing roof conditions, and
            any structural repairs that may be required during the tear-off
            process.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-md">
          <div className="grid grid-cols-2 border-b border-stone-200/90 bg-primary/5">
            <div className="p-5 font-medium text-black">
              Factor
            </div>

            <div className="p-5 font-medium text-black">
              Affects Price
            </div>
          </div>

          {pricingFactors.map((item) => (
            <div
              key={item.factor}
              className="grid grid-cols-2 border-b border-stone-200/90 last:border-b-0"
            >
              <div className="p-5 text-sm text-black">
                {item.factor}
              </div>

              <div className="p-5 text-sm font-medium text-black">
                {item.impact}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="mb-3 font-serif text-2xl text-black">
            Free Roof Replacement Estimate
          </h3>

          <p className="mx-auto max-w-2xl text-sm leading-loose font-medium text-black">
            Contact us today for a free Roof Replacement Estimate in Newark NJ.
            Our team will inspect your roof, evaluate existing conditions, and
            provide an accurate recommendation based on your property&apos;s needs.
          </p>
        </div>
      </div>
    </section>
  );
}