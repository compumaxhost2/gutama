
export function RoofRemovalSignsSection() {
  const signs = [
    "Frequent roof leaks",
    "Missing or damaged shingles",
    "Curling or buckling shingles",
    "Water stains on ceilings or walls",
    "Mold or mildew growth",
    "Soft spots on the roof",
    "Sagging roof sections",
    "Excessive granule loss",
    "Multiple layers of roofing materials",
    "Roof age exceeding 20 to 30 years",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
          Signs You May Need <em className="text-primary italic">Roof Removal</em>
        </h2>

        <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

        <div className="max-w-5xl">
          <p className="text-base leading-loose font-medium text-black">
            Not every roof requires a complete tear-off, but several warning
            signs indicate that roof removal may be necessary.
          </p>
        </div>

        <div className="mt-12 rounded-sm rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
          <h3 className="mb-6 font-serif text-3xl text-black">
            Common Signs Include:
          </h3>

          <ul className="grid gap-4 md:grid-cols-2">
            {signs.map((sign) => (
              <li key={sign} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-primary" />
                <span className="font-medium text-black">{sign}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-loose font-medium text-black">
            If you notice any of these issues, a professional roof inspection
            can determine whether roof removal is the best option.
          </p>
        </div>
      </div>
    </section>
  );
}
