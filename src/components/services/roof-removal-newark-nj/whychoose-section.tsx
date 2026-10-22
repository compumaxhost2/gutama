import {
  Award,
  BadgeCheck,
  Clock,
  DollarSign,
  HardHat,
  Shield,
} from "lucide-react";

const REASONS = [
  {
    icon: Shield,
    title: "Licensed Roofing Contractor",
    desc: "Professional roof removal and replacement services performed by experienced roofing contractors serving Newark and Essex County.",
  },
  {
    icon: DollarSign,
    title: "Affordable Roof Replacement",
    desc: "Cost-effective roofing solutions designed to fit your budget without sacrificing quality or long-term performance.",
  },
  {
    icon: BadgeCheck,
    title: "Free Estimates",
    desc: "Detailed roof inspections and transparent project estimates with no obligation.",
  },
  {
    icon: HardHat,
    title: "Experienced Professionals",
    desc: "Local roofing experts with extensive experience handling residential and commercial roof tear-off projects.",
  },
  {
    icon: Award,
    title: "Quality Materials & Workmanship",
    desc: "Premium roofing products installed according to manufacturer specifications and industry best practices.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable Service",
    desc: "Efficient project completion, dependable communication, and professional job site management from start to finish.",
  },
];

export function RoofRemovalWhyChooseSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Why Homeowners Choose Us
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Why Choose
            <br />
            <em className="text-primary italic">Gutama Roofing?</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            We combine professional workmanship, quality materials, and local
            roofing expertise to deliver dependable roof removal and replacement
            solutions throughout Newark and Essex County.
          </p>
        </div>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
                <reason.icon
                  size={18}
                  className="text-primary"
                />
              </div>

              <h3 className="mb-3 font-serif text-xl text-black">
                {reason.title}
              </h3>

              <p className="text-sm leading-loose font-medium text-black">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}