export function GuttersSystemSection() {
  const components = [
    "Gutters (horizontal channels)",
    "Downspouts (vertical drainage pipes)",
    "Gutter guards (debris protection)",
    "Elbows and connectors",
    "Drain outlets",
  ];

  const steps = [
    "Rain falls onto the roof surface",
    "Water flows into gutters along roof edges",
    "Gutters channel water toward downspouts",
    "Downspouts direct water safely away from the foundation",
    "Drainage prevents pooling and structural damage",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Gutter Systems
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">
            Understanding Your
            <br />
            <em className="text-secondary italic">Gutter System</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-5 font-serif text-2xl text-stone-900">
              What Is a Gutter System?
            </h3>

            <p className="mb-8 text-sm leading-loose text-stone-600">
              A gutter system is a roof drainage system designed to collect
              rainwater and channel it safely away from a structure&apos;s
              foundation.
            </p>

            <h4 className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-secondary">
              Main Components Include
            </h4>

            <div className="space-y-4">
              {components.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px w-5 shrink-0 bg-secondary" />
                  <span className="text-stone-600">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-stone-200 pt-8 text-sm leading-loose text-stone-600">
              Without a working gutter system, water can pool around the home
              and cause serious structural issues.
            </p>
          </div>

          {/* Right Column */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-5 h-px w-10 bg-secondary" />

            <h3 className="mb-5 font-serif text-2xl text-stone-900">
              How Gutter Systems Work
            </h3>

            <p className="mb-8 text-sm leading-loose text-stone-600">
              A gutter system works by collecting rainwater from the roof and
              directing it away from the building.
            </p>

            <h4 className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-secondary">
              Step-by-Step Process
            </h4>

            <div className="space-y-5">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="font-serif text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-stone-600">{step}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-stone-200 pt-8 text-sm leading-loose text-stone-600">
              Proper installation ensures smooth water flow and long-term
              protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}