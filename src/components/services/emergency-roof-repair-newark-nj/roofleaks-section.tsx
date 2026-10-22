export function EmergencyLeakRepairSection() {
  const signs = [
    "Water stains on ceilings",
    "Wet insulation",
    "Mold growth",
    "Dripping water",
    "Peeling paint",
    "Musty odors",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Emergency Leak Services
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-white">
              Emergency Roof Leak Repair
              <br />
              <em className="text-secondary italic">Newark, NJ</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="mb-6 text-base leading-loose text-stone-600">
              Roof leaks are one of the most common reasons homeowners request
              emergency roofing services.
            </p>

            <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8">
              <h3 className="mb-4 font-serif text-2xl text-stone-900">
                Immediate Leak Response
              </h3>

              <p className="text-sm leading-loose text-stone-600">
                Our team quickly identifies leak sources and performs temporary
                or permanent repairs to prevent further water intrusion.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-secondary">
              Signs of a Roof Leak
            </p>

            <div className="space-y-4">
              {signs.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-stone-200/70 pb-4 last:border-0 last:pb-0"
                >
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-sm text-stone-900/85">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-stone-200 pt-6">
              <p className="text-sm leading-loose text-stone-600">
                Ignoring roof leaks can lead to structural damage and costly
                repairs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
