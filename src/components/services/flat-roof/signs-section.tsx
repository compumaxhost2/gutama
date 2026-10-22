export function SlateRoofSignsSection() {
  const signs = [
    "Cracked, broken, or missing slate tiles",
    "Water leaks or ceiling stains",
    "Slipping or loose tiles",
    "Rusted flashing around roof joints",
    "Aging roof (50+ years old)",
    "Structural sagging or uneven roof lines",
    "Moss or moisture buildup",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Warning Signs
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Signs You May Need Slate Roof
            <br />
            <em className="text-primary italic">Repair or Replacement</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            You may need professional slate roofing services if you notice:
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {signs.map((sign) => (
              <div key={sign} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-primary" />
                <span className="font-medium text-black">{sign}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
            Early inspection helps prevent structural damage and costly repairs.
          </p>
        </div>
      </div>
    </section>
  );
}