import {
Award,
Home,
Sun,
TrendingUp,
Wind,
} from "lucide-react";

const ICON_MAP = {
home: Home,
sun: Sun,
trending: TrendingUp,
wind: Wind,
award: Award,
} as const;

export function DormersBenefitsSection() {
const content: Array<{
icon: keyof typeof ICON_MAP;
title: string;
desc: string;
}> = [
{
icon: "home",
title: "Increased Living Space",
desc: "Transforms unused attic areas into functional rooms such as bedrooms, offices, or storage.",
},
{
icon: "sun",
title: "More Natural Light",
desc: "Improves brightness and reduces reliance on artificial lighting.",
},
{
icon: "trending",
title: "Higher Property Value",
desc: "Dormers significantly increase resale value and buyer appeal.",
},
{
icon: "wind",
title: "Better Ventilation",
desc: "Helps reduce moisture buildup, heat retention, and attic humidity.",
},
{
icon: "award",
title: "Improved Home Design",
desc: "Enhances exterior appearance and architectural balance.",
},
];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Benefits
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Benefits of
            <br />
            <em className="text-primary italic">Dormer Installation</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5">
      {content.map((benefit) => {
        const Icon = ICON_MAP[benefit.icon];

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
  </div>
</section>

);
}
