import {
  Shield,
  Droplets,
  Flame,
  Building2,
  Wallet,
  Home,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Improved Safety",
    desc: "Professional chimney services help prevent fire hazards, smoke issues, and carbon monoxide risks by ensuring the system operates safely.",
  },
  {
    icon: Droplets,
    title: "Leak Protection",
    desc: "Repairs and maintenance help stop water infiltration that can damage roofing systems, masonry, ceilings, and interior finishes.",
  },
  {
    icon: Flame,
    title: "Better Heating Efficiency",
    desc: "A properly functioning chimney promotes efficient airflow and supports the performance of fireplaces and heating systems.",
  },
  {
    icon: Building2,
    title: "Longer Chimney Lifespan",
    desc: "Routine inspections and repairs help prevent premature structural deterioration and extend the life of the chimney system.",
  },
  {
    icon: Wallet,
    title: "Cost Savings",
    desc: "Addressing minor issues early helps reduce the likelihood of expensive reconstruction projects and emergency repairs.",
  },
  {
    icon: Home,
    title: "Property Value",
    desc: "Well-maintained chimneys improve home inspection results, enhance curb appeal, and support long-term property value.",
  },
];

export function ChimneyBenefitsSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Why It Matters
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Benefits of Professional
            <em className="text-primary italic"> Chimney Services</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

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