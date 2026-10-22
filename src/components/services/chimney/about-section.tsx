import {
  Shield,
  Wind,
  Flame,
  Building2,
  Wrench,
  Home,
} from "lucide-react";

const ICON_MAP = {
  shield: Shield,
  wind: Wind,
  flame: Flame,
  building: Building2,
  wrench: Wrench,
  home: Home,
} as const;

export function ChimneyAboutSection() {
  const content: Array<{
    icon: keyof typeof ICON_MAP;
    title: string;
    desc: string;
  }> = [
    {
      icon: "wind",
      title: "Safe Ventilation",
      desc: "A properly functioning chimney safely directs smoke, gases, and heat out of the building while improving indoor air quality.",
    },
    {
      icon: "flame",
      title: "Fire Protection",
      desc: "Regular inspections, cleaning, and maintenance help reduce fire hazards caused by creosote buildup and chimney deterioration.",
    },
    {
      icon: "shield",
      title: "Weather Resistance",
      desc: "Components such as chimney crowns, caps, flashing, and liners help protect against water intrusion and weather damage.",
    },
    {
      icon: "building",
      title: "Structural Integrity",
      desc: "Masonry bricks, mortar joints, and supporting components work together to maintain long-term chimney stability.",
    },
    {
      icon: "wrench",
      title: "Preventive Maintenance",
      desc: "Routine chimney services help identify minor issues early before they become costly structural repairs.",
    },
    {
      icon: "home",
      title: "Reliable Home Comfort",
      desc: "A well-maintained chimney system supports fireplaces and heating systems while helping keep your property safe and comfortable.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Understanding Chimneys
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">
            What A <em className="text-secondary italic">Chimney Does</em>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-loose text-stone-300">
            A chimney safely directs smoke, gases, and heat from fireplaces,
            furnaces, or heating systems out of the building. A properly
            functioning chimney improves indoor air quality and reduces fire
            risks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {content.map((item) => {
            const Icon = ICON_MAP[item.icon];

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
                  <Icon size={18} className="text-secondary" />
                </div>

                <h3 className="mb-3 font-serif text-xl leading-snug text-stone-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-loose text-stone-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Chimney Crown",
            "Flue Liner",
            "Masonry Bricks",
            "Chimney Cap",
          ].map((component) => (
            <div
              key={component}
              className="border border-secondary/20 bg-background p-5 text-center"
            >
              <p className="font-serif text-lg text-stone-900">
                {component}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}