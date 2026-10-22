export function ReRoofingWhatSection() {
  const reroofingOptions = [
    "Installing new asphalt shingles over an existing layer",
    "Removing damaged roofing materials before replacement",
    "Upgrading underlayment and flashing systems",
    "Improving roof ventilation and weather protection",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Understanding Re-Roofing
          </p>

          <h2 className="mb-6 font-serif text-[clamp(32px,4vw,52px)] text-white">
            What Is
            <em className="ml-2 text-secondary">Re-Roofing?</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="space-y-6">
          <p className="text-base leading-loose text-stone-300">
            Re-roofing is the process of renewing an existing roof by
            installing new roofing materials. Depending on the roof&apos;s
            condition and local building code requirements, re-roofing may
            involve several different approaches designed to restore weather
            protection, improve performance, and extend the life of the roofing
            system.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {reroofingOptions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-stone-200/90 bg-white shadow-xl p-5"
              >
                <div className="mt-2 h-px w-5 shrink-0 bg-secondary" />
                <span className="text-sm leading-relaxed font-medium text-black">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="text-base leading-loose text-stone-300">
            Re-roofing is commonly used for residential homes and commercial
            properties with aging roofing systems that still have a structurally
            sound roof deck. When appropriate, it can provide a cost-effective
            alternative to a complete roof replacement while improving overall
            protection and curb appeal.
          </p>
        </div>
      </div>
    </section>
  );
}