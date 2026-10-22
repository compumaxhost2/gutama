export function CarpentryServiceTypesSection() {
  const structural = [
    "Wall framing",
    "Roof framing",
    "Floor structures",
    "Load-bearing woodwork",
  ];

  const finish = [
    "Baseboards",
    "Crown molding",
    "Trim installation",
    "Door and window framing",
  ];

  const repair = [
    "Water damage repairs",
    "Termite or pest damage",
    "Weather-related deterioration",
    "Structural wear and aging",
  ];

  const custom = [
    "Shelving units",
    "Decorative woodwork",
    "Built-in storage",
    "Exterior wood structures",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Professional Solutions
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-white">
            Types of
            <br />
            <em className="text-secondary italic">Carpentry Services</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-stone-600">
            We provide a wide range of residential and commercial carpentry
            services, from structural framing and finish work to custom
            woodcraft and repair solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Structural */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-5 font-serif text-2xl text-stone-900">
              Structural Carpentry
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              Essential framing and support systems that provide strength,
              stability, and structural integrity.
            </p>

            <ul className="space-y-3">
              {structural.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Finish */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-5 font-serif text-2xl text-stone-900">
              Finish Carpentry
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              Detailed finishing work that enhances the appearance and value of
              your property.
            </p>

            <ul className="space-y-3">
              {finish.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Repair */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-5 font-serif text-2xl text-stone-900">
              Repair Carpentry
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              Restoration and repair services for damaged or deteriorated wood
              structures.
            </p>

            <ul className="space-y-3">
              {repair.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Custom */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-5 font-serif text-2xl text-stone-900">
              Custom Carpentry
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              Personalized woodworking solutions designed around your space and
              functional requirements.
            </p>

            <ul className="space-y-3">
              {custom.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}