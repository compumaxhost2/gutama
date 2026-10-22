import { Award, Clock, Home, Ruler, Shield, Users } from "lucide-react";

const BENEFITS = [
  {
    icon: Shield,
    title: "Safe Structural Integration",
    desc: "Home additions are designed and constructed to integrate safely with the existing structure.",
  },
  {
    icon: Home,
    title: "Proper Foundation Support",
    desc: "Every addition is built on a foundation system designed for long-term stability and performance.",
  },
  {
    icon: Award,
    title: "Code-Compliant Construction",
    desc: "All work follows New Jersey building codes and local Essex County requirements.",
  },
  {
    icon: Ruler,
    title: "Waterproofing & Insulation Efficiency",
    desc: "Proper sealing, insulation, and moisture protection help improve comfort and energy efficiency.",
  },
  {
    icon: Clock,
    title: "Long-Term Durability",
    desc: "Quality materials and professional construction methods help maximize lifespan and reliability.",
  },
  {
    icon: Users,
    title: "Built for New Jersey Weather",
    desc: "Additions are designed to withstand snow, rain, wind, and seasonal temperature changes.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Why Clients Choose Us
            </p>
            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
              The <em className="text-primary italic">Difference</em> You&apos;ll Notice
            </h2>
          </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title}>
              <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
                  <b.icon size={18} className="text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl text-black leading-snug">{b.title}</h3>
                <p className="text-sm font-medium text-black leading-loose">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
