import {
  Award,
  Clock,
  Home,
  Ruler,
  Shield,
  Users,
} from "lucide-react";

const ICON_MAP = {
  award: Award,
  clock: Clock,
  home: Home,
  ruler: Ruler,
  shield: Shield,
  users: Users,
} as const;

export function EmergencyRepairBenefitsSection() {
  const content: Array<{
    icon: keyof typeof ICON_MAP;
    title: string;
    desc: string;
  }> = [
      {
        icon: "shield",
        title: "Prevents Water Damage",
        desc: "Stops leaks before they damage ceilings, walls, and insulation.",
      },
      {
        icon: "home",
        title: "Protects Home Structure",
        desc: "Prevents long-term structural weakening.",
      },
      {
        icon: "award",
        title: "Reduces Repair Costs",
        desc: "Early intervention avoids expensive reconstruction.",
      },
      {
        icon: "users",
        title: "Improves Safety",
        desc: "Eliminates risks from falling debris or weakened roofing.",
      },
      {
        icon: "clock",
        title: "Fast Response Protection",
        desc: "Immediate action minimizes storm-related damage.",
      },
    ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary"><span className="h-px w-6 bg-primary" />Why Clients Choose Us</p>
          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">The <em className="text-primary italic">Difference</em> You&apos;ll Notice</h2>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {content.map((benefit) => {
            const Icon = ICON_MAP[benefit.icon];
            return (
              <div key={benefit.title} className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl text-black leading-snug">{benefit.title}</h3>
                <p className="text-sm font-medium text-black leading-loose">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
