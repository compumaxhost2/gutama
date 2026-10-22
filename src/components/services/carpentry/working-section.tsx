export function CarpentryHowItWorksSection() {
  const steps = [
    "Property inspection and measurement",
    "Material selection (wood type and grade)",
    "Cutting and fabrication",
    "Structural installation or repair",
    "Finishing and alignment",
    "Final quality inspection",
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Understanding The Process
          </p>

          <h2 className="mb-6 font-serif text-[clamp(32px,4vw,52px)] leading-snug text-black">
            How Carpentry
            <br />
            <em className="text-primary italic">Services Work</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mb-10 text-base leading-loose font-medium text-black">
            Carpentry involves designing, measuring, cutting, and installing
            wood structures based on building requirements. Professional
            carpentry ensures structural strength, safety, proper alignment,
            and long-term durability.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-2xl text-black">
            Basic Carpentry Process
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="border border-stone-200/90 bg-muted/10 p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center border border-primary/35 bg-primary/5">
                  <span className="font-serif text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-black/80">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
            Proper carpentry ensures structural strength, safety, and
            long-term durability while maintaining the appearance and
            functionality of your property.
          </p>
        </div>
      </div>
    </section>
  );
}