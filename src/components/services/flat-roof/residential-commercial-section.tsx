export function FlatRoofResidentialCommercialSection() {
  const residentialProperties = [
    "Modern homes",
    "Townhomes",
    "Garages",
    "Home additions",
    "Multi-family properties",
  ];

  const commercialProperties = [
    "Office buildings",
    "Retail centers",
    "Warehouses",
    "Industrial facilities",
    "Apartment complexes",
    "Mixed-use developments",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Residential */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Residential Roofing
            </p>

            <h2 className="mb-6 font-serif text-[clamp(28px,3vw,42px)] leading-snug text-black">
              Residential
              <br />
              <em className="text-primary italic">Flat Roof Services</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="mb-8 text-base leading-loose font-medium text-black">
              Our residential flat roofing services are ideal for:
            </p>

            <div className="space-y-4">
              {residentialProperties.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="font-medium text-black">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
              We provide complete installation, replacement, repair, and
              maintenance services.
            </p>
          </div>

          {/* Commercial */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Commercial Roofing
            </p>

            <h2 className="mb-6 font-serif text-[clamp(28px,3vw,42px)] leading-snug text-black">
              Commercial
              <br />
              <em className="text-primary italic">Flat Roof Services</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="mb-8 text-base leading-loose font-medium text-black">
              We help businesses protect their investments with professional
              flat roofing solutions.
            </p>

            <div className="space-y-4">
              {commercialProperties.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="font-medium text-black">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
              Our team works efficiently to minimize disruption to your
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}