export function EmergencyRepairSignsSection() {
  const signs = [
    "Active water leaking into your home",
    "Ceiling stains spreading quickly",
    "Roof sections missing after a storm",
    "Visible holes or punctures in roofing",
    "Water dripping near electrical fixtures",
    "Sagging roof areas",
    "Strong wind or storm damage",
    "Mold or wet insulation",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Warning Signs
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-snug text-black">
            Signs You Need
            <br />
            <em className="text-primary italic">Emergency Roof Repair</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            You may need urgent roof repair if you notice any of the following
            warning signs. Fast action can help prevent extensive water damage,
            structural deterioration, and costly repairs.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
          <div className="grid gap-5 sm:grid-cols-2">
            {signs.map((sign) => (
              <div key={sign} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-primary" />
                <span className="text-sm text-black/80">{sign}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
            If any of these occur, immediate action is required to prevent
            structural damage and further water intrusion.
          </p>
        </div>
      </div>
    </section>
  );
}