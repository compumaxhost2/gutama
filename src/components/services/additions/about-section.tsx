export function AdditionsTypesSection() {
  const additionTypes = [
    "Room extensions",
    "Kitchen expansions",
    "Bathroom additions",
    "Second-story additions",
    "Garage additions",
    "Sunrooms and enclosed patios",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Home Expansion
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-tight font-bold text-white">
              What Is a
              <br />
              <em className="text-secondary italic">Home Addition?</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="text-base leading-loose text-stone-300">
              A home addition is a construction project that increases the
              square footage of an existing property by building new structures
              attached to the original building.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <h3 className="mb-8 font-serif text-2xl text-stone-900">
              Common Types of Home Additions
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {additionTypes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border border-stone-200/70 p-4"
                >
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm font-medium text-stone-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border border-secondary/20 bg-secondary/5 p-8">
          <p className="text-base leading-loose text-stone-300">
            Home additions are one of the most effective ways to increase
            property value without relocating.
          </p>
        </div>
      </div>
    </section>
  );
}