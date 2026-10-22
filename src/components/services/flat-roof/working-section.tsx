export function FlatRoofSystemSection() {
  const components = [
    {
      title: "Roof Deck",
      description:
        "The structural foundation that supports the roofing system.",
    },
    {
      title: "Insulation",
      description:
        "Improves thermal efficiency and indoor comfort.",
    },
    {
      title: "Waterproof Membrane",
      description:
        "Protects against moisture penetration and standing water.",
    },
    {
      title: "Flashing Systems",
      description:
        "Seals vulnerable areas around vents, skylights, HVAC units, and roof edges.",
    },
    {
      title: "Drainage Components",
      description:
        "Help direct water away from the roof surface to prevent ponding.",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Roofing System Basics
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            How Does a
            <br />
            <em className="text-primary italic">Flat Roofing System Work?</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            A flat roofing system protects a structure through multiple layers
            designed to prevent water infiltration and withstand environmental
            exposure.
          </p>

          <p className="mt-6 text-base leading-loose font-medium text-black">
            Typical components include:
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {components.map((component) => (
            <div
              key={component.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-4 font-serif text-2xl text-black">
                {component.title}
              </h3>

              <p className="leading-loose font-medium text-black">
                {component.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-5xl">
          <p className="text-base leading-loose font-medium text-black">
            When properly installed, these components work together to create a
            durable and weather-resistant roofing system.
          </p>
        </div>
      </div>
    </section>
  );
}