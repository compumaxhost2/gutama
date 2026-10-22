export function ReRoofingMaterialsSection() {
  const materials = [
    {
      title: "Asphalt Shingles",
      description:
        "The most popular roofing choice due to affordability, durability, and design flexibility.",
    },
    {
      title: "Architectural Shingles",
      description:
        "Premium shingles that offer enhanced durability and a more dimensional appearance.",
    },
    {
      title: "Metal Roofing",
      description:
        "Known for exceptional longevity, energy efficiency, and weather resistance.",
    },
    {
      title: "Flat Roofing Systems",
      description:
        "Ideal for commercial buildings and low-slope roofing applications.",
    },
    {
      title: "Energy-Efficient Roofing Systems",
      description:
        "Designed to help reduce heat absorption and improve overall building efficiency.",
    },
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Roofing Options
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-black">
            Roofing Materials Available
            <br />
            <em className="text-primary italic">for Re-Roofing</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            We offer a variety of roofing options to match your property's
            needs, performance requirements, and architectural style.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {materials.map((material) => (
            <div
              key={material.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 transition-all duration-300 hover:border-primary/40"
            >
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-4 font-serif text-2xl font-bold text-black">
                {material.title}
              </h3>

              <p className="leading-loose font-medium text-black">
                {material.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
