export function AdditionsWorkingSection() {
  const steps = [
    {
      number: "01",
      title: "Inspection & Feasibility",
      description: "Property inspection and feasibility study.",
    },
    {
      number: "02",
      title: "Design Planning",
      description: "Architectural design and layout planning.",
    },
    {
      number: "03",
      title: "Permits & Approval",
      description:
        "Permits and local building code approval (Essex County, NJ).",
    },
    {
      number: "04",
      title: "Structural Construction",
      description: "Foundation and structural framing work.",
    },
    {
      number: "05",
      title: "Exterior Integration",
      description: "Roofing and exterior integration.",
    },
    {
      number: "06",
      title: "Systems Installation",
      description:
        "Electrical, plumbing, and insulation installation.",
    },
    {
      number: "07",
      title: "Finishing & Inspection",
      description: "Interior finishing and final inspection.",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Construction Process
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] text-black">
            How Home Additions
            <br />
            <em className="text-primary italic">Work</em>
          </h2>

          <div className="mx-auto mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            Home additions require planning, design, and structural construction
            to safely integrate new space into an existing building.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 transition-all duration-300 hover:border-primary/30"
            >
              <span className="mb-5 block font-serif text-4xl leading-none text-primary/30">
                {step.number}
              </span>

              <h3 className="mb-3 font-serif text-xl text-black">
                {step.title}
              </h3>

              <p className="text-sm leading-loose font-medium text-black">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-primary/20 bg-primary/5 p-8">
          <p className="text-base leading-loose font-medium text-black">
            Each step ensures structural safety, durability, and long-term
            performance.
          </p>
        </div>
      </div>
    </section>
  );
}