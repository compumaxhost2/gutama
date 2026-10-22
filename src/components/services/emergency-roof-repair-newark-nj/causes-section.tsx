export function EmergencyRepairCausesSection() {
  const weatherCauses = [
    "High winds",
    "Thunderstorms",
    "Heavy rain",
    "Snow accumulation",
    "Ice dams",
    "Freezing temperatures",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Roofing Damage Factors
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Common Causes of
            <br />
            <em className="text-primary italic">Emergency Roof Damage</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-primary" />

            <h3 className="mb-4 font-serif text-2xl text-black">
              Severe Weather Conditions
            </h3>

            <p className="mb-6 text-sm leading-loose font-medium text-black">
              New Jersey weather can create roofing emergencies through:
            </p>

            <div className="space-y-3">
              {weatherCauses.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="text-sm text-black/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8">
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-4 font-serif text-xl text-black">
                Falling Trees and Debris
              </h3>

              <p className="text-sm leading-loose font-medium text-black">
                Storms can cause trees, branches, and debris to impact roofing
                systems and create immediate hazards.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8">
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-4 font-serif text-xl text-black">
                Aging Roofing Materials
              </h3>

              <p className="mb-5 text-sm leading-loose font-medium text-black">
                Older roofs are more susceptible to:
              </p>

              <div className="space-y-3">
                {[
                  "Cracked shingles",
                  "Flashing deterioration",
                  "Membrane failure",
                  "Water infiltration",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-primary" />
                    <span className="text-sm text-black/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8">
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-4 font-serif text-xl text-black">
                Poor Roof Maintenance
              </h3>

              <p className="text-sm leading-loose font-medium text-black">
                Small roofing issues that go unaddressed can quickly become
                emergency situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}