export function ReRoofingMaterialsCodesSection() {
  const metalBenefits = [
    "Exceptional durability",
    "Energy efficiency",
    "Low maintenance",
    "Long lifespan",
  ];

  const flatRoofSystems = [
    "EPDM roofing",
    "TPO roofing",
    "Modified bitumen",
    "PVC roofing",
  ];

  const codeRequirements = [
    "Permit requirements",
    "Structural modifications",
    "Fire safety regulations",
    "Roofing layer limitations",
    "Manufacturer installation standards",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Materials & Regulations
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">
            Roofing Materials &
            <br />
            <em className="text-secondary italic">Building Code Requirements</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Roofing Materials */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-secondary">
              Roofing Materials
            </p>

            <h3 className="mb-6 font-serif text-3xl text-stone-900">
              Available Re-Roofing Options
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="mb-3 font-serif text-xl text-stone-900">
                  Asphalt Shingles
                </h4>

                <p className="text-sm leading-loose text-stone-600">
                  The most popular roofing material in Newark due to
                  affordability, durability, weather resistance, and curb
                  appeal.
                </p>
              </div>

              <div>
                <h4 className="mb-4 font-serif text-xl text-stone-900">
                  Metal Roofing
                </h4>

                <div className="space-y-3">
                  {metalBenefits.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-px w-5 shrink-0 bg-secondary" />
                      <span className="text-sm text-stone-900/85">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 font-serif text-xl text-stone-900">
                  Flat Roofing Systems
                </h4>

                <p className="mb-4 text-sm leading-loose text-stone-600">
                  Common for commercial buildings and multifamily properties
                  throughout Newark and Essex County.
                </p>

                <div className="space-y-3">
                  {flatRoofSystems.map((item) => (
                    <div key={item} className="flex items-center gap-3">
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

          {/* Building Codes */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-secondary">
              Local Compliance
            </p>

            <h3 className="mb-6 font-serif text-3xl text-stone-900">
              Newark Roofing Permits &
              <br />
              Building Codes
            </h3>

            <p className="mb-8 text-sm leading-loose text-stone-600">
              Re-roofing projects may require compliance with local building
              regulations and New Jersey roofing codes. Proper permitting and
              code adherence help ensure safety, long-term performance, and
              successful project completion.
            </p>

            <h4 className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-secondary">
              Important Considerations
            </h4>

            <div className="space-y-4">
              {codeRequirements.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-stone-200 pt-6">
              <p className="text-sm leading-loose text-stone-600">
                Our team stays current with Newark and New Jersey building code
                requirements to ensure every project meets local regulations,
                manufacturer specifications, and safety standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}