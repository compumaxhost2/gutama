import {
  Shield,
  Zap,
  Home,
  Building,
  Wrench,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Weather Protection",
    desc: "Protects your home from rain, wind, snow, moisture intrusion, and seasonal temperature changes.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    desc: "Improves insulation performance and helps reduce heating and cooling costs throughout the year.",
  },
  {
    icon: Home,
    title: "Curb Appeal",
    desc: "Enhances the appearance of your property while increasing overall resale value.",
  },
  {
    icon: Building,
    title: "Structural Protection",
    desc: "Helps prevent moisture damage, mold growth, wood rot, and other structural issues.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance Options",
    desc: "Modern siding materials are designed for durability and require minimal upkeep.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Investment",
    desc: "High-quality siding increases property lifespan, performance, and long-term value.",
  },
];

export function SidingBenefitsSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Key Advantages
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Benefits of
            <em className="text-primary italic"> Professional Siding Services</em>
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