import {
  AlertTriangle,
  Clock3,
  Droplets,
  Hammer,
  Wind,
} from "lucide-react";

const SIGNS = [
  {
    icon: Clock3,
    title: "Aging Roof",
    desc: "Most asphalt shingle roofs last approximately 20–30 years depending on maintenance, installation quality, and weather exposure.",
  },
  {
    icon: Hammer,
    title: "Frequent Repairs",
    desc: "Repeated leak repairs and recurring roofing issues often indicate that the roof is approaching the end of its service life.",
  },
  {
    icon: AlertTriangle,
    title: "Missing or Damaged Shingles",
    desc: "Common warning signs include curling shingles, cracked shingles, missing shingles, and excessive granule loss.",
  },
  {
    icon: Droplets,
    title: "Water Intrusion",
    desc: "Water stains on ceilings, attic moisture, mold growth, or unexplained leaks may signal roofing system failure.",
  },
  {
    icon: Wind,
    title: "Storm Damage",
    desc: "Newark homes frequently experience roof damage from strong winds, heavy rain, snow accumulation, and seasonal weather events.",
  },
] as const;

export function ReRoofingSignsSection() {
  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Warning Signs
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">
            Signs You Need
            <br />
            <em className="text-secondary italic">Re-Roofing</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose text-stone-300">
            If you notice any of the following issues, it may be time to
            consider professional re-roofing services before minor problems
            develop into costly structural repairs.
          </p>
        </div>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {SIGNS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 transition-all duration-500 hover:border-secondary/40 hover:shadow-xl"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
                <item.icon
                  size={18}
                  className="text-secondary"
                />
              </div>

              <h3 className="mb-3 font-serif text-xl text-stone-900">
                {item.title}
              </h3>

              <p className="text-sm leading-loose text-stone-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}