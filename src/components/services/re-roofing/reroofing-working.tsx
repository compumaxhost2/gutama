export function HowReRoofingWorksSection() {
  const steps = [
    "Roof inspection and assessment",
    "Removal of damaged roofing materials when necessary",
    "Roof deck inspection",
    "Structural or decking repairs",
    "Installation of underlayment and waterproofing materials",
    "Installation of new roofing materials",
    "Final quality inspection and cleanup",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Re-Roofing Guide
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-black">
            How Does
            <br />
            <em className="text-primary italic">Re-Roofing Work?</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            A re-roofing project typically begins with a comprehensive roof
            inspection to evaluate the condition of the existing roofing
            system.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-stone-200/90 bg-white shadow-xl p-8 md:p-10 lg:p-12">
          <h3 className="mb-8 font-serif text-3xl font-bold text-black">
            <span className="text-primary">The Process</span> Generally Includes:
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-primary" />
                <span className="font-medium text-black">{step}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
            This process ensures your new roof is installed on a solid
            foundation and meets current building code requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
