export function CarpentryInfoSection() {
  const services = [
    "Structural framing",
    "Roof and wall framing",
    "Door and window installation",
    "Deck construction and repair",
    "Trim and molding work",
    "Wood repairs and replacements",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-7xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Professional Carpentry
          </p>

          <h2 className="mb-6 font-serif text-[clamp(32px,4vw,52px)] leading-snug text-black">
            What Does a
            <br />
            <em className="text-primary italic">Carpenter Do?</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mb-10 text-base leading-loose font-medium text-black">
            A professional carpenter works with wood and structural materials to
            build, repair, and maintain parts of a building. Skilled carpentry
            is essential for both new construction projects and ongoing property
            maintenance.
          </p>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <h3 className="mb-6 font-serif text-2xl text-black">
              Common Carpentry Services
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="text-sm text-black/80">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}