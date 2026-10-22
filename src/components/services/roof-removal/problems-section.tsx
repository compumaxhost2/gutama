
export function RoofRemovalProblemsSection() {
  const problems = [
    {
      title: "Damaged Roof Decking",
      description:
        "Water intrusion can weaken plywood and create unsafe conditions.",
    },
    {
      title: "Hidden Leaks",
      description:
        "Small leaks often go unnoticed until roofing materials are removed.",
    },
    {
      title: "Improper Ventilation",
      description:
        "Poor attic ventilation can contribute to moisture buildup, mold growth, and reduced roof lifespan.",
    },
    {
      title: "Flashing Failures",
      description:
        "Damaged flashing around chimneys, skylights, and roof penetrations can lead to water infiltration.",
    },
    {
      title: "Mold and Moisture Damage",
      description:
        "Long-term moisture exposure can affect both roofing materials and structural components.",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Roof Inspection Findings
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Common Problems Found During
            <br />
            <em className="text-primary italic">Roof Removal</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            Many roofing issues remain hidden until the old roof is removed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-3 font-serif text-2xl text-black">
                {problem.title}
              </h3>

              <p className="leading-loose font-medium text-black">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-5xl">
          <p className="text-base leading-loose font-medium text-black">
            Addressing these problems during roof replacement helps prevent
            future issues and improves overall roof performance.
          </p>
        </div>
      </div>
    </section>
  );
}
