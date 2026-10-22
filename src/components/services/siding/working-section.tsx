export function SidingHowItWorksSection() {
  const functions = [
    "Exterior wall is covered with siding panels",
    "Underlayment protects against moisture",
    "Insulation layer improves energy efficiency",
    "Siding blocks weather exposure and UV damage",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Protection System
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-snug text-black">
              How
              <br />
              <em className="text-primary italic">Siding Works</em>
            </h2>

            <div className="mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="mb-5 text-base leading-loose font-medium text-black">
              Siding works as a protective envelope around your home or
              building. It shields exterior walls from moisture, wind, UV
              exposure, and seasonal weather conditions while helping improve
              insulation and overall energy performance.
            </p>

            <p className="text-base leading-loose font-medium text-black">
              A properly installed siding system creates multiple layers of
              protection that work together to keep the structure dry,
              comfortable, and protected year-round.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-10">
            <h3 className="mb-8 font-serif text-2xl text-black">
              Basic Function
            </h3>

            <div className="space-y-5">
              {functions.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-stone-200/70 pb-5 last:border-0 last:pb-0"
                >
                  <span className="font-serif text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-loose font-medium text-black">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-stone-200/90 pt-6">
              <p className="text-sm leading-loose font-medium text-black">
                If siding becomes damaged, water can enter the structure and
                cause mold growth, wood rot, insulation failure, and costly
                structural damage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}