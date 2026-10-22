export function SlateRoofUsesSection() {
  const applications = [
    "Luxury residential homes",
    "Historic or heritage properties",
    "High-value commercial buildings",
    "Architectural roofing projects requiring premium aesthetics",
  ];


  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* WHAT IS SLATE ROOFING USED FOR */}
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Applications
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-white">
            What is Slate Roofing
            <br />
            <em className="text-secondary italic">Used For?</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-white">
            Slate roofing is typically used for:
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-stone-200/90 bg-white shadow-2xl p-8 md:p-10 lg:p-12">
          <div className="grid gap-5 md:grid-cols-2">
            {applications.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="font-medium text-black">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
            It is chosen for its combination of strength, longevity, and visual
            appeal.
          </p>
        </div>

        {/* HOW SLATE ROOFING WORKS */}
        <div className="mt-20">
          <div className="max-w-5xl">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Installation Process
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-white">
              How Slate Roofing
              <br />
              <em className="text-secondary italic">Works</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="max-w-4xl text-base leading-loose text-white">
              A slate roofing system is built by layering natural stone tiles over a
              waterproof underlayment and reinforced roof structure.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                num: "01",
                title: "Inspection & Evaluation",
                desc: "Roof inspection and structural evaluation.",
              },
              {
                num: "02",
                title: "Roof Preparation",
                desc: "Existing roofing is removed and the roof deck is reinforced when needed.",
              },
              {
                num: "03",
                title: "Waterproof Protection",
                desc: "Premium underlayment and flashing systems are installed.",
              },
              {
                num: "04",
                title: "Slate Installation",
                desc: "Natural slate tiles are precisely installed and inspected.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 transition-all duration-500 hover:border-secondary/30"
              >
                <p className="mb-6 font-serif text-5xl text-secondary/25 transition-colors group-hover:text-secondary/40">
                  {item.num}
                </p>

                <h3 className="mb-4 font-serif text-xl font-bold text-black">
                  {item.title}
                </h3>

                <p className="leading-loose font-medium text-black">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-secondary/25 bg-secondary/5 p-8">
            <p className="font-serif text-xl font-bold text-secondary">
              Structural Reinforcement Matters
            </p>

            <p className="mt-3 leading-loose text-white">
              Because slate is significantly heavier than traditional roofing
              materials, structural support is often reinforced before installation to
              ensure long-term performance and safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}