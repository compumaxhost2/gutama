export function DormersSignsSection() {
  const signs = [
    "Unused attic space",
    "Low ceiling height in upper floors",
    "Limited natural lighting upstairs",
    "Poor attic ventilation",
    "Need for extra bedrooms or office space",
    "Desire to increase home value",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Expansion Indicators
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-tight text-stone-900">
              Signs You May Need
              <br />
              <em className="text-secondary italic">a Dormer Addition</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="text-base leading-loose text-stone-600">
              A dormer can transform underutilized areas into functional living
              space while improving comfort, ventilation, and property value.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-3 sm:grid-cols-2">
            {signs.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-6"
              >
                <div className="mb-4 h-px w-8 bg-secondary" />

                <p className="text-sm leading-loose text-stone-600">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border border-secondary/20 bg-secondary/5 p-8">
          <p className="text-base leading-loose text-stone-600">
            Dormers are one of the most cost-effective home expansion solutions
            in Essex County, NJ.
          </p>
        </div>
      </div>
    </section>
  );
}