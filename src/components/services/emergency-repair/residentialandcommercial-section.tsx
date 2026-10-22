export function EmergencyRepairPropertyTypesSection() {
  const residential = [
    "Single-family homes",
    "Townhouses",
    "Apartments",
    "Older residential buildings",
  ];

  const residentialIssues = [
    "Roof leaks",
    "Storm damage",
    "Ceiling water intrusion",
    "Missing shingles",
  ];

  const commercial = [
    "Office buildings",
    "Retail stores",
    "Warehouses",
    "Apartment complexes",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Residential & Commercial
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Emergency Roof Repair for
            <br />
            <em className="text-primary italic">Every Property Type</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Residential */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-primary" />

            <h3 className="mb-4 font-serif text-2xl text-black">
              Residential Emergency Roof Repair
            </h3>

            <p className="mb-6 text-sm leading-loose font-medium text-black">
              We provide emergency roofing services for residential properties
              throughout Essex County, NJ.
            </p>

            <div className="mb-8">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-primary">
                Property Types
              </p>

              <div className="space-y-3">
                {residential.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-primary" />
                    <span className="text-sm text-black/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-primary">
                Common Residential Emergencies
              </p>

              <div className="space-y-3">
                {residentialIssues.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-primary" />
                    <span className="text-sm text-black/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commercial */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-primary" />

            <h3 className="mb-4 font-serif text-2xl text-black">
              Commercial Emergency Roof Repair
            </h3>

            <p className="mb-6 text-sm leading-loose font-medium text-black">
              We also serve commercial properties and provide rapid-response
              roofing solutions that help reduce disruption and protect
              operations.
            </p>

            <div className="space-y-3">
              {commercial.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="text-sm text-black/80">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-stone-200 pt-6 text-sm leading-loose font-medium text-black">
              We minimize downtime while ensuring building safety and
              compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}