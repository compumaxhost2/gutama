export function ChimneyProcessSection() {
  const content = {
    intro:
      "At Gutama Home Improvement, we follow a structured repair process designed to identify problems accurately, restore chimney performance, and improve long-term safety.",

    timeline: "1-5 Days",

    timelineNote:
      "Typical timeline depending on chimney condition, repair scope, and accessibility",

    steps: [
      {
        num: "01",
        title: "Chimney Inspection",
        desc: "We assess the condition of the chimney system, including internal and external components, to identify visible and hidden issues.",
      },
      {
        num: "02",
        title: "Damage Diagnosis",
        desc: "Our team identifies problems such as leaks, cracked masonry, deteriorated mortar joints, damaged flashing, and structural instability.",
      },
      {
        num: "03",
        title: "Repair Planning",
        desc: "Based on the severity of the damage and safety requirements, we recommend the most effective repair solution for your property.",
      },
      {
        num: "04",
        title: "Repair Execution",
        desc: "We repair or replace damaged components including bricks, mortar joints, flashing systems, chimney caps, and flue liners.",
      },
      {
        num: "05",
        title: "Final Safety Check",
        desc: "We verify proper airflow, structural integrity, leak protection, and overall chimney safety before completing the project.",
      },
    ],
  };

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Our Process
            </p>

            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug text-black">
              Chimney Repair
              <br />
              <em className="text-primary italic">Process</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="text-[15px] leading-loose font-medium text-black">
              {content.intro}
            </p>

            <div className="mt-10 border border-primary/30 bg-primary/5 p-6">
              <p className="mb-2.5 text-[11px] tracking-[0.16em] uppercase text-primary">
                Typical Timeline
              </p>

              <p className="mb-1 font-serif text-[32px] text-black">
                {content.timeline}
              </p>

              <p className="text-xs font-medium text-black">
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

                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-primary/35 bg-primary/8">
                  <span className="font-serif text-[13px] tracking-wide text-primary">
                    {step.num}
                  </span>
                </div>

                <div className="pt-3">
                  <h3 className="mb-2 font-serif text-xl text-black">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-loose font-medium text-black">
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