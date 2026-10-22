export function ChimneyPropertyServicesSection() {
  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Who We Serve
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">
            Residential & Commercial
            <em className="text-secondary italic"> Chimney Services</em>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Residential */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-10">
            <h3 className="mb-6 font-serif text-2xl text-stone-900">
              Residential Chimney Services
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              We provide complete chimney solutions for homeowners throughout
              Essex County, helping protect properties from water damage,
              structural deterioration, and safety hazards.
            </p>

            <div className="mb-8">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-secondary">
                Properties We Service
              </p>

              <ul className="space-y-3">
                {[
                  "Single-Family Homes",
                  "Townhouses",
                  "Apartments",
                  "Historic Homes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 bg-secondary" />
                    <span className="text-sm text-stone-900/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm leading-loose text-stone-600">
              Residential services include chimney inspections, leak repair,
              masonry repair, waterproofing, maintenance, and chimney
              rebuilding.
            </p>
          </div>

          {/* Commercial */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-10">
            <h3 className="mb-6 font-serif text-2xl text-stone-900">
              Commercial Chimney Services
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              We provide professional chimney services for commercial and
              multi-unit properties while maintaining compliance with safety and
              building requirements.
            </p>

            <div className="mb-8">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-secondary">
                Properties We Service
              </p>

              <ul className="space-y-3">
                {[
                  "Apartment Buildings",
                  "Hotels",
                  "Office Buildings",
                  "Industrial Facilities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 bg-secondary" />
                    <span className="text-sm text-stone-900/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm leading-loose text-stone-600">
              Our team works with property managers, business owners, and
              facility operators to maintain safe and reliable chimney systems.
            </p>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 border border-secondary/20 bg-secondary/5 p-8 text-center">
          <h3 className="mb-4 font-serif text-2xl text-stone-900">
            Areas We Serve
          </h3>

          <p className="mb-6 text-stone-600">
            We proudly provide chimney services throughout Essex County, NJ.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Newark",
              "East Orange",
              "Bloomfield",
              "West Orange",
            ].map((city) => (
              <span
                key={city}
                className="border border-secondary/30 px-4 py-2 text-sm text-stone-900"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}