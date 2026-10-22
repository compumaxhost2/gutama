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

export function CarpentryBenefitsSection() {
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
    desc: "Quality craftsmanship and material selection help create strong, reliable wood structures built to last.",
  },
  {
    icon: "award",
    title: "Code-Compliant Installation",
    desc: "Projects are completed according to current building standards and industry best practices.",
  },
  {
    icon: "home",
    title: "Proper Load Distribution",
    desc: "Structural elements are installed correctly to support weight safely and maintain long-term stability.",
  },
  {
    icon: "clock",
    title: "Long-Lasting Results",
    desc: "Expert installation reduces future repairs and helps maximize the lifespan of carpentry work.",
  },
  {
    icon: "users",
    title: "Local New Jersey Expertise",
    desc: "At Gutama Home Improvement, we deliver carpentry solutions designed for New Jersey's climate and construction requirements.",
  },
];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />Why Clients Choose Us</p>
          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">The <em className="text-secondary italic">Difference</em> You&apos;ll Notice</h2>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {content.map((benefit) => {
            const Icon = ICON_MAP[benefit.icon];
            return (
              <div key={benefit.title} className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl">
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
                  <Icon size={18} className="text-secondary" />
                </div>
                <h3 className="mb-3 font-serif text-xl text-stone-900 leading-snug">{benefit.title}</h3>
                <p className="text-sm text-stone-600 leading-loose">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
