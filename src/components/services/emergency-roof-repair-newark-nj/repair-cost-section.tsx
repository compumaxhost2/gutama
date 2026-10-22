export function EmergencyRepairCostSection() {
  const factors = [
    "Severity of damage",
    "Roofing material",
    "Accessibility",
    "Size of affected area",
    "Temporary protection requirements",
    "Structural repairs needed",
  ];

  const pricing = [
    {
      service: "Minor Leak Repair",
      cost: "$250 - $1,000",
    },
    {
      service: "Emergency Roof Tarp",
      cost: "$300 - $1,500",
    },
    {
      service: "Storm Damage Repair",
      cost: "$500 - $5,000+",
    },
    {
      service: "Major Structural Repair",
      cost: "Varies by damage",
    },
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Emergency Roofing Costs
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
              How Much Does
              <br />
              <em className="text-primary italic">
                Emergency Roof Repair Cost?
              </em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="mb-6 text-base leading-loose font-medium text-black">
              Emergency roofing costs vary depending on:
            </p>

            <div className="space-y-3">
              {factors.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-primary" />
                  <span className="text-sm text-black/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-stone-200/90 bg-white shadow-md p-6">
              <p className="text-sm leading-loose font-medium text-black">
                Prompt repairs often prevent significantly larger repair
                expenses.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md overflow-hidden">
            <div className="border-b border-stone-200 bg-muted/40 px-8 py-5">
              <h3 className="font-serif text-2xl text-black">
                Average Emergency Roofing Costs
              </h3>
            </div>

            <div className="divide-y divide-border/40">
              {pricing.map((item) => (
                <div
                  key={item.service}
                  className="flex items-center justify-between gap-4 px-8 py-6"
                >
                  <span className="font-medium text-black">
                    {item.service}
                  </span>

                  <span className="text-primary font-medium">
                    {item.cost}
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