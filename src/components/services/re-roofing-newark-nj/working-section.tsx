export function ReRoofingProcessSection() {
  const content = {
    intro:
      "Every re-roofing project begins with a thorough evaluation of the existing roofing system to determine the most effective and code-compliant solution.",

    timeline: "2-7 Days",

    timelineNote:
      "Typical timeline for residential re-roofing projects depending on size, materials, and weather conditions.",

    steps: [
      {
        num: "01",
        title: "Comprehensive Roof Inspection",
        desc: "Our roofing specialists inspect asphalt shingles, metal roofing panels, flat roofing systems, flashing, vents, roof decking, and signs of water damage to evaluate the overall condition of the roof.",
      },
      {
        num: "02",
        title: "Determine Re-Roofing Eligibility",
        desc: "Not every roof qualifies for a roof overlay. We evaluate the number of existing roofing layers, structural integrity, local building code requirements, and the presence of leaks, rot, or underlying damage.",
      },
      {
        num: "03",
        title: "Surface Preparation",
        desc: "Before installation begins, damaged sections are repaired or replaced, loose materials are secured, and protective barriers are installed to ensure a stable foundation for the new roofing system.",
      },
      {
        num: "04",
        title: "Install New Roofing System",
        desc: "New roofing materials are installed according to manufacturer specifications and New Jersey building code requirements to maximize durability, weather protection, and long-term performance.",
      },
      {
        num: "05",
        title: "Final Inspection & Quality Review",
        desc: "Every project undergoes a final inspection to verify proper installation, material performance, ventilation, flashing integration, and long-term weather resistance.",
      },
    ],
  };

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Our Process
            </p>

            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug font-bold text-black">
              How
              <br />
              <em className="text-primary italic">Re-Roofing Works</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="text-[15px] leading-loose font-medium text-black">
              {content.intro}
            </p>

            <div className="mt-10 rounded-2xl border border-stone-200/90 bg-white p-6 shadow-md">
              <p className="mb-2.5 text-[11px] font-semibold tracking-[0.16em] uppercase text-primary">
                Average Timeline
              </p>

              <p className="mb-1 font-serif text-[32px] font-bold text-black">
                {content.timeline}
              </p>

              <p className="text-xs font-medium text-black/70">
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
                  <div className="absolute top-14 bottom-0 left-6.75 w-px bg-linear-to-b from-primary/40 to-primary/10" />
                )}

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-white shadow-md">
                  <span className="font-serif text-[13px] font-bold tracking-wide text-primary">
                    {step.num}
                  </span>
                </div>

                <div className="pt-3">
                  <h3 className="mb-2 font-serif text-xl font-bold text-black">
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