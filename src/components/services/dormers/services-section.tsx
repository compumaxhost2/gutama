export function DormersServicesSection() {
  const services = [
    "New dormer construction",
    "Roof dormer additions",
    "Dormer remodeling and expansion",
    "Structural reinforcement and framing",
    "Dormer leak repair and waterproofing",
    "Dormer window installation",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Our Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-snug text-black">
            Dormer Installation
            <br />
            <em className="text-primary italic">Services We Provide</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            At Gutama Home Improvement, we specialize in professional dormer
            construction, expansion, repair, and structural improvement
            services throughout Essex County, NJ.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 transition-all duration-300 hover:border-primary/40"
            >
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="font-serif text-xl leading-snug text-black">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}