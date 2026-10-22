export function ReRoofingProblemsSection() {
  const problems = [
    {
      title: "Damaged Roof Decking",
      description:
        "Water infiltration can weaken the underlying structure and require replacement.",
    },
    {
      title: "Flashing Failures",
      description:
        "Damaged flashing around chimneys, skylights, and vents can cause leaks.",
    },
    {
      title: "Poor Ventilation",
      description:
        "Improper attic ventilation can shorten roof lifespan and increase energy costs.",
    },
    {
      title: "Hidden Water Damage",
      description:
        "Long-term moisture intrusion can impact structural components and insulation.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Roof Inspection Findings
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-white">
            Common Problems We Discover
            <br />
            <em className="text-secondary italic">During Re-Roofing</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-stone-300">
            Many roofing issues remain hidden until the project begins.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-2xl p-8 md:p-10 transition-all duration-300 hover:border-secondary/40"
            >
              <div className="mb-5 h-px w-10 bg-secondary" />

              <h3 className="mb-4 font-serif text-2xl font-bold text-black">
                {problem.title}
              </h3>

              <p className="leading-loose font-medium text-black">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-5xl">
          <p className="text-base leading-loose text-stone-300">
            Addressing these issues during re-roofing helps improve overall roof
            performance and longevity.
          </p>
        </div>
      </div>
    </section>
  );
}
