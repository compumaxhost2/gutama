import {
  Shield,
  Droplets,
  Hammer,
  BadgeCheck,
  Wallet,
  House,
} from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Proper Sealing & Waterproofing",
    desc: "Professional installation prevents water intrusion, moisture damage, and hidden structural issues.",
  },
  {
    icon: Shield,
    title: "Correct Insulation Performance",
    desc: "Properly installed siding helps improve energy efficiency and maintain indoor comfort year-round.",
  },
  {
    icon: Hammer,
    title: "Long-Lasting Durability",
    desc: "Expert craftsmanship ensures siding systems withstand New Jersey's changing weather conditions.",
  },
  {
    icon: BadgeCheck,
    title: "Code-Compliant Installation",
    desc: "All work is completed according to current building standards and manufacturer requirements.",
  },
  {
    icon: Wallet,
    title: "Reduced Maintenance Costs",
    desc: "Quality installation minimizes future repairs and helps extend the lifespan of your siding system.",
  },
  {
    icon: House,
    title: "Built for New Jersey Homes",
    desc: "We install siding solutions specifically designed to perform in New Jersey's climate and seasonal conditions.",
  },
];

export function SidingWhyChooseSection() {
  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Why Choose Professional Contractors
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Why Homeowners Trust
            <br />
            <em className="text-primary italic">Professional Siding Installation</em>
          </h2>

          <div className="mx-auto mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            Siding installation requires precision and experience. Poor
            installation can lead to water leaks, insulation failure, and
            costly repairs. Professional installation ensures long-term
            performance, durability, and protection.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

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