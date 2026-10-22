export function EmergencyRepairInsuranceSection() {
  const coveredEvents = [
    "Windstorms",
    "Hail",
    "Fallen trees",
    "Storm damage",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Insurance & Claims
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-white">
              Does Homeowners Insurance Cover
              <br />
              <em className="text-secondary italic">Emergency Roof Repairs?</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-6 text-base leading-loose text-stone-600">
              In many cases, insurance policies may cover roof damage caused by
              sudden events such as:
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {coveredEvents.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-white shadow-md px-5 py-4"
                >
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/85">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-5 font-serif text-2xl text-stone-900">
              Coverage Considerations
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              Coverage depends on your policy terms, the cause of damage, and
              the condition of the roof before the event.
            </p>

            <div className="border-t border-stone-200 pt-6">
              <p className="text-sm leading-loose text-stone-600">
                We can provide documentation and inspection reports that may
                assist during the insurance claims process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}