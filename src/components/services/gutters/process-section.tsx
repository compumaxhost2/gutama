export function GuttersProcessSection() {
  const content = {
  intro:
    "At Gutama Home Improvement, we follow a structured installation process to ensure proper drainage, long-term durability, and reliable system performance.",

  timeline: "Project-Based",

  timelineNote:
    "Timeline varies depending on gutter length, property size, and installation requirements",

  steps: [
    {
      num: "01",
      title: "Property Inspection",
      desc: "We assess roof structure, drainage needs, and existing gutter condition.",
    },
    {
      num: "02",
      title: "Material Selection",
      desc: "We recommend materials based on durability, budget, and aesthetics including aluminum gutters, seamless gutters, copper gutters, and vinyl gutters.",
    },
    {
      num: "03",
      title: "Custom Measurement",
      desc: "We measure rooflines for precise, leak-free installation.",
    },
    {
      num: "04",
      title: "Installation",
      desc: "Gutters and downspouts are securely installed and sealed.",
    },
    {
      num: "05",
      title: "Water Flow Testing",
      desc: "We test drainage to ensure proper water direction and performance.",
    },
  ],
};

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />How We Build</p>
            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug font-bold text-white">Our<br /><em className="text-secondary italic">Process</em></h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="text-[15px] leading-loose text-stone-300">{content.intro}</p>
            <div className="mt-10 border border-secondary/30 bg-secondary/5 p-6">
              <p className="mb-2.5 text-[11px] tracking-[0.16em] uppercase text-secondary">Average Timeline</p>
              <p className="mb-1 font-serif text-[32px] font-bold text-white">{content.timeline}</p>
              <p className="text-xs text-stone-400">{content.timelineNote}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {content.steps.map((step, i) => (
            <div key={step.num}>
              <div className={["relative flex gap-7", i < content.steps.length - 1 ? "pb-12" : ""].join(" ")}>
                {i < content.steps.length - 1 && <div className="absolute top-14 bottom-0 left-6.75 w-px bg-linear-to-b from-secondary/40 to-secondary/10" />}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-secondary/35 bg-secondary/8"><span className="font-serif text-[13px] tracking-wide text-secondary">{step.num}</span></div>
                <div className="pt-3">
                  <h3 className="mb-2 font-serif text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-loose text-stone-300">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
