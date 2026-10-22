export function ReRoofingSignsSection() {
  const signs = [
    "Frequent roof leaks",
    "Missing or damaged shingles",
    "Curling or cracked shingles",
    "Water stains on ceilings",
    "Sagging roof sections",
    "Excessive granule loss",
    "Mold or moisture issues",
    "Storm or wind damage",
    "Increasing energy bills",
    "Roof age exceeding 20 to 30 years",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Warning Signs
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-black">
            Signs You May Need
            <br />
            <em className="text-primary italic">Re-Roofing</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            Many roofing problems develop gradually. Recognizing the warning
            signs early can help prevent more expensive repairs.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-stone-200/90 bg-white shadow-2xl p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-3xl font-bold text-black">
            <span className="text-primary">Common Signs</span> Include:
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {signs.map((sign) => (
              <div key={sign} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-primary" />
                <span className="font-medium text-black">{sign}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
            If your roof is showing these symptoms, a professional inspection
            can determine whether re-roofing is the most cost-effective
            solution.
          </p>
        </div>
      </div>
    </section>
  );
}
