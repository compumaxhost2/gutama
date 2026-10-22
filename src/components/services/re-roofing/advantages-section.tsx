export function ReRoofingAdvantagesSection() {
  const benefits = [
    {
      title: "Improved Protection",
      description:
        "A new roofing system provides reliable protection against weather-related damage and leaks.",
    },
    {
      title: "Better Energy Efficiency",
      description:
        "Modern roofing materials can help lower heating and cooling costs.",
    },
    {
      title: "Increased Property Value",
      description:
        "Re-roofing enhances curb appeal and can improve resale potential.",
    },
    {
      title: "Reduced Repairs",
      description:
        "Replacing an aging roof minimizes ongoing repair expenses.",
    },
    {
      title: "Code Compliance",
      description:
        "New roofing systems are installed according to current building regulations and manufacturer standards.",
    },
    {
      title: "Long-Term Investment",
      description:
        "A professionally installed roof delivers years of dependable performance.",
    },
    {
      title: "Enhanced Safety",
      description:
        "Structural issues can be identified and corrected during the re-roofing process.",
    },
    {
      title: "Peace of Mind",
      description:
        "Knowing your roof is secure and professionally installed provides lasting confidence.",
    },
  ];

  return (
    <section className="bg-stone-100 text-stone-900 py-12 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Re-Roofing Advantages
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-black">
            Why Homeowners Choose
            <br />
            <em className="text-primary italic">Professional Re-Roofing</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            Professional re-roofing provides far more than a new appearance. It
            improves protection, efficiency, property value, and long-term
            performance.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-xl">
          <div className="hidden border-b border-stone-200 bg-primary/5 md:grid md:grid-cols-[280px_1fr]">
            <div className="border-r border-stone-200 p-6">
              <h3 className="font-serif text-xl font-bold text-black">
                Benefit
              </h3>
            </div>

            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-black">
                Why It Matters for You
              </h3>
            </div>
          </div>

          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`grid md:grid-cols-[280px_1fr] ${
                index !== benefits.length - 1
                  ? "border-b border-stone-200"
                  : ""
              }`}
            >
              <div className="border-stone-200 p-6 md:border-r">
                <h4 className="font-serif text-lg font-bold text-black">
                  {benefit.title}
                </h4>
              </div>

              <div className="p-6">
                <p className="leading-loose font-medium text-black">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
