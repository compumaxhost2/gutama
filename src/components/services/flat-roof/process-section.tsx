export function FlatRoofProcessSection() {
  const content = {
    intro:
      "At Gutama Home Improvement, we follow a proven installation process designed to maximize durability, performance, and long-term protection for your flat roofing system.",

    timeline: "3-10 Days",

    timelineNote:
      "Typical timeline depending on roof size, system type, building conditions, and repair requirements",

    steps: [
      {
        num: "01",
        title: "Roof Inspection and Consultation",
        desc:
          "We assess your property's structure, roofing needs, drainage requirements, and budget.",
      },
      {
        num: "02",
        title: "Material Selection",
        desc:
          "We recommend the most appropriate roofing system based on performance goals and building requirements.",
      },
      {
        num: "03",
        title: "Roof Preparation",
        desc:
          "Old roofing materials are removed when necessary, and the roof deck is inspected.",
      },
      {
        num: "04",
        title: "Repairs and Reinforcement",
        desc:
          "Damaged decking, flashing, and structural components are repaired before installation.",
      },
      {
        num: "05",
        title: "Professional Installation",
        desc:
          "Our team installs the selected roofing system according to manufacturer specifications and industry best practices.",
      },
      {
        num: "06",
        title: "Final Inspection and Cleanup",
        desc:
          "We perform a detailed quality inspection and complete site cleanup.",
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
              Installation Process
            </p>

            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug font-bold text-white">
              Our Flat Roof
              <br />
              <em className="text-secondary italic">Installation Process</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

            <p className="text-[15px] leading-loose text-stone-300">
              {content.intro}
            </p>

            <div className="mt-10 rounded-2xl border border-secondary/30 bg-secondary/5 p-6">
              <p className="mb-2.5 text-[11px] font-semibold tracking-[0.16em] uppercase text-secondary">
                Average Timeline
              </p>

              <p className="mb-1 font-serif text-[32px] font-bold text-white">
                {content.timeline}
              </p>

              <p className="text-xs text-stone-300">
                {content.timelineNote}
              </p>
            </div>
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