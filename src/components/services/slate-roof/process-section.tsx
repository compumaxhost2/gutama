export function SlateRoofProcessSection() {
  const content = {
        intro: "Slate roofing demands patience, precision, and detailing choices that respect both the material and the architecture it protects.",
        timeline: "3-12 Days",
        timelineNote: "Typical timeline depending on repair extent and access conditions",
        steps: [
          { num: "01", title: "Roof Assessment", desc: "We inspect broken slates, flashing details, fastening condition, and the broader health of the slate system." },
          { num: "02", title: "Repair Strategy", desc: "We define whether selective slate replacement, flashing correction, or a broader restoration scope is needed." },
          { num: "03", title: "Material Matching", desc: "Replacement slate size, texture, and visual compatibility are considered before installation begins." },
          { num: "04", title: "Slate & Flashing Work", desc: "Damaged units are replaced and flashing details are repaired or upgraded where needed to restore protection." },
          { num: "05", title: "Finish Review", desc: "The repaired areas are checked for alignment, visual continuity, and proper installation detailing." },
          { num: "06", title: "Final Walkthrough", desc: "We review the completed scope with you and explain any recommended maintenance or future monitoring points." },
        ],
      };

  return (
    <section className="bg-stone-100 text-stone-900 py-28 px-6 border-t border-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />How We Build</p>
            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug text-stone-900">Our<br /><em className="text-secondary">Process</em></h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="text-[15px] leading-loose text-stone-600">{content.intro}</p>
            <div className="mt-10 border border-secondary/30 bg-secondary/5 p-6">
              <p className="mb-2.5 text-[11px] tracking-[0.16em] uppercase text-secondary">Average Timeline</p>
              <p className="mb-1 font-serif text-[32px] text-stone-900">{content.timeline}</p>
              <p className="text-xs text-stone-600">{content.timelineNote}</p>
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
                  <h3 className="mb-2 font-serif text-xl text-stone-900">{step.title}</h3>
                  <p className="text-sm leading-loose text-stone-600">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
