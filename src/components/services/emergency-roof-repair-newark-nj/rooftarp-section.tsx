export function EmergencyRoofTarpSection() {
  const benefits = [
    "Prevents additional water damage",
    "Protects interior belongings",
    "Stabilizes damaged areas",
    "Supports insurance claim documentation",
    "Reduces repair costs",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Temporary Protection
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Emergency Roof Tarp Services
            <br />
            <em className="text-primary italic">Newark, NJ</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mb-6 text-base leading-loose font-medium text-black">
            When severe roof damage occurs, temporary roof tarping can provide
            immediate protection until permanent repairs can be completed.
          </p>

          <p className="text-base leading-loose font-medium text-black">
            Emergency roof tarp installation is often recommended after storms,
            fallen tree impacts, or significant roofing failures.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Benefits of Emergency Roof Tarping
          </p>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {benefits.map((item) => (
              <div
                key={item}
                className="border border-stone-200/90 p-6 text-center"
              >
                <div className="mx-auto mb-4 h-px w-8 bg-primary" />

                <p className="text-sm leading-relaxed text-black/85">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}