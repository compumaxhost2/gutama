export function EmergencyRepairSignsSection() {
  const leakDamage = [
    "Ceilings",
    "Drywall",
    "Flooring",
    "Electrical systems",
    "Insulation",
  ];

  const stormIssues = [
    "Wind-blown shingles",
    "Hail damage",
    "Tree branch impacts",
    "Torn roofing membranes",
  ];

  const emergencySigns = [
    {
      title: "Active Water Leaks",
      description:
        "Water entering your home or building can quickly damage:",
      items: leakDamage,
    },
    {
      title: "Storm Damage",
      description:
        "Newark frequently experiences severe weather that can damage roofing systems. Common storm-related issues include:",
      items: stormIssues,
    },
    {
      title: "Sagging Roof Areas",
      description:
        "A sagging roof may indicate structural damage that requires immediate attention.",
    },
    {
      title: "Exposed Roof Decking",
      description:
        "Missing roofing materials can leave your property vulnerable to moisture intrusion and weather exposure.",
    },
    {
      title: "Commercial Roofing Emergencies",
      description:
        "Flat roofing systems often require immediate repair when drainage failures or membrane damage cause active leaks.",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Emergency Roofing Guide
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            When Should You Call
            <br />
            <em className="text-primary italic">An Emergency Roofer?</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            Not every roofing issue requires immediate service, but some
            situations should be addressed as soon as possible.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {emergencySigns.map((sign) => (
            <div
              key={sign.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10"
            >
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-4 font-serif text-2xl text-black">
                {sign.title}
              </h3>

              <p className="text-sm leading-loose font-medium text-black">
                {sign.description}
              </p>

              {sign.items && (
                <div className="mt-6 space-y-3 border-t border-stone-200 pt-6">
                  {sign.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-px w-5 shrink-0 bg-primary" />
                      <span className="text-sm text-black/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}