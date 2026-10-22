
export function CommercialRoofRemovalSection() {
  const properties = [
    "Office buildings",
    "Retail centers",
    "Warehouses",
    "Apartment complexes",
    "Industrial facilities",
    "Mixed-use properties",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Commercial Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Commercial
            <br />
            <em className="text-primary italic">Roof Removal Services</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            We also provide roof removal services for commercial properties
            throughout Essex County.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-3xl text-black">
            Our Commercial Roofing Services Are Available For:
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <div key={property} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-primary" />
                <span className="font-medium text-black">{property}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-base leading-loose font-medium text-black">
            We work efficiently to minimize disruptions while maintaining
            strict safety standards throughout every phase of the project.
          </p>
        </div>
      </div>
    </section>
  );
}
