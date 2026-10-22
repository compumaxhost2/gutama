export function EmergencyRepairAreasSection() {
  const areas = [
    "Newark NJ",
    "East Orange NJ",
    "Irvington NJ",
    "Bloomfield NJ",
    "Harrison NJ",
    "Kearny NJ",
    "Orange NJ",
    "Essex County NJ",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Service Coverage
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Areas We
            <br />
            <em className="text-primary italic">Serve</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            We proudly provide emergency roof repair services throughout Essex
            County and surrounding New Jersey communities.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md px-6 py-5 text-center transition-all duration-300 hover:border-primary/30"
            >
              <span className="text-sm font-medium text-black">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}