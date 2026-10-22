export function StormDamageRepairSection() {
  const damageTypes = [
    {
      title: "Wind Damage",
      description: "Strong winds may:",
      items: [
        "Lift shingles",
        "Remove roofing materials",
        "Damage flashing",
        "Expose roof decking",
      ],
    },
    {
      title: "Hail Damage",
      description: "Hail can create:",
      items: [
        "Cracked shingles",
        "Surface impact damage",
        "Membrane punctures",
        "Reduced roof lifespan",
      ],
    },
    {
      title: "Tree Damage",
      description: "Fallen limbs and trees may cause:",
      items: [
        "Structural damage",
        "Roof penetrations",
        "Gutter damage",
        "Water intrusion",
      ],
    },
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Severe Weather Response
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Storm Damage Roof Repair
            <br />
            <em className="text-primary italic">Newark, NJ</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="max-w-4xl text-base leading-loose font-medium text-black">
            Storm damage can compromise the integrity of your roofing system
            within minutes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {damageTypes.map((damage) => (
            <div
              key={damage.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10"
            >
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-4 font-serif text-2xl text-black">
                {damage.title}
              </h3>

              <p className="mb-6 text-sm leading-loose font-medium text-black">
                {damage.description}
              </p>

              <div className="space-y-3">
                {damage.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-px w-5 shrink-0 bg-primary" />
                    <span className="text-sm text-black/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 text-center">
          <p className="text-base leading-loose font-medium text-black">
            Our roofing specialists provide thorough storm damage assessments
            and emergency repair services.
          </p>
        </div>
      </div>
    </section>
  );
}