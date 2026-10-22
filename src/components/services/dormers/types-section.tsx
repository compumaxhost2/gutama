export function DormersTypesSection() {
  const dormers = [
    {
      title: "Gable Dormer",
      description:
        "A triangular roof dormer that provides strong ventilation and traditional architectural style.",
    },
    {
      title: "Shed Dormer",
      description:
        "A single-sloped roof design that maximizes interior ceiling height and usable space.",
    },
    {
      title: "Hip Dormer",
      description:
        "A dormer with sloped sides that blends smoothly into the existing roofline.",
    },
    {
      title: "Flat Roof Dormer",
      description:
        "A modern design that creates maximum interior space and is ideal for home additions.",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Dormer Options
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Types of
            <br />
            <em className="text-primary italic">Dormers</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {dormers.map((dormer, index) => (
            <div
              key={dormer.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary/30 bg-primary/5">
                  <span className="font-serif text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-black">
                  {dormer.title}
                </h3>
              </div>

              <p className="text-sm leading-loose font-medium text-black">
                {dormer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}