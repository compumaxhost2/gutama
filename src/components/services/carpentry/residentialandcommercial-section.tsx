import { MapPin } from "lucide-react";

export function CarpentryPropertyTypesSection() {
  const residential = [
    "Single-family homes",
    "Townhouses",
    "Apartments",
    "Historic properties",
  ];

  const commercial = [
    "Office buildings",
    "Retail stores",
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
            Carpentry Services for
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
              Residential Carpentry Services
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              We provide complete carpentry solutions for homeowners throughout
              Essex County, including repairs, framing, trim work, and custom
              wood installations.
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
              Commercial Carpentry Services
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              We also serve commercial properties, delivering durable
              carpentry solutions that meet building safety standards and
              long-term performance requirements.
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
        <div className="mt-12 rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
          <h3 className="mb-6 font-serif text-2xl text-stone-900">
            Areas We Serve
          </h3>

          <p className="mb-8 text-base leading-loose text-stone-600">
            We proudly provide carpentry services throughout Essex County, NJ,
            serving homeowners, property managers, and commercial property
            owners across the region.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-secondary" />
                <span className="text-stone-600">{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-200 pt-8 text-base leading-loose text-stone-600">
            And surrounding communities throughout Northern New Jersey.
          </p>
        </div>
      </div>
    </section>
  );
}