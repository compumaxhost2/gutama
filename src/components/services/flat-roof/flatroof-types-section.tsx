export function FlatRoofTypesSection() {
  const roofingSystems = [
    {
      title: "EPDM Roofing",
      description:
        "EPDM (Ethylene Propylene Diene Monomer) is a durable synthetic rubber roofing membrane widely used on residential and commercial flat roofs.",
      benefits: [
        "Excellent weather resistance",
        "Long lifespan",
        "Low maintenance requirements",
        "UV protection",
        "Cost-effectiveness",
      ],
      closing:
        "EPDM is one of the most popular flat roofing options for both residential and commercial properties.",
    },
    {
      title: "TPO Roofing",
      description:
        "TPO (Thermoplastic Polyolefin) roofing is a highly energy-efficient roofing system commonly used on commercial buildings and energy-conscious properties.",
      benefits: [
        "Reflective surface",
        "Reduced cooling costs",
        "Heat resistance",
        "Strong seam performance",
        "Environmentally friendly materials",
      ],
      closing:
        "TPO roofing is widely used on commercial buildings and energy-conscious properties.",
    },
    {
      title: "Modified Bitumen Roofing",
      description:
        "Modified bitumen combines traditional roofing technology with modern performance improvements.",
      benefits: [
        "Enhanced flexibility",
        "Superior waterproofing",
        "Impact resistance",
        "Reliable durability",
        "Easy maintenance",
      ],
      closing:
        "This system is often selected for properties requiring strong protection against changing weather conditions.",
    },
    {
      title: "Built-Up Roofing (BUR)",
      description:
        "Built-up roofing systems consist of multiple layers of asphalt and reinforcing materials.",
      benefits: [
        "Exceptional waterproofing",
        "Strong durability",
        "Excellent protection against foot traffic",
        "Proven long-term performance",
      ],
      closing:
        "BUR systems remain a popular choice for commercial applications.",
    },
  ];

  const warningSigns = [
    "Roof leaks",
    "Standing water",
    "Ponding water",
    "Cracked membranes",
    "Blistering roofing materials",
    "Roof surface deterioration",
    "Interior water stains",
    "Mold growth",
    "Increased energy costs",
    "Visible sagging",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        {/* TYPES OF FLAT ROOFING */}
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Flat Roofing Options
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Types of Flat Roofing Systems
            <br />
            <em className="text-primary italic">We Install</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            Selecting the right flat roofing material is critical for long-term
            performance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {roofingSystems.map((system) => (
            <div
              key={system.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10"
            >
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-4 font-serif text-2xl text-black">
                {system.title}
              </h3>

              <p className="mb-6 leading-loose font-medium text-black">
                {system.description}
              </p>

              <div className="space-y-3">
                {system.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-primary" />
                    <span className="font-medium text-black">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 border-t border-stone-200 pt-6 leading-loose font-medium text-black">
                {system.closing}
              </p>
            </div>
          ))}
        </div>

        {/* SIGNS SECTION */}
        <div className="mt-12 max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Warning Signs
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Signs You May Need Flat Roof
            <br />
            <em className="text-primary italic">Repair or Replacement</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            Flat roofs often provide warning signs before major problems
            develop.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-3xl text-black">
            Watch For:
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((sign) => (
              <div key={sign} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-primary" />
                <span className="font-medium text-black">{sign}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
            A professional roof inspection can determine whether repair or
            replacement is the best solution.
          </p>
        </div>
      </div>
    </section>
  );
}