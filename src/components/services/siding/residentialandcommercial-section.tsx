import { MapPin } from "lucide-react";

export function SidingPropertyTypesSection() {
  const residential = [
    "Single-family homes",
    "Townhouses",
    "Multi-family properties",
    "Historic homes",
  ];

  const commercial = [
    "Office buildings",
    "Retail centers",
    "Apartment complexes",
    "Industrial facilities",
  ];

  const areas = [
    "Newark",
    "East Orange",
    "Bloomfield",
    "West Orange",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Residential & Commercial
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">
            Siding Services for
            <br />
            <em className="text-secondary italic">Every Property Type</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Residential */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-4 font-serif text-2xl text-stone-900">
              Residential Siding Services
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              We provide complete siding solutions for homeowners throughout
              Essex County, including installation, repair, replacement, and
              exterior upgrades.
            </p>

            <ul className="space-y-3">
              {residential.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-4 font-serif text-2xl text-stone-900">
              Commercial Siding Services
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              Our team also serves commercial properties, delivering durable
              siding systems that meet building standards and provide long-term
              performance.
            </p>

            <ul className="space-y-3">
              {commercial.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Areas We Serve */}
        <div className="mt-12 rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
          <h3 className="mb-4 font-serif text-2xl text-stone-900">
            Areas We Serve
          </h3>

          <p className="mb-8 text-sm leading-loose text-stone-600">
            We proudly provide siding installation, repair, and replacement
            services throughout Essex County, NJ.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-secondary" />
                <span className="text-stone-600">{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-stone-200 pt-6 text-sm leading-loose text-stone-600">
            And surrounding communities throughout Northern New Jersey.
          </p>
        </div>
      </div>
    </section>
  );
}