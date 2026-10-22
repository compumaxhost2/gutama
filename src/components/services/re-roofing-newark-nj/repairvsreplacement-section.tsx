export function ReRoofingVsReplacementSection() {
  const reroofing = {
    bestFor: [
      "Roofs with one existing layer",
      "Structurally sound decking",
      "Minor to moderate wear",
    ],
    advantages: [
      "Lower upfront cost",
      "Faster installation",
      "Less disruption",
    ],
  };

  const replacement = {
    bestFor: [
      "Severe damage",
      "Multiple roofing layers",
      "Rotted roof decking",
      "Long-term investment",
    ],
    advantages: [
      "Complete structural inspection",
      "Longer lifespan",
      "Better long-term performance",
    ],
  };

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Roofing Comparison
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Re-Roofing vs
            <br />
            <em className="text-primary italic">Roof Replacement</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            Many property owners ask whether re-roofing or complete roof
            replacement is the better option. The right solution depends on the
            condition of your existing roof, long-term goals, and budget.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Re-Roofing */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.16em] text-primary">
                Option One
              </span>

              <h3 className="mt-2 font-serif text-3xl text-black">
                Re-Roofing
              </h3>
            </div>

            <div className="mb-8">
              <h4 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-primary">
                Best For
              </h4>

              <div className="space-y-3">
                {reroofing.bestFor.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-primary" />
                    <span className="text-sm text-black/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-primary">
                Advantages
              </h4>

              <div className="space-y-3">
                {reroofing.advantages.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-primary" />
                    <span className="text-sm text-black/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Replacement */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.16em] text-primary">
                Option Two
              </span>

              <h3 className="mt-2 font-serif text-3xl text-black">
                Roof Replacement
              </h3>
            </div>

            <div className="mb-8">
              <h4 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-primary">
                Best For
              </h4>

              <div className="space-y-3">
                {replacement.bestFor.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-primary" />
                    <span className="text-sm text-black/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-primary">
                Advantages
              </h4>

              <div className="space-y-3">
                {replacement.advantages.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-primary" />
                    <span className="text-sm text-black/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="text-sm leading-loose font-medium text-black">
            A professional roofing inspection is the most reliable way to
            determine whether re-roofing or complete roof replacement is the
            better long-term solution for your property.
          </p>
        </div>
      </div>
    </section>
  );
}