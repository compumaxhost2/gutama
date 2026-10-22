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

export function DormersWhyChooseSection() {
  const content: Array<{
    icon: keyof typeof ICON_MAP;
    title: string;
    desc: string;
  }> = [
    {
      icon: "shield",
      title: "Proper Roof Load Distribution",
      desc: "Professional installation ensures structural loads are properly transferred and supported throughout the roof system.",
    },
    {
      icon: "home",
      title: "Structural Safety & Stability",
      desc: "Dormers are built with the framing and reinforcement required for long-term structural integrity.",
    },
    {
      icon: "ruler",
      title: "Waterproof Flashing & Sealing",
      desc: "Proper flashing and weatherproofing help prevent leaks, moisture intrusion, and water damage.",
    },
    {
      icon: "award",
      title: "Code-Compliant Construction",
      desc: "Every dormer project is completed according to applicable building codes and construction requirements.",
    },
    {
      icon: "clock",
      title: "Long-Term Durability",
      desc: "Quality construction methods help ensure reliable performance for years to come.",
    },
    {
      icon: "users",
      title: "Built for New Jersey Weather",
      desc: "Dormers are designed to withstand snow, rain, wind, and seasonal temperature changes throughout New Jersey.",
    },
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Why Choose Professionals
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Why Choose Professional
            <br />
            <em className="text-primary italic">Dormer Contractors?</em>
          </h2>

          <div className="mx-auto mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            Dormer installation is a structural roofing modification, not a
            cosmetic upgrade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {content.map((item) => {
            const Icon = ICON_MAP[item.icon];

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
                  <Icon size={18} className="text-primary" />
                </div>

                <h3 className="mb-3 font-serif text-xl leading-snug text-black">
                  {item.title}
                </h3>

                <p className="text-sm leading-loose font-medium text-black">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 border border-primary/20 bg-primary/5 p-8">
          <p className="text-base leading-loose font-medium text-black">
            At Gutama Home Improvement, we build dormers designed to withstand
            snow, rain, wind, and seasonal temperature changes in New Jersey.
          </p>
        </div>
      </div>
    </section>
  );
}