import {
  Award,
  Clock,
  Home,
  Shield,
  DollarSign,
  Droplets,
} from "lucide-react";

const ICON_MAP = {
  shield: Shield,
  clock: Clock,
  dollar: DollarSign,
  award: Award,
  droplets: Droplets,
  home: Home,
} as const;

export function FlatRoofBenefitsSection() {
  const content: Array<{
    icon: keyof typeof ICON_MAP;
    title: string;
    desc: string;
  }> = [
    {
      icon: "shield",
      title: "Superior Weather Protection",
      desc: "Flat roofing systems protect against rain, snow, wind, and seasonal temperature fluctuations common in New Jersey.",
    },
    {
      icon: "clock",
      title: "Improved Energy Efficiency",
      desc: "Modern roofing materials help reduce heat transfer and improve indoor comfort.",
    },
    {
      icon: "dollar",
      title: "Long-Term Cost Savings",
      desc: "Proper installation and maintenance reduce future repair costs and extend roof lifespan.",
    },
    {
      icon: "award",
      title: "Increased Property Value",
      desc: "A professionally installed flat roof enhances property appeal and overall value.",
    },
    {
      icon: "droplets",
      title: "Reliable Waterproofing",
      desc: "Advanced roofing membranes provide excellent resistance against leaks and moisture intrusion.",
    },
    {
      icon: "home",
      title: "Easier Maintenance",
      desc: "Flat roofs allow easier access for inspections, repairs, and equipment maintenance.",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Flat Roofing Benefits
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Benefits of
            <em className="text-primary italic">
              {" "}
              Professional Flat Roof Services
            </em>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            Professionally installed flat roofing systems provide dependable
            protection, improved efficiency, and long-term value for both
            residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {content.map((benefit) => {
            const Icon = ICON_MAP[benefit.icon];

            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
                  <Icon size={18} className="text-primary" />
                </div>

                <h3 className="mb-3 font-serif text-xl leading-snug text-black">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-loose font-medium text-black">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}