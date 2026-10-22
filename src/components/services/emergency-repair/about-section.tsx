export function EmergencyRepairBasicsSection() {
  const situations = [
    "Severe roof leaks during rainstorms",
    "Storm or wind damage",
    "Fallen tree or debris impact",
    "Missing or broken shingles",
    "Roof flashing failures",
    "Structural roof damage",
    "Sudden ceiling leaks",
  ];

  const process = [
    "Emergency inspection and damage assessment",
    "Temporary leak protection (tarping or sealing)",
    "Identification of damaged roofing areas",
    "Immediate repair or stabilization",
    "Water intrusion prevention measures",
    "Final repair recommendations or full replacement planning",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Emergency Roofing
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">
            Emergency Roof Repair
            <br />
            <em className="text-secondary italic">Information Guide</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* What Is Emergency Roof Repair */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-4 font-serif text-2xl text-stone-900">
              What Is Emergency Roof Repair?
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              Emergency roof repair involves fast-response roofing solutions to
              stop active leaks and stabilize damaged roofing systems.
            </p>

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.12em] text-secondary">
              Common Emergency Roofing Situations
            </p>

            <div className="space-y-3">
              {situations.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/80">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-stone-200 pt-6 text-sm leading-loose text-stone-600">
              Emergency repairs are temporary or permanent fixes depending on
              damage severity.
            </p>
          </div>

          {/* How Emergency Roof Repair Works */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-4 font-serif text-2xl text-stone-900">
              How Emergency Roof Repair Works
            </h3>

            <p className="mb-6 text-sm leading-loose text-stone-600">
              Emergency roofing focuses on fast damage control and immediate
              protection.
            </p>

            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="font-serif text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm text-stone-900/80">{step}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-stone-200 pt-6 text-sm leading-loose text-stone-600">
              The goal is to stop damage quickly and prevent costly structural
              issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}