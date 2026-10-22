export function RoofRemovalServicesSection() {
  const services = [
    "Residential roof removal Newark NJ",
    "Commercial roof removal Newark NJ",
    "Asphalt shingle removal Newark NJ",
    "Flat roof replacement Newark NJ",
    "Emergency roof repair Newark NJ",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Roof Tear-Off Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">
            Roof Tear-Off
            <br />
            <em className="text-secondary italic">Newark NJ</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mx-auto max-w-4xl text-base leading-loose text-stone-600">
            A roof tear-off is the process of removing all existing roofing
            materials before installing a new roof. Unlike adding another layer
            of shingles, a complete tear-off allows contractors to identify
            hidden damage, replace rotten decking, and improve the lifespan of
            your new roofing system.
          </p>
        </div>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-6 transition-all duration-300 hover:border-secondary/40"
            >
              <div className="mb-4 h-px w-8 bg-secondary" />

              <p className="text-sm leading-relaxed text-stone-900">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}