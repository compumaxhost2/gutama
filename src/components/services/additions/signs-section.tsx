export function AdditionsSignsSection() {
  const signs = [
    "Your home feels overcrowded",
    "You need more bedrooms or bathrooms",
    "You work from home and need office space",
    "Your family is growing",
    "You want to increase property value",
    "You prefer expanding instead of relocating",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              When to Expand
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-tight text-stone-900">
              Signs You May Need
              <br />
              <em className="text-secondary italic">a Home Addition</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="text-base leading-loose text-stone-600">
              If your current home no longer supports your lifestyle, a home
              addition can provide the extra space and functionality you need
              without the cost and disruption of moving.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="grid gap-4">
              {signs.map((sign) => (
                <div
                  key={sign}
                  className="flex items-center gap-4 border-b border-stone-200/70 pb-4 last:border-0 last:pb-0"
                >
                  <div className="h-px w-6 shrink-0 bg-secondary" />
                  <span className="text-base text-stone-600">
                    {sign}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}