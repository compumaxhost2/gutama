import {
  Award,
  Home,
  Ruler,
  Shield,
  Users,
  Wrench,
} from "lucide-react";

const ICON_MAP = {
  ruler: Ruler,
  shield: Shield,
  award: Award,
  home: Home,
  wrench: Wrench,
  users: Users,
} as const;

export function CarpentryWhyChooseSection() {
  const content: Array<{
    icon: keyof typeof ICON_MAP;
    title: string;
    desc: string;
  }> = [
    {
      icon: "ruler",
      title: "Accurate Structural Alignment",
      desc: "Professional carpentry ensures framing, trim, and structural components are installed with precision and proper alignment.",
    },
    {
      icon: "shield",
      title: "Durable Wood Construction",
      desc: "Quality materials and expert craftsmanship create strong, reliable wood structures built to withstand daily use and exposure.",
    },
    {
      icon: "award",
      title: "Code-Compliant Installation",
      desc: "All work is completed according to current building standards and industry best practices for safety and performance.",
    },
    {
      icon: "home",
      title: "Proper Load Distribution",
      desc: "Structural elements are installed correctly to support weight safely and maintain long-term stability.",
    },
    {
      icon: "wrench",
      title: "Long-Lasting Results",
      desc: "Professional workmanship helps minimize future repairs and extends the lifespan of wood structures and finishes.",
    },
    {
      icon: "users",
      title: "Local New Jersey Expertise",
      desc: "At Gutama Home Improvement, we deliver carpentry solutions built for New Jersey's climate and construction standards.",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Why Choose Professionals
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Why Choose Professional
            <br />
            <em className="text-primary italic">Carpentry Contractors?</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            Carpentry requires precision and structural understanding. Poor
            workmanship can lead to safety risks, costly damage, and premature
            failure of wood structures.
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
      </div>
    </section>
  );
}