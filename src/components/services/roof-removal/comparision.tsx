export function RoofRemovalVsOverlaySection() {
  const roofRemovalBenefits = [
    "Allows full roof deck inspection",
    "Identifies hidden structural issues",
    "Provides a stronger roofing foundation",
    "Improves roof lifespan",
    "Reduces future repair costs",
    "Meets many roofing manufacturer warranty requirements",
  ];

  const roofOverlayBenefits = [
    "Lower upfront cost",
    "Faster installation process",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
          Roof Removal vs. Roof Overlay:
          <br />
          <em className="text-primary italic">Which Is Better?</em>
        </h2>

        <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

        <div className="max-w-5xl">
          <p className="text-base leading-loose font-medium text-black">
            Many property owners wonder whether they should remove their
            existing roof or install a new layer of shingles over it.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-sm rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <h3 className="mb-6 font-serif text-3xl text-black">
              Roof Removal Benefits
            </h3>

            <ul className="space-y-4">
              {roofRemovalBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="font-medium text-black">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <h3 className="mb-6 font-serif text-3xl text-black">
              Roof Overlay Benefits
            </h3>

            <ul className="space-y-4">
              {roofOverlayBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="font-medium text-black">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 max-w-5xl">
          <p className="text-base leading-loose font-medium text-black">
            While overlays may save money initially, roof removal often
            provides better long-term value and performance.
          </p>
        </div>
      </div>
    </section>
  );
}
