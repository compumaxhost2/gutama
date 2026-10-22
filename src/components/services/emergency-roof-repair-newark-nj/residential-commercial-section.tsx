export function EmergencyRepairPropertyTypesSection() {
  const residential = [
    "Asphalt shingle roofs",
    "Metal roofs",
    "Flat roofs",
    "Multi-family properties",
    "Townhomes",
    "Residential roof systems",
  ];

  const commercial = [
    "Office buildings",
    "Retail centers",
    "Warehouses",
    "Apartment complexes",
    "Industrial facilities",
    "Educational properties",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Residential & Commercial Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">
            Emergency Roof Repair
            <br />
            <em className="text-secondary italic">For Every Property Type</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Residential */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-4 font-serif text-2xl text-stone-900">
              Residential Emergency Roof Repair Newark NJ
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              Your home is one of your most valuable investments. Roofing
              emergencies can put your family and property at risk.
            </p>

            <div className="space-y-3">
              {residential.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-stone-200 pt-6">
              <p className="text-sm leading-loose text-stone-600">
                Our goal is to restore protection quickly and safely.
              </p>
            </div>
          </div>

          {/* Commercial */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-4 font-serif text-2xl text-stone-900">
              Commercial Emergency Roof Repair Newark NJ
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              Commercial roofing emergencies can disrupt business operations
              and lead to significant property damage.
            </p>

            <div className="space-y-3">
              {commercial.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-stone-200 pt-6">
              <p className="text-sm leading-loose text-stone-600">
                Fast response helps minimize downtime and protect valuable
                assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}