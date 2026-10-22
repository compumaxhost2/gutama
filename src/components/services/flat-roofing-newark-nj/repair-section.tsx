export function FlatRoofRepairSection() {
  const problems = [
    {
      title: "Flat Roof Leaks",
      intro: "Water intrusion can occur from:",
      items: [
        "Membrane punctures",
        "Damaged flashing",
        "Open seams",
        "Drainage issues",
      ],
    },
    {
      title: "Ponding Water",
      description:
        "Standing water can place excessive stress on roofing materials and accelerate deterioration.",
    },
    {
      title: "Membrane Damage",
      intro: "Exposure to harsh weather may cause:",
      items: [
        "Cracks",
        "Tears",
        "Blisters",
        "Shrinkage",
      ],
    },
    {
      title: "Flashing Failure",
      description:
        "Damaged flashing around roof penetrations often becomes a source of leaks.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Repair Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-white">
            Flat Roof Repair
            <br />
            <em className="text-secondary italic">Newark NJ</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="max-w-4xl text-base leading-loose text-stone-600">
            Even high-quality flat roofing systems may require repairs over time
            due to weather exposure, aging materials, or storm damage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8"
            >
              <div className="mb-5 h-px w-10 bg-secondary" />

              <h3 className="mb-4 font-serif text-xl text-stone-900">
                {problem.title}
              </h3>

              {problem.intro && (
                <p className="mb-5 text-sm leading-loose text-stone-600">
                  {problem.intro}
                </p>
              )}

              {problem.items && (
                <div className="space-y-3">
                  {problem.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="h-px w-5 shrink-0 bg-secondary" />
                      <span className="text-sm text-stone-900/85">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {problem.description && (
                <p className="text-sm leading-loose text-stone-600">
                  {problem.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}