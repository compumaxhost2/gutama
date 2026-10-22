export function WhatIsReRoofingSection() {
  const benefits = [
    "Protect against leaks and water damage",
    "Improve energy efficiency",
    "Enhance curb appeal",
    "Increase property value",
    "Extend roof lifespan",
    "Improve weather resistance",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Re-Roofing Guide
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-white">
            What Is
            <br />
            <em className="text-secondary italic">Re-Roofing?</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <div className="space-y-6">
            <p className="text-base leading-loose text-stone-300">
              Re-roofing is the process of installing a new roofing system on a
              property after removing or replacing worn roofing materials.
              Depending on the roof&apos;s condition, re-roofing may involve a
              complete roof tear-off, roof deck inspection, structural repairs,
              and the installation of new roofing materials.
            </p>

            <p className="text-base leading-loose text-stone-300">
              A professionally installed re-roofing system helps:
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-stone-200/90 bg-white shadow-2xl p-8 md:p-10 lg:p-12">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-sm font-medium text-black">{benefit}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
            For many homeowners and business owners, re-roofing is one of the
            most important investments in property protection.
          </p>
        </div>
      </div>
    </section>
  );
}
