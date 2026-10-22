export function AdditionsDecisionGuideSection() {
  const additionReasons = [
    "You like your current neighborhood",
    "You need more space but not a new house",
    "You want to increase property value",
  ];

  const movingReasons = [
    "Structural expansion is not feasible",
    "Major layout changes are required",
    "Budget exceeds renovation cost",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Decision Guide
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Home Addition
            <br />
            <em className="text-primary italic">vs Moving</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-6 h-px w-10 bg-primary" />

            <h3 className="mb-6 font-serif text-2xl text-black">
              Choose a Home Addition If:
            </h3>

            <div className="space-y-4">
              {additionReasons.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="font-medium text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-6 h-px w-10 bg-primary" />

            <h3 className="mb-6 font-serif text-2xl text-black">
              Consider Moving If:
            </h3>

            <div className="space-y-4">
              {movingReasons.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="font-medium text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}