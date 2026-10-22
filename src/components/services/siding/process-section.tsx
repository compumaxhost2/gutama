export function SidingProcessSection() {
  const content = {
    intro:
      "At Gutama Home Improvement, we follow a structured installation process designed to deliver long-lasting protection, energy efficiency, and exceptional curb appeal.",

    timeline: "5 Steps",
    timelineNote:
      "A proven siding installation process focused on durability, performance, and appearance",

    steps: [
      {
        num: "01",
        title: "Property Inspection",
        desc: "We evaluate exterior walls and identify any existing damage, moisture concerns, or weak areas that should be addressed before installation.",
      },
      {
        num: "02",
        title: "Material Selection",
        desc: "Our team recommends siding materials based on your budget, climate conditions, design preferences, and energy efficiency goals.",
      },
      {
        num: "03",
        title: "Surface Preparation",
        desc: "Existing siding is removed when necessary, and wall surfaces are prepared to ensure a secure and weather-resistant installation.",
      },
      {
        num: "04",
        title: "Installation",
        desc: "New siding panels are professionally installed with proper alignment, fastening, sealing, and attention to detail.",
      },
      {
        num: "05",
        title: "Final Inspection",
        desc: "We perform a thorough quality inspection to verify durability, weather resistance, and the finished appearance of the project.",
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
              Installation Process
            </p>

            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug text-black">
              Siding
              <br />
              <em className="text-primary italic">Installation Process</em>
            </h2>

            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="text-[15px] leading-loose font-medium text-black">
              {content.intro}
            </p>

            <div className="mt-10 border border-primary/30 bg-primary/5 p-6">
              <p className="mb-2.5 text-[11px] tracking-[0.16em] uppercase text-primary">
                Project Process
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