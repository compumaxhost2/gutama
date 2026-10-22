import { Award, Home, Ruler, Shield, Users } from "lucide-react";

const BENEFITS = [
  {
    icon: Home,
    title: "Increased Living Space",
    desc: "Add functional space without moving to a new home.",
  },
  {
    icon: Award,
    title: "Higher Property Value",
    desc: "Well-designed additions significantly increase resale value.",
  },
  {
    icon: Users,
    title: "Better Lifestyle Comfort",
    desc: "Improve layout, privacy, and daily usability.",
  },
  {
    icon: Ruler,
    title: "Custom Design Options",
    desc: "Build spaces tailored to your exact needs.",
  },
  {
    icon: Shield,
    title: "Cost-Effective Expansion",
    desc: "Often more affordable than purchasing a new home.",
  },
];

export function AdditionsBenefitsSection() {
  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Why Clients Choose Us
            </p>
            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
              <em className="text-primary italic">Benefits</em> of Home Additions
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
