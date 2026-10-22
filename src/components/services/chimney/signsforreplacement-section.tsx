
export function ChimneyWarningSignsSection() {
  const signs = [
    "Cracks in chimney bricks or mortar",
    "Water leaks near fireplace or ceiling",
    "Smoke entering the home",
    "Weak or reversed chimney draft",
    "White staining (efflorescence) on bricks",
    "Rusted chimney components",
    "Damaged or missing chimney cap",
    "Loose or falling masonry pieces",
    "Musty smell from fireplace",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Warning Signs
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Signs You Need
            <em className="text-primary italic"> Chimney Repair</em>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            You may need professional chimney services if you notice any of the
            following warning signs. Early inspection helps prevent expensive
            structural repairs and safety hazards.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {signs.map((sign) => (
            <div
              key={sign}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-6 transition-all duration-300 hover:border-primary/40"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />

                <p className="text-sm leading-loose text-black/80">
                  {sign}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="text-sm leading-loose font-medium text-black">
            Cracks, leaks, draft problems, and deteriorating masonry can worsen
            over time. Scheduling a professional chimney inspection early can
            help identify problems before they lead to costly repairs or safety
            concerns.
          </p>
        </div>
      </div>
    </section>
  );
}