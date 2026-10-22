export function FlatRoofSystemsSection() {
  const systems = [
    {
      title: "EPDM Roofing Newark NJ",
      intro:
        "EPDM (Ethylene Propylene Diene Monomer) is a synthetic rubber roofing membrane known for its flexibility and durability.",
      subtitle: "Advantages of EPDM Roofing",
      benefits: [
        "Excellent weather resistance",
        "UV protection",
        "Cost-effective solution",
        "Long lifespan",
        "Low maintenance requirements",
      ],
      footer:
        "EPDM remains one of the most popular flat roofing options for both residential and commercial properties.",
    },
    {
      title: "TPO Roofing Newark NJ",
      intro:
        "TPO (Thermoplastic Polyolefin) roofing has become one of the fastest-growing flat roofing systems in the United States.",
      subtitle: "Benefits of TPO Roofing",
      benefits: [
        "Energy-efficient reflective surface",
        "Strong seam performance",
        "Resistance to mold and algae",
        "Excellent heat reflection",
        "Environmentally friendly",
      ],
      footer:
        "Many Newark business owners choose TPO roofing to reduce energy costs and improve building performance.",
    },
    {
      title: "PVC Roofing Newark NJ",
      intro:
        "PVC roofing offers exceptional durability and chemical resistance, making it ideal for certain commercial applications.",
      subtitle: "PVC Roofing Benefits",
      benefits: [
        "Highly durable",
        "Fire resistant",
        "Chemical resistant",
        "Waterproof performance",
        "Long service life",
      ],
    },
    {
      title: "Modified Bitumen Roofing",
      intro:
        "Modified bitumen systems provide multiple layers of protection and excellent waterproofing performance.",
      subtitle: "Ideal For",
      benefits: [
        "Commercial buildings",
        "Apartment complexes",
        "Institutional facilities",
      ],
    },
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Roofing Systems
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] text-black">
            Types of Flat Roofing
            <br />
            <em className="text-primary italic">Systems We Install</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {systems.map((system) => (
            <div
              key={system.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10"
            >
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-4 font-serif text-2xl text-black">
                {system.title}
              </h3>

              <p className="mb-6 text-sm leading-loose font-medium text-black">
                {system.intro}
              </p>

              <h4 className="mb-5 text-xs uppercase tracking-[0.16em] text-primary">
                {system.subtitle}
              </h4>

              <div className="space-y-3">
                {system.benefits.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-primary" />
                    <span className="text-sm text-black/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {system.footer && (
                <div className="mt-8 border-t border-stone-200 pt-6">
                  <p className="text-sm leading-loose font-medium text-black">
                    {system.footer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}