import {
  Award,
  Clock,
  Home,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Long Lifespan",
    desc: "Slate roofs can last over 100 years, making them a long-term investment.",
  },
  {
    icon: Shield,
    title: "High Weather Resistance",
    desc: "Performs exceptionally well against heavy rain, snow, wind storms, and fire exposure.",
  },
  {
    icon: Award,
    title: "Low Maintenance",
    desc: "Requires fewer repairs compared to asphalt shingles or wood roofing systems.",
  },
  {
    icon: TrendingUp,
    title: "Energy Efficiency",
    desc: "Natural slate provides thermal stability, helping regulate indoor temperatures.",
  },
  {
    icon: Star,
    title: "Premium Property Value",
    desc: "Enhances curb appeal and increases resale value.",
  },
  {
    icon: Home,
    title: "Timeless Appearance",
    desc: "Creates an elegant, high-end architectural look that remains attractive for decades.",
  },
];

export function SlateRoofBenefitsSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Benefits
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Benefits of
            <em className="text-primary italic"> Slate Roofing</em>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            Slate roofing offers unmatched durability, beauty, and long-term
            value, making it one of the most premium roofing systems available.
          </p>
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