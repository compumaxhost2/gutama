import {
  Clock,
  Shield,
  Search,
  HardHat,
  Wrench,
} from "lucide-react";

export function EmergencyRepairWhyChooseSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Fast Response Times",
      desc: "Rapid emergency response helps minimize damage and protect your property from further exposure.",
    },
    {
      icon: Search,
      title: "Proper Leak Detection",
      desc: "Accurate inspections identify the source of water intrusion and underlying roofing issues.",
    },
    {
      icon: HardHat,
      title: "Safe Structural Handling",
      desc: "Damaged roofing systems are stabilized and handled using proper safety procedures.",
    },
    {
      icon: Shield,
      title: "Effective Temporary Protection",
      desc: "Emergency tarping and temporary repairs help prevent additional water damage.",
    },
    {
      icon: Wrench,
      title: "Long-Term Repair Solutions",
      desc: "Permanent repair recommendations help restore roof performance and durability.",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Professional Emergency Roofing
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Why Choose Professional
            <br />
            <em className="text-primary italic">Emergency Roof Contractors?</em>
          </h2>

          <div className="mx-auto mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            Emergency roofing requires speed, safety, and technical expertise.
            Professional service ensures reliable protection during urgent
            roofing situations and helps prevent further property damage.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
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

        <div className="mt-12 rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 text-center">
          <p className="text-base leading-loose font-medium text-black">
            At Gutama Home Improvement, we provide emergency roofing solutions
            built for New Jersey&apos;s extreme weather conditions including
            storms, heavy rain, and wind damage.
          </p>
        </div>
      </div>
    </section>
  );
}