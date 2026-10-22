
export function RoofRemovalProcessSection() {
  const content = {
    intro:
      "At Gutama Home Improvement, we follow a proven roof removal process to ensure quality workmanship and customer satisfaction.",

    timeline: "1-3 Days",

    timelineNote:
      "Typical timeline depending on roof size, roofing layers, and property access",

    steps: [
      {
        num: "01",
        title: "Comprehensive Roof Inspection",
        desc:
          "We begin by evaluating the condition of your roof, identifying potential issues, and developing a customized plan for your project.",
      },

      {
        num: "02",
        title: "Property Protection",
        desc:
          "Before work begins, we protect landscaping, driveways, walkways, windows, siding, and outdoor equipment. Protecting your property remains a priority throughout the project.",
      },

      {
        num: "03",
        title: "Complete Roof Tear-Off",
        desc:
          "Our team carefully removes asphalt shingles, architectural shingles, underlayment, flashing, roofing nails, and damaged roofing materials. All materials are safely removed and properly disposed of.",
      },

      {
        num: "04",
        title: "Roof Deck Inspection",
        desc:
          "Once roofing materials are removed, we inspect the underlying roof deck for water damage, rotting wood, structural deterioration, ventilation issues, and hidden leaks. This step ensures that no problems are concealed beneath the new roof.",
      },

      {
        num: "05",
        title: "Necessary Repairs",
        desc:
          "If damaged decking or structural concerns are found, we provide recommendations and complete necessary repairs before moving forward.",
      },

      {
        num: "06",
        title: "Thorough Cleanup",
        desc:
          "We finish every project with a complete cleanup, including magnetic nail sweeps to remove stray nails and debris.",
      },
    ],
  };

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
              <span className="h-px w-6 bg-secondary" />
              Roof Removal Process
            </p>

            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug font-bold text-white">
              Our Professional
              <br />
              <em className="text-secondary italic">Roof Removal Process</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="text-[15px] leading-loose text-stone-300">
              {content.intro}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {content.steps.map((step, i) => (
            <div key={step.num}>
              <div
                className={[
                  "relative flex gap-7",
                  i < content.steps.length - 1 ? "pb-12" : "",
                ].join(" ")}
              >
                {i < content.steps.length - 1 && (
                  <div className="absolute top-14 bottom-0 left-6.75 w-px bg-linear-to-b from-secondary/40 to-secondary/10" />
                )}

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-secondary/35 bg-secondary/10 shadow-lg">
                  <span className="font-serif text-[13px] font-bold tracking-wide text-secondary">
                    {step.num}
                  </span>
                </div>

                <div className="pt-3">
                  <h3 className="mb-2 font-serif text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-loose text-stone-300">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
