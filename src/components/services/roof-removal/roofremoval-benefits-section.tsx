
export function RoofRemovalBenefitsSection() {
  const benefits = [
    {
      title: "Complete Roof Inspection",
      description:
        "Roof removal exposes the roof deck, allowing contractors to identify hidden damage, leaks, and structural issues before installing a new roof.",
    },
    {
      title: "Longer Roof Lifespan",
      description:
        "A new roof installed on a clean, properly inspected deck typically lasts longer and performs better.",
    },
    {
      title: "Better Weather Protection",
      description:
        "Removing old roofing materials helps ensure your new roof can withstand heavy rain, snow, wind, and seasonal temperature changes in New Jersey.",
    },
    {
      title: "Prevents Costly Future Repairs",
      description:
        "Discovering and repairing hidden problems during the tear-off process can prevent expensive repairs later.",
    },
    {
      title: "Improved Property Value",
      description:
        "A professionally installed roofing system enhances curb appeal and can increase the value of your home or commercial property.",
    },
    {
      title: "Code-Compliant Installation",
      description:
        "Roof removal helps ensure your new roofing system meets local building codes and manufacturer installation requirements.",
    },
    {
      title: "Enhanced Energy Efficiency",
      description:
        "Proper roof installation and ventilation can improve energy performance and reduce heating and cooling costs.",
    },
    {
      title: "Peace of Mind",
      description:
        "Knowing your roof has been fully inspected and installed correctly provides long-term confidence in your investment.",
    },
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Benefits of Roof Removal
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Why Homeowners Choose
            <br />
            <em className="text-primary italic">Professional Roof Removal</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            Professional roof removal provides more than just a clean slate for
            a new roof. It helps uncover hidden issues, improves long-term
            performance, and protects your investment for years to come.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-md">
          <div className="hidden md:grid md:grid-cols-[280px_1fr] border-b border-stone-200 bg-primary/5">
            <div className="border-r border-stone-200 p-6">
              <h3 className="font-serif text-xl text-black">Benefit</h3>
            </div>

            <div className="p-6">
              <h3 className="font-serif text-xl text-black">
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
                <h4 className="font-serif text-lg text-black">
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
