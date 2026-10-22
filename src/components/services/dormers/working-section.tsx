export function DormersHowItWorksSection() {
  const steps = [
    "Roof inspection and structural assessment",
    "Design planning and dormer layout",
    "Roof cutting and reinforcement framing",
    "Dormer structural framing installation",
    "Window installation and sealing",
    "Roofing integration and waterproofing",
    "Interior insulation and finishing",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Construction Overview
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-tight text-black">
              How Dormer
              <br />
              <em className="text-primary italic">Construction Works</em>
            </h2>

            <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="text-base leading-loose font-medium text-black">
              Dormer installation requires structural modification of the
              existing roof system.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md">
            <div className="border-b border-stone-200/90 px-8 py-6">
              <h3 className="font-serif text-2xl text-black">
                Step-by-Step Process
              </h3>
            </div>

            <div className="divide-y divide-border/30">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-6 px-8 py-6"
                >
                  <span className="font-serif text-xl text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-loose font-medium text-black">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border border-primary/20 bg-primary/5 p-8">
          <p className="text-base leading-loose font-medium text-black">
            Proper installation ensures structural safety, weather resistance,
            and long-term durability.
          </p>
        </div>
      </div>
    </section>
  );
}