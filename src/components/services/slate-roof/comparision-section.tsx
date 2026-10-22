export function SlateRoofRepairVsReplacementSection() {
  const installationBenefits = [
    "Correct structural support",
    "Proper waterproofing",
    "Longer roof lifespan",
    "Manufacturer-grade installation quality",
    "Reduced long-term repair costs",
  ];

  const repairSigns = [
    "Damage is limited to a few tiles",
    "Roof structure is still strong",
    "No widespread leaks exist",
  ];

  const replacementSigns = [
    "Roof is near end of lifespan",
    "Multiple leaks or failures exist",
    "Structural decking is damaged",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Why Choose Professional Installation */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-10">
            <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Professional Installation
            </p>

            <h2 className="mb-6 font-serif text-3xl text-black">
              Why Choose Professional
              <br />
              <em className="text-primary italic">Slate Roofing Installation?</em>
            </h2>

            <p className="mb-8 leading-loose font-medium text-black">
              Slate roofing is not a DIY-friendly system. It requires specialized
              installation due to weight, breakability, and structural
              requirements.
            </p>

            <div className="flex flex-col gap-4">
              {installationBenefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="font-medium text-black">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-stone-200 pt-8 leading-loose font-medium text-black">
              At Gutama Home Improvement, we ensure every slate roof is installed
              to withstand New Jersey&apos;s climate conditions.
            </p>
          </div>

          {/* Repair vs Replacement */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-10">
            <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Roofing Decisions
            </p>

            <h2 className="mb-8 font-serif text-3xl text-black">
              Slate Roof Repair
              <br />
              <em className="text-primary italic">vs Replacement</em>
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-serif text-xl text-black">
                  Repair Is Best When:
                </h3>

                <div className="flex flex-col gap-3">
                  {repairSigns.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-px w-5 shrink-0 bg-primary" />
                      <span className="text-sm font-medium text-black">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-xl text-black">
                  Replacement Is Best When:
                </h3>

                <div className="flex flex-col gap-3">
                  {replacementSigns.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-px w-5 shrink-0 bg-primary" />
                      <span className="text-sm font-medium text-black">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-8 border-t border-stone-200 pt-8 leading-loose font-medium text-black">
              A professional inspection is the only reliable way to determine
              the correct solution for your slate roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}