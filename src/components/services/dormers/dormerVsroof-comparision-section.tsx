export function DormersComparisonSection() {
  const dormerBenefits = [
    "You want more space without a full home addition",
    "You have an unused attic",
    "You want more light and ventilation",
  ];

  const extensionBenefits = [
    "You need significant square footage increase",
    "Structural roof modification is limited",
    "You want multi-room expansion",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Comparison Guide
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">
            Dormer vs
            <br />
            <em className="text-secondary italic">Roof Extension</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Dormer */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-6 font-serif text-2xl text-stone-900">
              Choose a Dormer If
            </h3>

            <ul className="space-y-4">
              {dormerBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-3 h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm leading-loose text-stone-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Roof Extension */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-6 font-serif text-2xl text-stone-900">
              Choose a Full Roof Extension If
            </h3>

            <ul className="space-y-4">
              {extensionBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-3 h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm leading-loose text-stone-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}